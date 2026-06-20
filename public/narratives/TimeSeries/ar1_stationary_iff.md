# Proof narrative — ar1_stationary_iff

Root: **ar1_stationary_iff** (theorem) `Statlib/TimeSeries/ar1_stationary_iff.lean:19` · topic `TimeSeries`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsAR1Process` — def · `Statlib/TimeSeries/IsAR1Process.lean:12`  _(also used by 2: ar1_explicit, ar1_zero_eq_noise)_
  ◆ `IsStrictlyStationary` — def · `Statlib/TimeSeries/IsStrictlyStationary.lean:16`  _(also used by 7: IsStrictlyStationary.integral_eq, IsStrictlyStationary.map_eq_of_single, isStrictlyStationary_birkhoff, …)_
  ⚠ `ar1_stationary_iff_axiom` — axiom · `Statlib/TimeSeries/ar1_stationary_iff_axiom.lean:27`
★ `ar1_stationary_iff` — theorem · `Statlib/TimeSeries/ar1_stationary_iff.lean:19` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsAR1Process"]
  n1["◆ IsStrictlyStationary"]
  n2["⚠ ar1_stationary_iff_axiom"]
  n3["★ ar1_stationary_iff"]
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
