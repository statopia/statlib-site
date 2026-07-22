# Proof narrative — lasso_oracle_l1_of_uniformSupportRE

Root: **lasso_oracle_l1_of_uniformSupportRE** (theorem) `Statlib/HighDim/Regression/LassoOracle.lean:862` · topic `HighDim`
Closure: 13 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 9: rip_implies_uniformRE, lasso_oracle_prediction_of_supportRE, lasso_oracle_support_l2_of_supportRE, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 48: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ▣ `SatisfiesUniformSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:82`  _(also used by 5: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_support_l2_of_uniformSupportRE, sampleSecondMoment_lower_to_SatisfiesUniformSupportRE, …)_
    ◆ `lassoObj` — noncomputable def · `Statlib/HighDim/Regression/LassoOracle.lean:48`
  ◆ `IsLassoSolution` — def · `Statlib/HighDim/Regression/LassoOracle.lean:53`  _(also used by 13: lasso_oracle_prediction_of_supportRE, lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_prediction, …)_
    ▣ `SatisfiesSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:50`  _(also used by 4: lasso_oracle_prediction_of_supportRE, lasso_oracle_support_l2_of_supportRE, sampleSecondMoment_cone_lower_to_SatisfiesSupportRE, …)_
    · `lasso_basic_inequality` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:65`  _(also used by 1: lasso_oracle_prediction_of_supportRE)_
    · `lasso_cone_condition` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:257`  _(also used by 3: lasso_oracle_prediction_of_supportRE, lasso_oracle_support_l2_of_supportRE, lasso_oracle_l2)_
  ★ `lasso_oracle_l1_of_supportRE` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:663`  _(also used by 1: lasso_oracle_l1)_
    ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:65`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    · `support_l2_le_l2NormSq` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:54`  _(also used by 2: toUniformSupportRE, l1RSE_to_uniformRE)_
  · `toSupportRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:110`  _(also used by 7: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_prediction, lasso_oracle_l1, …)_
★ `lasso_oracle_l1_of_uniformSupportRE` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:862` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsInCone"]
  n1["◆ l2NormSq"]
  n2["▣ SatisfiesUniformSupportRE"]
  n3["◆ lassoObj"]
  n4["◆ IsLassoSolution"]
  n5["▣ SatisfiesSupportRE"]
  n6["· lasso_basic_inequality"]
  n7["· lasso_cone_condition"]
  n8["★ lasso_oracle_l1_of_supportRE"]
  n9["▣ SatisfiesRE"]
  n10["· support_l2_le_l2NormSq"]
  n11["· toSupportRE"]
  n12["★ lasso_oracle_l1_of_uniformSupportRE"]
  n2 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n6 --> n4
  n6 --> n1
  n6 --> n3
  n7 --> n4
  n7 --> n0
  n7 --> n1
  n7 --> n6
  n8 --> n5
  n8 --> n4
  n8 --> n0
  n8 --> n7
  n8 --> n1
  n8 --> n6
  n9 --> n0
  n9 --> n1
  n10 --> n1
  n11 --> n9
  n11 --> n5
  n11 --> n10
  n11 --> n1
  n11 --> n2
  n12 --> n2
  n12 --> n4
  n12 --> n8
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
