# Proof narrative — bellmanOperator_contractive

Root: **bellmanOperator_contractive** (theorem) `Statlib/RL/bellmanOperator_contractive.lean:19` · topic `RL`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `MDP` — structure · `Statlib/RL/MDP.lean:41`  _(also used by 4: bellmanOperator, bellmanOperator_const, bellmanOperator_monotone, …)_
  ◆ `Policy` — def · `Statlib/RL/Policy.lean:9`  _(also used by 4: bellmanOperator, bellmanOperator_const, bellmanOperator_monotone, …)_
  ◆ `ValueFunction` — def · `Statlib/RL/ValueFunction.lean:9`  _(also used by 3: bellmanOperator, bellmanOperator_monotone, zeroValue)_
★ `bellmanOperator_contractive` — theorem · `Statlib/RL/bellmanOperator_contractive.lean:19` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ MDP"]
  n1["◆ Policy"]
  n2["◆ ValueFunction"]
  n3["★ bellmanOperator_contractive"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
