# Proof narrative — gaussian_lipschitz_concentration

Root: **gaussian_lipschitz_concentration** (theorem) `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:606` · topic `StatFoundation`
Closure: 115 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 30: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
      ◆ `standardPi` — def · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:34`  _(also used by 4: one_sample_t_test, standardPi_sFinite, standardPi_logSobolev_smooth_finiteFisher, …)_
    · `standardPi_absolutelyContinuous` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:40`
      · `integrable_exp_abs_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:239`  _(also used by 2: integral_cexp_mul_eq_zero_of_moments, standardPi_logSobolev_smooth_finiteFisher)_
    · `euclideanStandardGaussian_integrable_exp_of_lipschitz` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:30`
        ★ `gaussianMollifier_linearGrowth_pointwise_of_lipschitz` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:30170`
          · `standardGaussian_euclidean_integral_map_pullback` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23223`
            · `lineDeriv_eq_deriv_coord` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:358`
            · `lipschitz_insertNth` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:382`
            · `lipschitz_memLp_gaussianReal` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:86`
            · `hasDerivAt_standardGaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:178`  _(also used by 1: hasDerivAt_hermite_eval_mul_gaussianPDF)_
            · `integrable_id_mul_mul_pdf_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:96`
            · `integrable_mul_pdf_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:84`
            · `standard_stein_identity` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:25`  _(also used by 2: integral_hermite_eval_eq_zero, integral_hermite_eval_mul_succ)_
            · `steklov_hasDerivAt` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:63`
            · `forward_diff_tendsto` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:107`
            · `backward_diff_tendsto` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:120`
            · `symm_diff_quotient_tendsto` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:132`
            · `steklov_sub_norm_le` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:143`
            · `steklov_tendsto_pointwise` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:178`
            · `standard_stein_identity_of_lipschitz` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:205`
            · `update_insertNth_eq` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:373`
            · `integrable_id_standardPi` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:197`
            · `integrable_sq_coord` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:396`
            · `pi_norm_sq_le_sum_sq` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:406`
            · `integrable_norm_sq_standardPi` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:418`
          · `standardPi_integration_by_parts_coord` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:432`
            ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 221: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
          · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 31: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
            · `abs_le_of_deriv_bound` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:28`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:114`
            · `memLp_pow_id_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:139`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `integrable_of_contDiff_deriv_bounded_standardReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:50`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `memLp_polynomial_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:144`  _(also used by 1: integrable_polynomial_mul_pdf_standard)_
            · `integrable_mul_polynomial_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Hermite.lean:302`  _(also used by 1: integral_polynomial_mul_eq_zero_of_moments)_
          · `standardReal_integrationByParts_smooth_bddDeriv` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:202`
            · `integrable_exp_abs_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:659`
          · `integrable_quadratic_mul_exp_abs_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:784`  _(also used by 1: integrable_quadratic_mul_exp_abs_mul_gaussianPDFReal)_
            · `gaussianKernel_fderiv_explicit` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25325`
          · `gaussianKernel_fderiv_norm_bound` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25374`
          · `integrable_norm_sq_scaledGaussianDensity_euclidean` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25633`
          · `gaussian_scaled_derivative_bound_integral_eq` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25701`
            · `integrable_norm_sq_standardGaussianDensity_euclidean` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25432`
          · `gaussian_remainder_scaled_integral_tendsto_zero` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25490`
        ★ `gaussianMollifier_fderiv_tendsto_ae_of_lipschitz` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:25762`
          ★ `gaussianKernel_iteratedFDeriv_local_polynomial_exponential_bound` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:29072`
        ★ `gaussianMollifier_contDiff_top_of_lipschitz` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:32994`
        ★ `gaussianMollifier_lipschitzWith_of_lipschitz` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:35191`
            · `euclidean_orthonormalBasis_norm_sq_eq_sum_repr_sq` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23160`
            · `euclidean_dual_norm_sq_eq_sum_single` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23185`
            · `standardGaussian_euclidean_fderiv_coord_sum_pullback` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23241`
            · `standardGaussian_euclidean_fisher_pullback_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23266`
            · `integrable_lipschitz_standardPi` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:211`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `pi_norm_le_sum_abs` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:272`
            ★ `jensen_inequality_prob` — theorem · `Statlib/StatFoundation/Concentration/MomentType/jensen_inequality_prob.lean:8`
          · `integrable_exp_norm_standardPi_of_nonneg` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:281`  _(also used by 2: standardPi_logSobolev_smooth_finiteFisher, integrable_exp_centered_lipschitz_standardPi)_
            ★ `memLp_id` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:248`
            ★ `integrable_sq_norm` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:259`
            · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`  _(also used by 1: subexp_mgf_le_of_sq_subgaussian_explicit)_
            ◆ `standardReal_ou_mehler` — def · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1301`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `real_sqrt_one_sub_exp_neg_two_pos` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1566`
            · `integrable_linear_mul_exp_abs_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:688`
            · `integrable_linear_mul_exp_abs_mul_gaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:768`
            · `weighted_gaussian_integrableExpSet_id_eq_univ` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:940`
            · `gaussian_kernel_eq_gaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:894`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `gaussian_kernel_exp_mul_zero_pdf` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:919`
            · `gaussian_convolution_nonneg_linearGrowth_contDiff_top` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1077`
            · `gaussian_convolution_linearGrowth_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1004`
            · `gaussian_convolution_linearGrowth_contDiff_top_of_bound` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1155`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            ★ `standardReal_integrable_affine_contract_of_integrable` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:6752`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `standardReal_mehler_apply_zero` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1652`  _(also used by 2: standardReal_ou_mehler_basic, standardPi_logSobolev_smooth_finiteFisher)_
            ★ `standardReal_ou_mehler_integral_invariant` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:6584`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `standardReal_mehler_integrand_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1578`  _(also used by 1: standardReal_mehler_apply_continuous)_
            · `standardReal_mehler_apply_pos` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1661`  _(also used by 1: standardReal_ou_mehler_basic)_
            ★ `integrable_id` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:253`
            ★ `standardReal_mehler_apply_contDiff` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1831`  _(also used by 1: standardReal_ou_mehler_basic)_
            ★ `standardReal_ou_mehler_fisher_integrable_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:7221`
            · `standardReal_ou_mehler_semigroup` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1308`
            ★ `standardReal_ou_mehler_log_growth_local_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:2755`
            · `standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:80`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `memLp_aeval_intPolynomial_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Hermite.lean:43`  _(also used by 4: memLp_hermite_eval_mul, memLp_deriv_hermite_eval_mul, integral_hermite_eval_eq_zero, …)_
            · `integrable_aeval_intPolynomial_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Hermite.lean:52`  _(also used by 2: integral_hermite_eval_eq_zero, integral_hermite_eval_mul_succ)_
            · `integrable_linear_mul_exp_abs_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:762`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            ★ `standardReal_ou_mehler_time_hasDerivAt_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:3515`
            ★ `standardReal_ou_mehler_entropy_derivative_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:4353`
            ★ `standardReal_ou_mehler_generator_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:5360`
            ★ `standardReal_ou_mehler_time_deriv_linear_bound_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:3787`
            ★ `standardReal_ou_mehler_generator_memLp_two_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:6343`
            ★ `standardReal_ou_mehler_log_growth_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:2122`
            ★ `standardReal_ou_mehler_entropy_ibp_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:7975`
            ★ `standardReal_ou_mehler_spatial_deriv_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:6473`
            ★ `standardReal_ou_mehler_kernel_fisher_integrable_of_fisher_integrable` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:7173`
            ★ `standardReal_ou_mehler_fisher_pointwise_pos_of_kernel_integrable` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:6968`
            ★ `standardReal_ou_mehler_fisher_decay_pos_of_fisher_integrable` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:8372`
            ★ `standardReal_ou_mehler_entropy_integrand_hasDerivAt_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:3747`
            ★ `standardReal_logSobolev_smooth_normalized_finiteFisher` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:8636`
            ★ `standardReal_logSobolev_smooth_finiteFisher` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:10962`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `standardReal_mehler_entropy_bound_of_C1` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:11159`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher)_
            · `standardPi_integrable_finCons` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:17382`
            · `standardPi_integral_finCons` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:17338`
            · `standardPi_coord_fisher_integral_split` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:17415`
            ★ `standardPi_logSobolev_smooth_finiteFisher_coord` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:17559`
            ★ `standardGaussian_euclidean_logSobolev_smooth_finiteFisher` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23314`
            ★ `standardGaussian_logSobolev_exp_smooth_bddAbove` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23457`
          ★ `standardGaussian_logSobolev_exp_smooth` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:23754`
        ★ `standardGaussian_logSobolev_exp_lipschitz_of_smooth_approximation` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:35543`
      ★ `standardGaussian_logSobolev_exp_lipschitz` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:35813`
    ★ `standardGaussian_logSobolev_lipschitz_euclidean` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:35887`
    · `lipschitzWith_const_mul_sub_const` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:138`
    · `herbst_differential_ineq_of_entropy` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:158`
    · `quadratic_bound_of_herbst_differential` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:200`
      ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 6: subgaussian_linf_tail, lasso_noise_condition, coordinate_sample_envelope_good_profile_tail, …)_
    · `subgaussian_abs_tail_of_hasSubgaussianMGF` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:12`
  ★ `standardGaussian_lipschitz_concentration_euclidean` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:347`
★ `gaussian_lipschitz_concentration` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean:606` **← headline**

> Closure has 115 declarations — diagram omitted (cap 60).
