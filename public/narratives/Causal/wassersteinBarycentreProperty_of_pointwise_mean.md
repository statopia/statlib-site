# Proof narrative — wassersteinBarycentreProperty_of_pointwise_mean

Root: **wassersteinBarycentreProperty_of_pointwise_mean** (theorem) `Statlib/Causal/OptimalTransport.lean:407` · topic `Causal`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 17: quantileFunction_mono, quantileFunction_le_of_le_cdf, le_cdf_of_quantileFunction_le, …)_
  ◆ `WassersteinBarycentreProperty` — def · `Statlib/Causal/OptimalTransport.lean:367`  _(also used by 2: causalEffectMap_eq_expectation, causalEffectMap_identification)_
★ `wassersteinBarycentreProperty_of_pointwise_mean` — theorem · `Statlib/Causal/OptimalTransport.lean:407` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ quantileFunction"]
  n1["◆ WassersteinBarycentreProperty"]
  n2["★ wassersteinBarycentreProperty_of_pointwise_mean"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
