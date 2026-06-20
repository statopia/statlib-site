# Proof narrative — adaptive_lasso_basic_inequality

Root: **adaptive_lasso_basic_inequality** (theorem) `Statlib/Regression/adaptive_lasso_basic_inequality.lean:22` · topic `Regression`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `weightedL1Norm` — def · `Statlib/Regression/weightedL1Norm.lean:11`  _(also used by 2: weightedL1Norm_nonneg, weightedL1Norm_one_eq_l1Norm)_
  ◆ `adaptiveLassoLoss` — noncomputable def · `Statlib/Regression/adaptiveLassoLoss.lean:12`  _(also used by 1: IsAdaptiveLassoEstimator.isLassoEstimator_of_w_one)_
  ◆ `IsAdaptiveLassoEstimator` — def · `Statlib/Regression/IsAdaptiveLassoEstimator.lean:10`  _(also used by 1: IsAdaptiveLassoEstimator.isLassoEstimator_of_w_one)_
★ `adaptive_lasso_basic_inequality` — theorem · `Statlib/Regression/adaptive_lasso_basic_inequality.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ weightedL1Norm"]
  n1["◆ adaptiveLassoLoss"]
  n2["◆ IsAdaptiveLassoEstimator"]
  n3["★ adaptive_lasso_basic_inequality"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
