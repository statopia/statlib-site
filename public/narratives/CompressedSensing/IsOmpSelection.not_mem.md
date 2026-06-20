# Proof narrative — IsOmpSelection.not_mem

Root: **IsOmpSelection.not_mem** (lemma) `Statlib/CompressedSensing/IsOmpSelection_not_mem.lean:11` · topic `CompressedSensing`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `correlationScore` — def · `Statlib/CompressedSensing/correlationScore.lean:11`  _(also used by 1: correlationScore_nonneg)_
  ◆ `IsOmpSelection` — def · `Statlib/CompressedSensing/IsOmpSelection.lean:12`  _(also used by 1: IsOmpSelection.card_insert)_
· `IsOmpSelection.not_mem` — lemma · `Statlib/CompressedSensing/IsOmpSelection_not_mem.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ correlationScore"]
  n1["◆ IsOmpSelection"]
  n2["· IsOmpSelection.not_mem"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
