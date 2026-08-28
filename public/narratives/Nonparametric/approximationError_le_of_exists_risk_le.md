# Proof narrative — approximationError_le_of_exists_risk_le

Root: **approximationError_le_of_exists_risk_le** (theorem) `Statlib/Nonparametric/OracleInterface/Risk.lean:21` · topic `Nonparametric`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `predictionRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:24`  _(also used by 3: linkedPredictionRisk, logisticRisk, squaredPredictionRisk)_
  ◆ `approximationError` — def · `Statlib/Nonparametric/Vocabulary/Risk.lean:52`
  ◆ `oracleRisk` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:47`
  ★ `oracleRisk_le_of_member` — theorem · `Statlib/Nonparametric/OracleInterface/Risk.lean:9`
★ `approximationError_le_of_exists_risk_le` — theorem · `Statlib/Nonparametric/OracleInterface/Risk.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ predictionRisk"]
  n1["◆ approximationError"]
  n2["◆ oracleRisk"]
  n3["★ oracleRisk_le_of_member"]
  n4["★ approximationError_le_of_exists_risk_le"]
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
