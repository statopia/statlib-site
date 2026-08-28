# Proof narrative — tendstoInDistribution_iff_forall_inner_real

Root: **tendstoInDistribution_iff_forall_inner_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:390` · topic `StatFoundation`
Closure: 15 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: charFun_eq_of_subseq)_
      · `charFun_map_innerSL` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:22`
      · `continuous_charFun` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:39`
            · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
            ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTightMeasureSet_finiteRange)_
            ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:18`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
          ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: levy_continuity)_
        · `isTight_of_charFun_tendsto_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:131`
          ★ `levy_forward_inner` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:61`
        · `charFun_eq_of_subseq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:99`
      · `probMeasure_eq_of_charFun_eq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:114`
      ★ `cramer_wold_charFun` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:261`
    ★ `cramer_wold_reverse` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:297`  _(also used by 1: cramer_wold_iff)_
  ★ `tendstoInDistribution_of_forall_inner_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:348`  _(also used by 1: tendstoInDistribution_toLp_of_finiteLinearCombination_real)_
★ `tendstoInDistribution_iff_forall_inner_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:390` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ levy_forward"]
  n1["· charFun_map_innerSL"]
  n2["· continuous_charFun"]
  n3["· compl_Icc_eq_abs_gt"]
  n4["★ isTightMeasureSet_singleton"]
  n5["★ isTight_finiteRange"]
  n6["★ isTight_of_charFun_tendsto"]
  n7["· isTight_of_charFun_tendsto_inner"]
  n8["★ levy_forward_inner"]
  n9["· charFun_eq_of_subseq_inner"]
  n10["· probMeasure_eq_of_charFun_eq_inner"]
  n11["★ cramer_wold_charFun"]
  n12["★ cramer_wold_reverse"]
  n13["★ tendstoInDistribution_of_forall_inner_real"]
  n14["★ tendstoInDistribution_iff_forall_inner_real"]
  n5 --> n4
  n6 --> n3
  n6 --> n5
  n7 --> n6
  n7 --> n1
  n9 --> n8
  n11 --> n7
  n11 --> n9
  n11 --> n10
  n12 --> n0
  n12 --> n1
  n12 --> n2
  n12 --> n11
  n12 --> n10
  n13 --> n12
  n14 --> n13
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
