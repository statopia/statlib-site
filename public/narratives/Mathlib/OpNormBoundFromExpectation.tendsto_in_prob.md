# Proof narrative — OpNormBoundFromExpectation.tendsto_in_prob

Root: **OpNormBoundFromExpectation.tendsto_in_prob** (theorem) `Statlib/Mathlib/ProbabilityTheory/RandomMatrixOpNorm.lean:168` · topic `Mathlib`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `OpNormBoundFromExpectation` — structure · `Statlib/Mathlib/ProbabilityTheory/RandomMatrixOpNorm.lean:147`  _(also used by 4: toOpNormBound, OpNormBoundFromExpectation.toCovDiffSq, OpNormBoundFromExpectation.toCovDiffSq_nonneg, …)_
    ▣ `SpectralTheoremCompactSA` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:299`  _(also used by 31: SpectralEigenbasisIsTotal, SpectralTheoremCompactSA.toHilbertBasis, inner_eigenfn_spectralTruncate_lt, …)_
    ◆ `spectralTruncate` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:98`  _(also used by 17: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, inner_eigenfn_residual, …)_
  · `apply` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:107`  _(also used by 13: inner_eigenfn_spectralTruncate_lt, inner_eigenfn_spectralTruncate_ge, isCompactOperator_of_op_norm_tendsto, …)_
★ `OpNormBoundFromExpectation.tendsto_in_prob` — theorem · `Statlib/Mathlib/ProbabilityTheory/RandomMatrixOpNorm.lean:168` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ OpNormBoundFromExpectation"]
  n1["▣ SpectralTheoremCompactSA"]
  n2["◆ spectralTruncate"]
  n3["· apply"]
  n4["★ OpNormBoundFromExpectation.tendsto_in_prob"]
  n2 --> n1
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
