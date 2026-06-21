# Proof narrative — inProbability_implies_subseq_as

Root: **inProbability_implies_subseq_as** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:199` · topic `StatFoundation`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 2: CompleteConvergence, as_implies_inProbability)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 1: as_implies_inProbability)_
  ◆ `AlmostSureConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:35`  _(also used by 2: as_implies_inProbability, complete_implies_as)_
★ `inProbability_implies_subseq_as` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:199` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InProbabilityTailEvent"]
  n1["◆ InProbabilityConvergence"]
  n2["◆ AlmostSureConvergence"]
  n3["★ inProbability_implies_subseq_as"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
