# Proof narrative — vScoreError_le_cauchy_schwarz

Root: **vScoreError_le_cauchy_schwarz** (theorem) `Statlib/CoxChangePoint/LemmaS2Supp.lean:40` · topic `CoxChangePoint`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 11: CoxModel, truncatedScores, truncationResidual, …)_
  ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 18: benchmark_eigsys, CoxModel, truncatedScores, …)_
  ◆ `EstimatedEigensystem` — def · `Statlib/CoxChangePoint/FPC.lean:98`  _(also used by 5: SinThetaBound, SinThetaToPerturbHyp, SinThetaBound.toPerturbationBound, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 71: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `fpcScore` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:64`  _(also used by 2: truncatedScores, truncationResidual)_
  ◆ `fpcScoreError` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:127`
  ◆ `vScoreError` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:140`
★ `vScoreError_le_cauchy_schwarz` — theorem · `Statlib/CoxChangePoint/LemmaS2Supp.lean:40` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionalSample"]
  n1["▣ Eigensystem"]
  n2["◆ EstimatedEigensystem"]
  n3["▣ CoxParam"]
  n4["◆ fpcScore"]
  n5["◆ fpcScoreError"]
  n6["◆ vScoreError"]
  n7["★ vScoreError_le_cauchy_schwarz"]
  n2 --> n1
  n4 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
