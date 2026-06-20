# Proof narrative — ols_pythagorean

Root: **ols_pythagorean** (theorem) `Statlib/Regression/ols_pythagorean.lean:12` · topic `Regression`
Closure: 5 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `LinearModel` — structure · `Statlib/Regression/LinearModel.lean:11`  _(also used by 4: LinearModel.ols, gauss_markov, gauss_markov_sq, …)_
    ◆ `lse` — def · `Statlib/Regression/NormalLinearModel.lean:111`  _(also used by 3: lse_indep_sigmaSqHat, lse_distribution, lse_sigma_hat_distribution_under_a1)_
  ◆ `residual` — def · `Statlib/Regression/NormalLinearModel.lean:115`  _(also used by 4: ssr, gauss_markov, gauss_markov_sq, …)_
  ◆ `LinearModel.residual` — def · `Statlib/Regression/LinearModel_residual.lean:11`  _(also used by 1: gauss_markov)_
★ `ols_pythagorean` — theorem · `Statlib/Regression/ols_pythagorean.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ LinearModel"]
  n1["◆ lse"]
  n2["◆ residual"]
  n3["◆ LinearModel.residual"]
  n4["★ ols_pythagorean"]
  n2 --> n1
  n3 --> n2
  n3 --> n0
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
