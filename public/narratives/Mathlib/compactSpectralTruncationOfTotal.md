# Proof narrative — compactSpectralTruncationOfTotal

Root: **compactSpectralTruncationOfTotal** (noncomputable def) `Statlib/Mathlib/Analysis/BesselCompactSA.lean:309` · topic `Mathlib`
Closure: 23 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `SpectralTheoremCompactSA` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:299`  _(also used by 17: spectralTruncate_tendsto_op_norm_complete, eigval_summable_sq_implies_decay, eigenfn_in_closedSpan, …)_
  ▣ `SpectralEigenbasisIsTotal` — structure · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:63`  _(also used by 2: spectralTruncate_tendsto_op_norm_complete, eigenbasis_total_of_invariant_subspace_eigenvector)_
  ▣ `CompactSpectralTruncation` — structure · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:258`  _(also used by 1: isCompactOperator_trunc)_
    ◆ `spectralTruncate` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:98`  _(also used by 7: spectralTruncate_tendsto_op_norm_complete, spectralTruncate_isCompactOperator, spectralTruncate_apply_eigenfn, …)_
    ▣ `BesselSquaredNormBound` — structure · `Statlib/Mathlib/Analysis/SpectralTruncationConv.lean:162`
      · `apply` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:107`  _(also used by 11: isCompactOperator_of_op_norm_tendsto, spectralGap_le_dist_of_mem, spectralGap_nonneg, …)_
    ★ `spectralTruncate_finiteDimensional_range` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:148`  _(also used by 1: spectralTruncate_isCompactOperator)_
      · `isSelfAdjoint_rankOne` — lemma · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:121`
    ★ `spectralTruncate_isSelfAdjoint` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncation.lean:134`  _(also used by 1: _root_.IsCompactOperator.spectralExpansion)_
      ★ `spectralTruncate_op_norm_le` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncationConv.lean:178`
    ★ `spectralTruncate_tendsto_op_norm_of_bessel` — theorem · `Statlib/Mathlib/Analysis/SpectralTruncationConv.lean:215`  _(also used by 1: spectralTruncate_tendsto_op_norm_complete)_
  ◆ `compactSpectralTruncationOfBessel` — noncomputable def · `Statlib/Mathlib/Analysis/SpectralTruncationConv.lean:242`
        ▣ `OrthonormalBasisL2` — structure · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:108`  _(also used by 8: L2Separable.toSeparableSpace, basis_norm_one, basis_orthogonal, …)_
    ◆ `toHilbertBasis` — noncomputable def · `Statlib/Mathlib/MeasureTheory/L2Separable.lean:153`  _(also used by 1: toHilbertSchmidtWitness)_
      ★ `orthonormal_eigenfn` — theorem · `Statlib/Mathlib/Analysis/SpectralCompactSelfAdjoint.lean:323`
    ◆ `SpectralTheoremCompactSA.toHilbertBasis` — noncomputable def · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:77`
    ★ `parseval_identity_real` — theorem · `Statlib/Mathlib/Analysis/Parseval.lean:80`
      · `inner_eigenfn_spectralTruncate_lt` — private lemma · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:93`
      · `inner_eigenfn_spectralTruncate_ge` — private lemma · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:123`
    · `inner_eigenfn_residual` — private lemma · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:142`
    ★ `bessel_summable` — theorem · `Statlib/Mathlib/Analysis/Parseval.lean:94`
  ★ `besselSquaredNormBound_of_total` — theorem · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:177`  _(also used by 1: spectralTruncate_tendsto_op_norm_complete)_
◆ `compactSpectralTruncationOfTotal` — noncomputable def · `Statlib/Mathlib/Analysis/BesselCompactSA.lean:309` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SpectralTheoremCompactSA"]
  n1["▣ SpectralEigenbasisIsTotal"]
  n2["▣ CompactSpectralTruncation"]
  n3["◆ spectralTruncate"]
  n4["▣ BesselSquaredNormBound"]
  n5["· apply"]
  n6["★ spectralTruncate_finiteDimensional_range"]
  n7["· isSelfAdjoint_rankOne"]
  n8["★ spectralTruncate_isSelfAdjoint"]
  n9["★ spectralTruncate_op_norm_le"]
  n10["★ spectralTruncate_tendsto_op_norm_of_bessel"]
  n11["◆ compactSpectralTruncationOfBessel"]
  n12["▣ OrthonormalBasisL2"]
  n13["◆ toHilbertBasis"]
  n14["★ orthonormal_eigenfn"]
  n15["◆ SpectralTheoremCompactSA.toHilbertBasis"]
  n16["★ parseval_identity_real"]
  n17["· inner_eigenfn_spectralTruncate_lt"]
  n18["· inner_eigenfn_spectralTruncate_ge"]
  n19["· inner_eigenfn_residual"]
  n20["★ bessel_summable"]
  n21["★ besselSquaredNormBound_of_total"]
  n22["◆ compactSpectralTruncationOfTotal"]
  n1 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n3
  n6 --> n0
  n6 --> n3
  n6 --> n5
  n8 --> n0
  n8 --> n3
  n8 --> n7
  n9 --> n0
  n9 --> n4
  n9 --> n3
  n10 --> n0
  n10 --> n4
  n10 --> n3
  n10 --> n9
  n11 --> n0
  n11 --> n4
  n11 --> n2
  n11 --> n3
  n11 --> n6
  n11 --> n8
  n11 --> n10
  n13 --> n12
  n14 --> n0
  n15 --> n13
  n15 --> n0
  n15 --> n1
  n15 --> n14
  n17 --> n0
  n17 --> n3
  n17 --> n5
  n18 --> n0
  n18 --> n3
  n18 --> n5
  n19 --> n0
  n19 --> n3
  n19 --> n17
  n19 --> n18
  n21 --> n0
  n21 --> n1
  n21 --> n4
  n21 --> n15
  n21 --> n13
  n21 --> n3
  n21 --> n16
  n21 --> n19
  n21 --> n20
  n22 --> n0
  n22 --> n1
  n22 --> n2
  n22 --> n11
  n22 --> n21
  class n22 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
