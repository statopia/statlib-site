import statlibStats from "./statlib-stats.json";

// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description.
  tagline: `A Lean 4 library for reusable, formalized statistics — ${statlibStats.publicTheorems.toLocaleString("en-US")} public theorems, checked end to end.`,
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs: stochastic-order asymptotics, uniform integrability, " +
    "empirical-process tools, high-dimensional concentration, low-rank matrix recovery, " +
    "matrix analysis, random-matrix limit laws and spectral edges, " +
    "conformal prediction, and nonparametric approximation on top of Mathlib.",
};

// Generated snapshot of statlib main. Run `npm run stats:refresh` from a local
// checkout after the Statlib source commit, then commit the updated JSON.
// Supporting lemmas = public lemma + private lemma + private theorem declarations.
const formatCount = (value: number) => value.toLocaleString("en-US");
export const stats: { label: string; value: string }[] = [
  { label: "Lean files", value: formatCount(statlibStats.leanFiles) },
  { label: "Lines of Lean", value: formatCount(statlibStats.leanLines) },
  { label: "Public theorems", value: formatCount(statlibStats.publicTheorems) },
  { label: "Supporting lemmas", value: formatCount(statlibStats.supportingLemmas) },
];
