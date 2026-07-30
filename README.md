# Rivet documentation site

> [!NOTE]
> [Rivet v1 docs](https://indiana-university.github.io/rivet-docs/) (2019–2022) is a public archive of this repo.
>
> See the latest documentation at the [Rivet site](https://rivet.iu.edu/).

## What's on this branch

The `archive` branch does not contain the Rivet source. It contains a static, self-contained snapshot of the old **v1** docs site (`v1.rivet.iu.edu`), rebuilt from the [Wayback Machine](https://web.archive.org/), and the scripts used to produce it:

- `docs/` — the finished static site. This is what GitHub Pages serves.
- `archive.sh` — mirrors `v1.rivet.iu.edu` from the Wayback Machine into `site/`.
- `consolidate.py` — merges every snapshot in `site/` into a clean `docs/`, rewriting Wayback-wrapped links back to plain relative paths and stripping the Wayback toolbar/injected scripts.
- `backfill_hugo.py` — fills in the handful of pages the Wayback Machine never captured at all, by pulling them from a locally running copy of the original Hugo source.
- `extra-assets/` — a few font files that `wget` couldn't discover on its own (they're only referenced from inside CSS `url()`, which `wget --page-requisites` doesn't parse), checked in so `consolidate.py` can splice them back in.

`site/` (the raw wget mirror, tens of thousands of files) is **not** committed — it's gitignored. Regenerate it locally by running `archive.sh` if you need to rebuild from scratch.

## How this was built

1. **Mirror the archive.** `web.archive.org` serves different embedded resources (CSS, JS, images) from whichever snapshot timestamp is nearest in time to the page, so one `wget --mirror` run pulls in dozens of distinct snapshot directories under `site/web.archive.org/web/`.

   ```bash
   ./archive.sh
   ```

   Requires `wget`. Takes 10–30 minutes.

2. **Consolidate.** For every unique page path, keep the most recent snapshot, rewrite all Wayback-wrapped URLs to plain relative paths, strip the Wayback toolbar/tracking scripts, and drop the `/blog/` pages (by the time those were snapshotted, v1's blog had already been migrated to the new site's chrome — links to it now point at the live `rivet.iu.edu/blog/` instead).

   ```bash
   python3 consolidate.py
   ```

   No dependencies beyond the Python 3 standard library — no `pip install` needed.

3. **Backfill the gaps.** A small number of pages (`content-guide/microcopy/*`, `content-guide/style-basics/*`, and four `add-ons/*` pages) were never captured by the Wayback Machine at all. These were pulled from a local Hugo dev server running the **v1-era source** of this same repo (an older checkout of [`indiana-university/rivet-docs`](https://github.com/indiana-university/rivet-docs), before the v2 migration — started with `gulp serve`, default `http://localhost:3000`), splicing just the unique content into the existing page chrome so nav/header/footer stay identical to the rest of the site.

   ```bash
   python3 backfill_hugo.py
   ```

   Only needed if you're regenerating the archive from scratch — requires the original v1 source checked out and running locally first.

`docs/` in this repo is already the finished output of that pipeline — you don't need to re-run any of it just to view or test the site.

## Testing locally

`docs/` is plain static HTML/CSS/JS with relative links, so any static file server works:

```bash
cd docs
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## GitHub Pages

There's no GitHub Actions workflow in this repo, and `docs/.nojekyll` is present, so the live site at https://indiana-university.github.io/rivet-docs/ is served via the classic **Settings → Pages → Deploy from a branch** option, pointed at `archive` / `/docs`.
