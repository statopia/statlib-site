# Proof narrative — DudleyCoveringPackingBound

Root: **DudleyCoveringPackingBound** (def) `Statlib/CoxChangePoint/Chaining.lean:157` · topic `CoxChangePoint`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsDeltaCover` — def · `Statlib/CoxChangePoint/Chaining.lean:61`  _(also used by 1: isDeltaCover_zero_iff)_
  ◆ `CoveringNumber` — noncomputable def · `Statlib/CoxChangePoint/Chaining.lean:70`  _(also used by 3: coveringNumber_empty, DudleyEntropyBound, CoveringLeBracketingHypothesis)_
    ◆ `IsDeltaSeparated` — def · `Statlib/CoxChangePoint/Chaining.lean:107`  _(also used by 1: isDeltaSeparated_zero)_
  ◆ `PackingNumber` — noncomputable def · `Statlib/CoxChangePoint/Chaining.lean:116`  _(also used by 1: zero_le_packingNumber)_
◆ `DudleyCoveringPackingBound` — def · `Statlib/CoxChangePoint/Chaining.lean:157` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsDeltaCover"]
  n1["◆ CoveringNumber"]
  n2["◆ IsDeltaSeparated"]
  n3["◆ PackingNumber"]
  n4["◆ DudleyCoveringPackingBound"]
  n1 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
