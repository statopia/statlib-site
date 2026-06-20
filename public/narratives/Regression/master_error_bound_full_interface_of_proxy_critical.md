# Proof narrative — master_error_bound_full_interface_of_proxy_critical

Root: **master_error_bound_full_interface_of_proxy_critical** (theorem) `Statlib/Regression/master_error_bound_full_interface_of_proxy_critical.lean:15` · topic `Regression`
Closure: 12 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 74: IsStarShapedClass, LocalGaussianComplexity, LocalGaussianComplexityEntropyAssumptions, …)_
    ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 97: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, …)_
  ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 66: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
  ◆ `empiricalNorm` — def · `Statlib/Regression/empiricalNorm.lean:10`  _(also used by 24: LocalizedProbabilityAssumptions, LocalizedProbabilityAssumptions.ofDeterministic, LocalizedProbabilityAssumptions.ofProcessAndComplexity, …)_
  ◆ `excessRisk` — def · `Statlib/Regression/Basic.lean:44`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `approximationError` — def · `Statlib/Regression/approximationError.lean:10`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 48: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
      ★ `master_error_bound` — theorem · `Statlib/Regression/master_error_bound.lean:17`
    ★ `master_error_bound_localized` — theorem · `Statlib/Regression/master_error_bound_localized.lean:14`  _(also used by 3: master_error_bound_full_interface_structured, master_error_bound_localized_of_proxy_critical, master_error_bound_localized_structured)_
    ★ `master_error_bound_probability_interface` — theorem · `Statlib/Regression/master_error_bound_probability_interface.lean:12`
  ★ `master_error_bound_full_interface` — theorem · `Statlib/Regression/master_error_bound_full_interface.lean:16`
★ `master_error_bound_full_interface_of_proxy_critical` — theorem · `Statlib/Regression/master_error_bound_full_interface_of_proxy_critical.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ stdGaussian"]
  n2["◆ stdGaussianPi"]
  n3["◆ empiricalNorm"]
  n4["◆ excessRisk"]
  n5["◆ approximationError"]
  n6["◆ estimationErrorUpper"]
  n7["★ master_error_bound"]
  n8["★ master_error_bound_localized"]
  n9["★ master_error_bound_probability_interface"]
  n10["★ master_error_bound_full_interface"]
  n11["★ master_error_bound_full_interface_of_proxy_critical"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n7 --> n0
  n7 --> n4
  n7 --> n5
  n7 --> n6
  n8 --> n0
  n8 --> n4
  n8 --> n5
  n8 --> n6
  n8 --> n7
  n9 --> n0
  n9 --> n2
  n9 --> n3
  n10 --> n0
  n10 --> n2
  n10 --> n3
  n10 --> n4
  n10 --> n5
  n10 --> n6
  n10 --> n8
  n10 --> n9
  n11 --> n0
  n11 --> n2
  n11 --> n3
  n11 --> n4
  n11 --> n5
  n11 --> n6
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
