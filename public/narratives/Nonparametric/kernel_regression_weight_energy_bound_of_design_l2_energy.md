# Proof narrative — kernel_regression_weight_energy_bound_of_design_l2_energy

Root: **kernel_regression_weight_energy_bound_of_design_l2_energy** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:174` · topic `Nonparametric`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 14: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
      ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
  ◆ `kernelL2Energy` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:51`  _(also used by 5: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
  ◆ `KernelRegressionDesignL2EnergyAssumptions` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:141`  _(also used by 8: kernel_uniform_interior_l2_energy_bound, kernel_regression_weight_sq_integrable_of_design_l2_energy, kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2, …)_
  ◆ `KernelRegressionWeightEnergyBound` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:230`  _(also used by 1: kernel_scaled_l2_denominator_bridge_from_weight_energy_bound)_
★ `kernel_regression_weight_energy_bound_of_design_l2_energy` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:174` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ scaledKernel"]
  n1["◆ productKernel"]
  n2["◆ kernelL2Energy"]
  n3["◆ KernelRegressionDesignL2EnergyAssumptions"]
  n4["◆ KernelRegressionWeightEnergyBound"]
  n5["★ kernel_regression_weight_energy_bound_of_design_l2_energy"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n2
  n5 --> n3
  n5 --> n4
  n5 --> n0
  n5 --> n2
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
