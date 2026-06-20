# Proof narrative — TypeIError

Root: **TypeIError** (noncomputable def) `Statlib/Testing/TypeIError.lean:13` · topic `Testing`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 45: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ▣ `TestFunction` — structure · `Statlib/Testing/TestFunction.lean:12`  _(also used by 10: HasLevel, IsSimilarTest, IsUMP, …)_
  ◆ `PowerFunction` — noncomputable def · `Statlib/Testing/PowerFunction.lean:12`  _(also used by 9: IsSimilarTest, IsUMP, IsUMPU, …)_
◆ `TypeIError` — noncomputable def · `Statlib/Testing/TypeIError.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["▣ TestFunction"]
  n2["◆ PowerFunction"]
  n3["◆ TypeIError"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
