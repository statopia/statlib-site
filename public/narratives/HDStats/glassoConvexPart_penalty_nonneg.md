# Proof narrative — glassoConvexPart_penalty_nonneg

Root: **glassoConvexPart_penalty_nonneg** (lemma) `Statlib/HDStats/glassoConvexPart_penalty_nonneg.lean:14` · topic `HDStats`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `offDiagL1Norm` — def · `Statlib/HDStats/offDiagL1Norm.lean:13`  _(also used by 2: glassoConvexPart, offDiagL1Norm_diagonal)_
  · `offDiagL1Norm_nonneg` — lemma · `Statlib/HDStats/offDiagL1Norm_nonneg.lean:11`
· `glassoConvexPart_penalty_nonneg` — lemma · `Statlib/HDStats/glassoConvexPart_penalty_nonneg.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ offDiagL1Norm"]
  n1["· offDiagL1Norm_nonneg"]
  n2["· glassoConvexPart_penalty_nonneg"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
