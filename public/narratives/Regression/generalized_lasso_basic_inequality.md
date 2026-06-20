# Proof narrative — generalized_lasso_basic_inequality

Root: **generalized_lasso_basic_inequality** (theorem) `Statlib/Regression/generalized_lasso_basic_inequality.lean:16` · topic `Regression`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `dPenalty` — def · `Statlib/Regression/dPenalty.lean:10`  _(also used by 3: dPenalty_identity_eq_l1Norm, dPenalty_nonneg, generalizedLassoLoss_nonneg)_
  ◆ `generalizedLassoLoss` — noncomputable def · `Statlib/Regression/generalizedLassoLoss.lean:12`  _(also used by 1: generalizedLassoLoss_nonneg)_
  ◆ `IsGeneralizedLassoEstimator` — def · `Statlib/Regression/IsGeneralizedLassoEstimator.lean:10`
★ `generalized_lasso_basic_inequality` — theorem · `Statlib/Regression/generalized_lasso_basic_inequality.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ dPenalty"]
  n1["◆ generalizedLassoLoss"]
  n2["◆ IsGeneralizedLassoEstimator"]
  n3["★ generalized_lasso_basic_inequality"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
