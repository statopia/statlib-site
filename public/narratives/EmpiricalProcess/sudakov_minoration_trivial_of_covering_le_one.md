# Proof narrative — sudakov_minoration_trivial_of_covering_le_one

Root: **sudakov_minoration_trivial_of_covering_le_one** (lemma) `Statlib/EmpiricalProcess/DudleySudakov.lean:282` · topic `EmpiricalProcess`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsENet` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:26`  _(also used by 5: coveringNumber_anti, coveringNumber_mono, coveringNumber_lt_top_of_totallyBounded, …)_
  ◆ `coveringNumber` — def · `Statlib/EmpiricalProcess/CoveringNumber.lean:31`  _(also used by 11: metricEntropy, coveringNumber_anti, coveringNumber_mono, …)_
  · `centered_iSup_set_nonneg_of_bddAbove` — lemma · `Statlib/EmpiricalProcess/DudleySudakov.lean:250`
· `sudakov_minoration_trivial_of_covering_le_one` — lemma · `Statlib/EmpiricalProcess/DudleySudakov.lean:282` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsENet"]
  n1["◆ coveringNumber"]
  n2["· centered_iSup_set_nonneg_of_bddAbove"]
  n3["· sudakov_minoration_trivial_of_covering_le_one"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
