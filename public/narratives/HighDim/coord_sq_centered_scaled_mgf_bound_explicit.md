# Proof narrative — coord_sq_centered_scaled_mgf_bound_explicit

Root: **coord_sq_centered_scaled_mgf_bound_explicit** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:2057` · topic `HighDim`
Closure: 11 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 74: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
      · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_norm_sq_mean_le_dim, …)_
    · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1389`  _(also used by 17: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, coord_sq_centered_scaled_exp_integrable, …)_
      · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
      · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
        ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
      ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
      ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 3: coord_mul_subexponential_exists_of_indep, coord_sq_centered_scaled_exp_integrable, coord_sq_centered_subexponential_exists)_
    ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
  · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2038`  _(also used by 1: coord_sq_centered_scaled_subexponential_explicit_of_range)_
· `coord_sq_centered_scaled_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2057` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsSubGaussianVector"]
  n1["· inner_eq_sum"]
  n2["· subgaussian_vector_coord"]
  n3["· sub_gauss_tail_abs"]
  n4["· sq_le_two_mul_exp"]
  n5["★ subgaussian_meas_abs_ge_le_two_exp"]
  n6["★ subgaussian_exp_sq_le_at_one_third"]
  n7["★ subgaussian_integrable_exp_sq_at_one_third"]
  n8["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n9["· coord_sq_centered_mgf_bound_explicit"]
  n10["· coord_sq_centered_scaled_mgf_bound_explicit"]
  n2 --> n0
  n2 --> n1
  n6 --> n5
  n7 --> n5
  n8 --> n3
  n8 --> n4
  n8 --> n6
  n8 --> n7
  n9 --> n0
  n9 --> n2
  n9 --> n8
  n10 --> n0
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
