# Proof narrative — uZeta_top

Root: **uZeta_top** (lemma) `Statlib/Variance/uZeta_top.lean:36` · topic `Variance`
Closure: 8 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `appendFin` — def · `Statlib/Variance/appendFin.lean:34`  _(also used by 8: appendFin_const_measurable, appendFin_measurePreserving, appendFin_natAdd_apply, …)_
    ◆ `kernelProjection` — def · `Statlib/Variance/kernelProjection.lean:35`  _(also used by 14: cov_hSub_eq_uZeta, hajekProjection, hajek_clt, …)_
  ◆ `uZeta` — def · `Statlib/Variance/uZeta.lean:35`  _(also used by 9: cov_hSub_eq_uZeta, hajek_clt, sum_sum_cov_eq, …)_
    ◆ `uniqueFinSubSelf` — def · `Statlib/Variance/uniqueFinSubSelf.lean:34`
      · `appendFin_castAdd_apply` — lemma · `Statlib/Variance/appendFin_castAdd_apply.lean:36`  _(also used by 2: appendFin_const_measurable, appendFin_one_eq_cons_aux)_
    · `appendFin_full` — lemma · `Statlib/Variance/appendFin_full.lean:36`
  · `kernelProjection_full` — lemma · `Statlib/Variance/kernelProjection_full.lean:36`
· `uZeta_top` — lemma · `Statlib/Variance/uZeta_top.lean:36` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ appendFin"]
  n1["◆ kernelProjection"]
  n2["◆ uZeta"]
  n3["◆ uniqueFinSubSelf"]
  n4["· appendFin_castAdd_apply"]
  n5["· appendFin_full"]
  n6["· kernelProjection_full"]
  n7["· uZeta_top"]
  n1 --> n0
  n2 --> n1
  n4 --> n0
  n5 --> n0
  n5 --> n4
  n6 --> n1
  n6 --> n3
  n6 --> n5
  n7 --> n2
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
