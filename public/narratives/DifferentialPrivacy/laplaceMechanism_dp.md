# Proof narrative — laplaceMechanism_dp

Root: **laplaceMechanism_dp** (theorem) `Statlib/DifferentialPrivacy/laplaceMechanism_dp.lean:21` · topic `DifferentialPrivacy`
Closure: 9 declarations across 9 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `NeighbourRel` — abbrev · `Statlib/DifferentialPrivacy/NeighbourRel.lean:14`  _(also used by 6: IsDifferentiallyPrivate.mono, IsPureDP.toApprox, composition_sequential, …)_
  ◆ `sensitivityL1_real` — noncomputable def · `Statlib/DifferentialPrivacy/sensitivityL1_real.lean:19`
    ▣ `IsDifferentiallyPrivate` — structure · `Statlib/DifferentialPrivacy/IsDifferentiallyPrivate.lean:18`  _(also used by 5: IsDifferentiallyPrivate.mono, IsPureDP.toApprox, composition_sequential, …)_
  ◆ `IsPureDP` — def · `Statlib/DifferentialPrivacy/IsPureDP.lean:13`  _(also used by 1: IsPureDP.toApprox)_
      ◆ `laplacePdf` — noncomputable def · `Statlib/DifferentialPrivacy/laplacePdf.lean:14`
    ◆ `laplaceMeasure` — noncomputable def · `Statlib/DifferentialPrivacy/laplaceMeasure.lean:15`
  ◆ `laplaceMechanism` — noncomputable def · `Statlib/DifferentialPrivacy/laplaceMechanism.lean:13`
  ⚠ `laplaceMechanism_dp_axiom` — axiom · `Statlib/DifferentialPrivacy/laplaceMechanism_dp_axiom.lean:24`
★ `laplaceMechanism_dp` — theorem · `Statlib/DifferentialPrivacy/laplaceMechanism_dp.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ NeighbourRel"]
  n1["◆ sensitivityL1_real"]
  n2["▣ IsDifferentiallyPrivate"]
  n3["◆ IsPureDP"]
  n4["◆ laplacePdf"]
  n5["◆ laplaceMeasure"]
  n6["◆ laplaceMechanism"]
  n7["⚠ laplaceMechanism_dp_axiom"]
  n8["★ laplaceMechanism_dp"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n5 --> n4
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n3
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n8 --> n3
  n8 --> n6
  n8 --> n7
  class n8 headline;
  class n7 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
