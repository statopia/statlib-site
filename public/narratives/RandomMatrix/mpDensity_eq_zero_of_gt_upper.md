# Proof narrative — mpDensity_eq_zero_of_gt_upper

Root: **mpDensity_eq_zero_of_gt_upper** (lemma) `Statlib/RandomMatrix/mpDensity_eq_zero_of_gt_upper.lean:20` · topic `RandomMatrix`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `mpUpperEdge` — noncomputable def · `Statlib/RandomMatrix/mpUpperEdge.lean:17`  _(also used by 10: marchenko_pastur_convergence, mpDensity_nonneg, mpDensity_zero_of_gamma_zero, …)_
    ◆ `mpLowerEdge` — noncomputable def · `Statlib/RandomMatrix/mpLowerEdge.lean:17`  _(also used by 10: marchenko_pastur_convergence, mpDensity_eq_zero_of_lt_lower, mpDensity_nonneg, …)_
  ◆ `mpDensity` — noncomputable def · `Statlib/RandomMatrix/mpDensity.lean:20`  _(also used by 5: mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_nonpos, mpDensity_nonneg, …)_
  · `mpDensity_eq_zero_of_not_mem` — lemma · `Statlib/RandomMatrix/mpDensity_eq_zero_of_not_mem.lean:20`  _(also used by 2: mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_nonpos)_
· `mpDensity_eq_zero_of_gt_upper` — lemma · `Statlib/RandomMatrix/mpDensity_eq_zero_of_gt_upper.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ mpUpperEdge"]
  n1["◆ mpLowerEdge"]
  n2["◆ mpDensity"]
  n3["· mpDensity_eq_zero_of_not_mem"]
  n4["· mpDensity_eq_zero_of_gt_upper"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
