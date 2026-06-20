# Proof narrative — Statlib.TDA.stability_theorem_axiom

Root: **Statlib.TDA.stability_theorem_axiom** (axiom) `Statlib/TDA/Statlib_TDA_stability_theorem_axiom.lean:17` · topic `TDA`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `PersistencePoint` — structure · `Statlib/TDA/PersistencePoint.lean:13`  _(also used by 3: isTrivial, lifetime, lifetime_trivial)_
  ◆ `PersistenceDiagram` — abbrev · `Statlib/TDA/PersistenceDiagram.lean:14`  _(also used by 3: bottleneckDistance_comm, bottleneckDistance_nonneg, stability_theorem)_
  ◆ `bottleneckDistance` — noncomputable def · `Statlib/TDA/bottleneckDistance.lean:22`  _(also used by 3: bottleneckDistance_comm, bottleneckDistance_nonneg, stability_theorem)_
⚠ `Statlib.TDA.stability_theorem_axiom` — axiom · `Statlib/TDA/Statlib_TDA_stability_theorem_axiom.lean:17` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ PersistencePoint"]
  n1["◆ PersistenceDiagram"]
  n2["◆ bottleneckDistance"]
  n3["⚠ Statlib.TDA.stability_theorem_axiom"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n3 --> n2
  class n3 headline;
  class n3 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```

> ⚠ `Statlib.TDA.stability_theorem_axiom` is an **axiom** (no proof body), so its closure only covers declarations referenced in its *statement*. Supporting lemmas in `TDA/` that were meant to prove it are not edge-connected — a signal that the proof line was atomised then axiomatised apart.
