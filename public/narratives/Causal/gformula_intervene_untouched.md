# Proof narrative — gformula_intervene_untouched

Root: **gformula_intervene_untouched** (theorem) `Statlib/Causal/SCM/Theorems.lean:225` · topic `Causal`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `Uni` — abbrev · `Statlib/Causal/SCM/GFormula.lean:38`  _(also used by 14: uniM, gformulaJoint, parentProj, …)_
  ◆ `PrefixKernelFamily` — abbrev · `Statlib/Causal/SCM/GFormula.lean:50`  _(also used by 11: gformulaJoint, DependsOnlyOnParents, InducedPrefixFamily, …)_
  ◆ `interveneFamily` — noncomputable def · `Statlib/Causal/SCM/GFormula.lean:56`  _(also used by 7: gformula_pins_intervened, gformula_truncation, gformula_do_decomp, …)_
★ `gformula_intervene_untouched` — theorem · `Statlib/Causal/SCM/Theorems.lean:225` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Uni"]
  n1["◆ PrefixKernelFamily"]
  n2["◆ interveneFamily"]
  n3["★ gformula_intervene_untouched"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
