# Proof narrative — minimalSufficient_of_subfamily

Root: **minimalSufficient_of_subfamily** (theorem) `Statlib/Sufficiency/minimalSufficient_of_subfamily.lean:25` · topic `Sufficiency`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 44: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
  ◆ `IsSufficient'` — def · `Statlib/Statistic/Basic.lean:83`  _(also used by 2: condExp_eq_of_sufficient, lehmann_scheffe)_
  ◆ `IsMinimalSufficient'` — def · `Statlib/Statistic/Basic.lean:103`
★ `minimalSufficient_of_subfamily` — theorem · `Statlib/Sufficiency/minimalSufficient_of_subfamily.lean:25` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ IsSufficient'"]
  n2["◆ IsMinimalSufficient'"]
  n3["★ minimalSufficient_of_subfamily"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
