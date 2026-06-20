# Proof narrative — dkw_inequality

Root: **dkw_inequality** (theorem) `Statlib/EmpiricalProcess/DKW.lean:162` · topic `EmpiricalProcess`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `empiricalCDF` — def · `Statlib/EmpiricalProcess/DKW.lean:63`  _(also used by 3: empiricalCDF_monotone, empiricalCDF_le_one, empiricalCDF_nonneg)_
  ⚠ `dkw_inequality_axiom` — axiom · `Statlib/EmpiricalProcess/DKW.lean:130`
★ `dkw_inequality` — theorem · `Statlib/EmpiricalProcess/DKW.lean:162` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ empiricalCDF"]
  n1["⚠ dkw_inequality_axiom"]
  n2["★ dkw_inequality"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  class n1 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
