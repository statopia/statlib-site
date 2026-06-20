# Proof narrative — IsIhtStep.zero_of_zero

Root: **IsIhtStep.zero_of_zero** (lemma) `Statlib/CompressedSensing/IsIhtStep_zero_of_zero.lean:15` · topic `CompressedSensing`
Closure: 12 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ◆ `support` — noncomputable def · `Statlib/HDStats/Basic.lean:51`  _(also used by 4: isSparse_iff_card_support, support_smul_subset, lasso_l2_error_on_support, …)_
      ◆ `IsSparse` — def · `Statlib/HDStats/Basic.lean:56`  _(also used by 13: IsBestSSparseApprox_self_of_sparse, IsIhtStep.isSparse, iht_recovery, …)_
    ◆ `l2Dist` — def · `Statlib/CompressedSensing/l2Dist.lean:13`
    ◆ `IsBestSSparseApprox` — def · `Statlib/CompressedSensing/IsBestSSparseApprox.lean:15`  _(also used by 1: IsBestSSparseApprox_self_of_sparse)_
  ◆ `ihtResidualMap` — def · `Statlib/CompressedSensing/ihtResidualMap.lean:14`
  ◆ `IsIhtStep` — def · `Statlib/CompressedSensing/IsIhtStep.lean:14`  _(also used by 1: IsIhtStep.isSparse)_
        ◆ `HasSubExpMGF` — def · `Statlib/HDStats/HasSubExpMGF.lean:16`  _(also used by 7: bernstein_tail, const_smul, integrable_exp_mul, …)_
      · `zero` — lemma · `Statlib/HDStats/zero.lean:12`
    · `IsSparse.zero` — lemma · `Statlib/HDStats/Basic.lean:62`
    · `l2Dist_nonneg` — lemma · `Statlib/CompressedSensing/l2Dist_nonneg.lean:10`  _(also used by 1: IsBestSSparseApprox_self_of_sparse)_
  · `IsBestSSparseApprox_zero` — lemma · `Statlib/CompressedSensing/IsBestSSparseApprox_zero.lean:14`
· `IsIhtStep.zero_of_zero` — lemma · `Statlib/CompressedSensing/IsIhtStep_zero_of_zero.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ support"]
  n1["◆ IsSparse"]
  n2["◆ l2Dist"]
  n3["◆ IsBestSSparseApprox"]
  n4["◆ ihtResidualMap"]
  n5["◆ IsIhtStep"]
  n6["◆ HasSubExpMGF"]
  n7["· zero"]
  n8["· IsSparse.zero"]
  n9["· l2Dist_nonneg"]
  n10["· IsBestSSparseApprox_zero"]
  n11["· IsIhtStep.zero_of_zero"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  n5 --> n3
  n5 --> n4
  n7 --> n6
  n8 --> n7
  n8 --> n1
  n9 --> n2
  n10 --> n3
  n10 --> n8
  n10 --> n2
  n10 --> n9
  n11 --> n5
  n11 --> n4
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
