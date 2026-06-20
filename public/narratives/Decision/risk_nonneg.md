# Proof narrative — risk_nonneg

Root: **risk_nonneg** (lemma) `Statlib/Decision/risk_nonneg.lean:17` · topic `Decision`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `LossFunction` — structure · `Statlib/Decision/LossFunction.lean:16`  _(also used by 6: definition_of_risk, loss_comp_measurable, risk_eq_lintegral, …)_
  ▣ `DecisionRule` — structure · `Statlib/Decision/DecisionRule.lean:15`  _(also used by 6: definition_of_risk, loss_comp_measurable, risk_eq_lintegral, …)_
  ◆ `risk` — noncomputable def · `Statlib/Decision/risk.lean:18`  _(also used by 4: definition_of_risk, risk_eq_lintegral, risk_eq_pushforward_integral, …)_
· `risk_nonneg` — lemma · `Statlib/Decision/risk_nonneg.lean:17` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LossFunction"]
  n1["▣ DecisionRule"]
  n2["◆ risk"]
  n3["· risk_nonneg"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
