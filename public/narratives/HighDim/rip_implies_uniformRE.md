# Proof narrative — rip_implies_uniformRE

Root: **rip_implies_uniformRE** (theorem) `Statlib/HighDim/Geometry/RIPConstruction.lean:1668` · topic `HighDim`
Closure: 7 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 13: covering_number_sparse_ball, log_covering_number_sparse, isSparse_mono, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 53: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ◆ `SatisfiesRIP` — def · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:241`  _(also used by 5: rip_cross_term_abs_le_half_delta_sum, rip_lower_restrictTo, rip_upper_restrictTo, …)_
  ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 11: lasso_cone_condition, lasso_oracle_prediction_of_supportRE, lasso_oracle_l1_of_supportRE, …)_
    ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:65`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
  ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:99`  _(also used by 10: lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, lasso_oracle_support_l2_of_uniformRE, …)_
★ `rip_implies_uniformRE` — theorem · `Statlib/HighDim/Geometry/RIPConstruction.lean:1668` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSparse"]
  n1["◆ l2NormSq"]
  n2["◆ SatisfiesRIP"]
  n3["◆ IsInCone"]
  n4["▣ SatisfiesRE"]
  n5["▣ SatisfiesUniformRE"]
  n6["★ rip_implies_uniformRE"]
  n2 --> n0
  n2 --> n1
  n4 --> n3
  n4 --> n1
  n5 --> n3
  n5 --> n1
  n5 --> n4
  n6 --> n2
  n6 --> n5
  n6 --> n3
  n6 --> n1
  n6 --> n0
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
