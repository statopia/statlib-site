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

// Headline numbers for the hero strip — grounded in the statlib README §3
// (build status) and the curated /library catalog. Update when they change.
export const stats: { label: string; value: string }[] = [
  { label: "Theorems cataloged", value: "48" },
  { label: "sorry in the core", value: "0" },
  { label: "Depends on", value: "Mathlib" },
];
