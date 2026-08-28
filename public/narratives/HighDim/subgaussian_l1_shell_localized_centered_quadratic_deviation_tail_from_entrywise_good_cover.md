# Proof narrative — subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover

Root: **subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover** (theorem) `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:7053` · topic `HighDim`
Closure: 44 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 114: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, coord_mul_integral_eq_zero_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 102: cov_diagonal_concentration, cov_quadratic_deviation, cov_quadratic_deviation_unit_shifted_lower_tail, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 164: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, …)_
  ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 196: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 212: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
        · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 14: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `subexponential_mgf_mono_b` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1916`  _(also used by 1: cov_quadratic_deviation)_
            ★ `subexp_mean_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/subexp_mean_meas_ge_le_exp.lean:11`  _(also used by 1: cov_quadratic_deviation)_
          ★ `cov_quadratic_deviation_uniform_const` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:459`  _(also used by 1: cov_quadratic_deviation_unit_shifted_lower_tail)_
          · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 30: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 2: subgaussian_projection_second_moment_le, subgaussian_rip_tail)_
            ★ `subgaussian_cov_quadratic_unit_le_sigma_sq` — theorem · `Statlib/HighDim/CovarianceMatrix/Properties.lean:354`  _(also used by 3: cov_quadratic_deviation_unit_shifted_lower_tail, l1_shell_bad_event_implies_large_l2NormSq_of_subgaussian_covariance, kappa_le_sigma_sq_from_subgaussian_rows)_
          ★ `cov_quadratic_deviation_unit_lower_tail` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:1021`  _(also used by 1: sampleSecondMoment_unit_direction_lower_tail_double_sum)_
        · `finite_grid_fixed_direction_tail_from_cov_lower_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1595`
      · `finite_grid_fixed_direction_tail_union_from_cov_lower_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1798`
        · `finite_const_ennreal_sum_ofReal_le` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:752`  _(also used by 1: l1_shell_scale_bad_measure_le_exp_card_tail_of_radius_fluctuation_cover)_
      · `finite_grid_exponential_cardinality_absorption` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:880`  _(also used by 1: finite_grid_fixed_direction_shifted_tail_union_absorbed)_
    · `finite_grid_fixed_direction_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1873`  _(also used by 3: l1_shell_localized_centered_deviation_tail_from_fixed_direction_cover_absorbed, l1_shell_localized_centered_deviation_tail_from_scaled_good_cover, l1_shell_localized_centered_deviation_tail_from_approximate_fixed_direction_cover_absorbed)_
      · `l1_grid_bad_event_subset_fixed_direction_event_of_approximation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:972`  _(also used by 1: l1_shell_localized_bad_event_subset_fixed_direction_union_of_approximation)_
    · `l1_shell_localized_bad_event_subset_good_compl_union_fixed_direction` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3787`
  ★ `l1_shell_localized_centered_deviation_tail_from_good_cover_absorbed` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6845`  _(also used by 1: l1_shell_localized_centered_tail_from_process_metric_good_cover_certificate_absorbed)_
  ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 48: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, sample_covariance_centered_entrywise_good_measurable, sample_covariance_centered_entrywise_good_profile_tail, …)_
          · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:274`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, subgaussian_rip_tail_anisotropic)_
          · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:323`  _(also used by 1: sampleCovariance_concentration)_
        · `coordinate_product_tail_from_fixed_direction_quadratic_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1934`
        · `finite_coordinate_pair_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1507`
          · `sample_covariance_entry_centered_representation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1538`
        · `sample_covariance_entry_bad_event_eq_centered_product_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2146`
      · `sample_covariance_coordinate_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2171`
    · `sample_covariance_coordinate_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2287`  _(also used by 3: l1_shell_centered_deviation_tail_from_coordinate_rate, sample_bilinear_tail_from_coordinate_tail_absorbed, sparse_unit_l1_lower_tail_from_coordinate_rate)_
  · `sample_covariance_centered_entrywise_good_compl_tail_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2389`  _(also used by 2: sample_covariance_centered_entrywise_good_profile_tail, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_scaled_good_cover)_
          · `abs_sum_mul_le_l1Norm_mul_coord_bound` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:38`  _(also used by 6: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, …)_
        · `bilinear_form_entrywise_abs_le_l1Norm_mul_l1Norm` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1117`  _(also used by 5: bilinear_form_entrywise_abs_le_card_mul_sqrt_l2NormSq, quadratic_form_l1_lipschitz_of_entrywise_bound_cap, quadratic_form_l1_lipschitz_of_entrywise_bound_cap_aux, …)_
      · `quadratic_form_l1_lipschitz_of_entrywise_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1348`
    · `l1_shell_good_quadratic_cover_from_entrywise_bounds` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1414`
      ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 17: sampleSecondMoment_unit_direction_lower_tail_double_sum, hermitian_norm_le_two_net_sup, sample_covariance_quadratic_eq_centered_projection_sum, …)_
      · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
        · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
      · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
      · `matrix_mulVec_l2NormSq_eq_sum_inner_sq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:910`  _(also used by 1: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr)_
    · `sampleSecondMoment_quadratic_eq_l2NormSq_div` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2802`  _(also used by 3: centered_quadratic_sampleSecondMoment_representation, l1_lower_from_threshold_head_bilinear_remainders, l1_shell_centered_bad_subset_dyadic_sample_scale_bad_union_from_locator)_
  · `l1_shell_sample_covariance_good_cover_from_entrywise_bounds` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2874`  _(also used by 1: subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_scaled_good_cover)_
★ `subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:7053` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasMean"]
  n1["▣ HasCovarianceMatrix"]
  n2["▣ IsSubGaussianVector"]
  n3["◆ l1Norm"]
  n4["◆ l2NormSq"]
  n5["· inner_eq_sum"]
  n6["▣ HasSubexponentialMGF"]
  n7["· subexponential_mgf_mono_b"]
  n8["★ subexp_mean_meas_ge_le_exp"]
  n9["★ cov_quadratic_deviation_uniform_const"]
  n10["· euclidean_norm_sq"]
  n11["★ subgaussian_variance_le"]
  n12["★ subgaussian_cov_quadratic_unit_le_sigma_sq"]
  n13["★ cov_quadratic_deviation_unit_lower_tail"]
  n14["· finite_grid_fixed_direction_tail_from_cov_lower_tail"]
  n15["· finite_grid_fixed_direction_tail_union_from_cov_lower_tail"]
  n16["· finite_const_ennreal_sum_ofReal_le"]
  n17["· finite_grid_exponential_cardinality_absorption"]
  n18["· finite_grid_fixed_direction_tail_union_absorbed"]
  n19["· l1_grid_bad_event_subset_fixed_direction_event_of_approximation"]
  n20["· l1_shell_localized_bad_event_subset_good_compl_union_fixed_direction"]
  n21["★ l1_shell_localized_centered_deviation_tail_from_good_cover_absorbed"]
  n22["◆ sampleSecondMoment"]
  n23["· projection_sq_integral_eq_cov_quadratic"]
  n24["· projection_sq_integrable"]
  n25["· coordinate_product_tail_from_fixed_direction_quadratic_deviation"]
  n26["· finite_coordinate_pair_tail_union"]
  n27["· sample_covariance_entry_centered_representation"]
  n28["· sample_covariance_entry_bad_event_eq_centered_product_event"]
  n29["· sample_covariance_coordinate_tail_union"]
  n30["· sample_covariance_coordinate_tail_union_absorbed"]
  n31["· sample_covariance_centered_entrywise_good_compl_tail_absorbed"]
  n32["· abs_sum_mul_le_l1Norm_mul_coord_bound"]
  n33["· bilinear_form_entrywise_abs_le_l1Norm_mul_l1Norm"]
  n34["· quadratic_form_l1_lipschitz_of_entrywise_bound"]
  n35["· l1_shell_good_quadratic_cover_from_entrywise_bounds"]
  n36["◆ toEuclidean"]
  n37["· matrix_quadratic_eq_sum"]
  n38["· fin_sum_comm_three"]
  n39["· sampleSecondMoment_quadratic_eq_projection_sum"]
  n40["· matrix_mulVec_l2NormSq_eq_sum_inner_sq"]
  n41["· sampleSecondMoment_quadratic_eq_l2NormSq_div"]
  n42["· l1_shell_sample_covariance_good_cover_from_entrywise_bounds"]
  n43["★ subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover"]
  n7 --> n6
  n8 --> n6
  n9 --> n0
  n9 --> n1
  n9 --> n2
  n9 --> n5
  n9 --> n7
  n9 --> n8
  n10 --> n4
  n12 --> n2
  n12 --> n1
  n12 --> n5
  n12 --> n11
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n9
  n13 --> n4
  n13 --> n10
  n13 --> n12
  n14 --> n0
  n14 --> n1
  n14 --> n2
  n14 --> n13
  n15 --> n0
  n15 --> n1
  n15 --> n2
  n15 --> n14
  n17 --> n16
  n18 --> n0
  n18 --> n1
  n18 --> n2
  n18 --> n15
  n18 --> n17
  n19 --> n3
  n20 --> n3
  n20 --> n4
  n20 --> n19
  n21 --> n0
  n21 --> n1
  n21 --> n2
  n21 --> n3
  n21 --> n4
  n21 --> n18
  n21 --> n20
  n23 --> n1
  n23 --> n5
  n24 --> n1
  n24 --> n5
  n25 --> n0
  n25 --> n1
  n25 --> n2
  n25 --> n9
  n25 --> n23
  n25 --> n5
  n25 --> n10
  n25 --> n4
  n25 --> n24
  n27 --> n1
  n27 --> n22
  n28 --> n1
  n28 --> n22
  n28 --> n27
  n29 --> n0
  n29 --> n1
  n29 --> n2
  n29 --> n22
  n29 --> n25
  n29 --> n26
  n29 --> n28
  n30 --> n0
  n30 --> n1
  n30 --> n2
  n30 --> n22
  n30 --> n29
  n31 --> n0
  n31 --> n1
  n31 --> n2
  n31 --> n22
  n31 --> n30
  n32 --> n3
  n33 --> n3
  n33 --> n32
  n34 --> n3
  n34 --> n33
  n35 --> n3
  n35 --> n4
  n35 --> n34
  n37 --> n36
  n37 --> n5
  n39 --> n36
  n39 --> n22
  n39 --> n37
  n39 --> n38
  n39 --> n5
  n40 --> n4
  n41 --> n22
  n41 --> n4
  n41 --> n36
  n41 --> n37
  n41 --> n39
  n41 --> n40
  n42 --> n3
  n42 --> n4
  n42 --> n22
  n42 --> n35
  n42 --> n41
  n43 --> n0
  n43 --> n1
  n43 --> n2
  n43 --> n3
  n43 --> n4
  n43 --> n21
  n43 --> n31
  n43 --> n22
  n43 --> n42
  class n43 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
