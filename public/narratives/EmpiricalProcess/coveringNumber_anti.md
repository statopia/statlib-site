# Proof narrative — coveringNumber_anti

Root: **coveringNumber_anti** (theorem) `Statlib/EmpiricalProcess/CoveringNumber.lean:46` · topic `EmpiricalProcess`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsENet` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:26`  _(also used by 4: coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, exists_finset_enet_of_totallyBounded, …)_
  ◆ `coveringNumber` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:31`  _(also used by 11: metricEntropy, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
★ `coveringNumber_anti` — theorem · `Statlib/EmpiricalProcess/CoveringNumber.lean:46` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsENet"]
  n1["◆ coveringNumber"]
  n2["★ coveringNumber_anti"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
