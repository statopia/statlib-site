# Proof narrative — front_door_adjustment_confounded

Root: **front_door_adjustment_confounded** (theorem) `Statlib/Causal/SCM/Theorems.lean:1758` · topic `Causal`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `doXOutcomeMassConfounded` — noncomputable def · `Statlib/Causal/SCM/FrontdoorCriterion.lean:74`  _(also used by 1: doX_outcome_law_mass_eq_confounded)_
  ◆ `obsY` — noncomputable def · `Statlib/Causal/SCM/FrontdoorCriterion.lean:58`  _(also used by 2: front_door_backdoor_over_X, doX_outcome_law_frontdoor_adjustment)_
★ `front_door_adjustment_confounded` — theorem · `Statlib/Causal/SCM/Theorems.lean:1758` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ doXOutcomeMassConfounded"]
  n1["◆ obsY"]
  n2["★ front_door_adjustment_confounded"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
