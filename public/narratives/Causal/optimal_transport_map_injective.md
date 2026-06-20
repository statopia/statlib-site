# Proof narrative — optimal_transport_map_injective

Root: **optimal_transport_map_injective** (theorem) `Statlib/Causal/OptimalTransport.lean:220` · topic `Causal`
Closure: 11 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `quantileFunction` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:34`  _(also used by 12: quantileFunction_mono, wasserstein_sq_eq_quantile_integral, individualCausalEffectMap, …)_
  ◆ `optimalTransportMap1D` — noncomputable def · `Statlib/Causal/OptimalTransport.lean:136`  _(also used by 2: causalTransportMap, averageCausalEffectMap_ref_mu0)_
  · `cdf_surjective_Ioo` — private lemma · `Statlib/Causal/OptimalTransport.lean:155`
          · `quantile_levelSet_nonempty` — private lemma · `Statlib/Causal/OptimalTransport.lean:38`  _(also used by 1: quantileFunction_mono)_
          · `quantile_levelSet_bddBelow` — private lemma · `Statlib/Causal/OptimalTransport.lean:48`  _(also used by 1: quantileFunction_mono)_
        · `le_cdf_of_quantileFunction_le` — lemma · `Statlib/Causal/OptimalTransport.lean:76`
        · `quantileFunction_le_of_le_cdf` — lemma · `Statlib/Causal/OptimalTransport.lean:69`
      ★ `quantile_cdf_galois` — theorem · `Statlib/Causal/OptimalTransport.lean:122`
    · `cdf_lt_absurd` — private lemma · `Statlib/Causal/OptimalTransport.lean:185`
  · `cdf_eq_of_quantile_eq_on_Ioo` — private lemma · `Statlib/Causal/OptimalTransport.lean:203`
★ `optimal_transport_map_injective` — theorem · `Statlib/Causal/OptimalTransport.lean:220` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ quantileFunction"]
  n1["◆ optimalTransportMap1D"]
  n2["· cdf_surjective_Ioo"]
  n3["· quantile_levelSet_nonempty"]
  n4["· quantile_levelSet_bddBelow"]
  n5["· le_cdf_of_quantileFunction_le"]
  n6["· quantileFunction_le_of_le_cdf"]
  n7["★ quantile_cdf_galois"]
  n8["· cdf_lt_absurd"]
  n9["· cdf_eq_of_quantile_eq_on_Ioo"]
  n10["★ optimal_transport_map_injective"]
  n1 --> n0
  n5 --> n0
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n4
  n7 --> n0
  n7 --> n5
  n7 --> n6
  n8 --> n0
  n8 --> n7
  n9 --> n0
  n9 --> n8
  n10 --> n1
  n10 --> n0
  n10 --> n2
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
