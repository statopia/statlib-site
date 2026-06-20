# Proof narrative — dyadic_sum_le_2x_iv

Root: **dyadic_sum_le_2x_iv** (theorem) `Statlib/EmpiricalProcess/RiemannSum.lean:33` · topic `EmpiricalProcess`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `antitone_interval_bound` — theorem · `Statlib/EmpiricalProcess/Dudley.lean:1195`
    · `iv_int` — private lemma · `Statlib/EmpiricalProcess/RiemannSum.lean:5`
  ★ `dyadic_riemann_le_iv` — theorem · `Statlib/EmpiricalProcess/RiemannSum.lean:10`
★ `dyadic_sum_le_2x_iv` — theorem · `Statlib/EmpiricalProcess/RiemannSum.lean:33` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ antitone_interval_bound"]
  n1["· iv_int"]
  n2["★ dyadic_riemann_le_iv"]
  n3["★ dyadic_sum_le_2x_iv"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
