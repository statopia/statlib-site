# Proof narrative — ump_implies_umpu

Root: **ump_implies_umpu** (theorem) `Statlib/HypothesisTesting/UMPU/Basic.lean:22` · topic `HypothesisTesting`
Closure: 9 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/HypothesisTesting/Vocabulary.lean:39`  _(also used by 17: power_add_typeII_eq_one, integrable_test_density, thresholdTest, …)_
    ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Vocabulary/ParametricFamily.lean:22`  _(also used by 5: typeIError, typeIIError, IsSimilarTest, …)_
  ◆ `power` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:85`  _(also used by 13: power_add_typeII_eq_one, karlin_rubin, karlin_rubin_power_monotone, …)_
  ◆ `size` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:106`  _(also used by 5: karlin_rubin, neyman_pearson_complete, pvalue_threshold_test_has_level, …)_
  ◆ `HasLevel` — def · `Statlib/HypothesisTesting/Vocabulary.lean:114`  _(also used by 4: karlin_rubin, pvalue_threshold_test_has_level, unbiased_has_level, …)_
  ◆ `IsUMP` — def · `Statlib/HypothesisTesting/Vocabulary.lean:131`  _(also used by 1: karlin_rubin)_
  ◆ `IsUnbiasedTest` — def · `Statlib/HypothesisTesting/Vocabulary.lean:143`  _(also used by 3: unbiased_has_level, umpu_implies_unbiased, umpu_implies_similar_on_overlap)_
  ◆ `IsUMPU` — def · `Statlib/HypothesisTesting/Vocabulary.lean:158`  _(also used by 1: umpu_implies_unbiased)_
★ `ump_implies_umpu` — theorem · `Statlib/HypothesisTesting/UMPU/Basic.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["▣ ParametricFamily"]
  n2["◆ power"]
  n3["◆ size"]
  n4["◆ HasLevel"]
  n5["◆ IsUMP"]
  n6["◆ IsUnbiasedTest"]
  n7["◆ IsUMPU"]
  n8["★ ump_implies_umpu"]
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
  n6 --> n4
  n6 --> n2
  n7 --> n1
  n7 --> n0
  n7 --> n6
  n7 --> n2
  n8 --> n0
  n8 --> n5
  n8 --> n7
  n8 --> n2
  n8 --> n3
  n8 --> n4
  n8 --> n6
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
