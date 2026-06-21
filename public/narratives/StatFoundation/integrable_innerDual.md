# Proof narrative — integrable_innerDual

Root: **integrable_innerDual** (private theorem) `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:175` · topic `StatFoundation`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `innerDual` — private noncomputable def · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:166`  _(also used by 3: integrable_innerDual_mul, covarianceBilinearForm, covarianceBilinearForm_self_eq_variance)_
  ★ `memLp_innerDual` — private theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:170`  _(also used by 2: integrable_innerDual_mul, covarianceBilinearForm_self_eq_variance)_
★ `integrable_innerDual` — private theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:175` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· innerDual"]
  n1["★ memLp_innerDual"]
  n2["★ integrable_innerDual"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
