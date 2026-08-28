# Proof narrative — leftSingularVectors

Root: **leftSingularVectors** (noncomputable def) `Statlib/HighDim/Vocabulary/SVD.lean:134` · topic `HighDim`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `rightSingularVectors` — noncomputable def · `Statlib/HighDim/Vocabulary/SVD.lean:122`
  ◆ `singularValues` — noncomputable def · `Statlib/HighDim/Vocabulary/SVD.lean:108`  _(also used by 2: svd_sorted_exists, nuclearNorm)_
◆ `leftSingularVectors` — noncomputable def · `Statlib/HighDim/Vocabulary/SVD.lean:134` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ rightSingularVectors"]
  n1["◆ singularValues"]
  n2["◆ leftSingularVectors"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
