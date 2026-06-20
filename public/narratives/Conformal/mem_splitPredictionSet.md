# Proof narrative — mem_splitPredictionSet

Root: **mem_splitPredictionSet** (lemma) `Statlib/Conformal/mem_splitPredictionSet.lean:14` · topic `Conformal`
Closure: 5 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ScoreFunction` — abbrev · `Statlib/Conformal/ScoreFunction.lean:12`
      ◆ `orderStat` — noncomputable def · `Statlib/Conformal/Basic.lean:65`  _(also used by 1: coverage_event_iff_rank_le)_
  ◆ `conformalQuantile` — noncomputable def · `Statlib/Conformal/Basic.lean:78`  _(also used by 8: coverage_event_iff_rank_le, jackknifePlusCoveredEvent_iff, jackknifePlusThreshold, …)_
  ◆ `splitPredictionSet` — def · `Statlib/Conformal/splitPredictionSet.lean:14`
· `mem_splitPredictionSet` — lemma · `Statlib/Conformal/mem_splitPredictionSet.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ScoreFunction"]
  n1["◆ orderStat"]
  n2["◆ conformalQuantile"]
  n3["◆ splitPredictionSet"]
  n4["· mem_splitPredictionSet"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
