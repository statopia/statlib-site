# Proof narrative — averageCausalEffectMap_ref_mu0

Root: **averageCausalEffectMap_ref_mu0** (theorem) `Statlib/Causal/OptimalTransport.lean:299` · topic `Causal`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 16: quantileFunction_mono, quantileFunction_le_of_le_cdf, le_cdf_of_quantileFunction_le, …)_
  ◆ `averageCausalEffectMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:269`  _(also used by 6: averageCausalEffectMap_eq_quantile_diff, averageCausalEffectMap_eq_zero_of_eq, causalEffectMap_uniform_eq_qte, …)_
  ◆ `optimalTransportMap1D` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:136`  _(also used by 1: optimal_transport_map_injective)_
  ◆ `causalTransportMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:292`
★ `averageCausalEffectMap_ref_mu0` — theorem · `Statlib/Causal/OptimalTransport.lean:299` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ quantileFunction"]
  n1["◆ averageCausalEffectMap"]
  n2["◆ optimalTransportMap1D"]
  n3["◆ causalTransportMap"]
  n4["★ averageCausalEffectMap_ref_mu0"]
  n1 --> n0
  n2 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  n4 --> n0
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
