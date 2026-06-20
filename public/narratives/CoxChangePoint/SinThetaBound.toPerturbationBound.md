# Proof narrative — SinThetaBound.toPerturbationBound

Root: **SinThetaBound.toPerturbationBound** (def) `Statlib/CoxChangePoint/SinThetaTheorem.lean:191` · topic `CoxChangePoint`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 17: benchmark_eigsys, CoxModel, fpcScore, …)_
  ◆ `EstimatedEigensystem` — def · `Statlib/CoxChangePoint/FPC.lean:98`  _(also used by 4: fpcScoreError, vScoreError, vScoreError_le_cauchy_schwarz, …)_
  ▣ `KernelOperatorNormSpec` — structure · `Statlib/CoxChangePoint/SinThetaTheorem.lean:80`
  ◆ `eigenvalueGap` — def · `Statlib/CoxChangePoint/SinThetaTheorem.lean:98`
  ▣ `SinThetaBound` — structure · `Statlib/CoxChangePoint/SinThetaTheorem.lean:118`
  ▣ `SinThetaToPerturbHyp` — structure · `Statlib/CoxChangePoint/SinThetaTheorem.lean:158`
  ▣ `PerturbationBound` — structure · `Statlib/CoxChangePoint/SpectralBridge.lean:126`
◆ `SinThetaBound.toPerturbationBound` — def · `Statlib/CoxChangePoint/SinThetaTheorem.lean:191` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Eigensystem"]
  n1["◆ EstimatedEigensystem"]
  n2["▣ KernelOperatorNormSpec"]
  n3["◆ eigenvalueGap"]
  n4["▣ SinThetaBound"]
  n5["▣ SinThetaToPerturbHyp"]
  n6["▣ PerturbationBound"]
  n7["◆ SinThetaBound.toPerturbationBound"]
  n1 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n6 --> n0
  n6 --> n1
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n4
  n7 --> n5
  n7 --> n6
  n7 --> n3
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
