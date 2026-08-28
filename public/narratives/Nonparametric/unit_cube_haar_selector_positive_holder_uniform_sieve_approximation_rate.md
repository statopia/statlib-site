# Proof narrative — unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate

Root: **unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate** (theorem) `Statlib/Nonparametric/Approximation/Wavelet.lean:802` · topic `Nonparametric`
Closure: 31 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `unitCubeDomain` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:52`  _(also used by 1: splineUnitCubeDomain)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 24: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 9: holder_ball_class_approximation_error_self_le_zero, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_measurable_cover, exists_selector_indicator_sieve_holder_approximation_bound, …)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 59: selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, selector_indicator_holder_sieve_approximation_error_le_of_net, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 51: selector_indicator_holder_sieve_approximation_error_le_of_net, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_measurable_cover, exists_selector_indicator_sieve_holder_approximation_bound, …)_
  ◆ `unitCubeHaarSelectorSieve` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:65`
          ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
          ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 77: kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, integratedSquaredError_nonneg, …)_
      ★ `unit_cube_grid_finite_measurable_cover` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:551`  _(also used by 1: unit_cube_selector_indicator_uniform_sieve_holder_approximation_grid_rate)_
    ★ `unit_cube_dyadic_grid_finite_measurable_cover_basis_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:691`
    ◆ `selectorIndicatorSieve` — def · `Statlib/Nonparametric/Approximation/Sieve.lean:459`  _(also used by 10: selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, selector_indicator_holder_sieve_approximation_error_le_of_net, …)_
      ★ `finite_measurable_cover_exists_measurable_selector` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:379`  _(also used by 1: exists_selector_indicator_sieve_holder_approximation_bound_of_finite_measurable_cover)_
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
            ★ `sieve_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:165`
            ★ `sieve_approximation_error_le_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:306`  _(also used by 3: selector_indicator_holder_sieve_approximation_error_le_of_net, unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:179`  _(also used by 2: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_le_of_exists_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:327`
            ★ `uniform_sieve_approximation_error_bound_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:343`  _(also used by 3: exists_uniform_sieve_approximation_error_bound_of_pointwise_series_approximation, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series, wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series)_
            ★ `selector_indicator_basis_series_function_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:463`
            ★ `selector_indicator_sieve_series_function_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:480`
            ★ `selector_indicator_sieve_series_function_eq` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:486`  _(also used by 4: selector_indicator_holder_class_approximation_error_le_of_net, selector_indicator_holder_sieve_approximation_error_le_of_net, selector_indicator_basis_series_function_eq, …)_
            ★ `selector_indicator_holder_series_pointwise_approximation_bound` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:116`  _(also used by 1: selector_indicator_holder_series_integrated_squared_error_bound)_
          ★ `selector_indicator_uniform_sieve_holder_approximation_bound` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:271`
        ★ `exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:299`  _(also used by 2: exists_selector_indicator_sieve_holder_approximation_bound_of_finite_measurable_cover, exists_selector_indicator_sieve_holder_approximation_bound)_
      ★ `exists_selector_indicator_sieve_uniform_holder_approximation_rate_of_cover` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:372`  _(also used by 1: selector_indicator_uniform_sieve_holder_approximation_rate_of_cover)_
    ★ `exists_selector_indicator_sieve_uniform_holder_approximation_rate_of_finite_measurable_cover` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:463`
  ★ `unit_cube_haar_selector_zero_order_uniform_sieve_holder_approximation_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:748`
★ `unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:802` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ unitCubeDomain"]
  n1["◆ FunctionClass"]
  n2["◆ IsHolderFunction"]
  n3["◆ holderBall"]
  n4["◆ integratedSquaredError"]
  n5["◆ seriesFunction"]
  n6["◆ sieveApproximationError"]
  n7["◆ unitCubeHaarSelectorSieve"]
  n8["◆ bias"]
  n9["▣ DenseLayer"]
  n10["◆ apply"]
  n11["★ unit_cube_grid_finite_measurable_cover"]
  n12["★ unit_cube_dyadic_grid_finite_measurable_cover_basis_rate"]
  n13["◆ selectorIndicatorSieve"]
  n14["★ finite_measurable_cover_exists_measurable_selector"]
  n15["★ integratedSquaredError_le_of_pointwise_bound"]
  n16["★ sieve_approximation_error_le_of_coefficients"]
  n17["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n18["★ sieve_approximation_error_range_bddBelow"]
  n19["★ sieve_approximation_error_le_of_exists_pointwise_series_approximation"]
  n20["★ uniform_sieve_approximation_error_bound_of_pointwise_series_approximation"]
  n21["★ selector_indicator_basis_series_function_measurable"]
  n22["★ selector_indicator_sieve_series_function_measurable"]
  n23["★ selector_indicator_sieve_series_function_eq"]
  n24["★ selector_indicator_holder_series_pointwise_approximation_bound"]
  n25["★ selector_indicator_uniform_sieve_holder_approximation_bound"]
  n26["★ exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net"]
  n27["★ exists_selector_indicator_sieve_uniform_holder_approximation_rate_of_cover"]
  n28["★ exists_selector_indicator_sieve_uniform_holder_approximation_rate_of_finite_measurable_cover"]
  n29["★ unit_cube_haar_selector_zero_order_uniform_sieve_holder_approximation_rate"]
  n30["★ unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate"]
  n3 --> n1
  n3 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n9 --> n8
  n10 --> n9
  n10 --> n8
  n11 --> n10
  n12 --> n0
  n12 --> n11
  n15 --> n4
  n16 --> n4
  n16 --> n5
  n16 --> n6
  n17 --> n5
  n17 --> n4
  n17 --> n6
  n17 --> n15
  n17 --> n16
  n18 --> n4
  n18 --> n5
  n18 --> n10
  n19 --> n5
  n19 --> n6
  n19 --> n17
  n19 --> n18
  n20 --> n5
  n20 --> n6
  n20 --> n19
  n21 --> n5
  n21 --> n10
  n22 --> n5
  n22 --> n13
  n22 --> n21
  n23 --> n5
  n23 --> n13
  n24 --> n2
  n24 --> n5
  n24 --> n13
  n24 --> n23
  n25 --> n3
  n25 --> n6
  n25 --> n13
  n25 --> n20
  n25 --> n22
  n25 --> n24
  n26 --> n3
  n26 --> n6
  n26 --> n13
  n26 --> n25
  n27 --> n3
  n27 --> n6
  n27 --> n13
  n27 --> n26
  n28 --> n3
  n28 --> n6
  n28 --> n13
  n28 --> n14
  n28 --> n27
  n29 --> n0
  n29 --> n3
  n29 --> n6
  n29 --> n7
  n29 --> n12
  n29 --> n28
  n29 --> n13
  n30 --> n0
  n30 --> n3
  n30 --> n6
  n30 --> n7
  n30 --> n2
  n30 --> n29
  class n30 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
