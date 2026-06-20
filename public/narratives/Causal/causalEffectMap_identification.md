# Proof narrative — causalEffectMap_identification

Root: **causalEffectMap_identification** (theorem) `Statlib/Causal/OptimalTransport.lean:482` · topic `Causal`
Closure: 11 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CausalModel` — structure · `Statlib/Causal/Basic.lean:32`  _(also used by 1: Ignorability.symm)_
    ◆ `sigmaX` — def · `Statlib/Causal/Basic.lean:61`  _(also used by 1: Ignorability.symm)_
    ★ `sigmaX_le` — theorem · `Statlib/Causal/Basic.lean:65`  _(also used by 1: Ignorability.symm)_
  ◆ `Ignorability` — def · `Statlib/Causal/Basic.lean:75`  _(also used by 1: Ignorability.symm)_
  ◆ `propensityScore` — noncomputable def · `Statlib/Causal/Basic.lean:86`  _(also used by 4: Positivity.propensityScore_pos, Positivity.propensityScore_lt_one, doublyRobustEstimatingFunction, …)_
  ◆ `Positivity` — def · `Statlib/Causal/Basic.lean:95`  _(also used by 2: Positivity.propensityScore_pos, Positivity.propensityScore_lt_one)_
  ◆ `observedOutcome` — def · `Statlib/Causal/Basic.lean:117`  _(also used by 1: sutva)_
  ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 16: quantileFunction_mono, quantileFunction_le_of_le_cdf, le_cdf_of_quantileFunction_le, …)_
  ◆ `WassersteinBarycentreProperty` — def · `Statlib/Causal/OptimalTransport.lean:367`  _(also used by 2: wassersteinBarycentreProperty_of_pointwise_mean, causalEffectMap_eq_expectation)_
  ◆ `averageCausalEffectMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:269`  _(also used by 6: averageCausalEffectMap_eq_quantile_diff, averageCausalEffectMap_eq_zero_of_eq, averageCausalEffectMap_ref_mu0, …)_
★ `causalEffectMap_identification` — theorem · `Statlib/Causal/OptimalTransport.lean:482` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CausalModel"]
  n1["◆ sigmaX"]
  n2["★ sigmaX_le"]
  n3["◆ Ignorability"]
  n4["◆ propensityScore"]
  n5["◆ Positivity"]
  n6["◆ observedOutcome"]
  n7["◆ quantileFunction"]
  n8["◆ WassersteinBarycentreProperty"]
  n9["◆ averageCausalEffectMap"]
  n10["★ causalEffectMap_identification"]
  n2 --> n1
  n3 --> n1
  n3 --> n2
  n4 --> n1
  n5 --> n4
  n8 --> n7
  n9 --> n7
  n10 --> n0
  n10 --> n3
  n10 --> n5
  n10 --> n6
  n10 --> n8
  n10 --> n7
  n10 --> n4
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
