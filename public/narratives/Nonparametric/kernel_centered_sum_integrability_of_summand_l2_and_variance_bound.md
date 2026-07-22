# Proof narrative — kernel_centered_sum_integrability_of_summand_l2_and_variance_bound

Root: **kernel_centered_sum_integrability_of_summand_l2_and_variance_bound** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:571` · topic `Nonparametric`
Closure: 12 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 14: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
    ◆ `kernelRegressionWeight` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:51`
  ◆ `kernelRegressionWeightedResponse` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:58`  _(also used by 1: KernelRegressionUniformInteriorWellposednessAssumptions)_
  ◆ `kernelRegressionCenteredWeightedResponseSum` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:73`  _(also used by 4: kernel_regression_centered_integrability_of_centered_sum_integrability, kernel_regression_risk_integrability_of_centered_sum_bias_and_design_l2, kernel_centered_mse_bound_of_uniform_design_interior_bounded, …)_
  ◆ `kernelRegressionWeightSqSum` — noncomputable def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:65`  _(also used by 2: kernel_centered_mse_bound_of_uniform_design_interior_bounded, KernelRegressionUniformInteriorWellposednessAssumptions)_
      ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
    ◆ `kernelL2Energy` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:51`  _(also used by 7: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
  ◆ `KernelRegressionDesignL2EnergyAssumptions` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:141`  _(also used by 6: kernel_uniform_interior_l2_energy_bound, kernel_regression_weight_energy_bound_of_design_l2_energy, kernel_regression_risk_integrability_of_error_integrability_and_design_l2, …)_
  ★ `kernel_centered_sum_omega_integrable_of_summand_square_integrable` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:347`
    ★ `kernel_regression_weight_sq_integrable_of_design_l2_energy` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:273`  _(also used by 1: kernel_regression_risk_integrability_of_error_integrability_and_design_l2)_
  ★ `kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:447`
★ `kernel_centered_sum_integrability_of_summand_l2_and_variance_bound` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:571` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ scaledKernel"]
  n1["◆ kernelRegressionWeight"]
  n2["◆ kernelRegressionWeightedResponse"]
  n3["◆ kernelRegressionCenteredWeightedResponseSum"]
  n4["◆ kernelRegressionWeightSqSum"]
  n5["◆ productKernel"]
  n6["◆ kernelL2Energy"]
  n7["◆ KernelRegressionDesignL2EnergyAssumptions"]
  n8["★ kernel_centered_sum_omega_integrable_of_summand_square_integrable"]
  n9["★ kernel_regression_weight_sq_integrable_of_design_l2_energy"]
  n10["★ kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2"]
  n11["★ kernel_centered_sum_integrability_of_summand_l2_and_variance_bound"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n1
  n6 --> n5
  n7 --> n0
  n7 --> n6
  n8 --> n3
  n8 --> n2
  n9 --> n7
  n9 --> n0
  n10 --> n3
  n10 --> n4
  n10 --> n7
  n10 --> n9
  n11 --> n3
  n11 --> n2
  n11 --> n4
  n11 --> n7
  n11 --> n8
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
