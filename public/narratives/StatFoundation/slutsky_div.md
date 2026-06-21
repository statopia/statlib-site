# Proof narrative — slutsky_div

Root: **slutsky_div** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:108` · topic `StatFoundation`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `slutsky_mul` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:40`
  ★ `tendstoInMeasure_inv_of_ne_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:61`
★ `slutsky_div` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:108` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ slutsky_mul"]
  n1["★ tendstoInMeasure_inv_of_ne_zero"]
  n2["★ slutsky_div"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
