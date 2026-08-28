# Proof narrative — inProbabilityConvergence_iff_tendstoInMeasure

Root: **inProbabilityConvergence_iff_tendstoInMeasure** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:729` · topic `StatFoundation`
Closure: 6 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 9: t_test_consistent, CompleteConvergence, as_implies_inProbability, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 72: t_test_consistent, inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, …)_
    ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, tendstoInMeasure_const_of_rescaled_tendstoInDistribution, …)_
  ★ `tendstoInMeasure_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:696`  _(also used by 10: inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, inProbabilityConvergence_congr_right, …)_
  ★ `inProbabilityConvergence_of_tendstoInMeasure` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:712`  _(also used by 8: inProbabilityConvergence_subseq, inProbabilityConvergence_congr_left, inProbabilityConvergence_congr_right, …)_
★ `inProbabilityConvergence_iff_tendstoInMeasure` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:729` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InProbabilityTailEvent"]
  n1["◆ InProbabilityConvergence"]
  n2["★ tendstoInMeasure_iff_dist"]
  n3["★ tendstoInMeasure_of_inProbabilityConvergence"]
  n4["★ inProbabilityConvergence_of_tendstoInMeasure"]
  n5["★ inProbabilityConvergence_iff_tendstoInMeasure"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
