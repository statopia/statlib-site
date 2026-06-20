# Proof narrative — benchmark_sample

Root: **benchmark_sample** (def) `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:104` · topic `CoxChangePoint`
Closure: 7 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 41: TruncSample, coxScoreAt, coxScoreAt_dim_match, …)_
  ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 23: CoxLANExpansionHypothesis, coxLogRatio, sample, …)_
  ◆ `benchmark_` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:55`  _(also used by 4: benchmark_, benchmark_model, benchmark_consistency_trivially_true, …)_
  ◆ `benchmark_p` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:47`  _(also used by 4: benchmark_, benchmark_model, benchmark_consistency_trivially_true, …)_
  ◆ `benchmark_d` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:50`  _(also used by 4: benchmark_, benchmark_model, benchmark_consistency_trivially_true, …)_
  ◆ `benchmark_obs` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:93`
◆ `benchmark_sample` — def · `Statlib/CoxChangePoint/CoxBenchmarkInstance.lean:104` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["◆ Sample"]
  n2["◆ benchmark_"]
  n3["◆ benchmark_p"]
  n4["◆ benchmark_d"]
  n5["◆ benchmark_obs"]
  n6["◆ benchmark_sample"]
  n1 --> n0
  n5 --> n0
  n5 --> n3
  n5 --> n4
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
