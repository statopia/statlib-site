# Proof narrative — basu_indepFun

Root: **basu_indepFun** (theorem) `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:50` · topic `StatFoundation`
Closure: 11 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsSufficientFor` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:27`
  ◆ `IsSufficientForFamily` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:34`
  ◆ `IsBoundedlyComplete` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:43`
  ◆ `IsAncillary` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basic.lean:39`
  · `indicator_one_nonneg` — lemma · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:36`
  · `indicator_one_le_one` — lemma · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:42`
  ◆ `clip` — def · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:18`
  · `clip_eq` — lemma · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:31`
  · `clip_measurable` — lemma · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:20`
  · `clip_bounded` — lemma · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:24`
★ `basu_indepFun` — theorem · `Statlib/StatFoundation/Statistics/Sufficiency/Basu.lean:50` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSufficientFor"]
  n1["◆ IsSufficientForFamily"]
  n2["◆ IsBoundedlyComplete"]
  n3["◆ IsAncillary"]
  n4["· indicator_one_nonneg"]
  n5["· indicator_one_le_one"]
  n6["◆ clip"]
  n7["· clip_eq"]
  n8["· clip_measurable"]
  n9["· clip_bounded"]
  n10["★ basu_indepFun"]
  n1 --> n0
  n7 --> n6
  n8 --> n6
  n9 --> n6
  n10 --> n1
  n10 --> n2
  n10 --> n3
  n10 --> n4
  n10 --> n5
  n10 --> n6
  n10 --> n7
  n10 --> n8
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
