# Proof narrative — strictLowerRankEvent_measurableSet

Root: **strictLowerRankEvent_measurableSet** (theorem) `Statlib/StatFoundation/Statistics/Conformal.lean:81` · topic `StatFoundation`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `strictLowerScoreCount` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:45`
  ◆ `StrictLowerRankEvent` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:50`  _(also used by 1: RankEventsEquiprobable)_
    ★ `strictLowerScoreCount_measurable` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:53`
  ★ `strictLowerRankVectorEvent_measurableSet` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:76`
★ `strictLowerRankEvent_measurableSet` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:81` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ strictLowerScoreCount"]
  n1["◆ StrictLowerRankEvent"]
  n2["★ strictLowerScoreCount_measurable"]
  n3["★ strictLowerRankVectorEvent_measurableSet"]
  n4["★ strictLowerRankEvent_measurableSet"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
