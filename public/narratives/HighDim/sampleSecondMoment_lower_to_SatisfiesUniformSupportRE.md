# Proof narrative — sampleSecondMoment_lower_to_SatisfiesUniformSupportRE

Root: **sampleSecondMoment_lower_to_SatisfiesUniformSupportRE** (lemma) `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:81` · topic `HighDim`
Closure: 17 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 13: sample_cov_min_eig_lower, sample_cov_max_eig_upper, sampleSecondMoment_isSymm, …)_
    ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 11: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 50: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ▣ `SatisfiesUniformSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:82`  _(also used by 4: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_l1_of_uniformSupportRE, lasso_oracle_support_l2_of_uniformSupportRE, …)_
  ◆ `designMatrixFromRows` — noncomputable def · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:24`  _(also used by 4: sampleSecondMoment_cone_lower_to_SatisfiesRE, sampleSecondMoment_cone_lower_to_SatisfiesSupportRE, design_l2NormSq_basis_eq_column_sum, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:65`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:99`  _(also used by 9: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
      ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:41`  _(also used by 7: hermitian_norm_le_two_net_sup, sample_covariance_quadratic_eq_centered_projection_sum, sampleCovariance_concentration, …)_
      · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
      · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:324`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic)_
        · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:336`
      · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:346`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic)_
    · `design_l2NormSq_div_eq_sampleSecondMoment_quadratic` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:30`  _(also used by 2: sampleSecondMoment_cone_lower_to_SatisfiesRE, sampleSecondMoment_upper_to_column_bound)_
  · `sampleSecondMoment_lower_to_SatisfiesUniformRE` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:62`
    · `support_l2_le_l2NormSq` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:54`  _(also used by 2: toSupportRE, l1RSE_to_uniformRE)_
  · `toUniformSupportRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:161`
· `sampleSecondMoment_lower_to_SatisfiesUniformSupportRE` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:81` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleSecondMoment"]
  n1["◆ IsInCone"]
  n2["◆ l2NormSq"]
  n3["▣ SatisfiesUniformSupportRE"]
  n4["◆ designMatrixFromRows"]
  n5["▣ SatisfiesRE"]
  n6["▣ SatisfiesUniformRE"]
  n7["◆ toEuclidean"]
  n8["· inner_eq_sum"]
  n9["· matrix_quadratic_eq_sum"]
  n10["· fin_sum_comm_three"]
  n11["· sampleSecondMoment_quadratic_eq_projection_sum"]
  n12["· design_l2NormSq_div_eq_sampleSecondMoment_quadratic"]
  n13["· sampleSecondMoment_lower_to_SatisfiesUniformRE"]
  n14["· support_l2_le_l2NormSq"]
  n15["· toUniformSupportRE"]
  n16["· sampleSecondMoment_lower_to_SatisfiesUniformSupportRE"]
  n3 --> n1
  n3 --> n2
  n5 --> n1
  n5 --> n2
  n6 --> n1
  n6 --> n2
  n6 --> n5
  n9 --> n7
  n9 --> n8
  n11 --> n7
  n11 --> n0
  n11 --> n9
  n11 --> n10
  n11 --> n8
  n12 --> n2
  n12 --> n4
  n12 --> n0
  n12 --> n11
  n12 --> n7
  n12 --> n9
  n12 --> n8
  n13 --> n0
  n13 --> n6
  n13 --> n4
  n13 --> n2
  n13 --> n12
  n14 --> n2
  n15 --> n6
  n15 --> n3
  n15 --> n14
  n15 --> n2
  n16 --> n0
  n16 --> n3
  n16 --> n4
  n16 --> n13
  n16 --> n15
  class n16 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
