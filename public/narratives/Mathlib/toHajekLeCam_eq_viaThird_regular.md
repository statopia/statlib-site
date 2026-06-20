# Proof narrative — toHajekLeCam_eq_viaThird_regular

Root: **toHajekLeCam_eq_viaThird_regular** (theorem) `Statlib/Mathlib/Statistics/LeCamInstance.lean:283` · topic `Mathlib`
Closure: 13 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `LANExpansion` — structure · `Statlib/Mathlib/Statistics/LAN.lean:152`  _(also used by 7: toLANExpansion, CoxModel.toCoxTheorem3Hypotheses, cox_theorem_3_end_to_end, …)_
    ▣ `MultivariateCLTConclusion` — structure · `Statlib/Mathlib/ProbabilityTheory/MultivariateCLT.lean:138`  _(also used by 9: toConclusion, iidBounded, centralLimit_to_multivariateCLTConclusion, …)_
    ◆ `Contiguity` — def · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:86`  _(also used by 6: fromCoxScoreSample, identityCov, trans, …)_
  ▣ `LANToLeCamBundle` — structure · `Statlib/Mathlib/Statistics/LeCamInstance.lean:112`  _(also used by 3: toHajekLeCam_eq_viaThird_asymGaussian, fromCoxScoreSample, identityCov)_
    ▣ `HajekLeCamConclusion` — structure · `Statlib/Mathlib/Statistics/LAN.lean:220`  _(also used by 1: toHajekLeCam)_
    ◆ `ofLAN` — def · `Statlib/Mathlib/Statistics/LAN.lean:256`
  ◆ `toHajekLeCam` — def · `Statlib/Mathlib/Statistics/LeCamInstance.lean:163`  _(also used by 1: toHajekLeCam_eq_viaThird_asymGaussian)_
    ▣ `LeCamThirdLemma` — structure · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:160`  _(also used by 4: CoxModel.toCoxTheorem3Hypotheses, cox_theorem_3_end_to_end, toLeCamThirdLemma, …)_
    ◆ `toLeCamThirdLemma` — def · `Statlib/Mathlib/Statistics/LeCamInstance.lean:202`
      ★ `refl` — theorem · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:98`  _(also used by 1: refl)_
    ◆ `selfBundle` — def · `Statlib/Mathlib/Statistics/LeCamThirdLemma.lean:184`
  ◆ `toHajekLeCamViaThird` — def · `Statlib/Mathlib/Statistics/LeCamInstance.lean:243`  _(also used by 1: toHajekLeCam_eq_viaThird_asymGaussian)_
★ `toHajekLeCam_eq_viaThird_regular` — theorem · `Statlib/Mathlib/Statistics/LeCamInstance.lean:283` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LANExpansion"]
  n1["▣ MultivariateCLTConclusion"]
  n2["◆ Contiguity"]
  n3["▣ LANToLeCamBundle"]
  n4["▣ HajekLeCamConclusion"]
  n5["◆ ofLAN"]
  n6["◆ toHajekLeCam"]
  n7["▣ LeCamThirdLemma"]
  n8["◆ toLeCamThirdLemma"]
  n9["★ refl"]
  n10["◆ selfBundle"]
  n11["◆ toHajekLeCamViaThird"]
  n12["★ toHajekLeCam_eq_viaThird_regular"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n5 --> n0
  n5 --> n4
  n6 --> n3
  n6 --> n4
  n6 --> n5
  n7 --> n2
  n8 --> n3
  n8 --> n7
  n9 --> n2
  n10 --> n7
  n10 --> n9
  n10 --> n0
  n11 --> n3
  n11 --> n4
  n11 --> n8
  n11 --> n7
  n11 --> n10
  n11 --> n6
  n12 --> n3
  n12 --> n6
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
