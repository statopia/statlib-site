# Proof narrative — sublevelFiltration

Root: **sublevelFiltration** (def) `Statlib/TDA/sublevelFiltration.lean:13` · topic `TDA`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Filtration` — structure · `Statlib/TDA/Filtration.lean:12`
  ◆ `sublevel` — def · `Statlib/TDA/sublevel.lean:11`
  ★ `sublevel_monotone` — theorem · `Statlib/TDA/sublevel_monotone.lean:11`
◆ `sublevelFiltration` — def · `Statlib/TDA/sublevelFiltration.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Filtration"]
  n1["◆ sublevel"]
  n2["★ sublevel_monotone"]
  n3["◆ sublevelFiltration"]
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
