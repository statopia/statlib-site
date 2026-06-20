# Proof narrative — argmax_consistency_from_uniform_conv

Root: **argmax_consistency_from_uniform_conv** (theorem) `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:142` · topic `Mathlib`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ★ `wellSeparated_of_compact_of_unique_max` — theorem · `Statlib/CoxChangePoint/Identifiability.lean:43`  _(also used by 1: CoxIdentifiability.wellSeparated)_
    ★ `dist_lt_of_near_max` — theorem · `Statlib/CoxChangePoint/Identifiability.lean:97`
  ★ `argmax_cmt_deterministic` — theorem · `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:76`  _(also used by 1: stochasticArgmaxCMT_of_pointwise_uniform_convergence)_
★ `argmax_consistency_from_uniform_conv` — theorem · `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:142` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ wellSeparated_of_compact_of_unique_max"]
  n1["★ dist_lt_of_near_max"]
  n2["★ argmax_cmt_deterministic"]
  n3["★ argmax_consistency_from_uniform_conv"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
