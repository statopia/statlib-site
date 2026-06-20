# Proof narrative — tendsto_mul_sqrt_abs_log

Root: **tendsto_mul_sqrt_abs_log** (theorem) `Statlib/EmpiricalProcess/Equicontinuity.lean:15` · topic `EmpiricalProcess`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `abs_log_le_inv_of_pos` — theorem · `Statlib/EmpiricalProcess/Equicontinuity.lean:6`
  ★ `mul_abs_log_le_one_pos` — theorem · `Statlib/EmpiricalProcess/Equicontinuity.lean:11`
★ `tendsto_mul_sqrt_abs_log` — theorem · `Statlib/EmpiricalProcess/Equicontinuity.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ abs_log_le_inv_of_pos"]
  n1["★ mul_abs_log_le_one_pos"]
  n2["★ tendsto_mul_sqrt_abs_log"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
