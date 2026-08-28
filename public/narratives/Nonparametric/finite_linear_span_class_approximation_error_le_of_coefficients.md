# Proof narrative — finite_linear_span_class_approximation_error_le_of_coefficients

Root: **finite_linear_span_class_approximation_error_le_of_coefficients** (theorem) `Statlib/Nonparametric/Approximation/Sieve.lean:193` · topic `Nonparametric`
Closure: 7 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 33: supNormBall_classApproximationError_self_le_zero, holder_net_integrated_squared_error_bound, holder_class_approximation_error_le_of_net_member, …)_
    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 23: holder_class_approximation_error_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
  ◆ `finiteLinearSpan` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:23`  _(also used by 9: selector_indicator_holder_class_approximation_error_le_of_net, selector_indicator_holder_class_approximation_error_le_rate, finite_linear_span_class_approximation_error_le_of_pointwise_series_approximation, …)_
  ◆ `classApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:75`  _(also used by 21: supNormBall_classApproximationError_self_le_zero, holder_class_approximation_error_le_of_net_member, holder_ball_class_approximation_error_self_le_zero, …)_
  ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 67: selector_indicator_holder_series_pointwise_approximation_bound, selector_indicator_holder_series_integrated_squared_error_bound, selector_indicator_holder_class_approximation_error_le_of_net, …)_
  · `series_function_mem_finite_linear_span` — lemma · `Statlib/Nonparametric/Approximation/Sieve.lean:13`  _(also used by 5: selector_indicator_holder_class_approximation_error_le_of_net, finite_linear_span_class_approximation_error_le_of_pointwise_series_approximation, finite_linear_span_class_approximation_error_le_of_exists_pointwise_series_approximation, …)_
★ `finite_linear_span_class_approximation_error_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:193` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ integratedSquaredError"]
  n1["◆ FunctionClass"]
  n2["◆ finiteLinearSpan"]
  n3["◆ classApproximationError"]
  n4["◆ seriesFunction"]
  n5["· series_function_mem_finite_linear_span"]
  n6["★ finite_linear_span_class_approximation_error_le_of_coefficients"]
  n2 --> n1
  n3 --> n1
  n3 --> n0
  n5 --> n4
  n5 --> n2
  n6 --> n0
  n6 --> n2
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
