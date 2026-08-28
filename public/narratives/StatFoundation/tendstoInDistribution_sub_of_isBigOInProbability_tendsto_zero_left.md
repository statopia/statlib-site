# Proof narrative — tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_left

Root: **tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_left** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:772` · topic `StatFoundation`
Closure: 11 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 52: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ★ `tendstoInDistribution_neg` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:442`
    ★ `tendstoInDistribution_of_tendstoInMeasure_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:354`  _(also used by 12: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInDistribution_add_of_tendstoInMeasure_zero_left, tendstoInDistribution_add_of_tendstoInMeasure_zero_right, …)_
  ★ `tendstoInDistribution_sub_of_tendstoInMeasure_zero_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:524`  _(also used by 1: tendstoInDistribution_sub_of_isLittleOInProbability_rate_isBigO_one_left)_
      ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 48: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
    ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 5: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, isLittleOInProbability_implies_inProbabilityConvergence_zero, …)_
      ★ `isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:15`
    ★ `isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:62`  _(also used by 3: hasCoordinatewiseIsLittleOInProbability_debiasedLasso_scaledBiasRemainder_of_l1Error_and_rowApproxError_real, inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
  ★ `tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:404`  _(also used by 5: tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_isBigOInProbability_real, tendstoInDistribution_zero_of_isBigOInProbability_tendsto_zero, tendstoInDistribution_add_of_isBigOInProbability_tendsto_zero_left, …)_
★ `tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:772` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsBigOInProbability"]
  n1["★ tendstoInDistribution_neg"]
  n2["★ tendstoInDistribution_of_tendstoInMeasure_sub"]
  n3["★ tendstoInDistribution_sub_of_tendstoInMeasure_zero_left"]
  n4["◆ IsLittleOInProbability"]
  n5["★ tendstoInMeasure_iff_norm"]
  n6["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n7["★ isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO"]
  n8["★ isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero"]
  n9["★ tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero"]
  n10["★ tendstoInDistribution_sub_of_isBigOInProbability_tendsto_zero_left"]
  n3 --> n1
  n3 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n7 --> n4
  n8 --> n0
  n8 --> n4
  n8 --> n7
  n9 --> n0
  n9 --> n6
  n9 --> n8
  n10 --> n0
  n10 --> n3
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
