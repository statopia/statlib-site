# Proof narrative — mestimator_consistent_sample_average_finite

Root: **mestimator_consistent_sample_average_finite** (theorem) `Statlib/StatFoundation/Statistics/Estimation/Consistency.lean:171` · topic `StatFoundation`
Closure: 5 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsMEstimatorOn` — def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:102`  _(also used by 1: mestimator_asymptotic_normal_of_linearization)_
  ★ `tendstoInMeasure_iff_measureReal_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:617`  _(also used by 1: mle_asymptotic_normal_vec_cov)_
  ★ `finite_mestimator_consistent_of_uniform_gap` — theorem · `Statlib/StatFoundation/Statistics/Estimation/Consistency.lean:34`
  · `iSup_prop_le` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:143`  _(also used by 2: le_oscEnvelope, oscEnvelope_le_two_mul)_
★ `mestimator_consistent_sample_average_finite` — theorem · `Statlib/StatFoundation/Statistics/Estimation/Consistency.lean:171` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsMEstimatorOn"]
  n1["★ tendstoInMeasure_iff_measureReal_dist"]
  n2["★ finite_mestimator_consistent_of_uniform_gap"]
  n3["· iSup_prop_le"]
  n4["★ mestimator_consistent_sample_average_finite"]
  n2 --> n0
  n2 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n3
  n4 --> n1
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
