// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description. EDIT ME.
  tagline: "A Lean 4 library for formalized statistics and machine learning.",
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs — reusable definitions, common theorems, and proof " +
    "infrastructure on top of Mathlib — rather than a handful of isolated " +
    "showcase results.",
  // Links — point these at the real targets.
  githubUrl: "https://github.com/statopia/statlib",
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

// Headline numbers for the hero strip — measured from the statlib `main` core
// (Statlib/ tree). Refresh when the library grows:
//   find Statlib -name '*.lean' | wc -l                              # files
//   find Statlib -name '*.lean' -exec cat {} + | wc -l               # lines
//   grep -rhE '^[[:space:]]*theorem[[:space:]]' Statlib --include='*.lean' | wc -l  # theorems
export const stats: { label: string; value: string }[] = [
  { label: "Lines of Lean", value: "44,978" },
  { label: "Theorems proved", value: "179" },
];
