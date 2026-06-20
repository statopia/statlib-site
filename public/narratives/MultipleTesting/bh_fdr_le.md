# Proof narrative — bh_fdr_le

Root: **bh_fdr_le** (theorem) `Statlib/MultipleTesting/bh_fdr_le.lean:59` · topic `MultipleTesting`
Closure: 24 declarations across 20 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsValidPValue` — structure · `Statlib/MultipleTesting/Basic.lean:51`  _(also used by 1: bonferroni_fwer_le)_
  ◆ `fdp` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:69`
  ◆ `fdr` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:76`
    ◆ `bhCutoff` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:111`  _(also used by 1: bhCutoff_take_values)_
  ◆ `bhReject` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:125`  _(also used by 1: bhReject_decidable)_
  ◆ `bhRejectionCount` — noncomputable def · `Statlib/MultipleTesting/bhRejectionCount.lean:11`
    · `sorted_get_le_iff_countP_BH` — lemma · `Statlib/MultipleTesting/sorted_get_le_iff_countP_BH.lean:14`
          · `countP_ofFn_eq_card_filter_BH` — lemma · `Statlib/MultipleTesting/countP_ofFn_eq_card_filter_BH.lean:16`
    · `card_filter_eq_countP_sorted` — lemma · `Statlib/MultipleTesting/card_filter_eq_countP_sorted.lean:14`
      · `bhCutoff_measurable` — lemma · `Statlib/MultipleTesting/bhCutoff_measurable.lean:21`
    · `bhReject_measurableSet` — lemma · `Statlib/MultipleTesting/bhReject_measurableSet.lean:12`
  · `bhRejectionCount_measurable` — lemma · `Statlib/MultipleTesting/bhRejectionCount_measurable.lean:13`
  ◆ `bhReplaced` — def · `Statlib/MultipleTesting/bhReplaced.lean:11`
    · `bhReplaced_component_measurable` — lemma · `Statlib/MultipleTesting/bhReplaced_component_measurable.lean:14`
  ★ `bhReplaced_measurable` — theorem · `Statlib/MultipleTesting/bhReplaced_measurable.lean:18`
  ★ `bhRejectionCount_eq_iff` — theorem · `Statlib/MultipleTesting/bhRejectionCount_eq_iff.lean:18`
      · `bhReplaced_filter_card_eq` — lemma · `Statlib/MultipleTesting/bhReplaced_filter_card_eq.lean:15`
    ★ `bhCutoff_replace_invariant` — theorem · `Statlib/MultipleTesting/bhCutoff_replace_invariant.lean:29`
  ★ `bhReplaced_eventEq` — theorem · `Statlib/MultipleTesting/bhReplaced_eventEq.lean:27`
    ★ `indep_loo` — theorem · `Statlib/MultipleTesting/indep_loo.lean:22`
  ★ `indep_factor` — theorem · `Statlib/MultipleTesting/indep_factor.lean:14`
  ★ `pvalue_validity_ofReal` — theorem · `Statlib/MultipleTesting/pvalue_validity_ofReal.lean:12`
  ★ `sum_pmf_le_one` — theorem · `Statlib/MultipleTesting/sum_pmf_le_one.lean:11`
★ `bh_fdr_le` — theorem · `Statlib/MultipleTesting/bh_fdr_le.lean:59` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsValidPValue"]
  n1["◆ fdp"]
  n2["◆ fdr"]
  n3["◆ bhCutoff"]
  n4["◆ bhReject"]
  n5["◆ bhRejectionCount"]
  n6["· sorted_get_le_iff_countP_BH"]
  n7["· countP_ofFn_eq_card_filter_BH"]
  n8["· card_filter_eq_countP_sorted"]
  n9["· bhCutoff_measurable"]
  n10["· bhReject_measurableSet"]
  n11["· bhRejectionCount_measurable"]
  n12["◆ bhReplaced"]
  n13["· bhReplaced_component_measurable"]
  n14["★ bhReplaced_measurable"]
  n15["★ bhRejectionCount_eq_iff"]
  n16["· bhReplaced_filter_card_eq"]
  n17["★ bhCutoff_replace_invariant"]
  n18["★ bhReplaced_eventEq"]
  n19["★ indep_loo"]
  n20["★ indep_factor"]
  n21["★ pvalue_validity_ofReal"]
  n22["★ sum_pmf_le_one"]
  n23["★ bh_fdr_le"]
  n2 --> n1
  n4 --> n3
  n5 --> n4
  n8 --> n7
  n9 --> n3
  n9 --> n6
  n9 --> n8
  n10 --> n4
  n10 --> n9
  n11 --> n5
  n11 --> n4
  n11 --> n10
  n13 --> n12
  n14 --> n5
  n14 --> n12
  n14 --> n11
  n14 --> n13
  n15 --> n5
  n15 --> n3
  n15 --> n8
  n15 --> n6
  n16 --> n12
  n17 --> n5
  n17 --> n3
  n17 --> n12
  n17 --> n15
  n17 --> n16
  n17 --> n8
  n17 --> n6
  n18 --> n5
  n18 --> n12
  n18 --> n3
  n18 --> n17
  n18 --> n15
  n19 --> n5
  n19 --> n12
  n19 --> n11
  n19 --> n4
  n20 --> n5
  n20 --> n12
  n20 --> n19
  n21 --> n0
  n23 --> n0
  n23 --> n2
  n23 --> n4
  n23 --> n5
  n23 --> n11
  n23 --> n12
  n23 --> n14
  n23 --> n1
  n23 --> n15
  n23 --> n18
  n23 --> n20
  n23 --> n21
  n23 --> n22
  class n23 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
