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
    "probability, machine-checked end to end in Lean 4 / Mathlib.",
  // Links — point these at the real targets.
  githubUrl: "https://github.com/statopia/statlib",
  githubSiteUrl: "https://github.com/statopia/statlib-site",
};

// Headline numbers for the hero strip. Wire these to real counts later
// (e.g. generated from the statlib repo). EDIT ME.
export const stats: { label: string; value: string }[] = [
  { label: "Formalized theorems", value: "120+" },
  { label: "Topic areas", value: "8" },
  { label: "Machine-checked", value: "100%" },
];
