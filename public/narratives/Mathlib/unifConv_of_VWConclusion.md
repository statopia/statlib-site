# Proof narrative — unifConv_of_VWConclusion

Root: **unifConv_of_VWConclusion** (theorem) `Statlib/Mathlib/EmpiricalProcess/VWChaining.lean:555` · topic `Mathlib`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `VWConclusion` — structure · `Statlib/Mathlib/EmpiricalProcess/VWChaining.lean:448`  _(also used by 2: vw_2_14_9, VWConclusion.toCoxChangePoint)_
      ◆ `Contiguity` — def · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:86`  _(also used by 8: LANToLeCamBundle, fromCoxScoreSample, identityCov, …)_
  ★ `trans` — theorem · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:104`  _(also used by 10: davis_kahan_inner_bound, davis_kahan_finite_dim_squared, davisKahanSinTheta_of_finiteDim_aux, …)_
  · `tail_bound_no_sqrt` — lemma · `Statlib/Mathlib/EmpiricalProcess/VWChaining.lean:472`
★ `unifConv_of_VWConclusion` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWChaining.lean:555` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ VWConclusion"]
  n1["◆ Contiguity"]
  n2["★ trans"]
  n3["· tail_bound_no_sqrt"]
  n4["★ unifConv_of_VWConclusion"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
