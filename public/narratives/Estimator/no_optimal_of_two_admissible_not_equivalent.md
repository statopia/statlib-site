# Proof narrative — no_optimal_of_two_admissible_not_equivalent

Root: **no_optimal_of_two_admissible_not_equivalent** (theorem) `Statlib/Estimator/Basic.lean:292` · topic `Estimator`
Closure: 9 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 41: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
    ◆ `Dominates` — def · `Statlib/Estimator/Basic.lean:49`  _(also used by 1: bayes_is_admissible)_
      ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 7: mse_eq_variance_of_unbiased, IsEfficient, IsUMVUE, …)_
    ◆ `Risk` — noncomputable def · `Statlib/Estimator/Basic.lean:65`  _(also used by 4: IsMinimax, BayesRisk, bayes_is_admissible, …)_
  ◆ `IsAdmissible` — def · `Statlib/Estimator/Basic.lean:206`  _(also used by 2: IsOptimal.isAdmissible, bayes_is_admissible)_
  ◆ `IsEquivalentRisk` — def · `Statlib/Estimator/Basic.lean:238`
  ◆ `IsOptimal` — def · `Statlib/Estimator/Basic.lean:244`  _(also used by 1: IsOptimal.isAdmissible)_
  ★ `IsOptimal.admissible_isOptimal_and_equivalent` — theorem · `Statlib/Estimator/Basic.lean:260`
★ `no_optimal_of_two_admissible_not_equivalent` — theorem · `Statlib/Estimator/Basic.lean:292` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ Dominates"]
  n2["◆ MSE"]
  n3["◆ Risk"]
  n4["◆ IsAdmissible"]
  n5["◆ IsEquivalentRisk"]
  n6["◆ IsOptimal"]
  n7["★ IsOptimal.admissible_isOptimal_and_equivalent"]
  n8["★ no_optimal_of_two_admissible_not_equivalent"]
  n2 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n3
  n6 --> n0
  n6 --> n3
  n7 --> n0
  n7 --> n6
  n7 --> n4
  n7 --> n5
  n7 --> n3
  n8 --> n0
  n8 --> n4
  n8 --> n5
  n8 --> n6
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
