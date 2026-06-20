# Proof narrative — vw_2_14_9_concrete_of_uniform_layer_bound

Root: **vw_2_14_9_concrete_of_uniform_layer_bound** (lemma) `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:364` · topic `Mathlib`
Closure: 8 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `vw_2_14_9_concrete` — def · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:348`
        ★ `chain_telescoping_max` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:129`
          ◆ `Contiguity` — def · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:86`  _(also used by 8: LANToLeCamBundle, fromCoxScoreSample, identityCov, …)_
  ★ `trans` — theorem · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:104`  _(also used by 9: davis_kahan_inner_bound, davis_kahan_finite_dim_squared, davisKahanSinTheta_of_finiteDim_aux, …)_
      ★ `chain_subset_layers` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:165`
    ★ `max_chain_tail` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:215`
  ★ `max_chain_dyadic_tail` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:261`
· `vw_2_14_9_concrete_of_uniform_layer_bound` — lemma · `Statlib/Mathlib/EmpiricalProcess/VWChainingInduction.lean:364` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ vw_2_14_9_concrete"]
  n1["★ chain_telescoping_max"]
  n2["◆ Contiguity"]
  n3["★ trans"]
  n4["★ chain_subset_layers"]
  n5["★ max_chain_tail"]
  n6["★ max_chain_dyadic_tail"]
  n7["· vw_2_14_9_concrete_of_uniform_layer_bound"]
  n3 --> n2
  n4 --> n1
  n4 --> n3
  n5 --> n4
  n5 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n6
  n7 --> n3
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
