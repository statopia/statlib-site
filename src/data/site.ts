// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description.
  tagline: "A Lean 4 library for reusable, formalized statistics — 940 theorems, zero sorry.",
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs: stochastic-order asymptotics, uniform integrability, " +
    "empirical-process tools, high-dimensional concentration, matrix analysis, " +
    "conformal prediction, and nonparametric approximation on top of Mathlib.",
  // Links.
  githubUrl: "https://github.com/statopia/statlib",
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

// Headline numbers for the hero strip — measured from the statlib `main` core
// (Statlib/ tree). Refresh when the library grows:
//   find Statlib -name '*.lean' | wc -l                              # files
//   find Statlib -name '*.lean' -exec cat {} + | wc -l               # lines
//   grep -rhE '^[[:space:]]*theorem[[:space:]]' Statlib --include='*.lean' | wc -l  # theorems
//   grep -rhE '^[[:space:]]*lemma[[:space:]]' Statlib --include='*.lean' | wc -l    # lemmas
export const stats: { label: string; value: string }[] = [
  { label: "Lean files", value: "248" },
  { label: "Lines of Lean", value: "103,430" },
  { label: "Theorems proved", value: "940" },
  { label: "Supporting lemmas", value: "467" },
];
