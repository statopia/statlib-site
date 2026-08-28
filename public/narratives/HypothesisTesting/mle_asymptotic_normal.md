# Proof narrative — mle_asymptotic_normal

Root: **mle_asymptotic_normal** (theorem) `Statlib/HypothesisTesting/Asymptotic/ChiSquareAsymptotics.lean:392` · topic `HypothesisTesting`
Closure: 28 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `WeakConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:163`  _(also used by 10: wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, …)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 22: wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, t_statistic_asymptotic_normal, …)_
  ◆ `standardizedSum` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:21`  _(also used by 14: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, tendsto_measure_studentizedDebiasedLasso_coordinate_coverageEvent_of_iid_scoreSum_l1_rowApprox_and_se_real, …)_
  · `measurable_standardizedSum` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:24`  _(also used by 8: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, wald_statistic_asymptotic_chisq1, …)_
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
  ★ `iid_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:43`  _(also used by 7: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_iid_scoreSum_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_iid_scoreSum_l1_rowApprox_and_se_real, score_statistic_asymptotic_chisq1, …)_
★ `mle_asymptotic_normal` — theorem · `Statlib/HypothesisTesting/Asymptotic/ChiSquareAsymptotics.lean:392` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ WeakConvergence"]
  n1["◆ sampleMean"]
  n2["◆ standardizedSum"]
  n3["· measurable_standardizedSum"]
  n4["· lyapunov_third_moment"]
  n5["· charfun_sum_indep"]
  n6["· charfun_iid_sum_eq_prod"]
  n7["· charFun_gaussianReal_standard"]
  n8["· norm_ofReal_mul_I"]
  n9["· norm_cexp_sub_quadratic_le"]
  n10["· charfun_taylor_third_moment"]
  n11["· norm_prod_sub_prod_le_sum"]
  n12["· charfun_prod_vs_pow_bound"]
  n13["· complex_pow_approx_exp_decay"]
  n14["· complex_pow_approx_exp"]
  n15["· charfun_arith_aux"]
  n16["· charfun_final_arithmetic"]
  n17["· charfun_normalized_sum_bound"]
  n18["· compl_Icc_eq_abs_gt"]
  n19["★ isTightMeasureSet_singleton"]
  n20["★ isTight_finiteRange"]
  n21["★ isTight_of_charFun_tendsto"]
  n22["★ levy_forward"]
  n23["· charFun_eq_of_subseq"]
  n24["· probMeasure_eq_of_charFun_eq"]
  n25["★ levy_continuity"]
  n26["★ iid_central_limit_theorem"]
  n27["★ mle_asymptotic_normal"]
  n3 --> n2
  n6 --> n5
  n9 --> n8
  n10 --> n9
  n12 --> n10
  n12 --> n11
  n14 --> n13
  n16 --> n15
  n17 --> n4
  n17 --> n6
  n17 --> n7
  n17 --> n12
  n17 --> n14
  n17 --> n16
  n20 --> n19
  n21 --> n18
  n21 --> n20
  n23 --> n22
  n25 --> n21
  n25 --> n23
  n25 --> n24
  n26 --> n2
  n26 --> n3
  n26 --> n17
  n26 --> n25
  n27 --> n0
  n27 --> n1
  n27 --> n26
  n27 --> n2
  n27 --> n3
  class n27 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
