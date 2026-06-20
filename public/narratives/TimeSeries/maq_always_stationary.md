# Proof narrative — maq_always_stationary

Root: **maq_always_stationary** (theorem) `Statlib/TimeSeries/maq_always_stationary.lean:18` · topic `TimeSeries`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsMAqProcess` — def · `Statlib/TimeSeries/IsMAqProcess.lean:12`
  ◆ `IsStrictlyStationary` — def · `Statlib/TimeSeries/IsStrictlyStationary.lean:16`  _(also used by 7: IsStrictlyStationary.integral_eq, IsStrictlyStationary.map_eq_of_single, ar1_stationary_iff, …)_
  ⚠ `maq_always_stationary_axiom` — axiom · `Statlib/TimeSeries/maq_always_stationary_axiom.lean:19`
★ `maq_always_stationary` — theorem · `Statlib/TimeSeries/maq_always_stationary.lean:18` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsMAqProcess"]
  n1["◆ IsStrictlyStationary"]
  n2["⚠ maq_always_stationary_axiom"]
  n3["★ maq_always_stationary"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  class n2 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
