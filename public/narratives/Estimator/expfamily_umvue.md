# Proof narrative — expfamily_umvue

Root: **expfamily_umvue** (theorem) `Statlib/Estimator/expfamily_umvue.lean:20` · topic `Estimator`
Closure: 12 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 39: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
    ◆ `IsUnbiased` — def · `Statlib/Statistic/Basic.lean:93`  _(also used by 1: IsEfficient)_
  ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 6: Risk, mse_eq_variance_of_unbiased, IsEfficient, …)_
  ◆ `IsUMVUE` — def · `Statlib/Estimator/Basic.lean:327`  _(also used by 4: efficient_is_umvue, umvue_ae_unique, umvue_iff_orthogonal_to_sufficient_unbiasedOfZero, …)_
      ◆ `IsSufficient'` — def · `Statlib/Statistic/Basic.lean:83`  _(also used by 2: IsMinimalSufficient', minimalSufficient_of_subfamily)_
      ◆ `IsComplete'` — def · `Statlib/Statistic/Basic.lean:69`
      ★ `condExp_eq_of_sufficient` — theorem · `Statlib/Sufficiency/condExp_eq_of_sufficient.lean:18`  _(also used by 2: umvue_iff_orthogonal_to_sufficient_unbiasedOfZero, unestimable_of_complete_no_function)_
      ★ `condExp_reduces_mse` — theorem · `Statlib/Sufficiency/condExp_reduces_mse.lean:20`
  ★ `complete_unbiased_ae_unique` — theorem · `Statlib/Sufficiency/complete_unbiased_ae_unique.lean:16`
    ★ `lehmann_scheffe` — theorem · `Statlib/Sufficiency/lehmann_scheffe.lean:29`  _(also used by 1: blue_is_umvue)_
  ★ `rao_blackwell_umvue` — theorem · `Statlib/Estimator/rao_blackwell_umvue.lean:16`
★ `expfamily_umvue` — theorem · `Statlib/Estimator/expfamily_umvue.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ IsUnbiased"]
  n2["◆ MSE"]
  n3["◆ IsUMVUE"]
  n4["◆ IsSufficient'"]
  n5["◆ IsComplete'"]
  n6["★ condExp_eq_of_sufficient"]
  n7["★ condExp_reduces_mse"]
  n8["★ complete_unbiased_ae_unique"]
  n9["★ lehmann_scheffe"]
  n10["★ rao_blackwell_umvue"]
  n11["★ expfamily_umvue"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n6 --> n0
  n6 --> n4
  n8 --> n0
  n8 --> n5
  n9 --> n0
  n9 --> n4
  n9 --> n5
  n9 --> n1
  n9 --> n6
  n9 --> n7
  n9 --> n8
  n10 --> n3
  n10 --> n9
  n11 --> n3
  n11 --> n10
  n11 --> n8
  n11 --> n2
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
