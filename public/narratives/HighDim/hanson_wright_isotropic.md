# Proof narrative — hanson_wright_isotropic

Root: **hanson_wright_isotropic** (theorem) `Statlib/HighDim/Concentration/HansonWright.lean:5398` · topic `HighDim`
Closure: 62 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 27: coord_mul_subexponential_exists_of_indep, coord_mul_scaled_subexponential_exists_of_indep, offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, …)_
    ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 21: cov_diagonal_concentration, cov_quadratic_deviation, cov_trace_concentration, …)_
  ◆ `IsIsotropic` — def · `Statlib/HighDim/Vocabulary/RandomVector.lean:109`  _(also used by 6: subgaussian_norm_sq_subexponential, isotropic_mean_sq_norm, isotropic_norm_concentration, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 66: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:37`  _(also used by 30: frobeniusNormSq_zeroDiagMatrix_le, frobeniusNormSq_nonneg, offDiagCoeffVec_norm_sq_le_frobenius, …)_
  ▣ `HansonWrightScaleConditions` — structure · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:67`
  ◆ `quadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:15`  _(also used by 17: zeroDiag_centered_quadratic_form_tail_high_of_decoupling_and_decoupled_tail, zeroDiag_centered_quadratic_form_tail_high_of_const_decoupling_and_decoupled_tail, zeroDiag_centered_quadratic_form_tail_high_of_const_decoupling_absorb, …)_
  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 30: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, …)_
  ◆ `decoupledOffDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:33`  _(also used by 42: decoupledOffDiagQuadForm_eq_sum_coeff, decoupledOffDiagQuadForm_eq_inner_coeff, decoupledOffDiagQuadForm_const_right_eq_inner_coeffVec, …)_
        · `measure_event_le_ofReal_of_one_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1495`
          ◆ `offDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:27`  _(also used by 8: offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_decoupling_norm_bernstein_absorb, …)_
            · `offDiagQuadForm_eq_zero_of_entries` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:280`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
          ★ `offdiag_hanson_wright_tail_high_of_offdiag_entries_zero` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4352`
            · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 15: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_norm_sq_mean_le_dim, …)_
            · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1341`  _(also used by 14: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, weighted_coord_sq_centered_sum_tail_explicit, …)_
            ◆ `diagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:21`  _(also used by 2: diagQuadForm_centered_tail_bernstein_explicit, hanson_wright_tail_high_of_offdiag_tail)_
            · `coord_mul_integrable_of_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1232`
            · `offDiagQuadForm_integrable_of_coord_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1270`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
            · `diagQuadForm_centered_eq_sum` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:312`  _(also used by 1: diagQuadForm_centered_tail_bernstein_explicit)_
            · `right_pos_of_pos_lt_min` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1518`
            · `hanson_high_spectral_denom_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1539`
            · `hanson_high_norm_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1552`
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 30: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `matrix_entry_abs_le_l2_opNorm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:350`  _(also used by 1: diagPartMatrix_norm_le)_
            ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
            ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_subexponential_exists, design_noise_inner_subexponential, …)_
            · `coord_sq_centered_scaled_exp_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2016`  _(also used by 1: cov_trace_concentration)_
            · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
            · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
            ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
            ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:73`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
            · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1952`  _(also used by 2: coord_sq_centered_scaled_mgf_bound_explicit, cov_trace_concentration)_
            · `coord_sq_centered_scaled_subexponential_explicit_of_range` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2097`  _(also used by 2: weighted_coord_sq_centered_sum_tail_explicit, subgaussian_norm_sq_subexponential)_
            ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, cov_trace_concentration, sampleCovariance_concentration, …)_
            · `left_pos_of_pos_lt_min` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1513`
            · `hanson_high_frobenius_denom_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1525`  _(also used by 1: hanson_high_frobenius_pos)_
            · `diag_sq_sum_le_frobeniusNormSq` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:377`
            · `two_mul_exp_neg_le_exp_neg_hanson_high` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1580`
            · `diagonal_bernstein_real_bound` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1678`
            ★ `diag_hanson_wright_tail_high` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3897`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
            · `exp_neg_hanson_stronger_le_weaker` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1670`
            · `coord_mul_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1249`  _(also used by 1: coord_mul_subexponential_exists_of_indep)_
            · `offDiagQuadForm_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1283`
            · `offDiagQuadForm_centered_eq_self_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1328`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
            · `quadForm_eq_diag_add_offdiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:236`
            · `quadForm_centered_eq_diag_offdiag_centered` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:295`
            · `abs_add_event_subset_half` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1728`
            · `quadForm_centered_tail_le_diag_offdiag_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1745`
            · `quadForm_centered_tail_le_two_mul_of_diag_offdiag_tail_bounds` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1795`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
          ★ `hanson_wright_tail_high_of_offdiag_tail_weakened` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4202`
            · `diagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:254`
            · `offDiagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:260`
            · `quadForm_zeroDiagMatrix_eq_offDiagQuadForm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:271`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
            · `offdiag_tail_of_zeroDiag_centered_quad_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2885`  _(also used by 6: offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb, …)_
            ★ `offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3676`
          ★ `hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4289`
        ★ `hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents'` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4399`
      ★ `hanson_wright_tail_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4484`  _(also used by 1: hanson_wright_of_const_decoupling_norm_bernstein_absorb_of_exponents)_
    ★ `hanson_wright_tail_of_const_decoupling_scale_conditions` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4577`
  ★ `hanson_wright` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:5363`
  · `quadratic_form_mean_isotropic` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2842`
★ `hanson_wright_isotropic` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:5398` **← headline**

> Closure has 62 declarations — diagram omitted (cap 60).
