# Proof narrative — benchmark_

Root: **benchmark_** (def) `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:83` · topic `CoxChangePoint`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `benchmark_` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:55`  _(also used by 5: benchmark_, benchmark_sample, benchmark_model, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 72: liftAuto, concreteGn, buildLemmaS1Data, …)_
  ◆ `benchmark_p` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:47`  _(also used by 5: benchmark_obs, benchmark_sample, benchmark_model, …)_
  ◆ `benchmark_d` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:50`  _(also used by 5: benchmark_obs, benchmark_sample, benchmark_model, …)_
◆ `benchmark_` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:83` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ benchmark_"]
  n1["▣ CoxParam"]
  n2["◆ benchmark_p"]
  n3["◆ benchmark_d"]
  n4["◆ benchmark_"]
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
