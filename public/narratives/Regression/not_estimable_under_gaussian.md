# Proof narrative — not_estimable_under_gaussian

Root: **not_estimable_under_gaussian** (theorem) `Statlib/Regression/not_estimable_under_gaussian.lean:36` · topic `Regression`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsEstimable` — def · `Statlib/Regression/IsEstimable.lean:21`  _(also used by 8: estimable_wellDefined, exists_linear_unbiased_iff_estimable, isEstimable_iff_in_range_Q, …)_
  ◆ `Zmev` — noncomputable def · `Statlib/Regression/Zmev.lean:15`  _(also used by 4: Zmev_gram_ker_eq, isEstimable_iff_in_range_normal, range_Ztrans_eq_range_gram, …)_
  · `Zmev_equiv` — lemma · `Statlib/Regression/Zmev_equiv.lean:16`  _(also used by 2: Zmev_gram_ker_eq, isEstimable_iff_in_range_normal)_
  · `eucl_inner_eq_dp` — lemma · `Statlib/Regression/eucl_inner_eq_dp.lean:30`
  · `range_orthogonal_eq_adjoint_ker_eucl` — lemma · `Statlib/Regression/range_orthogonal_eq_adjoint_ker_eucl.lean:15`  _(also used by 1: range_Ztrans_perp_eq_range_gram_perp)_
  · `Zmev_adj` — lemma · `Statlib/Regression/Zmev_adj.lean:18`  _(also used by 1: range_Ztrans_perp_eq_range_gram_perp)_
★ `not_estimable_under_gaussian` — theorem · `Statlib/Regression/not_estimable_under_gaussian.lean:36` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsEstimable"]
  n1["◆ Zmev"]
  n2["· Zmev_equiv"]
  n3["· eucl_inner_eq_dp"]
  n4["· range_orthogonal_eq_adjoint_ker_eucl"]
  n5["· Zmev_adj"]
  n6["★ not_estimable_under_gaussian"]
  n2 --> n1
  n5 --> n1
  n5 --> n3
  n5 --> n2
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
