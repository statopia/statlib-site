# Proof narrative — acyclic_no_self_ancestor

Root: **acyclic_no_self_ancestor** (theorem) `Statlib/Causal/SCM/Theorems.lean:400` · topic `Causal`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 43: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
  ◆ `IsAcyclic` — def · `Statlib/Causal/SCM/Vocabulary.lean:42`  _(also used by 6: acyclic_of_topological_order, acyclic_no_self_loop, ancestor_moralize_reachable, …)_
  ◆ `AncestorsOf` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:90`  _(also used by 7: ancestors_strictly_below, parent_mem_ancestors, ancestor_trans, …)_
★ `acyclic_no_self_ancestor` — theorem · `Statlib/Causal/SCM/Theorems.lean:400` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ IsAcyclic"]
  n2["◆ AncestorsOf"]
  n3["★ acyclic_no_self_ancestor"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
