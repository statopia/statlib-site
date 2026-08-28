# Proof narrative — exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box

Root: **exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box** (theorem) `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:1144` · topic `Nonparametric`
Closure: 25 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 20: exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_linear_combination_approx, …)_
  ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 11: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound, …)_
  ▣ `FullyConnectedReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:167`  _(also used by 45: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
    ▣ `OneHiddenReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:47`  _(also used by 3: parameterCount, mulPolarizationReLUHingeNet, oneHiddenReLUEmpiricalRisk)_
  ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 36: exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound, …)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 73: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
  ◆ `realize` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:55`  _(also used by 49: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
  ◆ `parameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:39`  _(also used by 31: reluNetworkClass_classApproximationError_le_of_pointwise_candidate, reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, …)_
  ◆ `fullyConnectedReLUParameterCount` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:70`  _(also used by 52: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
      ◆ `intervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:292`  _(also used by 1: mulPolarizationReLUHingeNet)_
      ◆ `squareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:270`  _(also used by 1: exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
      ◆ `unitIntervalSquareReLUHingeNet` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:277`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
      ★ `unitIntervalSquareReLUHingeNet_realize` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:160`  _(also used by 1: exists_fullyConnectedReLUNet_unitInterval_square_approx)_
      ◆ `toFullyConnected` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:207`  _(also used by 2: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_uniform_resolution_size_bound)_
  ◆ `reluVec` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:19`  _(also used by 17: exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `reluApply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:34`  _(also used by 17: exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `hiddenState` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:182`  _(also used by 18: exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
      ◆ `intervalSquareReLUHingeInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:286`
          ◆ `squareSecantInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:260`
          ◆ `squareCellInterpolant` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:265`
        ★ `squareReLUHingeInterpolant_error_le_of_mem_cell` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:18`
      ★ `squareReLUHingeInterpolant_error_le_of_mem_unitInterval` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:191`  _(also used by 2: exists_fullyConnectedReLUNet_unitInterval_square_approx, exists_reluNetworkClass_unitInterval_square_fixed_width_depth_rate)_
    ★ `exists_fullyConnectedReLUNet_interval_square_approx` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:253`
  ★ `exists_fullyConnectedReLUNet_mul_approx_on_box` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:462`  _(also used by 5: exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box_with_depth_bound, …)_
★ `exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean:1144` **← headline**

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
  n7["◆ parameterCount"]
  n8["◆ fullyConnectedReLUParameterCount"]
  n9["◆ intervalSquareReLUHingeNet"]
  n10["◆ squareReLUHingeInterpolant"]
  n11["◆ unitIntervalSquareReLUHingeNet"]
  n12["★ unitIntervalSquareReLUHingeNet_realize"]
  n13["◆ toFullyConnected"]
  n14["◆ reluVec"]
  n15["◆ reluApply"]
  n16["◆ hiddenState"]
  n17["◆ intervalSquareReLUHingeInterpolant"]
  n18["◆ squareSecantInterpolant"]
  n19["◆ squareCellInterpolant"]
  n20["★ squareReLUHingeInterpolant_error_le_of_mem_cell"]
  n21["★ squareReLUHingeInterpolant_error_le_of_mem_unitInterval"]
  n22["★ exists_fullyConnectedReLUNet_interval_square_approx"]
  n23["★ exists_fullyConnectedReLUNet_mul_approx_on_box"]
  n24["★ exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n5 --> n1
  n5 --> n0
  n6 --> n3
  n6 --> n4
  n6 --> n5
  n7 --> n1
  n9 --> n3
  n9 --> n0
  n10 --> n4
  n11 --> n3
  n11 --> n0
  n12 --> n11
  n12 --> n6
  n12 --> n10
  n12 --> n5
  n12 --> n4
  n13 --> n3
  n13 --> n2
  n14 --> n4
  n15 --> n1
  n15 --> n14
  n15 --> n5
  n16 --> n2
  n16 --> n15
  n17 --> n4
  n17 --> n10
  n19 --> n18
  n20 --> n10
  n20 --> n19
  n20 --> n4
  n20 --> n5
  n20 --> n18
  n21 --> n10
  n21 --> n20
  n22 --> n2
  n22 --> n7
  n22 --> n6
  n22 --> n9
  n22 --> n8
  n22 --> n10
  n22 --> n4
  n22 --> n5
  n22 --> n11
  n22 --> n12
  n22 --> n13
  n22 --> n16
  n22 --> n15
  n22 --> n14
  n22 --> n17
  n22 --> n21
  n23 --> n2
  n23 --> n7
  n23 --> n6
  n23 --> n22
  n23 --> n0
  n23 --> n8
  n23 --> n5
  n23 --> n16
  n23 --> n15
  n23 --> n14
  n23 --> n4
  n24 --> n2
  n24 --> n6
  n24 --> n7
  n24 --> n8
  n24 --> n23
  n24 --> n1
  n24 --> n0
  n24 --> n15
  n24 --> n16
  n24 --> n14
  n24 --> n5
  n24 --> n4
  class n24 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
