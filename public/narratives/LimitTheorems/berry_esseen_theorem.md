# Proof narrative — berry_esseen_theorem

Root: **berry_esseen_theorem** (theorem) `Statlib/LimitTheorems/berry_esseen_theorem.lean:19` · topic `LimitTheorems`
Closure: 93 declarations across 93 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

          · `charFun_integral_nonneg` — lemma · `Statlib/LimitTheorems/charFun_integral_nonneg.lean:34`
          · `abs_cdf_sub_le_one` — lemma · `Statlib/LimitTheorems/abs_cdf_sub_le_one.lean:12`
          · `cdf_lipschitz_of_density_bound` — lemma · `Statlib/LimitTheorems/cdf_lipschitz_of_density_bound.lean:12`
          ◆ `fejerKernel` — noncomputable def · `Statlib/Fourier/fejerKernel.lean:9`  _(also used by 1: fejerKernel_eq_ae)_
          ◆ `fejerCDF` — noncomputable def · `Statlib/Fourier/fejerCDF.lean:11`  _(also used by 1: fejerCDF_mem_Icc)_
            · `fejerKernel_measurable` — lemma · `Statlib/Fourier/fejerKernel_measurable.lean:9`
          · `fejerKernel_nonneg` — lemma · `Statlib/Fourier/fejerKernel_nonneg.lean:9`
            · `fejerKernel_zero` — lemma · `Statlib/Fourier/fejerKernel_zero.lean:8`
            · `fejerKernel_ne_zero` — lemma · `Statlib/Fourier/fejerKernel_ne_zero.lean:8`  _(also used by 1: fejerKernel_eq_ae)_
            · `fejerKernel_le_const` — lemma · `Statlib/Fourier/fejerKernel_le_const.lean:11`
          · `fejerKernel_neg` — lemma · `Statlib/Fourier/fejerKernel_neg.lean:9`
          · `fejerKernel_integrable` — lemma · `Statlib/Fourier/fejerKernel_integrable.lean:14`
            · `fejerCDF_monotone` — lemma · `Statlib/Fourier/fejerCDF_monotone.lean:11`
            · `measurable_fejerCDF_sub` — lemma · `Statlib/LimitTheorems/measurable_fejerCDF_sub.lean:12`
            · `fejerCDF_nonneg` — lemma · `Statlib/Fourier/fejerCDF_nonneg.lean:10`  _(also used by 1: fejerCDF_mem_Icc)_
            · `integrableOn_exp_neg_mul_Ioi` — lemma · `Statlib/Fourier/integrableOn_exp_neg_mul_Ioi.lean:7`  _(also used by 2: hasDerivAt_abel_sinc, integrableOn_exp_sinc_Ioi)_
            · `integrableOn_exp_sinc_sq_Ioi` — lemma · `Statlib/Fourier/integrableOn_exp_sinc_sq_Ioi.lean:9`
            · `hasDerivAt_sinc_sq_pointwise` — lemma · `Statlib/Fourier/hasDerivAt_sinc_sq_pointwise.lean:7`
            · `integrableOn_exp_sinc_Ioi` — lemma · `Statlib/Fourier/integrableOn_exp_sinc_Ioi.lean:8`  _(also used by 1: hasDerivAt_abel_sinc)_
            · `laplace_cos_Ioi` — lemma · `Statlib/Fourier/laplace_cos_Ioi.lean:9`  _(also used by 1: hasDerivAt_abel_sinc)_
            · `hasDerivAt_abel_sinc` — lemma · `Statlib/Fourier/hasDerivAt_abel_sinc.lean:12`  _(also used by 1: abel_sinc_integral)_
            · `hasDerivAt_arctan_div` — lemma · `Statlib/Fourier/hasDerivAt_arctan_div.lean:7`  _(also used by 1: abel_sinc_integral)_
            · `abel_sinc_integral` — lemma · `Statlib/Fourier/abel_sinc_integral.lean:15`
            · `hasDerivAt_abel_sinc_sq` — lemma · `Statlib/Fourier/hasDerivAt_abel_sinc_sq.lean:13`
            · `abel_sinc_sq_eq_interval` — lemma · `Statlib/Fourier/abel_sinc_sq_eq_interval.lean:13`
            ★ `integral_sinc_sq_Ioi` — theorem · `Statlib/Fourier/integral_sinc_sq_Ioi.lean:10`
            · `fejerKernel_half_integral` — lemma · `Statlib/Fourier/fejerKernel_half_integral.lean:13`
          ★ `fejerKernel_integral_one` — theorem · `Statlib/Fourier/fejerKernel_integral_one.lean:16`
            · `fejerCDF_le_one` — lemma · `Statlib/Fourier/fejerCDF_le_one.lean:12`  _(also used by 1: fejerCDF_mem_Icc)_
          · `integrable_fejerCDF_sub` — lemma · `Statlib/LimitTheorems/integrable_fejerCDF_sub.lean:13`
            · `fejerCDF_bracket_upper` — lemma · `Statlib/LimitTheorems/fejerCDF_bracket_upper.lean:17`
          · `cdf_le_fejerCDF_integral` — lemma · `Statlib/LimitTheorems/cdf_le_fejerCDF_integral.lean:14`
            · `fejerCDF_symm` — lemma · `Statlib/Fourier/fejerCDF_symm.lean:13`
            · `fejerCDF_bracket_lower` — lemma · `Statlib/LimitTheorems/fejerCDF_bracket_lower.lean:12`
          · `fejerCDF_integral_le_cdf` — lemma · `Statlib/LimitTheorems/fejerCDF_integral_le_cdf.lean:14`
            · `fejerKernel_eq_sinc` — lemma · `Statlib/Fourier/fejerKernel_eq_sinc.lean:23`
            · `fejerKernel_continuous` — lemma · `Statlib/Fourier/fejerKernel_continuous.lean:10`
            · `setIntegral_Iic_eq_add_intervalIntegral` — lemma · `Statlib/Fourier/setIntegral_Iic_eq_add_intervalIntegral.lean:8`
            · `hasDerivAt_fejerCDF` — lemma · `Statlib/Fourier/hasDerivAt_fejerCDF.lean:14`
            · `abs_one_sub_div_le` — lemma · `Statlib/Fourier/abs_one_sub_div_le.lean:8`
            · `hasDerivAt_cesaro_sinc` — lemma · `Statlib/Fourier/hasDerivAt_cesaro_sinc.lean:9`
            · `cesaro_cos_at_zero` — lemma · `Statlib/Fourier/cesaro_cos_at_zero.lean:8`
            · `hasDerivAt_cesaro_antideriv` — lemma · `Statlib/Fourier/hasDerivAt_cesaro_antideriv.lean:8`
            · `cesaro_cos_interval_integral` — lemma · `Statlib/Fourier/cesaro_cos_interval_integral.lean:9`
            · `cesaro_cos_eq_fejerKernel` — lemma · `Statlib/Fourier/cesaro_cos_eq_fejerKernel.lean:13`
            · `fejerCDF_zero` — lemma · `Statlib/Fourier/fejerCDF_zero.lean:10`
            · `fejerCDF_eq_cesaro` — lemma · `Statlib/Fourier/fejerCDF_eq_cesaro.lean:16`
            · `abs_sin_mul_div_le` — lemma · `Statlib/LimitTheorems/abs_sin_mul_div_le.lean:11`
            · `intervalIntegrable_sin_div` — lemma · `Statlib/LimitTheorems/intervalIntegrable_sin_div.lean:12`
            · `sinc_integral_crude_bound` — lemma · `Statlib/LimitTheorems/sinc_integral_crude_bound.lean:13`
            · `sinc_substitution` — lemma · `Statlib/LimitTheorems/sinc_substitution.lean:11`
            · `hasDerivAt_neg_cos_div` — lemma · `Statlib/LimitTheorems/hasDerivAt_neg_cos_div.lean:12`
            · `cos_div_sq_integral_bound` — lemma · `Statlib/LimitTheorems/cos_div_sq_integral_bound.lean:12`
            · `sine_interval_integral_bound` — lemma · `Statlib/LimitTheorems/sine_interval_integral_bound.lean:19`
            · `sinc_integral_bound` — lemma · `Statlib/LimitTheorems/sinc_integral_bound.lean:15`
            · `integral_sin_mul` — lemma · `Statlib/LimitTheorems/integral_sin_mul.lean:11`
            · `one_sub_cos_eq` — lemma · `Statlib/LimitTheorems/one_sub_cos_eq.lean:11`
            · `abs_one_sub_cos_div_le` — lemma · `Statlib/LimitTheorems/abs_one_sub_cos_div_le.lean:12`
            · `cesaro_integral_bound` — lemma · `Statlib/LimitTheorems/cesaro_integral_bound.lean:16`
            · `cesaro_fubini_truncated` — lemma · `Statlib/LimitTheorems/cesaro_fubini_truncated.lean:19`
            · `real_sin_eq_im_exp` — lemma · `Statlib/LimitTheorems/real_sin_eq_im_exp.lean:11`
            · `integrable_exp_product` — lemma · `Statlib/LimitTheorems/integrable_exp_product.lean:11`
            · `sin_integral_le_charFun_norm` — lemma · `Statlib/LimitTheorems/sin_integral_le_charFun_norm.lean:14`
            · `setIntegral_neg_Icc` — lemma · `Statlib/LimitTheorems/setIntegral_neg_Icc.lean:12`
            · `cesaro_fourier_bound` — lemma · `Statlib/LimitTheorems/cesaro_fourier_bound.lean:18`
          · `fejer_convolution_bound` — lemma · `Statlib/LimitTheorems/fejer_convolution_bound.lean:26`
          · `fejerCDF_density_bound` — lemma · `Statlib/LimitTheorems/fejerCDF_density_bound.lean:18`
          · `fejerCDF_tail_bound` — lemma · `Statlib/Fourier/fejerCDF_tail_bound.lean:15`
          · `fejer_kernel_cdf_identity` — lemma · `Statlib/LimitTheorems/fejer_kernel_cdf_identity.lean:15`
        · `esseen_smoothing_ineq` — lemma · `Statlib/LimitTheorems/esseen_smoothing_ineq.lean:23`
      · `levy_cdf_diff_fourier_bound` — lemma · `Statlib/LimitTheorems/levy_cdf_diff_fourier_bound.lean:37`  _(also used by 1: esseen_fourier_cdf_bound)_
        · `gaussianPDFReal_le_one` — lemma · `Statlib/LimitTheorems/gaussianPDFReal_le_one.lean:12`
      · `gaussianReal_density_bounded` — lemma · `Statlib/LimitTheorems/gaussianReal_density_bounded.lean:15`
    · `esseen_concentration_universal` — lemma · `Statlib/LimitTheorems/esseen_concentration_universal.lean:9`
    · `lyapunov_third_moment` — lemma · `Statlib/CharFun/lyapunov_third_moment.lean:19`  _(also used by 2: charfun_normalized_sum_bound, charfun_prod_exp_decay)_
            · `norm_ofReal_mul_I` — lemma · `Statlib/CharFun/norm_ofReal_mul_I.lean:17`  _(also used by 1: norm_cexp_sub_quadratic_le_third)_
            · `norm_cexp_sub_quadratic_le` — lemma · `Statlib/CharFun/norm_cexp_sub_quadratic_le.lean:19`  _(also used by 2: charfun_error_le_j, norm_cexp_sub_quadratic_le_sq)_
        · `charfun_taylor_third_moment` — lemma · `Statlib/CharFun/charfun_taylor_third_moment.lean:22`
        · `norm_charFun_le_one_sub` — lemma · `Statlib/LimitTheorems/norm_charFun_le_one_sub.lean:12`  _(also used by 1: charfun_prod_exp_decay)_
          · `charfun_sum_indep` — lemma · `Statlib/CharFun/charfun_sum_indep.lean:19`
        · `charfun_iid_sum_eq_prod` — lemma · `Statlib/CharFun/charfun_iid_sum_eq_prod.lean:20`  _(also used by 1: charfun_normalized_sum_bound)_
        · `charFun_gaussianReal_standard` — lemma · `Statlib/CharFun/charFun_gaussianReal_standard.lean:18`  _(also used by 2: charfun_normalized_sum_bound, lindeberg_feller_clt)_
        · `norm_prod_sub_prod_le_sum_mul_pow` — lemma · `Statlib/CharFun/norm_prod_sub_prod_le_sum_mul_pow.lean:18`  _(also used by 2: charfun_lindeberg_pointwise, prod_one_sub_tendsto_exp_neg)_
        · `complex_pow_approx_exp_decay` — lemma · `Statlib/CharFun/complex_pow_approx_exp_decay.lean:21`
      · `charfun_diff_exp_bound` — lemma · `Statlib/LimitTheorems/charfun_diff_exp_bound.lean:11`
    · `charfun_integral_bound` — lemma · `Statlib/LimitTheorems/charfun_integral_bound.lean:9`
          · `norm_prod_sub_prod_le_sum` — lemma · `Statlib/CharFun/norm_prod_sub_prod_le_sum.lean:19`
        · `charfun_prod_vs_pow_bound` — lemma · `Statlib/CharFun/charfun_prod_vs_pow_bound.lean:21`  _(also used by 1: charfun_normalized_sum_bound)_
        · `complex_pow_approx_exp` — lemma · `Statlib/CharFun/complex_pow_approx_exp.lean:18`  _(also used by 1: charfun_normalized_sum_bound)_
      · `charfun_diff_taylor_bound` — lemma · `Statlib/LimitTheorems/charfun_diff_taylor_bound.lean:12`
    · `charfun_integrand_bound` — lemma · `Statlib/LimitTheorems/charfun_integrand_bound.lean:11`
  · `esseen_charfun_integral_bound` — lemma · `Statlib/LimitTheorems/esseen_charfun_integral_bound.lean:10`
★ `berry_esseen_theorem` — theorem · `Statlib/LimitTheorems/berry_esseen_theorem.lean:19` **← headline**

> Closure has 93 declarations — diagram omitted (cap 60).
