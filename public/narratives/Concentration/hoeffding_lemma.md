# Proof narrative — hoeffding_lemma

Root: **hoeffding_lemma** (theorem) `Statlib/Concentration/hoeffding_lemma.lean:29` · topic `Concentration`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `integrable_of_ae_bound` — lemma · `Statlib/Concentration/integrable_of_ae_bound.lean:18`
  · `hoeffding_convexity` — lemma · `Statlib/Concentration/hoeffding_convexity.lean:23`
    · `hoeffding_cgf_bound` — lemma · `Statlib/Concentration/hoeffding_cgf_bound.lean:23`
  · `hoeffding_weighted_exp_bound` — lemma · `Statlib/Concentration/hoeffding_weighted_exp_bound.lean:23`
★ `hoeffding_lemma` — theorem · `Statlib/Concentration/hoeffding_lemma.lean:29` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· integrable_of_ae_bound"]
  n1["· hoeffding_convexity"]
  n2["· hoeffding_cgf_bound"]
  n3["· hoeffding_weighted_exp_bound"]
  n4["★ hoeffding_lemma"]
  n1 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
