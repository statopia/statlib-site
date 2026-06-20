# Proof narrative — bayes_test_optimality

Root: **bayes_test_optimality** (theorem) `Statlib/Testing/bayes_test_optimality.lean:22` · topic `Testing`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `bayesTestRisk` — noncomputable def · `Statlib/Testing/bayesTestRisk.lean:14`
    ★ `np_integrand_nonneg` — theorem · `Statlib/Testing/np_integrand_nonneg.lean:16`
  ★ `np_integral_nonneg` — theorem · `Statlib/Testing/np_integral_nonneg.lean:16`  _(also used by 1: neyman_pearson_optimality)_
★ `bayes_test_optimality` — theorem · `Statlib/Testing/bayes_test_optimality.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ bayesTestRisk"]
  n1["★ np_integrand_nonneg"]
  n2["★ np_integral_nonneg"]
  n3["★ bayes_test_optimality"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
