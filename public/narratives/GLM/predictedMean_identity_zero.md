# Proof narrative — predictedMean_identity_zero

Root: **predictedMean_identity_zero** (theorem) `Statlib/GLM/predictedMean_identity_zero.lean:14` · topic `GLM`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `LinkFunction` — structure · `Statlib/GLM/LinkFunction.lean:22`
    ◆ `LinearPredictor` — def · `Statlib/GLM/LinearPredictor.lean:10`  _(also used by 2: LinearPredictor_add, LinearPredictor_smul)_
  ◆ `predictedMean` — def · `Statlib/GLM/predictedMean.lean:11`
  ◆ `identityLink` — def · `Statlib/GLM/identityLink.lean:10`
  ★ `LinearPredictor_zero` — theorem · `Statlib/GLM/LinearPredictor_zero.lean:12`
★ `predictedMean_identity_zero` — theorem · `Statlib/GLM/predictedMean_identity_zero.lean:14` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LinkFunction"]
  n1["◆ LinearPredictor"]
  n2["◆ predictedMean"]
  n3["◆ identityLink"]
  n4["★ LinearPredictor_zero"]
  n5["★ predictedMean_identity_zero"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
