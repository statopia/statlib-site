# Proof narrative — glivenko_cantelli_continuous_cdf

Root: **glivenko_cantelli_continuous_cdf** (theorem) `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:312` · topic `StatFoundation`
Closure: 7 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `populationCDF` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:42`
  ◆ `empiricalCDF` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:17`
  · `strong_law_empiricalCDF_at_point` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:68`
  · `uniform_of_pointwise_on_rationals` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:129`
  · `empiricalCDF_mono` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:28`
  · `populationCDF_mono` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:52`
★ `glivenko_cantelli_continuous_cdf` — theorem · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:312` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ populationCDF"]
  n1["◆ empiricalCDF"]
  n2["· strong_law_empiricalCDF_at_point"]
  n3["· uniform_of_pointwise_on_rationals"]
  n4["· empiricalCDF_mono"]
  n5["· populationCDF_mono"]
  n6["★ glivenko_cantelli_continuous_cdf"]
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
