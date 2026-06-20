# Proof narrative — isHilbertSchmidt

Root: **isHilbertSchmidt** (theorem) `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:244` · topic `Mathlib`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `L2KernelHS` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:196`  _(also used by 3: kernelNormSq, kernelNormSq_nonneg, ofL2BoundedKernelOperator)_
    ▣ `HilbertSchmidtWitness` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:74`  _(also used by 1: toHilbertSchmidtWitness)_
  ◆ `IsHilbertSchmidt` — def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:88`  _(also used by 10: IsHilbertSchmidt.isCompactOperator_via_truncate_complete, IsHilbertSchmidt_zero, IsHilbertSchmidt.smul, …)_
  ◆ `toContinuousLinearMap` — noncomputable def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:232`  _(also used by 1: matrixToCLM)_
★ `isHilbertSchmidt` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:244` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ L2KernelHS"]
  n1["▣ HilbertSchmidtWitness"]
  n2["◆ IsHilbertSchmidt"]
  n3["◆ toContinuousLinearMap"]
  n4["★ isHilbertSchmidt"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
