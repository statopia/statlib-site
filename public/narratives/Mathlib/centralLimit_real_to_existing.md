# Proof narrative — centralLimit_real_to_existing

Root: **centralLimit_real_to_existing** (theorem) `Statlib/Mathlib/ProbabilityTheory/CentralLimitNamed.lean:224` · topic `Mathlib`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `UnivariateCLTAssumptions` — structure · `Statlib/Mathlib/ProbabilityTheory/CentralLimitNamed.lean:163`  _(also used by 1: _root_.ProbabilityTheory.centralLimit_real)_
  ◆ `standardisedSum` — noncomputable def · `Statlib/Mathlib/ProbabilityTheory/CentralLimitNamed.lean:153`  _(also used by 1: _root_.ProbabilityTheory.centralLimit_real)_
    ▣ `StochasticArgmaxCMT` — structure · `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:179`  _(also used by 1: ofDeterministic)_
  ◆ `trivial` — def · `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:199`  _(also used by 1: ofDeterministic)_
★ `centralLimit_real_to_existing` — theorem · `Statlib/Mathlib/ProbabilityTheory/CentralLimitNamed.lean:224` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ UnivariateCLTAssumptions"]
  n1["◆ standardisedSum"]
  n2["▣ StochasticArgmaxCMT"]
  n3["◆ trivial"]
  n4["★ centralLimit_real_to_existing"]
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
