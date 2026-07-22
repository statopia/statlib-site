# Proof narrative — kernel_uniform_interior_l2_energy_bound

Root: **kernel_uniform_interior_l2_energy_bound** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:95` · topic `Nonparametric`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `KernelRegressionDesignLaw` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:41`  _(also used by 2: kernel_uniform_interior_population_smoother_eq, KernelRegressionUniformInteriorWellposednessAssumptions)_
  ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 15: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_population_smoother_eq, …)_
    ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
  ◆ `kernelL2Energy` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:51`  _(also used by 6: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_regression_weight_energy_bound_of_design_l2_energy, …)_
  ◆ `KernelRegressionDesignL2EnergyAssumptions` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:141`  _(also used by 8: kernel_regression_weight_energy_bound_of_design_l2_energy, kernel_regression_weight_sq_integrable_of_design_l2_energy, kernel_centered_sum_x_integrable_of_variance_bound_and_design_l2, …)_
★ `kernel_uniform_interior_l2_energy_bound` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:95` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ KernelRegressionDesignLaw"]
  n1["◆ scaledKernel"]
  n2["◆ productKernel"]
  n3["◆ kernelL2Energy"]
  n4["◆ KernelRegressionDesignL2EnergyAssumptions"]
  n5["★ kernel_uniform_interior_l2_energy_bound"]
  n3 --> n2
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
