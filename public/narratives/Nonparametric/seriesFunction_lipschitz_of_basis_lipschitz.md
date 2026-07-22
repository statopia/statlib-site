# Proof narrative — seriesFunction_lipschitz_of_basis_lipschitz

Root: **seriesFunction_lipschitz_of_basis_lipschitz** (theorem) `Statlib/Nonparametric/Approximation/Sieve.lean:48` · topic `Nonparametric`
Closure: 5 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 39: holder_selectorIndicator_series_pointwise_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 2: reluApply, OneHiddenReLUNet)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
★ `seriesFunction_lipschitz_of_basis_lipschitz` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:48` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ seriesFunction"]
  n1["◆ bias"]
  n2["▣ DenseLayer"]
  n3["◆ apply"]
  n4["★ seriesFunction_lipschitz_of_basis_lipschitz"]
  n2 --> n1
  n3 --> n2
  n3 --> n1
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
