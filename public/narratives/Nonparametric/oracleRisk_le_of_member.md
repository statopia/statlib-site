# Proof narrative — oracleRisk_le_of_member

Root: **oracleRisk_le_of_member** (theorem) `Statlib/Nonparametric/OracleInterface/Risk.lean:9` · topic `Nonparametric`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `predictionRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:24`  _(also used by 3: linkedPredictionRisk, logisticRisk, squaredPredictionRisk)_
  ◆ `oracleRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:47`
★ `oracleRisk_le_of_member` — theorem · `Statlib/Nonparametric/OracleInterface/Risk.lean:9` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ predictionRisk"]
  n1["◆ oracleRisk"]
  n2["★ oracleRisk_le_of_member"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
