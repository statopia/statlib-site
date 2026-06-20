# Proof narrative — ConvergesInProbability.add

Root: **ConvergesInProbability.add** (theorem) `Statlib/EmpiricalProcess/StochasticOrder.lean:198` · topic `EmpiricalProcess`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ConvergesInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:54`  _(also used by 8: benchmark_convergesInProbability, consistency, cox_consistency_end_to_end, …)_
    ◆ `IsNegligibleInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:49`  _(also used by 7: lemma_s3_oP, IsNegligibleInProbability.isBoundedInProbability, IsNegligibleInProbability.add, …)_
  ★ `convergesInProbability_iff_negligible_one` — theorem · `Statlib/EmpiricalProcess/StochasticOrder.lean:163`
★ `ConvergesInProbability.add` — theorem · `Statlib/EmpiricalProcess/StochasticOrder.lean:198` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ConvergesInProbability"]
  n1["◆ IsNegligibleInProbability"]
  n2["★ convergesInProbability_iff_negligible_one"]
  n3["★ ConvergesInProbability.add"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
