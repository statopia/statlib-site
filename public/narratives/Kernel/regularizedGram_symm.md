# Proof narrative — regularizedGram_symm

Root: **regularizedGram_symm** (theorem) `Statlib/Kernel/regularizedGram_symm.lean:14` · topic `Kernel`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `GramMatrix` — def · `Statlib/Kernel/GramMatrix.lean:13`  _(also used by 1: GramMatrix_psd)_
  ◆ `regularizedGram` — noncomputable def · `Statlib/Kernel/regularizedGram.lean:14`  _(also used by 1: regularizedGram_diag)_
    ★ `GramMatrix_apply` — theorem · `Statlib/Kernel/GramMatrix_apply.lean:11`  _(also used by 2: GramMatrix_psd, regularizedGram_diag)_
  ★ `GramMatrix_symm` — theorem · `Statlib/Kernel/GramMatrix_symm.lean:12`
★ `regularizedGram_symm` — theorem · `Statlib/Kernel/regularizedGram_symm.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ GramMatrix"]
  n1["◆ regularizedGram"]
  n2["★ GramMatrix_apply"]
  n3["★ GramMatrix_symm"]
  n4["★ regularizedGram_symm"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
