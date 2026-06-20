# Proof narrative — integral_birkhoffAverage

Root: **integral_birkhoffAverage** (theorem) `Statlib/TimeSeries/integral_birkhoffAverage.lean:14` · topic `TimeSeries`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `integrable_comp_iterate` — theorem · `Statlib/TimeSeries/integrable_comp_iterate.lean:10`
    ★ `integral_comp_iterate` — theorem · `Statlib/TimeSeries/integral_comp_iterate.lean:10`
  ★ `integral_birkhoffSum` — theorem · `Statlib/TimeSeries/integral_birkhoffSum.lean:16`
★ `integral_birkhoffAverage` — theorem · `Statlib/TimeSeries/integral_birkhoffAverage.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ integrable_comp_iterate"]
  n1["★ integral_comp_iterate"]
  n2["★ integral_birkhoffSum"]
  n3["★ integral_birkhoffAverage"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
