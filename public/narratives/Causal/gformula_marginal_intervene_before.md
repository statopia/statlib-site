# Proof narrative — gformula_marginal_intervene_before

Root: **gformula_marginal_intervene_before** (theorem) `Statlib/Causal/SCM/Theorems.lean:562` · topic `Causal`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `Uni` — abbrev · `Statlib/Causal/SCM/GFormula.lean:38`  _(also used by 11: parentProj, measurable_parentProj, DependsOnlyOnParents, …)_
  ◆ `PrefixKernelFamily` — abbrev · `Statlib/Causal/SCM/GFormula.lean:50`  _(also used by 10: DependsOnlyOnParents, InducedPrefixFamily, gformula_joint_markov, …)_
  ◆ `uniM` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:43`  _(also used by 4: gformula_pins_intervened, gformula_truncation, gformula_do_decomp, …)_
  ◆ `gformulaJoint` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:65`  _(also used by 6: gformula_joint_markov, gformula_pins_intervened, gformula_truncation, …)_
  ◆ `interveneFamily` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:56`  _(also used by 7: gformula_pins_intervened, gformula_intervene_untouched, gformula_truncation, …)_
★ `gformula_marginal_intervene_before` — theorem · `Statlib/Causal/SCM/Theorems.lean:562` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Uni"]
  n1["◆ PrefixKernelFamily"]
  n2["◆ uniM"]
  n3["◆ gformulaJoint"]
  n4["◆ interveneFamily"]
  n5["★ gformula_marginal_intervene_before"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  n5 --> n0
  n5 --> n2
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
