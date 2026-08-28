# Proof narrative — tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_right

Root: **tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_right** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:655` · topic `StatFoundation`
Closure: 12 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 50: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
      ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 48: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
    ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 5: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, isLittleOInProbability_implies_inProbabilityConvergence_zero, …)_
      ★ `isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:15`
    ★ `isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:62`  _(also used by 3: hasCoordinatewiseIsLittleOInProbability_debiasedLasso_scaledBiasRemainder_of_l1Error_and_rowApproxError_real, inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
  ★ `tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:404`  _(also used by 5: tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_isBigOInProbability_real, tendstoInDistribution_zero_of_isBigOInProbability_tendsto_zero, tendstoInDistribution_add_of_isBigOInProbability_tendsto_zero_left, …)_
    · `isBigOInProbability_of_norm_eventuallyLE` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:74`
  ★ `isBigOInProbability_neg` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:569`
  ★ `tendstoInMeasure_congr_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:830`  _(also used by 7: inProbabilityConvergence_congr_left, tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_tendstoInMeasure_real, tendstoInDistribution_add_of_isBigOInProbability_tendsto_zero_left, …)_
  ★ `tendstoInDistribution_of_tendstoInMeasure_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:354`  _(also used by 12: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInDistribution_add_of_tendstoInMeasure_zero_left, tendstoInDistribution_add_of_tendstoInMeasure_zero_right, …)_
★ `tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_right` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:655` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsBigOInProbability"]
  n1["◆ IsLittleOInProbability"]
  n2["★ tendstoInMeasure_iff_norm"]
  n3["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n4["★ isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO"]
  n5["★ isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero"]
  n6["★ tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero"]
  n7["· isBigOInProbability_of_norm_eventuallyLE"]
  n8["★ isBigOInProbability_neg"]
  n9["★ tendstoInMeasure_congr_left"]
  n10["★ tendstoInDistribution_of_tendstoInMeasure_sub"]
  n11["★ tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_right"]
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n4
  n6 --> n0
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n8 --> n0
  n8 --> n7
  n11 --> n0
  n11 --> n6
  n11 --> n8
  n11 --> n9
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
