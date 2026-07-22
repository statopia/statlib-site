# Proof narrative — kernel_uniform_interior_population_smoother_eq

Root: **kernel_uniform_interior_population_smoother_eq** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:139` · topic `Nonparametric`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `KernelRegressionDesignLaw` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:41`  _(also used by 2: kernel_uniform_interior_l2_energy_bound, KernelRegressionUniformInteriorWellposednessAssumptions)_
  ◆ `scaledKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:33`  _(also used by 16: kernel_scaled_l2_denominator_bridge, kernel_scaled_l2_denominator_bridge_from_weight_energy_bound, kernel_uniform_interior_l2_energy_bound, …)_
  ◆ `kernelInteriorCubeSet` — def · `Statlib/Nonparametric/Vocabulary/KernelRegression.lean:26`  _(also used by 1: KernelRegressionUniformInteriorWellposednessAssumptions)_
    ◆ `productKernel` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:28`  _(also used by 9: kernel_holder_bias_normalized, kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, …)_
  ◆ `kernelSmoother` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Kernel.lean:39`  _(also used by 17: kernel_holder_bias_integratedSquaredError_bound, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
★ `kernel_uniform_interior_population_smoother_eq` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:139` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ KernelRegressionDesignLaw"]
  n1["◆ scaledKernel"]
  n2["◆ kernelInteriorCubeSet"]
  n3["◆ productKernel"]
  n4["◆ kernelSmoother"]
  n5["★ kernel_uniform_interior_population_smoother_eq"]
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
