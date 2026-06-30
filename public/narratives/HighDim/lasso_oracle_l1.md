# Proof narrative — lasso_oracle_l1

Root: **lasso_oracle_l1** (theorem) `Statlib/HighDim/Regression/LassoOracle.lean:523` · topic `HighDim`
Closure: 8 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 3: rip_implies_re, lasso_oracle_prediction, lasso_oracle_l2)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 29: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:42`  _(also used by 3: rip_implies_re, lasso_oracle_prediction, lasso_oracle_l2)_
    ◆ `lassoObj` — noncomputable def · `Statlib/HighDim/Regression/LassoOracle.lean:45`
  ◆ `IsLassoSolution` — def · `Statlib/HighDim/Regression/LassoOracle.lean:50`  _(also used by 2: lasso_oracle_prediction, lasso_oracle_l2)_
  · `lasso_basic_inequality` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:62`  _(also used by 1: lasso_oracle_prediction)_
  · `lasso_cone_condition` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:220`  _(also used by 2: lasso_oracle_prediction, lasso_oracle_l2)_
★ `lasso_oracle_l1` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:523` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsInCone"]
  n1["◆ l2NormSq"]
  n2["▣ SatisfiesRE"]
  n3["◆ lassoObj"]
  n4["◆ IsLassoSolution"]
  n5["· lasso_basic_inequality"]
  n6["· lasso_cone_condition"]
  n7["★ lasso_oracle_l1"]
  n2 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n3
  n5 --> n4
  n5 --> n1
  n5 --> n3
  n6 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  n7 --> n2
  n7 --> n4
  n7 --> n0
  n7 --> n6
  n7 --> n1
  n7 --> n5
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
