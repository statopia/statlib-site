# Proof narrative — momentConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable

Root: **momentConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:280` · topic `StatFoundation`
Closure: 20 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsUniformIntegrableInLp` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:53`  _(also used by 38: memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, …)_
  ◆ `IsUniformIntegrable` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:59`  _(also used by 9: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_norm_integral_sub_zero_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inProbabilityConvergence_of_isUniformIntegrable, …)_
    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 10: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 69: t_test_consistent, inProbabilityConvergence_of_tendstoInMeasure, inProbabilityConvergence_iff_tendstoInMeasure, …)_
  ◆ `MomentConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:113`  _(also used by 7: momentConvergence_one_of_inLpConvergence_one, tendsto_integral_norm_rpow_two_of_momentConvergence_two, momentConvergence_two_of_tendsto_integral_norm_rpow_two, …)_
        ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
      ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 9: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, …)_
    ★ `integrable_of_inProbabilityConvergence_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:130`  _(also used by 4: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_norm_integral_sub_zero_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inProbabilityConvergence_of_isUniformIntegrable, …)_
    ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 62: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
          ◆ `HasUniformlyAbsolutelyContinuousLpIntegral` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:25`  _(also used by 5: tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence, hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence, inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one, …)_
          ★ `tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:62`
        ★ `inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:76`
      ★ `inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:90`  _(also used by 1: inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two)_
      ★ `memLp_one_of_inProbabilityConvergence_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:140`
    ★ `inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:150`  _(also used by 4: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_norm_integral_sub_zero_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inProbabilityConvergence_of_isUniformIntegrable, …)_
      ★ `inLpConvergence_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:209`
      ★ `tendsto_integral_of_inLpConvergence_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:23`  _(also used by 4: tendsto_integral_sub_zero_of_inLpConvergence_one, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inLpConvergence_one, …)_
    ★ `tendsto_integral_norm_of_inLpConvergence_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:232`  _(also used by 1: momentConvergence_one_of_inLpConvergence_one)_
  ★ `tendsto_integral_norm_of_inProbabilityConvergence_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:263`
★ `momentConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:280` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsUniformIntegrableInLp"]
  n1["◆ IsUniformIntegrable"]
  n2["◆ InProbabilityTailEvent"]
  n3["◆ InProbabilityConvergence"]
  n4["◆ MomentConvergence"]
  n5["★ tendstoInMeasure_iff_dist"]
  n6["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n7["★ integrable_of_inProbabilityConvergence_of_isUniformIntegrable"]
  n8["◆ InLpConvergence"]
  n9["◆ HasUniformlyAbsolutelyContinuousLpIntegral"]
  n10["★ tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n11["★ inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral"]
  n12["★ inLpConvergence_of_tendstoInMeasure_of_isUniformIntegrableInLp"]
  n13["★ memLp_one_of_inProbabilityConvergence_of_isUniformIntegrable"]
  n14["★ inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable"]
  n15["★ inLpConvergence_norm"]
  n16["★ tendsto_integral_of_inLpConvergence_one"]
  n17["★ tendsto_integral_norm_of_inLpConvergence_one"]
  n18["★ tendsto_integral_norm_of_inProbabilityConvergence_of_isUniformIntegrable"]
  n19["★ momentConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable"]
  n1 --> n0
  n3 --> n2
  n6 --> n3
  n6 --> n5
  n7 --> n1
  n7 --> n3
  n7 --> n6
  n10 --> n9
  n11 --> n9
  n11 --> n8
  n11 --> n10
  n12 --> n0
  n12 --> n8
  n12 --> n11
  n13 --> n1
  n13 --> n3
  n13 --> n7
  n14 --> n1
  n14 --> n3
  n14 --> n8
  n14 --> n12
  n14 --> n13
  n14 --> n6
  n15 --> n8
  n16 --> n8
  n17 --> n8
  n17 --> n15
  n17 --> n16
  n18 --> n1
  n18 --> n3
  n18 --> n7
  n18 --> n8
  n18 --> n14
  n18 --> n17
  n19 --> n1
  n19 --> n3
  n19 --> n4
  n19 --> n18
  class n19 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
