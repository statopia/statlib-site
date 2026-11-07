// ---------------------------------------------------------------------------
// Central place for site-wide constants. Edit these instead of hunting through
// the templates.
// ---------------------------------------------------------------------------

export const site = {
  name: "statlib",
  org: "statopia",
  // One-line positioning shown in the hero + meta description.
  tagline: "A Lean 4 library for reusable, formalized statistics — 1,853 theorems, checked end to end.",
  description:
    "statlib builds the foundational layer that statistical and machine-learning " +
    "formalization needs: stochastic-order asymptotics, uniform integrability, " +
    "empirical-process tools, high-dimensional concentration, low-rank matrix recovery, " +
    "matrix analysis, random-matrix limit laws and spectral edges, " +
    "conformal prediction, and nonparametric approximation on top of Mathlib.",
};

// Headline numbers from statlib `main`, excluding underscore-prefixed scratch
// directories. Recompute from the statlib checkout with Python 3:
//   from pathlib import Path
//   import re
//   files = [p for p in Path("Statlib").rglob("*.lean")
//            if not any(part.startswith("_") for part in p.parts)]
//   lines = [line for p in files for line in p.read_text().splitlines()]
//   count = lambda kind: sum(bool(re.match(rf"\s*{kind}(?:\s|$)", line)) for line in lines)
//   print(len(files), len(lines), count("theorem"), count("lemma"))
// `splitlines()` includes a final line without a newline; the declaration
// pattern includes headers where `theorem` or `lemma` occupies the whole line.
export const stats: { label: string; value: string }[] = [
  { label: "Lean files", value: "481" },
  { label: "Lines of Lean", value: "523,273" },
  { label: "Theorems proved", value: "1,853" },
  { label: "Supporting lemmas", value: "1,035" },
];
