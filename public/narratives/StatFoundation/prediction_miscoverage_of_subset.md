# Proof narrative — prediction_miscoverage_of_subset

Root: **prediction_miscoverage_of_subset** (theorem) `Statlib/StatFoundation/Statistics/Conformal.lean:42` · topic `StatFoundation`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ScoreMiscoveredBy` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:31`
  ◆ `MarginalEventBound` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:22`
  ◆ `HasScoreMiscoverageBound` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:40`
  ★ `MarginalEventBound.mono` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:24`
★ `prediction_miscoverage_of_subset` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:42` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ScoreMiscoveredBy"]
  n1["◆ MarginalEventBound"]
  n2["◆ HasScoreMiscoverageBound"]
  n3["★ MarginalEventBound.mono"]
  n4["★ prediction_miscoverage_of_subset"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n2
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
