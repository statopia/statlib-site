#!/usr/bin/env bash
# scripts/deploy.sh — build the static site locally and sync it to the VPS.
#
# The site is served by the `statlib-site` nginx container on the Finnish VPS
# (compose file: /home/web/statlib-site/docker-compose.yml), which bind-mounts
# /home/web/statlib-site/dist. Nginx Proxy Manager (proxy-app-1) terminates
# TLS and forwards the public hostname to http://statlib-site:80 over the
# shared proxy_default docker network.
#
# Deploying is therefore just: build → rsync dist. No container restart needed;
# nginx serves whatever is in the bind mount.
#
# Usage (from repo root):  ./scripts/deploy.sh

set -euo pipefail

VPS_USER="web"
VPS_HOST="204.168.225.240"
VPS_DIR="/home/web/statlib-site"
SMOKE_URL="http://127.0.0.1:8090/"   # host-local port of the statlib-site container
SITE_URL="https://statlib.statopia.ai/"

cd "$(dirname "$0")/.."

echo "==> Building site"
npm run build

echo "==> Syncing dist/ to ${VPS_USER}@${VPS_HOST}:${VPS_DIR}/dist/"
rsync -az --delete dist/ "${VPS_USER}@${VPS_HOST}:${VPS_DIR}/dist/"

echo "==> Internal smoke test"
code=$(ssh "${VPS_USER}@${VPS_HOST}" "curl -s -o /dev/null -w '%{http_code}' ${SMOKE_URL}")
if [ "$code" != "200" ]; then
  echo "ERROR: internal smoke test returned HTTP $code (expected 200)"
  exit 1
fi
echo "OK: container is serving (HTTP 200)"

echo "==> Public HTTPS smoke test"
code=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' "${SITE_URL}")
if [ "$code" != "200" ]; then
  echo "ERROR: ${SITE_URL} returned HTTP $code (expected 200)"
  exit 1
fi
echo "OK: ${SITE_URL} is serving (HTTP 200)"
