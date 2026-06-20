# Proof narrative — shao_prop_2_3

Root: **shao_prop_2_3** (theorem) `Statlib/LimitTheorems/shao_prop_2_3.lean:39` · topic `LimitTheorems`
Closure: 17 declarations across 17 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsAsymptoticExpectation` — structure · `Statlib/LimitTheorems/IsAsymptoticExpectation.lean:22`
  ◆ `Prop23Conclusion` — def · `Statlib/LimitTheorems/Prop23Conclusion.lean:17`
  ◆ `IsAlmostSurelyConstant` — def · `Statlib/LimitTheorems/IsAlmostSurelyConstant.lean:15`
    · `td_to_const_of_ae_eq` — lemma · `Statlib/LimitTheorems/td_to_const_of_ae_eq.lean:18`
    · `tendstoInDistribution_const_to_measure` — lemma · `Statlib/LimitTheorems/tendstoInDistribution_const_to_measure.lean:26`
    · `aux_ratio_limit` — lemma · `Statlib/LimitTheorems/aux_ratio_limit.lean:24`
  ★ `shao_prop_2_3_case_both_const` — theorem · `Statlib/LimitTheorems/shao_prop_2_3_case_both_const.lean:31`
  · `Prop23Conclusion.swap` — lemma · `Statlib/LimitTheorems/Prop23Conclusion_swap.lean:16`
    · `tendstoInMeasure_const_of_tendsto` — lemma · `Statlib/LimitTheorems/tendstoInMeasure_const_of_tendsto.lean:18`
    ★ `slutsky_mul` — theorem · `Statlib/LimitTheorems/slutsky_mul.lean:14`
    · `ae_eq_const_of_map_eq_dirac` — lemma · `Statlib/LimitTheorems/ae_eq_const_of_map_eq_dirac.lean:18`
    ★ `tendstoInMeasure_const_of_rescaled_tendstoInDistribution` — theorem · `Statlib/LimitTheorems/tendstoInMeasure_const_of_rescaled_tendstoInDistribution.lean:24`
      ★ `tendstoInMeasure_inv_of_ne_zero` — theorem · `Statlib/LimitTheorems/tendstoInMeasure_inv_of_ne_zero.lean:17`
    ★ `slutsky_div` — theorem · `Statlib/LimitTheorems/slutsky_div.lean:17`
  ★ `shao_prop_2_3_case_ii` — theorem · `Statlib/LimitTheorems/shao_prop_2_3_case_ii.lean:32`
  ⚠ `shao_prop_2_3_case_both_nondeg` — axiom · `Statlib/LimitTheorems/shao_prop_2_3_case_both_nondeg.lean:46`
★ `shao_prop_2_3` — theorem · `Statlib/LimitTheorems/shao_prop_2_3.lean:39` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsAsymptoticExpectation"]
  n1["◆ Prop23Conclusion"]
  n2["◆ IsAlmostSurelyConstant"]
  n3["· td_to_const_of_ae_eq"]
  n4["· tendstoInDistribution_const_to_measure"]
  n5["· aux_ratio_limit"]
  n6["★ shao_prop_2_3_case_both_const"]
  n7["· Prop23Conclusion.swap"]
  n8["· tendstoInMeasure_const_of_tendsto"]
  n9["★ slutsky_mul"]
  n10["· ae_eq_const_of_map_eq_dirac"]
  n11["★ tendstoInMeasure_const_of_rescaled_tendstoInDistribution"]
  n12["★ tendstoInMeasure_inv_of_ne_zero"]
  n13["★ slutsky_div"]
  n14["★ shao_prop_2_3_case_ii"]
  n15["⚠ shao_prop_2_3_case_both_nondeg"]
  n16["★ shao_prop_2_3"]
  n6 --> n0
  n6 --> n2
  n6 --> n1
  n6 --> n3
  n6 --> n4
  n6 --> n5
  n7 --> n1
  n13 --> n9
  n13 --> n12
  n14 --> n0
  n14 --> n2
  n14 --> n1
  n14 --> n4
  n14 --> n8
  n14 --> n9
  n14 --> n10
  n14 --> n11
  n14 --> n13
  n15 --> n0
  n15 --> n2
  n15 --> n1
  n16 --> n0
  n16 --> n1
  n16 --> n2
  n16 --> n6
  n16 --> n7
  n16 --> n14
  n16 --> n15
  class n16 headline;
  class n15 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
