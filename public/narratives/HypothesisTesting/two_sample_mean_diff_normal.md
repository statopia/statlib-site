# Proof narrative — two_sample_mean_diff_normal

Root: **two_sample_mean_diff_normal** (theorem) `Statlib/HypothesisTesting/NormalTheory/SampleMean.lean:109` · topic `HypothesisTesting`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 22: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ★ `sample_mean_normal` — theorem · `Statlib/HypothesisTesting/NormalTheory/SampleMean.lean:9`  _(also used by 1: z_test_power)_
★ `two_sample_mean_diff_normal` — theorem · `Statlib/HypothesisTesting/NormalTheory/SampleMean.lean:109` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleMean"]
  n1["★ sample_mean_normal"]
  n2["★ two_sample_mean_diff_normal"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
