# Proof narrative — matrix_bernstein_rect

Root: **matrix_bernstein_rect** (theorem) `Statlib/HighDim/MatrixBernstein.lean:70` · topic `HighDim`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasZeroMean` — structure · `Statlib/Vocabulary/RandomMatrix.lean:62`  _(also used by 1: matrix_bernstein)_
  ◆ `HasBoundedSpectralNorm` — def · `Statlib/Vocabulary/RandomMatrix.lean:38`  _(also used by 1: matrix_bernstein)_
★ `matrix_bernstein_rect` — theorem · `Statlib/HighDim/MatrixBernstein.lean:70` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasZeroMean"]
  n1["◆ HasBoundedSpectralNorm"]
  n2["★ matrix_bernstein_rect"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
