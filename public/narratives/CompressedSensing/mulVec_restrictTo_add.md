# Proof narrative — mulVec_restrictTo_add

Root: **mulVec_restrictTo_add** (theorem) `Statlib/CompressedSensing/mulVec_restrictTo_add.lean:14` · topic `CompressedSensing`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `restrictTo` — def · `Statlib/CompressedSensing/restrictTo.lean:15`  _(also used by 6: block_inner_product_bound, candes_2008_kernel_contraction, restrictTo_disjoint_supports, …)_
  ★ `restrictTo_add_compl` — theorem · `Statlib/CompressedSensing/restrictTo_add_compl.lean:13`  _(also used by 1: candes_2008_kernel_contraction)_
★ `mulVec_restrictTo_add` — theorem · `Statlib/CompressedSensing/mulVec_restrictTo_add.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ restrictTo"]
  n1["★ restrictTo_add_compl"]
  n2["★ mulVec_restrictTo_add"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
