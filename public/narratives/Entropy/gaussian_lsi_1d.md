# Proof narrative — gaussian_lsi_1d

Root: **gaussian_lsi_1d** (theorem) `Statlib/Entropy/LogSobolev.lean:3137` · topic `Entropy`
Closure: 94 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 21: condEntropyAt, entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, …)_
  ◆ `SatisfiesLSI` — def · `Statlib/Entropy/Basic.lean:42`  _(also used by 11: TensorizationLSIAt, SatisfiesLSI.mono, SatisfiesLSI.apply, …)_
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
      · `abs_mul_log_le_sq_add_one` — lemma · `Statlib/Entropy/LogSobolev.lean:249`  _(also used by 1: integrable_sq_mul_log_of_C1_L2)_
      · `neg_mul_log_le_one` — lemma · `Statlib/Entropy/LogSobolev.lean:295`  _(also used by 1: integrable_sq_mul_log_of_C1_L2)_
            · `exists_bounded_C1_approx` — private lemma · `Statlib/Entropy/LogSobolev.lean:1986`
      · `lsi_bdd_unnormalized` — private lemma · `Statlib/Entropy/LogSobolev.lean:2345`
          · `lsi_approximation_from_bounded` — private lemma · `Statlib/Entropy/LogSobolev.lean:2499`
            ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 64: TensorizationLSIAt, stdGaussianPi, stdGaussianPi_absolutelyContinuous, …)_
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
  ★ `gaussian_lsi_1d_core` — theorem · `Statlib/Entropy/LogSobolev.lean:3133`  _(also used by 2: integrable_sq_mul_log_of_C1_L2, gaussian_log_sobolev)_
★ `gaussian_lsi_1d` — theorem · `Statlib/Entropy/LogSobolev.lean:3137` **← headline**

> Closure has 94 declarations — diagram omitted (cap 60).
