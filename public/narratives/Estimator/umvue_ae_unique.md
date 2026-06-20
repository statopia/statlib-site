# Proof narrative — umvue_ae_unique

Root: **umvue_ae_unique** (theorem) `Statlib/Estimator/umvue_ae_unique.lean:22` · topic `Estimator`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 44: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
    ◆ `IsUnbiased` — def · `Statlib/Statistic/Basic.lean:93`  _(also used by 2: IsEfficient, lehmann_scheffe)_
  ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 6: Risk, mse_eq_variance_of_unbiased, IsEfficient, …)_
  ◆ `IsUMVUE` — def · `Statlib/Estimator/Basic.lean:327`  _(also used by 5: efficient_is_umvue, expfamily_umvue, rao_blackwell_umvue, …)_
★ `umvue_ae_unique` — theorem · `Statlib/Estimator/umvue_ae_unique.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ IsUnbiased"]
  n2["◆ MSE"]
  n3["◆ IsUMVUE"]
  n4["★ umvue_ae_unique"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n3
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
