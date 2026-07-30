#!/usr/bin/env python3
"""
consolidate.py
Merges v1.rivet.iu.edu content from all Wayback Machine snapshot directories
into a clean docs/ directory:

- Picks the most recent snapshot of each page.
- Rewrites Wayback-wrapped URLs in HTML to truly-relative paths (works both
  locally and on GitHub Pages subpaths), preserving #fragments.
- Strips the Wayback Machine's injected toolbar/rewriting scripts
  (bundle-playback.js, wombat.js, ruffle.js, __wm.init/__wm.wombat, the
  banner/iconochive CSS, and the trailing f5_cspm + archive footer comments)
  so the live site doesn't keep monkey-patching fetch/XHR on GitHub Pages.
- Cleans up asset filenames that still carry a literal "?query" from the
  original cache-busting query string (e.g. "style.css?1705419739.css")
  which GitHub Pages can't map to a correct Content-Type.
- Rewrites Wayback-wrapped URLs embedded *inside* CSS/JS content (fonts,
  background images, doc links), not just HTML, restoring external URLs
  and localizing v1.rivet.iu.edu assets.
- Pulls in fonts that wget's --page-requisites never fetched (they're only
  referenced from inside CSS `url()`, which wget doesn't parse) from
  extra-assets/.
- Drops the /blog/ pages: by the time these snapshots were captured, v1's
  blog had already been migrated to share the new (Rivet 2) site's global
  header/nav, so the archived copies don't show v1 chrome at all. Every
  link to them is redirected to the live https://rivet.iu.edu/blog/ instead.

Run this after archive.sh has populated site/.
"""

import os
import posixpath
import re
import shutil
import urllib.parse
from pathlib import Path

SITE_DIR = Path("site/web.archive.org/web")
DOCS_DIR = Path("docs")
EXTRA_ASSETS_DIR = Path("extra-assets")

# Domains we recovered separately (wget's page-requisites can't see into CSS
# `url()` references) and checked into extra-assets/. Maps a source domain to
# the docs/ subdirectory its files should live in.
EXTRA_ASSET_DOMAINS = {
    "fonts.iu.edu": "fonts",
}

# These pages were captured after v1's /blog/ section had already been
# migrated to share the new site's global header/nav (see module docstring)
# — drop them rather than serve archived pages with the wrong site's chrome.
EXCLUDED_PAGES = {
    "blog.html",
    "blog/index.html",
    "blog/release-beta-2/index.html",
    "blog/release-beta-3/index.html",
    "blog/release-beta-4/index.html",
}
LIVE_BLOG_URL = "https://rivet.iu.edu/blog/"

# ── Snapshot filtering ───────────────────────────────────────────────────────

def is_html_snapshot(name):
    """Pure HTML snapshot: 14-digit timestamp only, no cs_/js_/im_ suffix."""
    return bool(re.match(r'^\d{14}$', name))

# ── Page discovery ───────────────────────────────────────────────────────────

def find_all_pages():
    """
    Scan all pure-HTML snapshot dirs and return a dict:
      rel_path_str -> (timestamp, Path)
    keeping the most recent snapshot for each unique path.
    """
    pages = {}
    for snap_dir in SITE_DIR.iterdir():
        if not is_html_snapshot(snap_dir.name):
            continue
        rivet_dir = snap_dir / "https:" / "v1.rivet.iu.edu"
        if not rivet_dir.exists():
            continue
        ts = snap_dir.name
        for f in rivet_dir.rglob("*.html"):
            rel = str(f.relative_to(rivet_dir))
            if rel in EXCLUDED_PAGES:
                continue
            if rel not in pages or ts > pages[rel][0]:
                pages[rel] = (ts, f)
    return pages

def normalize_asset_path(raw_path):
    """
    Decode percent-escapes and drop any query string, giving the canonical
    on-disk asset path (e.g. "/css/style.css%3F1705419739.css" or
    "css/style.css?1705419739.css" both become "css/style.css").
    """
    decoded = urllib.parse.unquote(raw_path)
    return decoded.split('?')[0]

def find_local_assets():
    """
    Collect all non-HTML files under v1.rivet.iu.edu across all snapshot dirs.
    Returns dict: clean_rel_path_str -> Path (first found wins — assets
    rarely change), with any "?query" stripped from the destination name.
    """
    assets = {}
    for snap_dir in SITE_DIR.iterdir():
        rivet_dir = snap_dir / "https:" / "v1.rivet.iu.edu"
        if not rivet_dir.exists():
            continue
        for f in rivet_dir.rglob("*"):
            if f.is_dir() or f.suffix == ".html":
                continue
            rel = normalize_asset_path(str(f.relative_to(rivet_dir)))
            if rel not in assets:
                assets[rel] = f
    return assets

def find_extra_assets():
    """
    Assets that wget could never discover (only referenced from inside CSS
    `url()`, which --page-requisites doesn't parse) but were fetched
    separately and checked into extra-assets/<dest-dir>/.
    Returns dict: "<dest-dir>/<filename>" -> Path
    """
    assets = {}
    if not EXTRA_ASSETS_DIR.exists():
        return assets
    for f in EXTRA_ASSETS_DIR.rglob("*"):
        if f.is_dir():
            continue
        rel = str(f.relative_to(EXTRA_ASSETS_DIR))
        assets[rel] = f
    return assets

# ── Link rewriting (HTML) ────────────────────────────────────────────────────

# Relative WB path: ../../TIMESTAMP[modifier]/https:/DOMAIN/rest
# Produced by wget --convert-links
_REL_WB = re.compile(
    r'(?:\.\./)+'           # leading ../
    r'\d{14}[^/]*/'         # timestamp + optional modifier + /
    r'https?:/'             # literal "https:/" (single slash in fs path)
    r'(/[^"\'> \)]*)?'      # rest of path (starts with /)
    r'([^"\'> \)]*)'        # or no-leading-slash remainder
)

# Absolute WB URL: https://web.archive.org/web/TIMESTAMP[modifier]/<scheme>:...
# Wayback wraps any URI scheme it finds (http(s)://, but also mailto:, tel:, etc.)
_ABS_WB = re.compile(
    r'https://web\.archive\.org/web/\d{14}[^/]*/'
    r'([a-zA-Z][a-zA-Z0-9+.-]*:[^"\'> \)]*)'   # capture original URL/URI
)

def _split_fragment(url):
    """Split a URL into (path_and_query, '#fragment-or-empty')."""
    if '#' in url:
        base, frag = url.split('#', 1)
        return base, '#' + frag
    return url, ''

def _abs_to_rel(abs_path, from_rel_path, fragment=''):
    """Convert a root-absolute path to a relative path from from_rel_path's directory."""
    if not abs_path or abs_path == '/':
        abs_path = '/index.html'
    if not abs_path.startswith('/'):
        abs_path = '/' + abs_path
    from_dir = posixpath.dirname('/' + from_rel_path.replace(os.sep, '/'))
    return posixpath.relpath(abs_path, from_dir) + fragment

def fix_links(content, from_rel_path):
    """
    Rewrite WB URL patterns:
    - v1.rivet.iu.edu links  → truly-relative paths within docs/ (fragment preserved)
    - All other WB-wrapped URLs (CDNs, fonts, etc.) → restore original URL
    """

    def repl_rel(m):
        full = m.group(0)
        proto_idx = full.find('https:/')
        if proto_idx == -1:
            proto_idx = full.find('http:/')
        if proto_idx == -1:
            return full
        original_url = 'https://' + full[proto_idx + 7:].lstrip('/')
        path_part, fragment = _split_fragment(original_url)

        if 'v1.rivet.iu.edu' in path_part:
            abs_path = normalize_asset_path(
                re.sub(r'https?://v1\.rivet\.iu\.edu', '', path_part) or '/'
            )
            return _abs_to_rel(abs_path, from_rel_path, fragment)
        else:
            return normalize_asset_path(path_part) + fragment

    def repl_abs(m):
        original_url = m.group(1)
        path_part, fragment = _split_fragment(original_url)
        if 'v1.rivet.iu.edu' in path_part:
            abs_path = normalize_asset_path(
                re.sub(r'https?://v1\.rivet\.iu\.edu', '', path_part) or '/'
            )
            return _abs_to_rel(abs_path, from_rel_path, fragment)
        else:
            return normalize_asset_path(path_part) + fragment

    content = _REL_WB.sub(repl_rel, content)
    content = _ABS_WB.sub(repl_abs, content)
    return content

# Any relative link (at any "../" depth) into the excluded /blog/ pages,
# plus the one dead in-body link to a v1 post that was never captured.
_DEAD_BLOG_LINK = re.compile(
    r'href="(?:\.\./)*blog(?:\.html(?:#[^"]*)?|/index\.html|/release-beta-\d+/index\.html|/why-we-built-rivet)"'
)

def redirect_dead_blog_links(content):
    return _DEAD_BLOG_LINK.sub(f'href="{LIVE_BLOG_URL}"', content)

# ── Link rewriting (CSS/JS content) ──────────────────────────────────────────

def fix_asset_urls(content, from_rel_path, local_assets, extra_assets):
    """
    Rewrite absolute Wayback-wrapped URLs found *inside* CSS/JS file content
    (e.g. @font-face src, background-image, hardcoded doc links). wget's
    --page-requisites never touches these since it doesn't parse CSS, so
    they're still fully absolute-wayback-wrapped, not relative like the HTML.
    """

    def repl(m):
        original_url = m.group(1)
        path_part, fragment = _split_fragment(original_url)
        parsed = urllib.parse.urlsplit(path_part)
        domain = parsed.netloc

        if domain == 'v1.rivet.iu.edu':
            clean = normalize_asset_path(parsed.path.lstrip('/'))
            # Whether or not we actually have the asset, point at where it
            # belongs locally rather than leaving an external dependency.
            return _abs_to_rel(clean, from_rel_path, fragment)

        if domain in EXTRA_ASSET_DOMAINS:
            basename = posixpath.basename(parsed.path)
            dest_dir = EXTRA_ASSET_DOMAINS[domain]
            key = f"{dest_dir}/{basename}"
            if key in extra_assets:
                return _abs_to_rel(key, from_rel_path, fragment)
            # Not recovered — fall through to restoring the plain URL below.

        # External CDN/site we don't host locally: just drop the WB wrapper.
        return normalize_asset_path(path_part) + fragment

    return _ABS_WB.sub(repl, content)

# ── Wayback bootstrap removal ─────────────────────────────────────────────────

_WB_PATTERNS = [
    # Older-style toolbar insert
    re.compile(
        r'<!-- BEGIN WAYBACK TOOLBAR INSERT -->.*?<!-- END WAYBACK TOOLBAR INSERT -->',
        re.DOTALL
    ),
    # Newer-style header bootstrap: bundle-playback.js ... "End Wayback Rewrite JS Include"
    re.compile(
        r'<script[^>]*src="https://web-static\.archive\.org/[^"]*bundle-playback\.js[^"]*"[^>]*></script>'
        r'.*?<!-- End Wayback Rewrite JS Include -->',
        re.DOTALL
    ),
    # Any other web-static.archive.org script/link tags left behind
    re.compile(r'<script[^>]*src="https://web-static\.archive\.org/[^"]*"[^>]*></script>\s*'),
    re.compile(r'<link[^>]*href="https://web-static\.archive\.org/[^"]*"[^>]*/?>\s*'),
    # base href rewrite
    re.compile(r'<base href="https://web\.archive\.org[^"]*"[^>]*>'),
    # Unused Hugo theme leftover populated with a Wayback URL by the archive's rewriter
    re.compile(r'<script>\s*\n?\s*var baseURL = "[^"]*web\.archive\.org[^"]*";\s*\n?\s*</script>\s*'),
    # Trailing f5_cspm tracking script + archive.org footer comments (always last in file)
    re.compile(r'<script id="f5_cspm">.*', re.DOTALL),
    # Some captures skip the f5_cspm script and go straight to the footer
    # comment block — strip it directly so it isn't left dangling at EOF.
    re.compile(r'<!--\s*\n\s*FILE ARCHIVED ON.*', re.DOTALL),
]

def strip_wayback_bootstrap(content):
    for pattern in _WB_PATTERNS:
        content = pattern.sub('', content)
    return content

# ── Wayback bootstrap removal (CSS/JS assets) ────────────────────────────────
# Archive.org's playback proxy rewrites JS content server-side, wrapping it in
# a wombat shim that shadows window/document/etc with lookups that fall back
# to the real globals (harmless once served standalone, but dead weight and a
# reference to a self._wb_wombat that will never exist off archive.org). It
# also appends a "FILE ARCHIVED ON..." comment footer to every text asset.

_JS_WOMBAT_HEADER = re.compile(
    r'var _____WB\$wombat\$assign\$function_____=function\(name\)\{[^}]*\};'
    r'if\(!self\.__WB_pmw\)\{self\.__WB_pmw=function\(obj\)\{this\.__WB_source=obj;return this;\}\}'
    r'\{\n'
    r'(?:let \w+ = _____WB\$wombat\$assign\$function_____\("\w+"\);\n)+'
)
_JS_WOMBAT_FOOTER = re.compile(r'\n\}\s*\n*/\*\s*\n\s*FILE ARCHIVED ON.*', re.DOTALL)
_ARCHIVE_FOOTER_COMMENT = re.compile(r'/\*\s*\n\s*FILE ARCHIVED ON.*', re.DOTALL)

def strip_wayback_from_asset(content, rel_path):
    if rel_path.endswith('.js'):
        content = _JS_WOMBAT_HEADER.sub('', content)
        content = _JS_WOMBAT_FOOTER.sub('\n', content)
    else:
        content = _ARCHIVE_FOOTER_COMMENT.sub('', content)
    return content.rstrip('\n') + '\n'

# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    if not SITE_DIR.exists():
        print("ERROR: site/ not found. Run archive.sh first.")
        return

    print("Scanning for HTML pages...")
    pages = find_all_pages()
    print(f"  Found {len(pages)} unique pages across all snapshots")

    print("Scanning for local assets (CSS, JS, images)...")
    local_assets = find_local_assets()
    print(f"  Found {len(local_assets)} assets")

    print("Scanning for extra recovered assets (fonts, etc.)...")
    extra_assets = find_extra_assets()
    print(f"  Found {len(extra_assets)} extra assets")

    # Clear and recreate docs/
    if DOCS_DIR.exists():
        shutil.rmtree(DOCS_DIR)
    DOCS_DIR.mkdir()

    # Copy HTML pages with link rewriting + Wayback bootstrap stripping
    print("Writing docs/ ...")
    html_count = 0
    for rel_path, (ts, src) in sorted(pages.items()):
        dst = DOCS_DIR / rel_path
        dst.parent.mkdir(parents=True, exist_ok=True)
        try:
            content = src.read_text(encoding='utf-8', errors='ignore')
            content = strip_wayback_bootstrap(content)
            content = fix_links(content, rel_path)
            content = redirect_dead_blog_links(content)
            dst.write_text(content, encoding='utf-8')
            html_count += 1
        except Exception as e:
            print(f"  Warning ({rel_path}): {e}")
            shutil.copy2(src, dst)
            html_count += 1

    # Copy local assets (cleaning up "?query" filenames), rewriting CSS/JS content
    asset_count = 0
    for rel_path, src in local_assets.items():
        dst = DOCS_DIR / rel_path
        dst.parent.mkdir(parents=True, exist_ok=True)
        if rel_path.endswith(('.css', '.js')):
            content = src.read_text(encoding='utf-8', errors='ignore')
            content = strip_wayback_from_asset(content, rel_path)
            content = fix_asset_urls(content, rel_path, local_assets, extra_assets)
            dst.write_text(content, encoding='utf-8')
        else:
            shutil.copy2(src, dst)
        asset_count += 1

    # Copy extra recovered assets (fonts/, etc.)
    extra_count = 0
    for rel_path, src in extra_assets.items():
        dst = DOCS_DIR / rel_path
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        extra_count += 1

    # GitHub Pages: disable Jekyll
    (DOCS_DIR / ".nojekyll").touch()

    print(f"\nDone!")
    print(f"  HTML pages   : {html_count}")
    print(f"  Local assets : {asset_count}")
    print(f"  Extra assets : {extra_count}")
    print(f"\nReview docs/, then:")
    print("  git add .")
    print("  git commit -m 'Regenerate docs/ from consolidate.py'")
    print("  git push")

if __name__ == '__main__':
    main()
