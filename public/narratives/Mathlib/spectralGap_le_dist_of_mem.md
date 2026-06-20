# Proof narrative — spectralGap_le_dist_of_mem

Root: **spectralGap_le_dist_of_mem** (lemma) `Statlib/Mathlib/Analysis/DavisKahan.lean:140` · topic `Mathlib`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `spectralGap` — noncomputable def · `Statlib/Mathlib/Analysis/DavisKahan.lean:127`  _(also used by 2: spectralGap_of_punctured_spectrum_empty, spectralGap_nonneg)_
    ▣ `SpectralTheoremCompactSA` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:299`  _(also used by 31: SpectralEigenbasisIsTotal, SpectralTheoremCompactSA.toHilbertBasis, inner_eigenfn_spectralTruncate_lt, …)_
    ◆ `spectralTruncate` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:98`  _(also used by 17: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, inner_eigenfn_residual, …)_
  · `apply` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:107`  _(also used by 13: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, isCompactOperator_of_op_norm_tendsto, …)_
· `spectralGap_le_dist_of_mem` — lemma · `Statlib/Mathlib/Analysis/DavisKahan.lean:140` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ spectralGap"]
  n1["▣ SpectralTheoremCompactSA"]
  n2["◆ spectralTruncate"]
  n3["· apply"]
  n4["· spectralGap_le_dist_of_mem"]
  n2 --> n1
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
