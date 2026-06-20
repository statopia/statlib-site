# Proof narrative — stableSet_card_le

Root: **stableSet_card_le** (lemma) `Statlib/MultipleTesting/stableSet_card_le.lean:12` · topic `MultipleTesting`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsSelectionProbability` — def · `Statlib/MultipleTesting/IsSelectionProbability.lean:10`  _(also used by 2: le_one, stableSet_empty_of_threshold_gt_one)_
  ◆ `stableSet` — noncomputable def · `Statlib/MultipleTesting/stableSet.lean:8`  _(also used by 2: stableSet_empty_of_threshold_gt_one, stableSet_mono)_
  · `nonneg` — lemma · `Statlib/MultipleTesting/nonneg.lean:9`
· `stableSet_card_le` — lemma · `Statlib/MultipleTesting/stableSet_card_le.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSelectionProbability"]
  n1["◆ stableSet"]
  n2["· nonneg"]
  n3["· stableSet_card_le"]
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
