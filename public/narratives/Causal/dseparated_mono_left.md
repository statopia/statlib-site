# Proof narrative — dseparated_mono_left

Root: **dseparated_mono_left** (theorem) `Statlib/Causal/SCM/Theorems.lean:1517` · topic `Causal`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 40: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
    ◆ `skeleton` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:45`  _(also used by 11: BackDoorCriterion, skeleton_adj_iff, skeleton_edge_moralized, …)_
      ◆ `IsInterior` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:87`  _(also used by 6: IsInterior_reverse, getVert_rev_eq, getVert_rev_left_eq, …)_
      ◆ `IsColliderOn` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:93`  _(also used by 3: collider_of_reverse, not_collider_of_reverse, blocked_reverse)_
      ◆ `Descendant` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:79`  _(also used by 4: BackDoorCriterion, descendant_rev_ancestor, blocked_reverse, …)_
    ◆ `Blocked` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:103`  _(also used by 5: BackDoorCriterion, blocked_reverse, dseparated_symm, …)_
  ◆ `DSeparated` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:113`  _(also used by 1: dseparated_symm)_
★ `dseparated_mono_left` — theorem · `Statlib/Causal/SCM/Theorems.lean:1517` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ skeleton"]
  n2["◆ IsInterior"]
  n3["◆ IsColliderOn"]
  n4["◆ Descendant"]
  n5["◆ Blocked"]
  n6["◆ DSeparated"]
  n7["★ dseparated_mono_left"]
  n1 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  n7 --> n0
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
