# Proof narrative — lasso_l1_error

Root: **lasso_l1_error** (theorem) `Statlib/Regression/lasso_l1_error.lean:14` · topic `Regression`
Closure: 12 declarations across 11 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l1Norm` — def · `Statlib/Regression/l1Norm.lean:15`  _(also used by 19: IsDantzigSelector, IsDantzigSelector.l1_le_truth, IsSqrtLassoEstimator.l1_diff_bound, …)_
    ◆ `lassoLoss` — noncomputable def · `Statlib/Regression/lassoLoss.lean:16`  _(also used by 3: IsAdaptiveLassoEstimator.isLassoEstimator_of_w_one, elasticNetLoss_eq_lasso_of_lam2_zero, fusedLassoLoss_eq_lasso_of_lam2_zero)_
  ◆ `IsLassoEstimator` — def · `Statlib/Regression/IsLassoEstimator.lean:15`  _(also used by 3: IsAdaptiveLassoEstimator.isLassoEstimator_of_w_one, lasso_l2_error_on_support, lasso_prediction_error)_
    ◆ `support` — noncomputable def · `Statlib/HDStats/Basic.lean:51`  _(also used by 3: isSparse_iff_card_support, support_smul_subset, lasso_l2_error_on_support)_
  ◆ `IsSparse` — def · `Statlib/HDStats/Basic.lean:56`  _(also used by 13: IsBestSSparseApprox, IsBestSSparseApprox_self_of_sparse, IsIhtStep.isSparse, …)_
  ◆ `RestrictedEigenvalue` — def · `Statlib/Regression/RestrictedEigenvalue.lean:18`  _(also used by 3: lasso_l2_error_on_support, lasso_prediction_error, sqrt_lasso_oracle_bound)_
    ★ `lasso_basic_inequality` — theorem · `Statlib/Regression/lasso_basic_inequality.lean:31`
    · `l1Norm_split` — lemma · `Statlib/Regression/l1Norm_split.lean:14`
    ★ `lasso_cone_constraint` — theorem · `Statlib/Regression/lasso_cone_constraint.lean:41`  _(also used by 1: lasso_l2_error_on_support)_
    · `l1Norm_nonneg` — lemma · `Statlib/Regression/l1Norm_nonneg.lean:13`  _(also used by 6: elasticNetLoss_nonneg, fusedLassoLoss_nonneg, lasso_l2_error_on_support, …)_
  ★ `lasso_slow_rate` — theorem · `Statlib/Regression/lasso_slow_rate.lean:23`  _(also used by 2: lasso_l2_error_on_support, lasso_prediction_error)_
★ `lasso_l1_error` — theorem · `Statlib/Regression/lasso_l1_error.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l1Norm"]
  n1["◆ lassoLoss"]
  n2["◆ IsLassoEstimator"]
  n3["◆ support"]
  n4["◆ IsSparse"]
  n5["◆ RestrictedEigenvalue"]
  n6["★ lasso_basic_inequality"]
  n7["· l1Norm_split"]
  n8["★ lasso_cone_constraint"]
  n9["· l1Norm_nonneg"]
  n10["★ lasso_slow_rate"]
  n11["★ lasso_l1_error"]
  n1 --> n0
  n2 --> n1
  n4 --> n3
  n6 --> n2
  n6 --> n0
  n6 --> n1
  n7 --> n0
  n8 --> n2
  n8 --> n6
  n8 --> n0
  n8 --> n7
  n9 --> n0
  n10 --> n2
  n10 --> n4
  n10 --> n5
  n10 --> n0
  n10 --> n3
  n10 --> n8
  n10 --> n7
  n10 --> n6
  n10 --> n9
  n11 --> n2
  n11 --> n4
  n11 --> n5
  n11 --> n0
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
