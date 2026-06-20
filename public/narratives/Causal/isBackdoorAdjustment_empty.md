# Proof narrative — isBackdoorAdjustment_empty

Root: **isBackdoorAdjustment_empty** (theorem) `Statlib/Causal/DoCalculus.lean:174` · topic `Causal`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CausalDAG` — structure · `Statlib/Causal/DoCalculus.lean:43`  _(also used by 14: parents, ancestors, no_self_edge, …)_
    ◆ `descendants` — def · `Statlib/Causal/DoCalculus.lean:59`  _(also used by 2: not_self_descendant, mem_descendants_of_edge)_
  ◆ `IsBackdoorAdjustment` — def · `Statlib/Causal/DoCalculus.lean:168`
★ `isBackdoorAdjustment_empty` — theorem · `Statlib/Causal/DoCalculus.lean:174` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CausalDAG"]
  n1["◆ descendants"]
  n2["◆ IsBackdoorAdjustment"]
  n3["★ isBackdoorAdjustment_empty"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
