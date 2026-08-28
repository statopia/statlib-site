# Proof narrative — isLittleOInProbability_mul_of_isBigOInProbability_tendsto_zero_right

Root: **isLittleOInProbability_mul_of_isBigOInProbability_tendsto_zero_right** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/SlutskyProduct.lean:57` · topic `StatFoundation`
Closure: 15 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 50: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
  ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 43: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 8: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
    ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 71: t_test_consistent, tendstoInMeasure_of_inProbabilityConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
      ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_of_inProbabilityConvergence, tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, …)_
        ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
      ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 4: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero, …)_
    ★ `isLittleOInProbability_one_of_inProbabilityConvergence_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:82`  _(also used by 5: isLittleOInProbability_one_iff_inProbabilityConvergence_zero, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_left, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_right, …)_
    ★ `isBigOInProbability_mul_isLittleOInProbability` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/AlgebraProductMixedOBigLittle.lean:10`
  ★ `isLittleOInProbability_mul_of_inProbabilityConvergence_zero_right` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/SlutskyProduct.lean:30`
    ★ `isLittleOInProbability_implies_inProbabilityConvergence_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:17`  _(also used by 3: isLittleOInProbability_one_iff_inProbabilityConvergence_zero, inProbabilityConvergence_zero_of_isLittleOInProbability_rate_isBigO_one, z_estimator_linearization_from_mvt)_
      ★ `isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:15`
    ★ `isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:62`  _(also used by 3: hasCoordinatewiseIsLittleOInProbability_debiasedLasso_scaledBiasRemainder_of_l1Error_and_rowApproxError_real, tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
  ★ `inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:415`  _(also used by 7: inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_left, inProbabilityConvergence_add_of_isBigOInProbability_tendsto_zero_right, inProbabilityConvergence_sub_of_isBigOInProbability_tendsto_zero_left, …)_
★ `isLittleOInProbability_mul_of_isBigOInProbability_tendsto_zero_right` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/SlutskyProduct.lean:57` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsBigOInProbability"]
  n1["◆ IsLittleOInProbability"]
  n2["◆ InProbabilityTailEvent"]
  n3["◆ InProbabilityConvergence"]
  n4["★ tendstoInMeasure_iff_dist"]
  n5["★ tendstoInMeasure_iff_norm"]
  n6["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n7["★ isLittleOInProbability_one_of_inProbabilityConvergence_zero"]
  n8["★ isBigOInProbability_mul_isLittleOInProbability"]
  n9["★ isLittleOInProbability_mul_of_inProbabilityConvergence_zero_right"]
  n10["★ isLittleOInProbability_implies_inProbabilityConvergence_zero"]
  n11["★ isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO"]
  n12["★ isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero"]
  n13["★ inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero"]
  n14["★ isLittleOInProbability_mul_of_isBigOInProbability_tendsto_zero_right"]
  n3 --> n2
  n6 --> n1
  n6 --> n5
  n7 --> n3
  n7 --> n1
  n7 --> n4
  n7 --> n2
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n9 --> n0
  n9 --> n3
  n9 --> n1
  n9 --> n7
  n9 --> n8
  n10 --> n1
  n10 --> n3
  n10 --> n6
  n10 --> n2
  n11 --> n0
  n11 --> n1
  n12 --> n0
  n12 --> n1
  n12 --> n11
  n13 --> n0
  n13 --> n3
  n13 --> n10
  n13 --> n12
  n14 --> n0
  n14 --> n1
  n14 --> n9
  n14 --> n13
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
