# Proof narrative — kernel_bandwidth_balance

Root: **kernel_bandwidth_balance** (theorem) `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1613` · topic `Nonparametric`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 2: reluApply, OneHiddenReLUNet)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
★ `kernel_bandwidth_balance` — theorem · `Statlib/Nonparametric/KernelRegression/KernelRate.lean:1613` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bias"]
  n1["▣ DenseLayer"]
  n2["◆ apply"]
  n3["★ kernel_bandwidth_balance"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
