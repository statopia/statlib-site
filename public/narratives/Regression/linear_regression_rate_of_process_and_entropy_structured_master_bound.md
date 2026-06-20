# Proof narrative — linear_regression_rate_of_process_and_entropy_structured_master_bound

Root: **linear_regression_rate_of_process_and_entropy_structured_master_bound** (theorem) `Statlib/Regression/linear_regression_rate_of_process_and_entropy_structured_master_bound.lean:10` · topic `Regression`
Closure: 11 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 73: IsStarShapedClass, LocalGaussianComplexity, LocalGaussianComplexityEntropyAssumptions, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 45: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  ◆ `excessRisk` — def · `Statlib/Regression/Basic.lean:44`  _(also used by 35: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `approximationError` — def · `Statlib/Regression/approximationError.lean:10`  _(also used by 35: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
          ★ `master_error_bound` — theorem · `Statlib/Regression/master_error_bound.lean:17`
        ★ `master_error_bound_localized` — theorem · `Statlib/Regression/master_error_bound_localized.lean:14`  _(also used by 3: master_error_bound_full_interface, master_error_bound_full_interface_structured, master_error_bound_localized_of_proxy_critical)_
      ★ `master_error_bound_localized_structured` — theorem · `Statlib/Regression/master_error_bound_localized_structured.lean:14`  _(also used by 3: master_error_bound_localized_of_process_and_complexity_structured, master_error_bound_localized_of_process_and_entropy_structured, master_error_bound_localized_of_proxy_structured)_
      ★ `regression_rate_of_master_bound` — theorem · `Statlib/Regression/regression_rate_of_master_bound.lean:11`  _(also used by 3: l1_regression_rate_of_master_bound, linear_regression_rate_of_master_bound, regression_full_interface_of_probability_structured_master_bound)_
    ★ `regression_rate_of_deterministic_structured_master_bound` — theorem · `Statlib/Regression/regression_rate_of_deterministic_structured_master_bound.lean:11`  _(also used by 4: l1_regression_rate_of_deterministic_structured_master_bound, regression_rate_of_process_and_complexity_structured_master_bound, regression_rate_of_process_and_entropy_structured_master_bound, …)_
  ★ `linear_regression_rate_of_deterministic_structured_master_bound` — theorem · `Statlib/Regression/linear_regression_rate_of_deterministic_structured_master_bound.lean:11`  _(also used by 2: linear_regression_rate_of_process_and_complexity_structured_master_bound, linear_regression_rate_of_proxy_structured_master_bound)_
★ `linear_regression_rate_of_process_and_entropy_structured_master_bound` — theorem · `Statlib/Regression/linear_regression_rate_of_process_and_entropy_structured_master_bound.lean:10` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ estimationErrorUpper"]
  n2["◆ excessRisk"]
  n3["◆ approximationError"]
  n4["★ master_error_bound"]
  n5["★ master_error_bound_localized"]
  n6["★ master_error_bound_localized_structured"]
  n7["★ regression_rate_of_master_bound"]
  n8["★ regression_rate_of_deterministic_structured_master_bound"]
  n9["★ linear_regression_rate_of_deterministic_structured_master_bound"]
  n10["★ linear_regression_rate_of_process_and_entropy_structured_master_bound"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n2
  n4 --> n3
  n4 --> n1
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n1
  n5 --> n4
  n6 --> n0
  n6 --> n2
  n6 --> n3
  n6 --> n1
  n6 --> n5
  n7 --> n0
  n7 --> n2
  n7 --> n3
  n7 --> n1
  n8 --> n0
  n8 --> n1
  n8 --> n2
  n8 --> n3
  n8 --> n6
  n8 --> n7
  n9 --> n0
  n9 --> n1
  n9 --> n2
  n9 --> n3
  n9 --> n8
  n10 --> n0
  n10 --> n1
  n10 --> n2
  n10 --> n3
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
