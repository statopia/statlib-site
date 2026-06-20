# Proof narrative — subexp_mgf_le_of_sq_subgaussian

Root: **subexp_mgf_le_of_sq_subgaussian** (theorem) `Statlib/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72` · topic `SubExponential`
Closure: 6 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `sub_gauss_tail_abs` — lemma · `Statlib/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
  · `sq_le_two_mul_exp` — lemma · `Statlib/SubGaussian/sq_le_two_mul_exp.lean:10`
    ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:7`  _(also used by 1: subgaussian_even_moment_le)_
  ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
  ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:166`
★ `subexp_mgf_le_of_sq_subgaussian` — theorem · `Statlib/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· sub_gauss_tail_abs"]
  n1["· sq_le_two_mul_exp"]
  n2["★ subgaussian_meas_abs_ge_le_two_exp"]
  n3["★ subgaussian_exp_sq_le_at_one_third"]
  n4["★ subgaussian_integrable_exp_sq_at_one_third"]
  n5["★ subexp_mgf_le_of_sq_subgaussian"]
  n3 --> n2
  n4 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
