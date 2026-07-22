# Proof narrative — holderBall_classApproximationError_self_le_zero

Root: **holderBall_classApproximationError_self_le_zero** (theorem) `Statlib/Nonparametric/Approximation/Holder.lean:97` · topic `Nonparametric`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 17: holder_net_approx_sup_bound, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 33: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:56`  _(also used by 9: holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_selectorIndicatorSieve_for_holderBall_of_finite_net, exists_selectorIndicatorSieve_for_holderBall_of_finite_measurable_cover, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
★ `holderBall_classApproximationError_self_le_zero` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:97` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsHolderFunction"]
  n1["◆ integratedSquaredError"]
  n2["◆ FunctionClass"]
  n3["◆ holderBall"]
  n4["◆ classApproximationError"]
  n5["★ holderBall_classApproximationError_self_le_zero"]
  n3 --> n2
  n3 --> n0
  n4 --> n2
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
