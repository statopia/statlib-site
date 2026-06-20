# Proof narrative — charfun_close_of_l2

Root: **charfun_close_of_l2** (lemma) `Statlib/Variance/charfun_close_of_l2.lean:38` · topic `Variance`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `integrable_cexp_mul_I_of_prob` — lemma · `Statlib/Variance/integrable_cexp_mul_I_of_prob.lean:33`  _(also used by 1: charfun_close_per_step)_
  · `norm_cexp_sub_cexp_le_abs` — lemma · `Statlib/Variance/norm_cexp_sub_cexp_le_abs.lean:42`  _(also used by 1: charfun_close_per_step)_
  · `integral_abs_le_sqrt_integral_sq_of_prob` — lemma · `Statlib/Variance/integral_abs_le_sqrt_integral_sq_of_prob.lean:33`  _(also used by 1: charfun_close_per_step)_
· `charfun_close_of_l2` — lemma · `Statlib/Variance/charfun_close_of_l2.lean:38` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· integrable_cexp_mul_I_of_prob"]
  n1["· norm_cexp_sub_cexp_le_abs"]
  n2["· integral_abs_le_sqrt_integral_sq_of_prob"]
  n3["· charfun_close_of_l2"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
