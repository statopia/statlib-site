# Proof narrative — skeleton_edge_moralized

Root: **skeleton_edge_moralized** (theorem) `Statlib/Causal/SCM/Theorems.lean:1361` · topic `Causal`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 43: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
  ◆ `skeleton` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:45`  _(also used by 13: IsColliderOn, Blocked, DSeparated, …)_
  ◆ `moralize` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:60`  _(also used by 4: moralize_adj_iff, parent_edge_moralized, coparents_moralized, …)_
★ `skeleton_edge_moralized` — theorem · `Statlib/Causal/SCM/Theorems.lean:1361` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ skeleton"]
  n2["◆ moralize"]
  n3["★ skeleton_edge_moralized"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
