# Proof narrative — LocalizedProxyCriticalAssumptions.toDeterministic

Root: **LocalizedProxyCriticalAssumptions.toDeterministic** (lemma) `Statlib/Regression/LocalizedProxyCriticalAssumptions_toDeterministic.lean:14` · topic `Regression`
Closure: 15 declarations across 14 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 71: excessRisk, LocalGaussianComplexityEntropyAssumptions, LocalGaussianComplexityProxyAssumptions, …)_
      ◆ `empiricalNorm` — def · `Statlib/Regression/empiricalNorm.lean:10`  _(also used by 25: LocalizedProbabilityAssumptions, LocalizedProbabilityAssumptions.ofDeterministic, LocalizedProbabilityAssumptions.ofProcessAndComplexity, …)_
    ◆ `localizedBall` — def · `Statlib/Regression/localizedBall.lean:11`  _(also used by 4: LocalGaussianComplexityEntropyAssumptions, LocalizedProcessAssumptions, dudleyEntropyUpper, …)_
        ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 97: TensorizationLSIAt, stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, …)_
    ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 66: TensorizationLSIAt, GaussianSobolevRegularity, isProbabilityMeasure_stdGaussianPi, …)_
    ◆ `LocalGaussianComplexity` — def · `Statlib/Regression/LocalGaussianComplexity.lean:11`  _(also used by 8: LocalGaussianComplexityEntropyAssumptions, LocalGaussianComplexityProxyAssumptions, localGaussianComplexity_le_of_satisfiesCriticalInequality, …)_
  ◆ `shiftedClass` — def · `Statlib/Regression/shiftedClass.lean:10`  _(also used by 6: LocalizedDeterministicAssumptions.ofProcessAndCI, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
    ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 50: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
    ◆ `IsStarShapedClass` — def · `Statlib/Regression/IsStarShapedClass.lean:10`  _(also used by 1: LocalizedProcessAssumptions)_
    ◆ `empiricalSphere` — def · `Statlib/Regression/empiricalSphere.lean:11`  _(also used by 1: LocalizedProcessAssumptions)_
  ▣ `LocalizedProxyCriticalAssumptions` — structure · `Statlib/Regression/LocalizedProxyCriticalAssumptions.lean:17`  _(also used by 2: LocalizedProxyCriticalAssumptions.ofProcessAndComplexity, LocalizedProxyCriticalAssumptions.ofProcessAndEntropy)_
    ◆ `satisfiesCriticalInequality` — def · `Statlib/Regression/satisfiesCriticalInequality.lean:11`  _(also used by 6: LocalizedDeterministicAssumptions.ofProcessAndCI, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  ▣ `LocalizedDeterministicAssumptions` — structure · `Statlib/Regression/LocalizedDeterministicAssumptions.lean:15`  _(also used by 4: LocalizedDeterministicAssumptions.ofProcessAndCI, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  · `satisfiesCriticalInequality_of_proxy_bound` — lemma · `Statlib/Regression/satisfiesCriticalInequality_of_proxy_bound.lean:13`  _(also used by 1: satisfiesCriticalInequality_of_localGaussianComplexityProxyAssumptions)_
· `LocalizedProxyCriticalAssumptions.toDeterministic` — lemma · `Statlib/Regression/LocalizedProxyCriticalAssumptions_toDeterministic.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ empiricalNorm"]
  n2["◆ localizedBall"]
  n3["◆ stdGaussian"]
  n4["◆ stdGaussianPi"]
  n5["◆ LocalGaussianComplexity"]
  n6["◆ shiftedClass"]
  n7["◆ estimationErrorUpper"]
  n8["◆ IsStarShapedClass"]
  n9["◆ empiricalSphere"]
  n10["▣ LocalizedProxyCriticalAssumptions"]
  n11["◆ satisfiesCriticalInequality"]
  n12["▣ LocalizedDeterministicAssumptions"]
  n13["· satisfiesCriticalInequality_of_proxy_bound"]
  n14["· LocalizedProxyCriticalAssumptions.toDeterministic"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n7 --> n0
  n8 --> n0
  n9 --> n0
  n9 --> n1
  n10 --> n0
  n10 --> n5
  n10 --> n6
  n10 --> n7
  n10 --> n8
  n10 --> n9
  n10 --> n2
  n10 --> n4
  n11 --> n0
  n11 --> n5
  n12 --> n0
  n12 --> n11
  n12 --> n6
  n12 --> n8
  n12 --> n9
  n12 --> n2
  n12 --> n4
  n13 --> n0
  n13 --> n5
  n13 --> n7
  n13 --> n11
  n14 --> n0
  n14 --> n10
  n14 --> n12
  n14 --> n13
  n14 --> n6
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
