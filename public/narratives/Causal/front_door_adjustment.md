# Proof narrative — front_door_adjustment

Root: **front_door_adjustment** (theorem) `Statlib/Causal/SCM/Theorems.lean:1685` · topic `Causal`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `doXOutcomeMass` — noncomputable def · `Statlib/Causal/SCM/Frontdoor.lean:61`
  ◆ `doMOutcomeMass` — noncomputable def · `Statlib/Causal/SCM/Frontdoor.lean:70`  _(also used by 1: doM_outcome_mass_expand)_
★ `front_door_adjustment` — theorem · `Statlib/Causal/SCM/Theorems.lean:1685` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ doXOutcomeMass"]
  n1["◆ doMOutcomeMass"]
  n2["★ front_door_adjustment"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
