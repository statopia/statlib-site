# Proof narrative — prediction_coverage_of_score_subset

Root: **prediction_coverage_of_score_subset** (theorem) `Statlib/StatFoundation/Statistics/Conformal.lean:32` · topic `StatFoundation`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ScoreCoveredBy` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:27`
  ◆ `MarginalCoverage` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:17`
  ◆ `HasScoreCoverage` — def · `Statlib/StatFoundation/Vocabulary/Conformal.lean:35`
  ★ `MarginalCoverage.mono` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:16`
★ `prediction_coverage_of_score_subset` — theorem · `Statlib/StatFoundation/Statistics/Conformal.lean:32` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ScoreCoveredBy"]
  n1["◆ MarginalCoverage"]
  n2["◆ HasScoreCoverage"]
  n3["★ MarginalCoverage.mono"]
  n4["★ prediction_coverage_of_score_subset"]
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
