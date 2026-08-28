# Proof narrative — tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate

Root: **tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:1130` · topic `Nonparametric`
Closure: 34 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:21`  _(also used by 8: tensor_product_spline_sieve_holder_smooth_approximation_bound_of_approximation_sieve, tensorProductSplineSystemOfBasis, tensorProductLinearBSplineSystem, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 66: holderSmoothBall_taylor_remainder_bound_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 55: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:158`  _(also used by 40: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, …)_
  ▣ `TensorProductSplineProjectionCertificate` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:306`  _(also used by 1: tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_certificate)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 49: selector_indicator_holder_sieve_approximation_error_le_of_net, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
    ◆ `HasTensorProductSplineHolderSmoothProjectionRate` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:250`  _(also used by 7: tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_rate, tensor_product_linear_bspline_holder_projection_rate_of_local_partition, tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate, …)_
      ◆ `HasTensorProductSplineHolderSmoothPointwiseRate` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:236`  _(also used by 1: tensor_product_extended_bspline_holder_smooth_approximation_rate_of_projection)_
            ★ `series_function_measurable_of_basis_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:156`  _(also used by 1: wavelet_sieve_series_function_measurable_of_system)_
            ★ `tensorProductSplineSieve_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1216`
            ★ `tensorProductSplineSieve_measurable` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1221`
            ★ `tensor_product_spline_sieve_series_function_measurable` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:14`  _(also used by 2: unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
            ★ `sieve_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:165`
            ★ `sieve_approximation_error_le_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:306`  _(also used by 3: selector_indicator_holder_sieve_approximation_error_le_of_net, unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
            ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
            ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 79: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
            ★ `sieve_approximation_error_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:179`  _(also used by 2: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_le_of_exists_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:327`
            ★ `uniform_sieve_approximation_error_bound_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:343`  _(also used by 3: selector_indicator_uniform_sieve_holder_approximation_bound, exists_uniform_sieve_approximation_error_bound_of_pointwise_series_approximation, wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series)_
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:918`
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:937`
          ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:967`
        ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:991`
      ★ `tensor_product_spline_sieve_holder_smooth_approximation_basis_count_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1008`  _(also used by 1: tensor_product_extended_bspline_holder_smooth_approximation_rate_of_projection)_
    ★ `tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1033`
  ★ `tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1104`  _(also used by 1: tensor_product_spline_sieve_holder_smooth_approximation_bound_of_approximation_sieve)_
★ `tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1130` **← headline**

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
  n8["▣ TensorProductSplineProjectionCertificate"]
  n9["◆ integratedSquaredError"]
  n10["◆ sieveApproximationError"]
  n11["◆ HasTensorProductSplineHolderSmoothProjectionRate"]
  n12["◆ HasTensorProductSplineHolderSmoothPointwiseRate"]
  n13["★ series_function_measurable_of_basis_measurable"]
  n14["★ tensorProductSplineSieve_continuous"]
  n15["★ tensorProductSplineSieve_measurable"]
  n16["★ tensor_product_spline_sieve_series_function_measurable"]
  n17["★ integratedSquaredError_le_of_pointwise_bound"]
  n18["★ sieve_approximation_error_le_of_coefficients"]
  n19["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n20["◆ bias"]
  n21["▣ DenseLayer"]
  n22["◆ apply"]
  n23["★ sieve_approximation_error_range_bddBelow"]
  n24["★ sieve_approximation_error_le_of_exists_pointwise_series_approximation"]
  n25["★ uniform_sieve_approximation_error_bound_of_pointwise_series_approximation"]
  n26["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series"]
  n27["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation"]
  n28["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate"]
  n29["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_rate"]
  n30["★ tensor_product_spline_sieve_holder_smooth_approximation_basis_count_rate"]
  n31["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count"]
  n32["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate"]
  n33["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate"]
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
  n11 --> n0
  n11 --> n5
  n11 --> n6
  n11 --> n7
  n12 --> n0
  n12 --> n5
  n12 --> n6
  n12 --> n7
  n13 --> n6
  n14 --> n0
  n14 --> n7
  n15 --> n0
  n15 --> n7
  n15 --> n14
  n16 --> n0
  n16 --> n6
  n16 --> n7
  n16 --> n13
  n16 --> n15
  n17 --> n9
  n18 --> n9
  n18 --> n6
  n18 --> n10
  n19 --> n6
  n19 --> n9
  n19 --> n10
  n19 --> n17
  n19 --> n18
  n21 --> n20
  n22 --> n21
  n22 --> n20
  n23 --> n9
  n23 --> n6
  n23 --> n22
  n24 --> n6
  n24 --> n10
  n24 --> n19
  n24 --> n23
  n25 --> n6
  n25 --> n10
  n25 --> n24
  n26 --> n0
  n26 --> n5
  n26 --> n6
  n26 --> n7
  n26 --> n10
  n26 --> n25
  n27 --> n0
  n27 --> n5
  n27 --> n6
  n27 --> n7
  n27 --> n10
  n27 --> n16
  n27 --> n26
  n28 --> n0
  n28 --> n5
  n28 --> n6
  n28 --> n7
  n28 --> n10
  n28 --> n27
  n29 --> n0
  n29 --> n5
  n29 --> n12
  n29 --> n10
  n29 --> n7
  n29 --> n28
  n30 --> n0
  n30 --> n5
  n30 --> n12
  n30 --> n10
  n30 --> n7
  n30 --> n29
  n31 --> n0
  n31 --> n5
  n31 --> n12
  n31 --> n10
  n31 --> n7
  n31 --> n30
  n32 --> n0
  n32 --> n5
  n32 --> n11
  n32 --> n10
  n32 --> n7
  n32 --> n31
  n33 --> n0
  n33 --> n5
  n33 --> n8
  n33 --> n10
  n33 --> n7
  n33 --> n32
  class n33 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
