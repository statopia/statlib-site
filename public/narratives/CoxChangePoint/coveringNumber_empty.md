# Proof narrative — coveringNumber_empty

Root: **coveringNumber_empty** (lemma) `Statlib/CoxChangePoint/Chaining.lean:91` · topic `CoxChangePoint`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsDeltaCover` — def · `Statlib/CoxChangePoint/Chaining.lean:61`
  ◆ `CoveringNumber` — noncomputable def · `Statlib/CoxChangePoint/Chaining.lean:70`  _(also used by 3: DudleyCoveringPackingBound, DudleyEntropyBound, CoveringLeBracketingHypothesis)_
  · `isDeltaCover_zero_iff` — lemma · `Statlib/CoxChangePoint/Chaining.lean:75`
· `coveringNumber_empty` — lemma · `Statlib/CoxChangePoint/Chaining.lean:91` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsDeltaCover"]
  n1["◆ CoveringNumber"]
  n2["· isDeltaCover_zero_iff"]
  n3["· coveringNumber_empty"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
