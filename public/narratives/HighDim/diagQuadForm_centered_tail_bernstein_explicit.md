# Proof narrative — diagQuadForm_centered_tail_bernstein_explicit

Root: **diagQuadForm_centered_tail_bernstein_explicit** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:2332` · topic `HighDim`
Closure: 18 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 71: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
  ◆ `diagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:21`  _(also used by 8: quadForm_eq_diag_add_offdiag, diagQuadForm_zeroDiagMatrix, quadForm_centered_eq_diag_offdiag_centered, …)_
    · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_norm_sq_mean_le_dim, …)_
  · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1389`  _(also used by 14: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, subgaussian_norm_sq_integrable, …)_
    ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 22: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul, subexponential_mgf_const_mul_relaxed, …)_
          ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
        ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 2: coord_mul_subexponential_exists_of_indep, coord_sq_centered_subexponential_exists)_
      · `coord_sq_centered_scaled_exp_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2101`
          · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
          · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
          ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
        ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
      · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2038`  _(also used by 1: coord_sq_centered_scaled_mgf_bound_explicit)_
    · `coord_sq_centered_scaled_subexponential_explicit_of_range` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2182`  _(also used by 2: diag_hanson_wright_tail_high, subgaussian_norm_sq_subexponential)_
    ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 4: diag_hanson_wright_tail_high, sampleCovariance_concentration, jl_single_pair, …)_
  · `weighted_coord_sq_centered_sum_tail_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2238`  _(also used by 1: subgaussian_norm_sq_tail_bernstein_explicit)_
  · `diagQuadForm_centered_eq_sum` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:360`  _(also used by 1: diag_hanson_wright_tail_high)_
· `diagQuadForm_centered_tail_bernstein_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2332` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsSubGaussianVector"]
  n1["◆ diagQuadForm"]
  n2["· inner_eq_sum"]
  n3["· subgaussian_vector_coord"]
  n4["▣ HasSubexponentialMGF"]
  n5["★ subgaussian_meas_abs_ge_le_two_exp"]
  n6["★ subgaussian_integrable_exp_sq_at_one_third"]
  n7["· coord_sq_centered_scaled_exp_integrable"]
  n8["· sub_gauss_tail_abs"]
  n9["· sq_le_two_mul_exp"]
  n10["★ subgaussian_exp_sq_le_at_one_third"]
  n11["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n12["· coord_sq_centered_mgf_bound_explicit"]
  n13["· coord_sq_centered_scaled_subexponential_explicit_of_range"]
  n14["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n15["· weighted_coord_sq_centered_sum_tail_explicit"]
  n16["· diagQuadForm_centered_eq_sum"]
  n17["· diagQuadForm_centered_tail_bernstein_explicit"]
  n3 --> n0
  n3 --> n2
  n6 --> n5
  n7 --> n0
  n7 --> n3
  n7 --> n6
  n10 --> n5
  n11 --> n8
  n11 --> n9
  n11 --> n10
  n11 --> n6
  n12 --> n0
  n12 --> n3
  n12 --> n11
  n13 --> n0
  n13 --> n4
  n13 --> n7
  n13 --> n12
  n14 --> n4
  n15 --> n0
  n15 --> n4
  n15 --> n13
  n15 --> n3
  n15 --> n14
  n16 --> n1
  n17 --> n0
  n17 --> n1
  n17 --> n3
  n17 --> n15
  n17 --> n16
  class n17 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
