# Proof narrative — Tendsto_argmax_of_skorohod

Root: **Tendsto_argmax_of_skorohod** (theorem) `Statlib/Mathlib/ProbabilityTheory/SkorohodArgmax.lean:170` · topic `Mathlib`
Closure: 5 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ★ `wellSeparated_of_compact_of_unique_max` — theorem · `Statlib/CoxChangePoint/Identifiability.lean:43`  _(also used by 1: CoxIdentifiability.wellSeparated)_
      ★ `dist_lt_of_near_max` — theorem · `Statlib/CoxChangePoint/Identifiability.lean:97`
    ★ `argmax_cmt_deterministic` — theorem · `Statlib/Mathlib/ProbabilityTheory/ArgmaxCMT.lean:76`  _(also used by 1: argmax_consistency_from_uniform_conv)_
  ★ `stochasticArgmaxCMT_of_pointwise_uniform_convergence` — theorem · `Statlib/Mathlib/ProbabilityTheory/StochasticArgmax.lean:127`
★ `Tendsto_argmax_of_skorohod` — theorem · `Statlib/Mathlib/ProbabilityTheory/SkorohodArgmax.lean:170` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ wellSeparated_of_compact_of_unique_max"]
  n1["★ dist_lt_of_near_max"]
  n2["★ argmax_cmt_deterministic"]
  n3["★ stochasticArgmaxCMT_of_pointwise_uniform_convergence"]
  n4["★ Tendsto_argmax_of_skorohod"]
  n1 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
