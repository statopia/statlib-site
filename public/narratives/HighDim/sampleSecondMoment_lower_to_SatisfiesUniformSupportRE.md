# Proof narrative — sampleSecondMoment_lower_to_SatisfiesUniformSupportRE

Root: **sampleSecondMoment_lower_to_SatisfiesUniformSupportRE** (lemma) `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:222` · topic `HighDim`
Closure: 17 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 53: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, sample_covariance_entry_centered_representation, sample_covariance_entry_bad_event_eq_centered_product_event, …)_
    ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 11: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 215: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ▣ `SatisfiesUniformSupportRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:101`  _(also used by 4: lasso_oracle_prediction_of_uniformSupportRE, lasso_oracle_l1_of_uniformSupportRE, lasso_oracle_support_l2_of_uniformSupportRE, …)_
  ◆ `designMatrixFromRows` — noncomputable def · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:25`  _(also used by 5: normalized_nonzero_design_covariance_quadratic, sampleSecondMoment_cone_lower_to_SatisfiesRE, sampleSecondMoment_cone_lower_to_SatisfiesSupportRE, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:84`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:118`  _(also used by 9: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
      ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 17: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, hermitian_norm_le_two_net_sup, …)_
      · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 18: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
      · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 4: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, …)_
        · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
      · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 4: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, …)_
    · `design_l2NormSq_div_eq_sampleSecondMoment_quadratic` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:171`  _(also used by 2: sampleSecondMoment_cone_lower_to_SatisfiesRE, sampleSecondMoment_upper_to_column_bound)_
  · `sampleSecondMoment_lower_to_SatisfiesUniformRE` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:203`
    · `support_l2_le_l2NormSq` — lemma · `Statlib/HighDim/Vocabulary/Sparse.lean:54`  _(also used by 2: toSupportRE, l1RSE_to_uniformRE)_
  · `toUniformSupportRE` — lemma · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:180`
· `sampleSecondMoment_lower_to_SatisfiesUniformSupportRE` — lemma · `Statlib/HighDim/Regression/SampleCovarianceDesignBridge.lean:222` **← headline**

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
