# Proof narrative — measurable_parentProj

Root: **measurable_parentProj** (lemma) `Statlib/Causal/SCM/GFormulaGraph.lean:68` · topic `Causal`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `Uni` — abbrev · `Statlib/Causal/SCM/GFormula.lean:38`  _(also used by 14: uniM, PrefixKernelFamily, interveneFamily, …)_
  ◆ `parentProj` — noncomputable def · `Statlib/Causal/SCM/GFormulaGraph.lean:63`  _(also used by 2: DependsOnlyOnParents, gformula_marginal_non_ancestor)_
· `measurable_parentProj` — lemma · `Statlib/Causal/SCM/GFormulaGraph.lean:68` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Uni"]
  n1["◆ parentProj"]
  n2["· measurable_parentProj"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
