# Proof narrative — gformula_marginal_non_ancestor

Root: **gformula_marginal_non_ancestor** (theorem) `Statlib/Causal/SCM/Theorems.lean:696` · topic `Causal`
Closure: 14 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ParentMap` — abbrev · `Statlib/Causal/SCM/Vocabulary.lean:36`  _(also used by 40: mem_parentsIn_iff, skeleton, moralize, …)_
  ◆ `Uni` — abbrev · `Statlib/Causal/SCM/GFormula.lean:38`  _(also used by 8: measurable_parentProj, extendToAssignment, InducedPrefixFamily, …)_
  ◆ `PrefixKernelFamily` — abbrev · `Statlib/Causal/SCM/GFormula.lean:50`  _(also used by 7: InducedPrefixFamily, gformula_joint_markov, gformula_pins_intervened, …)_
  ◆ `parentsIn` — noncomputable def · `Statlib/Causal/SCM/GFormulaGraph.lean:48`  _(also used by 2: mem_parentsIn_iff, parents_precede_in_topological_order)_
  ◆ `parentProj` — noncomputable def · `Statlib/Causal/SCM/GFormulaGraph.lean:63`  _(also used by 1: measurable_parentProj)_
  ◆ `DependsOnlyOnParents` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:82`
  ◆ `AncestorsOf` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:90`  _(also used by 7: acyclic_no_self_ancestor, ancestors_strictly_below, parent_mem_ancestors, …)_
  ◆ `ImpactPa` — def · `Statlib/Causal/SCM/GFormulaGraph.lean:101`
    ◆ `uniM` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:43`  _(also used by 4: gformula_pins_intervened, gformula_truncation, gformula_marginal_prefix, …)_
  ◆ `gformulaJoint` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:65`  _(also used by 5: gformula_joint_markov, gformula_pins_intervened, gformula_truncation, …)_
  ◆ `interveneFamily` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:56`  _(also used by 5: gformula_pins_intervened, gformula_intervene_untouched, gformula_truncation, …)_
  ★ `gformula_do_decomp` — theorem · `Statlib/Causal/SCM/Theorems.lean:295`
  ★ `do_truncation_non_ancestor` — theorem · `Statlib/Causal/SCM/Theorems.lean:410`
★ `gformula_marginal_non_ancestor` — theorem · `Statlib/Causal/SCM/Theorems.lean:696` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ParentMap"]
  n1["◆ Uni"]
  n2["◆ PrefixKernelFamily"]
  n3["◆ parentsIn"]
  n4["◆ parentProj"]
  n5["◆ DependsOnlyOnParents"]
  n6["◆ AncestorsOf"]
  n7["◆ ImpactPa"]
  n8["◆ uniM"]
  n9["◆ gformulaJoint"]
  n10["◆ interveneFamily"]
  n11["★ gformula_do_decomp"]
  n12["★ do_truncation_non_ancestor"]
  n13["★ gformula_marginal_non_ancestor"]
  n2 --> n1
  n3 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n1
  n5 --> n4
  n6 --> n0
  n7 --> n0
  n8 --> n1
  n9 --> n2
  n9 --> n1
  n9 --> n8
  n10 --> n2
  n10 --> n1
  n11 --> n2
  n11 --> n9
  n11 --> n10
  n11 --> n1
  n11 --> n8
  n12 --> n0
  n12 --> n2
  n12 --> n5
  n12 --> n10
  n13 --> n0
  n13 --> n2
  n13 --> n5
  n13 --> n6
  n13 --> n7
  n13 --> n9
  n13 --> n10
  n13 --> n1
  n13 --> n11
  n13 --> n12
  n13 --> n4
  n13 --> n3
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
