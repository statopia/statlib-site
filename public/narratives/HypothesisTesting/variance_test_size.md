# Proof narrative — variance_test_size

Root: **variance_test_size** (theorem) `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:2826` · topic `HypothesisTesting`
Closure: 7 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `chiSquaredMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/ChiSquared.lean:22`  _(also used by 10: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 20: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ◆ `sampleVariance` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:19`  _(also used by 15: tStatistic_aemeasurable, t_statistic_asymptotic_normal, t_test_consistent, …)_
  · `chiSquared_isProbabilityMeasure` — lemma · `Statlib/StatFoundation/Probability/ChiSquared.lean:39`  _(also used by 3: wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1)_
    ★ `chiSquared_additivity` — theorem · `Statlib/StatFoundation/Probability/ChiSquared.lean:392`  _(also used by 1: two_sample_pooled_variance_chiSquared)_
  ★ `chiSquared_variance_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:29`  _(also used by 5: one_sample_t_confidence_interval, variance_confidence_interval, one_sample_t_test, …)_
★ `variance_test_size` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:2826` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ chiSquaredMeasure"]
  n1["◆ sampleMean"]
  n2["◆ sampleVariance"]
  n3["· chiSquared_isProbabilityMeasure"]
  n4["★ chiSquared_additivity"]
  n5["★ chiSquared_variance_test"]
  n6["★ variance_test_size"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n5 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n2
  n6 --> n1
  n6 --> n5
  n6 --> n3
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
