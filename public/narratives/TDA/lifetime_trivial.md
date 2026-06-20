# Proof narrative — lifetime_trivial

Root: **lifetime_trivial** (theorem) `Statlib/TDA/lifetime_trivial.lean:15` · topic `TDA`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `PersistencePoint` — structure · `Statlib/TDA/PersistencePoint.lean:13`  _(also used by 1: PersistenceDiagram)_
  ◆ `isTrivial` — def · `Statlib/TDA/isTrivial.lean:14`
  ◆ `lifetime` — noncomputable def · `Statlib/TDA/lifetime.lean:14`
★ `lifetime_trivial` — theorem · `Statlib/TDA/lifetime_trivial.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ PersistencePoint"]
  n1["◆ isTrivial"]
  n2["◆ lifetime"]
  n3["★ lifetime_trivial"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
