# Proof narrative — mcdiarmid

Root: **mcdiarmid** (theorem) `Statlib/Concentration/mcdiarmid.lean:25` · topic `Concentration`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `BoundedDifferences` — def · `Statlib/Concentration/BoundedDifferences.lean:22`  _(also used by 2: BoundedDifferences.bounded_diff, BoundedDifferences.neg)_
  ◆ `sumSqConstants` — noncomputable def · `Statlib/Concentration/sumSqConstants.lean:18`  _(also used by 1: mcdiarmid_mgf_bound_empty)_
    ⚠ `mcdiarmid_mgf_bound` — axiom · `Statlib/Concentration/mcdiarmid_mgf_bound.lean:31`
  ★ `mcdiarmid_upper` — theorem · `Statlib/Concentration/mcdiarmid_upper.lean:29`
★ `mcdiarmid` — theorem · `Statlib/Concentration/mcdiarmid.lean:25` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ BoundedDifferences"]
  n1["◆ sumSqConstants"]
  n2["⚠ mcdiarmid_mgf_bound"]
  n3["★ mcdiarmid_upper"]
  n4["★ mcdiarmid"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  class n2 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
