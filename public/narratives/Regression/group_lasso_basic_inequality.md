# Proof narrative — group_lasso_basic_inequality

Root: **group_lasso_basic_inequality** (theorem) `Statlib/Regression/group_lasso_basic_inequality.lean:24` · topic `Regression`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

          ◆ `restrictedL2Sq` — def · `Statlib/Regression/restrictedL2Sq.lean:10`
        ◆ `restrictedL2Norm` — noncomputable def · `Statlib/Regression/restrictedL2Norm.lean:9`
  ◆ `groupL21Norm` — noncomputable def · `Statlib/Regression/groupL21Norm.lean:11`  _(also used by 1: groupL21Norm_nonneg)_
  ◆ `groupLassoLoss` — noncomputable def · `Statlib/Regression/groupLassoLoss.lean:12`  _(also used by 1: IsGroupLassoEstimator.loss_le)_
  ◆ `IsGroupLassoEstimator` — def · `Statlib/Regression/IsGroupLassoEstimator.lean:10`  _(also used by 1: IsGroupLassoEstimator.loss_le)_
★ `group_lasso_basic_inequality` — theorem · `Statlib/Regression/group_lasso_basic_inequality.lean:24` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ restrictedL2Sq"]
  n1["◆ restrictedL2Norm"]
  n2["◆ groupL21Norm"]
  n3["◆ groupLassoLoss"]
  n4["◆ IsGroupLassoEstimator"]
  n5["★ group_lasso_basic_inequality"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  n5 --> n4
  n5 --> n2
  n5 --> n3
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
