# Proof narrative — offdiag_hanson_wright_tail_high_of_decoupling_norm_bernstein_absorb

Root: **offdiag_hanson_wright_tail_high_of_decoupling_norm_bernstein_absorb** (theorem) `Statlib/HighDim/Concentration/HansonWright.lean:3570` · topic `HighDim`
Closure: 68 declarations across 14 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 34: offDiagQuadForm_centered_eq_self_of_indep, coord_mul_subexponential_exists_of_indep, coord_mul_scaled_subexponential_exists_of_indep, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 62: decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, subgaussian_projection_sq_integrable, …)_
  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:37`  _(also used by 43: diag_sq_sum_le_frobeniusNormSq, frobeniusNormSq_zeroDiagMatrix_le, frobeniusNormSq_nonneg, …)_
  ◆ `quadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:15`  _(also used by 26: quadForm_centered_eq_diag_offdiag_centered, quadForm_centered_tail_le_diag_offdiag_tail, quadForm_centered_tail_le_two_mul_of_diag_offdiag_tail_bounds, …)_
  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 30: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, frobeniusNormSq_zeroDiagMatrix_le, …)_
  ◆ `decoupledOffDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:33`  _(also used by 34: decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_mk_eq_const_right, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
  ◆ `offDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:27`  _(also used by 16: offDiagQuadForm_eq_zero_of_entries, quadForm_centered_eq_diag_offdiag_centered, offDiagQuadForm_integrable_of_coord_sq_integrable, …)_
      · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: offDiagCoeffVec_apply_eq_inner_row_zeroDiag, cov_quadratic_deviation, projection_mean_zero, …)_
    · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1341`  _(also used by 13: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, diagQuadForm_centered_tail_bernstein_explicit, …)_
          ◆ `diagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:21`  _(also used by 8: quadForm_centered_eq_diag_offdiag_centered, diagQuadForm_centered_eq_sum, quadForm_centered_tail_le_diag_offdiag_tail, …)_
        · `quadForm_eq_diag_add_offdiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:236`  _(also used by 1: quadForm_centered_eq_diag_offdiag_centered)_
        · `diagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:254`
        · `offDiagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:260`
      · `quadForm_zeroDiagMatrix_eq_offDiagQuadForm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:271`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
        · `coord_mul_integrable_of_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1232`  _(also used by 1: offDiagQuadForm_integrable_of_coord_sq_integrable)_
        · `coord_mul_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1249`  _(also used by 1: coord_mul_subexponential_exists_of_indep)_
      · `offDiagQuadForm_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1283`  _(also used by 1: offDiagQuadForm_centered_eq_self_of_indep)_
    · `offdiag_tail_of_zeroDiag_centered_quad_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2885`  _(also used by 6: offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb, offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents, …)_
            ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 54: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 13: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 1: subgaussian_rip_tail)_
            · `subgaussian_projection_second_moment_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:471`  _(also used by 1: offDiagCoeffVec_norm_sq_integral_le_frobenius)_
            · `subgaussian_norm_sq_mean_le_dim` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2311`
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 30: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
            ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_subexponential_exists, design_noise_inner_subexponential, …)_
            · `coord_sq_centered_scaled_exp_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2016`  _(also used by 1: cov_trace_concentration)_
            · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
            · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
            ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
            ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:73`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
            · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1952`  _(also used by 2: coord_sq_centered_scaled_mgf_bound_explicit, cov_trace_concentration)_
            · `coord_sq_centered_scaled_subexponential_explicit_of_range` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2097`  _(also used by 2: diag_hanson_wright_tail_high, subgaussian_norm_sq_subexponential)_
            ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: diag_hanson_wright_tail_high, cov_trace_concentration, sampleCovariance_concentration, …)_
            · `weighted_coord_sq_centered_sum_tail_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2153`  _(also used by 1: diagQuadForm_centered_tail_bernstein_explicit)_
          · `subgaussian_norm_sq_tail_bernstein_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2351`
            ◆ `offDiagCoeffVec` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:46`  _(also used by 11: decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, …)_
            · `decoupledOffDiagQuadForm_measurable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:90`
            · `decoupledOffDiagQuadForm_prod_measurable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:99`
            · `decoupledOffDiagQuadForm_prod_tail_measurableSet` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:109`  _(also used by 2: decoupledOffDiagQuadForm_prod_tail_le_lintegral_spectral, decoupledOffDiagQuadForm_prod_tail_le_lintegral_frobenius)_
            · `offDiagCoeffVec_comp_measurable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:622`
            · `offDiagCoeffVec_norm_sq_measurable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:630`
            · `subgaussian_mgf_mono_param` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_mono_param.lean:10`  _(also used by 5: decoupledOffDiagQuadForm_const_right_abs_tail_real_spectral, decoupledOffDiagQuadForm_const_right_abs_tail_real_frobenius, dudley_exists_subgaussian_max_bound, …)_
            ◆ `offDiagCoeff` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:39`  _(also used by 4: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeff_norm_le, …)_
            · `decoupledOffDiagQuadForm_eq_sum_coeff` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:46`
            · `decoupledOffDiagQuadForm_eq_inner_coeff` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:65`
            · `offDiagCoeff_const` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:39`
            · `decoupledOffDiagQuadForm_const_right_eq_inner_coeffVec` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:73`
            · `decoupledOffDiagQuadForm_const_right_subgaussian` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:80`  _(also used by 3: decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_const_right_abs_tail_real_spectral, decoupledOffDiagQuadForm_const_right_abs_tail_real_frobenius)_
            · `subgaussian_abs_tail_real` — lemma · `Statlib/StatFoundation/Concentration/ExponentialType/subgaussian_abs_tail_real.lean:11`  _(also used by 3: decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_const_right_abs_tail_real_spectral, decoupledOffDiagQuadForm_const_right_abs_tail_real_frobenius)_
            · `decoupledOffDiagQuadForm_const_right_abs_tail_real_of_coeff_norm_sq_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:798`
            · `measure_le_ofReal_of_measureReal_le` — lemma · `Statlib/StatFoundation/BasicAnalysis/measure_le_ofReal_of_measureReal_le.lean:10`  _(also used by 3: offDiagCoeffVec_norm_sq_tail_le_frobenius, decoupledOffDiagQuadForm_prod_tail_le_lintegral_spectral, decoupledOffDiagQuadForm_prod_tail_le_lintegral_frobenius)_
            · `decoupledOffDiagQuadForm_prod_tail_le_bad_plus_good` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:973`  _(also used by 1: decoupledOffDiagQuadForm_prod_tail_le_markov_plus_good)_
            · `offDiagCoeffVec_eq_zeroDiagMatrix_mulVec` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:203`  _(also used by 1: offDiagCoeffVec_apply_eq_inner_row_zeroDiag)_
            · `offDiagCoeffVec_norm_le_zeroDiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:228`
            ◆ `diagPartMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:57`  _(also used by 1: zeroDiagMatrix_add_diagPartMatrix)_
            · `matrix_entry_abs_le_l2_opNorm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:350`  _(also used by 1: diag_hanson_wright_tail_high)_
            · `diagPartMatrix_norm_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:637`
            · `zeroDiagMatrix_norm_le_two` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:656`  _(also used by 2: offDiagCoeff_norm_le, zeroDiag_hanson_scale_half_le)_
            · `offDiagCoeffVec_norm_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:685`
            · `offDiagCoeffVec_norm_sq_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:704`  _(also used by 1: decoupled_const_right_subgaussian_parameter_le_spectral)_
            · `offDiagCoeffVec_norm_sq_tail_le_norm_sq` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1122`
          · `decoupledOffDiagQuadForm_prod_tail_le_norm_bad_plus_good` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1154`
        · `decoupledOffDiagQuadForm_prod_tail_le_norm_bernstein_plus_good_ofReal` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2432`
      · `decoupled_zeroDiag_quadratic_form_tail_high_norm_bernstein` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2507`  _(also used by 2: decoupled_zeroDiag_quadratic_form_tail_high_norm_bernstein_absorb, zeroDiag_centered_quadratic_form_tail_high_norm_bernstein_of_const_decoupling)_
    ★ `zeroDiag_centered_quadratic_form_tail_high_norm_bernstein_of_decoupling` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3071`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_decoupling_norm_bernstein_absorb)_
  ★ `offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3203`
★ `offdiag_hanson_wright_tail_high_of_decoupling_norm_bernstein_absorb` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3570` **← headline**

> Closure has 68 declarations — diagram omitted (cap 60).
