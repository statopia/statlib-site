# Proof narrative — benjamini_hochberg_fdr

Root: **benjamini_hochberg_fdr** (theorem) `Statlib/HypothesisTesting/MultipleTesting/BenjaminiHochberg.lean:38` · topic `HypothesisTesting`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FDR` — noncomputable def · `Statlib/HypothesisTesting/Vocabulary.lean:302`
  ◆ `sortedPValues` — noncomputable def · `Statlib/HypothesisTesting/MultipleTesting/BenjaminiHochberg.lean:15`
  ◆ `bhKStar` — noncomputable def · `Statlib/HypothesisTesting/MultipleTesting/BenjaminiHochberg.lean:22`
  ◆ `bhReject` — noncomputable def · `Statlib/HypothesisTesting/MultipleTesting/BenjaminiHochberg.lean:31`
★ `benjamini_hochberg_fdr` — theorem · `Statlib/HypothesisTesting/MultipleTesting/BenjaminiHochberg.lean:38` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FDR"]
  n1["◆ sortedPValues"]
  n2["◆ bhKStar"]
  n3["◆ bhReject"]
  n4["★ benjamini_hochberg_fdr"]
  n2 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n4 --> n1
  n4 --> n2
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
