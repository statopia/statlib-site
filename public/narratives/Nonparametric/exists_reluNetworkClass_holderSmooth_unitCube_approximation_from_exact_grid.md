# Proof narrative — exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid

Root: **exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid** (theorem) `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:10932` · topic `Nonparametric`
Closure: 60 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `finiteCenteredMonomialPolynomialDepthBound` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:137`  _(also used by 10: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_symbolic_budget, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_coefficient_budget, …)_
    ◆ `centeredMonomialWidthBound` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:107`
  ◆ `finiteCenteredMonomialPolynomialWidthBound` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:143`  _(also used by 11: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_symbolic_budget, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_coefficient_budget, …)_
  ◆ `fullyConnectedReLUParameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:70`  _(also used by 40: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_linear_combination_approx, …)_
  ◆ `finiteCenteredMonomialPolynomialParameterBound` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:149`  _(also used by 8: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_symbolic_budget, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_coefficient_budget, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 22: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 19: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `IsHolderSmoothFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:73`  _(also used by 2: unit_cube_bspline_zero_order_holder_projection_rate_of_support_node, tensor_product_linear_bspline_holder_projection_rate_of_local_partition)_
    ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:60`  _(also used by 14: holder_ball_class_approximation_error_self_le_zero, selector_indicator_uniform_sieve_holder_approximation_bound, exists_selector_indicator_sieve_holder_approximation_bound_of_finite_net, …)_
  ◆ `holderSmoothBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:86`  _(also used by 73: holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box, …)_
  ◆ `centeredMonomialApproxError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:79`  _(also used by 7: exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_coefficient_budget, finite_holderSmooth_local_table_reluNetworkClass_active_cell_error_bound, exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, …)_
        ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 15: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box, …)_
      ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 8: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
    ◆ `parameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:39`  _(also used by 24: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
    ▣ `FullyConnectedReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:167`  _(also used by 34: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
      ▣ `OneHiddenReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:47`  _(also used by 3: parameterCount, mulPolarizationReLUHingeNet, oneHiddenReLUEmpiricalRisk)_
  ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 25: exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound, …)_
    ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 63: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
    ◆ `realize` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:55`  _(also used by 37: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
  ◆ `reluNetworkClass` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:219`  _(also used by 40: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
    ◆ `coordinateTentReLUFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:339`  _(also used by 4: coordinateTentReLUFunction_mem_reluNetworkClass_with_parameter_bound, exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, exists_unitCube_axisAlignedBoxTentWeight_partition_data, …)_
    ◆ `axisAlignedBoxTentWeight` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:379`  _(also used by 11: axisAlignedBoxTentWeight_partition_pointwise_approximation_error_bound, finite_axisAligned_tent_weighted_local_reluNetworkClass_global_error_bound, exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, …)_
  ★ `exists_unitCube_axisAlignedBoxTentWeight_partition_data_with_domain_coord_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:10077`  _(also used by 1: exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid_and_error_budget)_
  ★ `finite_taylor_coefficient_table_admits_nonnegative_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:9756`
    ★ `kohler_domain_final_budget_constraints_from_exact_schedule` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:10725`
      ◆ `finiteCenteredMonomialPolynomialApproxError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:157`  _(also used by 5: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_symbolic_budget, exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_coefficient_budget, …)_
      ◆ `finiteLinearCombination` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:384`  _(also used by 17: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
          ◆ `toFullyConnected` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:207`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
        ◆ `reluVec` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:19`  _(also used by 12: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ◆ `reluApply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:34`  _(also used by 12: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ◆ `hiddenState` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:182`  _(also used by 13: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
          ★ `exists_fullyConnectedReLUNet_linear_combination_two` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:714`  _(also used by 2: exists_fullyConnectedReLUNet_linear_combination_two_approx, exists_fullyConnectedReLUNet_quadratic_two_term_approx_on_box)_
            ◆ `intervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:292`  _(also used by 1: mulPolarizationReLUHingeNet)_
            ◆ `squareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:270`  _(also used by 1: exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
            ◆ `unitIntervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:277`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
            ★ `unitIntervalSquareReLUHingeNet_realize` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:160`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
            ◆ `intervalSquareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:286`
            ◆ `squareSecantInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:260`
            ◆ `squareCellInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:265`
            ★ `squareReLUHingeInterpolant_error_le_of_mem_cell` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:18`
            ★ `squareReLUHingeInterpolant_error_le_of_mem_unitInterval` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:191`  _(also used by 2: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
            ★ `exists_fullyConnectedReLUNet_interval_square_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:253`
          ★ `exists_fullyConnectedReLUNet_mul_approx_on_box` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:462`  _(also used by 4: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ★ `exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:4478`  _(also used by 2: exists_reluNetworkClass_holderSmooth_local_approx_on_centered_box_with_symbolic_budget, finite_holderSmooth_local_table_reluNetworkClass_active_cell_error_bound)_
      ★ `taylor_polynomial_as_finite_centered_coordinate_polynomial` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:4315`  _(also used by 4: exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_depth_bound, …)_
      ★ `exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_size_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:5979`  _(also used by 1: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound)_
      ★ `holderSmoothBall_taylor_remainder_bound_on_box` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:2533`  _(also used by 3: holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_size_bound, exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box)_
    ★ `finite_holderSmooth_local_table_reluNetworkClass_active_cell_error_and_domain_output_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:9481`
        ◆ `coordinateTentReLUNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:346`  _(also used by 1: coordinateTentReLUFunction_mem_reluNetworkClass_with_parameter_bound)_
        ★ `coordinateTentReLUNet_realize` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6701`
        ★ `exists_fullyConnectedReLUNet_product_approx_on_box_with_size_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6841`
      ★ `exists_reluNetworkClass_axisAlignedBoxTentWeight_approx_with_size_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:7709`  _(also used by 2: exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, exists_reluNetworkClass_axisAlignedBoxTentWeight_fixed_width_depth_rate_from_mul_gadget)_
      ★ `axisAlignedBoxTentWeight_bounds_and_support` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6788`  _(also used by 5: axisAlignedBoxTentWeight_partition_pointwise_approximation_error_bound, exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, exists_reluNetworkClass_axisAlignedBoxTentWeight_fixed_width_depth_rate_from_mul_gadget, …)_
      ★ `exists_reluNetworkClass_weighted_local_product_approx_with_size_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:8161`  _(also used by 1: exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound)_
          ★ `exists_fullyConnectedReLUNet_finite_linear_combination_same_depth_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6427`
        ★ `finite_linear_combination_same_depth_reluNetworkClass_approximation_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:7647`  _(also used by 1: finite_axisAligned_tent_weighted_local_reluNetworkClass_global_error_bound)_
      ★ `finite_linear_combination_reluNetworkClass_approximation_bound_from_class_members` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:8259`  _(also used by 4: exists_reluNetworkClass_holderSmooth_axisAligned_tent_partition_approximation_on_domain_bound, exists_reluNetworkClass_mul_fixed_width_depth_rate_on_box, exists_reluNetworkClass_finite_centered_monomial_polynomial_fixed_width_depth_rate_from_mul_gadget, …)_
    ★ `exists_reluNetworkClass_axisAligned_tent_partition_approximation_from_bounded_local_table_on_domain` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:9155`
  ★ `exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_geometry_and_coefficient_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:10796`  _(also used by 1: exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid_and_error_budget)_
★ `exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:10932` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ finiteCenteredMonomialPolynomialDepthBound"]
  n1["◆ centeredMonomialWidthBound"]
  n2["◆ finiteCenteredMonomialPolynomialWidthBound"]
  n3["◆ fullyConnectedReLUParameterCount"]
  n4["◆ finiteCenteredMonomialPolynomialParameterBound"]
  n5["◆ FunctionClass"]
  n6["◆ IsHolderFunction"]
  n7["◆ IsHolderSmoothFunction"]
  n8["◆ holderBall"]
  n9["◆ holderSmoothBall"]
  n10["◆ centeredMonomialApproxError"]
  n11["◆ bias"]
  n12["▣ DenseLayer"]
  n13["◆ parameterCount"]
  n14["▣ FullyConnectedReLUNet"]
  n15["▣ OneHiddenReLUNet"]
  n16["◆ relu"]
  n17["◆ apply"]
  n18["◆ realize"]
  n19["◆ reluNetworkClass"]
  n20["◆ coordinateTentReLUFunction"]
  n21["◆ axisAlignedBoxTentWeight"]
  n22["★ exists_unitCube_axisAlignedBoxTentWeight_partition_data_with_domain_coord_bound"]
  n23["★ finite_taylor_coefficient_table_admits_nonnegative_bound"]
  n24["★ kohler_domain_final_budget_constraints_from_exact_schedule"]
  n25["◆ finiteCenteredMonomialPolynomialApproxError"]
  n26["◆ finiteLinearCombination"]
  n27["◆ toFullyConnected"]
  n28["◆ reluVec"]
  n29["◆ reluApply"]
  n30["◆ hiddenState"]
  n31["★ exists_fullyConnectedReLUNet_linear_combination_two"]
  n32["◆ intervalSquareReLUHingeNet"]
  n33["◆ squareReLUHingeInterpolant"]
  n34["◆ unitIntervalSquareReLUHingeNet"]
  n35["★ unitIntervalSquareReLUHingeNet_realize"]
  n36["◆ intervalSquareReLUHingeInterpolant"]
  n37["◆ squareSecantInterpolant"]
  n38["◆ squareCellInterpolant"]
  n39["★ squareReLUHingeInterpolant_error_le_of_mem_cell"]
  n40["★ squareReLUHingeInterpolant_error_le_of_mem_unitInterval"]
  n41["★ exists_fullyConnectedReLUNet_interval_square_approx"]
  n42["★ exists_fullyConnectedReLUNet_mul_approx_on_box"]
  n43["★ exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound"]
  n44["★ taylor_polynomial_as_finite_centered_coordinate_polynomial"]
  n45["★ exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_size_bound"]
  n46["★ holderSmoothBall_taylor_remainder_bound_on_box"]
  n47["★ finite_holderSmooth_local_table_reluNetworkClass_active_cell_error_and_domain_output_bound"]
  n48["◆ coordinateTentReLUNet"]
  n49["★ coordinateTentReLUNet_realize"]
  n50["★ exists_fullyConnectedReLUNet_product_approx_on_box_with_size_bound"]
  n51["★ exists_reluNetworkClass_axisAlignedBoxTentWeight_approx_with_size_bound"]
  n52["★ axisAlignedBoxTentWeight_bounds_and_support"]
  n53["★ exists_reluNetworkClass_weighted_local_product_approx_with_size_bound"]
  n54["★ exists_fullyConnectedReLUNet_finite_linear_combination_same_depth_approx"]
  n55["★ finite_linear_combination_same_depth_reluNetworkClass_approximation_bound"]
  n56["★ finite_linear_combination_reluNetworkClass_approximation_bound_from_class_members"]
  n57["★ exists_reluNetworkClass_axisAligned_tent_partition_approximation_from_bounded_local_table_on_domain"]
  n58["★ exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_geometry_and_coefficient_bound"]
  n59["★ exists_reluNetworkClass_holderSmooth_unitCube_approximation_from_exact_grid"]
  n2 --> n1
  n4 --> n3
  n4 --> n0
  n4 --> n2
  n7 --> n6
  n8 --> n5
  n8 --> n6
  n9 --> n5
  n9 --> n7
  n9 --> n6
  n9 --> n8
  n12 --> n11
  n13 --> n12
  n14 --> n12
  n15 --> n12
  n17 --> n12
  n17 --> n11
  n18 --> n15
  n18 --> n16
  n18 --> n17
  n19 --> n13
  n19 --> n5
  n19 --> n14
  n19 --> n18
  n20 --> n16
  n21 --> n20
  n22 --> n21
  n22 --> n16
  n22 --> n20
  n22 --> n17
  n24 --> n3
  n25 --> n10
  n27 --> n15
  n27 --> n14
  n28 --> n16
  n29 --> n12
  n29 --> n28
  n29 --> n17
  n30 --> n14
  n30 --> n29
  n31 --> n14
  n31 --> n13
  n31 --> n18
  n31 --> n11
  n31 --> n3
  n31 --> n30
  n31 --> n29
  n31 --> n28
  n31 --> n17
  n32 --> n15
  n32 --> n11
  n33 --> n16
  n34 --> n15
  n34 --> n11
  n35 --> n34
  n35 --> n18
  n35 --> n33
  n35 --> n17
  n35 --> n16
  n36 --> n16
  n36 --> n33
  n38 --> n37
  n39 --> n33
  n39 --> n38
  n39 --> n16
  n39 --> n17
  n39 --> n37
  n40 --> n33
  n40 --> n39
  n41 --> n14
  n41 --> n13
  n41 --> n18
  n41 --> n32
  n41 --> n3
  n41 --> n33
  n41 --> n16
  n41 --> n17
  n41 --> n34
  n41 --> n35
  n41 --> n27
  n41 --> n30
  n41 --> n29
  n41 --> n28
  n41 --> n36
  n41 --> n40
  n42 --> n14
  n42 --> n13
  n42 --> n18
  n42 --> n41
  n42 --> n11
  n42 --> n3
  n42 --> n17
  n42 --> n30
  n42 --> n29
  n42 --> n28
  n42 --> n16
  n43 --> n14
  n43 --> n0
  n43 --> n2
  n43 --> n13
  n43 --> n4
  n43 --> n18
  n43 --> n26
  n43 --> n25
  n43 --> n1
  n43 --> n10
  n43 --> n27
  n43 --> n11
  n43 --> n30
  n43 --> n29
  n43 --> n17
  n43 --> n28
  n43 --> n16
  n43 --> n31
  n43 --> n42
  n43 --> n12
  n43 --> n3
  n44 --> n26
  n44 --> n17
  n45 --> n14
  n45 --> n0
  n45 --> n2
  n45 --> n13
  n45 --> n4
  n45 --> n18
  n45 --> n25
  n45 --> n43
  n45 --> n44
  n46 --> n9
  n46 --> n6
  n46 --> n17
  n47 --> n0
  n47 --> n2
  n47 --> n4
  n47 --> n9
  n47 --> n10
  n47 --> n16
  n47 --> n19
  n47 --> n25
  n47 --> n17
  n47 --> n45
  n47 --> n18
  n47 --> n26
  n47 --> n44
  n47 --> n46
  n48 --> n14
  n48 --> n11
  n49 --> n48
  n49 --> n18
  n49 --> n20
  n49 --> n17
  n49 --> n29
  n49 --> n16
  n49 --> n28
  n49 --> n30
  n50 --> n14
  n50 --> n18
  n50 --> n13
  n50 --> n3
  n50 --> n12
  n50 --> n29
  n50 --> n28
  n50 --> n17
  n50 --> n16
  n50 --> n30
  n50 --> n42
  n50 --> n11
  n51 --> n3
  n51 --> n19
  n51 --> n21
  n51 --> n14
  n51 --> n13
  n51 --> n18
  n51 --> n20
  n51 --> n11
  n51 --> n48
  n51 --> n49
  n51 --> n16
  n51 --> n50
  n52 --> n21
  n52 --> n16
  n52 --> n20
  n53 --> n14
  n53 --> n18
  n53 --> n3
  n53 --> n19
  n53 --> n50
  n54 --> n14
  n54 --> n18
  n54 --> n13
  n54 --> n3
  n54 --> n26
  n54 --> n12
  n54 --> n11
  n54 --> n29
  n54 --> n17
  n54 --> n28
  n54 --> n30
  n55 --> n14
  n55 --> n3
  n55 --> n18
  n55 --> n19
  n55 --> n26
  n55 --> n54
  n56 --> n19
  n56 --> n3
  n56 --> n26
  n56 --> n14
  n56 --> n18
  n56 --> n12
  n56 --> n29
  n56 --> n28
  n56 --> n16
  n56 --> n17
  n56 --> n30
  n56 --> n13
  n56 --> n55
  n57 --> n21
  n57 --> n19
  n57 --> n16
  n57 --> n3
  n57 --> n14
  n57 --> n18
  n57 --> n51
  n57 --> n52
  n57 --> n53
  n57 --> n56
  n57 --> n26
  n57 --> n17
  n58 --> n0
  n58 --> n2
  n58 --> n4
  n58 --> n10
  n58 --> n3
  n58 --> n9
  n58 --> n21
  n58 --> n16
  n58 --> n19
  n58 --> n24
  n58 --> n47
  n58 --> n57
  n59 --> n0
  n59 --> n2
  n59 --> n4
  n59 --> n3
  n59 --> n9
  n59 --> n10
  n59 --> n19
  n59 --> n22
  n59 --> n23
  n59 --> n16
  n59 --> n58
  class n59 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
