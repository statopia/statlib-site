# Proof narrative — kolm_cross_term_zero

Root: **kolm_cross_term_zero** (lemma) `Statlib/LimitTheorems/kolm_cross_term_zero.lean:30` · topic `LimitTheorems`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `kolm_partialSumOnIic` — noncomputable def · `Statlib/LimitTheorems/kolm_partialSumOnIic.lean:28`  _(also used by 2: kolm_partialSumOnIic_eq, kolm_skIndicator_eq_indicator)_
  ◆ `kolm_skIndicator` — noncomputable def · `Statlib/LimitTheorems/kolm_skIndicator.lean:29`  _(also used by 1: kolm_skIndicator_eq_indicator)_
  · `measurable_kolm_skIndicator` — lemma · `Statlib/LimitTheorems/measurable_kolm_skIndicator.lean:28`
· `kolm_cross_term_zero` — lemma · `Statlib/LimitTheorems/kolm_cross_term_zero.lean:30` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ kolm_partialSumOnIic"]
  n1["◆ kolm_skIndicator"]
  n2["· measurable_kolm_skIndicator"]
  n3["· kolm_cross_term_zero"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
