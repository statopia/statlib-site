# Proof narrative — CoversParameter.mono_q

Root: **CoversParameter.mono_q** (lemma) `Statlib/Regression/CoversParameter_mono_q.lean:11` · topic `Regression`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `ciHalfWidth` — noncomputable def · `Statlib/Regression/ciHalfWidth.lean:7`  _(also used by 2: ciHalfWidth_nonneg, ciHalfWidth_zero)_
    ◆ `confidenceInterval` — noncomputable def · `Statlib/Regression/confidenceInterval.lean:10`
    ◆ `ciLower` — noncomputable def · `Statlib/Regression/ciLower.lean:8`
    ◆ `ciUpper` — noncomputable def · `Statlib/Regression/ciUpper.lean:8`
  ◆ `CoversParameter` — def · `Statlib/Regression/CoversParameter.lean:9`
  · `CoversParameter_iff_dist_le` — lemma · `Statlib/Regression/CoversParameter_iff_dist_le.lean:12`
· `CoversParameter.mono_q` — lemma · `Statlib/Regression/CoversParameter_mono_q.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ciHalfWidth"]
  n1["◆ confidenceInterval"]
  n2["◆ ciLower"]
  n3["◆ ciUpper"]
  n4["◆ CoversParameter"]
  n5["· CoversParameter_iff_dist_le"]
  n6["· CoversParameter.mono_q"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n4
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n1
  n6 --> n4
  n6 --> n5
  n6 --> n0
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
