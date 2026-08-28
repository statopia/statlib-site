# Proof narrative — tendstoInDistribution_zero_of_isLittleOInProbability_rate_isBigO_one

Root: **tendstoInDistribution_zero_of_isLittleOInProbability_rate_isBigO_one** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:682` · topic `StatFoundation`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 46: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
  ★ `tendstoInDistribution_of_tendstoInMeasure` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:367`  _(also used by 1: tendstoInDistribution_zero_of_isBigOInProbability_tendsto_zero)_
      ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
    ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 5: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, isLittleOInProbability_implies_inProbabilityConvergence_zero, …)_
      ★ `isLittleOInProbability_of_rate_isBigO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateLittle.lean:12`
    ★ `isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:525`  _(also used by 2: inProbabilityConvergence_zero_of_isLittleOInProbability_rate_isBigO_one, isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one)_
  ★ `tendstoInMeasure_zero_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:535`  _(also used by 5: tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_isLittleOInProbability_real, tendstoInDistribution_add_of_isLittleOInProbability_rate_isBigO_one_left, tendstoInDistribution_add_of_isLittleOInProbability_rate_isBigO_one_right, …)_
★ `tendstoInDistribution_zero_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:682` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsLittleOInProbability"]
  n1["★ tendstoInDistribution_of_tendstoInMeasure"]
  n2["★ tendstoInMeasure_iff_norm"]
  n3["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n4["★ isLittleOInProbability_of_rate_isBigO"]
  n5["★ isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one"]
  n6["★ tendstoInMeasure_zero_of_isLittleOInProbability_rate_isBigO_one"]
  n7["★ tendstoInDistribution_zero_of_isLittleOInProbability_rate_isBigO_one"]
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
