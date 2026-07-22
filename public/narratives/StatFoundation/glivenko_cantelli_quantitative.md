# Proof narrative — glivenko_cantelli_quantitative

Root: **glivenko_cantelli_quantitative** (theorem) `Statlib/StatFoundation/EmpiricalProcess/GlivenkoCantelliQuantitative.lean:937` · topic `StatFoundation`
Closure: 7 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `empiricalCDF` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:17`  _(also used by 3: empiricalCDF_mono, strong_law_empiricalCDF_at_point, glivenko_cantelli_continuous_cdf)_
  ◆ `populationCDF` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:42`  _(also used by 2: strong_law_empiricalCDF_at_point, glivenko_cantelli_continuous_cdf)_
    · `populationCDF_mono` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/GlivenkoCantelli.lean:52`  _(also used by 1: glivenko_cantelli_continuous_cdf)_
      ★ `hoeffding_bounded_sum_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/hoeffding_bounded_sum_meas_ge_le_exp.lean:10`
    · `indicator_sum_ge_of_prob_le` — private lemma · `Statlib/StatFoundation/EmpiricalProcess/GlivenkoCantelliQuantitative.lean:10`
  ★ `glivenko_cantelli_one_sided_positive` — theorem · `Statlib/StatFoundation/EmpiricalProcess/GlivenkoCantelliQuantitative.lean:116`
★ `glivenko_cantelli_quantitative` — theorem · `Statlib/StatFoundation/EmpiricalProcess/GlivenkoCantelliQuantitative.lean:937` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ empiricalCDF"]
  n1["◆ populationCDF"]
  n2["· populationCDF_mono"]
  n3["★ hoeffding_bounded_sum_meas_ge_le_exp"]
  n4["· indicator_sum_ge_of_prob_le"]
  n5["★ glivenko_cantelli_one_sided_positive"]
  n6["★ glivenko_cantelli_quantitative"]
  n2 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
