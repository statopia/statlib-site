# Proof narrative — bootstrap_coverage_from_distance_and_anticonc

Root: **bootstrap_coverage_from_distance_and_anticonc** (theorem) `Statlib/StatFoundation/Convergence/Resampling/BootstrapInterface.lean:143` · topic `StatFoundation`
Closure: 14 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMultiplierWeights` — structure · `Statlib/StatFoundation/Vocabulary/Resampling.lean:44`  _(also used by 4: multiplierSumVec_mean_zero, multiplierSumVec_covariance_eq_sampleGram, variance_linearFunctional, …)_
  ◆ `IsQuantileLevel` — def · `Statlib/StatFoundation/Vocabulary/MaxType.lean:61`  _(also used by 1: IsBootstrapCriticalValue)_
  ◆ `KolmogorovDistanceLe` — def · `Statlib/StatFoundation/Vocabulary/MaxType.lean:56`
  ◆ `maxCoord` — noncomputable def · `Statlib/StatFoundation/Vocabulary/MaxType.lean:34`  _(also used by 7: smoothMax_bounds_max_log_card, maxCoord_lipschitz, maxCoord_lipschitz_ineq, …)_
    ◆ `multiplierSumVec` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Resampling.lean:55`  _(also used by 5: multiplierSumVec_mean_zero, multiplierSumVec_covariance_eq_sampleGram, variance_linearFunctional, …)_
  ◆ `bootstrapMaxLaw` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Resampling.lean:64`
  ◆ `maxCoordLaw` — noncomputable abbrev · `Statlib/StatFoundation/Vocabulary/MaxType.lean:45`  _(also used by 1: gaussianMax_nazarov_anticoncentration_interface)_
  ◆ `HasIntervalAntiConcentration` — def · `Statlib/StatFoundation/Vocabulary/Resampling.lean:36`  _(also used by 2: maxLaw_CDF_bound_of_coordinatewise_proximity, gaussianMax_nazarov_anticoncentration_interface)_
  ★ `gaussianReal_interval_antiConcentration` — theorem · `Statlib/StatFoundation/Convergence/Resampling/AntiConcentration.lean:22`  _(also used by 1: gaussianMax_nazarov_anticoncentration_interface)_
  ★ `maxCoord_measurable` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/MaxType.lean:29`  _(also used by 1: maxLaw_CDF_bound_of_coordinatewise_proximity)_
  ★ `finite_max_antiConcentration_union` — theorem · `Statlib/StatFoundation/Convergence/Resampling/AntiConcentration.lean:67`  _(also used by 1: gaussianMax_nazarov_anticoncentration_interface)_
  ★ `bootstrapMaxLaw_isProbabilityMeasure` — theorem · `Statlib/StatFoundation/Convergence/Resampling/BootstrapInterface.lean:52`
  ★ `kolmogorov_distance_transfer_to_quantile_coverage` — theorem · `Statlib/StatFoundation/Convergence/Resampling/BootstrapInterface.lean:74`
★ `bootstrap_coverage_from_distance_and_anticonc` — theorem · `Statlib/StatFoundation/Convergence/Resampling/BootstrapInterface.lean:143` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasMultiplierWeights"]
  n1["◆ IsQuantileLevel"]
  n2["◆ KolmogorovDistanceLe"]
  n3["◆ maxCoord"]
  n4["◆ multiplierSumVec"]
  n5["◆ bootstrapMaxLaw"]
  n6["◆ maxCoordLaw"]
  n7["◆ HasIntervalAntiConcentration"]
  n8["★ gaussianReal_interval_antiConcentration"]
  n9["★ maxCoord_measurable"]
  n10["★ finite_max_antiConcentration_union"]
  n11["★ bootstrapMaxLaw_isProbabilityMeasure"]
  n12["★ kolmogorov_distance_transfer_to_quantile_coverage"]
  n13["★ bootstrap_coverage_from_distance_and_anticonc"]
  n5 --> n3
  n5 --> n4
  n6 --> n3
  n8 --> n7
  n9 --> n3
  n10 --> n7
  n10 --> n3
  n10 --> n9
  n11 --> n0
  n11 --> n5
  n11 --> n4
  n11 --> n3
  n11 --> n9
  n12 --> n1
  n12 --> n7
  n12 --> n2
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n5
  n13 --> n6
  n13 --> n7
  n13 --> n8
  n13 --> n3
  n13 --> n10
  n13 --> n11
  n13 --> n9
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
