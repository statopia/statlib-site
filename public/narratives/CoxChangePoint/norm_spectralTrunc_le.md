# Proof narrative — norm_spectralTrunc_le

Root: **norm_spectralTrunc_le** (lemma) `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:212` · topic `CoxChangePoint`
Closure: 9 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `SpectralFamilyHS` — structure · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:87`  _(also used by 7: inner_of_ne, HasSpectralExpansion, SpectralFamilyHS.phiRepr, …)_
  ◆ `spectralTrunc` — noncomputable def · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:169`  _(also used by 1: HasSpectralExpansion)_
    · `abs_eigval` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:148`
    · `eigval_le_zero_term` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:136`
    · `eigval_zero_nonneg` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:144`
      · `inner_self_eq_one` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:111`
  · `norm_eigenfn` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:124`
  · `spectralTrunc_coeff_bound` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:174`
· `norm_spectralTrunc_le` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:212` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SpectralFamilyHS"]
  n1["◆ spectralTrunc"]
  n2["· abs_eigval"]
  n3["· eigval_le_zero_term"]
  n4["· eigval_zero_nonneg"]
  n5["· inner_self_eq_one"]
  n6["· norm_eigenfn"]
  n7["· spectralTrunc_coeff_bound"]
  n8["· norm_spectralTrunc_le"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n6 --> n0
  n6 --> n5
  n7 --> n0
  n7 --> n2
  n7 --> n3
  n7 --> n4
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n8 --> n7
  n8 --> n6
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
