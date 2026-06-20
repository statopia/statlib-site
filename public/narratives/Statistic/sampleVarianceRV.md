# Proof narrative — sampleVarianceRV

Root: **sampleVarianceRV** (noncomputable def) `Statlib/Statistic/sampleVarianceRV.lean:13` · topic `Statistic`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `sampleMean` — noncomputable def · `Statlib/Statistic/sampleMean.lean:12`
  ◆ `sampleVariance` — noncomputable def · `Statlib/Statistic/sampleVariance.lean:14`
◆ `sampleVarianceRV` — noncomputable def · `Statlib/Statistic/sampleVarianceRV.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleMean"]
  n1["◆ sampleVariance"]
  n2["◆ sampleVarianceRV"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
