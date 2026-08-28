// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description.
  tagline: "A Lean 4 library for reusable, formalized statistics — 1,368 theorems, checked end to end.",
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs: stochastic-order asymptotics, uniform integrability, " +
    "empirical-process tools, high-dimensional concentration, matrix analysis, " +
    "conformal prediction, and nonparametric approximation on top of Mathlib.",
  // Links.
  githubUrl: "https://github.com/statopia/statlib",
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

// Headline numbers for the hero strip — measured from the public statlib `main`
// core (Statlib/ tree, excluding underscore-prefixed scratch directories).
// Refresh when the library grows:
//   find Statlib -path '*/_*' -prune -o -name '*.lean' -print | wc -l
//   find Statlib -path '*/_*' -prune -o -name '*.lean' -print | xargs cat | wc -l
//   find Statlib -path '*/_*' -prune -o -name '*.lean' -print | xargs grep -hE '^[[:space:]]*theorem[[:space:]]' | wc -l
//   find Statlib -path '*/_*' -prune -o -name '*.lean' -print | xargs grep -hE '^[[:space:]]*lemma[[:space:]]' | wc -l
export const stats: { label: string; value: string }[] = [
  { label: "Lean files", value: "375" },
  { label: "Lines of Lean", value: "269,391" },
  { label: "Theorems proved", value: "1,368" },
  { label: "Supporting lemmas", value: "672" },
];
