# Proof narrative — exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_depth_bound

Root: **exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_depth_bound** (theorem) `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6135` · topic `Nonparametric`
Closure: 31 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 18: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, …)_
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 10: exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound, …)_
  ▣ `FullyConnectedReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:167`  _(also used by 41: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
    ▣ `OneHiddenReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:47`  _(also used by 3: parameterCount, mulPolarizationReLUHingeNet, oneHiddenReLUEmpiricalRisk)_
    ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 36: exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound, …)_
    ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 71: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
  ◆ `realize` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:55`  _(also used by 45: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
    ◆ `finiteLinearCombination` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:384`  _(also used by 21: exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, …)_
    ◆ `reluVec` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:19`  _(also used by 16: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
    ◆ `reluApply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:34`  _(also used by 16: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
    ◆ `hiddenState` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:182`  _(also used by 17: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
      ◆ `parameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:39`  _(also used by 29: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
        ◆ `intervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:292`  _(also used by 1: mulPolarizationReLUHingeNet)_
      ◆ `fullyConnectedReLUParameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:70`  _(also used by 51: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box, …)_
        ◆ `squareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:270`  _(also used by 1: exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
        ◆ `unitIntervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:277`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
        ★ `unitIntervalSquareReLUHingeNet_realize` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:160`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
        ◆ `toFullyConnected` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:207`  _(also used by 2: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound)_
        ◆ `intervalSquareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:286`
            ◆ `squareSecantInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:260`
            ◆ `squareCellInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:265`
          ★ `squareReLUHingeInterpolant_error_le_of_mem_cell` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:18`
        ★ `squareReLUHingeInterpolant_error_le_of_mem_unitInterval` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:191`  _(also used by 2: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
      ★ `exists_fullyConnectedReLUNet_interval_square_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:253`
    ★ `exists_fullyConnectedReLUNet_mul_approx_on_box` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:462`  _(also used by 5: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
        ★ `exists_fullyConnectedReLUNet_linear_combination_two` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:714`  _(also used by 2: exists_fullyConnectedReLUNet_quadratic_two_term_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound)_
      ★ `exists_fullyConnectedReLUNet_linear_combination_two_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:844`  _(also used by 1: exists_fullyConnectedReLUNet_finite_quadratic_polynomial_approx_on_box)_
    ★ `exists_fullyConnectedReLUNet_finite_linear_combination_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:964`
  ★ `exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:2728`  _(also used by 1: exists_fullyConnectedReLUNet_holderSmooth_local_approx_on_centered_box_with_depth_bound)_
  ★ `taylor_polynomial_as_finite_centered_coordinate_polynomial` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:4315`  _(also used by 5: exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box, holderSmoothBall_finite_centered_coordinate_polynomial_error_on_norm_ball, exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_size_bound, …)_
★ `exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_depth_bound` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:6135` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bias"]
  n1["▣ DenseLayer"]
  n2["▣ FullyConnectedReLUNet"]
  n3["▣ OneHiddenReLUNet"]
  n4["◆ relu"]
  n5["◆ apply"]
  n6["◆ realize"]
  n7["◆ finiteLinearCombination"]
  n8["◆ reluVec"]
  n9["◆ reluApply"]
  n10["◆ hiddenState"]
  n11["◆ parameterCount"]
  n12["◆ intervalSquareReLUHingeNet"]
  n13["◆ fullyConnectedReLUParameterCount"]
  n14["◆ squareReLUHingeInterpolant"]
  n15["◆ unitIntervalSquareReLUHingeNet"]
  n16["★ unitIntervalSquareReLUHingeNet_realize"]
  n17["◆ toFullyConnected"]
  n18["◆ intervalSquareReLUHingeInterpolant"]
  n19["◆ squareSecantInterpolant"]
  n20["◆ squareCellInterpolant"]
  n21["★ squareReLUHingeInterpolant_error_le_of_mem_cell"]
  n22["★ squareReLUHingeInterpolant_error_le_of_mem_unitInterval"]
  n23["★ exists_fullyConnectedReLUNet_interval_square_approx"]
  n24["★ exists_fullyConnectedReLUNet_mul_approx_on_box"]
  n25["★ exists_fullyConnectedReLUNet_linear_combination_two"]
  n26["★ exists_fullyConnectedReLUNet_linear_combination_two_approx"]
  n27["★ exists_fullyConnectedReLUNet_finite_linear_combination_approx"]
  n28["★ exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound"]
  n29["★ taylor_polynomial_as_finite_centered_coordinate_polynomial"]
  n30["★ exists_fullyConnectedReLUNet_taylor_polynomial_approx_on_centered_box_with_depth_bound"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n5 --> n1
  n5 --> n0
  n6 --> n3
  n6 --> n4
  n6 --> n5
  n8 --> n4
  n9 --> n1
  n9 --> n8
  n9 --> n5
  n10 --> n2
  n10 --> n9
  n11 --> n1
  n12 --> n3
  n12 --> n0
  n14 --> n4
  n15 --> n3
  n15 --> n0
  n16 --> n15
  n16 --> n6
  n16 --> n14
  n16 --> n5
  n16 --> n4
  n17 --> n3
  n17 --> n2
  n18 --> n4
  n18 --> n14
  n20 --> n19
  n21 --> n14
  n21 --> n20
  n21 --> n4
  n21 --> n5
  n21 --> n19
  n22 --> n14
  n22 --> n21
  n23 --> n2
  n23 --> n11
  n23 --> n6
  n23 --> n12
  n23 --> n13
  n23 --> n14
  n23 --> n4
  n23 --> n5
  n23 --> n15
  n23 --> n16
  n23 --> n17
  n23 --> n10
  n23 --> n9
  n23 --> n8
  n23 --> n18
  n23 --> n22
  n24 --> n2
  n24 --> n11
  n24 --> n6
  n24 --> n23
  n24 --> n0
  n24 --> n13
  n24 --> n5
  n24 --> n10
  n24 --> n9
  n24 --> n8
  n24 --> n4
  n25 --> n2
  n25 --> n11
  n25 --> n6
  n25 --> n0
  n25 --> n13
  n25 --> n10
  n25 --> n9
  n25 --> n8
  n25 --> n5
  n26 --> n2
  n26 --> n6
  n26 --> n11
  n26 --> n25
  n27 --> n2
  n27 --> n6
  n27 --> n11
  n27 --> n7
  n27 --> n0
  n27 --> n1
  n27 --> n13
  n27 --> n26
  n28 --> n2
  n28 --> n6
  n28 --> n7
  n28 --> n4
  n28 --> n10
  n28 --> n5
  n28 --> n9
  n28 --> n8
  n28 --> n24
  n28 --> n1
  n28 --> n0
  n28 --> n27
  n29 --> n7
  n29 --> n5
  n30 --> n2
  n30 --> n6
  n30 --> n28
  n30 --> n29
  class n30 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
