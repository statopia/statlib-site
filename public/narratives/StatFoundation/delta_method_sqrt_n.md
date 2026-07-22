# Proof narrative — delta_method_sqrt_n

Root: **delta_method_sqrt_n** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:399` · topic `StatFoundation`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `remainder_tendstoInMeasure` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:241`
    ★ `slutsky_add` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:23`
  ★ `delta_method` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:354`
★ `delta_method_sqrt_n` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/MappingTheorems.lean:399` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ remainder_tendstoInMeasure"]
  n1["★ slutsky_add"]
  n2["★ delta_method"]
  n3["★ delta_method_sqrt_n"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
