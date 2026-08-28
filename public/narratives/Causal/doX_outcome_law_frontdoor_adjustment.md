# Proof narrative — doX_outcome_law_frontdoor_adjustment

Root: **doX_outcome_law_frontdoor_adjustment** (theorem) `Statlib/Causal/SCM/Theorems.lean:1820` · topic `Causal`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `doXJointConfounded` — noncomputable def · `Statlib/Causal/SCM/FrontdoorCriterion.lean:67`  _(also used by 3: front_door_doX_mediator_invariant, doX_outcome_law_mass_eq_confounded, doX_outcome_confounder_marginal_invariant)_
  ◆ `doXOutcomeLaw` — noncomputable def · `Statlib/Causal/SCM/FrontdoorCriterion.lean:83`  _(also used by 1: doX_outcome_law_mass_eq_confounded)_
  ◆ `obsY` — noncomputable def · `Statlib/Causal/SCM/FrontdoorCriterion.lean:58`  _(also used by 2: front_door_backdoor_over_X, front_door_adjustment_confounded)_
★ `doX_outcome_law_frontdoor_adjustment` — theorem · `Statlib/Causal/SCM/Theorems.lean:1820` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ doXJointConfounded"]
  n1["◆ doXOutcomeLaw"]
  n2["◆ obsY"]
  n3["★ doX_outcome_law_frontdoor_adjustment"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  n3 --> n0
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
