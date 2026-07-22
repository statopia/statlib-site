# Proof narrative — holder_net_integratedSquaredError_bound

Root: **holder_net_integratedSquaredError_bound** (theorem) `Statlib/Nonparametric/Approximation/Holder.lean:30` · topic `Nonparametric`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 18: holder_net_approx_sup_bound, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 33: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_classApproximationError_le_of_net_member, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
★ `holder_net_integratedSquaredError_bound` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:30` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsHolderFunction"]
  n1["◆ integratedSquaredError"]
  n2["★ integratedSquaredError_le_of_pointwise_bound"]
  n3["★ holder_net_integratedSquaredError_bound"]
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
