# Proof narrative — classApproximationError_finiteLinearSpan_eq_sieveApproximationError

Root: **classApproximationError_finiteLinearSpan_eq_sieveApproximationError** (theorem) `Statlib/Nonparametric/Approximation/Sieve.lean:240` · topic `Nonparametric`
Closure: 9 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 20: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 32: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_classApproximationError_le_of_net_member, holderBall_classApproximationError_self_le_zero, …)_
  ◆ `finiteLinearSpan` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:23`  _(also used by 8: finiteLinearSpan_classApproximationError_le_of_holder_selector_net, holder_selector_net_classApproximationError_le_rate, finiteLinearSpan_classApproximationError_le_of_coefficients, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 37: holder_selectorIndicator_series_pointwise_bound, holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 26: sieveApproximationError_le_of_holder_selector_net, holderBall_selectorIndicator_sieveApproximationError_uniform_bound, exists_selectorIndicatorSieve_for_holderBall_of_finite_net, …)_
    · `seriesFunction_mem_finiteLinearSpan` — lemma · `Statlib/Nonparametric/Approximation/Sieve.lean:13`  _(also used by 5: finiteLinearSpan_classApproximationError_le_of_holder_selector_net, finiteLinearSpan_classApproximationError_le_of_coefficients, finiteLinearSpan_classApproximationError_le_of_pointwise_series_bound, …)_
  ★ `finiteLinearSpan_ise_image_eq_series_range` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:218`
★ `classApproximationError_finiteLinearSpan_eq_sieveApproximationError` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:240` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ integratedSquaredError"]
  n2["◆ classApproximationError"]
  n3["◆ finiteLinearSpan"]
  n4["◆ seriesFunction"]
  n5["◆ sieveApproximationError"]
  n6["· seriesFunction_mem_finiteLinearSpan"]
  n7["★ finiteLinearSpan_ise_image_eq_series_range"]
  n8["★ classApproximationError_finiteLinearSpan_eq_sieveApproximationError"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n5 --> n1
  n5 --> n4
  n6 --> n4
  n6 --> n3
  n7 --> n1
  n7 --> n3
  n7 --> n4
  n7 --> n6
  n8 --> n2
  n8 --> n3
  n8 --> n5
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
