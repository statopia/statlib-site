# Proof narrative — AssumptionA1

Root: **AssumptionA1** (structure) `Statlib/HDMediation/AssumptionA1.lean:22` · topic `HDMediation`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsSubGaussianScalar` — def · `Statlib/HDMediation/IsSubGaussianScalar.lean:20`
  ◆ `IsVectorSubGaussian` — def · `Statlib/HDMediation/IsVectorSubGaussian.lean:19`
    ◆ `l2norm` — noncomputable def · `Statlib/HDMediation/l2norm.lean:17`
  ◆ `IsNormSubGaussian` — def · `Statlib/HDMediation/IsNormSubGaussian.lean:19`
▣ `AssumptionA1` — structure · `Statlib/HDMediation/AssumptionA1.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSubGaussianScalar"]
  n1["◆ IsVectorSubGaussian"]
  n2["◆ l2norm"]
  n3["◆ IsNormSubGaussian"]
  n4["▣ AssumptionA1"]
  n1 --> n0
  n3 --> n2
  n4 --> n1
  n4 --> n3
  n4 --> n0
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
