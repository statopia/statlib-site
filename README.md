# statlib-site

Public showcase site for **statlib** — a machine-formalized library of statistics
theorems in Lean 4. Built with [Astro](https://astro.build) + Tailwind CSS,
self-hosted at [statlib.statopia.ai](https://statlib.statopia.ai) on the same
Finnish VPS as [prover.statopia.ai](https://prover.statopia.ai).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

## Where things live

| What | File |
|------|------|
| Site name, tagline, links, hero stats | `src/data/site.ts` |
| Library catalog (the /library content) | `src/data/theorems.ts` |
| Knowledge-graph page config (the /graph content) | `src/data/graph.ts` |
| Knowledge-graph artifact (98 SVGs + narratives) | `public/narratives/` |
| Pages (one file = one route)           | `src/pages/*.astro` |
| Shared shell (nav, footer, meta)       | `src/layouts/Layout.astro` |
| Reusable pieces                        | `src/components/*.astro` |
| Global styles + theme tokens           | `src/styles/global.css` |

Adding a page = adding a file under `src/pages/`. Docs/blog can be added later as
`.md`/`.mdx` without touching component code.

## Editing content

- **Text & links:** edit `src/data/site.ts`.
- **Library entries:** edit `src/data/theorems.ts`. Each entry has a `status`
  (`proved` / `wip` / `planned`) that drives its badge. Long term, generate this
  file from the statlib Lean sources so it stays in sync.
- **Technical report:** when ready, set `published = true` in
  `src/pages/report.astro` and fill in the PDF / arXiv links.
- **Knowledge graph:** the `/graph` page is a styled wrapper over a self-contained
  artifact in `public/narratives/` (master `index.html` + per-topic SVG dependency
  diagrams). To refresh it: (1) regenerate the narratives export
  (`core/kb/theme/narratives` in the prover repo), (2) replace the whole
  `public/narratives/` folder with the new output, (3) update the headline numbers
  / featured list in `src/data/graph.ts`. The page and nav entry stay unchanged —
  that's the point of the decoupled slot.

## Deploy

Production is `https://statlib.statopia.ai`, self-hosted on the Finnish VPS
(`web@204.168.225.240`) as an independent Docker container. It shares only the
`proxy_default` network with Nginx Proxy Manager; it is not part of the Prover
image or Compose project.

```text
statlib.statopia.ai -> Nginx Proxy Manager -> statlib-site:80
```

The repository owns the complete, reproducible deployment:

Operational scripts, installation, verification, rollback, and key-handling details live in `ops/vps/README.md`.

- `Dockerfile` builds the Astro site with Node 22, then copies `dist/` into Nginx.
- `docker-compose.yml` rebuilds and replaces only `statlib-site`.
- `nginx.conf` serves the static routes and immutable Astro assets.
- The VPS poller checks `origin/main` every two minutes and invokes a fixed local
  deploy wrapper only when the commit changes; no production key leaves the VPS.

For a manual deployment, first push the desired commit to `origin/main`, then run:

```bash
./scripts/deploy.sh
```

The VPS checkout lives at `/home/web/statlib-site-src`. A cron entry runs the fixed host wrapper
`/home/web/bin/poll-deploy-statlib-site` every two minutes. On a new commit it calls
`/home/web/bin/deploy-statlib-site`, which fetches `origin/main`, builds the image,
recreates only the Statlib container, waits for its health check, and verifies
both loopback and public HTTPS. Prover is never rebuilt or restarted.

To roll back, check out the previous known-good commit in the VPS checkout, set
`STATLIB_SITE_SOURCE_COMMIT` to that SHA, and run `docker compose build` followed
by `docker compose up -d --no-deps statlib-site`.
