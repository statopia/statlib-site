# Proof narrative — benchmark_model

Root: **benchmark_model** (noncomputable def) `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:125` · topic `CoxChangePoint`
Closure: 10 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 72: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 14: fpcScore, truncatedScores, truncationResidual, …)_
    ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 21: fpcScore, truncatedScores, truncationResidual, …)_
  ▣ `CoxModel` — structure · `Statlib/CoxChangePoint/CoxModel.lean:80`  _(also used by 12: CoxBaselineHypotheses, CoxBaselineHypotheses.hWellSep_from_concave, CoxBaselineHypotheses.hArgmax_from_MLE, …)_
  ◆ `benchmark_` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:55`  _(also used by 4: benchmark_, benchmark_sample, benchmark_consistency_trivially_true, …)_
  ◆ `benchmark_D` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:70`  _(also used by 1: benchmark_)_
  ◆ `benchmark_p` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:47`  _(also used by 5: benchmark_, benchmark_obs, benchmark_sample, …)_
  ◆ `benchmark_d` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:50`  _(also used by 5: benchmark_, benchmark_obs, benchmark_sample, …)_
  ◆ `benchmark_eigsys` — noncomputable def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:113`
◆ `benchmark_model` — noncomputable def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:125` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxParam"]
  n1["◆ FunctionalSample"]
  n2["▣ Eigensystem"]
  n3["▣ CoxModel"]
  n4["◆ benchmark_"]
  n5["◆ benchmark_D"]
  n6["◆ benchmark_p"]
  n7["◆ benchmark_d"]
  n8["◆ benchmark_eigsys"]
  n9["◆ benchmark_model"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n8 --> n2
  n8 --> n5
  n9 --> n3
  n9 --> n4
  n9 --> n5
  n9 --> n6
  n9 --> n7
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
