# Proof narrative — hermite_recurrence_norm

Root: **hermite_recurrence_norm** (theorem) `Statlib/Gaussian/Hermite.lean:251` · topic `Gaussian`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `hermiteEval` — abbrev · `Statlib/Gaussian/Hermite.lean:60`  _(also used by 17: hasDerivAt_hermiteEval, hasDerivAt_hermiteEval_mul, memLp_hermiteEval_mul, …)_
  ◆ `hermiteNorm` — noncomputable def · `Statlib/Gaussian/Hermite.lean:221`  _(also used by 13: hermiteNorm_inner, integral_deriv_mul_hermiteNorm, integrable_f_mul_hermiteNorm', …)_
  · `hermiteNorm_eq` — lemma · `Statlib/Gaussian/Hermite.lean:224`
  ★ `derivative_hermite` — theorem · `Statlib/Gaussian/Hermite.lean:24`  _(also used by 1: hermite_inner_succ)_
★ `hermite_recurrence_norm` — theorem · `Statlib/Gaussian/Hermite.lean:251` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ hermiteEval"]
  n1["◆ hermiteNorm"]
  n2["· hermiteNorm_eq"]
  n3["★ derivative_hermite"]
  n4["★ hermite_recurrence_norm"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n4 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
