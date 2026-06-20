# Proof narrative — lasso_oracle_l2

Root: **lasso_oracle_l2** (theorem) `Statlib/HighDim/LassoOracle.lean:128` · topic `HighDim`
Closure: 7 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsInCone` — def · `Statlib/Vocabulary/Sparse.lean:49`  _(also used by 1: lasso_cone_condition)_
    ◆ `l2NormSq` — def · `Statlib/Regression/l2NormSq.lean:14`  _(also used by 8: IsRidgeEstimator.shrinkage_bound, elasticNetLoss, elasticNetLoss_nonneg, …)_
  ▣ `SatisfiesRE` — structure · `Statlib/Vocabulary/DesignMatrix.lean:43`  _(also used by 3: lasso_oracle_prediction, lasso_oracle_l1, rip_implies_re)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Basic.lean:41`  _(also used by 4: euclidean_norm_sq, euclidean_norm_eq, lasso_basic_inequality, …)_
    ◆ `lassoObj` — noncomputable def · `Statlib/HighDim/LassoOracle.lean:45`
  ◆ `IsLassoSolution` — def · `Statlib/HighDim/LassoOracle.lean:50`  _(also used by 4: lasso_basic_inequality, lasso_cone_condition, lasso_oracle_prediction, …)_
★ `lasso_oracle_l2` — theorem · `Statlib/HighDim/LassoOracle.lean:128` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsInCone"]
  n1["◆ l2NormSq"]
  n2["▣ SatisfiesRE"]
  n3["◆ l2NormSq"]
  n4["◆ lassoObj"]
  n5["◆ IsLassoSolution"]
  n6["★ lasso_oracle_l2"]
  n2 --> n0
  n2 --> n1
  n4 --> n3
  n5 --> n4
  n6 --> n2
  n6 --> n5
  n6 --> n3
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
