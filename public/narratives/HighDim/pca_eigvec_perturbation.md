# Proof narrative — pca_eigvec_perturbation

Root: **pca_eigvec_perturbation** (theorem) `Statlib/HighDim/SpectralPerturbation/PCA.lean:32` · topic `HighDim`
Closure: 69 declarations across 11 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 122: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, coord_mul_integral_eq_zero_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 111: cov_diagonal_concentration, cov_quadratic_deviation, cov_quadratic_deviation_uniform_const, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 173: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, …)_
  ◆ `sampleSecondMoment` — noncomputable def · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:199`  _(also used by 51: finite_l1_quadratic_rademacher_sample_envelope_entrywise_good_bound, sample_covariance_entry_centered_representation, sample_covariance_entry_bad_event_eq_centered_product_event, …)_
      · `covariance_isSymm_of_hasCovariance` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:237`
  · `sampleSecondMoment_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:223`  _(also used by 1: subgaussian_rip_tail)_
  · `real_isHermitian_of_isSymm` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:187`  _(also used by 1: subgaussian_rip_tail)_
      ◆ `toEuclidean` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:109`  _(also used by 15: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, euclidean_norm_toEuclidean_le_l1Norm, …)_
          · `hermitian_norm_eq_diagonal_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:42`
          · `pi_real_norm_eq_sup_abs` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:62`
        · `hermitian_norm_eq_sup_abs_eigenvalues` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:72`
      · `hermitian_norm_le_two_net_sup` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:81`  _(also used by 1: subgaussian_rip_tail)_
        · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 17: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
        · `matrix_quadratic_eq_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:342`  _(also used by 4: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, restricted_sample_deviation_quadratic, …)_
        · `projection_sq_integral_eq_cov_quadratic` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:274`  _(also used by 2: coordinate_product_tail_from_fixed_direction_quadratic_deviation, subgaussian_rip_tail_anisotropic)_
          · `fin_sum_comm_three` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:354`
        · `sampleSecondMoment_quadratic_eq_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:364`  _(also used by 4: sampleSecondMoment_quadratic_eq_l2NormSq_div, sampleSecondMoment_unit_direction_lower_tail_double_sum, restricted_sample_deviation_quadratic, …)_
      · `sample_covariance_quadratic_eq_centered_projection_sum` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:389`
      · `projection_measurable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:249`
      · `projection_sq_integrable` — lemma · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:323`  _(also used by 1: coordinate_product_tail_from_fixed_direction_quadratic_deviation)_
        ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 32: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
      ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
    ★ `sampleCovariance_concentration` — theorem · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:473`
  ★ `sampleCovariance_confidence` — theorem · `Statlib/HighDim/CovarianceMatrix/SampleCovariance.lean:1277`  _(also used by 2: sample_cov_min_eig_lower, sample_cov_max_eig_upper)_
      · `add_hermitian` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:582`  _(also used by 1: trace_exp_variational_formula)_
        · `matrix_eigen_iff_toEuclideanLin` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:596`  _(also used by 1: eigenvector_mem_eigenSubspaceLe)_
    · `exists_eigenvalue_eq_of_matrix_eigenvector` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:608`  _(also used by 2: wedin_sin_theta, simple_eigenvalue_index_card_eq_one)_
      ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 14: fischer_inequality, sortedEigenvalues_le_of_add_posSemidef, hermitian_trace_exp_mono_of_sub_posSemidef, …)_
          ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 12: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality, eigenvector_mem_eigenSubspaceLe, …)_
          ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
          · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:435`  _(also used by 5: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality, orthogonal_eigen_family_card_le, …)_
            · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:41`  _(also used by 3: wedin_sin_theta, sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
            · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:70`
          · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:79`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, wedin_sin_theta)_
          · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:479`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
            · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:106`
            · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:128`  _(also used by 1: wedin_sin_theta)_
          · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:148`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:830`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
            · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:201`  _(also used by 2: eigenvalues_lt_neg_singularValue_card_le, wedin_sin_theta)_
          · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:208`  _(also used by 1: eigenvector_mem_eigenSubspaceLe)_
            · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:226`
      · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:259`  _(also used by 1: col_energy_eq_off_energy)_
            · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:415`
            · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:448`  _(also used by 1: proj_coeff_zero_of_mem)_
          · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:470`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
            · `abs_rayleigh_le_l2_opNorm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:162`  _(also used by 5: abs_quadratic_le_opNorm_mul_norm_sq, sortedEigenvalues_zero_le_rayleigh, rayleigh_le_sortedEigenvalues_last, …)_
          · `inner_self_op_le_l2_opNorm_mul_norm_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:187`
            · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:514`
            · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:492`
          · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:563`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
        · `weyl_sorted_upper` — lemma · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:112`
      ★ `weyl_sorted` — theorem · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:176`  _(also used by 1: wedin_sin_theta)_
    · `exists_perturbed_unit_eigenvector_near` — lemma · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:197`
    · `eigenvectorBasis_mem_simple_line` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:631`
    · `abs_scalar_eq_one_of_smul_unit` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:643`
        · `toEuclideanLin_sub_smul_eq_sum_eigen_sub` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:302`
        · `orthonormalBasis_norm_sq_sum_smul` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:282`
      · `norm_sq_toEuclideanLin_sub_smul_eq_sum` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:344`  _(also used by 1: off_target_pred_mul_gap_sq_le_residual_sq)_
      · `sub_le_abs_sub_of_gap_near` — lemma · `Statlib/StatFoundation/BasicAnalysis/sub_le_abs_sub_of_gap_near.lean:8`  _(also used by 1: off_target_pred_mul_gap_sq_le_residual_sq)_
    · `off_target_energy_mul_gap_sq_le_residual_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:374`  _(also used by 1: wedin_sin_theta)_
    · `residual_norm_le_l2_opNorm_of_add_eigenvector` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:354`
        · `simple_eigenvalue_index_subsingleton` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:651`  _(also used by 1: simple_eigenvalue_index_card_eq_one)_
      · `target_energy_eq_single_coeff_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:707`
    · `off_target_energy_eq_one_sub_single_coeff_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:738`
    · `abs_inner_eq_abs_basis_coeff_of_basis_smul` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:770`
    · `exists_sign_smul_sub_norm_le_of_inner_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:784`
  ★ `davis_kahan_eigvec` — theorem · `Statlib/HighDim/SpectralPerturbation/DavisKahan.lean:29`
★ `pca_eigvec_perturbation` — theorem · `Statlib/HighDim/SpectralPerturbation/PCA.lean:32` **← headline**

> Closure has 69 declarations — diagram omitted (cap 60).
