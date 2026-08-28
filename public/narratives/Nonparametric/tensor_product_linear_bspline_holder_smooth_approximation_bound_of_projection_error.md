# Proof narrative — tensor_product_linear_bspline_holder_smooth_approximation_bound_of_projection_error

Root: **tensor_product_linear_bspline_holder_smooth_approximation_bound_of_projection_error** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:1330` · topic `Nonparametric`
Closure: 47 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 62: holderSmoothBall_taylor_remainder_bound_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 53: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
    ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:21`  _(also used by 5: tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, tensorProductPositiveDegreeBSplineSystem, tensorProductPositiveDegreeExtendedBSplineSystem, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:158`  _(also used by 36: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, …)_
    ◆ `tensorProductSplineSystemOfBasis` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:31`  _(also used by 2: tensor_product_linear_bspline_holder_projection_rate_of_local_partition, tensorProductPositiveDegreeBSplineSystem)_
    ◆ `linearBSplineHat` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:59`
        ◆ `tensorProductGridEquiv` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:46`  _(also used by 9: unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_prod_sum, unitCubeBSplineTensorDual_polynomialReproduction, …)_
    ◆ `tensorProductGridIndex` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:52`  _(also used by 21: tensorProductPositiveDegreeBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_eq_zero_of_exists_scaled_le_index, unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, …)_
  ◆ `tensorProductLinearBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:63`  _(also used by 1: tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
  ◆ `tensorProductLinearBSplineSystem` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:70`  _(also used by 1: tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 45: selector_indicator_holder_sieve_approximation_error_le_of_net, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
      ▣ `TensorProductSplineProjectionCertificate` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:306`  _(also used by 1: tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate)_
        ◆ `HasTensorProductSplineHolderSmoothProjectionRate` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:250`  _(also used by 5: tensor_product_linear_bspline_holder_projection_rate_of_local_partition, tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate, tensor_product_extended_bspline_holder_smooth_approximation_rate_of_projection, …)_
        ◆ `IsTensorProductSplineHolderSmoothApproximationSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:319`
            ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
            ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
          ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 78: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
            ◆ `HasTensorProductSplineHolderSmoothPointwiseRate` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:236`  _(also used by 1: tensor_product_extended_bspline_holder_smooth_approximation_rate_of_projection)_
            ★ `series_function_measurable_of_basis_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:156`  _(also used by 1: wavelet_sieve_series_function_measurable_of_system)_
            ★ `tensorProductSplineSieve_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1216`
            ★ `tensorProductSplineSieve_measurable` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1221`
            ★ `tensor_product_spline_sieve_series_function_measurable` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:14`  _(also used by 2: unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
            ★ `sieve_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:165`
            ★ `sieve_approximation_error_le_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:306`  _(also used by 3: selector_indicator_holder_sieve_approximation_error_le_of_net, unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:179`  _(also used by 2: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
            ★ `sieve_approximation_error_le_of_exists_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:327`
            ★ `uniform_sieve_approximation_error_bound_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:343`  _(also used by 3: selector_indicator_uniform_sieve_holder_approximation_bound, exists_uniform_sieve_approximation_error_bound_of_pointwise_series_approximation, wavelet_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series)_
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:918`
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:937`
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:967`
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:991`
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_basis_count_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1008`  _(also used by 1: tensor_product_extended_bspline_holder_smooth_approximation_rate_of_projection)_
            ★ `tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1033`
          ★ `tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1104`  _(also used by 1: tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate)_
        ★ `tensor_product_spline_sieve_holder_smooth_approximation_bound_of_approximation_sieve` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1153`
      ★ `tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1171`  _(also used by 1: tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate)_
    ★ `tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_certificate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1210`
  ★ `tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1243`  _(also used by 1: tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_error)_
    ★ `linearBSplineHat_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:14`
  ★ `tensorProductLinearBSplineBasis_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:19`
★ `tensor_product_linear_bspline_holder_smooth_approximation_bound_of_projection_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1330` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ IsHolderFunction"]
  n2["◆ IsHolderSmoothFunction"]
  n3["◆ holderBall"]
  n4["◆ holderSmoothBall"]
  n5["◆ seriesFunction"]
  n6["▣ TensorProductSplineSystem"]
  n7["◆ tensorProductSplineSieve"]
  n8["◆ tensorProductSplineSystemOfBasis"]
  n9["◆ linearBSplineHat"]
  n10["◆ tensorProductGridEquiv"]
  n11["◆ tensorProductGridIndex"]
  n12["◆ tensorProductLinearBSplineBasis"]
  n13["◆ tensorProductLinearBSplineSystem"]
  n14["◆ integratedSquaredError"]
  n15["◆ sieveApproximationError"]
  n16["▣ TensorProductSplineProjectionCertificate"]
  n17["◆ HasTensorProductSplineHolderSmoothProjectionRate"]
  n18["◆ IsTensorProductSplineHolderSmoothApproximationSieve"]
  n19["◆ bias"]
  n20["▣ DenseLayer"]
  n21["◆ apply"]
  n22["◆ HasTensorProductSplineHolderSmoothPointwiseRate"]
  n23["★ series_function_measurable_of_basis_measurable"]
  n24["★ tensorProductSplineSieve_continuous"]
  n25["★ tensorProductSplineSieve_measurable"]
  n26["★ tensor_product_spline_sieve_series_function_measurable"]
  n27["★ integratedSquaredError_le_of_pointwise_bound"]
  n28["★ sieve_approximation_error_le_of_coefficients"]
  n29["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n30["★ sieve_approximation_error_range_bddBelow"]
  n31["★ sieve_approximation_error_le_of_exists_pointwise_series_approximation"]
  n32["★ uniform_sieve_approximation_error_bound_of_pointwise_series_approximation"]
  n33["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series"]
  n34["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation"]
  n35["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate"]
  n36["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_rate"]
  n37["★ tensor_product_spline_sieve_holder_smooth_approximation_basis_count_rate"]
  n38["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count"]
  n39["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate"]
  n40["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_approximation_sieve"]
  n41["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_rate"]
  n42["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_certificate"]
  n43["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_error"]
  n44["★ linearBSplineHat_continuous"]
  n45["★ tensorProductLinearBSplineBasis_continuous"]
  n46["★ tensor_product_linear_bspline_holder_smooth_approximation_bound_of_projection_error"]
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n1
  n4 --> n3
  n7 --> n6
  n8 --> n6
  n11 --> n10
  n12 --> n9
  n12 --> n11
  n13 --> n6
  n13 --> n8
  n13 --> n12
  n13 --> n9
  n15 --> n14
  n15 --> n5
  n16 --> n6
  n16 --> n4
  n16 --> n5
  n16 --> n7
  n17 --> n6
  n17 --> n4
  n17 --> n5
  n17 --> n7
  n18 --> n6
  n18 --> n17
  n20 --> n19
  n21 --> n20
  n21 --> n19
  n22 --> n6
  n22 --> n4
  n22 --> n5
  n22 --> n7
  n23 --> n5
  n24 --> n6
  n24 --> n7
  n25 --> n6
  n25 --> n7
  n25 --> n24
  n26 --> n6
  n26 --> n5
  n26 --> n7
  n26 --> n23
  n26 --> n25
  n27 --> n14
  n28 --> n14
  n28 --> n5
  n28 --> n15
  n29 --> n5
  n29 --> n14
  n29 --> n15
  n29 --> n27
  n29 --> n28
  n30 --> n14
  n30 --> n5
  n30 --> n21
  n31 --> n5
  n31 --> n15
  n31 --> n29
  n31 --> n30
  n32 --> n5
  n32 --> n15
  n32 --> n31
  n33 --> n6
  n33 --> n4
  n33 --> n5
  n33 --> n7
  n33 --> n15
  n33 --> n32
  n34 --> n6
  n34 --> n4
  n34 --> n5
  n34 --> n7
  n34 --> n15
  n34 --> n26
  n34 --> n33
  n35 --> n6
  n35 --> n4
  n35 --> n5
  n35 --> n7
  n35 --> n15
  n35 --> n34
  n36 --> n6
  n36 --> n4
  n36 --> n22
  n36 --> n15
  n36 --> n7
  n36 --> n35
  n37 --> n6
  n37 --> n4
  n37 --> n22
  n37 --> n15
  n37 --> n7
  n37 --> n36
  n38 --> n6
  n38 --> n4
  n38 --> n22
  n38 --> n15
  n38 --> n7
  n38 --> n37
  n39 --> n6
  n39 --> n4
  n39 --> n17
  n39 --> n15
  n39 --> n7
  n39 --> n38
  n40 --> n6
  n40 --> n18
  n40 --> n4
  n40 --> n15
  n40 --> n7
  n40 --> n21
  n40 --> n39
  n41 --> n4
  n41 --> n17
  n41 --> n8
  n41 --> n15
  n41 --> n7
  n41 --> n18
  n41 --> n40
  n42 --> n4
  n42 --> n16
  n42 --> n8
  n42 --> n15
  n42 --> n7
  n42 --> n41
  n43 --> n4
  n43 --> n5
  n43 --> n7
  n43 --> n8
  n43 --> n15
  n43 --> n42
  n44 --> n9
  n45 --> n12
  n45 --> n44
  n45 --> n11
  n46 --> n4
  n46 --> n5
  n46 --> n7
  n46 --> n13
  n46 --> n15
  n46 --> n43
  n46 --> n12
  n46 --> n45
  class n46 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
