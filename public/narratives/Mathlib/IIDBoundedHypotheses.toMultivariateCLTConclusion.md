# Proof narrative — IIDBoundedHypotheses.toMultivariateCLTConclusion

Root: **IIDBoundedHypotheses.toMultivariateCLTConclusion** (noncomputable def) `Statlib/Mathlib/ProbabilityTheory/UnivariateCLTBridge.lean:203` · topic `Mathlib`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IIDBoundedHypotheses` — structure · `Statlib/Mathlib/ProbabilityTheory/CLTSums.lean:129`  _(also used by 7: bound_pos, mean_eq, aestronglyMeasurable, …)_
  ▣ `MultivariateCLTConclusion` — structure · `Statlib/Mathlib/ProbabilityTheory/MultivariateCLT.lean:138`  _(also used by 7: iidBounded, centralLimit_to_multivariateCLTConclusion, MultivariateCLTConclusion.toScoreCLT, …)_
    ◆ `trivial` — def · `Statlib/Mathlib/ProbabilityTheory/MultivariateCLT.lean:161`  _(also used by 4: centralLimit_to_multivariateCLTConclusion, multivariateCLTOfCramerWold, fromCoxScoreSample, …)_
  ◆ `toConclusion` — def · `Statlib/Mathlib/ProbabilityTheory/CLTSums.lean:171`  _(also used by 2: iidBounded, fromCoxScoreSample)_
◆ `IIDBoundedHypotheses.toMultivariateCLTConclusion` — noncomputable def · `Statlib/Mathlib/ProbabilityTheory/UnivariateCLTBridge.lean:203` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IIDBoundedHypotheses"]
  n1["▣ MultivariateCLTConclusion"]
  n2["◆ trivial"]
  n3["◆ toConclusion"]
  n4["◆ IIDBoundedHypotheses.toMultivariateCLTConclusion"]
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
