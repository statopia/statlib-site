# Proof narrative — wassersteinDRO_mono

Root: **wassersteinDRO_mono** (theorem) `Statlib/DRO/wassersteinDRO_mono.lean:12` · topic `DRO`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `wasserstein1Distance` — noncomputable def · `Statlib/DRO/wasserstein1Distance.lean:12`
    ◆ `wassersteinBall` — def · `Statlib/DRO/wassersteinBall.lean:11`
  ◆ `wassersteinDRO` — noncomputable def · `Statlib/DRO/wassersteinDRO.lean:13`  _(also used by 1: mohajerin_esfahani_kuhn_duality)_
  ★ `wassersteinBall_mono` — theorem · `Statlib/DRO/wassersteinBall_mono.lean:11`
★ `wassersteinDRO_mono` — theorem · `Statlib/DRO/wassersteinDRO_mono.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ wasserstein1Distance"]
  n1["◆ wassersteinBall"]
  n2["◆ wassersteinDRO"]
  n3["★ wassersteinBall_mono"]
  n4["★ wassersteinDRO_mono"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
