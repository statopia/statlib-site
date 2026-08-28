# Proof narrative — parent_mem_ancestors

Root: **parent_mem_ancestors** (theorem) `Statlib/Causal/SCM/Theorems.lean:658` · topic `Causal`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 44: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
  ◆ `AncestorsOf` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:90`  _(also used by 7: acyclic_no_self_ancestor, ancestors_strictly_below, ancestor_trans, …)_
★ `parent_mem_ancestors` — theorem · `Statlib/Causal/SCM/Theorems.lean:658` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ AncestorsOf"]
  n2["★ parent_mem_ancestors"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
