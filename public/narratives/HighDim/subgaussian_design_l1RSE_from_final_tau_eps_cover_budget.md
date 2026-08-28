# Proof narrative — subgaussian_design_l1RSE_from_final_tau_eps_cover_budget

Root: **subgaussian_design_l1RSE_from_final_tau_eps_cover_budget** (theorem) `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:229` · topic `HighDim`
Closure: 112 declarations across 15 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 93: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, coord_mul_integral_eq_zero_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 78: cov_diagonal_concentration, cov_quadratic_deviation, cov_quadratic_deviation_unit_shifted_lower_tail, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 140: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 166: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 12: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:84`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:118`  _(also used by 10: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
  ▣ `SatisfiesL1RSE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:159`  _(also used by 8: l1RSE_of_tolerance_dominates, subgaussian_design_l1RSE_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_coordinate_tail_rates, …)_
    ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 156: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
    ◆ `l1_shell_centered_quadratic_deviation_bad_event` — def · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:536`  _(also used by 4: subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_coordinate_rate, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover_certificate, …)_
            ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 30: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, l1_shell_sample_covariance_good_cover_from_entrywise_bounds, centered_quadratic_sampleSecondMoment_representation, …)_
            · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 14: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `subexponential_mgf_mono_b` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1916`  _(also used by 1: cov_quadratic_deviation)_
            ★ `subexp_mean_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/subexp_mean_meas_ge_le_exp.lean:11`  _(also used by 1: cov_quadratic_deviation)_
            ★ `cov_quadratic_deviation_uniform_const` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:459`  _(also used by 1: cov_quadratic_deviation_unit_shifted_lower_tail)_
            · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 28: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 2: subgaussian_projection_second_moment_le, subgaussian_rip_tail)_
            ★ `subgaussian_cov_quadratic_unit_le_sigma_sq` — theorem · `Statlib/HighDim/CovarianceMatrix/Properties.lean:354`  _(also used by 3: cov_quadratic_deviation_unit_shifted_lower_tail, l1_shell_bad_event_implies_large_l2NormSq_of_subgaussian_covariance, kappa_le_sigma_sq_from_subgaussian_rows)_
            ★ `cov_quadratic_deviation_unit_lower_tail` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:1021`  _(also used by 1: finite_grid_fixed_direction_tail_from_cov_lower_tail)_
            ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 15: hermitian_norm_le_two_net_sup, sample_covariance_quadratic_eq_centered_projection_sum, sampleCovariance_concentration, …)_
            · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 3: sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, design_l2NormSq_div_eq_sampleSecondMoment_quadratic)_
            · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
            · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 3: sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, design_l2NormSq_div_eq_sampleSecondMoment_quadratic)_
            ★ `sampleSecondMoment_unit_direction_lower_tail_double_sum` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:21`
        · `cov_quadratic_form_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3975`  _(also used by 2: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr, sparse_l1_lower_of_unit_sparse_l1_lower)_
            · `l1Norm_eq_one_l2NormSq_pos` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4357`  _(also used by 2: exists_scaled_unit_direction_of_l1Norm_eq_one, l1_shell_l2NormSq_pos_le_one)_
            · `l1Norm_smul` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1330`  _(also used by 2: l1Norm_inv_smul_eq_one, normalized_l1_distance_le_two_mul)_
            · `l1_shell_normalized_l2_l1_cap_of_dyadic_lower` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:100`
            · `l1_shell_dyadic_scale_bad_event_witness` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:143`
            · `positive_eps_from_half_slack_budget` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:690`
            · `l1Norm_le_sqrt_card_mul_sqrt_l2NormSq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6215`  _(also used by 4: bilinear_form_entrywise_abs_le_card_mul_sqrt_l2NormSq, l2_radius_to_l1_radius, matrix_entrywise_good_to_radius_fluctuation, …)_
            · `l1Norm_sub_triangle` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1315`  _(also used by 3: cover_center_l1_bound_from_l2_radius, normalized_l1_distance_le_two_mul, normalized_sparse_euclidean_cover_to_unit_l1_cover)_
            · `abs_sum_mul_le_l1Norm_mul_coord_bound` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:38`  _(also used by 6: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, …)_
            · `bilinear_form_entrywise_abs_le_l1Norm_mul_l1Norm` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1117`  _(also used by 5: quadratic_form_l1_lipschitz_of_entrywise_bound, bilinear_form_entrywise_abs_le_card_mul_sqrt_l2NormSq, quadratic_form_l1_lipschitz_of_entrywise_bound_cap, …)_
            · `quadratic_form_l1_lipschitz_of_entrywise_bound_two_caps_aux` — private lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:873`
            · `matrix_entrywise_good_to_radius_fluctuation_two_caps` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:969`
            · `good_event_to_radius_fluctuation_certificate` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:712`
            · `matrix_entrywise_good_to_radius_fluctuation_certificate_two_caps` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1064`  _(also used by 1: l1_shell_scale_bad_measure_le_exp_card_tail_of_matrix_entrywise_good_cover_two_caps)_
            · `l1_shell_cover_good_from_matrix_entrywise_good_cover_two_caps` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1232`
            · `l1_shell_cover_good_from_radius_cover_exists_entrywise_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1468`
            · `l1_shell_radius_budget_of_l1_delta_budget` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1418`
            · `l1_shell_cover_good_from_delta_budget_cover_exists_entrywise_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1529`
            · `finite_const_ennreal_sum_ofReal_le` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:752`  _(also used by 1: finite_grid_exponential_cardinality_absorption)_
            · `l1_shell_scale_bad_measure_le_exp_card_tail_of_radius_fluctuation_cover` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:311`  _(also used by 1: l1_shell_scale_bad_measure_le_exp_card_tail_of_matrix_entrywise_good_cover_two_caps)_
            · `l1_shell_scale_measure_bound_from_cover_good_matrix_certificate` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1297`
            · `l1_shell_sum_scale_measure_bound_from_cover_good_matrix_certificate_indexed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:1992`
            · `l1_shell_sum_scale_measure_bound_from_delta_budget_entrywise_cover_exists_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2071`
            · `l1_shell_sum_dyadic_scale_measure_bound_from_delta_budget_entrywise_cover_exists_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2197`
            ★ `l1_shell_sample_covariance_dyadic_sum_from_delta_budget_entrywise_cover_exists_absorbed` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2322`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_dyadic_sample_assembly_explicit_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2502`
            · `matrix_mulVec_l2NormSq_eq_sum_inner_sq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:910`  _(also used by 1: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr)_
            · `sampleSecondMoment_quadratic_eq_l2NormSq_div` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2802`  _(also used by 3: l1_shell_sample_covariance_good_cover_from_entrywise_bounds, centered_quadratic_sampleSecondMoment_representation, l1_lower_from_threshold_head_bilinear_remainders)_
            · `l1_shell_centered_bad_subset_dyadic_sample_scale_bad_union_from_locator` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2444`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_dyadic_locator_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2646`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_dyadic_endpoint_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2750`  _(also used by 1: subgaussian_l1_shell_centered_quadratic_deviation_tail_from_interval_endpoint_inputs)_
            · `l1Norm_sq_le_card_mul_l2NormSq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:30`
            · `l1_shell_l2NormSq_lower_one_div_card` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2861`
            · `l2NormSq_le_l1Norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 3: quadratic_remainder_abs_from_bilinear_l2_tail, l1_shell_l2NormSq_pos_le_one, l1RSE_of_tolerance_dominates)_
            · `l1_shell_dyadic_endpoint_cover_from_finite_interval` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2888`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_finite_interval_endpoint_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3020`
            · `l1_shell_finite_interval_endpoint_cover_from_scalar_cover_and_tau_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:2908`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_finite_interval_cover_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3117`
            ★ `covering_number_euclidean_ball` — theorem · `Statlib/HighDim/Geometry/CoveringNumbers.lean:42`  _(also used by 2: operator_norm_subgaussian_matrix, covering_number_sparse_ball)_
            · `norm_normalized_sub_le_two_mul` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:905`
            · `finset_cover_to_unit_l2_euclidean_cover` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:940`
            · `covering_number_ball_to_unit_l2_euclidean_cover` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1010`  _(also used by 1: rank_constrained_denoising_frobenius_bound_s1K)_
            · `unit_l2_euclidean_cover_to_l1_shell_cover_exists` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1035`
            · `indexed_covering_number_ball_to_l1_shell_cover_exists` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1101`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_covering_number_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3258`
            · `l1_shell_real_budget_from_entropy_mass` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3208`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_entropy_budget_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3351`
            · `l1_shell_entropy_budget_from_absorption` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3238`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_entropy_absorption_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3444`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_entropy_sum_absorption_inputs` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3559`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_entropy_profile_certificate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3640`
            · `sampleSecondMoment_entry_measurable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:204`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_reduced_entropy_profile_certificate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3727`
            · `sampleSecondMoment_good_entry_abs_bound_from_centered_entry_lt` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2849`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_centered_entry_profile_certificate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3816`
            · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:274`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, subgaussian_rip_tail_anisotropic)_
            · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:323`  _(also used by 1: sampleCovariance_concentration)_
            · `coordinate_product_tail_from_fixed_direction_quadratic_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1934`
            · `finite_coordinate_pair_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1507`
            · `sample_covariance_entry_centered_representation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1538`
            · `sample_covariance_entry_bad_event_eq_centered_product_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2146`
            · `sample_covariance_coordinate_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2171`
            · `sample_covariance_coordinate_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2287`  _(also used by 3: l1_shell_centered_deviation_tail_from_coordinate_rate, sample_bilinear_tail_from_coordinate_tail_absorbed, sparse_unit_l1_lower_tail_from_coordinate_rate)_
            · `sample_covariance_centered_entrywise_good_compl_tail_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2389`  _(also used by 2: subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_scaled_good_cover, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover)_
            · `sample_covariance_centered_entrywise_good_measurable` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2438`
            · `sample_covariance_centered_entrywise_good_profile_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2459`  _(also used by 1: finite_l1_quadratic_rademacher_entrywise_good_profile_tail)_
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_centered_entry_rate_profile` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:4838`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_large_profile_or_trivial` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5000`
            · `subgaussian_variance_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:143`  _(also used by 1: subgaussian_rip_tail_anisotropic)_
            · `subgaussian_cov_offdiag_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:440`
            · `cov_entry_abs_le_sigma_sq_from_subgaussian_rows` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:3917`  _(also used by 6: finite_l1_quadratic_rademacher_subgaussian_covariance_profile_tail, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover_certificate, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_l1_cover_certificate, …)_
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_explicit_centered_entry_schedule` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5117`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_one_scale_centered_entry_schedule_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5217`
            ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_final_tau_unit_sampledev_schedule_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5390`
          ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_final_tau_simplified_scalar_schedule_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5491`
        ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_final_tau_entry_rate_budget_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5590`
      ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_final_tau_cover_entropy_budget_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5688`
    ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_final_tau_eps_cover_budget_named_event` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess/RadiusFluctuation.lean:5759`
      · `l1_shell_bad_event_subset_centered_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:485`  _(also used by 1: sparse_unit_l1_lower_bad_event_subset_centered_coordinate_bad_event)_
    · `l1_shell_lower_tail_from_centered_deviation_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:554`  _(also used by 2: subgaussian_l1_shell_sample_covariance_lower_tail_from_sparse_ball_oracle_final_rate, subgaussian_l1_shell_sample_covariance_lower_tail_from_sparse_oracle_final_rate)_
        · `sample_quadratic_l2NormSq_div_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3998`  _(also used by 2: l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr, sparse_l1_lower_of_unit_sparse_l1_lower)_
      · `l1_lower_of_unit_l1_lower` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5418`
    · `l1_lower_bad_event_subset_unit_l1_shell_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5518`  _(also used by 2: subgaussian_sample_covariance_l1_lower_from_sparse_ball_oracle_final_rate, subgaussian_sample_covariance_l1_lower_from_sparse_oracle_final_rate)_
      ★ `l1RSE_of_half_covariance_l1_lower` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:43`
    ★ `l1RSE_probability_from_lower_event` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:75`  _(also used by 3: subgaussian_design_l1RSE_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_coordinate_tail_rates, subgaussian_design_l1RSE_from_sparse_oracle_final_rate)_
  ★ `subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:128`
★ `subgaussian_design_l1RSE_from_final_tau_eps_cover_budget` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:229` **← headline**

> Closure has 112 declarations — diagram omitted (cap 60).
