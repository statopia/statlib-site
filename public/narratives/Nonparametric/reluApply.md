# Proof narrative — reluApply

Root: **reluApply** (noncomputable def) `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:34` · topic `Nonparametric`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
  ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 1: OneHiddenReLUNet)_
    ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 1: realize)_
  ◆ `reluVec` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:19`
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
◆ `reluApply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:34` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bias"]
  n1["▣ DenseLayer"]
  n2["◆ relu"]
  n3["◆ reluVec"]
  n4["◆ apply"]
  n5["◆ reluApply"]
  n1 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
