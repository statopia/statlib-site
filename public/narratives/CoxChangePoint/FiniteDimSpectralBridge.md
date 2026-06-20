# Proof narrative — FiniteDimSpectralBridge

Root: **FiniteDimSpectralBridge** (noncomputable def) `Statlib/CoxChangePoint/SpectralTheorem.lean:163` · topic `CoxChangePoint`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 22: benchmark_eigsys, CoxModel, fpcScore, …)_
  ◆ `finiteDimLam` — noncomputable def · `Statlib/CoxChangePoint/SpectralTheorem.lean:127`
  ◆ `finiteDimPhi` — noncomputable def · `Statlib/CoxChangePoint/SpectralTheorem.lean:144`
  · `finiteDimLam_nonneg` — lemma · `Statlib/CoxChangePoint/SpectralTheorem.lean:133`
  · `finiteDimPhi_meas` — lemma · `Statlib/CoxChangePoint/SpectralTheorem.lean:151`
◆ `FiniteDimSpectralBridge` — noncomputable def · `Statlib/CoxChangePoint/SpectralTheorem.lean:163` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Eigensystem"]
  n1["◆ finiteDimLam"]
  n2["◆ finiteDimPhi"]
  n3["· finiteDimLam_nonneg"]
  n4["· finiteDimPhi_meas"]
  n5["◆ FiniteDimSpectralBridge"]
  n3 --> n1
  n4 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
