# Proof narrative — lse_sigma_hat_distribution_under_a1

Root: **lse_sigma_hat_distribution_under_a1** (theorem) `Statlib/Regression/NormalLinearModel.lean:251` · topic `Regression`
Closure: 12 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Setup` — structure · `Statlib/Regression/NormalLinearModel.lean:82`  _(also used by 5: AssumptionA1, lse, residual, …)_
  ◆ `AssumptionA1` — def · `Statlib/Regression/NormalLinearModel.lean:131`
  ◆ `IsEstimable` — def · `Statlib/Regression/NormalLinearModel.lean:106`
  ◆ `lse` — def · `Statlib/Regression/NormalLinearModel.lean:111`
      ◆ `residual` — def · `Statlib/Regression/NormalLinearModel.lean:115`  _(also used by 5: LinearModel.residual, gauss_markov, gauss_markov_sq, …)_
    ◆ `ssr` — def · `Statlib/Regression/NormalLinearModel.lean:119`
  ◆ `sigmaSqHat` — def · `Statlib/Regression/NormalLinearModel.lean:123`
  ◆ `chiSquared` — def · `Statlib/Regression/NormalLinearModel.lean:70`
  ⚠ `lse_indep_sigmaSqHat` — axiom · `Statlib/Regression/NormalLinearModel.lean:162`
  ⚠ `lse_distribution` — axiom · `Statlib/Regression/NormalLinearModel.lean:196`
  ⚠ `sigmaSqHat_chiSquared` — axiom · `Statlib/Regression/NormalLinearModel.lean:230`
★ `lse_sigma_hat_distribution_under_a1` — theorem · `Statlib/Regression/NormalLinearModel.lean:251` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Setup"]
  n1["◆ AssumptionA1"]
  n2["◆ IsEstimable"]
  n3["◆ lse"]
  n4["◆ residual"]
  n5["◆ ssr"]
  n6["◆ sigmaSqHat"]
  n7["◆ chiSquared"]
  n8["⚠ lse_indep_sigmaSqHat"]
  n9["⚠ lse_distribution"]
  n10["⚠ sigmaSqHat_chiSquared"]
  n11["★ lse_sigma_hat_distribution_under_a1"]
  n4 --> n3
  n5 --> n4
  n6 --> n5
  n8 --> n0
  n8 --> n1
  n8 --> n2
  n8 --> n3
  n8 --> n6
  n9 --> n0
  n9 --> n1
  n9 --> n2
  n9 --> n3
  n10 --> n0
  n10 --> n1
  n10 --> n6
  n10 --> n7
  n11 --> n0
  n11 --> n1
  n11 --> n2
  n11 --> n3
  n11 --> n6
  n11 --> n7
  n11 --> n8
  n11 --> n9
  n11 --> n10
  class n11 headline;
  class n8,n9,n10 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
