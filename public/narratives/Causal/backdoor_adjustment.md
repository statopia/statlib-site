# Proof narrative — backdoor_adjustment

Root: **backdoor_adjustment** (theorem) `Statlib/Causal/SCM/Theorems.lean:1602` · topic `Causal`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `doIntervenedJoint` — noncomputable def · `Statlib/Causal/SCM/Backdoor.lean:50`  _(also used by 1: intervened_joint_marginal_expand)_
  ◆ `doOutcomeMarginal` — noncomputable def · `Statlib/Causal/SCM/Backdoor.lean:56`  _(also used by 1: intervened_joint_marginal_expand)_
★ `backdoor_adjustment` — theorem · `Statlib/Causal/SCM/Theorems.lean:1602` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ doIntervenedJoint"]
  n1["◆ doOutcomeMarginal"]
  n2["★ backdoor_adjustment"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
