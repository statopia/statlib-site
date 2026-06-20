# Proof narrative — lse_sigma_hat_distribution_under_a1

Root: **lse_sigma_hat_distribution_under_a1** (theorem) `Statlib/Regression/lse_sigma_hat_distribution_under_a1.lean:31` · topic `Regression`
Closure: 13 declarations across 13 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Setup` — structure · `Statlib/Regression/Setup.lean:20`
    ▣ `Setup` — structure · `Statlib/Regression/NormalLinearModel.lean:82`  _(also used by 4: lse_indep_sigmaSqHat, lse_distribution, sigmaSqHat_chiSquared, …)_
  ◆ `AssumptionA1` — def · `Statlib/Regression/AssumptionA1.lean:19`
  ◆ `IsEstimable` — def · `Statlib/Regression/IsEstimable.lean:21`  _(also used by 6: estimable_wellDefined, exists_linear_unbiased_iff_estimable, isEstimable_iff_in_range_Q, …)_
  ◆ `lse` — def · `Statlib/Regression/lse.lean:17`
      ◆ `residual` — def · `Statlib/Regression/residual.lean:17`
    ◆ `ssr` — def · `Statlib/Regression/ssr.lean:17`
  ◆ `sigmaSqHat` — def · `Statlib/Regression/sigmaSqHat.lean:17`
  ◆ `chiSquared` — def · `Statlib/Regression/chiSquared.lean:15`
  ⚠ `lse_indep_sigmaSqHat` — axiom · `Statlib/Regression/lse_indep_sigmaSqHat.lean:46`
  ⚠ `lse_distribution` — axiom · `Statlib/Regression/lse_distribution.lean:45`
  ⚠ `sigmaSqHat_chiSquared` — axiom · `Statlib/Regression/sigmaSqHat_chiSquared.lean:43`
★ `lse_sigma_hat_distribution_under_a1` — theorem · `Statlib/Regression/lse_sigma_hat_distribution_under_a1.lean:31` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Setup"]
  n1["▣ Setup"]
  n2["◆ AssumptionA1"]
  n3["◆ IsEstimable"]
  n4["◆ lse"]
  n5["◆ residual"]
  n6["◆ ssr"]
  n7["◆ sigmaSqHat"]
  n8["◆ chiSquared"]
  n9["⚠ lse_indep_sigmaSqHat"]
  n10["⚠ lse_distribution"]
  n11["⚠ sigmaSqHat_chiSquared"]
  n12["★ lse_sigma_hat_distribution_under_a1"]
  n2 --> n1
  n4 --> n1
  n5 --> n4
  n5 --> n1
  n6 --> n5
  n6 --> n1
  n7 --> n6
  n7 --> n1
  n9 --> n0
  n9 --> n2
  n9 --> n3
  n9 --> n4
  n9 --> n7
  n10 --> n0
  n10 --> n2
  n10 --> n3
  n10 --> n4
  n11 --> n0
  n11 --> n2
  n11 --> n7
  n11 --> n8
  n12 --> n0
  n12 --> n2
  n12 --> n3
  n12 --> n4
  n12 --> n7
  n12 --> n8
  n12 --> n9
  n12 --> n10
  n12 --> n11
  class n12 headline;
  class n9,n10,n11 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
