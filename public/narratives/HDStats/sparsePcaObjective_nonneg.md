# Proof narrative — sparsePcaObjective_nonneg

Root: **sparsePcaObjective_nonneg** (lemma) `Statlib/HDStats/sparsePcaObjective_nonneg.lean:14` · topic `HDStats`
Closure: 10 declarations across 9 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `paQuadForm` — def · `Statlib/HDStats/paQuadForm.lean:9`
  ◆ `IsPsdSimple` — def · `Statlib/HDStats/IsPsdSimple.lean:12`
        ◆ `support` — noncomputable def · `Statlib/HDStats/Basic.lean:51`  _(also used by 4: isSparse_iff_card_support, support_smul_subset, lasso_l2_error_on_support, …)_
      ◆ `IsSparse` — def · `Statlib/HDStats/Basic.lean:56`  _(also used by 14: IsBestSSparseApprox, IsBestSSparseApprox_self_of_sparse, IsIhtStep.isSparse, …)_
  ◆ `IsSparseUnitVector` — def · `Statlib/HDStats/IsSparseUnitVector.lean:10`  _(also used by 3: IsSparseUnitVector.isSparse, IsSparseUnitVector.mono, IsSparseUnitVector.norm_sq_eq_one)_
  ◆ `sparsePcaObjective` — noncomputable def · `Statlib/HDStats/sparsePcaObjective.lean:12`
  · `sparsePcaObjective_of_feasible` — lemma · `Statlib/HDStats/sparsePcaObjective_of_feasible.lean:12`
  · `paQuadForm_nonneg_of_psd` — lemma · `Statlib/HDStats/paQuadForm_nonneg_of_psd.lean:10`
  · `sparsePcaObjective_zero_of_infeasible` — lemma · `Statlib/HDStats/sparsePcaObjective_zero_of_infeasible.lean:10`
· `sparsePcaObjective_nonneg` — lemma · `Statlib/HDStats/sparsePcaObjective_nonneg.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ paQuadForm"]
  n1["◆ IsPsdSimple"]
  n2["◆ support"]
  n3["◆ IsSparse"]
  n4["◆ IsSparseUnitVector"]
  n5["◆ sparsePcaObjective"]
  n6["· sparsePcaObjective_of_feasible"]
  n7["· paQuadForm_nonneg_of_psd"]
  n8["· sparsePcaObjective_zero_of_infeasible"]
  n9["· sparsePcaObjective_nonneg"]
  n1 --> n0
  n3 --> n2
  n4 --> n3
  n5 --> n4
  n5 --> n0
  n6 --> n4
  n6 --> n5
  n6 --> n0
  n7 --> n1
  n7 --> n0
  n8 --> n4
  n8 --> n5
  n9 --> n1
  n9 --> n5
  n9 --> n4
  n9 --> n6
  n9 --> n7
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
