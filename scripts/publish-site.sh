#!/usr/bin/env bash
# Builds the site and publishes ONLY the built files (out/) to the public repo that serves
# https://cabreraharry.github.io. The source code stays in the private My_Website_Portfolio repo.
# Usage: bash scripts/publish-site.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_REPO="https://github.com/cabreraharry/cabreraharry.github.io.git"

cd "$ROOT"
npm run build

TMP="$(mktemp -d)"
cp -r out/. "$TMP/"
touch "$TMP/.nojekyll" # stops GitHub Pages from hiding the _next/ folder
cd "$TMP"
git init -q -b main
git add -A
git commit -q -m "Publish site (source: My_Website_Portfolio @ $(git -C "$ROOT" rev-parse --short HEAD))"
git push -q --force "$PUBLIC_REPO" main
cd "$ROOT"
rm -rf "$TMP"
echo "Published. Live in about a minute: https://cabreraharry.github.io/"
