# Proof narrative — isMLE_comp

Root: **isMLE_comp** (theorem) `Statlib/Estimator/Basic.lean:136` · topic `Estimator`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 44: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ◆ `likelihood` — noncomputable def · `Statlib/Estimator/Basic.lean:117`
  ◆ `IsMLE` — def · `Statlib/Estimator/Basic.lean:124`
★ `isMLE_comp` — theorem · `Statlib/Estimator/Basic.lean:136` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ likelihood"]
  n2["◆ IsMLE"]
  n3["★ isMLE_comp"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
