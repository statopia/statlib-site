# Proof narrative — LocalizedProxyCriticalAssumptions.ofProcessAndEntropy

Root: **LocalizedProxyCriticalAssumptions.ofProcessAndEntropy** (lemma) `Statlib/Regression/LocalizedProxyCriticalAssumptions_ofProcessAndEntropy.lean:20` · topic `Regression`
Closure: 21 declarations across 20 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 65: excessRisk, LocalizedDeterministicAssumptions, LocalizedDeterministicAssumptions.ofProcessAndCI, …)_
    ◆ `IsStarShapedClass` — def · `Statlib/Regression/IsStarShapedClass.lean:10`  _(also used by 1: LocalizedDeterministicAssumptions)_
  ◆ `shiftedClass` — def · `Statlib/Regression/shiftedClass.lean:10`  _(also used by 5: LocalizedDeterministicAssumptions, LocalizedDeterministicAssumptions.ofProcessAndCI, LocalizedDeterministicAssumptions.ofProcessAndComplexity, …)_
      ◆ `empiricalNorm` — def · `Statlib/Regression/empiricalNorm.lean:10`  _(also used by 25: LocalizedProbabilityAssumptions, LocalizedProbabilityAssumptions.ofDeterministic, LocalizedProbabilityAssumptions.ofProcessAndComplexity, …)_
    ◆ `empiricalSphere` — def · `Statlib/Regression/empiricalSphere.lean:11`  _(also used by 1: LocalizedDeterministicAssumptions)_
    ◆ `localizedBall` — def · `Statlib/Regression/localizedBall.lean:11`  _(also used by 1: LocalizedDeterministicAssumptions)_
      ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 97: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, …)_
    ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 66: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
  ▣ `LocalizedProcessAssumptions` — structure · `Statlib/Regression/LocalizedProcessAssumptions.lean:14`  _(also used by 4: LocalizedDeterministicAssumptions.ofProcessAndCI, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
    ◆ `LocalGaussianComplexity` — def · `Statlib/Regression/LocalGaussianComplexity.lean:11`  _(also used by 7: localGaussianComplexity_le_of_satisfiesCriticalInequality, local_gaussian_complexity_bound, local_gaussian_complexity_to_proxy, …)_
    ◆ `empiricalMetricImage` — def · `Statlib/Regression/empiricalMetricImage.lean:11`
    ◆ `dudleyEntropyUpper` — def · `Statlib/Regression/dudleyEntropyUpper.lean:12`  _(also used by 2: local_gaussian_complexity_bound, local_gaussian_complexity_to_proxy)_
  ▣ `LocalGaussianComplexityEntropyAssumptions` — structure · `Statlib/Regression/LocalGaussianComplexityEntropyAssumptions.lean:14`  _(also used by 1: LocalizedDeterministicAssumptions.ofProcessAndEntropy)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 46: LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, capacity_control, …)_
  ▣ `LocalizedProxyCriticalAssumptions` — structure · `Statlib/Regression/LocalizedProxyCriticalAssumptions.lean:17`  _(also used by 1: LocalizedProxyCriticalAssumptions.toDeterministic)_
  ▣ `LocalGaussianComplexityProxyAssumptions` — structure · `Statlib/Regression/LocalGaussianComplexityProxyAssumptions.lean:13`  _(also used by 3: LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, satisfiesCriticalInequality_of_localGaussianComplexityProxyAssumptions)_
    · `dudleyEntropyUpper_le_estimationErrorUpper_of_entropyIntegral_le_Msq` — lemma · `Statlib/Regression/dudleyEntropyUpper_le_estimationErrorUpper_of_entropyIntegral_le_Msq.lean:15`
  · `LocalGaussianComplexityProxyAssumptions.ofEntropy` — lemma · `Statlib/Regression/LocalGaussianComplexityProxyAssumptions_ofEntropy.lean:13`  _(also used by 1: LocalizedDeterministicAssumptions.ofProcessAndEntropy)_
    ★ `local_gaussian_complexity_to_proxy_structured` — theorem · `Statlib/Regression/local_gaussian_complexity_to_proxy_structured.lean:13`  _(also used by 1: satisfiesCriticalInequality_of_localGaussianComplexityProxyAssumptions)_
  · `LocalizedProxyCriticalAssumptions.ofProcessAndComplexity` — lemma · `Statlib/Regression/LocalizedProxyCriticalAssumptions_ofProcessAndComplexity.lean:19`
· `LocalizedProxyCriticalAssumptions.ofProcessAndEntropy` — lemma · `Statlib/Regression/LocalizedProxyCriticalAssumptions_ofProcessAndEntropy.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ IsStarShapedClass"]
  n2["◆ shiftedClass"]
  n3["◆ empiricalNorm"]
  n4["◆ empiricalSphere"]
  n5["◆ localizedBall"]
  n6["◆ stdGaussian"]
  n7["◆ stdGaussianPi"]
  n8["▣ LocalizedProcessAssumptions"]
  n9["◆ LocalGaussianComplexity"]
  n10["◆ empiricalMetricImage"]
  n11["◆ dudleyEntropyUpper"]
  n12["▣ LocalGaussianComplexityEntropyAssumptions"]
  n13["◆ estimationErrorUpper"]
  n14["▣ LocalizedProxyCriticalAssumptions"]
  n15["▣ LocalGaussianComplexityProxyAssumptions"]
  n16["· dudleyEntropyUpper_le_estimationErrorUpper_of_entropyIntegral_le_Msq"]
  n17["· LocalGaussianComplexityProxyAssumptions.ofEntropy"]
  n18["★ local_gaussian_complexity_to_proxy_structured"]
  n19["· LocalizedProxyCriticalAssumptions.ofProcessAndComplexity"]
  n20["· LocalizedProxyCriticalAssumptions.ofProcessAndEntropy"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n3
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n8 --> n2
  n8 --> n4
  n8 --> n5
  n8 --> n7
  n9 --> n0
  n9 --> n5
  n9 --> n7
  n10 --> n0
  n11 --> n0
  n11 --> n10
  n11 --> n5
  n12 --> n0
  n12 --> n9
  n12 --> n11
  n12 --> n10
  n12 --> n5
  n13 --> n0
  n14 --> n0
  n14 --> n9
  n14 --> n2
  n14 --> n13
  n14 --> n1
  n14 --> n4
  n14 --> n5
  n14 --> n7
  n15 --> n0
  n15 --> n9
  n15 --> n11
  n15 --> n13
  n16 --> n0
  n16 --> n10
  n16 --> n5
  n16 --> n11
  n16 --> n13
  n17 --> n0
  n17 --> n12
  n17 --> n15
  n17 --> n16
  n18 --> n0
  n18 --> n15
  n18 --> n9
  n18 --> n13
  n19 --> n0
  n19 --> n8
  n19 --> n15
  n19 --> n2
  n19 --> n13
  n19 --> n14
  n19 --> n18
  n20 --> n0
  n20 --> n8
  n20 --> n12
  n20 --> n2
  n20 --> n13
  n20 --> n14
  n20 --> n15
  n20 --> n17
  n20 --> n19
  class n20 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
