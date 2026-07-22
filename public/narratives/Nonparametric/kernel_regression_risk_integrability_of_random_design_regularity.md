# Proof narrative — kernel_regression_risk_integrability_of_random_design_regularity

Root: **kernel_regression_risk_integrability_of_random_design_regularity** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1333` · topic `Nonparametric`
Closure: 10 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 13: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
        ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 8: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
      ◆ `kernelL2Energy` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:51`  _(also used by 7: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
    ◆ `KernelRegressionDesignL2EnergyAssumptions` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:141`  _(also used by 8: kernel_uniform_interior_l2_energy_bound, kernel_regression_weight_energy_bound_of_design_l2_energy, kernel_regression_weight_sq_integrable_of_design_l2_energy, …)_
      ◆ `kernelLinearRegressionEstimator` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:56`  _(also used by 9: kernel_regression_centered_integrability_of_centered_sum_integrability, kernel_regression_risk_integrability_of_error_integrability_and_design_l2, kernel_regression_mse_x_integrable_of_centered_x_and_bias, …)_
      ◆ `kernelSmoother` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:39`  _(also used by 16: kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `KernelRegressionCenteredMSEBound` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:208`  _(also used by 3: kernel_centered_mse_bound_of_uniform_design_interior_bounded, kernel_regression_centered_mse_bound_of_random_design_regularity, kernel_centered_error_bridge_from_centered_mse_bound)_
  ◆ `KernelRegressionRiskIntegrability` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:161`  _(also used by 2: kernel_regression_risk_integrability_of_error_integrability_and_design_l2, kernel_regression_risk_integrability_of_centered_sum_bias_and_design_l2)_
  ◆ `KernelRegressionRandomDesignRegularityAssumptions` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:365`  _(also used by 2: kernel_regression_design_l2_energy_of_random_design_regularity, kernel_regression_centered_mse_bound_of_random_design_regularity)_
★ `kernel_regression_risk_integrability_of_random_design_regularity` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1333` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ scaledKernel"]
  n1["◆ productKernel"]
  n2["◆ kernelL2Energy"]
  n3["◆ KernelRegressionDesignL2EnergyAssumptions"]
  n4["◆ kernelLinearRegressionEstimator"]
  n5["◆ kernelSmoother"]
  n6["◆ KernelRegressionCenteredMSEBound"]
  n7["◆ KernelRegressionRiskIntegrability"]
  n8["◆ KernelRegressionRandomDesignRegularityAssumptions"]
  n9["★ kernel_regression_risk_integrability_of_random_design_regularity"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n5 --> n1
  n6 --> n4
  n6 --> n5
  n6 --> n0
  n7 --> n4
  n7 --> n5
  n7 --> n0
  n8 --> n3
  n8 --> n6
  n8 --> n7
  n9 --> n8
  n9 --> n7
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
