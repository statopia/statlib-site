# Proof narrative — esseen_fourier_cdf_bound

Root: **esseen_fourier_cdf_bound** (lemma) `Statlib/LimitTheorems/esseen_fourier_cdf_bound.lean:12` · topic `LimitTheorems`
Closure: 72 declarations across 72 files. Generated from `proof_graph.json` — no files were moved.

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
  · `levy_cdf_diff_fourier_bound` — lemma · `Statlib/LimitTheorems/levy_cdf_diff_fourier_bound.lean:37`  _(also used by 1: esseen_concentration_universal)_
· `esseen_fourier_cdf_bound` — lemma · `Statlib/LimitTheorems/esseen_fourier_cdf_bound.lean:12` **← headline**

> Closure has 72 declarations — diagram omitted (cap 60).
