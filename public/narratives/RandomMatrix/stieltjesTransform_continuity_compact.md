# Proof narrative — stieltjesTransform_continuity_compact

Root: **stieltjesTransform_continuity_compact** (theorem) `Statlib/RandomMatrix/StieltjesAnalysis.lean:3240` · topic `RandomMatrix`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `stieltjesTransform` — noncomputable def · `Statlib/RandomMatrix/Vocabulary/StieltjesTransform.lean:48`  _(also used by 4: stieltjesTransform_asymptotic, stieltjesTransform_moment_expansion, stieltjesTransform_bound, …)_
  ★ `stieltjesTransform_tightness` — theorem · `Statlib/RandomMatrix/StieltjesAnalysis.lean:1555`
  ★ `stieltjesTransform_inversion_weak` — theorem · `Statlib/RandomMatrix/StieltjesAnalysis.lean:939`
  ★ `stieltjesTransform_injective` — theorem · `Statlib/RandomMatrix/StieltjesAnalysis.lean:2223`
★ `stieltjesTransform_continuity_compact` — theorem · `Statlib/RandomMatrix/StieltjesAnalysis.lean:3240` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ stieltjesTransform"]
  n1["★ stieltjesTransform_tightness"]
  n2["★ stieltjesTransform_inversion_weak"]
  n3["★ stieltjesTransform_injective"]
  n4["★ stieltjesTransform_continuity_compact"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
