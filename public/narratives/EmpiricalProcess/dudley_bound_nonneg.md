# Proof narrative — dudley_bound_nonneg

Root: **dudley_bound_nonneg** (theorem) `Statlib/EmpiricalProcess/Dudley.lean:219` · topic `EmpiricalProcess`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ◆ `IsENet` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:26`  _(also used by 5: coveringNumber_anti, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
      ◆ `coveringNumber` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:31`  _(also used by 11: coveringNumber_anti, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
    ◆ `metricEntropy` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:35`  _(also used by 1: l1_ball_covering_maurey)_
  ◆ `entropyIntegral` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:40`  _(also used by 1: dudley_entropy_integral)_
★ `dudley_bound_nonneg` — theorem · `Statlib/EmpiricalProcess/Dudley.lean:219` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsENet"]
  n1["◆ coveringNumber"]
  n2["◆ metricEntropy"]
  n3["◆ entropyIntegral"]
  n4["★ dudley_bound_nonneg"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
