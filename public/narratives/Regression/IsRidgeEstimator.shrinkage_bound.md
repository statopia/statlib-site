# Proof narrative — IsRidgeEstimator.shrinkage_bound

Root: **IsRidgeEstimator.shrinkage_bound** (lemma) `Statlib/Regression/IsRidgeEstimator_shrinkage_bound.lean:24` · topic `Regression`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — def · `Statlib/Regression/l2NormSq.lean:14`  _(also used by 7: elasticNetLoss, elasticNetLoss_nonneg, elastic_net_basic_inequality, …)_
  ◆ `ridgeLoss` — noncomputable def · `Statlib/Regression/ridgeLoss.lean:15`  _(also used by 2: elasticNetLoss_eq_ridge_of_lam1_zero, ridgeLoss_nonneg)_
  ◆ `IsRidgeEstimator` — def · `Statlib/Regression/IsRidgeEstimator.lean:14`
· `IsRidgeEstimator.shrinkage_bound` — lemma · `Statlib/Regression/IsRidgeEstimator_shrinkage_bound.lean:24` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["◆ ridgeLoss"]
  n2["◆ IsRidgeEstimator"]
  n3["· IsRidgeEstimator.shrinkage_bound"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
