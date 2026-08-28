# Proof narrative — inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_left

Root: **inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_left** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:437` · topic `StatFoundation`
Closure: 15 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 52: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 7: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 69: t_test_consistent, tendstoInMeasure_of_inProbabilityConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
      ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 45: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
    ★ `isLittleOInProbability_add_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:112`  _(also used by 2: inProbabilityConvergence_add_isLittleOInProbability, inProbabilityConvergence_of_isLittleOInProbability_sub)_
      ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_of_inProbabilityConvergence, tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, …)_
        ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
      ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 4: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero, …)_
    ★ `isLittleOInProbability_one_of_inProbabilityConvergence_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:82`  _(also used by 5: isLittleOInProbability_one_iff_inProbabilityConvergence_zero, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_right, isLittleOInProbability_one_sub_of_inProbabilityConvergence, …)_
  ★ `inProbabilityConvergence_add_of_inProbabilityConvergence_zero_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:181`
    ★ `isLittleOInProbability_implies_inProbabilityConvergence_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:17`  _(also used by 3: isLittleOInProbability_one_iff_inProbabilityConvergence_zero, inProbabilityConvergence_zero_of_isLittleOInProbability_rate_isBigO_one, z_estimator_linearization_from_mvt)_
      ★ `isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:15`
    ★ `isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:62`  _(also used by 3: hasCoordinatewiseIsLittleOInProbability_debiasedLasso_scaledBiasRemainder_of_l1Error_and_rowApproxError_real, tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
  ★ `inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:415`  _(also used by 7: inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_right, inProbabilityConvergence_sub_of_isBigOInProbability_tendsto_zero_left, inProbabilityConvergence_sub_of_isBigOInProbability_tendsto_zero_right, …)_
★ `inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:437` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsBigOInProbability"]
  n1["◆ InProbabilityTailEvent"]
  n2["◆ InProbabilityConvergence"]
  n3["◆ IsLittleOInProbability"]
  n4["★ isLittleOInProbability_add_inProbabilityConvergence"]
  n5["★ tendstoInMeasure_iff_dist"]
  n6["★ tendstoInMeasure_iff_norm"]
  n7["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n8["★ isLittleOInProbability_one_of_inProbabilityConvergence_zero"]
  n9["★ inProbabilityConvergence_add_of_inProbabilityConvergence_zero_left"]
  n10["★ isLittleOInProbability_implies_inProbabilityConvergence_zero"]
  n11["★ isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO"]
  n12["★ isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero"]
  n13["★ inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero"]
  n14["★ inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_left"]
  n2 --> n1
  n4 --> n3
  n4 --> n2
  n4 --> n1
  n7 --> n3
  n7 --> n6
  n8 --> n2
  n8 --> n3
  n8 --> n5
  n8 --> n1
  n8 --> n7
  n9 --> n2
  n9 --> n4
  n9 --> n8
  n10 --> n3
  n10 --> n2
  n10 --> n7
  n10 --> n1
  n11 --> n0
  n11 --> n3
  n12 --> n0
  n12 --> n3
  n12 --> n11
  n13 --> n0
  n13 --> n2
  n13 --> n10
  n13 --> n12
  n14 --> n0
  n14 --> n2
  n14 --> n9
  n14 --> n13
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
