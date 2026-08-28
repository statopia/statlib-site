# Proof narrative — parents_precede_in_topological_order

Root: **parents_precede_in_topological_order** (theorem) `Statlib/Causal/SCM/Theorems.lean:375` · topic `Causal`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 43: DependsOnlyOnParents, AncestorsOf, ImpactPa, …)_
  ◆ `parentsIn` — noncomputable def · `Statlib/Causal/SCM/GFormulaGraph.lean:48`  _(also used by 2: DependsOnlyOnParents, gformula_marginal_non_ancestor)_
  · `mem_parentsIn_iff` — lemma · `Statlib/Causal/SCM/GFormulaGraph.lean:53`
★ `parents_precede_in_topological_order` — theorem · `Statlib/Causal/SCM/Theorems.lean:375` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ parentsIn"]
  n2["· mem_parentsIn_iff"]
  n3["★ parents_precede_in_topological_order"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
