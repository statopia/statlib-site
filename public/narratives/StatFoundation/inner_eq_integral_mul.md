# Proof narrative — inner_eq_integral_mul

Root: **inner_eq_integral_mul** (theorem) `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:115` · topic `StatFoundation`
Closure: 6 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `memLp_two` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:78`  _(also used by 1: HasUnitVariance)_
    ★ `integral_eq_zero` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:66`
    ★ `variance_eq` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:87`
  ★ `integral_sq` — private theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:107`
  ▣ `IsonormalProcess` — structure · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:47`
★ `inner_eq_integral_mul` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:115` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ memLp_two"]
  n1["★ integral_eq_zero"]
  n2["★ variance_eq"]
  n3["★ integral_sq"]
  n4["▣ IsonormalProcess"]
  n5["★ inner_eq_integral_mul"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n3 --> n1
  n5 --> n0
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
