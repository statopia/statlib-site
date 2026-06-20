# Proof narrative — typeII_add_power

Root: **typeII_add_power** (theorem) `Statlib/Testing/typeII_add_power.lean:16` · topic `Testing`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/Testing/TestFunction.lean:12`  _(also used by 9: HasLevel, IsSimilarTest, IsUMP, …)_
    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 45: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ◆ `PowerFunction` — noncomputable def · `Statlib/Testing/PowerFunction.lean:12`  _(also used by 8: IsSimilarTest, IsUMP, IsUMPU, …)_
  ◆ `TypeIIError` — noncomputable def · `Statlib/Testing/TypeIIError.lean:13`
★ `typeII_add_power` — theorem · `Statlib/Testing/typeII_add_power.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["▣ ParametricFamily"]
  n2["◆ PowerFunction"]
  n3["◆ TypeIIError"]
  n4["★ typeII_add_power"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
