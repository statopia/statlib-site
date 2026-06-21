// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description. EDIT ME.
  tagline: "A machine-formalized library of statistics theorems in Lean 4.",
  description:
    "statlib collects rigorously formalized theorems from statistics and " +
    "probability — spanning concentration, limit theorems, tail behavior, and " +
    "high-dimensional statistics — machine-checked end to end in Lean 4 / Mathlib.",
  // Links — point these at the real targets.
  githubUrl: "https://github.com/statopia/statlib",
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

// Headline numbers for the hero strip — reflect the curated /library catalog
// generated from the statlib `main` sources. Update when the catalog changes.
export const stats: { label: string; value: string }[] = [
  { label: "Theorems cataloged", value: "48" },
  { label: "Topic areas", value: "9" },
  { label: "Machine-checked", value: "100%" },
];
