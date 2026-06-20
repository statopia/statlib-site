# Proof narrative — bhReject_decidable

Root: **bhReject_decidable** (noncomputable instance) `Statlib/MultipleTesting/Basic.lean:131` · topic `MultipleTesting`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `bhCutoff` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:111`  _(also used by 5: bhCutoff_measurable, bhCutoff_replace_invariant, bhCutoff_take_values, …)_
  ◆ `bhReject` — noncomputable def · `Statlib/MultipleTesting/Basic.lean:125`  _(also used by 5: bhReject_measurableSet, bhRejectionCount, bhRejectionCount_measurable, …)_
▸ `bhReject_decidable` — noncomputable instance · `Statlib/MultipleTesting/Basic.lean:131` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bhCutoff"]
  n1["◆ bhReject"]
  n2["▸ bhReject_decidable"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
