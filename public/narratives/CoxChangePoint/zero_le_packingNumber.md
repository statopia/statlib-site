# Proof narrative — zero_le_packingNumber

Root: **zero_le_packingNumber** (lemma) `Statlib/CoxChangePoint/Chaining.lean:129` · topic `CoxChangePoint`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsDeltaSeparated` — def · `Statlib/CoxChangePoint/Chaining.lean:107`  _(also used by 1: isDeltaSeparated_zero)_
  ◆ `PackingNumber` — noncomputable def · `Statlib/CoxChangePoint/Chaining.lean:116`  _(also used by 1: DudleyCoveringPackingBound)_
· `zero_le_packingNumber` — lemma · `Statlib/CoxChangePoint/Chaining.lean:129` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsDeltaSeparated"]
  n1["◆ PackingNumber"]
  n2["· zero_le_packingNumber"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
