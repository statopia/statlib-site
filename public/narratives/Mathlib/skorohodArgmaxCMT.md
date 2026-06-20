# Proof narrative — skorohodArgmaxCMT

Root: **skorohodArgmaxCMT** (def) `Statlib/Mathlib/ProbabilityTheory/SkorohodArgmax.lean:200` · topic `Mathlib`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `UniqueArgmax` — structure · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:99`
    ◆ `Tightness` — def · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:65`
  ▣ `StochasticArgmaxCMT_VW` — structure · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:172`
    ★ `Tightness_of_compact` — theorem · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:75`
  ◆ `of_uniqueArgmax` — def · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:200`
◆ `skorohodArgmaxCMT` — def · `Statlib/Mathlib/ProbabilityTheory/SkorohodArgmax.lean:200` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ UniqueArgmax"]
  n1["◆ Tightness"]
  n2["▣ StochasticArgmaxCMT_VW"]
  n3["★ Tightness_of_compact"]
  n4["◆ of_uniqueArgmax"]
  n5["◆ skorohodArgmaxCMT"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
