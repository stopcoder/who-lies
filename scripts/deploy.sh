#!/usr/bin/env bash
# Deploy dist/ to gh-pages branch on origin.
# Force-pushes gh-pages — main branch unaffected.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="$(mktemp -d -t who-lies-ghpages-XXXXXX)"
REMOTE_URL="$(git -C "$REPO_ROOT" remote get-url origin)"
GIT_USER_NAME="$(git -C "$REPO_ROOT" config user.name)"
GIT_USER_EMAIL="$(git -C "$REPO_ROOT" config user.email)"
BASE_PATH="/who-lies"

cleanup() { rm -rf "$TMP_DIR"; }
trap cleanup EXIT

echo "==> 1/4 Export web bundle"
cd "$REPO_ROOT"
rm -rf dist
npx expo export --platform web

echo "==> 2/4 Generate PWA icons"
SRC_SVG="assets/images/app-icon.svg"
RENDER_DIR="$(mktemp -d -t who-lies-icon-XXXXXX)"
qlmanage -t -s 1024 -o "$RENDER_DIR" "$SRC_SVG" >/dev/null 2>&1
RENDERED="$RENDER_DIR/app-icon.svg.png"
sips -Z 180 "$RENDERED" --out dist/apple-touch-icon.png >/dev/null
sips -Z 192 "$RENDERED" --out dist/icon-192.png >/dev/null
sips -Z 512 "$RENDERED" --out dist/icon-512.png >/dev/null
rm -rf "$RENDER_DIR"

cat > dist/manifest.webmanifest <<EOF
{
  "name": "谁是卧底 · Wer lügt?",
  "short_name": "谁是卧底",
  "start_url": "${BASE_PATH}/",
  "scope": "${BASE_PATH}/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0f0524",
  "theme_color": "#1a0b2e",
  "icons": [
    { "src": "${BASE_PATH}/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "${BASE_PATH}/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
EOF

echo "==> 3/4 Inject PWA meta tags into HTML"
META_TAGS=$(cat <<EOF
    <link rel="manifest" href="${BASE_PATH}/manifest.webmanifest">
    <link rel="apple-touch-icon" sizes="180x180" href="${BASE_PATH}/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="谁是卧底">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#1a0b2e">
    <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
EOF
)
# Insert META_TAGS before </head> in every .html
for f in dist/*.html; do
  python3 -c "
import sys, pathlib
p = pathlib.Path('$f')
html = p.read_text()
inject = '''${META_TAGS}
'''
html = html.replace('</head>', inject + '</head>', 1)
p.write_text(html)
"
done

# 404 fallback + jekyll opt-out
cp dist/index.html dist/404.html
touch dist/.nojekyll

echo "==> 4/4 Force-push to gh-pages"
cp -R dist/. "$TMP_DIR/"
cd "$TMP_DIR"
git init -q -b gh-pages
git remote add origin "$REMOTE_URL"
git add -A
git -c user.name="$GIT_USER_NAME" -c user.email="$GIT_USER_EMAIL" \
  commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f -u origin gh-pages

echo ""
echo "✓ Deployed. Live at: https://stopcoder.github.io/who-lies/"
