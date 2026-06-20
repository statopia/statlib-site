# Proof narrative — gaussian_lipschitz_upper_tail_of_universal_herbst

Root: **gaussian_lipschitz_upper_tail_of_universal_herbst** (theorem) `Statlib/SubGaussian/gaussian_lipschitz_upper_tail_of_universal_herbst.lean:11` · topic `SubGaussian`
Closure: 181 declarations across 37 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 55: memLp_polynomial_gaussianReal, integrable_polynomial_mul_gaussianPDFReal, memLp_aeval_intPolynomial_gaussianReal, …)_
  ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 38: GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, sigmaFinite_stdGaussianPi, …)_
      ◆ `HerbstBound` — def · `Statlib/SubGaussian/HerbstBound.lean:13`  _(also used by 5: UniversalHerbstBound, gaussian_lipschitz_concentration_of_expIntegrable, herbstBound_neg, …)_
    ★ `gaussian_lipschitz_upper_tail_of_expIntegrable` — theorem · `Statlib/SubGaussian/gaussian_lipschitz_upper_tail_of_expIntegrable.lean:13`  _(also used by 1: gaussian_lipschitz_concentration_of_expIntegrable)_
            · `integrable_exp_abs_stdGaussian` — lemma · `Statlib/Gaussian/Basic.lean:237`  _(also used by 1: integral_cexp_mul_g_eq_zero)_
            · `norm_le_sum_abs_fin` — lemma · `Statlib/Gaussian/Basic.lean:270`
          · `integrable_exp_norm_stdGaussianPi_nonneg` — lemma · `Statlib/Gaussian/Basic.lean:279`
    · `integrable_exp_centered_of_lipschitz_stdGaussianPi` — lemma · `Statlib/Gaussian/Basic.lean:310`  _(also used by 1: gaussian_lipschitz_concentration)_
            ◆ `gaussianMollify` — noncomputable def · `Statlib/SubGaussian/gaussianMollify.lean:18`  _(also used by 1: gaussianMollify_coord_lipschitz)_
            · `stdGaussianPi_absolutelyContinuous` — lemma · `Statlib/Gaussian/Basic.lean:38`
            · `qmp_affine_stdGaussianPi` — lemma · `Statlib/SubGaussian/qmp_affine_stdGaussianPi.lean:12`
            · `ae_differentiableAt_coord_slice` — lemma · `Statlib/SubGaussian/ae_differentiableAt_coord_slice.lean:13`
            · `lipschitzWith_update` — lemma · `Statlib/SubGaussian/lipschitzWith_update.lean:12`  _(also used by 1: lipschitz_coord_slice)_
            · `integrable_id_stdGaussianPi` — lemma · `Statlib/Gaussian/Basic.lean:195`  _(also used by 1: gaussian_ibp_coord)_
          · `integrable_of_lipschitz_stdGaussianPi` — lemma · `Statlib/Gaussian/Basic.lean:209`
            · `lipschitzWith_affine` — lemma · `Statlib/SubGaussian/lipschitzWith_affine.lean:13`
            · `lipschitz_comp_affine_integrable` — lemma · `Statlib/SubGaussian/lipschitz_comp_affine_integrable.lean:14`
            · `hasDerivAt_tendsto_seq` — lemma · `Statlib/SubGaussian/hasDerivAt_tendsto_seq.lean:12`
            · `aestronglyMeasurable_deriv_coord` — lemma · `Statlib/SubGaussian/aestronglyMeasurable_deriv_coord.lean:13`
            · `gaussianMollify_lipschitz` — lemma · `Statlib/SubGaussian/gaussianMollify_lipschitz.lean:17`  _(also used by 1: gaussianMollify_coord_lipschitz)_
            · `ae_lineDiffAt_direction` — lemma · `Statlib/SubGaussian/ae_lineDiffAt_direction.lean:13`
            · `ae_differentiableAt_shifted` — lemma · `Statlib/SubGaussian/ae_differentiableAt_shifted.lean:13`
            · `aestronglyMeasurable_lineDeriv_direction` — lemma · `Statlib/SubGaussian/aestronglyMeasurable_lineDeriv_direction.lean:13`
            · `gaussianMollify_C1_with_gradient_bound` — lemma · `Statlib/SubGaussian/gaussianMollify_C1_with_gradient_bound.lean:23`
            · `gaussianMollify_memLp_exp` — lemma · `Statlib/SubGaussian/gaussianMollify_memLp_exp.lean:16`
            · `gaussianMollify_memLp_grad_exp` — lemma · `Statlib/SubGaussian/gaussianMollify_memLp_grad_exp.lean:15`
            ◆ `entropyPi` — def · `Statlib/Entropy/Basic.lean:35`  _(also used by 7: entropyPi_eq_integral_mul_log_of_integral_eq_one, entropyPi_const, entropyPi_sq_eq, …)_
            ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 15: entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, entropy_sq_eq, …)_
            ◆ `SatisfiesLSI` — def · `Statlib/Entropy/Basic.lean:42`  _(also used by 6: SatisfiesLSI.mono, SatisfiesLSI.apply, gaussian_log_sobolev_of_universal_tensorization, …)_
            ◆ `TensorizationLSIAt` — def · `Statlib/Entropy/Basic.lean:52`  _(also used by 3: UniversalTensorizationLSI, tensorization_lsi_at_of_universal, gaussian_log_sobolev_structured_of_tensorization_at)_
            ★ `tensorization_lsi` — theorem · `Statlib/Entropy/LogSobolev.lean:3037`
            ★ `tensorization_lsi_of_at` — theorem · `Statlib/Entropy/LogSobolev.lean:3051`
            ★ `gaussian_log_sobolev_of_tensorization_at` — theorem · `Statlib/Entropy/LogSobolev.lean:3070`  _(also used by 2: gaussian_log_sobolev_of_universal_tensorization, gaussian_log_sobolev_structured_of_tensorization_at)_
            · `integral_sq_nonneg` — lemma · `Statlib/Entropy/LogSobolev.lean:183`
            · `hatFun` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:1669`
            · `smoothCutoff` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:1675`
            · `spatialTrunc` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:1734`
            · `smoothCutoffDeriv` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:1726`
            · `spatialTruncDeriv` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:1738`
            · `hatFun_eq_zero_of_abs_ge` — private lemma · `Statlib/Entropy/LogSobolev.lean:1711`
            · `smoothCutoff_eq_zero_of_abs_ge` — private lemma · `Statlib/Entropy/LogSobolev.lean:1717`
            · `continuous_smoothCutoff` — private lemma · `Statlib/Entropy/LogSobolev.lean:1750`
            · `spatialTrunc_bounded` — private lemma · `Statlib/Entropy/LogSobolev.lean:1966`
            · `hatFun_nonneg` — private lemma · `Statlib/Entropy/LogSobolev.lean:1679`
            · `hatFun_le_one` — private lemma · `Statlib/Entropy/LogSobolev.lean:1682`
            · `smoothCutoff_nonneg` — private lemma · `Statlib/Entropy/LogSobolev.lean:1686`
            · `smoothCutoff_le_one` — private lemma · `Statlib/Entropy/LogSobolev.lean:1693`
            · `hatFun_eq_one_of_abs_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:1701`
            · `smoothCutoff_eq_one_of_abs_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:1707`
            · `hasDerivAt_zero_of_quadratic_bound` — private lemma · `Statlib/Entropy/LogSobolev.lean:1810`
            · `one_sub_hatFun_le_abs_sub` — private lemma · `Statlib/Entropy/LogSobolev.lean:1755`
            · `smoothCutoff_sub_one_le_sq` — private lemma · `Statlib/Entropy/LogSobolev.lean:1783`
            · `hatFun_le_abs_sub` — private lemma · `Statlib/Entropy/LogSobolev.lean:1768`
            · `smoothCutoff_le_sq` — private lemma · `Statlib/Entropy/LogSobolev.lean:1797`
            · `hasDerivAt_smoothCutoff` — private lemma · `Statlib/Entropy/LogSobolev.lean:1832`
            · `spatialTrunc_sq_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:1741`
            · `integrable_sq_of_memLp` — lemma · `Statlib/Entropy/LogSobolev.lean:188`
            · `abs_mul_log_le_sq_add_one` — lemma · `Statlib/Entropy/LogSobolev.lean:249`
            · `neg_mul_log_le_one` — lemma · `Statlib/Entropy/LogSobolev.lean:295`
            · `exists_bounded_C1_approx` — private lemma · `Statlib/Entropy/LogSobolev.lean:1986`
            · `lsi_bdd_unnormalized` — private lemma · `Statlib/Entropy/LogSobolev.lean:2345`
            · `lsi_approximation_from_bounded` — private lemma · `Statlib/Entropy/LogSobolev.lean:2499`
            ◆ `ouSemigroup` — def · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:42`  _(also used by 2: ouSemigroup_cameron_martin, entropy_ou_nonneg)_
            · `ouSemigroup_bound_norm` — private lemma · `Statlib/Entropy/LogSobolev.lean:885`
            · `ouSemigroup_integrable_of_bound` — private lemma · `Statlib/Entropy/LogSobolev.lean:1073`
            · `ouSemigroup_hasDerivAt` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:133`
            · `ouSemigroup_stein_repr` — private lemma · `Statlib/Entropy/LogSobolev.lean:904`
            · `ouSemigroup_hasSecondDeriv` — private lemma · `Statlib/Entropy/LogSobolev.lean:968`
            · `ouSemigroup_memLp_of_bound` — private lemma · `Statlib/Entropy/LogSobolev.lean:1081`
            · `integral_ouSemigroup` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:62`  _(also used by 1: entropy_ou_nonneg)_
            · `ouSemigroup_sq_integral_le_of_measurable` — private lemma · `Statlib/Entropy/LogSobolev.lean:1137`
            · `ouSemigroup_sq_integral_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:1105`
            · `integrable_sq_add_eps_mul_log` — lemma · `Statlib/Entropy/LogSobolev.lean:411`
            · `mul_log_superadditive` — lemma · `Statlib/Entropy/LogSobolev.lean:386`
            · `fisher_info_sq_pointwise` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2679`
            · `fisher_info_sq_upper` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2688`
            · `ouSemigroup_zero` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:46`
            · `ouSemigroup_entropy_integrable_of_bdd` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2806`
            · `ouSemigroup_continuousOn_time` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:3075`
            · `entropy_functional_continuousOn` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:3099`
            · `ouGeneratorAt` — private noncomputable def · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:287`
            · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/Gaussian/Basic.lean:112`
            · `memLp_pow_id_gaussianReal` — lemma · `Statlib/Gaussian/Basic.lean:137`  _(also used by 1: memLp_polynomial_gaussianReal)_
            · `stdGaussian_Icc_lower_bound` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1066`
            · `ouSemigroup_lower_bound_Ioo` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1588`
            · `entropy_dissipation_domination` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1838`
            · `ouGeneratorAt_mul_log_integrable` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2847`
            · `ouVar_ne_zero` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:851`
            · `integrable_mehler_prod` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:931`
            · `map_affine_stdGaussian` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:842`
            · `ae_zero_of_comp_affine` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:858`
            · `ouSemigroup_pos_ae` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:990`
            · `hasDerivAt_gaussianPDFReal_std` — lemma · `Statlib/Gaussian/Basic.lean:176`  _(also used by 1: hasDerivAt_hermiteEval_mul_gaussianPDF)_
            · `integrable_id_mul_mul_gaussianPDFReal_of_memLp` — lemma · `Statlib/Gaussian/Basic.lean:94`
            · `integrable_mul_gaussianPDFReal_of_memLp` — lemma · `Statlib/Gaussian/Basic.lean:82`
            · `stein_identity` — lemma · `Statlib/Gaussian/Stein.lean:23`  _(also used by 3: integral_aeval_hermite_eq_zero, hermite_inner_succ, stein_identity_of_lipschitz)_
            · `ouSemigroup_time_deriv_leibniz` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:311`
            · `ouSemigroup_time_deriv` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:542`
            · `ouSemigroup_lower_bound` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1100`
            · `entropy_hasDerivAt_of_time_deriv` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:665`
            · `integrable_ouSemigroup` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:874`  _(also used by 1: entropy_ou_nonneg)_
            · `integrable_one_add_log_ouSemigroup` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1290`
            · `gaussian_dirichlet_form` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:243`
            · `dirichlet_form_entropy` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:768`
            · `memLp_two_one_add_log_ouSemigroup` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1391`
            · `integral_sq_div_le'` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1521`
            · `ouSemigroup_sq_div_le'` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:1561`
            · `entropy_dissipation` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2120`
            · `integral_sq_div_le` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2495`
            · `ouSemigroup_sq_div_le` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2535`
            · `fisher_integrand_memLp2` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2892`
            · `fisherInfo_ouSemigroup_le` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2574`
            · `ouSemigroup_tendsto` — lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:194`
            · `entropy_ou_tendsto_zero` — private lemma · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:2700`
            ★ `gaussian_lsi_normalized_from_ou` — theorem · `Statlib/Gaussian/OrnsteinUhlenbeck.lean:3141`
            · `lsi_of_bounded_C2_ae_pos` — private lemma · `Statlib/Entropy/LogSobolev.lean:464`
            · `lsi_of_bounded_C2` — private lemma · `Statlib/Entropy/LogSobolev.lean:485`
            · `lsi_of_bounded_C1` — private lemma · `Statlib/Entropy/LogSobolev.lean:1173`
            · `gaussian_lsi_normalized_of_integrable` — private lemma · `Statlib/Entropy/LogSobolev.lean:2544`
            · `gaussian_lsi_normalized` — lemma · `Statlib/Entropy/LogSobolev.lean:2561`
            · `integrable_neg_part_sq_mul_log` — lemma · `Statlib/Entropy/LogSobolev.lean:317`
            · `gaussian_lsi_1d_ibp_core` — lemma · `Statlib/Entropy/LogSobolev.lean:2585`
            ★ `gaussian_lsi_1d_core` — theorem · `Statlib/Entropy/LogSobolev.lean:3133`  _(also used by 1: gaussian_lsi_1d)_
            ◆ `condEntropyAt` — def · `Statlib/Entropy/Basic.lean:77`  _(also used by 5: condEntropyAt_nonneg, integrated_condEntropyAt_eq, condEntropyAt_nonneg_of_nonneg, …)_
            · `integral_stdGaussianPi_one_eq` — private lemma · `Statlib/Entropy/LogSobolev.lean:3629`
            · `entropy_subadditivity_fin1` — private lemma · `Statlib/Entropy/LogSobolev.lean:3649`
            · `update_zero_eq_cons` — private lemma · `Statlib/Entropy/LogSobolev.lean:4565`
            · `condExpect_zero_eq_comp_tail` — private lemma · `Statlib/Entropy/LogSobolev.lean:4610`
            · `integrable_comp_tail_stdGaussianPi` — private lemma · `Statlib/Entropy/LogSobolev.lean:4617`
            · `mul_log_ge_neg_inv_exp` — lemma · `Statlib/Entropy/LogSobolev.lean:3312`
            · `integral_condExpect_eq_integral_pi` — private lemma · `Statlib/Entropy/LogSobolev.lean:3260`  _(also used by 2: integrated_condEntropyAt_eq, jensen_condExpect_integral_le)_
            · `entropy_chain_rule_pi` — private lemma · `Statlib/Entropy/LogSobolev.lean:3471`
            · `integral_comp_tail_stdGaussianPi` — private lemma · `Statlib/Entropy/LogSobolev.lean:4572`
            · `entropyPi_comp_tail` — private lemma · `Statlib/Entropy/LogSobolev.lean:4600`
            · `integrable_condExpect_stdGaussianPi_gen` — private lemma · `Statlib/Entropy/LogSobolev.lean:3337`  _(also used by 1: jensen_condExpect_integral_le)_
            · `ae_snd_of_ae_marginal` — private lemma · `Statlib/Entropy/LogSobolev.lean:3325`  _(also used by 1: jensen_condExpect_integral_le)_
            · `integrable_condEntropyAt_of_nonneg` — private lemma · `Statlib/Entropy/LogSobolev.lean:3362`  _(also used by 1: jensen_condExpect_integral_le)_
            · `condEntropyAt_comp_tail` — private lemma · `Statlib/Entropy/LogSobolev.lean:4589`
            · `ae_ae_update_of_ae` — private lemma · `Statlib/Entropy/LogSobolev.lean:3895`
            · `ae_integrable_prod_update_update` — private lemma · `Statlib/Entropy/LogSobolev.lean:3938`
            · `update_comm_of_ne` — private lemma · `Statlib/Entropy/LogSobolev.lean:3617`
            · `mul_log_ge_sub_one` — lemma · `Statlib/Entropy/LogSobolev.lean:131`
            · `gibbs_pointwise` — private lemma · `Statlib/Entropy/LogSobolev.lean:3597`  _(also used by 1: log_sum_inequality)_
            · `log_sum_inequality_nn` — private lemma · `Statlib/Entropy/LogSobolev.lean:3751`
            · `condEntropyAt_ge_cross_term` — private lemma · `Statlib/Entropy/LogSobolev.lean:4050`
            · `entropy_convex_mixture` — private lemma · `Statlib/Entropy/LogSobolev.lean:4079`
            · `integrated_condEntropyAt_condExpect_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:4488`
            · `entropy_subadditivity_integrable` — private lemma · `Statlib/Entropy/LogSobolev.lean:4634`
            · `entropy_subadditivity_of_nonneg` — private lemma · `Statlib/Entropy/LogSobolev.lean:4830`
            · `entropy_subadditivity_pi` — private lemma · `Statlib/Entropy/LogSobolev.lean:4854`
            · `ae_memLp_slice_of_memLp_pi` — private lemma · `Statlib/Entropy/LogSobolev.lean:3205`
            · `condEntropyAt_eq` — lemma · `Statlib/Entropy/Basic.lean:138`
            · `hasDerivAt_slice` — private lemma · `Statlib/Entropy/LogSobolev.lean:3158`
            · `condEntropyAt_le_of_satisfiesLSI` — private lemma · `Statlib/Entropy/LogSobolev.lean:3176`
            · `integrable_condGrad` — private lemma · `Statlib/Entropy/LogSobolev.lean:4880`
            · `integral_condEntropyAt_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:4926`
            · `softTrunc` — private noncomputable def · `Statlib/Entropy/LogSobolev.lean:4963`
            · `softTrunc_tendsto` — private lemma · `Statlib/Entropy/LogSobolev.lean:5061`
            · `softTrunc_le_M` — private lemma · `Statlib/Entropy/LogSobolev.lean:5020`
            · `softTrunc_deriv_le_one` — private lemma · `Statlib/Entropy/LogSobolev.lean:5042`
            · `hasDerivAt_softTrunc` — private lemma · `Statlib/Entropy/LogSobolev.lean:4967`
            · `softTrunc_le_abs` — private lemma · `Statlib/Entropy/LogSobolev.lean:5006`
            · `softTrunc_sq_le` — private lemma · `Statlib/Entropy/LogSobolev.lean:5035`
            · `integrable_sq_mul_log_of_C1_L2` — private lemma · `Statlib/Entropy/LogSobolev.lean:5118`
            ★ `tensorization_lsi_core` — theorem · `Statlib/Entropy/LogSobolev.lean:5585`
            ★ `gaussian_log_sobolev` — theorem · `Statlib/Entropy/LogSobolev.lean:5637`
            · `entropyPi_exp_le_of_C1` — lemma · `Statlib/SubGaussian/entropyPi_exp_le_of_C1.lean:14`
            · `gaussianMollify_tendsto` — lemma · `Statlib/SubGaussian/gaussianMollify_tendsto.lean:16`
            · `integrable_exp_norm_add_const` — lemma · `Statlib/SubGaussian/integrable_exp_norm_add_const.lean:12`
            · `mul_exp_le_exp_succ` — lemma · `Statlib/SubGaussian/mul_exp_le_exp_succ.lean:12`
            · `integrable_mul_exp_norm_add_const` — lemma · `Statlib/SubGaussian/integrable_mul_exp_norm_add_const.lean:14`
            · `norm_mul_log_le_of_abs_le` — lemma · `Statlib/SubGaussian/norm_mul_log_le_of_abs_le.lean:14`
            · `entropyPi_tendsto_of_uniform` — lemma · `Statlib/SubGaussian/entropyPi_tendsto_of_uniform.lean:17`
          · `entropyPi_exp_le_of_lipschitz` — lemma · `Statlib/SubGaussian/entropyPi_exp_le_of_lipschitz.lean:31`
            · `entropyPi_exp_eq` — lemma · `Statlib/SubGaussian/entropyPi_exp_eq.lean:16`
          · `mgf_le_of_entropyPi_bound` — lemma · `Statlib/SubGaussian/mgf_le_of_entropyPi_bound.lean:22`
        · `mgf_le_exp_of_lipschitz_stdGaussianPi` — lemma · `Statlib/SubGaussian/mgf_le_exp_of_lipschitz_stdGaussianPi.lean:16`
      · `hasSubgaussianMGF_centered_of_lipschitz_stdGaussianPi` — lemma · `Statlib/SubGaussian/hasSubgaussianMGF_centered_of_lipschitz_stdGaussianPi.lean:14`
    ★ `herbst_argument_core` — theorem · `Statlib/SubGaussian/herbst_argument_core.lean:14`  _(also used by 2: gaussian_lipschitz_concentration, herbst_argument)_
  ★ `gaussian_lipschitz_upper_tail` — theorem · `Statlib/SubGaussian/gaussian_lipschitz_upper_tail.lean:17`
★ `gaussian_lipschitz_upper_tail_of_universal_herbst` — theorem · `Statlib/SubGaussian/gaussian_lipschitz_upper_tail_of_universal_herbst.lean:11` **← headline**

> Closure has 181 declarations — diagram omitted (cap 60).
