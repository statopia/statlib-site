# Proof narrative — karlin_rubin_power_monotone

Root: **karlin_rubin_power_monotone** (theorem) `Statlib/HypothesisTesting/MLR/KarlinRubin.lean:1096` · topic `HypothesisTesting`
Closure: 7 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `SubParam` — abbrev · `Statlib/HypothesisTesting/MLR/KarlinRubin.lean:13`  _(also used by 2: karlin_rubin, mlr_stochastic_order)_
  ◆ `HasMonotoneLR` — def · `Statlib/HypothesisTesting/Vocabulary.lean:257`  _(also used by 3: karlin_rubin, mlr_stochastic_order, mlr_anchor_nonstrict)_
    ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Vocabulary/ParametricFamily.lean:22`  _(also used by 10: typeIError, typeIIError, size, …)_
    ▣ `TestFunction` — structure · `Statlib/HypothesisTesting/Vocabulary.lean:39`  _(also used by 23: power_add_typeII_eq_one, integrable_test_density, karlin_rubin, …)_
  ◆ `power` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:85`  _(also used by 17: power_add_typeII_eq_one, karlin_rubin, neyman_pearson_complete, …)_
  ◆ `thresholdTest` — noncomputable def · `Statlib/HypothesisTesting/MLR/KarlinRubin.lean:18`  _(also used by 1: karlin_rubin)_
★ `karlin_rubin_power_monotone` — theorem · `Statlib/HypothesisTesting/MLR/KarlinRubin.lean:1096` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ SubParam"]
  n1["◆ HasMonotoneLR"]
  n2["▣ ParametricFamily"]
  n3["▣ TestFunction"]
  n4["◆ power"]
  n5["◆ thresholdTest"]
  n6["★ karlin_rubin_power_monotone"]
  n4 --> n2
  n4 --> n3
  n5 --> n3
  n6 --> n0
  n6 --> n1
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
