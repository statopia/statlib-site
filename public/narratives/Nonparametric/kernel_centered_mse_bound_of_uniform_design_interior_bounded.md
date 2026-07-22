# Proof narrative — kernel_centered_mse_bound_of_uniform_design_interior_bounded

Root: **kernel_centered_mse_bound_of_uniform_design_interior_bounded** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1235` · topic `Nonparametric`
Closure: 12 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionBoundedOn` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:35`  _(also used by 1: KernelRegressionBoundedAnalyticAssumptions)_
  ◆ `unitCubeSet` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:21`  _(also used by 1: KernelRegressionBoundedAnalyticAssumptions)_
  ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 13: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
  ◆ `kernelLinearRegressionEstimator` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:56`  _(also used by 9: kernel_regression_centered_integrability_of_centered_sum_integrability, kernel_regression_risk_integrability_of_error_integrability_and_design_l2, kernel_regression_mse_x_integrable_of_centered_x_and_bias, …)_
    ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
  ◆ `kernelSmoother` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:39`  _(also used by 16: kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `kernelRegressionWeight` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:51`
    ◆ `kernelRegressionWeightedResponse` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:58`  _(also used by 3: kernel_centered_sum_omega_integrable_of_summand_square_integrable, kernel_centered_sum_integrability_of_summand_l2_and_variance_bound, KernelRegressionUniformInteriorWellposednessAssumptions)_
  ◆ `kernelRegressionCenteredWeightedResponseSum` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:73`  _(also used by 6: kernel_centered_sum_omega_integrable_of_summand_square_integrable, kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2, kernel_centered_sum_integrability_of_summand_l2_and_variance_bound, …)_
  ◆ `kernelRegressionWeightSqSum` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:65`  _(also used by 3: kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2, kernel_centered_sum_integrability_of_summand_l2_and_variance_bound, KernelRegressionUniformInteriorWellposednessAssumptions)_
  ◆ `KernelRegressionCenteredMSEBound` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:208`  _(also used by 3: kernel_regression_centered_mse_bound_of_random_design_regularity, kernel_centered_error_bridge_from_centered_mse_bound, KernelRegressionRandomDesignRegularityAssumptions)_
★ `kernel_centered_mse_bound_of_uniform_design_interior_bounded` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1235` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionBoundedOn"]
  n1["◆ unitCubeSet"]
  n2["◆ scaledKernel"]
  n3["◆ kernelLinearRegressionEstimator"]
  n4["◆ productKernel"]
  n5["◆ kernelSmoother"]
  n6["◆ kernelRegressionWeight"]
  n7["◆ kernelRegressionWeightedResponse"]
  n8["◆ kernelRegressionCenteredWeightedResponseSum"]
  n9["◆ kernelRegressionWeightSqSum"]
  n10["◆ KernelRegressionCenteredMSEBound"]
  n11["★ kernel_centered_mse_bound_of_uniform_design_interior_bounded"]
  n3 --> n2
  n5 --> n4
  n6 --> n2
  n7 --> n6
  n8 --> n7
  n9 --> n6
  n10 --> n3
  n10 --> n5
  n10 --> n2
  n11 --> n0
  n11 --> n1
  n11 --> n3
  n11 --> n5
  n11 --> n8
  n11 --> n9
  n11 --> n10
  n11 --> n2
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
