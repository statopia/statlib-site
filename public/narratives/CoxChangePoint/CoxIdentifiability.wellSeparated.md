# Proof narrative — CoxIdentifiability.wellSeparated

Root: **CoxIdentifiability.wellSeparated** (theorem) `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:236` · topic `CoxChangePoint`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 71: liftAuto, concreteGn, buildLemmaS1Data, …)_
  ▣ `CoxIdentifiability` — structure · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:210`
  ★ `wellSeparated_of_compact_of_unique_max` — theorem · `Statlib/CoxChangePoint/Identifiability.lean:43`  _(also used by 1: dist_lt_of_near_max)_
★ `CoxIdentifiability.wellSeparated` — theorem · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:236` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxParam"]
  n1["▣ CoxIdentifiability"]
  n2["★ wellSeparated_of_compact_of_unique_max"]
  n3["★ CoxIdentifiability.wellSeparated"]
  n1 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
