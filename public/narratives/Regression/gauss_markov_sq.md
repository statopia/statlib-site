# Proof narrative — gauss_markov_sq

Root: **gauss_markov_sq** (theorem) `Statlib/Regression/gauss_markov_sq.lean:13` · topic `Regression`
Closure: 7 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `LinearModel` — structure · `Statlib/Regression/LinearModel.lean:11`  _(also used by 2: ols_pythagorean, ols_residual_orthogonal)_
    ◆ `lse` — def · `Statlib/Regression/NormalLinearModel.lean:111`  _(also used by 3: lse_indep_sigmaSqHat, lse_distribution, lse_sigma_hat_distribution_under_a1)_
  ◆ `residual` — def · `Statlib/Regression/NormalLinearModel.lean:115`  _(also used by 3: ssr, ols_pythagorean, ols_residual_orthogonal)_
    ◆ `LinearModel.residual` — def · `Statlib/Regression/LinearModel_residual.lean:11`  _(also used by 1: ols_pythagorean)_
    ◆ `LinearModel.ols` — def · `Statlib/Regression/LinearModel_ols.lean:10`
  ★ `gauss_markov` — theorem · `Statlib/Regression/gauss_markov.lean:18`
★ `gauss_markov_sq` — theorem · `Statlib/Regression/gauss_markov_sq.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LinearModel"]
  n1["◆ lse"]
  n2["◆ residual"]
  n3["◆ LinearModel.residual"]
  n4["◆ LinearModel.ols"]
  n5["★ gauss_markov"]
  n6["★ gauss_markov_sq"]
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n2
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
