# Proof narrative — hilbertSchmidtNormSq_zero

Root: **hilbertSchmidtNormSq_zero** (theorem) `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:131` · topic `Mathlib`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ▣ `HilbertSchmidtWitness` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:74`  _(also used by 1: toHilbertSchmidtWitness)_
  ◆ `IsHilbertSchmidt` — def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:88`  _(also used by 8: IsHilbertSchmidt.isCompactOperator_via_truncate_complete, IsHilbertSchmidt.smul, IsHilbertSchmidt.summable_of_hilbertBasis, …)_
  ◆ `hilbertSchmidtNormSq` — noncomputable def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:122`
  ★ `IsHilbertSchmidt_zero` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:92`
★ `hilbertSchmidtNormSq_zero` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:131` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HilbertSchmidtWitness"]
  n1["◆ IsHilbertSchmidt"]
  n2["◆ hilbertSchmidtNormSq"]
  n3["★ IsHilbertSchmidt_zero"]
  n4["★ hilbertSchmidtNormSq_zero"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n2
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
