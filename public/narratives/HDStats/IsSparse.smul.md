# Proof narrative — IsSparse.smul

Root: **IsSparse.smul** (lemma) `Statlib/HDStats/Basic.lean:88` · topic `HDStats`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `support` — noncomputable def · `Statlib/HDStats/Basic.lean:51`  _(also used by 3: isSparse_iff_card_support, lasso_l2_error_on_support, lasso_slow_rate)_
  ◆ `IsSparse` — def · `Statlib/HDStats/Basic.lean:56`  _(also used by 14: IsBestSSparseApprox, IsBestSSparseApprox_self_of_sparse, IsIhtStep.isSparse, …)_
  · `support_smul_subset` — lemma · `Statlib/HDStats/Basic.lean:81`
· `IsSparse.smul` — lemma · `Statlib/HDStats/Basic.lean:88` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ support"]
  n1["◆ IsSparse"]
  n2["· support_smul_subset"]
  n3["· IsSparse.smul"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
