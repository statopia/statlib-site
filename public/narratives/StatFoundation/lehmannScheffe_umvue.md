# Proof narrative — lehmannScheffe_umvue

Root: **lehmannScheffe_umvue** (theorem) `Statlib/StatFoundation/Statistics/Sufficiency/LehmannScheffe/UMVUE.lean:28` · topic `StatFoundation`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:49`
  ◆ `IsSufficient` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:63`
  ◆ `IsComplete` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:56`
  ◆ `IsUnbiased` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:73`
  ★ `condExp_eq_of_sufficient` — theorem · `Statlib/StatFoundation/Statistics/Sufficiency/LehmannScheffe/CondExp.lean:17`
  ★ `condExp_reduces_mse` — theorem · `Statlib/StatFoundation/Statistics/Sufficiency/LehmannScheffe/MSE.lean:19`
  ★ `ae_eq_of_complete_unbiased` — theorem · `Statlib/StatFoundation/Statistics/Sufficiency/LehmannScheffe/CompleteUnique.lean:15`
★ `lehmannScheffe_umvue` — theorem · `Statlib/StatFoundation/Statistics/Sufficiency/LehmannScheffe/UMVUE.lean:28` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ IsSufficient"]
  n2["◆ IsComplete"]
  n3["◆ IsUnbiased"]
  n4["★ condExp_eq_of_sufficient"]
  n5["★ condExp_reduces_mse"]
  n6["★ ae_eq_of_complete_unbiased"]
  n7["★ lehmannScheffe_umvue"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n6 --> n0
  n6 --> n2
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n4
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
