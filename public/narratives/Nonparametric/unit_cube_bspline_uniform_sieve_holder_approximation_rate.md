# Proof narrative — unit_cube_bspline_uniform_sieve_holder_approximation_rate

Root: **unit_cube_bspline_uniform_sieve_holder_approximation_rate** (theorem) `Statlib/Nonparametric/Approximation/Spline.lean:226` · topic `Nonparametric`
Closure: 54 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `unitCubeDomain` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:52`  _(also used by 4: unit_cube_dyadic_grid_finite_measurable_cover_basis_rate, unit_cube_haar_selector_zero_order_uniform_sieve_holder_approximation_rate, unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate, …)_
  ◆ `splineUnitCubeDomain` — abbrev · `Statlib/Nonparametric/Vocabulary/Spline.lean:170`  _(also used by 23: unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection, unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unit_cube_bspline_trace_zero_order_uniform_sieve_holder_approximation_rate, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 24: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 22: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 12: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 60: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 55: selector_indicator_holder_sieve_approximation_error_le_of_net, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
    ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:21`  _(also used by 18: tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_resolution_rate, …)_
    ◆ `positiveDegreeCardinalBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:82`  _(also used by 9: positiveDegreeCardinalBSpline_continuous, positiveDegreeExtendedUniformBSpline_linearIndependent_on_Icc, positiveDegreeCardinalBSpline_marsdenIdentity, …)_
    ◆ `positiveDegreeUniformBSplineIntShift` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:113`  _(also used by 8: positiveDegreeUniformBSplineIntShift_continuous, positiveDegreeUniformBSplineIntShift_eq_zero_of_scaled_le_shift, positiveDegreeUniformBSplineIntShift_eq_zero_of_shift_add_degree_plus_two_le_scaled, …)_
      ◆ `positiveDegreeExtendedBSplineShift` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:120`  _(also used by 8: positiveDegreeExtendedUniformBSpline_continuous, positiveDegreeExtendedUniformBSpline_eq_zero_of_shift_add_degree_plus_two_le_scaled, positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo, …)_
    ◆ `positiveDegreeExtendedUniformBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:126`  _(also used by 11: positiveDegreeExtendedUniformBSpline_continuous, positiveDegreeExtendedUniformBSpline_eq_zero_of_shift_add_degree_plus_two_le_scaled, positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo, …)_
          ◆ `tensorProductGridEquiv` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:46`  _(also used by 8: unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, unitCubeBSplineTensorDual_polynomialReproduction, unitCubeBSplineTensorDual_polynomialReproduction_degreeSucc, …)_
      ◆ `tensorProductGridIndex` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:52`  _(also used by 16: tensorProductLinearBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_eq_zero_of_exists_scaled_le_index, …)_
    ◆ `tensorProductPositiveDegreeExtendedBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:133`  _(also used by 9: unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, tensorProductPositiveDegreeExtendedBSplineBasis_continuous, tensorProductPositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo, …)_
    ◆ `unitCubePositiveDegreeExtendedBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:187`  _(also used by 10: unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim, unitCubePositiveDegreeExtendedBSplineDual_polynomialEval_fin_linear, unitCubePositiveDegreeExtendedBSplineBasis_continuous, …)_
  ◆ `unitCubePositiveDegreeExtendedBSplineSystem` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:193`  _(also used by 22: unit_cube_bspline_basis_count_rate_factor_bound, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection, unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:158`  _(also used by 44: unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection, unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unit_cube_bspline_trace_zero_order_uniform_sieve_holder_approximation_rate, …)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 77: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
        ★ `partition_of_unity_series_pointwise_approximation_error_bound` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:29`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
          ★ `positiveDegreeCardinalBSpline_eq_zero_of_nonpos` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:32`  _(also used by 3: positiveDegreeUniformBSpline_eq_zero_of_scaled_le_index, positiveDegreeUniformBSplineIntShift_eq_zero_of_scaled_le_shift, positiveDegreeCardinalBSpline_marsdenIdentity)_
          ★ `positiveDegreeCardinalBSpline_eq_zero_of_ge_degree_plus_two` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:52`  _(also used by 3: positiveDegreeUniformBSplineIntShift_eq_zero_of_shift_add_degree_plus_two_le_scaled, positiveDegreeExtendedUniformBSpline_eq_zero_of_shift_add_degree_plus_two_le_scaled, positiveDegreeCardinalBSpline_marsdenIdentity)_
            ★ `positiveDegreeCardinalBSpline_succ_eq_weighted_adjacent` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1228`  _(also used by 2: positiveDegreeCardinalBSpline_marsdenIdentity, positiveDegreeCardinalBSpline_ne_zero_of_pos)_
            ★ `positiveDegreeCardinalBSpline_nonneg` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1937`  _(also used by 2: tensorProductPositiveDegreeBSplineBasis_nonneg, positiveDegreeCardinalBSpline_ne_zero_of_pos)_
            ★ `tensorProductPositiveDegreeExtendedBSplineBasis_nonneg` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2006`
          ★ `unitCubePositiveDegreeExtendedBSplineBasis_nonneg` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2146`
        ★ `unitCubePositiveDegreeExtendedBSplineSystem_basis_nonneg` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2247`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unitCubeBSplineQuasiInterpolantCertificate_exists_of_taylorStability)_
            ★ `sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_prod_sum` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2016`
            ★ `sum_positiveDegreeExtendedUniformBSpline_eq_one_of_mem_Icc` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1697`
            ★ `sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_one_of_mem_Icc` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2033`
          ★ `sum_unitCubePositiveDegreeExtendedBSplineBasis_eq_one` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2153`
        ★ `sum_unitCubePositiveDegreeExtendedBSplineSystem_basis_eq_one` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2256`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unitCubeBSplineQuasiInterpolantCertificate_exists_of_taylorStability)_
          ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
          ★ `sieve_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:165`
        ★ `sieve_approximation_error_le_of_pointwise_series_approximation` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:306`  _(also used by 3: selector_indicator_holder_sieve_approximation_error_le_of_net, sieve_approximation_error_le_of_exists_pointwise_series_approximation, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
        ★ `sieve_approximation_error_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:179`  _(also used by 2: sieve_approximation_error_le_of_exists_pointwise_series_approximation, unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection)_
      ★ `unit_cube_bspline_sieve_approximation_error_bound_of_local_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:28`
    ★ `unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:86`
    ◆ `unitCubePositiveDegreeExtendedBSplineSupportNode` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:214`  _(also used by 3: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unitCubeBSplineQuasiInterpolantCertificate_exists_of_taylorStability, unitCubePositiveDegreeExtendedBSplineSystem_support_radius_degree_plus_two_div)_
      ★ `series_function_measurable_of_basis_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:156`  _(also used by 1: wavelet_sieve_series_function_measurable_of_system)_
        ★ `tensorProductSplineSieve_continuous` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1216`
      ★ `tensorProductSplineSieve_measurable` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1221`
    ★ `tensor_product_spline_sieve_series_function_measurable` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:14`  _(also used by 2: unit_cube_bspline_trace_uniform_sieve_holder_smooth_approximation_rate_of_projection, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation)_
      ★ `splineUnitCubeDomain_dist_le_of_forall_coord_abs_sub_le` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2105`  _(also used by 1: unitCubePositiveDegreeExtendedBSplineSystem_support_radius_degree_plus_two_div)_
        ★ `tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1165`  _(also used by 1: tensorProductPositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo)_
        ★ `tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_shift_add_degree_plus_two_le_scaled` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1181`  _(also used by 1: tensorProductPositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo)_
      ★ `unitCubePositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2117`  _(also used by 2: unitCubePositiveDegreeExtendedBSplineSystem_support_radius_degree_plus_two_div, unitCubePositiveDegreeExtendedBSplineDual_exists_uniform_reproducing_degreeSucc_localStability)_
      ★ `abs_sub_unitInterval_clamp_left_div_le_of_scaled_mem_Ioo` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2048`  _(also used by 1: unitCubePositiveDegreeExtendedBSplineSystem_support_radius_degree_plus_two_div)_
    ★ `unitCubePositiveDegreeExtendedBSplineSystem_mesh_support_radius_degree_plus_two` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2198`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, unitCubeBSplineQuasiInterpolantCertificate_exists_of_taylorStability)_
  ★ `unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:125`
★ `unit_cube_bspline_uniform_sieve_holder_approximation_rate` — theorem · `Statlib/Nonparametric/Approximation/Spline.lean:226` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ unitCubeDomain"]
  n1["◆ splineUnitCubeDomain"]
  n2["◆ FunctionClass"]
  n3["◆ IsHolderFunction"]
  n4["◆ holderBall"]
  n5["◆ integratedSquaredError"]
  n6["◆ seriesFunction"]
  n7["◆ sieveApproximationError"]
  n8["▣ TensorProductSplineSystem"]
  n9["◆ positiveDegreeCardinalBSpline"]
  n10["◆ positiveDegreeUniformBSplineIntShift"]
  n11["◆ positiveDegreeExtendedBSplineShift"]
  n12["◆ positiveDegreeExtendedUniformBSpline"]
  n13["◆ tensorProductGridEquiv"]
  n14["◆ tensorProductGridIndex"]
  n15["◆ tensorProductPositiveDegreeExtendedBSplineBasis"]
  n16["◆ unitCubePositiveDegreeExtendedBSplineBasis"]
  n17["◆ unitCubePositiveDegreeExtendedBSplineSystem"]
  n18["◆ tensorProductSplineSieve"]
  n19["◆ bias"]
  n20["▣ DenseLayer"]
  n21["◆ apply"]
  n22["★ partition_of_unity_series_pointwise_approximation_error_bound"]
  n23["★ positiveDegreeCardinalBSpline_eq_zero_of_nonpos"]
  n24["★ positiveDegreeCardinalBSpline_eq_zero_of_ge_degree_plus_two"]
  n25["★ positiveDegreeCardinalBSpline_succ_eq_weighted_adjacent"]
  n26["★ positiveDegreeCardinalBSpline_nonneg"]
  n27["★ tensorProductPositiveDegreeExtendedBSplineBasis_nonneg"]
  n28["★ unitCubePositiveDegreeExtendedBSplineBasis_nonneg"]
  n29["★ unitCubePositiveDegreeExtendedBSplineSystem_basis_nonneg"]
  n30["★ sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_prod_sum"]
  n31["★ sum_positiveDegreeExtendedUniformBSpline_eq_one_of_mem_Icc"]
  n32["★ sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_one_of_mem_Icc"]
  n33["★ sum_unitCubePositiveDegreeExtendedBSplineBasis_eq_one"]
  n34["★ sum_unitCubePositiveDegreeExtendedBSplineSystem_basis_eq_one"]
  n35["★ integratedSquaredError_le_of_pointwise_bound"]
  n36["★ sieve_approximation_error_le_of_coefficients"]
  n37["★ sieve_approximation_error_le_of_pointwise_series_approximation"]
  n38["★ sieve_approximation_error_range_bddBelow"]
  n39["★ unit_cube_bspline_sieve_approximation_error_bound_of_local_error"]
  n40["★ unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error"]
  n41["◆ unitCubePositiveDegreeExtendedBSplineSupportNode"]
  n42["★ series_function_measurable_of_basis_measurable"]
  n43["★ tensorProductSplineSieve_continuous"]
  n44["★ tensorProductSplineSieve_measurable"]
  n45["★ tensor_product_spline_sieve_series_function_measurable"]
  n46["★ splineUnitCubeDomain_dist_le_of_forall_coord_abs_sub_le"]
  n47["★ tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift"]
  n48["★ tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_shift_add_degree_plus_two_le_scaled"]
  n49["★ unitCubePositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo"]
  n50["★ abs_sub_unitInterval_clamp_left_div_le_of_scaled_mem_Ioo"]
  n51["★ unitCubePositiveDegreeExtendedBSplineSystem_mesh_support_radius_degree_plus_two"]
  n52["★ unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate"]
  n53["★ unit_cube_bspline_uniform_sieve_holder_approximation_rate"]
  n1 --> n0
  n4 --> n2
  n4 --> n3
  n7 --> n5
  n7 --> n6
  n10 --> n9
  n12 --> n10
  n12 --> n11
  n14 --> n13
  n15 --> n12
  n15 --> n14
  n16 --> n1
  n16 --> n15
  n17 --> n8
  n17 --> n1
  n17 --> n16
  n17 --> n15
  n17 --> n12
  n17 --> n10
  n17 --> n9
  n18 --> n8
  n20 --> n19
  n21 --> n20
  n21 --> n19
  n22 --> n6
  n23 --> n9
  n24 --> n9
  n25 --> n9
  n25 --> n23
  n25 --> n21
  n25 --> n24
  n26 --> n9
  n26 --> n23
  n26 --> n24
  n26 --> n25
  n27 --> n15
  n27 --> n12
  n27 --> n10
  n27 --> n26
  n28 --> n1
  n28 --> n16
  n28 --> n27
  n29 --> n17
  n29 --> n1
  n29 --> n18
  n29 --> n28
  n30 --> n15
  n30 --> n12
  n30 --> n13
  n30 --> n14
  n31 --> n12
  n31 --> n9
  n31 --> n10
  n31 --> n11
  n31 --> n23
  n31 --> n24
  n31 --> n25
  n32 --> n15
  n32 --> n30
  n32 --> n12
  n32 --> n31
  n33 --> n1
  n33 --> n16
  n33 --> n32
  n34 --> n1
  n34 --> n17
  n34 --> n18
  n34 --> n33
  n35 --> n5
  n36 --> n5
  n36 --> n6
  n36 --> n7
  n37 --> n6
  n37 --> n5
  n37 --> n7
  n37 --> n35
  n37 --> n36
  n38 --> n5
  n38 --> n6
  n38 --> n21
  n39 --> n1
  n39 --> n17
  n39 --> n6
  n39 --> n18
  n39 --> n7
  n39 --> n22
  n39 --> n29
  n39 --> n34
  n39 --> n37
  n39 --> n38
  n40 --> n1
  n40 --> n4
  n40 --> n17
  n40 --> n6
  n40 --> n18
  n40 --> n7
  n40 --> n39
  n41 --> n17
  n41 --> n1
  n41 --> n11
  n41 --> n14
  n42 --> n6
  n43 --> n8
  n43 --> n18
  n44 --> n8
  n44 --> n18
  n44 --> n43
  n45 --> n8
  n45 --> n6
  n45 --> n18
  n45 --> n42
  n45 --> n44
  n46 --> n1
  n47 --> n11
  n47 --> n14
  n47 --> n15
  n47 --> n12
  n47 --> n10
  n47 --> n23
  n48 --> n11
  n48 --> n14
  n48 --> n15
  n48 --> n12
  n48 --> n10
  n48 --> n24
  n49 --> n1
  n49 --> n16
  n49 --> n11
  n49 --> n14
  n49 --> n47
  n49 --> n48
  n51 --> n17
  n51 --> n1
  n51 --> n18
  n51 --> n41
  n51 --> n16
  n51 --> n46
  n51 --> n11
  n51 --> n14
  n51 --> n49
  n51 --> n50
  n52 --> n1
  n52 --> n4
  n52 --> n7
  n52 --> n17
  n52 --> n18
  n52 --> n40
  n52 --> n41
  n52 --> n45
  n52 --> n51
  n53 --> n1
  n53 --> n4
  n53 --> n7
  n53 --> n17
  n53 --> n18
  n53 --> n21
  n53 --> n52
  class n53 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
