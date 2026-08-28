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
  { label: "Declarations (nodes)", value: "2,765" },
  { label: "Dependencies (edges)", value: "7,790" },
  { label: "Proof narratives", value: "693" },
  { label: "Substantial developments", value: "230" },
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
    name: "unit_cube_bspline_high_order_holder_smooth_uniform_sieve_approximation_rate",
    topic: "Nonparametric approximation",
    decls: 83,
    svg: "Nonparametric/unit_cube_bspline_high_order_holder_smooth_uniform_sieve_approximation_rate.svg",
  },
  {
    name: "standardGaussian_logSobolev_lipschitz_euclidean",
    topic: "Statistical foundations",
    decls: 107,
    svg: "StatFoundation/standardGaussian_logSobolev_lipschitz_euclidean.svg",
  },
  {
    name: "wedin_sin_theta",
    topic: "Matrix analysis",
    decls: 130,
    svg: "HighDim/wedin_sin_theta.svg",
  },
  {
    name: "tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real",
    topic: "High-dimensional regression",
    decls: 68,
    svg: "HighDim/tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real.svg",
  },
];
