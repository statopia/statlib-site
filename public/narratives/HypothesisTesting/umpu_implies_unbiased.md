# Proof narrative — umpu_implies_unbiased

Root: **umpu_implies_unbiased** (lemma) `Statlib/HypothesisTesting/UMPU/Basic.lean:135` · topic `HypothesisTesting`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/HypothesisTesting/Vocabulary.lean:39`  _(also used by 18: power_add_typeII_eq_one, integrable_test_density, thresholdTest, …)_
    ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Vocabulary/ParametricFamily.lean:22`  _(also used by 6: typeIError, typeIIError, IsUMP, …)_
    ◆ `power` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:85`  _(also used by 15: power_add_typeII_eq_one, karlin_rubin, karlin_rubin_power_monotone, …)_
        ◆ `size` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:106`  _(also used by 6: karlin_rubin, neyman_pearson_complete, pvalue_threshold_test_has_level, …)_
      ◆ `HasLevel` — def · `Statlib/HypothesisTesting/Vocabulary.lean:114`  _(also used by 6: karlin_rubin, pvalue_threshold_test_has_level, ump_implies_umpu, …)_
  ◆ `IsUnbiasedTest` — def · `Statlib/HypothesisTesting/Vocabulary.lean:143`  _(also used by 3: ump_implies_umpu, unbiased_has_level, umpu_implies_similar_on_overlap)_
  ◆ `IsUMPU` — def · `Statlib/HypothesisTesting/Vocabulary.lean:158`  _(also used by 1: ump_implies_umpu)_
· `umpu_implies_unbiased` — lemma · `Statlib/HypothesisTesting/UMPU/Basic.lean:135` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["▣ ParametricFamily"]
  n2["◆ power"]
  n3["◆ size"]
  n4["◆ HasLevel"]
  n5["◆ IsUnbiasedTest"]
  n6["◆ IsUMPU"]
  n7["· umpu_implies_unbiased"]
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
  n7 --> n6
  n7 --> n5
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
