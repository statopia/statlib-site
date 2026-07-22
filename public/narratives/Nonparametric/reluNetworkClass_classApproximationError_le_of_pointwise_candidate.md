# Proof narrative — reluNetworkClass_classApproximationError_le_of_pointwise_candidate

Root: **reluNetworkClass_classApproximationError_le_of_pointwise_candidate** (theorem) `Statlib/Nonparametric/Approximation/NeuralNetwork.lean:11` · topic `Nonparametric`
Closure: 13 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
        ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 1: reluApply)_
      ▣ `OneHiddenReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:43`  _(also used by 1: oneHiddenReLUEmpiricalRisk)_
      ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 1: reluVec)_
      ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 12: unitCube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
  ◆ `realize` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:51`  _(also used by 3: reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise, oneHiddenReLUEmpiricalRisk)_
  ▣ `FullyConnectedReLUNet` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:58`  _(also used by 2: reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 32: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `reluNetworkClass` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:65`  _(also used by 2: reluNetworkClass_classApproximationError_le_of_candidate_ise, reluNetworkClass_classApproximationError_le_of_exists_pointwise)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, holder_selectorIndicator_series_integratedSquaredError_bound, …)_
★ `reluNetworkClass_classApproximationError_le_of_pointwise_candidate` — theorem · `Statlib/Nonparametric/Approximation/NeuralNetwork.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bias"]
  n1["▣ DenseLayer"]
  n2["▣ OneHiddenReLUNet"]
  n3["◆ relu"]
  n4["◆ apply"]
  n5["◆ realize"]
  n6["▣ FullyConnectedReLUNet"]
  n7["◆ integratedSquaredError"]
  n8["◆ FunctionClass"]
  n9["◆ reluNetworkClass"]
  n10["◆ classApproximationError"]
  n11["★ integratedSquaredError_le_of_pointwise_bound"]
  n12["★ reluNetworkClass_classApproximationError_le_of_pointwise_candidate"]
  n1 --> n0
  n2 --> n1
  n4 --> n1
  n4 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n5
  n9 --> n8
  n9 --> n6
  n9 --> n5
  n10 --> n8
  n10 --> n7
  n11 --> n7
  n12 --> n6
  n12 --> n5
  n12 --> n7
  n12 --> n9
  n12 --> n10
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
