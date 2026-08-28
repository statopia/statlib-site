# Proof narrative — tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real

Root: **tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2593` · topic `StatFoundation`
Closure: 25 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsUniformIntegrableInLp` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:53`  _(also used by 33: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_pairwise_integral_mul_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 10: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 69: t_test_consistent, inProbabilityConvergence_of_tendstoInMeasure, inProbabilityConvergence_iff_tendstoInMeasure, …)_
  ★ `tendsto_cross_covariance_matrix_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:628`  _(also used by 2: tendsto_covariance_matrix_of_pairwise_covariance_real, tendsto_cross_covariance_matrix_of_pairwise_product_moment_real)_
        ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 59: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
        ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_cross_covariance_matrix_of_pairwise_product_moment_real, tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real, …)_
          ★ `inLpConvergence_one_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2171`
          ★ `tendsto_integral_of_inLpConvergence_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:23`  _(also used by 4: tendsto_integral_sub_zero_of_inLpConvergence_one, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inLpConvergence_one, …)_
        ★ `tendsto_integral_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2188`  _(also used by 2: tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two)_
            ★ `inLpConvergence_iff_tendsto_Lp_toLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1046`  _(also used by 1: inLpConvergence_of_tendsto_Lp_toLp)_
          ★ `tendsto_Lp_toLp_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1059`
        ★ `tendsto_integral_mul_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1941`  _(also used by 4: tendsto_integral_sq_of_inLpConvergence_two_real, tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real, tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real, …)_
      ★ `tendsto_covariance_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2206`  _(also used by 2: tendsto_pairwise_covariance_of_forall_inLpConvergence_two_real, tendsto_pairwise_cross_covariance_of_forall_inLpConvergence_two_real)_
        ★ `memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:214`
          ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
        ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 9: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, …)_
      ★ `memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2458`  _(also used by 13: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
            ◆ `HasUniformlyAbsolutelyContinuousLpIntegral` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:25`  _(also used by 5: tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence, hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence, inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one, …)_
            ★ `tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:62`
          ★ `inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:76`
        ★ `inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:90`  _(also used by 1: inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable)_
      ★ `inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2469`  _(also used by 13: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
    ★ `tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2515`  _(also used by 1: tendsto_pairwise_covariance_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real)_
  ★ `tendsto_pairwise_cross_covariance_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2569`
★ `tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2593` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsUniformIntegrableInLp"]
  n1["◆ InProbabilityTailEvent"]
  n2["◆ InProbabilityConvergence"]
  n3["★ tendsto_cross_covariance_matrix_of_pairwise_covariance_real"]
  n4["◆ InLpConvergence"]
  n5["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n6["★ inLpConvergence_one_of_inLpConvergence_two"]
  n7["★ tendsto_integral_of_inLpConvergence_one"]
  n8["★ tendsto_integral_of_inLpConvergence_two"]
  n9["★ inLpConvergence_iff_tendsto_Lp_toLp"]
  n10["★ tendsto_Lp_toLp_of_inLpConvergence"]
  n11["★ tendsto_integral_mul_of_inLpConvergence_two_real"]
  n12["★ tendsto_covariance_of_inLpConvergence_two_real"]
  n13["★ memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n14["★ tendstoInMeasure_iff_dist"]
  n15["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n16["★ memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n17["◆ HasUniformlyAbsolutelyContinuousLpIntegral"]
  n18["★ tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n19["★ inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n20["★ inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n21["★ inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n22["★ tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real"]
  n23["★ tendsto_pairwise_cross_covariance_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real"]
  n24["★ tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real"]
  n2 --> n1
  n6 --> n4
  n7 --> n4
  n8 --> n4
  n8 --> n6
  n8 --> n7
  n9 --> n4
  n10 --> n4
  n10 --> n9
  n11 --> n4
  n11 --> n10
  n12 --> n4
  n12 --> n5
  n12 --> n8
  n12 --> n11
  n13 --> n0
  n15 --> n2
  n15 --> n14
  n16 --> n0
  n16 --> n2
  n16 --> n13
  n16 --> n15
  n18 --> n17
  n19 --> n17
  n19 --> n4
  n19 --> n18
  n20 --> n0
  n20 --> n4
  n20 --> n19
  n21 --> n0
  n21 --> n2
  n21 --> n4
  n21 --> n20
  n21 --> n16
  n21 --> n15
  n22 --> n0
  n22 --> n2
  n22 --> n12
  n22 --> n16
  n22 --> n21
  n23 --> n0
  n23 --> n2
  n23 --> n22
  n24 --> n0
  n24 --> n2
  n24 --> n3
  n24 --> n23
  class n24 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
