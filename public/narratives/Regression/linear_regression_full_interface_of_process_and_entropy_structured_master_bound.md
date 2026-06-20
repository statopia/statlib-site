# Proof narrative — linear_regression_full_interface_of_process_and_entropy_structured_master_bound

Root: **linear_regression_full_interface_of_process_and_entropy_structured_master_bound** (theorem) `Statlib/Regression/linear_regression_full_interface_of_process_and_entropy_structured_master_bound.lean:11` · topic `Regression`
Closure: 18 declarations across 16 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 68: IsStarShapedClass, LocalGaussianComplexity, LocalGaussianComplexityEntropyAssumptions, …)_
  ◆ `empiricalNorm` — def · `Statlib/Regression/empiricalNorm.lean:10`  _(also used by 19: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy, empiricalSphere, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 45: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  ◆ `excessRisk` — def · `Statlib/Regression/Basic.lean:44`  _(also used by 35: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ◆ `approximationError` — def · `Statlib/Regression/approximationError.lean:10`  _(also used by 35: l1_regression_full_interface_of_probability_structured_master_bound, l1_regression_full_interface_of_process_and_complexity_structured_master_bound, l1_regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
      ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 97: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, …)_
    ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 64: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
  ▣ `LocalizedProbabilityAssumptions` — structure · `Statlib/Regression/LocalizedProbabilityAssumptions.lean:12`  _(also used by 14: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy, l1_regression_full_interface_of_probability_structured_master_bound, …)_
    · `LocalizedProbabilityAssumptions.ofDeterministic` — lemma · `Statlib/Regression/LocalizedProbabilityAssumptions_ofDeterministic.lean:13`  _(also used by 2: LocalizedProbabilityAssumptions.ofProcessAndComplexity, LocalizedProbabilityAssumptions.ofProxy)_
  · `LocalizedProbabilityAssumptions.ofProcessAndEntropy` — lemma · `Statlib/Regression/LocalizedProbabilityAssumptions_ofProcessAndEntropy.lean:15`  _(also used by 3: l1_regression_full_interface_of_process_and_entropy_structured_master_bound, master_error_bound_full_interface_of_process_and_entropy_structured, regression_full_interface_of_process_and_entropy_structured_master_bound)_
          ★ `master_error_bound` — theorem · `Statlib/Regression/master_error_bound.lean:17`
        ★ `master_error_bound_localized` — theorem · `Statlib/Regression/master_error_bound_localized.lean:14`  _(also used by 3: master_error_bound_full_interface, master_error_bound_localized_of_proxy_critical, master_error_bound_localized_structured)_
        ★ `master_error_bound_probability_interface_structured` — theorem · `Statlib/Regression/master_error_bound_probability_interface_structured.lean:13`
      ★ `master_error_bound_full_interface_structured` — theorem · `Statlib/Regression/master_error_bound_full_interface_structured.lean:17`  _(also used by 3: master_error_bound_full_interface_of_process_and_complexity_structured, master_error_bound_full_interface_of_process_and_entropy_structured, master_error_bound_full_interface_of_proxy_structured)_
      ★ `regression_rate_of_master_bound` — theorem · `Statlib/Regression/regression_rate_of_master_bound.lean:11`  _(also used by 3: l1_regression_rate_of_master_bound, linear_regression_rate_of_master_bound, regression_rate_of_deterministic_structured_master_bound)_
    ★ `regression_full_interface_of_probability_structured_master_bound` — theorem · `Statlib/Regression/regression_full_interface_of_probability_structured_master_bound.lean:12`  _(also used by 4: l1_regression_full_interface_of_probability_structured_master_bound, regression_full_interface_of_process_and_complexity_structured_master_bound, regression_full_interface_of_process_and_entropy_structured_master_bound, …)_
  ★ `linear_regression_full_interface_of_probability_structured_master_bound` — theorem · `Statlib/Regression/linear_regression_full_interface_of_probability_structured_master_bound.lean:11`  _(also used by 2: linear_regression_full_interface_of_process_and_complexity_structured_master_bound, linear_regression_full_interface_of_proxy_structured_master_bound)_
★ `linear_regression_full_interface_of_process_and_entropy_structured_master_bound` — theorem · `Statlib/Regression/linear_regression_full_interface_of_process_and_entropy_structured_master_bound.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ empiricalNorm"]
  n2["◆ estimationErrorUpper"]
  n3["◆ excessRisk"]
  n4["◆ approximationError"]
  n5["◆ stdGaussian"]
  n6["◆ stdGaussianPi"]
  n7["▣ LocalizedProbabilityAssumptions"]
  n8["· LocalizedProbabilityAssumptions.ofDeterministic"]
  n9["· LocalizedProbabilityAssumptions.ofProcessAndEntropy"]
  n10["★ master_error_bound"]
  n11["★ master_error_bound_localized"]
  n12["★ master_error_bound_probability_interface_structured"]
  n13["★ master_error_bound_full_interface_structured"]
  n14["★ regression_rate_of_master_bound"]
  n15["★ regression_full_interface_of_probability_structured_master_bound"]
  n16["★ linear_regression_full_interface_of_probability_structured_master_bound"]
  n17["★ linear_regression_full_interface_of_process_and_entropy_structured_master_bound"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n6
  n7 --> n1
  n8 --> n0
  n8 --> n6
  n8 --> n1
  n8 --> n7
  n9 --> n0
  n9 --> n6
  n9 --> n1
  n9 --> n7
  n9 --> n8
  n10 --> n0
  n10 --> n3
  n10 --> n4
  n10 --> n2
  n11 --> n0
  n11 --> n3
  n11 --> n4
  n11 --> n2
  n11 --> n10
  n12 --> n0
  n12 --> n7
  n12 --> n6
  n12 --> n1
  n13 --> n0
  n13 --> n7
  n13 --> n3
  n13 --> n4
  n13 --> n2
  n13 --> n6
  n13 --> n1
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n3
  n14 --> n4
  n14 --> n2
  n15 --> n0
  n15 --> n7
  n15 --> n2
  n15 --> n3
  n15 --> n4
  n15 --> n1
  n15 --> n13
  n15 --> n14
  n16 --> n0
  n16 --> n7
  n16 --> n2
  n16 --> n3
  n16 --> n4
  n16 --> n1
  n16 --> n15
  n17 --> n0
  n17 --> n1
  n17 --> n2
  n17 --> n3
  n17 --> n4
  n17 --> n7
  n17 --> n9
  n17 --> n16
  class n17 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
