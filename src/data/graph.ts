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

// A few large proof developments to feature as clickable previews.
// `svg` is relative to graphBase. Pick from public/narratives/index.html.
export const featured: {
  name: string;
  topic: string;
  decls: number;
  svg: string;
}[] = [
  {
    name: "matrix_bernstein_rect",
    topic: "High-dimensional",
    decls: 176,
    svg: "HighDim/matrix_bernstein_rect.svg",
  },
  {
    name: "matrix_bernstein",
    topic: "High-dimensional",
    decls: 146,
    svg: "HighDim/matrix_bernstein.svg",
  },
  {
    name: "hanson_wright_isotropic",
    topic: "High-dimensional",
    decls: 62,
    svg: "HighDim/hanson_wright_isotropic.svg",
  },
  {
    name: "subgaussian_rip_tail_anisotropic",
    topic: "High-dimensional",
    decls: 26,
    svg: "HighDim/subgaussian_rip_tail_anisotropic.svg",
  },
  {
    name: "rademacher_generalization_bound",
    topic: "Empirical processes",
    decls: 8,
    svg: "StatFoundation/rademacher_generalization_bound.svg",
  },
  {
    name: "trace_exp_add_log_simpleFunc_jensen_posDef",
    topic: "Matrix analysis",
    decls: 43,
    svg: "HighDim/trace_exp_add_log_simpleFunc_jensen_posDef.svg",
  },
  {
    name: "holderBall_selectorIndicator_sieveApproximationError_rate_of_cover",
    topic: "Nonparametric",
    decls: 24,
    svg: "Nonparametric/holderBall_selectorIndicator_sieveApproximationError_rate_of_cover.svg",
  },
  {
    name: "standardReal_ou_mehler_generator_pos",
    topic: "Gaussian analysis",
    decls: 26,
    svg: "StatFoundation/standardReal_ou_mehler_generator_pos.svg",
  },
];
