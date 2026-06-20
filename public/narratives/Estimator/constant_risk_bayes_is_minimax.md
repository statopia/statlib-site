# Proof narrative — constant_risk_bayes_is_minimax

Root: **constant_risk_bayes_is_minimax** (theorem) `Statlib/Estimator/constant_risk_bayes_is_minimax.lean:17` · topic `Estimator`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 44: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
        ◆ `MSE` — noncomputable def · `Statlib/Estimator/Basic.lean:176`  _(also used by 7: mse_eq_variance_of_unbiased, IsEfficient, IsUMVUE, …)_
  ◆ `Risk` — noncomputable def · `Statlib/Estimator/Basic.lean:65`  _(also used by 6: IsAdmissible, IsMinimax, IsEquivalentRisk, …)_
  ◆ `BayesRisk` — noncomputable def · `Statlib/Estimator/Basic.lean:222`  _(also used by 1: bayes_is_admissible)_
  ◆ `IsBayesEstimator` — def · `Statlib/Estimator/Basic.lean:229`  _(also used by 1: bayes_is_admissible)_
★ `constant_risk_bayes_is_minimax` — theorem · `Statlib/Estimator/constant_risk_bayes_is_minimax.lean:17` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ MSE"]
  n2["◆ Risk"]
  n3["◆ BayesRisk"]
  n4["◆ IsBayesEstimator"]
  n5["★ constant_risk_bayes_is_minimax"]
  n1 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n5 --> n4
  n5 --> n2
  n5 --> n3
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
