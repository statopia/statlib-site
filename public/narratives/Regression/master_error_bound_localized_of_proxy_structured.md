# Proof narrative — master_error_bound_localized_of_proxy_structured

Root: **master_error_bound_localized_of_proxy_structured** (theorem) `Statlib/Regression/master_error_bound_localized_of_proxy_structured.lean:13` · topic `Regression`
Closure: 8 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 76: IsStarShapedClass, LocalGaussianComplexity, LocalGaussianComplexityEntropyAssumptions, …)_
  ◆ `excessRisk` — def · `Statlib/Regression/Basic.lean:44`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `approximationError` — def · `Statlib/Regression/approximationError.lean:10`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 48: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
      ★ `master_error_bound` — theorem · `Statlib/Regression/master_error_bound.lean:17`
    ★ `master_error_bound_localized` — theorem · `Statlib/Regression/master_error_bound_localized.lean:14`  _(also used by 3: master_error_bound_full_interface, master_error_bound_full_interface_structured, master_error_bound_localized_of_proxy_critical)_
  ★ `master_error_bound_localized_structured` — theorem · `Statlib/Regression/master_error_bound_localized_structured.lean:14`  _(also used by 3: master_error_bound_localized_of_process_and_complexity_structured, master_error_bound_localized_of_process_and_entropy_structured, regression_rate_of_deterministic_structured_master_bound)_
★ `master_error_bound_localized_of_proxy_structured` — theorem · `Statlib/Regression/master_error_bound_localized_of_proxy_structured.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ excessRisk"]
  n2["◆ approximationError"]
  n3["◆ estimationErrorUpper"]
  n4["★ master_error_bound"]
  n5["★ master_error_bound_localized"]
  n6["★ master_error_bound_localized_structured"]
  n7["★ master_error_bound_localized_of_proxy_structured"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
