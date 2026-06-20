# Proof narrative — sparseLogisticLoss_nonneg

Root: **sparseLogisticLoss_nonneg** (lemma) `Statlib/Regression/sparseLogisticLoss_nonneg.lean:16` · topic `Regression`
Closure: 10 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `softplus` — noncomputable def · `Statlib/Regression/softplus.lean:14`
  ◆ `logisticLoss` — noncomputable def · `Statlib/Regression/logisticLoss.lean:15`
  ◆ `l1Norm` — def · `Statlib/Regression/l1Norm.lean:15`  _(also used by 23: IsDantzigSelector, IsDantzigSelector.l1_le_truth, IsSqrtLassoEstimator.l1_diff_bound, …)_
  ◆ `sparseLogisticLoss` — noncomputable def · `Statlib/Regression/sparseLogisticLoss.lean:14`  _(also used by 1: IsSparseLogisticEstimator)_
    · `softplus_ge_id` — lemma · `Statlib/Regression/softplus_ge_id.lean:12`
      · `softplus_pos` — lemma · `Statlib/Regression/softplus_pos.lean:11`
    · `softplus_nonneg` — lemma · `Statlib/Regression/softplus_nonneg.lean:12`
  · `logistic_pointwise_nonneg` — lemma · `Statlib/Regression/logistic_pointwise_nonneg.lean:15`
  · `l1Norm_nonneg` — lemma · `Statlib/Regression/l1Norm_nonneg.lean:13`  _(also used by 6: elasticNetLoss_nonneg, fusedLassoLoss_nonneg, lasso_l2_error_on_support, …)_
· `sparseLogisticLoss_nonneg` — lemma · `Statlib/Regression/sparseLogisticLoss_nonneg.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ softplus"]
  n1["◆ logisticLoss"]
  n2["◆ l1Norm"]
  n3["◆ sparseLogisticLoss"]
  n4["· softplus_ge_id"]
  n5["· softplus_pos"]
  n6["· softplus_nonneg"]
  n7["· logistic_pointwise_nonneg"]
  n8["· l1Norm_nonneg"]
  n9["· sparseLogisticLoss_nonneg"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n6 --> n0
  n6 --> n5
  n7 --> n0
  n7 --> n4
  n7 --> n6
  n8 --> n2
  n9 --> n3
  n9 --> n1
  n9 --> n0
  n9 --> n7
  n9 --> n2
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
