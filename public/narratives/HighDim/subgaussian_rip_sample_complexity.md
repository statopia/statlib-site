# Proof narrative — subgaussian_rip_sample_complexity

Root: **subgaussian_rip_sample_complexity** (theorem) `Statlib/HighDim/Geometry/RIPConstruction.lean:1595` · topic `HighDim`
Closure: 51 declarations across 19 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 19: cov_diagonal_concentration, cov_quadratic_deviation, cov_trace_concentration, …)_
  ◆ `IsIsotropic` — def · `Statlib/HighDim/Vocabulary/RandomVector.lean:109`  _(also used by 6: quadratic_form_mean_isotropic, hanson_wright_isotropic, subgaussian_norm_sq_subexponential, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 78: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
    ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 11: log_covering_number_sparse, isSparse_mono, isSparse_neg, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 27: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ◆ `SatisfiesRIP` — def · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:62`  _(also used by 4: rip_cross_term_abs_le_half_delta_sum, rip_lower_restrictTo, rip_upper_restrictTo, …)_
    · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 9: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
    · `cosh_ge_one_add_half_sq` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_fourth_moment_le.lean:8`  _(also used by 1: cosh_ge_one_add_half_sq_add_quart)_
    ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 1: subgaussian_projection_second_moment_le)_
    · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 10: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
    ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 28: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
          ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
        ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_scaled_exp_integrable, coord_sq_centered_subexponential_exists, …)_
      · `scalar_sq_centered_exp_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_exp_integrable.lean:12`
        · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
        · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
        ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
      ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: coord_sq_centered_mgf_bound_explicit, subexp_mgf_le_of_sq_subgaussian)_
    · `scalar_sq_centered_subexponential_explicit` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_subexponential_explicit.lean:16`  _(also used by 3: sampleCovariance_concentration, jl_single_pair, subgaussian_prod_subexponential)_
    ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
      ★ `covering_number_euclidean_ball` — theorem · `Statlib/HighDim/Geometry/CoveringNumbers.lean:42`
      · `euclidean_norm_eq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:27`  _(also used by 1: log_covering_number_sparse)_
    ★ `covering_number_sparse_ball` — theorem · `Statlib/HighDim/Geometry/CoveringNumbers.lean:405`
    · `mulVec_smul_vec` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:195`
    · `l2NormSq_smul` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:187`
    ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:193`  _(also used by 7: sample_cov_min_eig_lower, sample_cov_max_eig_upper, sample_covariance_quadratic_eq_centered_projection_sum, …)_
    ◆ `restrictByEquiv` — def · `Statlib/HighDim/Vocabulary/Restrictions.lean:15`  _(also used by 4: measurable_restrictByEquiv, restrictByEquiv_hasMean_zero, restrictByEquiv_cov_identity, …)_
    ◆ `extendByEquiv` — def · `Statlib/HighDim/Vocabulary/Restrictions.lean:20`  _(also used by 1: restrictByEquiv_subgaussian)_
        · `extendByEquiv_l2NormSq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:346`
    · `extendByEquiv_norm` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:376`  _(also used by 1: restrictByEquiv_subgaussian)_
    · `extendByEquiv_restrictByEquiv_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:381`
    · `restrictByEquiv_norm_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:398`
    · `restrictByEquiv_dist_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:406`
    · `restrictByEquiv_extendByEquiv` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:391`
    · `sampleSecondMoment_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 2: sampleCovariance_concentration, pca_eigvec_perturbation)_
    · `real_isHermitian_of_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:181`  _(also used by 2: sampleCovariance_concentration, pca_eigvec_perturbation)_
    ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:41`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, sampleCovariance_concentration)_
        · `hermitian_norm_eq_diagonal_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:41`
        · `pi_real_norm_eq_sup_abs` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:61`
      · `hermitian_norm_eq_sup_abs_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:71`
    · `hermitian_norm_le_two_net_sup` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:80`  _(also used by 1: sampleCovariance_concentration)_
      · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:318`  _(also used by 1: sample_covariance_quadratic_eq_centered_projection_sum)_
        · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:330`
      · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:340`  _(also used by 1: sample_covariance_quadratic_eq_centered_projection_sum)_
      · `restrictByEquiv_inner_eq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:420`  _(also used by 1: restrictByEquiv_subgaussian)_
    · `restricted_sample_deviation_quadratic` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:468`
    · `exists_support_card_eq_of_isSparse` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:98`
      · `abs_rayleigh_le_l2_opNorm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:161`  _(also used by 5: inner_self_op_le_l2_opNorm_mul_norm_sq, sortedEigenvalues_zero_le_rayleigh, rayleigh_le_sortedEigenvalues_last, …)_
    · `abs_quadratic_le_opNorm_mul_norm_sq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:527`
  ★ `subgaussian_rip_tail` — theorem · `Statlib/HighDim/Geometry/RIPConstruction.lean:560`
★ `subgaussian_rip_sample_complexity` — theorem · `Statlib/HighDim/Geometry/RIPConstruction.lean:1595` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasCovarianceMatrix"]
  n1["◆ IsIsotropic"]
  n2["▣ IsSubGaussianVector"]
  n3["◆ IsSparse"]
  n4["◆ l2NormSq"]
  n5["◆ SatisfiesRIP"]
  n6["· inner_eq_sum"]
  n7["· cosh_ge_one_add_half_sq"]
  n8["★ subgaussian_variance_le"]
  n9["· euclidean_norm_sq"]
  n10["▣ HasSubexponentialMGF"]
  n11["★ subgaussian_meas_abs_ge_le_two_exp"]
  n12["★ subgaussian_integrable_exp_sq_at_one_third"]
  n13["· scalar_sq_centered_exp_integrable"]
  n14["· sub_gauss_tail_abs"]
  n15["· sq_le_two_mul_exp"]
  n16["★ subgaussian_exp_sq_le_at_one_third"]
  n17["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n18["· scalar_sq_centered_subexponential_explicit"]
  n19["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n20["★ covering_number_euclidean_ball"]
  n21["· euclidean_norm_eq"]
  n22["★ covering_number_sparse_ball"]
  n23["· mulVec_smul_vec"]
  n24["· l2NormSq_smul"]
  n25["◆ sampleSecondMoment"]
  n26["◆ restrictByEquiv"]
  n27["◆ extendByEquiv"]
  n28["· extendByEquiv_l2NormSq"]
  n29["· extendByEquiv_norm"]
  n30["· extendByEquiv_restrictByEquiv_of_support"]
  n31["· restrictByEquiv_norm_of_support"]
  n32["· restrictByEquiv_dist_of_support"]
  n33["· restrictByEquiv_extendByEquiv"]
  n34["· sampleSecondMoment_isSymm"]
  n35["· real_isHermitian_of_isSymm"]
  n36["◆ toEuclidean"]
  n37["· hermitian_norm_eq_diagonal_eigenvalues"]
  n38["· pi_real_norm_eq_sup_abs"]
  n39["· hermitian_norm_eq_sup_abs_eigenvalues"]
  n40["· hermitian_norm_le_two_net_sup"]
  n41["· matrix_quadratic_eq_sum"]
  n42["· fin_sum_comm_three"]
  n43["· sampleSecondMoment_quadratic_eq_projection_sum"]
  n44["· restrictByEquiv_inner_eq"]
  n45["· restricted_sample_deviation_quadratic"]
  n46["· exists_support_card_eq_of_isSparse"]
  n47["· abs_rayleigh_le_l2_opNorm"]
  n48["· abs_quadratic_le_opNorm_mul_norm_sq"]
  n49["★ subgaussian_rip_tail"]
  n50["★ subgaussian_rip_sample_complexity"]
  n1 --> n0
  n5 --> n3
  n5 --> n4
  n9 --> n4
  n12 --> n11
  n13 --> n12
  n16 --> n11
  n17 --> n14
  n17 --> n15
  n17 --> n16
  n17 --> n12
  n18 --> n10
  n18 --> n13
  n18 --> n17
  n19 --> n10
  n21 --> n4
  n21 --> n9
  n22 --> n3
  n22 --> n20
  n22 --> n4
  n22 --> n21
  n24 --> n4
  n28 --> n4
  n28 --> n27
  n29 --> n27
  n29 --> n21
  n29 --> n28
  n30 --> n27
  n30 --> n26
  n31 --> n26
  n31 --> n29
  n31 --> n30
  n32 --> n26
  n32 --> n31
  n33 --> n26
  n33 --> n27
  n34 --> n25
  n39 --> n37
  n39 --> n38
  n40 --> n36
  n40 --> n39
  n41 --> n36
  n41 --> n6
  n43 --> n36
  n43 --> n25
  n43 --> n41
  n43 --> n42
  n43 --> n6
  n44 --> n26
  n44 --> n27
  n44 --> n6
  n45 --> n26
  n45 --> n36
  n45 --> n25
  n45 --> n4
  n45 --> n27
  n45 --> n41
  n45 --> n9
  n45 --> n43
  n45 --> n44
  n45 --> n6
  n46 --> n3
  n48 --> n36
  n48 --> n47
  n49 --> n1
  n49 --> n2
  n49 --> n5
  n49 --> n4
  n49 --> n0
  n49 --> n6
  n49 --> n7
  n49 --> n8
  n49 --> n9
  n49 --> n10
  n49 --> n18
  n49 --> n19
  n49 --> n22
  n49 --> n23
  n49 --> n24
  n49 --> n25
  n49 --> n26
  n49 --> n31
  n49 --> n27
  n49 --> n29
  n49 --> n32
  n49 --> n33
  n49 --> n34
  n49 --> n35
  n49 --> n40
  n49 --> n36
  n49 --> n30
  n49 --> n45
  n49 --> n46
  n49 --> n48
  n50 --> n1
  n50 --> n2
  n50 --> n5
  n50 --> n49
  class n50 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
