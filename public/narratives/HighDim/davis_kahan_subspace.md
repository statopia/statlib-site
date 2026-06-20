# Proof narrative — davis_kahan_subspace

Root: **davis_kahan_subspace** (theorem) `Statlib/HighDim/SpectralPerturbation.lean:135` · topic `HighDim`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/SpectralPerturbation.lean:40`  _(also used by 5: sortedEigenvalues_mono, sortedEigenvalues_perm, weyl_mineig_lower, …)_
  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Basic.lean:71`  _(also used by 2: hanson_wright, hanson_wright_isotropic)_
★ `davis_kahan_subspace` — theorem · `Statlib/HighDim/SpectralPerturbation.lean:135` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sortedEigenvalues"]
  n1["◆ frobeniusNormSq"]
  n2["★ davis_kahan_subspace"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
