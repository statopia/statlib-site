# Proof narrative — matrix_lieb_pair_trace_of_concave

Root: **matrix_lieb_pair_trace_of_concave** (private theorem) `Statlib/HighDim/Concentration/MatrixBernstein.lean:1749` · topic `HighDim`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `integral_pair_eq_prod_integral_of_indepFun` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1693`
  ★ `lieb_jensen_fixed_trace_of_concave` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1714`
  ★ `integral_prod_le_of_ae_integral_le` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1735`
★ `matrix_lieb_pair_trace_of_concave` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1749` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ integral_pair_eq_prod_integral_of_indepFun"]
  n1["★ lieb_jensen_fixed_trace_of_concave"]
  n2["★ integral_prod_le_of_ae_integral_le"]
  n3["★ matrix_lieb_pair_trace_of_concave"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
