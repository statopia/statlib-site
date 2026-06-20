# Proof narrative — dyadic_level_union_bound

Root: **dyadic_level_union_bound** (theorem) `Statlib/CoxChangePoint/ChainingRecursion.lean:229` · topic `CoxChangePoint`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `dyadicScale` — noncomputable def · `Statlib/CoxChangePoint/ChainingRecursion.lean:70`  _(also used by 5: dyadicScale_succ, dyadicScale_nonneg, dyadicScale_eq_zpow, …)_
    ★ `union_bound_max_tail` — theorem · `Statlib/CoxChangePoint/ChainingProof.lean:135`
  ★ `union_bound_subGaussian_max_tail` — theorem · `Statlib/CoxChangePoint/ChainingProof.lean:164`
  · `dyadicScale_pos` — lemma · `Statlib/CoxChangePoint/ChainingRecursion.lean:96`
★ `dyadic_level_union_bound` — theorem · `Statlib/CoxChangePoint/ChainingRecursion.lean:229` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ dyadicScale"]
  n1["★ union_bound_max_tail"]
  n2["★ union_bound_subGaussian_max_tail"]
  n3["· dyadicScale_pos"]
  n4["★ dyadic_level_union_bound"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
