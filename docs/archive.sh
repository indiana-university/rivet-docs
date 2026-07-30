#!/usr/bin/env bash
# archive.sh
# Downloads v1.rivet.iu.edu from the Wayback Machine and prepares it for GitHub Pages.
#
# Usage:
#   chmod +x archive.sh
#   ./archive.sh
#
# Requirements: wget, python3

set -euo pipefail

SNAPSHOT="20250522005402"
WB_BASE="https://web.archive.org/web/${SNAPSHOT}"
START_URL="${WB_BASE}/https://v1.rivet.iu.edu/"
SITE_DIR="site"

echo "==> Archiving v1.rivet.iu.edu from Wayback Machine (snapshot ${SNAPSHOT})..."
echo "    This may take 10–30 minutes depending on site size."
echo ""

mkdir -p "$SITE_DIR"

wget \
  --mirror \
  --page-requisites \
  --continue \
  --convert-links \
  --adjust-extension \
  --directory-prefix="$SITE_DIR" \
  --domains="web.archive.org" \
  --accept-regex='web\.archive\.org/web/[^/]+/https?://v1\.rivet\.iu\.edu' \
  --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" \
  -e robots=off \
  --wait 1 \
  --random-wait \
  "$START_URL"

echo ""
echo "==> Moving files to repo root..."

# wget saves under site/web.archive.org/web/<snapshot>/https:/v1.rivet.iu.edu/
# Search up to depth 4 to find the domain directory across any snapshot timestamp
INNER=$(find "${SITE_DIR}/web.archive.org/web" -maxdepth 4 -type d -name "v1.rivet.iu.edu" 2>/dev/null \
  | sort | head -1)

if [ -n "$INNER" ] && [ -d "$INNER" ]; then
  mkdir -p docs
  cp -r "${INNER}/." docs/
  echo "    Files moved to docs/ (from $INNER)"
else
  echo "    WARNING: Could not find v1.rivet.iu.edu directory inside $SITE_DIR/"
  echo "    Contents of $SITE_DIR/:"
  find "$SITE_DIR" -maxdepth 4 -type d
  exit 1
fi

echo ""
echo "==> Adding .nojekyll (prevents GitHub Pages from running Jekyll)..."
touch docs/.nojekyll

echo ""
echo "==> Cleaning up Wayback Machine toolbar artifacts..."
python3 strip_wb.py

echo ""
echo "==> Done! Review the docs/ folder, then:"
echo "    git add ."
echo "    git commit -m 'Archive v1.rivet.iu.edu'"
echo "    git push"
