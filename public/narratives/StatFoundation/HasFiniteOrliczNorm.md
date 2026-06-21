# Proof narrative — HasFiniteOrliczNorm

Root: **HasFiniteOrliczNorm** (def) `Statlib/StatFoundation/Vocabulary/OrliczNorm.lean:51` · topic `StatFoundation`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `psiOrlicz` — noncomputable def · `Statlib/StatFoundation/Vocabulary/OrliczNorm.lean:34`
  ◆ `orliczNorm` — noncomputable def · `Statlib/StatFoundation/Vocabulary/OrliczNorm.lean:45`  _(also used by 2: subgaussianOrliczNorm, subexponentialOrliczNorm)_
◆ `HasFiniteOrliczNorm` — def · `Statlib/StatFoundation/Vocabulary/OrliczNorm.lean:51` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ psiOrlicz"]
  n1["◆ orliczNorm"]
  n2["◆ HasFiniteOrliczNorm"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
