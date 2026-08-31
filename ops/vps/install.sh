#!/usr/bin/env bash
# Install/update the fixed Statlib-only VPS deployment entrypoints.
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
BIN_DIR="/home/web/bin"
CRON_LINE=$(cat "$SCRIPT_DIR/statlib-site.cron")

[ "$(id -un)" = "web" ] || { echo "ERROR: run as VPS user web" >&2; exit 1; }
install -d -m 755 "$BIN_DIR"
install -m 755 "$SCRIPT_DIR/deploy-statlib-site" "$BIN_DIR/deploy-statlib-site"
install -m 755 "$SCRIPT_DIR/poll-deploy-statlib-site" "$BIN_DIR/poll-deploy-statlib-site"

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT
crontab -l 2>/dev/null | grep -v 'poll-deploy-statlib-site' > "$tmp" || true
printf '%s\n' "$CRON_LINE" >> "$tmp"
crontab "$tmp"

bash -n "$BIN_DIR/deploy-statlib-site"
bash -n "$BIN_DIR/poll-deploy-statlib-site"
echo "Installed Statlib deploy scripts and cron entry."
