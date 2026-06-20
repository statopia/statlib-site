# Proof narrative — IsHilbertSchmidt.isCompactOperator_of_truncationLimit

Root: **IsHilbertSchmidt.isCompactOperator_of_truncationLimit** (theorem) `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:153` · topic `Mathlib`
Closure: 12 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `HilbertSchmidtWitness` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:74`  _(also used by 1: toHilbertSchmidtWitness)_
  ◆ `IsHilbertSchmidt` — def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:88`  _(also used by 10: IsHilbertSchmidt.isCompactOperator_via_truncate_complete, IsHilbertSchmidt_zero, IsHilbertSchmidt.smul, …)_
  ◆ `truncate` — noncomputable def · `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:92`
      ★ `of_target_finiteDimensional` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:111`
    ★ `of_finiteDimensional_range` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:131`  _(also used by 2: isCompactOperator_trunc, spectralTruncate_isCompactOperator)_
      ★ `truncate_apply` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:98`
        ▣ `SpectralTheoremCompactSA` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:299`  _(also used by 31: SpectralEigenbasisIsTotal, SpectralTheoremCompactSA.toHilbertBasis, inner_eigenfn_spectralTruncate_lt, …)_
        ◆ `spectralTruncate` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:98`  _(also used by 17: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, inner_eigenfn_residual, …)_
      · `apply` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:107`  _(also used by 13: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, isCompactOperator_of_op_norm_tendsto, …)_
    ★ `truncate_finiteDim_range` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:110`
  ★ `truncate_isCompactOperator` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:132`
★ `IsHilbertSchmidt.isCompactOperator_of_truncationLimit` — theorem · `Statlib/Mathlib/Analysis/HilbertSchmidtCompact.lean:153` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HilbertSchmidtWitness"]
  n1["◆ IsHilbertSchmidt"]
  n2["◆ truncate"]
  n3["★ of_target_finiteDimensional"]
  n4["★ of_finiteDimensional_range"]
  n5["★ truncate_apply"]
  n6["▣ SpectralTheoremCompactSA"]
  n7["◆ spectralTruncate"]
  n8["· apply"]
  n9["★ truncate_finiteDim_range"]
  n10["★ truncate_isCompactOperator"]
  n11["★ IsHilbertSchmidt.isCompactOperator_of_truncationLimit"]
  n1 --> n0
  n4 --> n3
  n5 --> n2
  n7 --> n6
  n8 --> n6
  n8 --> n7
  n9 --> n2
  n9 --> n5
  n9 --> n8
  n10 --> n2
  n10 --> n4
  n10 --> n9
  n11 --> n1
  n11 --> n2
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
