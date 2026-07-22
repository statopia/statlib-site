# Proof narrative — logisticRisk

Root: **logisticRisk** (noncomputable def) `Statlib/Nonparametric/Vocabulary/Models.lean:62` · topic `Nonparametric`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `predictionRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:24`  _(also used by 4: oracleRisk_le_of_member, linkedPredictionRisk, oracleRisk, …)_
  ◆ `bernoulliNegLogLikelihood` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Loss.lean:32`
    ▣ `LinkFunction` — structure · `Statlib/Nonparametric/Vocabulary/Models.lean:27`  _(also used by 2: LinkedRegressionModel, linkedPredictionRisk)_
  ◆ `linkedMean` — def · `Statlib/Nonparametric/Vocabulary/Models.lean:53`  _(also used by 1: linkedPredictionRisk)_
    ◆ `logitLink` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Models.lean:36`
    ◆ `logisticInvLink` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Models.lean:32`
  ◆ `logisticLinkFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Models.lean:40`
◆ `logisticRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Models.lean:62` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ predictionRisk"]
  n1["◆ bernoulliNegLogLikelihood"]
  n2["▣ LinkFunction"]
  n3["◆ linkedMean"]
  n4["◆ logitLink"]
  n5["◆ logisticInvLink"]
  n6["◆ logisticLinkFunction"]
  n7["◆ logisticRisk"]
  n3 --> n2
  n6 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n3
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
