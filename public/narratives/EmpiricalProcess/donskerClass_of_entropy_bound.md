# Proof narrative — donskerClass_of_entropy_bound

Root: **donskerClass_of_entropy_bound** (theorem) `Statlib/EmpiricalProcess/DonskerInfra.lean:37` · topic `EmpiricalProcess`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `isBoundedClass` — def · `Statlib/EmpiricalProcess/DonskerInfra.lean:12`
    ◆ `l2CoveringNumber` — def · `Statlib/EmpiricalProcess/DonskerInfra.lean:16`
  ◆ `l2EntropyIntegral` — def · `Statlib/EmpiricalProcess/DonskerInfra.lean:21`  _(also used by 2: AsymptoticEquicontinuity, StrongDonskerClass)_
  ◆ `DonskerClass` — def · `Statlib/EmpiricalProcess/Donsker.lean:135`  _(also used by 5: donsker_theorem, empiricalProcess_as_scaled_sum, DonskerAssumption7b, …)_
★ `donskerClass_of_entropy_bound` — theorem · `Statlib/EmpiricalProcess/DonskerInfra.lean:37` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ isBoundedClass"]
  n1["◆ l2CoveringNumber"]
  n2["◆ l2EntropyIntegral"]
  n3["◆ DonskerClass"]
  n4["★ donskerClass_of_entropy_bound"]
  n2 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
