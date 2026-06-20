# Proof narrative — sampleMedian

Root: **sampleMedian** (noncomputable def) `Statlib/Statistic/sampleMedian.lean:13` · topic `Statistic`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `orderStatistic` — noncomputable def · `Statlib/Statistic/orderStatistic.lean:13`
  ◆ `sampleQuantile` — noncomputable def · `Statlib/Statistic/sampleQuantile.lean:14`
◆ `sampleMedian` — noncomputable def · `Statlib/Statistic/sampleMedian.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ orderStatistic"]
  n1["◆ sampleQuantile"]
  n2["◆ sampleMedian"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
