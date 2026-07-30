#!/usr/bin/env python3
"""
backfill_hugo.py
Fills in pages the Wayback Machine never captured at all (confirmed via its
CDX API -- zero snapshots at any timestamp) by pulling them from a live Hugo
dev server running the original v1 source (indiana-university/rivet-docs,
started locally with `gulp serve`, default http://localhost:3000) and
splicing their unique content into our existing page chrome, so the
header/nav/footer/relative-link scheme stays identical to the rest of docs/.

Covers:
- content-guide/microcopy/* and content-guide/style-basics/* (9 pages)
- add-ons/rivet-icons, rivet-collapsible, rivet-shell, rivet-switch (4 pages)

Run with the Hugo dev server up, after consolidate.py has regenerated docs/.
"""

import posixpath
import re
import urllib.request
from pathlib import Path

DOCS_DIR = Path("docs")
HUGO_BASE = "http://localhost:3000"

CONTENT_GUIDE_PAGES = [
    "content-guide/microcopy/what-is-microcopy",
    "content-guide/microcopy/address-the-user",
    "content-guide/microcopy/active-voice",
    "content-guide/microcopy/plain-language-and-structure",
    "content-guide/style-basics/capitalization",
    "content-guide/style-basics/naming-conventions",
    "content-guide/style-basics/numbers",
    "content-guide/style-basics/punctuation",
    "content-guide/style-basics/technical-terms-and-acronyms",
]

ADDON_PAGES = [
    "add-ons/rivet-icons",
    "add-ons/rivet-collapsible",
    "add-ons/rivet-shell",
    "add-ons/rivet-switch",
]


def fetch(page):
    url = f"{HUGO_BASE}/{page}/"
    with urllib.request.urlopen(url) as r:
        return r.read().decode("utf-8", errors="ignore")


def span(content, start_marker, end_marker, include_end=False):
    start = content.index(start_marker)
    end = content.index(end_marker, start)
    return content[start:end + (len(end_marker) if include_end else 0)]


def rewrite_hugo_links(content, page_rel_dir):
    """Convert Hugo dev-server links (absolute localhost:3000 or root-relative)
    into paths relative to page_rel_dir, matching our docs/ file layout
    (every section maps to a directory + index.html)."""

    def to_local_path(url_path):
        url_path = url_path.split('?')[0].split('#')[0].strip('/')
        if not url_path:
            return "index.html"
        return f"{url_path}/index.html"

    def repl(m):
        attr, val = m.group(1), m.group(2)
        frag = ''
        if '#' in val:
            val, frag = val.split('#', 1)
            frag = '#' + frag
        if val.startswith(f"{HUGO_BASE}/"):
            local = to_local_path(val[len(HUGO_BASE):])
        elif val.startswith('/') and not val.startswith('//'):
            local = to_local_path(val)
        else:
            return m.group(0)  # external URL, mailto:, fragment-only, etc.
        rel = posixpath.relpath(local, page_rel_dir)
        return f'{attr}="{rel}{frag}"'

    return re.sub(r'(href|src)="([^"]*)"', repl, content)


def backfill_content_guide():
    shell = (DOCS_DIR / "content-guide.html").read_text(encoding="utf-8")

    def deepen(m):
        attr, val = m.group(1), m.group(2)
        if re.match(r'^(https?:)?//|^https?:|^mailto:|^#|^javascript:', val):
            return m.group(0)
        return f'{attr}="../../../{val}"'

    shell_deep = re.sub(r'(href|src)="([^"]*)"', deepen, shell)
    shell_title = span(shell_deep, '<title>', '</title>', include_end=True)
    shell_desc = span(shell_deep, '<meta name="description"', '>', include_end=True)
    shell_wrap = span(shell_deep, '<div class="rvtd-wrap">', '</main>')

    for page in CONTENT_GUIDE_PAGES:
        dest = DOCS_DIR / page / "index.html"
        print(f"  {page} -> {dest}")
        hugo = fetch(page)
        hugo = rewrite_hugo_links(hugo, page)

        hugo_title = span(hugo, '<title>', '</title>', include_end=True)
        hugo_desc = span(hugo, '<meta name="description"', '>', include_end=True)
        hugo_wrap = span(hugo, '<div class="rvtd-wrap">', '</main>')

        page_html = shell_deep.replace(shell_title, hugo_title, 1)
        page_html = page_html.replace(shell_desc, hugo_desc, 1)
        page_html = page_html.replace(shell_wrap, hugo_wrap, 1)

        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(page_html, encoding="utf-8")


def backfill_addons():
    shell = (DOCS_DIR / "add-ons" / "rivet-datepicker" / "index.html").read_text(encoding="utf-8")
    shell_title = span(shell, '<title>', '</title>', include_end=True)
    shell_desc = span(shell, '<meta name="description"', '>', include_end=True)
    shell_wrap = span(shell, '<div class="rvt-container rvt-container--junior rvt-container--center rvtd-article-container',
                       '</main>')

    for page in ADDON_PAGES:
        dest = DOCS_DIR / page / "index.html"
        print(f"  {page} -> {dest}")
        hugo = fetch(page)
        hugo = rewrite_hugo_links(hugo, page)

        hugo_title = span(hugo, '<title>', '</title>', include_end=True)
        hugo_desc = span(hugo, '<meta name="description"', '>', include_end=True)
        hugo_wrap = span(hugo, '<div class="rvt-container rvt-container--junior rvt-container--center rvtd-article-container',
                          '</main>')

        page_html = shell.replace(shell_title, hugo_title, 1)
        page_html = page_html.replace(shell_desc, hugo_desc, 1)
        page_html = page_html.replace(shell_wrap, hugo_wrap, 1)

        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(page_html, encoding="utf-8")


def main():
    print("Backfilling content-guide/ pages from Hugo...")
    backfill_content_guide()
    print("Backfilling add-ons/ pages from Hugo...")
    backfill_addons()
    print("Done.")


if __name__ == '__main__':
    main()
