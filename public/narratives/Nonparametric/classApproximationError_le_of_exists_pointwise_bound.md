# Proof narrative — classApproximationError_le_of_exists_pointwise_bound

Root: **classApproximationError_le_of_exists_pointwise_bound** (theorem) `Statlib/Nonparametric/Approximation/Metric.lean:137` · topic `Nonparametric`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 32: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, holder_selectorIndicator_series_integratedSquaredError_bound, …)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 2: reluApply, OneHiddenReLUNet)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, integratedSquaredError_nonneg, …)_
★ `classApproximationError_le_of_exists_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:137` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ integratedSquaredError"]
  n2["◆ classApproximationError"]
  n3["★ integratedSquaredError_le_of_pointwise_bound"]
  n4["◆ bias"]
  n5["▣ DenseLayer"]
  n6["◆ apply"]
  n7["★ classApproximationError_le_of_exists_pointwise_bound"]
  n2 --> n0
  n2 --> n1
  n3 --> n1
  n5 --> n4
  n6 --> n5
  n6 --> n4
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
