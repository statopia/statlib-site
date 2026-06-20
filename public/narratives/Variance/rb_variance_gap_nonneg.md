# Proof narrative — rb_variance_gap_nonneg

Root: **rb_variance_gap_nonneg** (theorem) `Statlib/Variance/rb_variance_gap_nonneg.lean:12` · topic `Variance`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `condVar_integral_nonneg` — lemma · `Statlib/Variance/condVar_integral_nonneg.lean:10`  _(also used by 3: rb_mse_gap_nonneg, rb_mse_reduction, rb_variance_reduction)_
    ★ `rb_variance_decomposition` — theorem · `Statlib/Variance/rb_variance_decomposition.lean:11`  _(also used by 1: rb_variance_reduction)_
  ★ `rb_variance_gap_eq_condVar` — theorem · `Statlib/Variance/rb_variance_gap_eq_condVar.lean:12`  _(also used by 1: rb_variance_reduction_eq_iff_condVar_zero)_
★ `rb_variance_gap_nonneg` — theorem · `Statlib/Variance/rb_variance_gap_nonneg.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· condVar_integral_nonneg"]
  n1["★ rb_variance_decomposition"]
  n2["★ rb_variance_gap_eq_condVar"]
  n3["★ rb_variance_gap_nonneg"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
