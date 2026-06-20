# Proof narrative — packing_le_covering

Root: **packing_le_covering** (theorem) `Statlib/EmpiricalProcess/DudleySudakov.lean:79` · topic `EmpiricalProcess`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsEpsSeparated` — def · `Statlib/EmpiricalProcess/DudleySudakov.lean:59`  _(also used by 2: IsEpsSeparated.empty, IsEpsSeparated.subset)_
  ◆ `packingNumber` — def · `Statlib/EmpiricalProcess/DudleySudakov.lean:65`
    ◆ `IsENet` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:26`  _(also used by 5: coveringNumber_anti, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
  ◆ `coveringNumber` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:31`  _(also used by 11: metricEntropy, coveringNumber_anti, coveringNumber_mono, …)_
★ `packing_le_covering` — theorem · `Statlib/EmpiricalProcess/DudleySudakov.lean:79` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsEpsSeparated"]
  n1["◆ packingNumber"]
  n2["◆ IsENet"]
  n3["◆ coveringNumber"]
  n4["★ packing_le_covering"]
  n1 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
