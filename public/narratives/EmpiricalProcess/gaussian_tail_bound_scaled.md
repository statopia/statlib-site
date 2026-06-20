# Proof narrative — gaussian_tail_bound_scaled

Root: **gaussian_tail_bound_scaled** (theorem) `Statlib/EmpiricalProcess/Dudley.lean:445` · topic `EmpiricalProcess`
Closure: 9 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `negExpSq` — private def · `Statlib/EmpiricalProcess/Dudley.lean:379`
      · `cwi_negExpSq` — private lemma · `Statlib/EmpiricalProcess/Dudley.lean:391`
      · `hasDerivAt_negExpSq` — private lemma · `Statlib/EmpiricalProcess/Dudley.lean:384`
      · `tend_negExpSq` — private lemma · `Statlib/EmpiricalProcess/Dudley.lean:395`
    · `intOn_mul_exp` — private lemma · `Statlib/EmpiricalProcess/Dudley.lean:405`
    · `intOn_exp_neg_sq` — private lemma · `Statlib/EmpiricalProcess/Dudley.lean:418`
    ★ `integral_mul_exp_neg_sq_div_two` — theorem · `Statlib/EmpiricalProcess/Dudley.lean:412`
  ★ `gaussian_tail_bound` — theorem · `Statlib/EmpiricalProcess/Dudley.lean:429`
★ `gaussian_tail_bound_scaled` — theorem · `Statlib/EmpiricalProcess/Dudley.lean:445` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ negExpSq"]
  n1["· cwi_negExpSq"]
  n2["· hasDerivAt_negExpSq"]
  n3["· tend_negExpSq"]
  n4["· intOn_mul_exp"]
  n5["· intOn_exp_neg_sq"]
  n6["★ integral_mul_exp_neg_sq_div_two"]
  n7["★ gaussian_tail_bound"]
  n8["★ gaussian_tail_bound_scaled"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n4
  n6 --> n1
  n6 --> n2
  n6 --> n4
  n6 --> n3
  n6 --> n0
  n7 --> n5
  n7 --> n4
  n7 --> n6
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
