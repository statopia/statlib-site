# Proof narrative — isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_proper

Root: **isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_proper** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:439` · topic `StatFoundation`
Closure: 10 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsBigOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:48`  _(also used by 51: isBigOInProbability_add, isBigOInProbability_smul_rate, isBigOInProbability_mul_rate, …)_
    ◆ `IsBoundedInProbability` — abbrev · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:64`  _(also used by 6: isBoundedInProbability_iff_isBigOInProbability_one, isBoundedInProbability_of_isBigOInProbability_tendsto_zero, isBoundedInProbability_of_isLittleOInProbability_rate_isBigO_one, …)_
      · `exists_pos_real_ofReal_le` — lemma · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:25`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
        ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTight_finiteRange)_
      ★ `isTightMeasureSet_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:40`
    ★ `isTightMeasureSet_range_map_of_isBigOInProbability_one_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:313`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_finiteDimensional)_
  ★ `isTightMeasureSet_range_map_of_isBoundedInProbability_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:360`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_tendsto_zero_proper, isTightMeasureSet_range_map_of_isLittleOInProbability_rate_isBigO_one_proper)_
    ★ `isBigOInProbability_of_rate_isBigO` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/RateBig.lean:11`  _(also used by 1: isBigOInProbability_of_eventually_rate_le)_
  ★ `isBoundedInProbability_of_isBigOInProbability_rate_isBigO_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:514`  _(also used by 2: isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_real, isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_finiteDimensional)_
★ `isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_proper` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:439` **← headline**

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
  n7["★ isBigOInProbability_of_rate_isBigO"]
  n8["★ isBoundedInProbability_of_isBigOInProbability_rate_isBigO_one"]
  n9["★ isTightMeasureSet_range_map_of_isBigOInProbability_rate_isBigO_one_proper"]
  n1 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  n6 --> n1
  n6 --> n5
  n7 --> n0
  n8 --> n0
  n8 --> n1
  n8 --> n7
  n9 --> n0
  n9 --> n6
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
