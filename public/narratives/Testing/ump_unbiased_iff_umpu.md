# Proof narrative — ump_unbiased_iff_umpu

Root: **ump_unbiased_iff_umpu** (theorem) `Statlib/Testing/ump_unbiased_iff_umpu.lean:18` · topic `Testing`
Closure: 8 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/Testing/TestFunction.lean:12`  _(also used by 6: IsSimilarTest, IsUMP, TypeIError, …)_
    ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 42: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ◆ `PowerFunction` — noncomputable def · `Statlib/Testing/PowerFunction.lean:12`  _(also used by 6: IsSimilarTest, IsUMP, TypeIError, …)_
      ◆ `Size` — noncomputable def · `Statlib/Testing/Size.lean:13`
  ◆ `HasLevel` — def · `Statlib/Testing/HasLevel.lean:12`  _(also used by 2: IsUMP, karlin_rubin)_
  ◆ `IsUnbiasedTest` — def · `Statlib/Testing/IsUnbiasedTest.lean:16`
  ◆ `IsUMPU` — def · `Statlib/Testing/IsUMPU.lean:17`
★ `ump_unbiased_iff_umpu` — theorem · `Statlib/Testing/ump_unbiased_iff_umpu.lean:18` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["▣ ParametricFamily"]
  n2["◆ PowerFunction"]
  n3["◆ Size"]
  n4["◆ HasLevel"]
  n5["◆ IsUnbiasedTest"]
  n6["◆ IsUMPU"]
  n7["★ ump_unbiased_iff_umpu"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n4 --> n3
  n5 --> n1
  n5 --> n0
  n5 --> n4
  n5 --> n2
  n6 --> n1
  n6 --> n0
  n6 --> n5
  n6 --> n2
  n7 --> n0
  n7 --> n5
  n7 --> n4
  n7 --> n2
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
