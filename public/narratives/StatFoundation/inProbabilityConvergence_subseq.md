# Proof narrative — inProbabilityConvergence_subseq

Root: **inProbabilityConvergence_subseq** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:848` · topic `StatFoundation`
Closure: 8 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 9: t_test_consistent, CompleteConvergence, as_implies_inProbability, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 72: t_test_consistent, inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_congr_left, …)_
  ★ `inProbabilityConvergence_of_tendstoInMeasure` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:712`  _(also used by 8: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_congr_left, inProbabilityConvergence_congr_right, …)_
    ★ `tendstoInMeasure_comp_filter` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:813`
  ★ `tendstoInMeasure_subseq` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:822`
    ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
  ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 10: inProbabilityConvergence_iff_tendstoInMeasure, inProbabilityConvergence_congr_left, inProbabilityConvergence_congr_right, …)_
★ `inProbabilityConvergence_subseq` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:848` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InProbabilityTailEvent"]
  n1["◆ InProbabilityConvergence"]
  n2["★ inProbabilityConvergence_of_tendstoInMeasure"]
  n3["★ tendstoInMeasure_comp_filter"]
  n4["★ tendstoInMeasure_subseq"]
  n5["★ tendstoInMeasure_iff_dist"]
  n6["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n7["★ inProbabilityConvergence_subseq"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n4 --> n3
  n6 --> n1
  n6 --> n5
  n7 --> n1
  n7 --> n2
  n7 --> n4
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
