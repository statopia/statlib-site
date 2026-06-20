# Proof narrative — sliceProportion_le_one

Root: **sliceProportion_le_one** (lemma) `Statlib/HDStats/sliceProportion_le_one.lean:10` · topic `HDStats`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `sliceCount` — noncomputable def · `Statlib/HDStats/sliceCount.lean:9`  _(also used by 1: sliceMean_of_empty)_
  ◆ `sliceProportion` — noncomputable def · `Statlib/HDStats/sliceProportion.lean:9`  _(also used by 1: sliceProportion_nonneg)_
  · `sliceCount_le_n` — lemma · `Statlib/HDStats/sliceCount_le_n.lean:8`
· `sliceProportion_le_one` — lemma · `Statlib/HDStats/sliceProportion_le_one.lean:10` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sliceCount"]
  n1["◆ sliceProportion"]
  n2["· sliceCount_le_n"]
  n3["· sliceProportion_le_one"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
