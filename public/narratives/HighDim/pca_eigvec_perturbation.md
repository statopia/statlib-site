# Proof narrative — pca_eigvec_perturbation

Root: **pca_eigvec_perturbation** (theorem) `Statlib/HighDim/SpectralPerturbation/PCA.lean:31` · topic `HighDim`
Closure: 77 declarations across 17 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 36: coord_mul_integral_eq_zero_of_indep, offDiagQuadForm_integral_eq_zero_of_indep, offDiagQuadForm_centered_eq_self_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 14: cov_diagonal_concentration, cov_quadratic_deviation, cov_trace_concentration, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 77: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
  ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:193`  _(also used by 5: sample_cov_min_eig_lower, sample_cov_max_eig_upper, sampleSecondMoment_unbiased, …)_
      · `covariance_isSymm_of_hasCovariance` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:213`
  · `sampleSecondMoment_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 1: subgaussian_rip_tail)_
  · `real_isHermitian_of_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:181`  _(also used by 1: subgaussian_rip_tail)_
      ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:41`  _(also used by 3: restricted_sample_deviation_quadratic, abs_quadratic_le_opNorm_mul_norm_sq, subgaussian_rip_tail)_
          · `hermitian_norm_eq_diagonal_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:41`
          · `pi_real_norm_eq_sup_abs` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:61`
        · `hermitian_norm_eq_sup_abs_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:71`
      · `hermitian_norm_le_two_net_sup` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:80`  _(also used by 1: subgaussian_rip_tail)_
        · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 10: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
        · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:318`  _(also used by 1: restricted_sample_deviation_quadratic)_
        · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:250`
          · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:330`
        · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:340`  _(also used by 1: restricted_sample_deviation_quadratic)_
      · `sample_covariance_quadratic_eq_centered_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:365`
      · `projection_measurable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:225`
      · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:299`
        ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 29: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 3: subgaussian_linf_tail, lasso_noise_condition, subgaussian_even_moment_le)_
          ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_scaled_exp_integrable, coord_sq_centered_subexponential_exists, …)_
        · `scalar_sq_centered_exp_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_exp_integrable.lean:12`
          · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
          · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`
          ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
        ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:72`  _(also used by 2: coord_sq_centered_mgf_bound_explicit, subexp_mgf_le_of_sq_subgaussian)_
      · `scalar_sq_centered_subexponential_explicit` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/scalar_sq_centered_subexponential_explicit.lean:16`  _(also used by 3: jl_single_pair, subgaussian_rip_tail, subgaussian_prod_subexponential)_
      ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
    ★ `sampleCovariance_concentration` — theorem · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:445`
  ★ `sampleCovariance_confidence` — theorem · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:1230`  _(also used by 2: sample_cov_min_eig_lower, sample_cov_max_eig_upper)_
      · `add_hermitian` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:581`
        · `matrix_eigen_iff_toEuclideanLin` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:595`
    · `exists_eigenvalue_eq_of_matrix_eigenvector` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:607`  _(also used by 1: simple_eigenvalue_index_card_eq_one)_
      ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 10: sortedEigenvalues_le_of_add_posSemidef, hermitian_trace_exp_mono_of_sub_posSemidef, davis_kahan_subspace, …)_
          ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:434`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
            · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:40`  _(also used by 2: sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
            · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:69`
          · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:78`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:478`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
            · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:105`
            · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:127`
          · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:147`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:829`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
            · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:200`
          · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:207`
            · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:225`
      · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:258`
            · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:414`
            · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:447`
          · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:469`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
            · `abs_rayleigh_le_l2_opNorm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:161`  _(also used by 5: abs_quadratic_le_opNorm_mul_norm_sq, sortedEigenvalues_zero_le_rayleigh, rayleigh_le_sortedEigenvalues_last, …)_
          · `inner_self_op_le_l2_opNorm_mul_norm_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:186`
            · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:513`
            · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:491`
          · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:562`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
        · `weyl_sorted_upper` — lemma · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:111`
      ★ `weyl_sorted` — theorem · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:175`
    · `exists_perturbed_unit_eigenvector_near` — lemma · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:196`
    · `eigenvectorBasis_mem_simple_line` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:630`
    · `abs_scalar_eq_one_of_smul_unit` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:642`
        · `toEuclideanLin_sub_smul_eq_sum_eigen_sub` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:301`
        · `orthonormalBasis_norm_sq_sum_smul` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:281`
      · `norm_sq_toEuclideanLin_sub_smul_eq_sum` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:343`
      · `sub_le_abs_sub_of_gap_near` — lemma · `Statlib/StatFoundation/BasicAnalysis/sub_le_abs_sub_of_gap_near.lean:8`
    · `off_target_energy_mul_gap_sq_le_residual_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:373`
    · `residual_norm_le_l2_opNorm_of_add_eigenvector` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:353`
        · `simple_eigenvalue_index_subsingleton` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:650`  _(also used by 1: simple_eigenvalue_index_card_eq_one)_
      · `target_energy_eq_single_coeff_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:706`
    · `off_target_energy_eq_one_sub_single_coeff_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:737`
    · `abs_inner_eq_abs_basis_coeff_of_basis_smul` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:769`
    · `exists_sign_smul_sub_norm_le_of_inner_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:783`
  ★ `davis_kahan_eigvec` — theorem · `Statlib/HighDim/SpectralPerturbation/DavisKahan.lean:28`
★ `pca_eigvec_perturbation` — theorem · `Statlib/HighDim/SpectralPerturbation/PCA.lean:31` **← headline**

> Closure has 77 declarations — diagram omitted (cap 60).
