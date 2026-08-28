# Proof narrative — isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_proper

Root: **isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_proper** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:403` · topic `StatFoundation`
Closure: 13 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 49: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ◆ `IsBoundedInProbability` — abbrev · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:64`  _(also used by 6: isBoundedInProbability_iff_isBigOInProbability_one, isBoundedInProbability_of_isBigOInProbability_rate_isBigO_one, isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one, …)_
      · `exists_pos_real_ofReal_le` — lemma · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:25`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
        ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTight_finiteRange)_
      ★ `isTightMeasureSet_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:40`
    ★ `isTightMeasureSet_range_map_of_isBigOInProbability_one_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:313`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_finiteDimensional)_
  ★ `isTightMeasureSet_range_map_of_isBoundedInProbability_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:360`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_proper, isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_proper)_
      ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 48: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
    ★ `IsLittleOInProbability_isBigOInProbability` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:179`  _(also used by 1: isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one)_
      ★ `isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:15`
    ★ `isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateRefinement.lean:62`  _(also used by 3: hasCoordinatewiseIsLittleOInProbability_debiasedLasso_scaledBiasRemainder_of_l1Error_and_rowApproxError_real, tendstoInMeasure_zero_of_isBigOInProbability_tendsto_zero, inProbabilityConvergence_zero_of_isBigOInProbability_tendsto_zero)_
  ★ `isBoundedInProbability_of_isBigOInProbability_tendsto_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:426`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_real, isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_finiteDimensional)_
★ `isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:403` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsBigOInProbability"]
  n1["◆ IsBoundedInProbability"]
  n2["· exists_pos_real_ofReal_le"]
  n3["★ isTightMeasureSet_singleton"]
  n4["★ isTightMeasureSet_finiteRange"]
  n5["★ isTightMeasureSet_range_map_of_isBigOInProbability_one_proper"]
  n6["★ isTightMeasureSet_range_map_of_isBoundedInProbability_proper"]
  n7["◆ IsLittleOInProbability"]
  n8["★ IsLittleOInProbability_isBigOInProbability"]
  n9["★ isLittleOInProbability_of_isBigOInProbability_of_rate_isLittleO"]
  n10["★ isLittleOInProbability_one_of_isBigOInProbability_tendsto_zero"]
  n11["★ isBoundedInProbability_of_isBigOInProbability_tendsto_zero"]
  n12["★ isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_proper"]
  n1 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  n6 --> n1
  n6 --> n5
  n8 --> n7
  n8 --> n0
  n9 --> n0
  n9 --> n7
  n10 --> n0
  n10 --> n7
  n10 --> n9
  n11 --> n0
  n11 --> n1
  n11 --> n8
  n11 --> n10
  n12 --> n0
  n12 --> n6
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
