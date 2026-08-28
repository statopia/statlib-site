# Proof narrative — backdoor_no_active_backdoor_path

Root: **backdoor_no_active_backdoor_path** (theorem) `Statlib/Causal/SCM/Theorems.lean:1586` · topic `Causal`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 40: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
    ◆ `Descendant` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:79`  _(also used by 3: descendant_rev_ancestor, blocked_reverse, backdoor_criterion_of_parents_subset)_
  ◆ `skeleton` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:45`  _(also used by 10: DSeparated, skeleton_adj_iff, skeleton_edge_moralized, …)_
      ◆ `IsInterior` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:87`  _(also used by 6: IsInterior_reverse, getVert_rev_eq, getVert_rev_left_eq, …)_
      ◆ `IsColliderOn` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:93`  _(also used by 3: collider_of_reverse, not_collider_of_reverse, blocked_reverse)_
  ◆ `Blocked` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:103`  _(also used by 4: DSeparated, blocked_reverse, dseparated_symm, …)_
  ◆ `BackDoorCriterion` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:131`  _(also used by 1: backdoor_criterion_of_parents_subset)_
★ `backdoor_no_active_backdoor_path` — theorem · `Statlib/Causal/SCM/Theorems.lean:1586` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ Descendant"]
  n2["◆ skeleton"]
  n3["◆ IsInterior"]
  n4["◆ IsColliderOn"]
  n5["◆ Blocked"]
  n6["◆ BackDoorCriterion"]
  n7["★ backdoor_no_active_backdoor_path"]
  n1 --> n0
  n2 --> n0
  n4 --> n0
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n5 --> n1
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n5
  n7 --> n0
  n7 --> n6
  n7 --> n2
  n7 --> n5
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
