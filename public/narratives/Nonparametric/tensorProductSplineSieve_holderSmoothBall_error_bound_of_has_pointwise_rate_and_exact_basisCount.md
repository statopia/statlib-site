# Proof narrative — tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_exact_basisCount

Root: **tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_exact_basisCount** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:176` · topic `Nonparametric`
Closure: 30 declarations across 9 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:19`  _(also used by 3: HasTensorProductSplineHolderSmoothProjectionRate, hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate, tensorProductSplineClass)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 16: holder_net_approx_sup_bound, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:69`
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:56`  _(also used by 9: holderBall_classApproximationError_self_le_zero, holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_selectorIndicatorSieve_for_holderBall_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:82`  _(also used by 9: HasTensorProductSplineHolderSmoothProjectionRate, HasWaveletHolderSmoothPointwiseRate, HasWaveletHolderSmoothProjectionRate, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 28: holder_selectorIndicator_series_pointwise_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:29`  _(also used by 2: HasTensorProductSplineHolderSmoothProjectionRate, tensorProductSplineClass)_
  ◆ `HasTensorProductSplineHolderSmoothPointwiseRate` — def · `Statlib/Nonparametric/Approximation/Spline.lean:17`  _(also used by 1: hasTensorProductSplineHolderSmoothPointwiseRate_of_projectionRate)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 17: sieveApproximationError_le_of_holder_selector_net, holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_selectorIndicatorSieve_for_holderBall_of_finite_net, …)_
            ★ `seriesFunction_measurable_of_basis_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:98`  _(also used by 1: waveletSieve_seriesFunction_measurable_of_system)_
            ★ `tensorProductSplineSieve_continuous` — theorem · `Statlib/Nonparametric/Vocabulary/Spline.lean:40`
            ★ `tensorProductSplineSieve_measurable` — theorem · `Statlib/Nonparametric/Vocabulary/Spline.lean:45`
          ★ `tensorProductSplineSieve_seriesFunction_measurable` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:50`
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, holder_selectorIndicator_series_integratedSquaredError_bound, …)_
            ★ `sieveApproximationError_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:107`
            ★ `sieveApproximationError_le_of_pointwise_series_bound` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:248`  _(also used by 1: sieveApproximationError_le_of_holder_selector_net)_
            ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
            ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 2: reluApply, OneHiddenReLUNet)_
            ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
            ★ `sieveApproximationError_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:121`
            ★ `sieveApproximationError_le_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:269`
            ★ `sieveApproximationError_uniform_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:285`  _(also used by 3: holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_sieveApproximationError_uniform_bound_of_exists_pointwise_series, waveletSieve_holderSmoothBall_error_bound_of_exists_pointwise_series)_
          ★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:61`
        ★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_pointwise_approx` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:80`
      ★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_resolution_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:110`
    ★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:134`
  ★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_basisCount_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:151`
★ `tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_exact_basisCount` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:176` **← headline**

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
  n8["◆ HasTensorProductSplineHolderSmoothPointwiseRate"]
  n9["◆ integratedSquaredError"]
  n10["◆ sieveApproximationError"]
  n11["★ seriesFunction_measurable_of_basis_measurable"]
  n12["★ tensorProductSplineSieve_continuous"]
  n13["★ tensorProductSplineSieve_measurable"]
  n14["★ tensorProductSplineSieve_seriesFunction_measurable"]
  n15["★ integratedSquaredError_le_of_pointwise_bound"]
  n16["★ sieveApproximationError_le_of_coefficients"]
  n17["★ sieveApproximationError_le_of_pointwise_series_bound"]
  n18["◆ bias"]
  n19["▣ DenseLayer"]
  n20["◆ apply"]
  n21["★ sieveApproximationError_range_bddBelow"]
  n22["★ sieveApproximationError_le_of_exists_pointwise_series"]
  n23["★ sieveApproximationError_uniform_bound_of_exists_pointwise_series"]
  n24["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series"]
  n25["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_pointwise_approx"]
  n26["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_resolution_rate"]
  n27["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate"]
  n28["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_basisCount_rate"]
  n29["★ tensorProductSplineSieve_holderSmoothBall_error_bound_of_has_pointwise_rate_and_exact_basisCount"]
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
  n10 --> n9
  n10 --> n6
  n11 --> n6
  n12 --> n0
  n12 --> n7
  n13 --> n0
  n13 --> n7
  n13 --> n12
  n14 --> n0
  n14 --> n6
  n14 --> n7
  n14 --> n11
  n14 --> n13
  n15 --> n9
  n16 --> n9
  n16 --> n6
  n16 --> n10
  n17 --> n6
  n17 --> n9
  n17 --> n10
  n17 --> n15
  n17 --> n16
  n19 --> n18
  n20 --> n19
  n20 --> n18
  n21 --> n9
  n21 --> n6
  n21 --> n20
  n22 --> n6
  n22 --> n10
  n22 --> n17
  n22 --> n21
  n23 --> n6
  n23 --> n10
  n23 --> n22
  n24 --> n0
  n24 --> n5
  n24 --> n6
  n24 --> n7
  n24 --> n10
  n24 --> n23
  n25 --> n0
  n25 --> n5
  n25 --> n6
  n25 --> n7
  n25 --> n10
  n25 --> n14
  n25 --> n24
  n26 --> n0
  n26 --> n5
  n26 --> n6
  n26 --> n7
  n26 --> n10
  n26 --> n25
  n27 --> n0
  n27 --> n5
  n27 --> n8
  n27 --> n10
  n27 --> n7
  n27 --> n26
  n28 --> n0
  n28 --> n5
  n28 --> n8
  n28 --> n10
  n28 --> n7
  n28 --> n27
  n29 --> n0
  n29 --> n5
  n29 --> n8
  n29 --> n10
  n29 --> n7
  n29 --> n28
  class n29 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
