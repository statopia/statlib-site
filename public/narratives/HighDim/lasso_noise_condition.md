# Proof narrative — lasso_noise_condition

Root: **lasso_noise_condition** (theorem) `Statlib/HighDim/Concentration/SubGaussianMax.lean:637` · topic `HighDim`
Closure: 2 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 4: subgaussian_linf_tail, subgaussian_even_moment_le, subgaussian_exp_sq_le_at_one_third, …)_
★ `lasso_noise_condition` — theorem · `Statlib/HighDim/Concentration/SubGaussianMax.lean:637` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ subgaussian_meas_abs_ge_le_two_exp"]
  n1["★ lasso_noise_condition"]
  n1 --> n0
  class n1 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
