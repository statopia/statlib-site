# Proof narrative — finiteLinearSpan_classApproximationError_self_series_le_zero

Root: **finiteLinearSpan_classApproximationError_self_series_le_zero** (theorem) `Statlib/Nonparametric/Approximation/Sieve.lean:202` · topic `Nonparametric`
Closure: 7 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 33: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 38: holder_selectorIndicator_series_pointwise_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `finiteLinearSpan` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:23`  _(also used by 9: finiteLinearSpan_classApproximationError_le_of_holder_selector_net, holder_selector_net_classApproximationError_le_rate, finiteLinearSpan_classApproximationError_le_of_coefficients, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  · `seriesFunction_mem_finiteLinearSpan` — lemma · `Statlib/Nonparametric/Approximation/Sieve.lean:13`  _(also used by 5: finiteLinearSpan_classApproximationError_le_of_holder_selector_net, finiteLinearSpan_classApproximationError_le_of_coefficients, finiteLinearSpan_classApproximationError_le_of_pointwise_series_bound, …)_
★ `finiteLinearSpan_classApproximationError_self_series_le_zero` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:202` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ integratedSquaredError"]
  n1["◆ seriesFunction"]
  n2["◆ FunctionClass"]
  n3["◆ finiteLinearSpan"]
  n4["◆ classApproximationError"]
  n5["· seriesFunction_mem_finiteLinearSpan"]
  n6["★ finiteLinearSpan_classApproximationError_self_series_le_zero"]
  n3 --> n2
  n4 --> n2
  n4 --> n0
  n5 --> n1
  n5 --> n3
  n6 --> n0
  n6 --> n1
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
