# Proof narrative — lemma_s5_r0

Root: **lemma_s5_r0** (theorem) `Statlib/CoxChangePoint/UniformProcessOpRate.lean:275` · topic `CoxChangePoint`
Closure: 7 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `LemmaS5Assumptions` — structure · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:22`  _(also used by 2: union_bound_tail, lemma_s5)_
  ◆ `HasTailBound` — def · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:45`  _(also used by 2: union_bound_tail, lemma_s5)_
  ◆ `IsBoundedInProbAtRate` — def · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:36`  _(also used by 1: lemma_s5)_
    · `toReal_bound_to_lt` — private lemma · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:81`
    · `tail_arith_bound` — private lemma · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:54`
  ★ `tail_bound_implies_OP_rate` — theorem · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:99`  _(also used by 1: lemma_s5)_
★ `lemma_s5_r0` — theorem · `Statlib/CoxChangePoint/UniformProcessOpRate.lean:275` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LemmaS5Assumptions"]
  n1["◆ HasTailBound"]
  n2["◆ IsBoundedInProbAtRate"]
  n3["· toReal_bound_to_lt"]
  n4["· tail_arith_bound"]
  n5["★ tail_bound_implies_OP_rate"]
  n6["★ lemma_s5_r0"]
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
