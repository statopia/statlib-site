# Proof narrative — kernel_centered_error_bridge_from_centered_mse_bound

Root: **kernel_centered_error_bridge_from_centered_mse_bound** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1349` · topic `Nonparametric`
Closure: 8 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 13: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
  ◆ `kernelLinearRegressionEstimator` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:56`  _(also used by 8: kernel_regression_centered_integrability_of_centered_sum_integrability, kernel_regression_risk_integrability_of_error_integrability_and_design_l2, kernel_regression_mse_x_integrable_of_centered_x_and_bias, …)_
      ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
  ◆ `kernelSmoother` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:39`  _(also used by 15: kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `KernelRegressionCenteredMSEBound` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:208`  _(also used by 3: kernel_centered_mse_bound_of_uniform_design_interior_bounded, kernel_regression_centered_mse_bound_of_random_design_regularity, KernelRegressionRandomDesignRegularityAssumptions)_
  ◆ `integratedCenteredSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:74`  _(also used by 2: kernel_regression_integrated_variance_bound, kernel_regression_imse_bias_variance_bound)_
  ★ `kernel_centered_error_bridge_from_pointwise_mse` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1154`
★ `kernel_centered_error_bridge_from_centered_mse_bound` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1349` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ scaledKernel"]
  n1["◆ kernelLinearRegressionEstimator"]
  n2["◆ productKernel"]
  n3["◆ kernelSmoother"]
  n4["◆ KernelRegressionCenteredMSEBound"]
  n5["◆ integratedCenteredSquaredError"]
  n6["★ kernel_centered_error_bridge_from_pointwise_mse"]
  n7["★ kernel_centered_error_bridge_from_centered_mse_bound"]
  n1 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  n4 --> n0
  n6 --> n1
  n6 --> n3
  n6 --> n0
  n6 --> n5
  n7 --> n4
  n7 --> n1
  n7 --> n3
  n7 --> n0
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
