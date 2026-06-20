# Proof narrative — karlin_rubin

Root: **karlin_rubin** (theorem) `Statlib/Testing/karlin_rubin.lean:30` · topic `Testing`
Closure: 10 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 42: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ▣ `TestFunction` — structure · `Statlib/Testing/TestFunction.lean:12`  _(also used by 7: IsSimilarTest, IsUMPU, IsUnbiasedTest, …)_
  ◆ `PowerFunction` — noncomputable def · `Statlib/Testing/PowerFunction.lean:12`  _(also used by 7: IsSimilarTest, IsUMPU, IsUnbiasedTest, …)_
    ◆ `Size` — noncomputable def · `Statlib/Testing/Size.lean:13`
  ◆ `HasLevel` — def · `Statlib/Testing/HasLevel.lean:12`  _(also used by 2: IsUnbiasedTest, ump_unbiased_iff_umpu)_
  ◆ `IsUMP` — def · `Statlib/Testing/IsUMP.lean:15`
      ★ `np_integrand_nonneg` — theorem · `Statlib/Testing/np_integrand_nonneg.lean:16`
    ★ `np_integral_nonneg` — theorem · `Statlib/Testing/np_integral_nonneg.lean:16`  _(also used by 1: bayes_test_optimality)_
  ★ `neyman_pearson_optimality` — theorem · `Statlib/Testing/neyman_pearson_optimality.lean:19`
★ `karlin_rubin` — theorem · `Statlib/Testing/karlin_rubin.lean:30` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["▣ TestFunction"]
  n2["◆ PowerFunction"]
  n3["◆ Size"]
  n4["◆ HasLevel"]
  n5["◆ IsUMP"]
  n6["★ np_integrand_nonneg"]
  n7["★ np_integral_nonneg"]
  n8["★ neyman_pearson_optimality"]
  n9["★ karlin_rubin"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n4
  n5 --> n2
  n7 --> n6
  n8 --> n7
  n9 --> n0
  n9 --> n1
  n9 --> n4
  n9 --> n2
  n9 --> n5
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
