# Proof narrative — Ignorability.symm

Root: **Ignorability.symm** (theorem) `Statlib/Causal/Basic.lean:129` · topic `Causal`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sigmaX` — def · `Statlib/Causal/Basic.lean:61`  _(also used by 1: propensityScore)_
  ★ `sigmaX_le` — theorem · `Statlib/Causal/Basic.lean:65`
  ◆ `Ignorability` — def · `Statlib/Causal/Basic.lean:75`  _(also used by 1: causalEffectMap_identification)_
  ▣ `CausalModel` — structure · `Statlib/Causal/Basic.lean:32`  _(also used by 1: causalEffectMap_identification)_
★ `Ignorability.symm` — theorem · `Statlib/Causal/Basic.lean:129` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sigmaX"]
  n1["★ sigmaX_le"]
  n2["◆ Ignorability"]
  n3["▣ CausalModel"]
  n4["★ Ignorability.symm"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n4 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
