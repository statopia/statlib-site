# Proof narrative — subgaussian_design_l1RSE_from_sparse_oracle_final_rate

Root: **subgaussian_design_l1RSE_from_sparse_oracle_final_rate** (theorem) `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:690` · topic `HighDim`
Closure: 76 declarations across 14 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 106: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, coord_mul_integral_eq_zero_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 91: cov_diagonal_concentration, cov_quadratic_deviation, cov_quadratic_deviation_unit_shifted_lower_tail, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 153: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, …)_
  ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 175: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
  ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 42: threshold_head_quadratic_remainder_abs_from_bilinear_l2_tail, subgaussian_l1_shell_localized_centered_tail_from_sparse_ball_approximation_cover, subgaussian_l1_shell_localized_centered_tail_from_sparse_ball_approximation_cover_absorbed, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 184: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 12: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:84`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:118`  _(also used by 10: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
  ▣ `SatisfiesL1RSE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:159`  _(also used by 9: l1RSE_of_tolerance_dominates, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget, …)_
            · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 14: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `subexponential_mgf_mono_b` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1916`  _(also used by 1: cov_quadratic_deviation)_
            ★ `subexp_mean_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/subexp_mean_meas_ge_le_exp.lean:11`  _(also used by 1: cov_quadratic_deviation)_
            ★ `cov_quadratic_deviation_uniform_const` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:459`  _(also used by 1: cov_quadratic_deviation_unit_shifted_lower_tail)_
            · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 28: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 2: subgaussian_projection_second_moment_le, subgaussian_rip_tail)_
            ★ `subgaussian_cov_quadratic_unit_le_sigma_sq` — theorem · `Statlib/HighDim/CovarianceMatrix/Properties.lean:354`  _(also used by 2: cov_quadratic_deviation_unit_shifted_lower_tail, kappa_le_sigma_sq_from_subgaussian_rows)_
            ★ `cov_quadratic_deviation_unit_lower_tail` — theorem · `Statlib/HighDim/CovarianceMatrix/CovQuadraticDeviation.lean:1021`  _(also used by 1: sampleSecondMoment_unit_direction_lower_tail_double_sum)_
            · `finite_grid_fixed_direction_tail_from_cov_lower_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1595`
            · `finite_grid_fixed_direction_tail_union_from_cov_lower_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1798`
            · `finite_const_ennreal_sum_ofReal_le` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:752`  _(also used by 1: l1_shell_scale_bad_measure_le_exp_card_tail_of_radius_fluctuation_cover)_
            · `finite_grid_exponential_cardinality_absorption` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:880`  _(also used by 1: finite_grid_fixed_direction_shifted_tail_union_absorbed)_
            · `finite_grid_fixed_direction_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1873`  _(also used by 3: l1_shell_localized_centered_deviation_tail_from_fixed_direction_cover_absorbed, l1_shell_localized_centered_deviation_tail_from_good_cover_absorbed, l1_shell_localized_centered_deviation_tail_from_approximate_fixed_direction_cover_absorbed)_
            · `l1_shell_localized_bad_event_subset_good_compl_union_of_grid_fixed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3921`  _(also used by 1: subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_rademacher_profile_certificate)_
        · `cov_quadratic_form_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3975`  _(also used by 2: sparse_l1_lower_of_unit_sparse_l1_lower, l1_shell_sum_dyadic_scale_measure_bound_from_delta_budget_entrywise_cover_exists_absorbed)_
        · `sample_quadratic_l2NormSq_div_scaled_vector_eq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3998`  _(also used by 1: sparse_l1_lower_of_unit_sparse_l1_lower)_
            · `matrix_mulVec_l2NormSq_eq_sum_inner_sq` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:910`
            · `l1_grid_bad_event_subset_scaled_fixed_direction_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1012`
            · `l1_grid_bad_event_subset_scaled_fixed_direction_event_of_repr` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4032`
            ★ `l1_shell_localized_centered_deviation_tail_from_scaled_good_cover` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4106`
            ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 48: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, sample_covariance_centered_entrywise_good_measurable, sample_covariance_centered_entrywise_good_profile_tail, …)_
            · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:274`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, subgaussian_rip_tail_anisotropic)_
            · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:323`  _(also used by 1: sampleCovariance_concentration)_
            · `coordinate_product_tail_from_fixed_direction_quadratic_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1934`
            · `finite_coordinate_pair_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1507`
            · `sample_covariance_entry_centered_representation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1538`
            · `sample_covariance_entry_bad_event_eq_centered_product_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2146`
            · `sample_covariance_coordinate_tail_union` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2171`
            · `sample_covariance_coordinate_tail_union_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2287`  _(also used by 3: l1_shell_centered_deviation_tail_from_coordinate_rate, sample_bilinear_tail_from_coordinate_tail_absorbed, sparse_unit_l1_lower_tail_from_coordinate_rate)_
            · `sample_covariance_centered_entrywise_good_compl_tail_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2389`  _(also used by 2: sample_covariance_centered_entrywise_good_profile_tail, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover)_
            · `abs_sum_mul_le_l1Norm_mul_coord_bound` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:38`  _(also used by 6: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, …)_
            · `bilinear_form_entrywise_abs_le_l1Norm_mul_l1Norm` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1117`  _(also used by 5: bilinear_form_entrywise_abs_le_card_mul_sqrt_l2NormSq, quadratic_form_l1_lipschitz_of_entrywise_bound_cap, quadratic_form_l1_lipschitz_of_entrywise_bound_cap_aux, …)_
            · `quadratic_form_l1_lipschitz_of_entrywise_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1348`
            · `l1_shell_good_quadratic_cover_from_entrywise_bounds` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:1414`
            ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 17: sampleSecondMoment_unit_direction_lower_tail_double_sum, hermitian_norm_le_two_net_sup, sample_covariance_quadratic_eq_centered_projection_sum, …)_
            · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
            · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
            · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 4: sampleSecondMoment_unit_direction_lower_tail_double_sum, sample_covariance_quadratic_eq_centered_projection_sum, restricted_sample_deviation_quadratic, …)_
            · `sampleSecondMoment_quadratic_eq_l2NormSq_div` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2802`  _(also used by 3: centered_quadratic_sampleSecondMoment_representation, l1_lower_from_threshold_head_bilinear_remainders, l1_shell_centered_bad_subset_dyadic_sample_scale_bad_union_from_locator)_
            · `l1_shell_sample_covariance_good_cover_from_entrywise_bounds` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2874`  _(also used by 1: subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_good_cover)_
            ★ `subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_scaled_good_cover` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4248`
            · `l1Norm_eq_one_l2NormSq_pos` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4357`  _(also used by 3: l1_shell_normalized_l2_l1_cap_of_dyadic_lower, l1_shell_dyadic_scale_bad_event_witness, l1_shell_l2NormSq_pos_le_one)_
            · `exists_scaled_unit_direction_of_l1Norm_eq_one` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4374`
            · `l1_grid_exists_scaled_unit_directions_of_l1Norm_eq_one` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4415`
            ★ `subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_l1_cover` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4434`  _(also used by 3: subgaussian_l1_shell_localized_centered_tail_from_sparse_ball_approximation_cover, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover, subgaussian_l1_shell_localized_centered_quadratic_deviation_tail_from_entrywise_l1_cover_certificate)_
            · `localized_l1_cover_from_sparse_approximation` — lemma · `Statlib/HighDim/Geometry/CoveringNumbers.lean:1560`  _(also used by 1: exists_localized_l1_cover_from_sparse_ball)_
            ★ `subgaussian_l1_shell_localized_centered_tail_from_sparse_approximation_cover` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4509`
          ★ `subgaussian_l1_shell_localized_centered_tail_from_sparse_approximation_cover_absorbed` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:4679`
        ★ `subgaussian_l1_shell_localized_centered_tail_from_sparse_oracle_final_rate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5156`
            · `l1_shell_bad_event_implies_large_covariance` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:2972`
            · `cov_quadratic_le_sigma_sq_mul_l2NormSq_of_unit_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3008`
            · `l1_shell_bad_event_implies_large_l2NormSq_of_subgaussian_covariance` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3087`  _(also used by 1: l1_shell_bad_event_subset_large_l2NormSq_event_of_subgaussian_covariance)_
            · `large_l2NormSq_of_scaled_l2_signal` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3158`  _(also used by 1: l1_shell_bad_event_subset_normalized_large_l2NormSq_event_of_subgaussian_covariance)_
          · `l1_shell_bad_event_subset_normalized_large_l2NormSq_centered_event_of_subgaussian_covariance` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3271`  _(also used by 1: l1_shell_bad_event_subset_large_coordinate_centered_event_of_subgaussian_covariance)_
        · `l1_shell_centered_deviation_tail_from_normalized_large_l2_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:3353`  _(also used by 2: subgaussian_l1_shell_centered_quadratic_deviation_tail_from_sparse_ball_oracle_final_rate, subgaussian_l1_shell_centered_quadratic_deviation_tail_named_event_from_entrywise_l1_cover)_
      ★ `subgaussian_l1_shell_centered_quadratic_deviation_tail_from_sparse_oracle_final_rate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5245`
        · `l1_shell_bad_event_subset_centered_deviation` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:485`  _(also used by 1: sparse_unit_l1_lower_bad_event_subset_centered_coordinate_bad_event)_
      · `l1_shell_lower_tail_from_centered_deviation_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:554`  _(also used by 2: subgaussian_l1_shell_sample_covariance_lower_tail_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event)_
    ★ `subgaussian_l1_shell_sample_covariance_lower_tail_from_sparse_oracle_final_rate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5333`
      · `l1_lower_of_unit_l1_lower` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5418`
    · `l1_lower_bad_event_subset_unit_l1_shell_bad_event` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:5518`  _(also used by 2: subgaussian_sample_covariance_l1_lower_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event)_
  ★ `subgaussian_sample_covariance_l1_lower_from_sparse_oracle_final_rate` — theorem · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:6742`
    ★ `l1RSE_of_half_covariance_l1_lower` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:43`
  ★ `l1RSE_probability_from_lower_event` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:75`  _(also used by 3: subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event, subgaussian_design_l1RSE_from_sparse_ball_oracle_final_rate, subgaussian_design_l1RSE_from_coordinate_tail_rates)_
★ `subgaussian_design_l1RSE_from_sparse_oracle_final_rate` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:690` **← headline**

> Closure has 76 declarations — diagram omitted (cap 60).
