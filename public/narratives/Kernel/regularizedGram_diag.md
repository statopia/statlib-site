# Proof narrative — regularizedGram_diag

Root: **regularizedGram_diag** (theorem) `Statlib/Kernel/regularizedGram_diag.lean:14` · topic `Kernel`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `GramMatrix` — def · `Statlib/Kernel/GramMatrix.lean:13`  _(also used by 2: GramMatrix_psd, GramMatrix_symm)_
  ◆ `regularizedGram` — noncomputable def · `Statlib/Kernel/regularizedGram.lean:14`  _(also used by 1: regularizedGram_symm)_
  ★ `GramMatrix_apply` — theorem · `Statlib/Kernel/GramMatrix_apply.lean:11`  _(also used by 2: GramMatrix_psd, GramMatrix_symm)_
★ `regularizedGram_diag` — theorem · `Statlib/Kernel/regularizedGram_diag.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ GramMatrix"]
  n1["◆ regularizedGram"]
  n2["★ GramMatrix_apply"]
  n3["★ regularizedGram_diag"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
