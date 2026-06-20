# Proof narrative — efficient_is_umvue

Root: **efficient_is_umvue** (theorem) `Statlib/Estimator/efficient_is_umvue.lean:18` · topic `Estimator`
Closure: 9 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 42: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
    ◆ `IsUnbiased` — def · `Statlib/Statistic/Basic.lean:93`  _(also used by 1: lehmann_scheffe)_
    ◆ `scoreFunction` — noncomputable def · `Statlib/Information/scoreFunction.lean:12`  _(also used by 1: expFamily_score_eq)_
    ◆ `fisherInformation` — noncomputable def · `Statlib/Information/fisherInformation.lean:12`  _(also used by 7: IsAsymptoticallyEfficient, IsMLEAsymptoticallyNormal, IsSuperefficient, …)_
    ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 6: Risk, mse_eq_variance_of_unbiased, expfamily_umvue, …)_
  ◆ `IsEfficient` — def · `Statlib/Estimator/Basic.lean:316`
  ◆ `IsUMVUE` — def · `Statlib/Estimator/Basic.lean:327`  _(also used by 5: expfamily_umvue, rao_blackwell_umvue, umvue_ae_unique, …)_
  ★ `cramer_rao` — theorem · `Statlib/Information/CramerRao.lean:22`
★ `efficient_is_umvue` — theorem · `Statlib/Estimator/efficient_is_umvue.lean:18` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ IsUnbiased"]
  n2["◆ scoreFunction"]
  n3["◆ fisherInformation"]
  n4["◆ MSE"]
  n5["◆ IsEfficient"]
  n6["◆ IsUMVUE"]
  n7["★ cramer_rao"]
  n8["★ efficient_is_umvue"]
  n1 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n4
  n7 --> n3
  n7 --> n2
  n8 --> n5
  n8 --> n6
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
