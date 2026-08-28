# Proof narrative — paired_t_test

Root: **paired_t_test** (theorem) `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:440` · topic `HypothesisTesting`
Closure: 14 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 19: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ◆ `sampleVariance` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:19`  _(also used by 14: tStatistic_aemeasurable, t_statistic_asymptotic_normal, t_test_consistent, …)_
      ◆ `tPdfReal` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:25`  _(also used by 4: two_sample_t_test, t_isProbabilityMeasure, t_mean, …)_
    ◆ `tMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:31`  _(also used by 4: two_sample_t_test, t_isProbabilityMeasure, t_mean, …)_
    ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 78: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
    ★ `one_sample_z_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/ZTest.lean:14`  _(also used by 1: z_confidence_interval)_
      ◆ `chiSquaredMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/ChiSquared.lean:22`  _(also used by 10: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
      · `chiSquared_isProbabilityMeasure` — lemma · `Statlib/StatFoundation/Probability/ChiSquared.lean:39`  _(also used by 4: wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, lrt_statistic_asymptotic_chisq1, …)_
      ★ `chiSquared_additivity` — theorem · `Statlib/StatFoundation/Probability/ChiSquared.lean:392`  _(also used by 1: two_sample_pooled_variance_chiSquared)_
    ★ `chiSquared_variance_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:29`  _(also used by 5: one_sample_t_confidence_interval, variance_confidence_interval, two_sample_pooled_variance_chiSquared, …)_
    ★ `t_measure_eq_ratio` — theorem · `Statlib/StatFoundation/Probability/TDistribution.lean:573`  _(also used by 1: two_sample_t_test)_
    ◆ `standardPi` — def · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:34`  _(also used by 23: standardPi_sFinite, standardPi_logSobolev_smooth_finiteFisher, standardPi_integral_finCons, …)_
  ★ `one_sample_t_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/TTest.lean:1270`  _(also used by 1: one_sample_t_confidence_interval)_
★ `paired_t_test` — theorem · `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:440` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleMean"]
  n1["◆ sampleVariance"]
  n2["◆ tPdfReal"]
  n3["◆ tMeasure"]
  n4["◆ standardReal"]
  n5["★ one_sample_z_test"]
  n6["◆ chiSquaredMeasure"]
  n7["· chiSquared_isProbabilityMeasure"]
  n8["★ chiSquared_additivity"]
  n9["★ chiSquared_variance_test"]
  n10["★ t_measure_eq_ratio"]
  n11["◆ standardPi"]
  n12["★ one_sample_t_test"]
  n13["★ paired_t_test"]
  n1 --> n0
  n3 --> n2
  n5 --> n4
  n7 --> n6
  n8 --> n6
  n9 --> n1
  n9 --> n6
  n9 --> n0
  n9 --> n7
  n9 --> n8
  n10 --> n6
  n10 --> n3
  n10 --> n4
  n10 --> n2
  n11 --> n4
  n12 --> n0
  n12 --> n1
  n12 --> n3
  n12 --> n4
  n12 --> n5
  n12 --> n9
  n12 --> n10
  n12 --> n11
  n13 --> n0
  n13 --> n1
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
