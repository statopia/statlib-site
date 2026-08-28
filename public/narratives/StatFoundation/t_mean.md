# Proof narrative — t_mean

Root: **t_mean** (theorem) `Statlib/StatFoundation/Probability/TDistribution.lean:1135` · topic `StatFoundation`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `tPdfReal` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:25`  _(also used by 4: two_sample_t_test, t_isProbabilityMeasure, t_measure_eq_ratio, …)_
  ◆ `tMeasure` — noncomputable def · `Statlib/StatFoundation/Probability/TDistribution.lean:31`  _(also used by 5: one_sample_t_test, two_sample_t_test, t_isProbabilityMeasure, …)_
★ `t_mean` — theorem · `Statlib/StatFoundation/Probability/TDistribution.lean:1135` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ tPdfReal"]
  n1["◆ tMeasure"]
  n2["★ t_mean"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
