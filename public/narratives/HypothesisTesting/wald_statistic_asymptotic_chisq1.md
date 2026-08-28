# Proof narrative — wald_statistic_asymptotic_chisq1

Root: **wald_statistic_asymptotic_chisq1** (theorem) `Statlib/HypothesisTesting/Asymptotic/ChiSquareAsymptotics.lean:548` · topic `HypothesisTesting`
Closure: 34 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `WeakConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:163`  _(also used by 9: mle_asymptotic_normal, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, …)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 22: mle_asymptotic_normal, tStatistic_aemeasurable, t_statistic_asymptotic_normal, …)_
  ◆ `chiSquaredMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/ChiSquared.lean:22`  _(also used by 11: score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, chiSquared_variance_test, …)_
  · `chiSquared_isProbabilityMeasure` — lemma · `Statlib/StatFoundation/Probability/ChiSquared.lean:39`  _(also used by 4: score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, chiSquared_variance_test, …)_
  ◆ `standardizedSum` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:21`  _(also used by 12: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, tendsto_measure_studentizedDebiasedLasso_coordinate_coverageEvent_of_iid_scoreSum_l1_rowApprox_and_se_real, …)_
  · `measurable_standardizedSum` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:24`  _(also used by 6: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, mle_asymptotic_normal, …)_
  ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 79: score_statistic_asymptotic_chisq1, t_statistic_asymptotic_normal, one_sample_t_test, …)_
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
    · `probMeasure_eq_of_charFun_eq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:180`  _(also used by 2: t_statistic_asymptotic_normal, tendstoInDistribution_of_probabilityMeasure_tendsto_and_gaussianReal_charFun)_
        ★ `levy_continuity` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:223`  _(also used by 1: lindeberg_feller_central_limit_theorem)_
      ★ `iid_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:43`  _(also used by 7: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, mle_asymptotic_normal, …)_
    ★ `central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:97`
  ★ `z_statistic_asymptotic_normal` — theorem · `Statlib/HypothesisTesting/Asymptotic/ZTestAsymptotic.lean:34`
  ★ `single_square_law` — theorem · `Statlib/HypothesisTesting/Asymptotic/ChiSquareAsymptotics.lean:40`  _(also used by 1: score_statistic_asymptotic_chisq1)_
★ `wald_statistic_asymptotic_chisq1` — theorem · `Statlib/HypothesisTesting/Asymptotic/ChiSquareAsymptotics.lean:548` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ WeakConvergence"]
  n1["◆ sampleMean"]
  n2["◆ chiSquaredMeasure"]
  n3["· chiSquared_isProbabilityMeasure"]
  n4["◆ standardizedSum"]
  n5["· measurable_standardizedSum"]
  n6["◆ standardReal"]
  n7["· lyapunov_third_moment"]
  n8["· charfun_sum_indep"]
  n9["· charfun_iid_sum_eq_prod"]
  n10["· charFun_gaussianReal_standard"]
  n11["· norm_ofReal_mul_I"]
  n12["· norm_cexp_sub_quadratic_le"]
  n13["· charfun_taylor_third_moment"]
  n14["· norm_prod_sub_prod_le_sum"]
  n15["· charfun_prod_vs_pow_bound"]
  n16["· complex_pow_approx_exp_decay"]
  n17["· complex_pow_approx_exp"]
  n18["· charfun_arith_aux"]
  n19["· charfun_final_arithmetic"]
  n20["· charfun_normalized_sum_bound"]
  n21["· compl_Icc_eq_abs_gt"]
  n22["★ isTightMeasureSet_singleton"]
  n23["★ isTight_finiteRange"]
  n24["★ isTight_of_charFun_tendsto"]
  n25["★ levy_forward"]
  n26["· charFun_eq_of_subseq"]
  n27["· probMeasure_eq_of_charFun_eq"]
  n28["★ levy_continuity"]
  n29["★ iid_central_limit_theorem"]
  n30["★ central_limit_theorem"]
  n31["★ z_statistic_asymptotic_normal"]
  n32["★ single_square_law"]
  n33["★ wald_statistic_asymptotic_chisq1"]
  n3 --> n2
  n5 --> n4
  n9 --> n8
  n12 --> n11
  n13 --> n12
  n15 --> n13
  n15 --> n14
  n17 --> n16
  n19 --> n18
  n20 --> n7
  n20 --> n9
  n20 --> n10
  n20 --> n15
  n20 --> n17
  n20 --> n19
  n23 --> n22
  n24 --> n21
  n24 --> n23
  n26 --> n25
  n28 --> n24
  n28 --> n26
  n28 --> n27
  n29 --> n4
  n29 --> n5
  n29 --> n20
  n29 --> n28
  n30 --> n4
  n30 --> n5
  n30 --> n29
  n31 --> n0
  n31 --> n4
  n31 --> n5
  n31 --> n6
  n31 --> n30
  n31 --> n27
  n32 --> n6
  n32 --> n2
  n33 --> n0
  n33 --> n1
  n33 --> n2
  n33 --> n3
  n33 --> n31
  n33 --> n4
  n33 --> n5
  n33 --> n6
  n33 --> n32
  class n33 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
