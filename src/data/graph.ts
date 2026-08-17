// ---------------------------------------------------------------------------
// Knowledge-graph page config — the "reserved interface" for the proof-narrative
// diagrams.
//
// The actual artifact lives, decoupled, under `public/narratives/` and is served
// statically at `/narratives/`. To refresh it later:
//   1. Regenerate the narratives export from the current statlib checkout.
//   2. Replace the whole `public/narratives/` folder with the new output.
//   3. Update the numbers in `stats` below and, if desired, the `featured` list.
// The /featured page and nav entry stay unchanged — that's the point of the slot.
// ---------------------------------------------------------------------------

// Base path of the static artifact (served from public/narratives/).
export const graphBase = "/narratives";

// The master diagram index inside the artifact.
export const graphIndexUrl = `${graphBase}/index.html`;

// Headline numbers — sourced from the artifact's INDEX.md. EDIT when refreshed.
export const graphStats: { label: string; value: string }[] = [
  { label: "Declarations (nodes)", value: "1,118" },
  { label: "Dependencies (edges)", value: "2,499" },
  { label: "Proof narratives", value: "241" },
  { label: "Substantial developments", value: "78" },
];

// Selected proof/dependency maps to feature as clickable previews.
// `svg` is relative to graphBase.
export const featured: {
  name: string;
  topic: string;
  decls: number;
  svg: string;
}[] = [
  {
    name: "wedin_sin_theta",
    topic: "Matrix analysis",
    decls: 14,
    svg: "HighDim/wedin_sin_theta.svg",
  },
  {
    name: "tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real",
    topic: "High-dimensional regression",
    decls: 13,
    svg: "HighDim/tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real.svg",
  },
  {
    name: "reluNetworkClass_classApproximationError_le_of_exists_pointwise",
    topic: "Nonparametric",
    decls: 13,
    svg: "Nonparametric/reluNetworkClass_classApproximationError_le_of_exists_pointwise.svg",
  },
];
