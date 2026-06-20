// ---------------------------------------------------------------------------
// Knowledge-graph page config — the "reserved interface" for the proof-narrative
// diagrams.
//
// The actual artifact lives, decoupled, under `public/narratives/` and is served
// statically at `/narratives/`. To refresh it later:
//   1. Regenerate the narratives export (core/kb/theme/narratives in the prover repo).
//   2. Replace the whole `public/narratives/` folder with the new output.
//   3. Update the numbers in `stats` below and, if desired, the `featured` list.
// The /graph page and nav entry stay unchanged — that's the point of the slot.
// ---------------------------------------------------------------------------

// Base path of the static artifact (served from public/narratives/).
export const graphBase = "/narratives";

// The master diagram index inside the artifact.
export const graphIndexUrl = `${graphBase}/index.html`;

// Headline numbers — sourced from the artifact's INDEX.md. EDIT when refreshed.
export const graphStats: { label: string; value: string }[] = [
  { label: "Declarations (nodes)", value: "2,705" },
  { label: "Dependencies (edges)", value: "4,738" },
  { label: "Proof narratives", value: "869" },
  { label: "Substantial developments", value: "98" },
];

// A few large proof developments to feature as clickable previews.
// `svg` is relative to graphBase. Pick from public/narratives/index.html.
export const featured: {
  name: string;
  topic: string;
  decls: number;
  svg: string;
}[] = [
  {
    name: "herbst_argument",
    topic: "SubGaussian",
    decls: 179,
    svg: "SubGaussian/herbst_argument.svg",
  },
  {
    name: "berry_esseen_theorem",
    topic: "LimitTheorems",
    decls: 93,
    svg: "LimitTheorems/berry_esseen_theorem.svg",
  },
  {
    name: "gaussian_poincare",
    topic: "Gaussian",
    decls: 81,
    svg: "Gaussian/gaussian_poincare.svg",
  },
  {
    name: "cox_consistency_end_to_end",
    topic: "CoxChangePoint",
    decls: 37,
    svg: "CoxChangePoint/cox_consistency_end_to_end.svg",
  },
  {
    name: "multivariate_clt",
    topic: "LimitTheorems",
    decls: 28,
    svg: "LimitTheorems/multivariate_clt.svg",
  },
  {
    name: "candes_tao_recovery",
    topic: "CompressedSensing",
    decls: 24,
    svg: "CompressedSensing/candes_tao_recovery.svg",
  },
];
