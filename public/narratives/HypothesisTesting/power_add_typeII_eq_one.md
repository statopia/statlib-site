# Proof narrative — power_add_typeII_eq_one

Root: **power_add_typeII_eq_one** (lemma) `Statlib/HypothesisTesting/Bridge.lean:29` · topic `HypothesisTesting`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TestFunction` — structure · `Statlib/HypothesisTesting/Vocabulary.lean:39`  _(also used by 21: integrable_test_density, thresholdTest, karlin_rubin, …)_
    ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Vocabulary/ParametricFamily.lean:22`  _(also used by 9: typeIError, size, HasLevel, …)_
  ◆ `power` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:85`  _(also used by 16: karlin_rubin, karlin_rubin_power_monotone, neyman_pearson_complete, …)_
  ◆ `typeIIError` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:95`
· `power_add_typeII_eq_one` — lemma · `Statlib/HypothesisTesting/Bridge.lean:29` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TestFunction"]
  n1["▣ ParametricFamily"]
  n2["◆ power"]
  n3["◆ typeIIError"]
  n4["· power_add_typeII_eq_one"]
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
