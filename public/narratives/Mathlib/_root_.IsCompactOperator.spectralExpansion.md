# Proof narrative — _root_.IsCompactOperator.spectralExpansion

Root: **_root_.IsCompactOperator.spectralExpansion** (theorem) `Statlib/Mathlib/Analysis/SpectralTruncation.lean:245` · topic `Mathlib`
Closure: 10 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `SpectralTheoremCompactSA` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:299`  _(also used by 27: SpectralEigenbasisIsTotal, SpectralTheoremCompactSA.toHilbertBasis, inner_eigenfn_spectralTruncate_lt, …)_
  ◆ `spectralTruncate` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:98`  _(also used by 13: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, inner_eigenfn_residual, …)_
      ★ `of_target_finiteDimensional` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:111`
    ★ `of_finiteDimensional_range` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:131`  _(also used by 2: truncate_isCompactOperator, isCompactOperator_trunc)_
      · `apply` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:107`  _(also used by 13: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, isCompactOperator_of_op_norm_tendsto, …)_
    ★ `spectralTruncate_finiteDimensional_range` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:148`  _(also used by 1: compactSpectralTruncationOfBessel)_
  ★ `spectralTruncate_isCompactOperator` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:177`
    · `isSelfAdjoint_rankOne` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:121`
  ★ `spectralTruncate_isSelfAdjoint` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:134`  _(also used by 1: compactSpectralTruncationOfBessel)_
★ `_root_.IsCompactOperator.spectralExpansion` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:245` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SpectralTheoremCompactSA"]
  n1["◆ spectralTruncate"]
  n2["★ of_target_finiteDimensional"]
  n3["★ of_finiteDimensional_range"]
  n4["· apply"]
  n5["★ spectralTruncate_finiteDimensional_range"]
  n6["★ spectralTruncate_isCompactOperator"]
  n7["· isSelfAdjoint_rankOne"]
  n8["★ spectralTruncate_isSelfAdjoint"]
  n9["★ _root_.IsCompactOperator.spectralExpansion"]
  n1 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n3
  n6 --> n5
  n8 --> n0
  n8 --> n1
  n8 --> n7
  n9 --> n0
  n9 --> n1
  n9 --> n6
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
