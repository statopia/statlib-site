# Proof narrative — hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate

Root: **hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:40` · topic `Nonparametric`
Closure: 11 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:19`  _(also used by 10: tensorProductSplineSieve_seriesFunction_measurable, tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series, tensorProductSplineSieve_holderSmoothBall_error_bound_of_pointwise_approx, …)_
      ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
      ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 16: holder_net_approx_sup_bound, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
      ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:69`
      ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:56`  _(also used by 9: holderBall_classApproximationError_self_le_zero, holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_selectorIndicatorSieve_for_holderBall_of_finite_net, …)_
    ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:82`  _(also used by 14: tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series, tensorProductSplineSieve_holderSmoothBall_error_bound_of_pointwise_approx, tensorProductSplineSieve_holderSmoothBall_error_bound_of_resolution_rate, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 38: holder_selectorIndicator_series_pointwise_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
    ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:29`  _(also used by 10: tensorProductSplineSieve_seriesFunction_measurable, tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series, tensorProductSplineSieve_holderSmoothBall_error_bound_of_pointwise_approx, …)_
  ◆ `HasTensorProductSplineHolderSmoothProjectionRate` — def · `Statlib/Nonparametric/Approximation/Spline.lean:31`
  ◆ `HasTensorProductSplineHolderSmoothPointwiseRate` — def · `Statlib/Nonparametric/Approximation/Spline.lean:17`  _(also used by 3: tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate, tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_basisCount_rate, tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_exact_basisCount)_
★ `hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:40` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TensorProductSplineSystem"]
  n1["◆ FunctionClass"]
  n2["◆ IsHolderFunction"]
  n3["◆ IsHolderSmoothFunction"]
  n4["◆ holderBall"]
  n5["◆ holderSmoothBall"]
  n6["◆ seriesFunction"]
  n7["◆ tensorProductSplineSieve"]
  n8["◆ HasTensorProductSplineHolderSmoothProjectionRate"]
  n9["◆ HasTensorProductSplineHolderSmoothPointwiseRate"]
  n10["★ hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate"]
  n3 --> n2
  n4 --> n1
  n4 --> n2
  n5 --> n1
  n5 --> n3
  n5 --> n2
  n5 --> n4
  n7 --> n0
  n8 --> n0
  n8 --> n5
  n8 --> n6
  n8 --> n7
  n9 --> n0
  n9 --> n5
  n9 --> n6
  n9 --> n7
  n10 --> n0
  n10 --> n8
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
