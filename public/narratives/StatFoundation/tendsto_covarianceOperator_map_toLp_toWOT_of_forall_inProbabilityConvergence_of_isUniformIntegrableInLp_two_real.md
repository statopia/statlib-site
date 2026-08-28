# Proof narrative — tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real

Root: **tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2773` · topic `StatFoundation`
Closure: 26 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsUniformIntegrableInLp` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:53`  _(also used by 35: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 10: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 71: t_test_consistent, inProbabilityConvergence_of_tendstoInMeasure, inProbabilityConvergence_iff_tendstoInMeasure, …)_
    ★ `memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:214`
      ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
    ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 9: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, …)_
  ★ `memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2458`  _(also used by 13: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 60: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
        ◆ `HasUniformlyAbsolutelyContinuousLpIntegral` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:25`  _(also used by 5: tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence, hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence, inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one, …)_
        ★ `tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:62`
      ★ `inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:76`
    ★ `inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:90`  _(also used by 1: inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable)_
  ★ `inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2469`  _(also used by 13: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
      ★ `tendsto_covarianceOperator_toWOT_of_forall_inner_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1566`  _(also used by 1: tendsto_covarianceOperator_toWOT_of_forall_integral_inner_mul_real)_
          ★ `inner_continuousLinearMap_apply_eq_sum_basisFun_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1686`
            ★ `memLp_id_map_toLp_of_forall_memLp_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1700`
          ★ `covarianceOperator_map_toLp_basisFun_inner_eq_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1710`  _(also used by 1: tendsto_covarianceOperator_map_toLp_basisFun_inner_of_pairwise_integral_mul_real)_
        ★ `covarianceOperator_map_toLp_inner_eq_sum_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1729`  _(also used by 1: inner_secondMoment_matrix_toEuclideanCLM_eq_covarianceOperator_map_toLp_real)_
      ★ `tendsto_covarianceOperator_map_toLp_inner_of_pairwise_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1874`  _(also used by 1: tendsto_covarianceOperator_map_toLp_inner_of_forall_inLpConvergence_two_real)_
    ★ `tendsto_covarianceOperator_map_toLp_toWOT_of_pairwise_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1908`
          ★ `inLpConvergence_iff_tendsto_Lp_toLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1046`  _(also used by 1: inLpConvergence_of_tendsto_Lp_toLp)_
        ★ `tendsto_Lp_toLp_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1059`
      ★ `tendsto_integral_mul_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1941`  _(also used by 4: tendsto_integral_sq_of_inLpConvergence_two_real, tendsto_covariance_of_inLpConvergence_two_real, tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real, …)_
    ★ `tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1997`  _(also used by 7: tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real, tendsto_norm_sub_secondMoment_matrix_toEuclideanCLM_zero_of_forall_inLpConvergence_two_real, …)_
  ★ `tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2141`
★ `tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2773` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsUniformIntegrableInLp"]
  n1["◆ InProbabilityTailEvent"]
  n2["◆ InProbabilityConvergence"]
  n3["★ memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n4["★ tendstoInMeasure_iff_dist"]
  n5["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n6["★ memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n7["◆ InLpConvergence"]
  n8["◆ HasUniformlyAbsolutelyContinuousLpIntegral"]
  n9["★ tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n10["★ inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n11["★ inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n12["★ inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n13["★ tendsto_covarianceOperator_toWOT_of_forall_inner_real"]
  n14["★ inner_continuousLinearMap_apply_eq_sum_basisFun_real"]
  n15["★ memLp_id_map_toLp_of_forall_memLp_two_real"]
  n16["★ covarianceOperator_map_toLp_basisFun_inner_eq_integral_mul_real"]
  n17["★ covarianceOperator_map_toLp_inner_eq_sum_integral_mul_real"]
  n18["★ tendsto_covarianceOperator_map_toLp_inner_of_pairwise_integral_mul_real"]
  n19["★ tendsto_covarianceOperator_map_toLp_toWOT_of_pairwise_integral_mul_real"]
  n20["★ inLpConvergence_iff_tendsto_Lp_toLp"]
  n21["★ tendsto_Lp_toLp_of_inLpConvergence"]
  n22["★ tendsto_integral_mul_of_inLpConvergence_two_real"]
  n23["★ tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real"]
  n24["★ tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inLpConvergence_two_real"]
  n25["★ tendsto_covarianceOperator_map_toLp_toWOT_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real"]
  n2 --> n1
  n3 --> n0
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n2
  n6 --> n3
  n6 --> n5
  n9 --> n8
  n10 --> n8
  n10 --> n7
  n10 --> n9
  n11 --> n0
  n11 --> n7
  n11 --> n10
  n12 --> n0
  n12 --> n2
  n12 --> n7
  n12 --> n11
  n12 --> n6
  n12 --> n5
  n16 --> n15
  n17 --> n14
  n17 --> n16
  n18 --> n17
  n19 --> n13
  n19 --> n18
  n20 --> n7
  n21 --> n7
  n21 --> n20
  n22 --> n7
  n22 --> n21
  n23 --> n7
  n23 --> n22
  n24 --> n7
  n24 --> n19
  n24 --> n23
  n25 --> n0
  n25 --> n2
  n25 --> n6
  n25 --> n7
  n25 --> n12
  n25 --> n24
  class n25 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
