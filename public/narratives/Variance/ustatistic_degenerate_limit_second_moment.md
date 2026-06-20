# Proof narrative — ustatistic_degenerate_limit_second_moment

Root: **ustatistic_degenerate_limit_second_moment** (theorem) `Statlib/Variance/ustatistic_degenerate_limit_second_moment.lean:34` · topic `Variance`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `chiSquaredMeasure` — def · `Statlib/Distribution/chiSquaredMeasure.lean:15`  _(also used by 1: isProbabilityMeasure_chiSquared)_
  ⚠ `ustatistic_degenerate_partial_sum_sq_moment` — axiom · `Statlib/Variance/ustatistic_degenerate_partial_sum_sq_moment.lean:33`
★ `ustatistic_degenerate_limit_second_moment` — theorem · `Statlib/Variance/ustatistic_degenerate_limit_second_moment.lean:34` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ chiSquaredMeasure"]
  n1["⚠ ustatistic_degenerate_partial_sum_sq_moment"]
  n2["★ ustatistic_degenerate_limit_second_moment"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  class n1 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
