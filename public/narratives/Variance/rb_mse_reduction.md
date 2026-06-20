# Proof narrative — rb_mse_reduction

Root: **rb_mse_reduction** (theorem) `Statlib/Variance/rb_mse_reduction.lean:13` · topic `Variance`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `condVar_integral_nonneg` — lemma · `Statlib/Variance/condVar_integral_nonneg.lean:10`  _(also used by 3: rb_mse_gap_nonneg, rb_variance_gap_nonneg, rb_variance_reduction)_
    · `integral_sub_const_sq_eq` — lemma · `Statlib/Variance/integral_sub_const_sq_eq.lean:11`  _(also used by 1: mse_eq_bias_sq_add_variance)_
  ★ `rb_mse_decomposition` — theorem · `Statlib/Variance/rb_mse_decomposition.lean:12`  _(also used by 3: rb_mse_gap_eq_condVar, rb_mse_gap_nonneg, rb_mse_pythagorean)_
★ `rb_mse_reduction` — theorem · `Statlib/Variance/rb_mse_reduction.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· condVar_integral_nonneg"]
  n1["· integral_sub_const_sq_eq"]
  n2["★ rb_mse_decomposition"]
  n3["★ rb_mse_reduction"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
