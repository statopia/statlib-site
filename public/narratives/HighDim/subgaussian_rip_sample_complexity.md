# Proof narrative — subgaussian_rip_sample_complexity

Root: **subgaussian_rip_sample_complexity** (theorem) `Statlib/HighDim/Geometry/RIPConstruction.lean:1626` · topic `HighDim`
Closure: 43 declarations across 13 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 20: cov_diagonal_concentration, cov_quadratic_deviation, cov_trace_concentration, …)_
  ◆ `IsIsotropic` — def · `Statlib/HighDim/Vocabulary/RandomVector.lean:109`  _(also used by 6: quadratic_form_mean_isotropic, hanson_wright_isotropic, subgaussian_norm_sq_subexponential, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 77: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
    ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 12: log_covering_number_sparse, isSparse_mono, isSparse_neg, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 49: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ◆ `SatisfiesRIP` — def · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:241`  _(also used by 4: rip_cross_term_abs_le_half_delta_sum, rip_lower_restrictTo, rip_upper_restrictTo, …)_
    · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 11: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
    · `cosh_ge_one_add_half_sq` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_fourth_moment_le.lean:8`  _(also used by 1: cosh_ge_one_add_half_sq_add_quart)_
    ★ `subgaussian_variance_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_variance_le.lean:8`  _(also used by 1: subgaussian_projection_second_moment_le)_
    · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 12: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
    ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
    ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
      ★ `covering_number_euclidean_ball` — theorem · `Statlib/HighDim/Geometry/CoveringNumbers.lean:42`  _(also used by 1: operator_norm_subgaussian_matrix)_
      · `euclidean_norm_eq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:27`  _(also used by 1: log_covering_number_sparse)_
    ★ `covering_number_sparse_ball` — theorem · `Statlib/HighDim/Geometry/CoveringNumbers.lean:477`  _(also used by 1: subgaussian_rip_tail_anisotropic)_
    · `mulVec_smul_vec` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:198`
    · `l2NormSq_smul` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:190`
    ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 13: sample_cov_min_eig_lower, sample_cov_max_eig_upper, sample_covariance_quadratic_eq_centered_projection_sum, …)_
    ◆ `restrictByEquiv` — def · `Statlib/HighDim/Vocabulary/Restrictions.lean:15`  _(also used by 4: measurable_restrictByEquiv, restrictByEquiv_hasMean_zero, restrictByEquiv_cov_identity, …)_
    ◆ `extendByEquiv` — def · `Statlib/HighDim/Vocabulary/Restrictions.lean:20`  _(also used by 1: restrictByEquiv_subgaussian)_
        · `extendByEquiv_l2NormSq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:349`
    · `extendByEquiv_norm` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:379`  _(also used by 1: restrictByEquiv_subgaussian)_
    · `extendByEquiv_restrictByEquiv_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:384`
    · `restrictByEquiv_norm_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:401`
    · `restrictByEquiv_dist_of_support` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:409`
    · `restrictByEquiv_extendByEquiv` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:394`
    · `sampleSecondMoment_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:205`  _(also used by 2: sampleCovariance_concentration, pca_eigvec_perturbation)_
    · `real_isHermitian_of_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:187`  _(also used by 2: sampleCovariance_concentration, pca_eigvec_perturbation)_
    ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:41`  _(also used by 4: sample_covariance_quadratic_eq_centered_projection_sum, sampleCovariance_concentration, subgaussian_rip_tail_anisotropic, …)_
        · `hermitian_norm_eq_diagonal_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:42`
        · `pi_real_norm_eq_sup_abs` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:62`
      · `hermitian_norm_eq_sup_abs_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:72`
    · `hermitian_norm_le_two_net_sup` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:81`  _(also used by 1: sampleCovariance_concentration)_
      · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:324`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, design_l2NormSq_div_eq_sampleSecondMoment_quadratic)_
        · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:336`
      · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:346`  _(also used by 2: sample_covariance_quadratic_eq_centered_projection_sum, design_l2NormSq_div_eq_sampleSecondMoment_quadratic)_
      · `restrictByEquiv_inner_eq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:423`  _(also used by 1: restrictByEquiv_subgaussian)_
    · `restricted_sample_deviation_quadratic` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:471`
    · `exists_support_card_eq_of_isSparse` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:101`
      · `abs_rayleigh_le_l2_opNorm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:162`  _(also used by 5: inner_self_op_le_l2_opNorm_mul_norm_sq, sortedEigenvalues_zero_le_rayleigh, rayleigh_le_sortedEigenvalues_last, …)_
    · `abs_quadratic_le_opNorm_mul_norm_sq` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:530`
  ★ `subgaussian_rip_tail` — theorem · `Statlib/HighDim/Geometry/RIPConstruction.lean:564`
★ `subgaussian_rip_sample_complexity` — theorem · `Statlib/HighDim/Geometry/RIPConstruction.lean:1626` **← headline**

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
  n11["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n12["★ covering_number_euclidean_ball"]
  n13["· euclidean_norm_eq"]
  n14["★ covering_number_sparse_ball"]
  n15["· mulVec_smul_vec"]
  n16["· l2NormSq_smul"]
  n17["◆ sampleSecondMoment"]
  n18["◆ restrictByEquiv"]
  n19["◆ extendByEquiv"]
  n20["· extendByEquiv_l2NormSq"]
  n21["· extendByEquiv_norm"]
  n22["· extendByEquiv_restrictByEquiv_of_support"]
  n23["· restrictByEquiv_norm_of_support"]
  n24["· restrictByEquiv_dist_of_support"]
  n25["· restrictByEquiv_extendByEquiv"]
  n26["· sampleSecondMoment_isSymm"]
  n27["· real_isHermitian_of_isSymm"]
  n28["◆ toEuclidean"]
  n29["· hermitian_norm_eq_diagonal_eigenvalues"]
  n30["· pi_real_norm_eq_sup_abs"]
  n31["· hermitian_norm_eq_sup_abs_eigenvalues"]
  n32["· hermitian_norm_le_two_net_sup"]
  n33["· matrix_quadratic_eq_sum"]
  n34["· fin_sum_comm_three"]
  n35["· sampleSecondMoment_quadratic_eq_projection_sum"]
  n36["· restrictByEquiv_inner_eq"]
  n37["· restricted_sample_deviation_quadratic"]
  n38["· exists_support_card_eq_of_isSparse"]
  n39["· abs_rayleigh_le_l2_opNorm"]
  n40["· abs_quadratic_le_opNorm_mul_norm_sq"]
  n41["★ subgaussian_rip_tail"]
  n42["★ subgaussian_rip_sample_complexity"]
  n1 --> n0
  n5 --> n3
  n5 --> n4
  n9 --> n4
  n11 --> n10
  n13 --> n4
  n13 --> n9
  n14 --> n3
  n14 --> n12
  n14 --> n4
  n14 --> n13
  n16 --> n4
  n20 --> n4
  n20 --> n19
  n21 --> n19
  n21 --> n13
  n21 --> n20
  n22 --> n19
  n22 --> n18
  n23 --> n18
  n23 --> n21
  n23 --> n22
  n24 --> n18
  n24 --> n23
  n25 --> n18
  n25 --> n19
  n26 --> n17
  n31 --> n29
  n31 --> n30
  n32 --> n28
  n32 --> n31
  n33 --> n28
  n33 --> n6
  n35 --> n28
  n35 --> n17
  n35 --> n33
  n35 --> n34
  n35 --> n6
  n36 --> n18
  n36 --> n19
  n36 --> n6
  n37 --> n18
  n37 --> n28
  n37 --> n17
  n37 --> n4
  n37 --> n19
  n37 --> n33
  n37 --> n9
  n37 --> n35
  n37 --> n36
  n37 --> n6
  n38 --> n3
  n40 --> n28
  n40 --> n39
  n41 --> n1
  n41 --> n2
  n41 --> n5
  n41 --> n4
  n41 --> n0
  n41 --> n6
  n41 --> n7
  n41 --> n8
  n41 --> n9
  n41 --> n10
  n41 --> n11
  n41 --> n14
  n41 --> n15
  n41 --> n16
  n41 --> n17
  n41 --> n18
  n41 --> n23
  n41 --> n19
  n41 --> n21
  n41 --> n24
  n41 --> n25
  n41 --> n26
  n41 --> n27
  n41 --> n32
  n41 --> n28
  n41 --> n22
  n41 --> n37
  n41 --> n38
  n41 --> n40
  n42 --> n1
  n42 --> n2
  n42 --> n5
  n42 --> n41
  class n42 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
