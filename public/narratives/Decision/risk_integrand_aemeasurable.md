# Proof narrative — risk_integrand_aemeasurable

Root: **risk_integrand_aemeasurable** (lemma) `Statlib/Decision/risk_integrand_aemeasurable.lean:17` · topic `Decision`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `LossFunction` — structure · `Statlib/Decision/LossFunction.lean:16`  _(also used by 6: definition_of_risk, risk, risk_eq_lintegral, …)_
  ▣ `DecisionRule` — structure · `Statlib/Decision/DecisionRule.lean:15`  _(also used by 6: definition_of_risk, risk, risk_eq_lintegral, …)_
  · `loss_comp_measurable` — lemma · `Statlib/Decision/loss_comp_measurable.lean:17`  _(also used by 1: definition_of_risk)_
· `risk_integrand_aemeasurable` — lemma · `Statlib/Decision/risk_integrand_aemeasurable.lean:17` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LossFunction"]
  n1["▣ DecisionRule"]
  n2["· loss_comp_measurable"]
  n3["· risk_integrand_aemeasurable"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
