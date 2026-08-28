# Proof narrative — ancestor_moralize_reachable

Root: **ancestor_moralize_reachable** (theorem) `Statlib/Causal/SCM/Theorems.lean:1390` · topic `Causal`
Closure: 6 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 41: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
  ◆ `IsAcyclic` — def · `Statlib/Causal/SCM/Vocabulary.lean:42`  _(also used by 5: acyclic_of_topological_order, acyclic_no_self_ancestor, backdoor_blocks_into_x_of_parents_subset, …)_
  ◆ `AncestorsOf` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:90`  _(also used by 7: acyclic_no_self_ancestor, ancestors_strictly_below, parent_mem_ancestors, …)_
  ◆ `moralize` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:60`  _(also used by 4: moralize_adj_iff, parent_edge_moralized, skeleton_edge_moralized, …)_
  ★ `acyclic_no_self_loop` — theorem · `Statlib/Causal/SCM/Theorems.lean:64`
★ `ancestor_moralize_reachable` — theorem · `Statlib/Causal/SCM/Theorems.lean:1390` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ IsAcyclic"]
  n2["◆ AncestorsOf"]
  n3["◆ moralize"]
  n4["★ acyclic_no_self_loop"]
  n5["★ ancestor_moralize_reachable"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
