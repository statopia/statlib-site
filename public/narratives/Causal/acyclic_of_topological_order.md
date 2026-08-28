# Proof narrative — acyclic_of_topological_order

Root: **acyclic_of_topological_order** (theorem) `Statlib/Causal/SCM/Theorems.lean:46` · topic `Causal`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 43: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
  ◆ `IsTopologicalOrder` — def · `Statlib/Causal/SCM/Vocabulary.lean:47`  _(also used by 1: HasTopologicalOrder)_
  ◆ `IsAcyclic` — def · `Statlib/Causal/SCM/Vocabulary.lean:42`  _(also used by 6: acyclic_no_self_loop, acyclic_no_self_ancestor, ancestor_moralize_reachable, …)_
  ◆ `pathEnd` — def · `Statlib/Causal/SCM/Vocabulary.lean:39`
★ `acyclic_of_topological_order` — theorem · `Statlib/Causal/SCM/Theorems.lean:46` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ IsTopologicalOrder"]
  n2["◆ IsAcyclic"]
  n3["◆ pathEnd"]
  n4["★ acyclic_of_topological_order"]
  n1 --> n0
  n2 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
