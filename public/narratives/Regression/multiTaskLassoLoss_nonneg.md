# Proof narrative — multiTaskLassoLoss_nonneg

Root: **multiTaskLassoLoss_nonneg** (lemma) `Statlib/Regression/multiTaskLassoLoss_nonneg.lean:12` · topic `Regression`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `rowL2Norm` — noncomputable def · `Statlib/Regression/rowL2Norm.lean:8`
  ◆ `rowL21Norm` — noncomputable def · `Statlib/Regression/rowL21Norm.lean:9`
  ◆ `multiTaskLassoLoss` — noncomputable def · `Statlib/Regression/multiTaskLassoLoss.lean:10`  _(also used by 1: IsMultiTaskLassoEstimator)_
    · `rowL2Norm_nonneg` — lemma · `Statlib/Regression/rowL2Norm_nonneg.lean:8`
  · `rowL21Norm_nonneg` — lemma · `Statlib/Regression/rowL21Norm_nonneg.lean:9`
· `multiTaskLassoLoss_nonneg` — lemma · `Statlib/Regression/multiTaskLassoLoss_nonneg.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ rowL2Norm"]
  n1["◆ rowL21Norm"]
  n2["◆ multiTaskLassoLoss"]
  n3["· rowL2Norm_nonneg"]
  n4["· rowL21Norm_nonneg"]
  n5["· multiTaskLassoLoss_nonneg"]
  n1 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n1
  n4 --> n3
  n5 --> n2
  n5 --> n1
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
