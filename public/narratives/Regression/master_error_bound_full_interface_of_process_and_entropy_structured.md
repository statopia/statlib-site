# Proof narrative — master_error_bound_full_interface_of_process_and_entropy_structured

Root: **master_error_bound_full_interface_of_process_and_entropy_structured** (theorem) `Statlib/Regression/master_error_bound_full_interface_of_process_and_entropy_structured.lean:17` · topic `Regression`
Closure: 15 declarations across 13 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 71: IsStarShapedClass, LocalGaussianComplexity, LocalGaussianComplexityEntropyAssumptions, …)_
    ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 97: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, …)_
  ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 63: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
  ◆ `empiricalNorm` — def · `Statlib/Regression/empiricalNorm.lean:10`  _(also used by 21: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy, empiricalSphere, …)_
  ◆ `excessRisk` — def · `Statlib/Regression/Basic.lean:44`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `approximationError` — def · `Statlib/Regression/approximationError.lean:10`  _(also used by 38: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 48: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  ▣ `LocalizedProbabilityAssumptions` — structure · `Statlib/Regression/LocalizedProbabilityAssumptions.lean:12`  _(also used by 16: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy, l1_regression_full_interface_of_probability_structured_master_bound, …)_
    · `LocalizedProbabilityAssumptions.ofDeterministic` — lemma · `Statlib/Regression/LocalizedProbabilityAssumptions_ofDeterministic.lean:13`  _(also used by 2: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy)_
  · `LocalizedProbabilityAssumptions.ofProcessAndEntropy` — lemma · `Statlib/Regression/LocalizedProbabilityAssumptions_ofProcessAndEntropy.lean:15`  _(also used by 3: l1_regression_full_interface_of_process_and_entropy_structured_master_bound, linear_regression_full_interface_of_process_and_entropy_structured_master_bound, regression_full_interface_of_process_and_entropy_structured_master_bound)_
      ★ `master_error_bound` — theorem · `Statlib/Regression/master_error_bound.lean:17`
    ★ `master_error_bound_localized` — theorem · `Statlib/Regression/master_error_bound_localized.lean:14`  _(also used by 3: master_error_bound_full_interface, master_error_bound_localized_of_proxy_critical, master_error_bound_localized_structured)_
    ★ `master_error_bound_probability_interface_structured` — theorem · `Statlib/Regression/master_error_bound_probability_interface_structured.lean:13`
  ★ `master_error_bound_full_interface_structured` — theorem · `Statlib/Regression/master_error_bound_full_interface_structured.lean:17`  _(also used by 3: master_error_bound_full_interface_of_process_and_complexity_structured, master_error_bound_full_interface_of_proxy_structured, regression_full_interface_of_probability_structured_master_bound)_
★ `master_error_bound_full_interface_of_process_and_entropy_structured` — theorem · `Statlib/Regression/master_error_bound_full_interface_of_process_and_entropy_structured.lean:17` **← headline**

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
  n7["▣ LocalizedProbabilityAssumptions"]
  n8["· LocalizedProbabilityAssumptions.ofDeterministic"]
  n9["· LocalizedProbabilityAssumptions.ofProcessAndEntropy"]
  n10["★ master_error_bound"]
  n11["★ master_error_bound_localized"]
  n12["★ master_error_bound_probability_interface_structured"]
  n13["★ master_error_bound_full_interface_structured"]
  n14["★ master_error_bound_full_interface_of_process_and_entropy_structured"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n7 --> n0
  n7 --> n2
  n7 --> n3
  n8 --> n0
  n8 --> n2
  n8 --> n3
  n8 --> n7
  n9 --> n0
  n9 --> n2
  n9 --> n3
  n9 --> n7
  n9 --> n8
  n10 --> n0
  n10 --> n4
  n10 --> n5
  n10 --> n6
  n11 --> n0
  n11 --> n4
  n11 --> n5
  n11 --> n6
  n11 --> n10
  n12 --> n0
  n12 --> n7
  n12 --> n2
  n12 --> n3
  n13 --> n0
  n13 --> n7
  n13 --> n4
  n13 --> n5
  n13 --> n6
  n13 --> n2
  n13 --> n3
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n2
  n14 --> n3
  n14 --> n4
  n14 --> n5
  n14 --> n6
  n14 --> n7
  n14 --> n9
  n14 --> n13
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
