# Proof narrative — glivenko_cantelli

Root: **glivenko_cantelli** (theorem) `Statlib/LimitTheorems/glivenko_cantelli.lean:43` · topic `LimitTheorems`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `populationCDF` — noncomputable def · `Statlib/LimitTheorems/populationCDF.lean:25`
  ◆ `empiricalCDF` — noncomputable def · `Statlib/LimitTheorems/empiricalCDF.lean:25`
  · `slln_cdf_at_point` — lemma · `Statlib/LimitTheorems/slln_cdf_at_point.lean:30`
  · `uniform_of_pointwise_on_rationals` — lemma · `Statlib/LimitTheorems/uniform_of_pointwise_on_rationals.lean:33`
  · `empiricalCDF_mono` — lemma · `Statlib/LimitTheorems/empiricalCDF_mono.lean:26`
  · `populationCDF_mono` — lemma · `Statlib/LimitTheorems/populationCDF_mono.lean:25`
★ `glivenko_cantelli` — theorem · `Statlib/LimitTheorems/glivenko_cantelli.lean:43` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ populationCDF"]
  n1["◆ empiricalCDF"]
  n2["· slln_cdf_at_point"]
  n3["· uniform_of_pointwise_on_rationals"]
  n4["· empiricalCDF_mono"]
  n5["· populationCDF_mono"]
  n6["★ glivenko_cantelli"]
  n2 --> n1
  n2 --> n0
  n4 --> n1
  n5 --> n0
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
