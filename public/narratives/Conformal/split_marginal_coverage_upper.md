# Proof narrative — split_marginal_coverage_upper

Root: **split_marginal_coverage_upper** (theorem) `Statlib/Conformal/split_marginal_coverage_upper.lean:16` · topic `Conformal`
Closure: 25 declarations across 23 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `Exchangeable` — def · `Statlib/Conformal/Basic.lean:53`  _(also used by 3: jackknifePlus_coverage, marginal_coverage, split_marginal_coverage)_
    ◆ `orderStat` — noncomputable def · `Statlib/Conformal/Basic.lean:65`
  ◆ `conformalQuantile` — noncomputable def · `Statlib/Conformal/Basic.lean:78`  _(also used by 7: jackknifePlusCoveredEvent_iff, jackknifePlusThreshold, jackknifePlusThreshold_eq_quantile, …)_
    ◆ `rankOfLast` — noncomputable def · `Statlib/Conformal/rankOfLast.lean:13`  _(also used by 2: marginal_coverage, rankOfLast_le_succ)_
      · `sorted_get_le_iff_countP` — lemma · `Statlib/Conformal/sorted_get_le_iff_countP.lean:13`
      · `countP_ofFn_eq_card_filter` — lemma · `Statlib/Conformal/countP_ofFn_eq_card_filter.lean:13`
      · `rankOfLast_decomp` — lemma · `Statlib/Conformal/rankOfLast_decomp.lean:12`
    ★ `coverage_event_iff_rank_le` — theorem · `Statlib/Conformal/coverage_event_iff_rank_le.lean:27`  _(also used by 1: marginal_coverage)_
        · `rankOfLast_pos` — lemma · `Statlib/Conformal/rankOfLast_pos.lean:13`
      · `rankOfLast_le_eq_iUnion` — lemma · `Statlib/Conformal/rankOfLast_le_eq_iUnion.lean:12`
      · `rank_pairwiseDisjoint` — lemma · `Statlib/Conformal/rank_pairwiseDisjoint.lean:10`
      · `measurableSet_rankOfLast_eq_loc` — lemma · `Statlib/Conformal/measurableSet_rankOfLast_eq_loc.lean:13`
        ◆ `rankOf` — noncomputable def · `Statlib/Conformal/rankOf.lean:18`
        · `measurableSet_rankOf_eq` — lemma · `Statlib/Conformal/measurableSet_rankOf_eq.lean:11`
          · `measurableSet_rankOfLast_eq` — lemma · `Statlib/Conformal/measurableSet_rankOfLast_eq.lean:11`
            · `rankOfLast_comp_perm` — lemma · `Statlib/Conformal/rankOfLast_comp_perm.lean:13`
          · `rankOfLast_swap_last` — lemma · `Statlib/Conformal/rankOfLast_swap_last.lean:13`
        · `measure_rankOf_eq_measure_rankOfLast` — lemma · `Statlib/Conformal/measure_rankOf_eq_measure_rankOfLast.lean:15`
          · `rankOf_injective_of_injective` — lemma · `Statlib/Conformal/rankOf_injective_of_injective.lean:12`
          · `rankOf_range` — lemma · `Statlib/Conformal/rankOf_range.lean:11`
        · `card_filter_rankOf_eq_one` — lemma · `Statlib/Conformal/card_filter_rankOf_eq_one.lean:14`
      ★ `rank_uniform_of_exchangeable` — theorem · `Statlib/Conformal/rank_uniform_of_exchangeable.lean:32`
    · `measure_rank_le_eq` — lemma · `Statlib/Conformal/measure_rank_le_eq.lean:16`  _(also used by 1: marginal_coverage)_
  ★ `marginal_coverage_upper` — theorem · `Statlib/Conformal/marginal_coverage_upper.lean:18`
★ `split_marginal_coverage_upper` — theorem · `Statlib/Conformal/split_marginal_coverage_upper.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Exchangeable"]
  n1["◆ orderStat"]
  n2["◆ conformalQuantile"]
  n3["◆ rankOfLast"]
  n4["· sorted_get_le_iff_countP"]
  n5["· countP_ofFn_eq_card_filter"]
  n6["· rankOfLast_decomp"]
  n7["★ coverage_event_iff_rank_le"]
  n8["· rankOfLast_pos"]
  n9["· rankOfLast_le_eq_iUnion"]
  n10["· rank_pairwiseDisjoint"]
  n11["· measurableSet_rankOfLast_eq_loc"]
  n12["◆ rankOf"]
  n13["· measurableSet_rankOf_eq"]
  n14["· measurableSet_rankOfLast_eq"]
  n15["· rankOfLast_comp_perm"]
  n16["· rankOfLast_swap_last"]
  n17["· measure_rankOf_eq_measure_rankOfLast"]
  n18["· rankOf_injective_of_injective"]
  n19["· rankOf_range"]
  n20["· card_filter_rankOf_eq_one"]
  n21["★ rank_uniform_of_exchangeable"]
  n22["· measure_rank_le_eq"]
  n23["★ marginal_coverage_upper"]
  n24["★ split_marginal_coverage_upper"]
  n2 --> n1
  n6 --> n3
  n7 --> n2
  n7 --> n3
  n7 --> n1
  n7 --> n4
  n7 --> n5
  n7 --> n6
  n8 --> n3
  n9 --> n3
  n9 --> n8
  n10 --> n3
  n11 --> n3
  n13 --> n12
  n14 --> n3
  n14 --> n13
  n15 --> n3
  n15 --> n12
  n16 --> n3
  n16 --> n12
  n16 --> n15
  n17 --> n0
  n17 --> n12
  n17 --> n3
  n17 --> n14
  n17 --> n16
  n18 --> n12
  n19 --> n12
  n20 --> n12
  n20 --> n18
  n20 --> n19
  n21 --> n0
  n21 --> n3
  n21 --> n12
  n21 --> n17
  n21 --> n20
  n21 --> n13
  n22 --> n0
  n22 --> n3
  n22 --> n9
  n22 --> n10
  n22 --> n11
  n22 --> n21
  n23 --> n0
  n23 --> n2
  n23 --> n3
  n23 --> n7
  n23 --> n22
  n24 --> n0
  n24 --> n2
  n24 --> n23
  class n24 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
