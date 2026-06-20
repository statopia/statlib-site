# Proof narrative — kolm_skIndicator_eq_indicator

Root: **kolm_skIndicator_eq_indicator** (lemma) `Statlib/LimitTheorems/kolm_skIndicator_eq_indicator.lean:31` · topic `LimitTheorems`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `kolm_partialSumOnIic` — noncomputable def · `Statlib/LimitTheorems/kolm_partialSumOnIic.lean:28`  _(also used by 1: measurable_kolm_skIndicator)_
  ◆ `kolm_skIndicator` — noncomputable def · `Statlib/LimitTheorems/kolm_skIndicator.lean:29`  _(also used by 2: kolm_cross_term_zero, measurable_kolm_skIndicator)_
  · `kolm_partialSumOnIic_eq` — lemma · `Statlib/LimitTheorems/kolm_partialSumOnIic_eq.lean:27`
· `kolm_skIndicator_eq_indicator` — lemma · `Statlib/LimitTheorems/kolm_skIndicator_eq_indicator.lean:31` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ kolm_partialSumOnIic"]
  n1["◆ kolm_skIndicator"]
  n2["· kolm_partialSumOnIic_eq"]
  n3["· kolm_skIndicator_eq_indicator"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
