# Proof narrative — multivariate_central_limit_theorem

Root: **multivariate_central_limit_theorem** (theorem) `Statlib/StatFoundation/Convergence/CentralLimitTheorem/Multivariate.lean:86` · topic `StatFoundation`
Closure: 29 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `measurable_proj` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/Multivariate.lean:22`
  · `iIndepFun_proj` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/Multivariate.lean:34`
  · `identDistrib_proj` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/Multivariate.lean:52`
    ◆ `standardizedSum` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:21`  _(also used by 15: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, tendsto_measure_studentizedDebiasedLasso_coordinate_coverageEvent_of_iid_scoreSum_l1_rowApprox_and_se_real, …)_
    · `measurable_standardizedSum` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:24`  _(also used by 9: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, mle_asymptotic_normal, …)_
      · `lyapunov_third_moment` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:563`
        · `charfun_sum_indep` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:282`
      · `charfun_iid_sum_eq_prod` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:323`
      · `charFun_gaussianReal_standard` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:272`  _(also used by 1: lindeberg_feller_central_limit_theorem)_
            · `norm_ofReal_mul_I` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:16`  _(also used by 1: norm_cexp_sub_quadratic_le_third)_
          · `norm_cexp_sub_quadratic_le` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:22`  _(also used by 2: norm_cexp_sub_quadratic_le_sq, charfun_error_le_j)_
        · `charfun_taylor_third_moment` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:86`
        · `norm_prod_sub_prod_le_sum` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:187`
      · `charfun_prod_vs_pow_bound` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:419`
        · `complex_pow_approx_exp_decay` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:350`
      · `complex_pow_approx_exp` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:401`
        · `charfun_arith_aux` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:486`
      · `charfun_final_arithmetic` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:510`
    · `charfun_normalized_sum_bound` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:612`
        · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
          ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTightMeasureSet_finiteRange)_
        ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:18`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
      ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: isTight_of_charFun_tendsto_inner)_
        ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: cramer_wold_reverse)_
      · `charFun_eq_of_subseq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:168`
      · `probMeasure_eq_of_charFun_eq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:180`  _(also used by 3: t_statistic_asymptotic_normal, z_statistic_asymptotic_normal, tendstoInDistribution_of_probabilityMeasure_tendsto_and_gaussianReal_charFun)_
    ★ `levy_continuity` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:223`  _(also used by 1: lindeberg_feller_central_limit_theorem)_
  ★ `iid_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:43`  _(also used by 7: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, mle_asymptotic_normal, …)_
★ `multivariate_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/Multivariate.lean:86` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· measurable_proj"]
  n1["· iIndepFun_proj"]
  n2["· identDistrib_proj"]
  n3["◆ standardizedSum"]
  n4["· measurable_standardizedSum"]
  n5["· lyapunov_third_moment"]
  n6["· charfun_sum_indep"]
  n7["· charfun_iid_sum_eq_prod"]
  n8["· charFun_gaussianReal_standard"]
  n9["· norm_ofReal_mul_I"]
  n10["· norm_cexp_sub_quadratic_le"]
  n11["· charfun_taylor_third_moment"]
  n12["· norm_prod_sub_prod_le_sum"]
  n13["· charfun_prod_vs_pow_bound"]
  n14["· complex_pow_approx_exp_decay"]
  n15["· complex_pow_approx_exp"]
  n16["· charfun_arith_aux"]
  n17["· charfun_final_arithmetic"]
  n18["· charfun_normalized_sum_bound"]
  n19["· compl_Icc_eq_abs_gt"]
  n20["★ isTightMeasureSet_singleton"]
  n21["★ isTight_finiteRange"]
  n22["★ isTight_of_charFun_tendsto"]
  n23["★ levy_forward"]
  n24["· charFun_eq_of_subseq"]
  n25["· probMeasure_eq_of_charFun_eq"]
  n26["★ levy_continuity"]
  n27["★ iid_central_limit_theorem"]
  n28["★ multivariate_central_limit_theorem"]
  n2 --> n0
  n4 --> n3
  n7 --> n6
  n10 --> n9
  n11 --> n10
  n13 --> n11
  n13 --> n12
  n15 --> n14
  n17 --> n16
  n18 --> n5
  n18 --> n7
  n18 --> n8
  n18 --> n13
  n18 --> n15
  n18 --> n17
  n21 --> n20
  n22 --> n19
  n22 --> n21
  n24 --> n23
  n26 --> n22
  n26 --> n24
  n26 --> n25
  n27 --> n3
  n27 --> n4
  n27 --> n18
  n27 --> n26
  n28 --> n0
  n28 --> n1
  n28 --> n2
  n28 --> n27
  class n28 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
