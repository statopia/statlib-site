# Proof narrative — isCompactOperator_trunc

Root: **isCompactOperator_trunc** (theorem) `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:275` · topic `Mathlib`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CompactSpectralTruncation` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:258`  _(also used by 2: compactSpectralTruncationOfTotal, compactSpectralTruncationOfBessel)_
    ★ `of_target_finiteDimensional` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:111`
  ★ `of_finiteDimensional_range` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:131`  _(also used by 2: truncate_isCompactOperator, spectralTruncate_isCompactOperator)_
★ `isCompactOperator_trunc` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:275` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CompactSpectralTruncation"]
  n1["★ of_target_finiteDimensional"]
  n2["★ of_finiteDimensional_range"]
  n3["★ isCompactOperator_trunc"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
