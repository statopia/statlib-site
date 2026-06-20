# Proof narrative — banditRegret_nonneg

Root: **banditRegret_nonneg** (theorem) `Statlib/OnlineLearning/banditRegret_nonneg.lean:13` · topic `OnlineLearning`
Closure: 8 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `BanditInstance` — structure · `Statlib/OnlineLearning/BanditInstance.lean:13`  _(also used by 2: subOptimalityGap_bestArm_eq_zero, ucb1_regret_bound)_
      ◆ `bestArm` — noncomputable def · `Statlib/OnlineLearning/bestArm.lean:13`  _(also used by 1: subOptimalityGap_bestArm_eq_zero)_
    ◆ `optMean` — noncomputable def · `Statlib/OnlineLearning/optMean.lean:12`  _(also used by 1: subOptimalityGap_bestArm_eq_zero)_
    ◆ `subOptimalityGap` — noncomputable def · `Statlib/OnlineLearning/subOptimalityGap.lean:12`  _(also used by 2: subOptimalityGap_bestArm_eq_zero, ucb1_regret_bound)_
  ◆ `banditRegret` — noncomputable def · `Statlib/OnlineLearning/banditRegret.lean:15`  _(also used by 1: ucb1_regret_bound)_
    ★ `bestArm_is_max` — theorem · `Statlib/OnlineLearning/bestArm_is_max.lean:13`
  ★ `subOptimalityGap_nonneg` — theorem · `Statlib/OnlineLearning/subOptimalityGap_nonneg.lean:14`
★ `banditRegret_nonneg` — theorem · `Statlib/OnlineLearning/banditRegret_nonneg.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ BanditInstance"]
  n1["◆ bestArm"]
  n2["◆ optMean"]
  n3["◆ subOptimalityGap"]
  n4["◆ banditRegret"]
  n5["★ bestArm_is_max"]
  n6["★ subOptimalityGap_nonneg"]
  n7["★ banditRegret_nonneg"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n6 --> n0
  n6 --> n3
  n6 --> n2
  n6 --> n5
  n7 --> n0
  n7 --> n4
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
