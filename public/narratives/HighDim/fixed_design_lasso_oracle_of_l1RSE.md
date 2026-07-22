# Proof narrative — fixed_design_lasso_oracle_of_l1RSE

Root: **fixed_design_lasso_oracle_of_l1RSE** (theorem) `Statlib/HighDim/Regression/LassoRSEOracle.lean:23` · topic `HighDim`
Closure: 23 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 41: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
    ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 4: rip_implies_uniformRE, lasso_oracle_support_l2_of_supportRE, sampleSecondMoment_cone_lower_to_SatisfiesRE, …)_
  ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:65`  _(also used by 2: lasso_oracle_support_l2, sampleSecondMoment_cone_lower_to_SatisfiesRE)_
  ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:99`  _(also used by 7: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
  ▣ `SatisfiesL1RSE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:140`
    ◆ `lassoObj` — noncomputable def · `Statlib/HighDim/Regression/LassoOracle.lean:48`
  ◆ `IsLassoSolution` — def · `Statlib/HighDim/Regression/LassoOracle.lean:53`  _(also used by 9: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformSupportRE, …)_
      · `cone_l1_le_support_l1` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:62`
    · `cone_l1_sq_le_support_l2` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:79`
    · `support_l2_le_l2NormSq` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:54`  _(also used by 1: toUniformSupportRE)_
  · `l1RSE_to_uniformRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:177`
  · `toRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:151`  _(also used by 4: lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, lasso_oracle_support_l2_of_uniformRE, …)_
      ▣ `SatisfiesSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:50`  _(also used by 3: lasso_oracle_support_l2_of_supportRE, sampleSecondMoment_cone_lower_to_SatisfiesSupportRE, toSupportRE)_
      · `lasso_basic_inequality` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:65`
    · `lasso_cone_condition` — lemma · `Statlib/HighDim/Regression/LassoOracle.lean:257`  _(also used by 1: lasso_oracle_support_l2_of_supportRE)_
    ★ `lasso_oracle_prediction_of_supportRE` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:416`  _(also used by 2: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_support_l2_of_supportRE)_
      ▣ `SatisfiesUniformSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:82`  _(also used by 6: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_l1_of_uniformSupportRE, lasso_oracle_support_l2_of_uniformSupportRE, …)_
    · `toSupportRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:110`  _(also used by 6: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_l1_of_uniformSupportRE, lasso_oracle_support_l2_of_uniformSupportRE, …)_
  ★ `lasso_oracle_prediction` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:629`  _(also used by 1: lasso_oracle_prediction_of_uniformRE)_
    ★ `lasso_oracle_l1_of_supportRE` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:663`  _(also used by 1: lasso_oracle_l1_of_uniformSupportRE)_
  ★ `lasso_oracle_l1` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:877`  _(also used by 1: lasso_oracle_l1_of_uniformRE)_
  ★ `lasso_oracle_l2` — theorem · `Statlib/HighDim/Regression/LassoOracle.lean:980`  _(also used by 1: lasso_oracle_l2_of_uniformRE)_
★ `fixed_design_lasso_oracle_of_l1RSE` — theorem · `Statlib/HighDim/Regression/LassoRSEOracle.lean:23` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["◆ IsInCone"]
  n2["▣ SatisfiesRE"]
  n3["▣ SatisfiesUniformRE"]
  n4["▣ SatisfiesL1RSE"]
  n5["◆ lassoObj"]
  n6["◆ IsLassoSolution"]
  n7["· cone_l1_le_support_l1"]
  n8["· cone_l1_sq_le_support_l2"]
  n9["· support_l2_le_l2NormSq"]
  n10["· l1RSE_to_uniformRE"]
  n11["· toRE"]
  n12["▣ SatisfiesSupportRE"]
  n13["· lasso_basic_inequality"]
  n14["· lasso_cone_condition"]
  n15["★ lasso_oracle_prediction_of_supportRE"]
  n16["▣ SatisfiesUniformSupportRE"]
  n17["· toSupportRE"]
  n18["★ lasso_oracle_prediction"]
  n19["★ lasso_oracle_l1_of_supportRE"]
  n20["★ lasso_oracle_l1"]
  n21["★ lasso_oracle_l2"]
  n22["★ fixed_design_lasso_oracle_of_l1RSE"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n6 --> n5
  n7 --> n1
  n8 --> n1
  n8 --> n7
  n9 --> n0
  n10 --> n4
  n10 --> n3
  n10 --> n8
  n10 --> n0
  n10 --> n9
  n11 --> n3
  n11 --> n2
  n12 --> n1
  n12 --> n0
  n13 --> n6
  n13 --> n0
  n13 --> n5
  n14 --> n6
  n14 --> n1
  n14 --> n0
  n14 --> n13
  n15 --> n12
  n15 --> n6
  n15 --> n0
  n15 --> n1
  n15 --> n14
  n15 --> n13
  n16 --> n1
  n16 --> n0
  n17 --> n2
  n17 --> n12
  n17 --> n9
  n17 --> n0
  n17 --> n16
  n18 --> n2
  n18 --> n6
  n18 --> n0
  n18 --> n15
  n18 --> n17
  n19 --> n12
  n19 --> n6
  n19 --> n1
  n19 --> n14
  n19 --> n0
  n19 --> n13
  n20 --> n2
  n20 --> n6
  n20 --> n19
  n20 --> n17
  n21 --> n2
  n21 --> n6
  n21 --> n0
  n21 --> n1
  n21 --> n14
  n21 --> n18
  n22 --> n4
  n22 --> n6
  n22 --> n0
  n22 --> n3
  n22 --> n10
  n22 --> n2
  n22 --> n11
  n22 --> n18
  n22 --> n20
  n22 --> n21
  class n22 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
