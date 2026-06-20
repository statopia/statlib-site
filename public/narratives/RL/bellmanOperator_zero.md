# Proof narrative — bellmanOperator_zero

Root: **bellmanOperator_zero** (theorem) `Statlib/RL/bellmanOperator_zero.lean:14` · topic `RL`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `MDP` — structure · `Statlib/RL/MDP.lean:41`  _(also used by 3: bellmanOperator_const, bellmanOperator_contractive, bellmanOperator_monotone)_
  ◆ `Policy` — def · `Statlib/RL/Policy.lean:9`  _(also used by 3: bellmanOperator_const, bellmanOperator_contractive, bellmanOperator_monotone)_
    ◆ `ValueFunction` — def · `Statlib/RL/ValueFunction.lean:9`  _(also used by 2: bellmanOperator_contractive, bellmanOperator_monotone)_
  ◆ `bellmanOperator` — def · `Statlib/RL/bellmanOperator.lean:13`  _(also used by 2: bellmanOperator_const, bellmanOperator_monotone)_
  ◆ `zeroValue` — def · `Statlib/RL/zeroValue.lean:10`
★ `bellmanOperator_zero` — theorem · `Statlib/RL/bellmanOperator_zero.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ MDP"]
  n1["◆ Policy"]
  n2["◆ ValueFunction"]
  n3["◆ bellmanOperator"]
  n4["◆ zeroValue"]
  n5["★ bellmanOperator_zero"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
