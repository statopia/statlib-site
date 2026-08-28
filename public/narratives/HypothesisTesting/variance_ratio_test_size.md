# Proof narrative — variance_ratio_test_size

Root: **variance_ratio_test_size** (theorem) `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:2874` · topic `HypothesisTesting`
Closure: 12 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `fPdfReal` — noncomputable def · `Statlib/StatFoundation/Probability/FDistribution.lean:24`  _(also used by 2: f_mean, f_variance)_
  ◆ `fMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/FDistribution.lean:32`  _(also used by 3: variance_ratio_confidence_interval, f_mean, f_variance)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 19: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ◆ `sampleVariance` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:19`  _(also used by 14: tStatistic_aemeasurable, t_statistic_asymptotic_normal, t_test_consistent, …)_
    ◆ `chiSquaredMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/ChiSquared.lean:22`  _(also used by 9: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
      · `chiSquared_isProbabilityMeasure` — lemma · `Statlib/StatFoundation/Probability/ChiSquared.lean:39`  _(also used by 4: wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, …)_
      ★ `chiSquared_additivity` — theorem · `Statlib/StatFoundation/Probability/ChiSquared.lean:392`  _(also used by 1: two_sample_pooled_variance_chiSquared)_
    ★ `chiSquared_variance_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:29`  _(also used by 5: one_sample_t_confidence_interval, variance_confidence_interval, one_sample_t_test, …)_
    ★ `f_measure_eq_ratio` — theorem · `Statlib/StatFoundation/Probability/FDistribution.lean:544`
  ★ `two_sample_variance_ratio_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:2365`  _(also used by 1: variance_ratio_confidence_interval)_
  ★ `f_isProbabilityMeasure` — theorem · `Statlib/StatFoundation/Probability/FDistribution.lean:39`  _(also used by 1: f_variance)_
★ `variance_ratio_test_size` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:2874` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ fPdfReal"]
  n1["◆ fMeasure"]
  n2["◆ sampleMean"]
  n3["◆ sampleVariance"]
  n4["◆ chiSquaredMeasure"]
  n5["· chiSquared_isProbabilityMeasure"]
  n6["★ chiSquared_additivity"]
  n7["★ chiSquared_variance_test"]
  n8["★ f_measure_eq_ratio"]
  n9["★ two_sample_variance_ratio_test"]
  n10["★ f_isProbabilityMeasure"]
  n11["★ variance_ratio_test_size"]
  n1 --> n0
  n3 --> n2
  n5 --> n4
  n6 --> n4
  n7 --> n3
  n7 --> n4
  n7 --> n2
  n7 --> n5
  n7 --> n6
  n8 --> n4
  n8 --> n1
  n8 --> n0
  n9 --> n3
  n9 --> n1
  n9 --> n4
  n9 --> n7
  n9 --> n2
  n9 --> n8
  n10 --> n1
  n10 --> n0
  n11 --> n1
  n11 --> n3
  n11 --> n2
  n11 --> n9
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
