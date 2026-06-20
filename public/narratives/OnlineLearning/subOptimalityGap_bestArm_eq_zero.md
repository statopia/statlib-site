# Proof narrative — subOptimalityGap_bestArm_eq_zero

Root: **subOptimalityGap_bestArm_eq_zero** (theorem) `Statlib/OnlineLearning/subOptimalityGap_bestArm_eq_zero.lean:14` · topic `OnlineLearning`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `BanditInstance` — structure · `Statlib/OnlineLearning/BanditInstance.lean:13`  _(also used by 5: banditRegret, banditRegret_nonneg, bestArm_is_max, …)_
  ◆ `bestArm` — noncomputable def · `Statlib/OnlineLearning/bestArm.lean:13`  _(also used by 1: bestArm_is_max)_
  ◆ `optMean` — noncomputable def · `Statlib/OnlineLearning/optMean.lean:12`  _(also used by 1: subOptimalityGap_nonneg)_
  ◆ `subOptimalityGap` — noncomputable def · `Statlib/OnlineLearning/subOptimalityGap.lean:12`  _(also used by 3: banditRegret, subOptimalityGap_nonneg, ucb1_regret_bound)_
★ `subOptimalityGap_bestArm_eq_zero` — theorem · `Statlib/OnlineLearning/subOptimalityGap_bestArm_eq_zero.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ BanditInstance"]
  n1["◆ bestArm"]
  n2["◆ optMean"]
  n3["◆ subOptimalityGap"]
  n4["★ subOptimalityGap_bestArm_eq_zero"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n4 --> n1
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
