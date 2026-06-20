# Proof narrative — benchmark_consistency_trivially_true

Root: **benchmark_consistency_trivially_true** (theorem) `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:164` · topic `CoxChangePoint`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 72: liftAuto, concreteGn, buildLemmaS1Data, …)_
  ◆ `benchmark_p` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:47`  _(also used by 5: benchmark_, benchmark_obs, benchmark_sample, …)_
  ◆ `benchmark_d` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:50`  _(also used by 5: benchmark_, benchmark_obs, benchmark_sample, …)_
  ◆ `benchmark_` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:55`  _(also used by 4: benchmark_, benchmark_sample, benchmark_model, …)_
★ `benchmark_consistency_trivially_true` — theorem · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:164` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxParam"]
  n1["◆ benchmark_p"]
  n2["◆ benchmark_d"]
  n3["◆ benchmark_"]
  n4["★ benchmark_consistency_trivially_true"]
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
