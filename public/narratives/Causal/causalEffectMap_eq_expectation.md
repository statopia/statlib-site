# Proof narrative — causalEffectMap_eq_expectation

Root: **causalEffectMap_eq_expectation** (theorem) `Statlib/Causal/OptimalTransport.lean:423` · topic `Causal`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 15: quantileFunction_mono, quantileFunction_le_of_le_cdf, le_cdf_of_quantileFunction_le, …)_
  ◆ `WassersteinBarycentreProperty` — def · `Statlib/Causal/OptimalTransport.lean:367`  _(also used by 2: wassersteinBarycentreProperty_of_pointwise_mean, causalEffectMap_identification)_
  ◆ `averageCausalEffectMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:269`  _(also used by 6: averageCausalEffectMap_eq_quantile_diff, averageCausalEffectMap_eq_zero_of_eq, averageCausalEffectMap_ref_mu0, …)_
  ◆ `individualCausalEffectMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:258`
★ `causalEffectMap_eq_expectation` — theorem · `Statlib/Causal/OptimalTransport.lean:423` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ quantileFunction"]
  n1["◆ WassersteinBarycentreProperty"]
  n2["◆ averageCausalEffectMap"]
  n3["◆ individualCausalEffectMap"]
  n4["★ causalEffectMap_eq_expectation"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
