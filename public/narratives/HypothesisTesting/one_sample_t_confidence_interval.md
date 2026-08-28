# Proof narrative — one_sample_t_confidence_interval

Root: **one_sample_t_confidence_interval** (theorem) `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:121` · topic `HypothesisTesting`
Closure: 16 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsConfidenceInterval` — def · `Statlib/HypothesisTesting/Inference/ConfidenceInterval.lean:33`  _(also used by 4: z_confidence_interval, two_sample_t_confidence_interval, variance_confidence_interval, …)_
  ◆ `meanCI` — def · `Statlib/HypothesisTesting/Inference/ConfidenceInterval.lean:27`  _(also used by 2: z_confidence_interval, two_sample_t_confidence_interval)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 19: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ◆ `sampleVariance` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:19`  _(also used by 14: tStatistic_aemeasurable, t_statistic_asymptotic_normal, t_test_consistent, …)_
      ◆ `tPdfReal` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:25`  _(also used by 4: two_sample_t_test, t_isProbabilityMeasure, t_mean, …)_
    ◆ `tMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:31`  _(also used by 4: two_sample_t_test, t_isProbabilityMeasure, t_mean, …)_
    ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 78: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
    ★ `one_sample_z_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/ZTest.lean:14`  _(also used by 1: z_confidence_interval)_
      ◆ `chiSquaredMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/ChiSquared.lean:22`  _(also used by 10: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
      · `chiSquared_isProbabilityMeasure` — lemma · `Statlib/StatFoundation/Probability/ChiSquared.lean:39`  _(also used by 4: wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, …)_
      ★ `chiSquared_additivity` — theorem · `Statlib/StatFoundation/Probability/ChiSquared.lean:392`  _(also used by 1: two_sample_pooled_variance_chiSquared)_
  ★ `chiSquared_variance_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:29`  _(also used by 4: variance_confidence_interval, two_sample_pooled_variance_chiSquared, two_sample_variance_ratio_test, …)_
    ★ `t_measure_eq_ratio` — theorem · `Statlib/StatFoundation/Probability/TDistribution.lean:573`  _(also used by 1: two_sample_t_test)_
    ◆ `standardPi` — def · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:34`  _(also used by 23: standardPi_sFinite, standardPi_logSobolev_smooth_finiteFisher, standardPi_integral_finCons, …)_
  ★ `one_sample_t_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/TTest.lean:1270`  _(also used by 1: paired_t_test)_
★ `one_sample_t_confidence_interval` — theorem · `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:121` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsConfidenceInterval"]
  n1["◆ meanCI"]
  n2["◆ sampleMean"]
  n3["◆ sampleVariance"]
  n4["◆ tPdfReal"]
  n5["◆ tMeasure"]
  n6["◆ standardReal"]
  n7["★ one_sample_z_test"]
  n8["◆ chiSquaredMeasure"]
  n9["· chiSquared_isProbabilityMeasure"]
  n10["★ chiSquared_additivity"]
  n11["★ chiSquared_variance_test"]
  n12["★ t_measure_eq_ratio"]
  n13["◆ standardPi"]
  n14["★ one_sample_t_test"]
  n15["★ one_sample_t_confidence_interval"]
  n3 --> n2
  n5 --> n4
  n7 --> n6
  n9 --> n8
  n10 --> n8
  n11 --> n3
  n11 --> n8
  n11 --> n2
  n11 --> n9
  n11 --> n10
  n12 --> n8
  n12 --> n5
  n12 --> n6
  n12 --> n4
  n13 --> n6
  n14 --> n2
  n14 --> n3
  n14 --> n5
  n14 --> n6
  n14 --> n7
  n14 --> n11
  n14 --> n12
  n14 --> n13
  n15 --> n0
  n15 --> n1
  n15 --> n2
  n15 --> n3
  n15 --> n14
  n15 --> n11
  class n15 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
