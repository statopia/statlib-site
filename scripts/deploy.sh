#!/usr/bin/env bash
# Deploy the pushed main commit through the VPS's statlib-only deploy wrapper.

set -euo pipefail

VPS_USER="web"
VPS_HOST="204.168.225.240"
SITE_URL="https://statlib.statopia.ai"

cd "$(dirname "$0")/.."

if [ -n "$(git status --porcelain)" ]; then
  echo "ERROR: working tree is not clean" >&2
  exit 1
fi

npm ci
npm run build

git fetch origin main
local_sha=$(git rev-parse HEAD)
remote_sha=$(git rev-parse origin/main)
if [ "$local_sha" != "$remote_sha" ]; then
  echo "ERROR: HEAD ($local_sha) is not the pushed origin/main ($remote_sha)" >&2
  exit 1
fi

ssh "${VPS_USER}@${VPS_HOST}" /home/web/bin/deploy-statlib-site

for route in / /library /featured /about /report; do
  code=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' "${SITE_URL}${route}")
  if [ "$code" != "200" ]; then
    echo "ERROR: ${SITE_URL}${route} returned HTTP $code" >&2
    exit 1
  fi
done

echo "OK: ${SITE_URL} deployed from ${local_sha}"
