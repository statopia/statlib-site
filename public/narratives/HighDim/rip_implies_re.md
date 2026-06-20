# Proof narrative — rip_implies_re

Root: **rip_implies_re** (theorem) `Statlib/HighDim/RIPConstruction.lean:91` · topic `HighDim`
Closure: 6 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsSparse` — def · `Statlib/Vocabulary/Sparse.lean:36`  _(also used by 2: covering_number_sparse_ball, log_covering_number_sparse)_
    ◆ `l2NormSq` — def · `Statlib/Regression/l2NormSq.lean:14`  _(also used by 7: IsRidgeEstimator.shrinkage_bound, elasticNetLoss, elasticNetLoss_nonneg, …)_
  ◆ `SatisfiesRIP` — def · `Statlib/Vocabulary/DesignMatrix.lean:63`  _(also used by 2: subgaussian_rip_tail, subgaussian_rip_sample_complexity)_
    ◆ `IsInCone` — def · `Statlib/Vocabulary/Sparse.lean:49`  _(also used by 1: lasso_cone_condition)_
  ▣ `SatisfiesRE` — structure · `Statlib/Vocabulary/DesignMatrix.lean:43`  _(also used by 3: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_l2)_
★ `rip_implies_re` — theorem · `Statlib/HighDim/RIPConstruction.lean:91` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSparse"]
  n1["◆ l2NormSq"]
  n2["◆ SatisfiesRIP"]
  n3["◆ IsInCone"]
  n4["▣ SatisfiesRE"]
  n5["★ rip_implies_re"]
  n2 --> n0
  n2 --> n1
  n4 --> n3
  n4 --> n1
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
