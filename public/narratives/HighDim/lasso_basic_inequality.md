# Proof narrative — lasso_basic_inequality

Root: **lasso_basic_inequality** (lemma) `Statlib/HighDim/LassoOracle.lean:62` · topic `HighDim`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Basic.lean:41`  _(also used by 4: euclidean_norm_sq, euclidean_norm_eq, lasso_oracle_prediction, …)_
    ◆ `lassoObj` — noncomputable def · `Statlib/HighDim/LassoOracle.lean:45`
  ◆ `IsLassoSolution` — def · `Statlib/HighDim/LassoOracle.lean:50`  _(also used by 4: lasso_cone_condition, lasso_oracle_prediction, lasso_oracle_l1, …)_
· `lasso_basic_inequality` — lemma · `Statlib/HighDim/LassoOracle.lean:62` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["◆ lassoObj"]
  n2["◆ IsLassoSolution"]
  n3["· lasso_basic_inequality"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
