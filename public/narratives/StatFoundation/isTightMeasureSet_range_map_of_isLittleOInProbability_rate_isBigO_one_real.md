# Proof narrative — isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_real

Root: **isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:465` · topic `StatFoundation`
Closure: 13 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 46: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 53: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ◆ `IsBoundedInProbability` — abbrev · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:64`  _(also used by 6: isBoundedInProbability_iff_isBigOInProbability_one, isBoundedInProbability_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isBigOInProbability_rate_isBigO_one, …)_
      · `exists_pos_real_ofReal_le` — lemma · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:25`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_proper)_
        ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTightMeasureSet_finiteRange)_
      ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:18`  _(also used by 1: isTight_of_charFun_tendsto)_
    ★ `isTightMeasureSet_range_map_of_isBigOInProbability_one_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:255`
  ★ `isTightMeasureSet_range_map_of_isBoundedInProbability_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:304`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_real, isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_real)_
    ★ `IsLittleOInProbability_isBigOInProbability` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:179`  _(also used by 1: isBoundedInProbability_of_isBigOInProbability_tendsto_zero)_
      ★ `isLittleOInProbability_of_rate_isBigO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateLittle.lean:12`
    ★ `isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:525`  _(also used by 2: tendstoInMeasure_zero_of_isLittleOInProbability_rate_isBigO_one, inProbabilityConvergence_zero_of_isLittleOInProbability_rate_isBigO_one)_
  ★ `isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:558`  _(also used by 2: isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_proper, isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_finiteDimensional)_
★ `isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:465` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsLittleOInProbability"]
  n1["◆ IsBigOInProbability"]
  n2["◆ IsBoundedInProbability"]
  n3["· exists_pos_real_ofReal_le"]
  n4["★ isTightMeasureSet_singleton"]
  n5["★ isTight_finiteRange"]
  n6["★ isTightMeasureSet_range_map_of_isBigOInProbability_one_real"]
  n7["★ isTightMeasureSet_range_map_of_isBoundedInProbability_real"]
  n8["★ IsLittleOInProbability_isBigOInProbability"]
  n9["★ isLittleOInProbability_of_rate_isBigO"]
  n10["★ isLittleOInProbability_one_of_isLittleOInProbability_rate_isBigO_one"]
  n11["★ isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one"]
  n12["★ isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_real"]
  n2 --> n1
  n5 --> n4
  n6 --> n1
  n6 --> n3
  n6 --> n5
  n7 --> n2
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n9 --> n0
  n10 --> n0
  n10 --> n9
  n11 --> n0
  n11 --> n2
  n11 --> n8
  n11 --> n10
  n12 --> n0
  n12 --> n7
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
