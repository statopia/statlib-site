# Proof narrative — IsGlassoEstimator.posDef

Root: **IsGlassoEstimator.posDef** (lemma) `Statlib/HDStats/IsGlassoEstimator_posDef.lean:12` · topic `HDStats`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `offDiagL1Norm` — def · `Statlib/HDStats/offDiagL1Norm.lean:13`  _(also used by 3: glassoConvexPart_penalty_nonneg, offDiagL1Norm_diagonal, offDiagL1Norm_nonneg)_
    ◆ `glassoConvexPart` — noncomputable def · `Statlib/HDStats/glassoConvexPart.lean:19`  _(also used by 1: IsGlassoEstimator.le)_
  ◆ `IsGlassoEstimator` — def · `Statlib/HDStats/IsGlassoEstimator.lean:17`  _(also used by 1: IsGlassoEstimator.le)_
· `IsGlassoEstimator.posDef` — lemma · `Statlib/HDStats/IsGlassoEstimator_posDef.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ offDiagL1Norm"]
  n1["◆ glassoConvexPart"]
  n2["◆ IsGlassoEstimator"]
  n3["· IsGlassoEstimator.posDef"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
