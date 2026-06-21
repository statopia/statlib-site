# Proof narrative — cramer_wold_iff

Root: **cramer_wold_iff** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:324` · topic `StatFoundation`
Closure: 14 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `cramer_wold_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:74`
    ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: charFun_eq_of_subseq)_
    · `charFun_map_innerSL` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:17`
    · `continuous_charFun` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:33`
          · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
          ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:14`
        ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: levy_continuity)_
      · `isTight_of_charFun_tendsto_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:123`
        ★ `levy_forward_inner` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:55`
      · `charFun_eq_of_subseq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:92`
    · `probMeasure_eq_of_charFun_eq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:107`
    ★ `cramer_wold_charFun` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:253`
  ★ `cramer_wold_reverse` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:289`
★ `cramer_wold_iff` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:324` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ cramer_wold_forward"]
  n1["★ levy_forward"]
  n2["· charFun_map_innerSL"]
  n3["· continuous_charFun"]
  n4["· compl_Icc_eq_abs_gt"]
  n5["★ isTight_finiteRange"]
  n6["★ isTight_of_charFun_tendsto"]
  n7["· isTight_of_charFun_tendsto_inner"]
  n8["★ levy_forward_inner"]
  n9["· charFun_eq_of_subseq_inner"]
  n10["· probMeasure_eq_of_charFun_eq_inner"]
  n11["★ cramer_wold_charFun"]
  n12["★ cramer_wold_reverse"]
  n13["★ cramer_wold_iff"]
  n6 --> n4
  n6 --> n5
  n7 --> n6
  n7 --> n2
  n9 --> n8
  n11 --> n7
  n11 --> n9
  n11 --> n10
  n12 --> n1
  n12 --> n2
  n12 --> n3
  n12 --> n11
  n12 --> n10
  n13 --> n0
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
