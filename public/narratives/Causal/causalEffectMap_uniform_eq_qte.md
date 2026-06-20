# Proof narrative — causalEffectMap_uniform_eq_qte

Root: **causalEffectMap_uniform_eq_qte** (theorem) `Statlib/Causal/OptimalTransport.lean:342` · topic `Causal`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 17: quantileFunction_mono, quantileFunction_le_of_le_cdf, le_cdf_of_quantileFunction_le, …)_
  ◆ `averageCausalEffectMap` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:269`  _(also used by 6: averageCausalEffectMap_eq_quantile_diff, averageCausalEffectMap_eq_zero_of_eq, averageCausalEffectMap_ref_mu0, …)_
  ◆ `quantileTreatmentEffect` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:327`
★ `causalEffectMap_uniform_eq_qte` — theorem · `Statlib/Causal/OptimalTransport.lean:342` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ quantileFunction"]
  n1["◆ averageCausalEffectMap"]
  n2["◆ quantileTreatmentEffect"]
  n3["★ causalEffectMap_uniform_eq_qte"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
