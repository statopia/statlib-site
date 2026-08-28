# Proof narrative — tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two

Root: **tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2483` · topic `StatFoundation`
Closure: 17 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsUniformIntegrableInLp` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:53`  _(also used by 35: tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_pairwise_integral_mul_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 10: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 71: t_test_consistent, inProbabilityConvergence_of_tendstoInMeasure, inProbabilityConvergence_iff_tendstoInMeasure, …)_
    ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 63: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
    ★ `inLpConvergence_one_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2171`
    ★ `tendsto_integral_of_inLpConvergence_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:23`  _(also used by 4: tendsto_integral_sub_zero_of_inLpConvergence_one, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inLpConvergence_one, …)_
  ★ `tendsto_integral_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2188`  _(also used by 2: tendsto_covariance_of_inLpConvergence_two_real, tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real)_
    ★ `memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:214`
      ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
    ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 9: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, …)_
  ★ `memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2458`  _(also used by 13: tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
        ◆ `HasUniformlyAbsolutelyContinuousLpIntegral` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:25`  _(also used by 5: tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence, hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence, inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one, …)_
        ★ `tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:62`
      ★ `inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:76`
    ★ `inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:90`  _(also used by 1: inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable)_
  ★ `inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2469`  _(also used by 13: tendsto_integral_mul_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_covariance_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real, …)_
★ `tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2483` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsUniformIntegrableInLp"]
  n1["◆ InProbabilityTailEvent"]
  n2["◆ InProbabilityConvergence"]
  n3["◆ InLpConvergence"]
  n4["★ inLpConvergence_one_of_inLpConvergence_two"]
  n5["★ tendsto_integral_of_inLpConvergence_one"]
  n6["★ tendsto_integral_of_inLpConvergence_two"]
  n7["★ memLp_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n8["★ tendstoInMeasure_iff_dist"]
  n9["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n10["★ memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n11["◆ HasUniformlyAbsolutelyContinuousLpIntegral"]
  n12["★ tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n13["★ inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n14["★ inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n15["★ inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n16["★ tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two"]
  n2 --> n1
  n4 --> n3
  n5 --> n3
  n6 --> n3
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n9 --> n2
  n9 --> n8
  n10 --> n0
  n10 --> n2
  n10 --> n7
  n10 --> n9
  n12 --> n11
  n13 --> n11
  n13 --> n3
  n13 --> n12
  n14 --> n0
  n14 --> n3
  n14 --> n13
  n15 --> n0
  n15 --> n2
  n15 --> n3
  n15 --> n14
  n15 --> n10
  n15 --> n9
  n16 --> n0
  n16 --> n2
  n16 --> n6
  n16 --> n10
  n16 --> n15
  class n16 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
