#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/home/web/statlib-site-src"
EXPECTED_SHA=$(git -C "$REPO_DIR" rev-parse origin/main)
DEPLOYED_SHA=$(cat /home/web/.statlib-site-deployed-sha)
IMAGE_SHA=$(docker inspect statlib-site --format '{{index .Config.Labels "org.opencontainers.image.revision"}}')
HEALTH=$(docker inspect statlib-site --format '{{.State.Health.Status}}')

[ "$EXPECTED_SHA" = "$DEPLOYED_SHA" ]
[ "$EXPECTED_SHA" = "$IMAGE_SHA" ]
[ "$HEALTH" = "healthy" ]
cmp -s "$REPO_DIR/ops/vps/deploy-statlib-site" /home/web/bin/deploy-statlib-site
cmp -s "$REPO_DIR/ops/vps/poll-deploy-statlib-site" /home/web/bin/poll-deploy-statlib-site
crontab -l | grep -F -x "$(cat "$REPO_DIR/ops/vps/statlib-site.cron")" >/dev/null

for route in / /library /featured /about /report; do
  curl -fsS "https://statlib.statopia.ai${route}" >/dev/null
done

echo "OK: scripts, cron, image SHA, health and public routes are consistent."
