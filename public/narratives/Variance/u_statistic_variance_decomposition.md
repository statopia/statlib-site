# Proof narrative — u_statistic_variance_decomposition

Root: **u_statistic_variance_decomposition** (theorem) `Statlib/Variance/u_statistic_variance_decomposition.lean:56` · topic `Variance`
Closure: 23 declarations across 23 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `uStatistic` — def · `Statlib/Variance/uStatistic.lean:35`  _(also used by 4: hajek_remainder_var_tendsto_zero, uStatisticCenteredLaw, uStatisticMean, …)_
      ◆ `appendFin` — def · `Statlib/Variance/appendFin.lean:34`  _(also used by 6: appendFin_castAdd_apply, appendFin_const_measurable, appendFin_full, …)_
    ◆ `kernelProjection` — def · `Statlib/Variance/kernelProjection.lean:35`  _(also used by 9: hajekProjection, hajek_clt, integral_h1_eq_kp0_aux, …)_
  ◆ `uZeta` — def · `Statlib/Variance/uZeta.lean:35`  _(also used by 6: hajek_clt, uZeta_nonneg, uZeta_one_eq_var_aux, …)_
  ◆ `PSElem` — abbrev · `Statlib/Variance/PSElem.lean:35`  _(also used by 1: ustatistic_clt_nondegenerate)_
  ◆ `hSub` — def · `Statlib/Variance/hSub.lean:35`
  · `uStatistic_eq_hSub_sum` — lemma · `Statlib/Variance/uStatistic_eq_hSub_sum.lean:38`  _(also used by 1: ustatistic_clt_nondegenerate)_
  · `hSub_memLp` — lemma · `Statlib/Variance/hSub_memLp.lean:39`  _(also used by 1: ustatistic_clt_nondegenerate)_
        · `orderEmbOfFin_measurePreserving` — lemma · `Statlib/Variance/orderEmbOfFin_measurePreserving.lean:35`
      · `integral_hSub` — lemma · `Statlib/Variance/integral_hSub.lean:37`
        · `appendFin_measurePreserving` — lemma · `Statlib/Variance/appendFin_measurePreserving.lean:36`
      · `integral_kernelProjection` — lemma · `Statlib/Variance/integral_kernelProjection.lean:37`
      ⚠ `integral_hSub_mul_hSub` — axiom · `Statlib/Variance/integral_hSub_mul_hSub.lean:57`
        · `kernelProjection_measurable` — lemma · `Statlib/Variance/kernelProjection_measurable.lean:37`
        · `jensen_sq_integral_le` — lemma · `Statlib/Variance/jensen_sq_integral_le.lean:53`
      · `kernelProjection_memLp2` — lemma · `Statlib/Variance/kernelProjection_memLp2.lean:39`
    ★ `cov_hSub_eq_uZeta` — theorem · `Statlib/Variance/cov_hSub_eq_uZeta.lean:46`
      · `PSElem_sum_eq` — lemma · `Statlib/Variance/PSElem_sum_eq.lean:34`
      · `fiber_card_fixed` — lemma · `Statlib/Variance/fiber_card_fixed.lean:33`
    · `inner_sum_by_fiber` — lemma · `Statlib/Variance/inner_sum_by_fiber.lean:36`
    · `uZeta_zero` — lemma · `Statlib/Variance/uZeta_zero.lean:35`
  · `sum_sum_cov_eq` — lemma · `Statlib/Variance/sum_sum_cov_eq.lean:44`
★ `u_statistic_variance_decomposition` — theorem · `Statlib/Variance/u_statistic_variance_decomposition.lean:56` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ uStatistic"]
  n1["◆ appendFin"]
  n2["◆ kernelProjection"]
  n3["◆ uZeta"]
  n4["◆ PSElem"]
  n5["◆ hSub"]
  n6["· uStatistic_eq_hSub_sum"]
  n7["· hSub_memLp"]
  n8["· orderEmbOfFin_measurePreserving"]
  n9["· integral_hSub"]
  n10["· appendFin_measurePreserving"]
  n11["· integral_kernelProjection"]
  n12["⚠ integral_hSub_mul_hSub"]
  n13["· kernelProjection_measurable"]
  n14["· jensen_sq_integral_le"]
  n15["· kernelProjection_memLp2"]
  n16["★ cov_hSub_eq_uZeta"]
  n17["· PSElem_sum_eq"]
  n18["· fiber_card_fixed"]
  n19["· inner_sum_by_fiber"]
  n20["· uZeta_zero"]
  n21["· sum_sum_cov_eq"]
  n22["★ u_statistic_variance_decomposition"]
  n2 --> n1
  n3 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n4
  n6 --> n5
  n7 --> n4
  n7 --> n5
  n9 --> n4
  n9 --> n5
  n9 --> n8
  n10 --> n1
  n11 --> n2
  n11 --> n10
  n11 --> n1
  n12 --> n4
  n12 --> n5
  n12 --> n2
  n13 --> n2
  n13 --> n1
  n13 --> n10
  n15 --> n2
  n15 --> n10
  n15 --> n1
  n15 --> n13
  n15 --> n14
  n16 --> n4
  n16 --> n5
  n16 --> n3
  n16 --> n7
  n16 --> n9
  n16 --> n2
  n16 --> n11
  n16 --> n12
  n16 --> n15
  n17 --> n4
  n19 --> n4
  n19 --> n17
  n19 --> n18
  n20 --> n3
  n20 --> n2
  n21 --> n4
  n21 --> n5
  n21 --> n3
  n21 --> n16
  n21 --> n19
  n21 --> n20
  n22 --> n0
  n22 --> n3
  n22 --> n6
  n22 --> n4
  n22 --> n5
  n22 --> n7
  n22 --> n21
  class n22 headline;
  class n12 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
