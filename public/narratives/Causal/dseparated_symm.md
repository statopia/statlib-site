# Proof narrative — dseparated_symm

Root: **dseparated_symm** (theorem) `Statlib/Causal/SCM/Theorems.lean:1505` · topic `Causal`
Closure: 15 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 34: parentsIn, mem_parentsIn_iff, DependsOnlyOnParents, …)_
    ◆ `skeleton` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:45`  _(also used by 5: BackDoorCriterion, skeleton_adj_iff, skeleton_edge_moralized, …)_
      ◆ `IsInterior` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:87`
    ◆ `IsColliderOn` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:93`
    ◆ `Descendant` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:79`  _(also used by 3: BackDoorCriterion, descendant_rev_ancestor, backdoor_criterion_of_parents_subset)_
  ◆ `Blocked` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:103`  _(also used by 3: BackDoorCriterion, backdoor_blocks_into_x_of_parents_subset, backdoor_no_active_backdoor_path)_
  ◆ `DSeparated` — def · `Statlib/Causal/SCM/MoralizedGraph.lean:113`  _(also used by 1: dseparated_mono_left)_
    · `IsInterior_reverse` — lemma · `Statlib/Causal/SCM/Theorems.lean:1408`
      · `getVert_rev_right_eq` — lemma · `Statlib/Causal/SCM/Theorems.lean:1437`
    · `getVert_rev_eq` — lemma · `Statlib/Causal/SCM/Theorems.lean:1418`
      · `getVert_rev_left_eq` — lemma · `Statlib/Causal/SCM/Theorems.lean:1427`
    · `collider_of_reverse` — lemma · `Statlib/Causal/SCM/Theorems.lean:1447`
    · `not_collider_of_reverse` — lemma · `Statlib/Causal/SCM/Theorems.lean:1465`
  ★ `blocked_reverse` — theorem · `Statlib/Causal/SCM/Theorems.lean:1484`
★ `dseparated_symm` — theorem · `Statlib/Causal/SCM/Theorems.lean:1505` **← headline**

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
  n7["· IsInterior_reverse"]
  n8["· getVert_rev_right_eq"]
  n9["· getVert_rev_eq"]
  n10["· getVert_rev_left_eq"]
  n11["· collider_of_reverse"]
  n12["· not_collider_of_reverse"]
  n13["★ blocked_reverse"]
  n14["★ dseparated_symm"]
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
  n7 --> n2
  n8 --> n0
  n8 --> n1
  n8 --> n2
  n9 --> n0
  n9 --> n1
  n9 --> n2
  n10 --> n0
  n10 --> n1
  n10 --> n2
  n11 --> n0
  n11 --> n1
  n11 --> n2
  n11 --> n3
  n11 --> n8
  n11 --> n9
  n11 --> n10
  n12 --> n0
  n12 --> n1
  n12 --> n2
  n12 --> n3
  n12 --> n7
  n12 --> n10
  n12 --> n9
  n12 --> n8
  n13 --> n0
  n13 --> n1
  n13 --> n5
  n13 --> n7
  n13 --> n3
  n13 --> n11
  n13 --> n4
  n13 --> n9
  n13 --> n12
  n14 --> n0
  n14 --> n6
  n14 --> n5
  n14 --> n13
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
