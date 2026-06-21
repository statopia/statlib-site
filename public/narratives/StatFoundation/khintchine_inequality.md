# Proof narrative — khintchine_inequality

Root: **khintchine_inequality** (theorem) `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:246` · topic `StatFoundation`
Closure: 6 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `paley_zygmund_sq` — private lemma · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:145`
  · `subgaussian_tail` — private lemma · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:11`
  · `moment_layercake` — private lemma · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:67`
  · `gaussian_moment` — private lemma · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:97`
  · `rademacher_sum_ae_bound` — private lemma · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:210`
★ `khintchine_inequality` — theorem · `Statlib/StatFoundation/Concentration/MomentType/khintchine_inequality.lean:246` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· paley_zygmund_sq"]
  n1["· subgaussian_tail"]
  n2["· moment_layercake"]
  n3["· gaussian_moment"]
  n4["· rademacher_sum_ae_bound"]
  n5["★ khintchine_inequality"]
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
