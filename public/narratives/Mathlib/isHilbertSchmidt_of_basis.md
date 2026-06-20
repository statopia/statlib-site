# Proof narrative — isHilbertSchmidt_of_basis

Root: **isHilbertSchmidt_of_basis** (theorem) `Statlib/Mathlib/MeasureTheory/L2Separable.lean:189` · topic `Mathlib`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `OrthonormalBasisL2` — structure · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:108`  _(also used by 6: L2Separable.toSeparableSpace, basis_norm_one, basis_orthogonal, …)_
    ▣ `HilbertSchmidtWitness` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:74`
  ◆ `IsHilbertSchmidt` — def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:88`  _(also used by 10: IsHilbertSchmidt.isCompactOperator_via_truncate_complete, IsHilbertSchmidt_zero, IsHilbertSchmidt.smul, …)_
    ◆ `toHilbertBasis` — noncomputable def · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:153`  _(also used by 2: SpectralTheoremCompactSA.toHilbertBasis, besselSquaredNormBound_of_total)_
  ◆ `toHilbertSchmidtWitness` — noncomputable def · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:177`
★ `isHilbertSchmidt_of_basis` — theorem · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:189` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ OrthonormalBasisL2"]
  n1["▣ HilbertSchmidtWitness"]
  n2["◆ IsHilbertSchmidt"]
  n3["◆ toHilbertBasis"]
  n4["◆ toHilbertSchmidtWitness"]
  n5["★ isHilbertSchmidt_of_basis"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
