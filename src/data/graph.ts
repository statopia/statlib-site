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
  { label: "Declarations (nodes)", value: "737" },
  { label: "Dependencies (edges)", value: "1,534" },
  { label: "Proof narratives", value: "126" },
  { label: "Substantial developments", value: "37" },
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
    decls: 133,
    svg: "HighDim/matrix_bernstein_rect.svg",
  },
  {
    name: "hanson_wright_isotropic",
    topic: "High-dimensional",
    decls: 106,
    svg: "HighDim/hanson_wright_isotropic.svg",
  },
  {
    name: "pca_eigvec_perturbation",
    topic: "High-dimensional",
    decls: 78,
    svg: "HighDim/pca_eigvec_perturbation.svg",
  },
  {
    name: "multivariate_central_limit_theorem",
    topic: "Limit theorems",
    decls: 28,
    svg: "StatFoundation/multivariate_central_limit_theorem.svg",
  },
  {
    name: "central_limit_theorem",
    topic: "Limit theorems",
    decls: 25,
    svg: "StatFoundation/central_limit_theorem.svg",
  },
  {
    name: "lindeberg_feller_central_limit_theorem",
    topic: "Limit theorems",
    decls: 21,
    svg: "StatFoundation/lindeberg_feller_central_limit_theorem.svg",
  },
];
