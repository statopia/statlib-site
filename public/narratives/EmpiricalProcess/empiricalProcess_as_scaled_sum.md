# Proof narrative — empiricalProcess_as_scaled_sum

Root: **empiricalProcess_as_scaled_sum** (theorem) `Statlib/EmpiricalProcess/Donsker.lean:91` · topic `EmpiricalProcess`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `empiricalProcessAt` — def · `Statlib/EmpiricalProcess/Donsker.lean:63`  _(also used by 2: empiricalProcess_sub, empiricalProcess_diff_eq)_
  ◆ `DonskerClass` — def · `Statlib/EmpiricalProcess/Donsker.lean:135`  _(also used by 5: donsker_theorem, DonskerAssumption7b, donskerClass_of_entropy_bound, …)_
★ `empiricalProcess_as_scaled_sum` — theorem · `Statlib/EmpiricalProcess/Donsker.lean:91` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ empiricalProcessAt"]
  n1["◆ DonskerClass"]
  n2["★ empiricalProcess_as_scaled_sum"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
