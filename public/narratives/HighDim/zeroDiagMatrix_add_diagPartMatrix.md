# Proof narrative — zeroDiagMatrix_add_diagPartMatrix

Root: **zeroDiagMatrix_add_diagPartMatrix** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:693` · topic `HighDim`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 42: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, …)_
  ◆ `diagPartMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:57`  _(also used by 2: diagPartMatrix_norm_le, zeroDiagMatrix_norm_le_two)_
· `zeroDiagMatrix_add_diagPartMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:693` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ zeroDiagMatrix"]
  n1["◆ diagPartMatrix"]
  n2["· zeroDiagMatrix_add_diagPartMatrix"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
