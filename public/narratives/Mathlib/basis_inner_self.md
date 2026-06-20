# Proof narrative — basis_inner_self

Root: **basis_inner_self** (theorem) `Statlib/Mathlib/MeasureTheory/L2Separable.lean:132` · topic `Mathlib`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `OrthonormalBasisL2` — structure · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:108`  _(also used by 7: L2Separable.toSeparableSpace, basis_orthogonal, basis_norm_sq_one, …)_
  ★ `basis_norm_one` — theorem · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:122`  _(also used by 1: basis_norm_sq_one)_
★ `basis_inner_self` — theorem · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:132` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ OrthonormalBasisL2"]
  n1["★ basis_norm_one"]
  n2["★ basis_inner_self"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
