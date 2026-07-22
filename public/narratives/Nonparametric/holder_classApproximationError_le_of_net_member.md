# Proof narrative — holder_classApproximationError_le_of_net_member

Root: **holder_classApproximationError_le_of_net_member** (theorem) `Statlib/Nonparametric/Approximation/Holder.lean:56` · topic `Nonparametric`
Closure: 6 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, classApproximationError_le_of_member_ise, …)_
  ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 18: holder_net_approx_sup_bound, holder_net_integratedSquaredError_bound, holderBall_classApproximationError_self_le_zero, …)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 32: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holderBall_classApproximationError_self_le_zero, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holderBall_classApproximationError_self_le_zero, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
  ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integratedSquaredError_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
★ `holder_classApproximationError_le_of_net_member` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:56` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ IsHolderFunction"]
  n2["◆ integratedSquaredError"]
  n3["◆ classApproximationError"]
  n4["★ integratedSquaredError_le_of_pointwise_bound"]
  n5["★ holder_classApproximationError_le_of_net_member"]
  n3 --> n0
  n3 --> n2
  n4 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
