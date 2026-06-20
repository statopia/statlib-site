# Proof narrative — sudakov_minoration

Root: **sudakov_minoration** (theorem) `Statlib/EmpiricalProcess/DudleySudakov.lean:153` · topic `EmpiricalProcess`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsSubGaussianProcess` — structure · `Statlib/EmpiricalProcess/Dudley.lean:188`  _(also used by 12: dudley_single_level_finite, subgaussian_chernoff_single, subgaussian_sup'_tail_bound, …)_
    ◆ `IsENet` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:26`  _(also used by 5: coveringNumber_anti, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
  ◆ `coveringNumber` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:31`  _(also used by 11: metricEntropy, coveringNumber_anti, coveringNumber_mono, …)_
★ `sudakov_minoration` — theorem · `Statlib/EmpiricalProcess/DudleySudakov.lean:153` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsSubGaussianProcess"]
  n1["◆ IsENet"]
  n2["◆ coveringNumber"]
  n3["★ sudakov_minoration"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
