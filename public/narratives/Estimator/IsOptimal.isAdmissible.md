# Proof narrative — IsOptimal.isAdmissible

Root: **IsOptimal.isAdmissible** (theorem) `Statlib/Estimator/Basic.lean:251` · topic `Estimator`
Closure: 7 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 43: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
      ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 7: mse_eq_variance_of_unbiased, IsEfficient, IsUMVUE, …)_
    ◆ `Risk` — noncomputable def · `Statlib/Estimator/Basic.lean:65`  _(also used by 6: IsMinimax, BayesRisk, IsEquivalentRisk, …)_
  ◆ `IsOptimal` — def · `Statlib/Estimator/Basic.lean:244`  _(also used by 2: IsOptimal.admissible_isOptimal_and_equivalent, no_optimal_of_two_admissible_not_equivalent)_
    ◆ `Dominates` — def · `Statlib/Estimator/Basic.lean:49`  _(also used by 1: bayes_is_admissible)_
  ◆ `IsAdmissible` — def · `Statlib/Estimator/Basic.lean:206`  _(also used by 3: IsOptimal.admissible_isOptimal_and_equivalent, no_optimal_of_two_admissible_not_equivalent, bayes_is_admissible)_
★ `IsOptimal.isAdmissible` — theorem · `Statlib/Estimator/Basic.lean:251` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ MSE"]
  n2["◆ Risk"]
  n3["◆ IsOptimal"]
  n4["◆ Dominates"]
  n5["◆ IsAdmissible"]
  n6["★ IsOptimal.isAdmissible"]
  n1 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n5 --> n0
  n5 --> n4
  n5 --> n2
  n6 --> n0
  n6 --> n3
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
