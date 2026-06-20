# Proof narrative — IsSparseLogisticEstimator

Root: **IsSparseLogisticEstimator** (def) `Statlib/Regression/IsSparseLogisticEstimator.lean:13` · topic `Regression`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `softplus` — noncomputable def · `Statlib/Regression/softplus.lean:14`  _(also used by 5: logistic_pointwise_nonneg, softplus_ge_id, softplus_nonneg, …)_
    ◆ `logisticLoss` — noncomputable def · `Statlib/Regression/logisticLoss.lean:15`  _(also used by 1: sparseLogisticLoss_nonneg)_
    ◆ `l1Norm` — def · `Statlib/Regression/l1Norm.lean:15`  _(also used by 25: IsDantzigSelector, IsDantzigSelector.l1_le_truth, IsSqrtLassoEstimator.l1_diff_bound, …)_
  ◆ `sparseLogisticLoss` — noncomputable def · `Statlib/Regression/sparseLogisticLoss.lean:14`  _(also used by 1: sparseLogisticLoss_nonneg)_
◆ `IsSparseLogisticEstimator` — def · `Statlib/Regression/IsSparseLogisticEstimator.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ softplus"]
  n1["◆ logisticLoss"]
  n2["◆ l1Norm"]
  n3["◆ sparseLogisticLoss"]
  n4["◆ IsSparseLogisticEstimator"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
