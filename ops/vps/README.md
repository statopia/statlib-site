# VPS deployment operations

These files are the source-controlled copies of the Statlib-only production
deployment entrypoints installed on the Finnish VPS.

## Files

- `deploy-statlib-site`: fetches `origin/main`, builds the immutable image,
  recreates only `statlib-site`, waits for health, verifies public routes, and
  restores the previous image (or the legacy container during first migration)
  on failure.
- `poll-deploy-statlib-site`: compares GitHub `main` with the last deployed SHA
  and calls the deployer only when it changes.
- `statlib-site.cron`: two-minute polling schedule.
- `install.sh`: idempotently installs the scripts and cron entry as VPS user
  `web`.
- `verify.sh`: checks installed-script drift, cron, image/source SHA, container
  health, and public routes.
- `keys/operator-id_ed25519.pub`: public half of the local operator key.

## Install or update on the VPS

The repository checkout is `/home/web/statlib-site-src`:

```bash
cd /home/web/statlib-site-src
./ops/vps/install.sh
./ops/vps/verify.sh
```

The installed scripts intentionally live outside the checkout in `/home/web/bin`.
A broken repository commit therefore cannot silently rewrite the currently
trusted entrypoint before it has passed review and installation.

## Secrets and keys

The automatic poller reads the public GitHub repository over HTTPS, so it needs
no GitHub token, deploy key, or Actions secret. The operator key is used only for
manual SSH administration:

```text
local private key: ~/.ssh/id_ed25519               (never commit or copy)
local public key:  ~/.ssh/id_ed25519.pub
repo public copy:  ops/vps/keys/operator-id_ed25519.pub
VPS authorization: /home/web/.ssh/authorized_keys
fingerprint: SHA256:IWLCRjiwdqsAQM84w02rLNbQgb/9siVaxDq0W8bkvU4
```

Private keys, NPM credentials, certificate private keys, and database backups
must never be committed. NPM owns its TLS private material under its persistent
`/etc/letsencrypt` mount.

If the GitHub repository becomes private later, create a new read-only deploy
key dedicated to this repository: keep its private half only on the VPS and add
only its public half under GitHub repository Deploy Keys. Do not reuse the
operator key or upload the VPS private key to GitHub Actions.
