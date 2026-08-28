# Proof narrative — neyman_pearson_complete

Root: **neyman_pearson_complete** (theorem) `Statlib/HypothesisTesting/NeymanPearson/Complete.lean:22` · topic `HypothesisTesting`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/HypothesisTesting/Vocabulary.lean:39`  _(also used by 20: power_add_typeII_eq_one, integrable_test_density, thresholdTest, …)_
  ◆ `NP_test` — noncomputable def · `Statlib/HypothesisTesting/NeymanPearson/Existence.lean:11`
    ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Vocabulary/ParametricFamily.lean:22`  _(also used by 9: typeIError, typeIIError, HasLevel, …)_
  ◆ `power` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:85`  _(also used by 16: power_add_typeII_eq_one, karlin_rubin, karlin_rubin_power_monotone, …)_
  ◆ `size` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:106`  _(also used by 6: karlin_rubin, pvalue_threshold_test_has_level, ump_implies_umpu, …)_
  ★ `exists_np_critical_value` — theorem · `Statlib/HypothesisTesting/NeymanPearson/Existence.lean:20`
  ★ `neyman_pearson_optimality` — theorem · `Statlib/HypothesisTesting/NeymanPearson/Optimality.lean:20`
★ `neyman_pearson_complete` — theorem · `Statlib/HypothesisTesting/NeymanPearson/Complete.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["◆ NP_test"]
  n2["▣ ParametricFamily"]
  n3["◆ power"]
  n4["◆ size"]
  n5["★ exists_np_critical_value"]
  n6["★ neyman_pearson_optimality"]
  n7["★ neyman_pearson_complete"]
  n3 --> n2
  n3 --> n0
  n4 --> n2
  n4 --> n0
  n4 --> n3
  n5 --> n1
  n6 --> n0
  n7 --> n0
  n7 --> n1
  n7 --> n4
  n7 --> n3
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
