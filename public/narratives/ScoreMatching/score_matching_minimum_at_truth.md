# Proof narrative — score_matching_minimum_at_truth

Root: **score_matching_minimum_at_truth** (axiom) `Statlib/ScoreMatching/score_matching_minimum_at_truth.lean:19` · topic `ScoreMatching`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `scoreFun` — noncomputable def · `Statlib/ScoreMatching/scoreFun.lean:15`  _(also used by 2: hyvarinenLoss, scoreFun_zero_at_zero)_
  ◆ `fisherDivergence` — noncomputable def · `Statlib/ScoreMatching/fisherDivergence.lean:17`  _(also used by 1: fisherDivergence_self)_
⚠ `score_matching_minimum_at_truth` — axiom · `Statlib/ScoreMatching/score_matching_minimum_at_truth.lean:19` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ scoreFun"]
  n1["◆ fisherDivergence"]
  n2["⚠ score_matching_minimum_at_truth"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  class n2 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```

> ⚠ `score_matching_minimum_at_truth` is an **axiom** (no proof body), so its closure only covers declarations referenced in its *statement*. Supporting lemmas in `ScoreMatching/` that were meant to prove it are not edge-connected — a signal that the proof line was atomised then axiomatised apart.
