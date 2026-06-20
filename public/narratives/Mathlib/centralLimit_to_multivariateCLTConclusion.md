# Proof narrative — centralLimit_to_multivariateCLTConclusion

Root: **centralLimit_to_multivariateCLTConclusion** (noncomputable def) `Statlib/Mathlib/ProbabilityTheory/CentralLimitTheorem.lean:225` · topic `Mathlib`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `MultivariateCLTConclusion` — structure · `Statlib/Mathlib/ProbabilityTheory/MultivariateCLT.lean:138`  _(also used by 8: toConclusion, iidBounded, MultivariateCLTConclusion.toScoreCLT, …)_
  ◆ `trivial` — def · `Statlib/Mathlib/ProbabilityTheory/MultivariateCLT.lean:161`  _(also used by 4: toConclusion, multivariateCLTOfCramerWold, fromCoxScoreSample, …)_
◆ `centralLimit_to_multivariateCLTConclusion` — noncomputable def · `Statlib/Mathlib/ProbabilityTheory/CentralLimitTheorem.lean:225` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ MultivariateCLTConclusion"]
  n1["◆ trivial"]
  n2["◆ centralLimit_to_multivariateCLTConclusion"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
