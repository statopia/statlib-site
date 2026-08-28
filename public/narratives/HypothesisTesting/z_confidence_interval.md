# Proof narrative — z_confidence_interval

Root: **z_confidence_interval** (theorem) `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:39` · topic `HypothesisTesting`
Closure: 6 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsConfidenceInterval` — def · `Statlib/HypothesisTesting/Inference/ConfidenceInterval.lean:33`  _(also used by 4: one_sample_t_confidence_interval, two_sample_t_confidence_interval, variance_confidence_interval, …)_
  ◆ `meanCI` — def · `Statlib/HypothesisTesting/Inference/ConfidenceInterval.lean:27`  _(also used by 2: one_sample_t_confidence_interval, two_sample_t_confidence_interval)_
  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 22: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
    ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 81: single_square_law, wald_statistic_asymptotic_chisq1, score_statistic_asymptotic_chisq1, …)_
  ★ `one_sample_z_test` — theorem · `Statlib/HypothesisTesting/NormalTheory/ZTest.lean:14`  _(also used by 1: one_sample_t_test)_
★ `z_confidence_interval` — theorem · `Statlib/HypothesisTesting/Inference/NormalTheoryConfidence.lean:39` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsConfidenceInterval"]
  n1["◆ meanCI"]
  n2["◆ sampleMean"]
  n3["◆ standardReal"]
  n4["★ one_sample_z_test"]
  n5["★ z_confidence_interval"]
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
