# Proof narrative — gaussian_poincare

Root: **gaussian_poincare** (theorem) `Statlib/Gaussian/Poincare.lean:980` · topic `Gaussian`
Closure: 81 declarations across 24 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 52: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_polynomial_mul_gaussianPDFReal, …)_
  ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 62: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
    ◆ `sigmaAlgExcept` — def · `Statlib/Variance/sigmaAlgExcept.lean:20`  _(also used by 8: gaussian_poincare_of_condVar_sum, efron_stein_anova_key, efron_stein_core_unique, …)_
    ◆ `condExpExceptCoord` — def · `Statlib/Variance/condExpExceptCoord.lean:21`  _(also used by 7: gaussian_poincare_of_condVar_sum, efron_stein_iff_condVar_sum_bound, efron_stein_of_integral_bound, …)_
  ★ `gaussian_poincare_of_efron_stein` — theorem · `Statlib/Gaussian/Poincare.lean:44`  _(also used by 1: gaussian_poincare_of_condVar_sum)_
    · `sigmaAlgExcept_le` — lemma · `Statlib/Variance/sigmaAlgExcept_le.lean:22`  _(also used by 1: efron_stein_anova_key)_
    · `efron_stein_term_eq_integral_condVar_exceptCoord` — lemma · `Statlib/Variance/efron_stein_term_eq_integral_condVar_exceptCoord.lean:22`  _(also used by 1: efron_stein_unique_eq)_
      · `efron_stein_rhs_eq_sum_integral_condVar` — lemma · `Statlib/Variance/efron_stein_rhs_eq_sum_integral_condVar.lean:22`  _(also used by 1: efron_stein_to_condVar_sum_bound)_
    ★ `efron_stein_of_condVar_sum_bound` — theorem · `Statlib/Variance/efron_stein_of_condVar_sum_bound.lean:22`  _(also used by 2: gaussian_poincare_of_condVar_sum, efron_stein_iff_condVar_sum_bound)_
        · `variance_pi_of_isEmpty` — lemma · `Statlib/Variance/variance_pi_of_isEmpty.lean:17`  _(also used by 1: efron_stein_isEmpty)_
          ◆ `piSys` — def · `Statlib/Variance/piSys.lean:22`
            · `iIndep_coord_pi` — lemma · `Statlib/Variance/iIndep_coord_pi.lean:22`
        · `indep_sigmaAlgExcept_coord` — lemma · `Statlib/Variance/indep_sigmaAlgExcept_coord.lean:24`
        · `setIntegral_eq_integral_mul_meas_of_indep` — lemma · `Statlib/Variance/setIntegral_eq_integral_mul_meas_of_indep.lean:22`
            · `generateFrom_piSys` — lemma · `Statlib/Variance/generateFrom_piSys.lean:25`
            · `isPiSystem_piSys` — lemma · `Statlib/Variance/isPiSystem_piSys.lean:21`
          · `ae_eq_zero_of_integral_piSys_zero` — lemma · `Statlib/Variance/ae_eq_zero_of_integral_piSys_zero.lean:25`
        · `condExp_condExp_comm_pi` — lemma · `Statlib/Variance/condExp_condExp_comm_pi.lean:29`
          · `integral_sq_condExp_le` — lemma · `Statlib/Variance/integral_sq_condExp_le.lean:43`
        · `efron_stein_condVar_le_of_condExp` — lemma · `Statlib/Variance/efron_stein_condVar_le_of_condExp.lean:24`
      ★ `efron_stein_core_gen` — theorem · `Statlib/Variance/efron_stein_core_gen.lean:29`
    ★ `efron_stein_core` — theorem · `Statlib/Variance/efron_stein_core.lean:21`  _(also used by 1: efron_stein_anova_key)_
  ★ `efron_stein` — theorem · `Statlib/Variance/efron_stein.lean:22`
        · `condExp_eq_fiberAvg_pi` — private lemma · `Statlib/Gaussian/Poincare.lean:649`
        · `ae_memLp_fiber` — private lemma · `Statlib/Gaussian/Poincare.lean:795`
            ◆ `hermiteEval` — abbrev · `Statlib/Gaussian/Hermite.lean:60`  _(also used by 2: hermiteNorm_eq, hermite_recurrence_norm)_
            ◆ `hermiteNorm` — noncomputable def · `Statlib/Gaussian/Hermite.lean:221`  _(also used by 2: hermiteNorm_eq, hermite_recurrence_norm)_
          ◆ `hermiteCoeff` — private def · `Statlib/Gaussian/Poincare.lean:110`  _(also used by 1: summable_hermiteCoeff_sq)_
          · `hermiteCoeff_zero` — private lemma · `Statlib/Gaussian/Poincare.lean:114`
            · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/Gaussian/Basic.lean:112`
            · `memLp_pow_id_gaussianReal` — lemma · `Statlib/Gaussian/Basic.lean:137`  _(also used by 4: ouSemigroup_time_deriv_leibniz, ouSemigroup_lower_bound, ouSemigroup_lower_bound_Ioo, …)_
            · `memLp_polynomial_gaussianReal` — lemma · `Statlib/Gaussian/Basic.lean:142`  _(also used by 2: integrable_polynomial_mul_gaussianPDFReal, integrable_f_mul_realPoly_gaussian)_
            · `memLp_aeval_intPolynomial_gaussianReal` — lemma · `Statlib/Gaussian/Hermite.lean:45`
            · `memLp_hermiteNorm` — private lemma · `Statlib/Gaussian/Poincare.lean:124`
            · `hermiteNormLp` — private noncomputable def · `Statlib/Gaussian/Poincare.lean:279`
            · `hasDerivAt_gaussianPDFReal_std` — lemma · `Statlib/Gaussian/Basic.lean:176`
            · `integrable_id_mul_mul_gaussianPDFReal_of_memLp` — lemma · `Statlib/Gaussian/Basic.lean:94`
            · `integrable_mul_gaussianPDFReal_of_memLp` — lemma · `Statlib/Gaussian/Basic.lean:82`
            · `stein_identity` — lemma · `Statlib/Gaussian/Stein.lean:23`  _(also used by 3: gaussian_dirichlet_form, ouSemigroup_time_deriv_leibniz, stein_identity_of_lipschitz)_
            · `hasDerivAt_hermiteEval` — lemma · `Statlib/Gaussian/Hermite.lean:62`
            · `integrable_aeval_intPolynomial_gaussianReal` — lemma · `Statlib/Gaussian/Hermite.lean:54`
            ★ `integral_aeval_hermite_eq_zero` — theorem · `Statlib/Gaussian/Hermite.lean:104`
            · `memLp_hermiteEval_mul` — lemma · `Statlib/Gaussian/Hermite.lean:73`
            · `memLp_deriv_hermiteEval_mul` — lemma · `Statlib/Gaussian/Hermite.lean:81`
            · `hasDerivAt_hermiteEval_mul` — lemma · `Statlib/Gaussian/Hermite.lean:67`
            ★ `derivative_hermite` — theorem · `Statlib/Gaussian/Hermite.lean:24`  _(also used by 1: hermite_recurrence_norm)_
            ★ `hermite_inner_succ` — theorem · `Statlib/Gaussian/Hermite.lean:130`
            ★ `hermite_orthogonality` — theorem · `Statlib/Gaussian/Hermite.lean:184`
            ★ `hermiteNorm_inner` — theorem · `Statlib/Gaussian/Hermite.lean:228`
            · `real_inner_eq_mul` — private lemma · `Statlib/Gaussian/Poincare.lean:275`
            · `orthonormal_hermiteNormLp` — private lemma · `Statlib/Gaussian/Poincare.lean:283`
            · `integrable_f_mul_poly_gaussian` — lemma · `Statlib/Gaussian/Hermite.lean:293`
            · `integrable_f_mul_hermiteEval` — lemma · `Statlib/Gaussian/Hermite.lean:312`
            · `integral_poly_mul_g_of_moments_below` — private lemma · `Statlib/Gaussian/Hermite.lean:662`
            · `integrable_exp_abs_stdGaussian` — lemma · `Statlib/Gaussian/Basic.lean:237`  _(also used by 1: integrable_exp_norm_stdGaussianPi_nonneg)_
            · `integral_cexp_mul_g_eq_zero` — lemma · `Statlib/Gaussian/Hermite.lean:462`
            ★ `polynomial_dense_L2_gaussian` — theorem · `Statlib/Gaussian/Hermite.lean:553`
            ★ `hermite_span_dense_L2` — theorem · `Statlib/Gaussian/Hermite.lean:684`
            · `hermiteNormLp_orthogonal_eq_bot` — private lemma · `Statlib/Gaussian/Poincare.lean:297`
            · `hermiteBasis` — private noncomputable def · `Statlib/Gaussian/Poincare.lean:332`
            · `hermite_parseval` — private lemma · `Statlib/Gaussian/Poincare.lean:339`
            ◆ `hermiteProj` — private def · `Statlib/Gaussian/Poincare.lean:120`
            · `memLp_hermiteProj` — private lemma · `Statlib/Gaussian/Poincare.lean:133`
            · `integrable_f_mul_hermiteNorm'` — private lemma · `Statlib/Gaussian/Poincare.lean:99`
            · `integral_f_mul_hermiteProj` — private lemma · `Statlib/Gaussian/Poincare.lean:170`
            · `integrable_hermiteNorm_mul_hermiteNorm` — private lemma · `Statlib/Gaussian/Poincare.lean:140`
            · `integral_hermiteProj_mul_hermiteNorm` — private lemma · `Statlib/Gaussian/Poincare.lean:146`
            · `integral_sq_hermiteProj` — private lemma · `Statlib/Gaussian/Poincare.lean:184`
            · `hermite_bessel_finite` — private lemma · `Statlib/Gaussian/Poincare.lean:206`  _(also used by 1: summable_hermiteCoeff_sq)_
          · `hermite_parseval_tail` — private lemma · `Statlib/Gaussian/Poincare.lean:369`
            · `integral_stdGaussian_eq_integral_mul_pdf` — private lemma · `Statlib/Gaussian/Hermite.lean:349`
            · `hasDerivAt_hermiteEval_mul_gaussianPDF` — private lemma · `Statlib/Gaussian/Hermite.lean:335`
            · `integrable_mul_gaussianPDFReal_of_integrable` — private lemma · `Statlib/Gaussian/Hermite.lean:320`
            ★ `integral_deriv_mul_hermiteEval` — theorem · `Statlib/Gaussian/Hermite.lean:365`
            ★ `integral_deriv_mul_hermiteNorm` — theorem · `Statlib/Gaussian/Hermite.lean:407`
          · `hermite_coeff_f'_bound` — private lemma · `Statlib/Gaussian/Poincare.lean:389`
        ★ `gaussian_poincare_1d_core` — theorem · `Statlib/Gaussian/Poincare.lean:441`  _(also used by 2: gaussian_poincare_1d, fiber_variance_le_fiber_grad_sq)_
      · `condVar_le_condExp_gradf_sq_ae_succ` — private lemma · `Statlib/Gaussian/Poincare.lean:851`
    · `condVar_le_condExp_gradf_sq_ae` — private lemma · `Statlib/Gaussian/Poincare.lean:911`
  ★ `gaussian_poincare_coord_bound_core` — theorem · `Statlib/Gaussian/Poincare.lean:938`
★ `gaussian_poincare` — theorem · `Statlib/Gaussian/Poincare.lean:980` **← headline**

> Closure has 81 declarations — diagram omitted (cap 60).
