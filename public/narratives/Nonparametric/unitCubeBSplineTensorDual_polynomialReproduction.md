# Proof narrative — unitCubeBSplineTensorDual_polynomialReproduction

Root: **unitCubeBSplineTensorDual_polynomialReproduction** (theorem) `Statlib/Nonparametric/Approximation/SplineFacts.lean:2551` · topic `Nonparametric`
Closure: 25 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `TensorProductSplineSystem` — structure · `Statlib/Nonparametric/Vocabulary/Spline.lean:21`  _(also used by 21: tensor_product_spline_sieve_series_function_measurable, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_exists_pointwise_series, tensor_product_spline_sieve_holder_smooth_approximation_bound_of_pointwise_approximation, …)_
      ◆ `unitCubeDomain` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:52`  _(also used by 4: unit_cube_dyadic_grid_finite_measurable_cover_basis_rate, unit_cube_haar_selector_zero_order_uniform_sieve_holder_approximation_rate, unit_cube_haar_selector_positive_holder_uniform_sieve_approximation_rate, …)_
  ◆ `splineUnitCubeDomain` — abbrev · `Statlib/Nonparametric/Vocabulary/Spline.lean:170`  _(also used by 32: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, …)_
    ◆ `positiveDegreeCardinalBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:82`  _(also used by 11: positiveDegreeCardinalBSpline_continuous, positiveDegreeCardinalBSpline_succ_eq_weighted_adjacent, sum_positiveDegreeExtendedUniformBSpline_eq_one_of_mem_Icc, …)_
    ◆ `positiveDegreeUniformBSplineIntShift` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:113`  _(also used by 9: positiveDegreeUniformBSplineIntShift_continuous, positiveDegreeUniformBSplineIntShift_eq_zero_of_shift_add_degree_plus_two_le_scaled, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift, …)_
        ◆ `positiveDegreeExtendedBSplineShift` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:120`  _(also used by 12: positiveDegreeExtendedUniformBSpline_continuous, positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift, …)_
  ◆ `positiveDegreeExtendedUniformBSpline` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:126`  _(also used by 13: positiveDegreeExtendedUniformBSpline_continuous, positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift, …)_
  ◆ `tensorProductGridEquiv` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:46`  _(also used by 7: sum_tensorProductPositiveDegreeExtendedBSplineBasis_eq_prod_sum, unitCubeBSplineTensorDual_polynomialReproduction_degreeSucc, unitCubeBSplineTensorDual_localStability, …)_
  ◆ `tensorProductGridIndex` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:52`  _(also used by 20: tensorProductLinearBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_continuous, tensorProductPositiveDegreeBSplineBasis_eq_zero_of_exists_scaled_le_index, …)_
  ◆ `tensorProductPositiveDegreeExtendedBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:133`  _(also used by 12: tensorProductPositiveDegreeExtendedBSplineBasis_continuous, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_shift_add_degree_plus_two_le_scaled, …)_
    ◆ `unitCubePositiveDegreeExtendedBSplineBasis` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:187`  _(also used by 12: unitCubePositiveDegreeExtendedBSplineBasis_ne_zero_imp_coord_scaled_mem_Ioo, unitCubePositiveDegreeExtendedBSplineBasis_continuous, unitCubePositiveDegreeExtendedBSplineBasis_nonneg, …)_
  ◆ `unitCubePositiveDegreeExtendedBSplineSystem` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Spline.lean:193`  _(also used by 27: unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_grid_rate, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 67: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
  ◆ `tensorProductSplineSieve` — def · `Statlib/Nonparametric/Vocabulary/Spline.lean:158`  _(also used by 52: tensor_product_spline_sieve_series_function_measurable, unit_cube_bspline_sieve_approximation_error_bound_of_local_error, unit_cube_bspline_uniform_sieve_holder_approximation_error_bound_of_local_error, …)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 77: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
          ★ `positiveDegreeCardinalBSpline_eq_zero_of_ge_degree_plus_two` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:52`  _(also used by 6: positiveDegreeUniformBSplineIntShift_eq_zero_of_shift_add_degree_plus_two_le_scaled, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_shift_add_degree_plus_two_le_scaled, positiveDegreeCardinalBSpline_succ_eq_weighted_adjacent, …)_
        ★ `positiveDegreeExtendedUniformBSpline_eq_zero_of_shift_add_degree_plus_two_le_scaled` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:344`  _(also used by 1: positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo)_
          ★ `positiveDegreeCardinalBSpline_eq_zero_of_nonpos` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:32`  _(also used by 6: positiveDegreeUniformBSpline_eq_zero_of_scaled_le_index, tensorProductPositiveDegreeExtendedBSplineBasis_eq_zero_of_exists_scaled_le_shift, positiveDegreeCardinalBSpline_succ_eq_weighted_adjacent, …)_
        ★ `positiveDegreeUniformBSplineIntShift_eq_zero_of_scaled_le_shift` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:319`  _(also used by 2: positiveDegreeExtendedUniformBSpline_ne_zero_imp_scaled_mem_Ioo, unitCubePositiveDegreeExtendedBSplineDual_exists_uniform_reproducing_degreeSucc_localStability)_
      ★ `positiveDegreeExtendedUniformBSpline_linearIndependent_on_Icc` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:373`
    ★ `unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:954`  _(also used by 2: unitCubeBSplineTensorDual_polynomialReproduction_degreeSucc, unitCubePositiveDegreeExtendedBSplineDual_exists_reproducing_degreeSucc_localStability)_
  ★ `unitCubePositiveDegreeExtendedBSplineDual_polynomialEval_fin_linear` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:1016`
★ `unitCubeBSplineTensorDual_polynomialReproduction` — theorem · `Statlib/Nonparametric/Approximation/SplineFacts.lean:2551` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ TensorProductSplineSystem"]
  n1["◆ unitCubeDomain"]
  n2["◆ splineUnitCubeDomain"]
  n3["◆ positiveDegreeCardinalBSpline"]
  n4["◆ positiveDegreeUniformBSplineIntShift"]
  n5["◆ positiveDegreeExtendedBSplineShift"]
  n6["◆ positiveDegreeExtendedUniformBSpline"]
  n7["◆ tensorProductGridEquiv"]
  n8["◆ tensorProductGridIndex"]
  n9["◆ tensorProductPositiveDegreeExtendedBSplineBasis"]
  n10["◆ unitCubePositiveDegreeExtendedBSplineBasis"]
  n11["◆ unitCubePositiveDegreeExtendedBSplineSystem"]
  n12["◆ seriesFunction"]
  n13["◆ tensorProductSplineSieve"]
  n14["◆ bias"]
  n15["▣ DenseLayer"]
  n16["◆ apply"]
  n17["★ positiveDegreeCardinalBSpline_eq_zero_of_ge_degree_plus_two"]
  n18["★ positiveDegreeExtendedUniformBSpline_eq_zero_of_shift_add_degree_plus_two_le_scaled"]
  n19["★ positiveDegreeCardinalBSpline_eq_zero_of_nonpos"]
  n20["★ positiveDegreeUniformBSplineIntShift_eq_zero_of_scaled_le_shift"]
  n21["★ positiveDegreeExtendedUniformBSpline_linearIndependent_on_Icc"]
  n22["★ unitCubePositiveDegreeExtendedBSplineBasis_linearIndependent_oneDim"]
  n23["★ unitCubePositiveDegreeExtendedBSplineDual_polynomialEval_fin_linear"]
  n24["★ unitCubeBSplineTensorDual_polynomialReproduction"]
  n2 --> n1
  n4 --> n3
  n6 --> n4
  n6 --> n5
  n8 --> n7
  n9 --> n6
  n9 --> n8
  n10 --> n2
  n10 --> n9
  n11 --> n0
  n11 --> n2
  n11 --> n10
  n11 --> n9
  n11 --> n6
  n11 --> n4
  n11 --> n3
  n13 --> n0
  n15 --> n14
  n16 --> n15
  n16 --> n14
  n17 --> n3
  n18 --> n5
  n18 --> n6
  n18 --> n4
  n18 --> n17
  n19 --> n3
  n20 --> n4
  n20 --> n19
  n21 --> n6
  n21 --> n16
  n21 --> n18
  n21 --> n5
  n21 --> n20
  n21 --> n3
  n21 --> n4
  n22 --> n11
  n22 --> n2
  n22 --> n10
  n22 --> n8
  n22 --> n7
  n22 --> n6
  n22 --> n9
  n22 --> n21
  n23 --> n11
  n23 --> n2
  n23 --> n12
  n23 --> n13
  n23 --> n10
  n23 --> n16
  n23 --> n22
  n24 --> n11
  n24 --> n2
  n24 --> n12
  n24 --> n13
  n24 --> n8
  n24 --> n9
  n24 --> n16
  n24 --> n6
  n24 --> n7
  n24 --> n23
  class n24 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
