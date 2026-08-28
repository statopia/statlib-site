# Proof narrative — haar_wavelet_zero_order_holder_projection_rate_of_cell_selector

Root: **haar_wavelet_zero_order_holder_projection_rate_of_cell_selector** (theorem) `Statlib/Nonparametric/Approximation/Wavelet.lean:574` · topic `Nonparametric`
Closure: 19 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `haarDyadicCell1D` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:41`  _(also used by 1: haarScalingCell_measurable)_
        ◆ `dyadicGridEquiv` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:30`
      ◆ `dyadicGridIndex` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:36`
    ◆ `haarScalingCell` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:46`  _(also used by 1: haarScalingCell_measurable)_
  ◆ `haarScalingBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:51`  _(also used by 2: haar_wavelet_zero_order_uniform_sieve_holder_approximation_rate_of_projection_error, haarScalingBasis_measurable)_
  ◆ `selectorIndicatorSieve` — def · `Statlib/Nonparametric/Approximation/Sieve.lean:459`  _(also used by 16: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
    ▣ `WaveletSystem` — structure · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:16`  _(also used by 20: wavelet_sieve_series_function_measurable_of_system, wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series, wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_approximation, …)_
      ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
      ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
      ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
      ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
    ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 76: holderSmoothBall_taylor_remainder_bound_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 66: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
  ◆ `waveletSieve` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:72`  _(also used by 23: wavelet_sieve_series_function_measurable_of_system, wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series, wavelet_sieve_holder_smooth_approximation_bound_of_pointwise_approximation, …)_
  ◆ `HasWaveletHolderSmoothProjectionRate` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:110`  _(also used by 3: wavelet_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, IsWaveletHolderSmoothApproximationSieve)_
  ◆ `dyadicWaveletSystemOfBasis` — def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:22`  _(also used by 6: dyadic_wavelet_holder_smooth_approximation_bound_of_projection_rate, dyadic_wavelet_holder_smooth_approximation_bound_of_projection_certificate, dyadic_wavelet_high_order_holder_smooth_uniform_sieve_approximation_rate_of_projection_certificate, …)_
  ◆ `haarScalingWaveletSystem` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Wavelet.lean:56`  _(also used by 2: haar_wavelet_zero_order_uniform_sieve_holder_approximation_rate_of_projection_error, haarScalingWaveletSystem_isMeasurable)_
  ★ `selector_indicator_sieve_series_function_eq` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:486`  _(also used by 4: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_class_approximation_error_le_of_net, selector_indicator_holder_sieve_approximation_error_le_of_net, …)_
★ `haar_wavelet_zero_order_holder_projection_rate_of_cell_selector` — theorem · `Statlib/Nonparametric/Approximation/Wavelet.lean:574` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ haarDyadicCell1D"]
  n1["◆ dyadicGridEquiv"]
  n2["◆ dyadicGridIndex"]
  n3["◆ haarScalingCell"]
  n4["◆ haarScalingBasis"]
  n5["◆ selectorIndicatorSieve"]
  n6["▣ WaveletSystem"]
  n7["◆ FunctionClass"]
  n8["◆ IsHolderFunction"]
  n9["◆ IsHolderSmoothFunction"]
  n10["◆ holderBall"]
  n11["◆ holderSmoothBall"]
  n12["◆ seriesFunction"]
  n13["◆ waveletSieve"]
  n14["◆ HasWaveletHolderSmoothProjectionRate"]
  n15["◆ dyadicWaveletSystemOfBasis"]
  n16["◆ haarScalingWaveletSystem"]
  n17["★ selector_indicator_sieve_series_function_eq"]
  n18["★ haar_wavelet_zero_order_holder_projection_rate_of_cell_selector"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n3
  n9 --> n8
  n10 --> n7
  n10 --> n8
  n11 --> n7
  n11 --> n9
  n11 --> n8
  n11 --> n10
  n13 --> n6
  n14 --> n6
  n14 --> n11
  n14 --> n12
  n14 --> n13
  n15 --> n6
  n16 --> n6
  n16 --> n15
  n16 --> n4
  n17 --> n12
  n17 --> n5
  n18 --> n4
  n18 --> n5
  n18 --> n14
  n18 --> n16
  n18 --> n12
  n18 --> n13
  n18 --> n15
  n18 --> n17
  class n18 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
