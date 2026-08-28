# Proof narrative — intervene_self

Root: **intervene_self** (theorem) `Statlib/Causal/SCM/Theorems.lean:90` · topic `Causal`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `doKernel` — noncomputable def · `Statlib/Causal/SCM/Vocabulary.lean:64`  _(also used by 1: induced_family_do_bridge)_
  ◆ `intervene` — noncomputable def · `Statlib/Causal/SCM/Vocabulary.lean:68`  _(also used by 4: intervene_ne, intervene_commutes_disjoint, induced_family_do_bridge, …)_
★ `intervene_self` — theorem · `Statlib/Causal/SCM/Theorems.lean:90` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ doKernel"]
  n1["◆ intervene"]
  n2["★ intervene_self"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
