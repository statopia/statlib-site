# Proof narrative — slopeLoss_nonneg

Root: **slopeLoss_nonneg** (lemma) `Statlib/Regression/slopeLoss_nonneg.lean:21` · topic `Regression`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `slopePenalty` — noncomputable def · `Statlib/Regression/slopePenalty.lean:18`
  ◆ `slopeLoss` — noncomputable def · `Statlib/Regression/slopeLoss.lean:15`  _(also used by 2: IsSlopeEstimator, IsSlopeEstimator.loss_le_zero)_
    · `slopePenalty_bddAbove` — lemma · `Statlib/Regression/slopePenalty_bddAbove.lean:15`
  · `slopePenalty_nonneg` — lemma · `Statlib/Regression/slopePenalty_nonneg.lean:17`
· `slopeLoss_nonneg` — lemma · `Statlib/Regression/slopeLoss_nonneg.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ slopePenalty"]
  n1["◆ slopeLoss"]
  n2["· slopePenalty_bddAbove"]
  n3["· slopePenalty_nonneg"]
  n4["· slopeLoss_nonneg"]
  n1 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
