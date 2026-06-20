# Proof narrative — knockoffFdrHat_nonneg

Root: **knockoffFdrHat_nonneg** (lemma) `Statlib/MultipleTesting/knockoffFdrHat_nonneg.lean:11` · topic `MultipleTesting`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `knockoffNegCount` — noncomputable def · `Statlib/MultipleTesting/knockoffNegCount.lean:8`
  ◆ `knockoffPosCount` — noncomputable def · `Statlib/MultipleTesting/knockoffPosCount.lean:8`
  ◆ `knockoffFdrHat` — noncomputable def · `Statlib/MultipleTesting/knockoffFdrHat.lean:11`
· `knockoffFdrHat_nonneg` — lemma · `Statlib/MultipleTesting/knockoffFdrHat_nonneg.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ knockoffNegCount"]
  n1["◆ knockoffPosCount"]
  n2["◆ knockoffFdrHat"]
  n3["· knockoffFdrHat_nonneg"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n3 --> n1
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
