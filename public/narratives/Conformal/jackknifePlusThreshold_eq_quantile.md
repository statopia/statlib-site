# Proof narrative — jackknifePlusThreshold_eq_quantile

Root: **jackknifePlusThreshold_eq_quantile** (lemma) `Statlib/Conformal/jackknifePlusThreshold_eq_quantile.lean:13` · topic `Conformal`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `orderStat` — noncomputable def · `Statlib/Conformal/Basic.lean:65`  _(also used by 1: coverage_event_iff_rank_le)_
  ◆ `conformalQuantile` — noncomputable def · `Statlib/Conformal/Basic.lean:78`  _(also used by 8: coverage_event_iff_rank_le, jackknifePlusCoveredEvent_iff, marginal_coverage, …)_
  ◆ `jackknifePlusThreshold` — noncomputable def · `Statlib/Conformal/jackknifePlusThreshold.lean:18`  _(also used by 1: jackknifePlusCoveredEvent)_
· `jackknifePlusThreshold_eq_quantile` — lemma · `Statlib/Conformal/jackknifePlusThreshold_eq_quantile.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ orderStat"]
  n1["◆ conformalQuantile"]
  n2["◆ jackknifePlusThreshold"]
  n3["· jackknifePlusThreshold_eq_quantile"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
