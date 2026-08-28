# Proof narrative — kernel_smoother_classApproximationError_le_of_holder_bias_rate

Root: **kernel_smoother_classApproximationError_le_of_holder_bias_rate** (theorem) `Statlib/Nonparametric/Approximation/Kernel.lean:265` · topic `Nonparametric`
Closure: 14 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, classApproximationError_le_of_member_ise, …)_
  ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 5: kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_regression_bias_ise_bound, kernelL2Energy, …)_
  ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 20: holder_net_sup_approximation_bound, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `kernelSmoother` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:39`  _(also used by 16: kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_uniform_interior_population_smoother_eq, kernel_regression_centered_integrability_of_centered_sum_integrability, …)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 31: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
  ◆ `kernelMoment` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:45`  _(also used by 2: kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_regression_bias_ise_bound)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_class_approximation_error_le_of_net_member, holder_ball_class_approximation_error_self_le_zero, …)_
    ★ `kernel_holder_bias_normalized` — theorem · `Statlib/Nonparametric/Approximation/Kernel.lean:17`
      ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
      ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
    ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 79: unit_cube_grid_finite_measurable_cover, classApproximationError_le_of_exists_pointwise_bound, integratedSquaredError_nonneg, …)_
    ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, selector_indicator_holder_series_integrated_squared_error_bound, …)_
  ★ `kernel_holder_bias_integratedSquaredError_bound` — theorem · `Statlib/Nonparametric/Approximation/Kernel.lean:176`  _(also used by 2: kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_regression_bias_ise_bound)_
★ `kernel_smoother_classApproximationError_le_of_holder_bias_rate` — theorem · `Statlib/Nonparametric/Approximation/Kernel.lean:265` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ productKernel"]
  n2["◆ IsHolderFunction"]
  n3["◆ kernelSmoother"]
  n4["◆ integratedSquaredError"]
  n5["◆ kernelMoment"]
  n6["◆ classApproximationError"]
  n7["★ kernel_holder_bias_normalized"]
  n8["◆ bias"]
  n9["▣ DenseLayer"]
  n10["◆ apply"]
  n11["★ integratedSquaredError_le_of_pointwise_bound"]
  n12["★ kernel_holder_bias_integratedSquaredError_bound"]
  n13["★ kernel_smoother_classApproximationError_le_of_holder_bias_rate"]
  n3 --> n1
  n5 --> n1
  n6 --> n0
  n6 --> n4
  n7 --> n1
  n7 --> n2
  n7 --> n5
  n9 --> n8
  n10 --> n9
  n10 --> n8
  n11 --> n4
  n12 --> n1
  n12 --> n2
  n12 --> n3
  n12 --> n4
  n12 --> n5
  n12 --> n7
  n12 --> n10
  n12 --> n11
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n3
  n13 --> n4
  n13 --> n5
  n13 --> n6
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
