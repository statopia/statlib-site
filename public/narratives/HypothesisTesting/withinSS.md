# Proof narrative — withinSS

Root: **withinSS** (def) `Statlib/HypothesisTesting/NormalTheory/ANOVA.lean:22` · topic `HypothesisTesting`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `sampleMean` — def · `Statlib/HypothesisTesting/NormalTheory/VarianceTest.lean:15`  _(also used by 22: mle_asymptotic_normal, wald_statistic_asymptotic_chisq1, tStatistic_aemeasurable, …)_
  ◆ `groupMean` — def · `Statlib/HypothesisTesting/NormalTheory/ANOVA.lean:10`  _(also used by 1: betweenSS)_
◆ `withinSS` — def · `Statlib/HypothesisTesting/NormalTheory/ANOVA.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleMean"]
  n1["◆ groupMean"]
  n2["◆ withinSS"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
