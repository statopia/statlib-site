# Proof narrative — dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_error

Root: **dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_error** (theorem) `Statlib/Nonparametric/Approximation/Wavelet.lean:494` · topic `Nonparametric`
Closure: 39 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 63: holderSmoothBall_taylor_remainder_bound_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 53: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
    ▣ `WaveletSystem` — structure · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:16`  _(also used by 5: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, waveletSieve_continuous_of_system, haarScalingWaveletSystem, …)_
  ◆ `waveletSieve` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:72`  _(also used by 9: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_certificate, …)_
  ◆ `dyadicWaveletSystemOfBasis` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:22`  _(also used by 7: dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_certificate, dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate, …)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 46: selector_indicator_holder_sieve_approximation_error_le_of_net, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `IsMeasurableWaveletSystem` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:82`  _(also used by 2: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, haarScalingWaveletSystem_isMeasurable)_
  ▣ `WaveletProjectionCertificate` — structure · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:125`  _(also used by 3: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_certificate, dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate)_
      ◆ `HasWaveletHolderSmoothProjectionRate` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:110`  _(also used by 2: dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, haar_wavelet_zero_order_holder_projection_rate_of_cell_selector)_
    ◆ `IsWaveletHolderSmoothApproximationSieve` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:141`  _(also used by 2: dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate)_
          ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
          ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 77: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
            ◆ `HasWaveletHolderSmoothPointwiseRate` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:96`
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
            ★ `sieve_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:165`
            ★ `sieve_approximation_error_le_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:306`  _(also used by 3: selector_indicator_holder_sieve_approximation_error_le_of_net, unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:179`  _(also used by 2: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_le_of_exists_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:327`
            ★ `uniform_sieve_approximation_error_bound_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:343`  _(also used by 3: selector_indicator_uniform_sieve_holder_approximation_bound, exists_uniform_sieve_approximation_error_bound_of_pointwise_series_approximation, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series)_
            ★ `wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:25`
            ★ `series_function_measurable_of_basis_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:156`  _(also used by 1: tensor_product_spline_sieve_series_function_measurable)_
            ★ `waveletSieve_measurable_of_system` — theorem · `Statlib/Nonparametric/Approximation/WaveletFacts.lean:38`
            ★ `wavelet_sieve_series_function_measurable_of_system` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:14`
            ★ `wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_approximation` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:45`
            ★ `wavelet_sieve_holder_smooth_approximation_bound_of_level_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:68`
            ★ `wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:92`
            ★ `wavelet_sieve_holder_smooth_approximation_basis_count_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:110`
          ★ `wavelet_sieve_holder_smooth_approximation_exact_basis_count` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:138`
        ★ `wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:251`  _(also used by 1: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate)_
      ★ `wavelet_sieve_holder_smooth_approximation_bound_of_approximation_sieve` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:300`  _(also used by 1: dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate)_
    ★ `wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_approximation_sieve` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:324`  _(also used by 1: dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate)_
  ★ `wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:356`
★ `dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_error` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:494` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ IsHolderFunction"]
  n2["◆ IsHolderSmoothFunction"]
  n3["◆ holderBall"]
  n4["◆ holderSmoothBall"]
  n5["◆ seriesFunction"]
  n6["▣ WaveletSystem"]
  n7["◆ waveletSieve"]
  n8["◆ dyadicWaveletSystemOfBasis"]
  n9["◆ integratedSquaredError"]
  n10["◆ sieveApproximationError"]
  n11["◆ IsMeasurableWaveletSystem"]
  n12["▣ WaveletProjectionCertificate"]
  n13["◆ HasWaveletHolderSmoothProjectionRate"]
  n14["◆ IsWaveletHolderSmoothApproximationSieve"]
  n15["◆ bias"]
  n16["▣ DenseLayer"]
  n17["◆ apply"]
  n18["◆ HasWaveletHolderSmoothPointwiseRate"]
  n19["★ integratedSquaredError_le_of_pointwise_bound"]
  n20["★ sieve_approximation_error_le_of_coefficients"]
  n21["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n22["★ sieve_approximation_error_range_bddBelow"]
  n23["★ sieve_approximation_error_le_of_exists_pointwise_series_approximation"]
  n24["★ uniform_sieve_approximation_error_bound_of_pointwise_series_approximation"]
  n25["★ wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series"]
  n26["★ series_function_measurable_of_basis_measurable"]
  n27["★ waveletSieve_measurable_of_system"]
  n28["★ wavelet_sieve_series_function_measurable_of_system"]
  n29["★ wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_approximation"]
  n30["★ wavelet_sieve_holder_smooth_approximation_bound_of_level_rate"]
  n31["★ wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_rate"]
  n32["★ wavelet_sieve_holder_smooth_approximation_basis_count_rate"]
  n33["★ wavelet_sieve_holder_smooth_approximation_exact_basis_count"]
  n34["★ wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate"]
  n35["★ wavelet_sieve_holder_smooth_approximation_bound_of_approximation_sieve"]
  n36["★ wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_approximation_sieve"]
  n37["★ wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate"]
  n38["★ dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_error"]
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n1
  n4 --> n3
  n7 --> n6
  n8 --> n6
  n10 --> n9
  n10 --> n5
  n11 --> n6
  n12 --> n6
  n12 --> n4
  n12 --> n5
  n12 --> n7
  n13 --> n6
  n13 --> n4
  n13 --> n5
  n13 --> n7
  n14 --> n6
  n14 --> n11
  n14 --> n13
  n16 --> n15
  n17 --> n16
  n17 --> n15
  n18 --> n6
  n18 --> n4
  n18 --> n5
  n18 --> n7
  n19 --> n9
  n20 --> n9
  n20 --> n5
  n20 --> n10
  n21 --> n5
  n21 --> n9
  n21 --> n10
  n21 --> n19
  n21 --> n20
  n22 --> n9
  n22 --> n5
  n22 --> n17
  n23 --> n5
  n23 --> n10
  n23 --> n21
  n23 --> n22
  n24 --> n5
  n24 --> n10
  n24 --> n23
  n25 --> n6
  n25 --> n4
  n25 --> n5
  n25 --> n7
  n25 --> n10
  n25 --> n24
  n26 --> n5
  n27 --> n6
  n27 --> n11
  n27 --> n7
  n28 --> n6
  n28 --> n11
  n28 --> n5
  n28 --> n7
  n28 --> n26
  n28 --> n27
  n29 --> n6
  n29 --> n11
  n29 --> n4
  n29 --> n5
  n29 --> n7
  n29 --> n10
  n29 --> n25
  n29 --> n28
  n30 --> n6
  n30 --> n11
  n30 --> n4
  n30 --> n5
  n30 --> n7
  n30 --> n10
  n30 --> n29
  n31 --> n6
  n31 --> n11
  n31 --> n4
  n31 --> n18
  n31 --> n10
  n31 --> n7
  n31 --> n30
  n32 --> n6
  n32 --> n11
  n32 --> n4
  n32 --> n18
  n32 --> n10
  n32 --> n7
  n32 --> n31
  n33 --> n6
  n33 --> n11
  n33 --> n4
  n33 --> n18
  n33 --> n10
  n33 --> n7
  n33 --> n17
  n33 --> n32
  n34 --> n6
  n34 --> n11
  n34 --> n4
  n34 --> n13
  n34 --> n10
  n34 --> n7
  n34 --> n33
  n35 --> n6
  n35 --> n14
  n35 --> n4
  n35 --> n10
  n35 --> n7
  n35 --> n17
  n35 --> n34
  n36 --> n6
  n36 --> n14
  n36 --> n4
  n36 --> n10
  n36 --> n7
  n36 --> n35
  n37 --> n6
  n37 --> n11
  n37 --> n12
  n37 --> n4
  n37 --> n10
  n37 --> n7
  n37 --> n5
  n37 --> n14
  n37 --> n36
  n38 --> n4
  n38 --> n5
  n38 --> n7
  n38 --> n8
  n38 --> n10
  n38 --> n11
  n38 --> n12
  n38 --> n37
  class n38 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
