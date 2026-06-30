# Proof narrative — johnson_lindenstrauss

Root: **johnson_lindenstrauss** (theorem) `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:702` · topic `HighDim`
Closure: 16 declarations across 11 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 31: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 12: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ★ `subgaussian_exp_sq_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le.lean:22`
      ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 28: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
          ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_scaled_exp_integrable, coord_sq_centered_subexponential_exists, …)_
        · `scalar_sq_centered_exp_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_exp_integrable.lean:12`
          · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
          · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
          ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
        ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: coord_sq_centered_mgf_bound_explicit, subexp_mgf_le_of_sq_subgaussian)_
      · `scalar_sq_centered_subexponential_explicit` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_subexponential_explicit.lean:16`  _(also used by 3: sampleCovariance_concentration, subgaussian_rip_tail, subgaussian_prod_subexponential)_
      ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
    ★ `jl_single_pair` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:47`
  ★ `jl_distortion_probabilistic` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:502`
★ `johnson_lindenstrauss` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:702` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["· euclidean_norm_sq"]
  n2["★ subgaussian_exp_sq_le"]
  n3["▣ HasSubexponentialMGF"]
  n4["★ subgaussian_meas_abs_ge_le_two_exp"]
  n5["★ subgaussian_integrable_exp_sq_at_one_third"]
  n6["· scalar_sq_centered_exp_integrable"]
  n7["· sub_gauss_tail_abs"]
  n8["· sq_le_two_mul_exp"]
  n9["★ subgaussian_exp_sq_le_at_one_third"]
  n10["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n11["· scalar_sq_centered_subexponential_explicit"]
  n12["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n13["★ jl_single_pair"]
  n14["★ jl_distortion_probabilistic"]
  n15["★ johnson_lindenstrauss"]
  n1 --> n0
  n5 --> n4
  n6 --> n5
  n9 --> n4
  n10 --> n7
  n10 --> n8
  n10 --> n9
  n10 --> n5
  n11 --> n3
  n11 --> n6
  n11 --> n10
  n12 --> n3
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n3
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n13
  n15 --> n0
  n15 --> n14
  class n15 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
