# Proof narrative — not_self_descendant

Root: **not_self_descendant** (theorem) `Statlib/Causal/DoCalculus.lean:75` · topic `Causal`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CausalDAG` — structure · `Statlib/Causal/DoCalculus.lean:43`  _(also used by 15: parents, ancestors, no_self_edge, …)_
  ◆ `descendants` — def · `Statlib/Causal/DoCalculus.lean:59`  _(also used by 2: mem_descendants_of_edge, IsBackdoorAdjustment)_
★ `not_self_descendant` — theorem · `Statlib/Causal/DoCalculus.lean:75` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CausalDAG"]
  n1["◆ descendants"]
  n2["★ not_self_descendant"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
