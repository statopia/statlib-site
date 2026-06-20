# Proof narrative — bellmanOperator_monotone

Root: **bellmanOperator_monotone** (theorem) `Statlib/RL/bellmanOperator_monotone.lean:14` · topic `RL`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `MDP` — structure · `Statlib/RL/MDP.lean:41`  _(also used by 3: bellmanOperator_const, bellmanOperator_contractive, bellmanOperator_zero)_
  ◆ `Policy` — def · `Statlib/RL/Policy.lean:9`  _(also used by 3: bellmanOperator_const, bellmanOperator_contractive, bellmanOperator_zero)_
  ◆ `ValueFunction` — def · `Statlib/RL/ValueFunction.lean:9`  _(also used by 2: bellmanOperator_contractive, zeroValue)_
  ◆ `bellmanOperator` — def · `Statlib/RL/bellmanOperator.lean:13`  _(also used by 2: bellmanOperator_const, bellmanOperator_zero)_
★ `bellmanOperator_monotone` — theorem · `Statlib/RL/bellmanOperator_monotone.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ MDP"]
  n1["◆ Policy"]
  n2["◆ ValueFunction"]
  n3["◆ bellmanOperator"]
  n4["★ bellmanOperator_monotone"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
