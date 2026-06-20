# Proof narrative — isSparse_iff_card_support

Root: **isSparse_iff_card_support** (lemma) `Statlib/HDStats/Basic.lean:72` · topic `HDStats`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `support` — noncomputable def · `Statlib/HDStats/Basic.lean:51`  _(also used by 3: support_smul_subset, lasso_l2_error_on_support, lasso_slow_rate)_
  ◆ `IsSparse` — def · `Statlib/HDStats/Basic.lean:56`  _(also used by 14: IsBestSSparseApprox, IsBestSSparseApprox_self_of_sparse, IsIhtStep.isSparse, …)_
· `isSparse_iff_card_support` — lemma · `Statlib/HDStats/Basic.lean:72` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ support"]
  n1["◆ IsSparse"]
  n2["· isSparse_iff_card_support"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
