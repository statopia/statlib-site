# Proof narrative — tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_error

Root: **tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_error** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:1395` · topic `Nonparametric`
Closure: 49 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 62: holderSmoothBall_taylor_remainder_bound_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 53: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
    ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:21`  _(also used by 5: tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_certificate, tensorProductLinearBSplineSystem, tensorProductPositiveDegreeExtendedBSplineSystem, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:158`  _(also used by 36: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, …)_
    ◆ `tensorProductSplineSystemOfBasis` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:31`  _(also used by 2: tensor_product_linear_bspline_holder_projection_rate_of_local_partition, tensorProductLinearBSplineSystem)_
    ◆ `positiveDegreeCardinalBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:82`  _(also used by 13: positiveDegreeCardinalBSpline_eq_zero_of_nonpos, positiveDegreeCardinalBSpline_eq_zero_of_ge_degree_plus_two, positiveDegreeExtendedUniformBSpline_linearIndependent_on_Icc, …)_
    ◆ `positiveDegreeUniformBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:89`  _(also used by 2: positiveDegreeUniformBSpline_eq_zero_of_scaled_le_index, tensorProductPositiveDegreeBSplineBasis_nonneg)_
        ◆ `tensorProductGridEquiv` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:46`  _(also used by 9: unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_prod_sum, unitCubeBSplineTensorDual_polynomialReproduction, …)_
    ◆ `tensorProductGridIndex` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:52`  _(also used by 21: tensorProductLinearBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_eq_zero_of_exists_scaled_le_index, unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, …)_
  ◆ `tensorProductPositiveDegreeBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:93`  _(also used by 3: tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate, tensorProductPositiveDegreeBSplineBasis_eq_zero_of_exists_scaled_le_index, tensorProductPositiveDegreeBSplineBasis_nonneg)_
  ◆ `tensorProductPositiveDegreeBSplineSystem` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:101`  _(also used by 1: tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate)_
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
  ★ `tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1243`  _(also used by 1: tensor_product_linear_bspline_holder_smooth_approximation_bound_of_projection_error)_
      ★ `positiveDegreeCardinalBSpline_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:27`  _(also used by 1: positiveDegreeUniformBSplineIntShift_continuous)_
    ★ `positiveDegreeUniformBSpline_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:275`
  ★ `tensorProductPositiveDegreeBSplineBasis_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:288`  _(also used by 1: tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_rate)_
★ `tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:1395` **← headline**

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
  n9["◆ positiveDegreeCardinalBSpline"]
  n10["◆ positiveDegreeUniformBSpline"]
  n11["◆ tensorProductGridEquiv"]
  n12["◆ tensorProductGridIndex"]
  n13["◆ tensorProductPositiveDegreeBSplineBasis"]
  n14["◆ tensorProductPositiveDegreeBSplineSystem"]
  n15["◆ integratedSquaredError"]
  n16["◆ sieveApproximationError"]
  n17["▣ TensorProductSplineProjectionCertificate"]
  n18["◆ HasTensorProductSplineHolderSmoothProjectionRate"]
  n19["◆ IsTensorProductSplineHolderSmoothApproximationSieve"]
  n20["◆ bias"]
  n21["▣ DenseLayer"]
  n22["◆ apply"]
  n23["◆ HasTensorProductSplineHolderSmoothPointwiseRate"]
  n24["★ series_function_measurable_of_basis_measurable"]
  n25["★ tensorProductSplineSieve_continuous"]
  n26["★ tensorProductSplineSieve_measurable"]
  n27["★ tensor_product_spline_sieve_series_function_measurable"]
  n28["★ integratedSquaredError_le_of_pointwise_bound"]
  n29["★ sieve_approximation_error_le_of_coefficients"]
  n30["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n31["★ sieve_approximation_error_range_bddBelow"]
  n32["★ sieve_approximation_error_le_of_exists_pointwise_series_approximation"]
  n33["★ uniform_sieve_approximation_error_bound_of_pointwise_series_approximation"]
  n34["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series"]
  n35["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation"]
  n36["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate"]
  n37["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_rate"]
  n38["★ tensor_product_spline_sieve_holder_smooth_approximation_basis_count_rate"]
  n39["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count"]
  n40["★ tensor_product_spline_sieve_holder_smooth_approximation_exact_basis_count_of_projection_rate"]
  n41["★ tensor_product_spline_sieve_holder_smooth_approximation_bound_of_approximation_sieve"]
  n42["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_rate"]
  n43["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_certificate"]
  n44["★ tensor_product_spline_basis_holder_smooth_approximation_bound_of_projection_error"]
  n45["★ positiveDegreeCardinalBSpline_continuous"]
  n46["★ positiveDegreeUniformBSpline_continuous"]
  n47["★ tensorProductPositiveDegreeBSplineBasis_continuous"]
  n48["★ tensor_product_positive_degree_bspline_holder_smooth_approximation_bound_of_projection_error"]
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
  n12 --> n11
  n13 --> n10
  n13 --> n12
  n14 --> n6
  n14 --> n8
  n14 --> n13
  n14 --> n10
  n14 --> n9
  n16 --> n15
  n16 --> n5
  n17 --> n6
  n17 --> n4
  n17 --> n5
  n17 --> n7
  n18 --> n6
  n18 --> n4
  n18 --> n5
  n18 --> n7
  n19 --> n6
  n19 --> n18
  n21 --> n20
  n22 --> n21
  n22 --> n20
  n23 --> n6
  n23 --> n4
  n23 --> n5
  n23 --> n7
  n24 --> n5
  n25 --> n6
  n25 --> n7
  n26 --> n6
  n26 --> n7
  n26 --> n25
  n27 --> n6
  n27 --> n5
  n27 --> n7
  n27 --> n24
  n27 --> n26
  n28 --> n15
  n29 --> n15
  n29 --> n5
  n29 --> n16
  n30 --> n5
  n30 --> n15
  n30 --> n16
  n30 --> n28
  n30 --> n29
  n31 --> n15
  n31 --> n5
  n31 --> n22
  n32 --> n5
  n32 --> n16
  n32 --> n30
  n32 --> n31
  n33 --> n5
  n33 --> n16
  n33 --> n32
  n34 --> n6
  n34 --> n4
  n34 --> n5
  n34 --> n7
  n34 --> n16
  n34 --> n33
  n35 --> n6
  n35 --> n4
  n35 --> n5
  n35 --> n7
  n35 --> n16
  n35 --> n27
  n35 --> n34
  n36 --> n6
  n36 --> n4
  n36 --> n5
  n36 --> n7
  n36 --> n16
  n36 --> n35
  n37 --> n6
  n37 --> n4
  n37 --> n23
  n37 --> n16
  n37 --> n7
  n37 --> n36
  n38 --> n6
  n38 --> n4
  n38 --> n23
  n38 --> n16
  n38 --> n7
  n38 --> n37
  n39 --> n6
  n39 --> n4
  n39 --> n23
  n39 --> n16
  n39 --> n7
  n39 --> n38
  n40 --> n6
  n40 --> n4
  n40 --> n18
  n40 --> n16
  n40 --> n7
  n40 --> n39
  n41 --> n6
  n41 --> n19
  n41 --> n4
  n41 --> n16
  n41 --> n7
  n41 --> n22
  n41 --> n40
  n42 --> n4
  n42 --> n18
  n42 --> n8
  n42 --> n16
  n42 --> n7
  n42 --> n19
  n42 --> n41
  n43 --> n4
  n43 --> n17
  n43 --> n8
  n43 --> n16
  n43 --> n7
  n43 --> n42
  n44 --> n4
  n44 --> n5
  n44 --> n7
  n44 --> n8
  n44 --> n16
  n44 --> n43
  n45 --> n9
  n46 --> n10
  n46 --> n45
  n47 --> n13
  n47 --> n46
  n47 --> n12
  n48 --> n4
  n48 --> n5
  n48 --> n7
  n48 --> n14
  n48 --> n16
  n48 --> n44
  n48 --> n13
  n48 --> n47
  class n48 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
