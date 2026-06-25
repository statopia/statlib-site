# Proof narrative — isotropic_norm_concentration

Root: **isotropic_norm_concentration** (lemma) `Statlib/HighDim/CovarianceMatrix/Properties.lean:653` · topic `HighDim`
Closure: 21 declarations across 11 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 56: coord_mul_integral_eq_zero_of_indep, offDiagQuadForm_integral_eq_zero_of_indep, offDiagQuadForm_centered_eq_self_of_indep, …)_
    ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 18: cov_quadratic_deviation, secondMoment_isSymm, secondMoment_posSemidef, …)_
  ◆ `IsIsotropic` — def · `Statlib/HighDim/Vocabulary/RandomVector.lean:109`  _(also used by 5: quadratic_form_mean_isotropic, hanson_wright_isotropic, restrictByEquiv_cov_identity, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 71: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
    ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 22: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul, subexponential_mgf_const_mul_relaxed, …)_
          · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_norm_sq_mean_le_dim, …)_
        · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1389`  _(also used by 16: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, weighted_coord_sq_centered_sum_tail_explicit, …)_
          ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
        ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:166`  _(also used by 2: coord_mul_subexponential_exists_of_indep, coord_sq_centered_subexponential_exists)_
      · `coord_sq_centered_scaled_exp_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2109`
          · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
          · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
          ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
        ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
      · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2044`  _(also used by 1: coord_sq_centered_scaled_mgf_bound_explicit)_
    · `coord_sq_centered_scaled_subexponential_explicit_of_range` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2192`  _(also used by 2: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high)_
    ★ `subexp_sum_mgf_le_of_indep` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/subexp_sum_mgf_le_of_indep.lean:11`
  · `subgaussian_norm_sq_subexponential` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:458`
  · `isotropic_mean_sq_norm` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:624`
  ★ `subexp_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_meas_abs_ge_le_two_exp.lean:12`  _(also used by 1: subexp_exp_tail_of_subexp)_
· `isotropic_norm_concentration` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:653` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasMean"]
  n1["▣ HasCovarianceMatrix"]
  n2["◆ IsIsotropic"]
  n3["▣ IsSubGaussianVector"]
  n4["▣ HasSubexponentialMGF"]
  n5["· inner_eq_sum"]
  n6["· subgaussian_vector_coord"]
  n7["★ subgaussian_meas_abs_ge_le_two_exp"]
  n8["★ subgaussian_integrable_exp_sq_at_one_third"]
  n9["· coord_sq_centered_scaled_exp_integrable"]
  n10["· sub_gauss_tail_abs"]
  n11["· sq_le_two_mul_exp"]
  n12["★ subgaussian_exp_sq_le_at_one_third"]
  n13["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n14["· coord_sq_centered_mgf_bound_explicit"]
  n15["· coord_sq_centered_scaled_subexponential_explicit_of_range"]
  n16["★ subexp_sum_mgf_le_of_indep"]
  n17["· subgaussian_norm_sq_subexponential"]
  n18["· isotropic_mean_sq_norm"]
  n19["★ subexp_meas_abs_ge_le_two_exp"]
  n20["· isotropic_norm_concentration"]
  n2 --> n1
  n6 --> n3
  n6 --> n5
  n8 --> n7
  n9 --> n0
  n9 --> n3
  n9 --> n6
  n9 --> n8
  n12 --> n7
  n13 --> n10
  n13 --> n11
  n13 --> n12
  n13 --> n8
  n14 --> n0
  n14 --> n3
  n14 --> n6
  n14 --> n13
  n15 --> n0
  n15 --> n3
  n15 --> n4
  n15 --> n9
  n15 --> n14
  n16 --> n4
  n17 --> n0
  n17 --> n2
  n17 --> n3
  n17 --> n15
  n17 --> n16
  n18 --> n2
  n19 --> n4
  n20 --> n0
  n20 --> n2
  n20 --> n3
  n20 --> n17
  n20 --> n18
  n20 --> n19
  class n20 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
