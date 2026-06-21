# Proof narrative — covarianceBilinearForm_self_eq_variance

Root: **covarianceBilinearForm_self_eq_variance** (theorem) `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:223` · topic `StatFoundation`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `innerDual` — private noncomputable def · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:166`  _(also used by 1: integrable_innerDual)_
  ★ `memLp_innerDual` — private theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:170`  _(also used by 1: integrable_innerDual)_
    ★ `integrable_innerDual_mul` — private theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:180`
  ◆ `covarianceBilinearForm` — noncomputable def · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:187`  _(also used by 2: covarianceBilinearForm_comm, covarianceBilinearForm_self_nonneg)_
★ `covarianceBilinearForm_self_eq_variance` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:223` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· innerDual"]
  n1["★ memLp_innerDual"]
  n2["★ integrable_innerDual_mul"]
  n3["◆ covarianceBilinearForm"]
  n4["★ covarianceBilinearForm_self_eq_variance"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n3
  n4 --> n0
  n4 --> n1
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
