# Proof narrative — subgaussian_design_l1RSE_from_entrywise_coordinate_rate_profile

Root: **subgaussian_design_l1RSE_from_entrywise_coordinate_rate_profile** (theorem) `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:598` · topic `HighDim`
Closure: 71 declarations across 14 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 114: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, coord_mul_integral_eq_zero_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 100: cov_diagonal_concentration, cov_quadratic_deviation, cov_quadratic_deviation_unit_lower_tail, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 162: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 184: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 12: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:84`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:118`  _(also used by 10: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
  ▣ `SatisfiesL1RSE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:159`  _(also used by 7: l1RSE_of_tolerance_dominates, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget, …)_
      ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 178: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
          ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 38: subgaussian_l1_shell_localized_centered_tail_from_sparse_approximation_cover, subgaussian_l1_shell_localized_centered_tail_from_sparse_ball_approximation_cover, subgaussian_l1_shell_localized_centered_tail_from_sparse_approximation_cover_absorbed, …)_
            ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 42: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, sample_covariance_centered_entrywise_good_compl_tail_absorbed, sample_covariance_centered_entrywise_good_measurable, …)_
            · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 15: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `subexponential_mgf_mono_b` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1916`  _(also used by 1: cov_quadratic_deviation)_
            ★ `subexp_mean_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/subexp_mean_meas_ge_le_exp.lean:11`  _(also used by 1: cov_quadratic_deviation)_
            ★ `cov_quadratic_deviation_uniform_const` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:459`  _(also used by 2: cov_quadratic_deviation_unit_lower_tail, cov_quadratic_deviation_unit_shifted_lower_tail)_
            · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:274`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, subgaussian_rip_tail_anisotropic)_
            · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 31: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:323`  _(also used by 1: sampleCovariance_concentration)_
            · `coordinate_product_tail_from_fixed_direction_quadratic_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1934`
            · `finite_coordinate_pair_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1507`
            · `sample_covariance_entry_centered_representation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1538`
            · `sample_covariance_entry_bad_event_eq_centered_product_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2146`
            · `sample_covariance_coordinate_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2171`
          · `sample_covariance_coordinate_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2287`  _(also used by 2: sample_covariance_centered_entrywise_good_compl_tail_absorbed, l1_shell_centered_deviation_tail_from_coordinate_rate)_
            ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 17: sampleSecondMoment_unit_direction_lower_tail_double_sum, hermitian_norm_le_two_net_sup, sample_covariance_quadratic_eq_centered_projection_sum, …)_
            · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
            · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
            · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
            · `matrix_mulVec_l2NormSq_eq_sum_inner_sq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:910`  _(also used by 1: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr)_
            · `sampleSecondMoment_quadratic_eq_l2NormSq_div` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2802`  _(also used by 2: l1_shell_sample_covariance_good_cover_from_entrywise_bounds, l1_shell_centered_bad_subset_dyadic_sample_scale_bad_union_from_locator)_
            · `centered_quadratic_sampleSecondMoment_representation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2939`
            · `abs_sum_mul_le_l1Norm_mul_coord_bound` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:38`  _(also used by 5: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, …)_
            · `l1_quadratic_form_entrywise_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1075`
            · `l1_shell_centered_deviation_subset_coordinate_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3389`  _(also used by 1: l1_shell_centered_deviation_tail_from_coordinate_rate)_
            · `l1_shell_bad_event_subset_centered_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:485`  _(also used by 1: l1_shell_lower_tail_from_centered_deviation_tail)_
          · `sparse_unit_l1_lower_bad_event_subset_centered_coordinate_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6454`
        · `sparse_unit_l1_lower_tail_from_coordinate_rate` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6493`
            · `bilinear_form_entrywise_abs_le_l1Norm_mul_l1Norm` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1117`  _(also used by 5: quadratic_form_l1_lipschitz_of_entrywise_bound, quadratic_form_l1_lipschitz_of_entrywise_bound_cap, quadratic_form_l1_lipschitz_of_entrywise_bound_cap_aux, …)_
            · `l1Norm_le_sqrt_card_mul_sqrt_l2NormSq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6215`  _(also used by 4: l2_radius_to_l1_radius, matrix_entrywise_good_to_radius_fluctuation, cover_center_l1_bound_from_l2_radius, …)_
  · `bilinear_form_entrywise_abs_le_card_mul_sqrt_l2NormSq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6244`
            · `sample_bilinear_bad_event_subset_centered_coordinate_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6283`
          · `sample_bilinear_tail_from_coordinate_tail_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6326`
            · `l1_lower_threshold_head_bad_event_subset_sparse_lower_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5979`
            · `isSparse_const_mul` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6008`
            · `cov_quadratic_form_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3975`  _(also used by 3: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr, l1_lower_of_unit_l1_lower, l1_shell_sum_dyadic_scale_measure_bound_from_delta_budget_entrywise_cover_exists_absorbed)_
            · `sample_quadratic_l2NormSq_div_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3998`  _(also used by 2: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr, l1_lower_of_unit_l1_lower)_
            · `sparse_l1_lower_of_unit_sparse_l1_lower` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6017`
            · `sparse_l1_lower_bad_event_subset_sparse_unit_l1_shell_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6119`
            · `l1Norm_nonneg` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1162`  _(also used by 2: normalized_l1_distance_le_two_mul, normalized_sparse_euclidean_cover_to_unit_l1_cover)_
            · `sparse_head_tail_l1_l2_controls` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1169`
            · `exists_sparse_head_tail_l1_l2_controls` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1249`
            · `l1_lower_from_head_quadratic_remainders` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5544`
            · `l1_lower_from_threshold_head_quadratic_remainders` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5609`
            · `l2NormSq_le_l1Norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 3: l1_shell_l2NormSq_pos_le_one, l1_shell_dyadic_endpoint_cover_from_finite_interval, l1RSE_of_tolerance_dominates)_
            · `quadratic_remainder_abs_from_bilinear_l2_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1169`
            · `threshold_head_quadratic_remainder_abs_from_bilinear_l2_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1289`
            · `l1_lower_from_threshold_head_bilinear_remainders` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5696`
            · `l1_lower_bad_event_subset_threshold_head_or_sample_bilinear_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5784`
            · `l1_lower_tail_from_threshold_head_and_sample_bilinear_tails` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5899`
          · `l1_lower_tail_from_sparse_unit_l1_shell_and_sample_bilinear_tails` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6142`
        · `l1_lower_tail_from_sparse_unit_l1_shell_and_coordinate_tails` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6376`
      · `l1_lower_tail_from_coordinate_tail_rates` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6553`
        ★ `l1RSE_of_half_covariance_l1_lower` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:43`
      ★ `l1RSE_probability_from_lower_event` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:75`  _(also used by 3: subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event, subgaussian_design_l1RSE_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_sparse_oracle_final_rate)_
    ★ `subgaussian_design_l1RSE_from_coordinate_tail_rates` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:397`
        · `subgaussian_variance_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:143`  _(also used by 1: subgaussian_rip_tail_anisotropic)_
      · `subgaussian_cov_offdiag_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:440`
  · `cov_entry_abs_le_sigma_sq_from_subgaussian_rows` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3917`  _(also used by 5: finite_l1_quadratic_rademacher_subgaussian_covariance_profile_tail, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover_certificate, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_l1_cover_certificate, …)_
  ★ `subgaussian_design_l1RSE_from_subgaussian_coordinate_rate_profile` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:491`
★ `subgaussian_design_l1RSE_from_entrywise_coordinate_rate_profile` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:598` **← headline**

> Closure has 71 declarations — diagram omitted (cap 60).
