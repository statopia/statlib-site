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

Self-hosted at `https://statlib.statopia.ai` on the Finnish VPS
(`web@204.168.225.240`), same box as `prover.statopia.ai`:

```bash
./scripts/deploy.sh   # build + rsync + internal and public HTTPS smoke tests
```

Serving chain on the VPS: `statlib-site` nginx container
(`/home/web/statlib-site/docker-compose.yml`, bind-mounts `dist/`) ←
Nginx Proxy Manager (`proxy-app-1`) terminates TLS and forwards the public
hostname to `http://statlib-site:80` over the `proxy_default` network.
Namecheap DNS has an A record for `statlib` pointing to `204.168.225.240`.
Nginx Proxy Manager maps `statlib.statopia.ai` to `statlib-site:80`, requests
the Let’s Encrypt certificate, and forces HTTPS. Rsync alone is a full content
deploy — no container restart is needed.

The old Vercel project (`.vercel/`) is still connected and can serve as
preview hosting until the domain cutover is complete.
