# Proof narrative — capacity_control

Root: **capacity_control** (theorem) `Statlib/Regression/capacity_control.lean:15` · topic `Regression`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RegressionModel` — structure · `Statlib/Regression/Basic.lean:29`  _(also used by 81: excessRisk, IsStarShapedClass, LocalGaussianComplexity, …)_
  ◆ `estimationErrorUpper` — def · `Statlib/Regression/estimationErrorUpper.lean:11`  _(also used by 51: LocalGaussianComplexityProxyAssumptions, LocalizedDeterministicAssumptions.ofProcessAndComplexity, LocalizedDeterministicAssumptions.ofProcessAndEntropy, …)_
  ◆ `uniformDeviation` — def · `Statlib/Regression/uniformDeviation.lean:10`
★ `capacity_control` — theorem · `Statlib/Regression/capacity_control.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RegressionModel"]
  n1["◆ estimationErrorUpper"]
  n2["◆ uniformDeviation"]
  n3["★ capacity_control"]
  n1 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
