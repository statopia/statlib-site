# Proof narrative — isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_finiteDimensional

Root: **isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_finiteDimensional** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:488` · topic `StatFoundation`
Closure: 14 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 46: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 52: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ◆ `IsBoundedInProbability` — abbrev · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:64`  _(also used by 6: isBoundedInProbability_iff_isBigOInProbability_one, isBoundedInProbability_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_rate_isBigO_one, …)_
        · `exists_pos_real_ofReal_le` — lemma · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:25`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
          ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTight_finiteRange)_
        ★ `isTightMeasureSet_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:40`
      ★ `isTightMeasureSet_range_map_of_isBigOInProbability_one_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:313`  _(also used by 1: isTightMeasureSet_range_map_of_isBoundedInProbability_proper)_
    ★ `isTightMeasureSet_range_map_of_isBigOInProbability_one_finiteDimensional` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:371`
  ★ `isTightMeasureSet_range_map_of_isBoundedInProbability_finiteDimensional` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:382`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_finiteDimensional, isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_finiteDimensional)_
    ★ `IsLittleOInProbability_isBigOInProbability` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:179`  _(also used by 1: isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
      ★ `isLittleOInProbability_of_rate_isBigO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateLittle.lean:12`
    ★ `isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:525`  _(also used by 2: tendstoInMeasure_zero_of_isLittleOInProbability_rate_isBigO_one, inProbabilityConvergence_zero_of_isLittleOInProbability_rate_isBigO_one)_
  ★ `isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:558`  _(also used by 2: isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_real, isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_proper)_
★ `isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_finiteDimensional` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:488` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsLittleOInProbability"]
  n1["◆ IsBigOInProbability"]
  n2["◆ IsBoundedInProbability"]
  n3["· exists_pos_real_ofReal_le"]
  n4["★ isTightMeasureSet_singleton"]
  n5["★ isTightMeasureSet_finiteRange"]
  n6["★ isTightMeasureSet_range_map_of_isBigOInProbability_one_proper"]
  n7["★ isTightMeasureSet_range_map_of_isBigOInProbability_one_finiteDimensional"]
  n8["★ isTightMeasureSet_range_map_of_isBoundedInProbability_finiteDimensional"]
  n9["★ IsLittleOInProbability_isBigOInProbability"]
  n10["★ isLittleOInProbability_of_rate_isBigO"]
  n11["★ isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one"]
  n12["★ isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one"]
  n13["★ isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_finiteDimensional"]
  n2 --> n1
  n5 --> n4
  n6 --> n1
  n6 --> n3
  n6 --> n5
  n7 --> n1
  n7 --> n6
  n8 --> n2
  n8 --> n7
  n9 --> n0
  n9 --> n1
  n10 --> n0
  n11 --> n0
  n11 --> n10
  n12 --> n0
  n12 --> n2
  n12 --> n9
  n12 --> n11
  n13 --> n0
  n13 --> n8
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
