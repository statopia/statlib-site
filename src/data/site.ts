// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description.
  tagline: "A Lean 4 library for reusable, formalized statistics.",
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs: probability infrastructure, empirical-process tools, " +
    "high-dimensional concentration, matrix analysis, and nonparametric " +
    "approximation on top of Mathlib.",
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
  { label: "Lean files", value: "217" },
  { label: "Lines of Lean", value: "75,810" },
  { label: "Theorems proved", value: "367" },
  { label: "Supporting lemmas", value: "375" },
];
