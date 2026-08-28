# Proof narrative — wedin_sin_theta

Root: **wedin_sin_theta** (theorem) `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:3225` · topic `HighDim`
Closure: 130 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `SVD` — structure · `Statlib/HighDim/Vocabulary/SVD.lean:37`  _(also used by 12: sorted_svd_exists, sv_diag_singularValues, low_rank_frobenius_error_decomposition, …)_
  ◆ `singularValues` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:22`  _(also used by 12: frobenius_norm_svd_relation, sorted_svd_exists, ky_fan_singular_values_product, …)_
  ◆ `IsTopRLeftSingularSubspace` — def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:28`
  ◆ `IsTopRRightSingularSubspace` — def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:38`
  ◆ `opNorm` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/NuclearNormProperties.lean:13`  _(also used by 10: nuclearNorm_add_le, nuclearNorm_eq_iSup_opNorm_le_one, trace_dual_nuclear_op, …)_
  ◆ `frobeniusNorm` — def · `Statlib/HighDim/MatrixAnalysis/SvSoftThreshold.lean:26`  _(also used by 11: hard_sv_threshold_is_rank_constrained_minimizer, low_rank_frobenius_error_decomposition, nuclear_norm_le_sqrt_rank_mul_frobenius, …)_
  ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 11: fischer_inequality, sortedEigenvalues_le_of_add_posSemidef, hermitian_trace_exp_mono_of_sub_posSemidef, …)_
    · `matrix_eigen_iff_toEuclideanLin` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:596`
  · `exists_eigenvalue_eq_of_matrix_eigenvector` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:608`  _(also used by 3: davis_kahan_eigvec, simple_eigenvalue_index_card_eq_one, exists_perturbed_unit_eigenvector_near)_
  · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:41`  _(also used by 2: sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
    · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:106`
  · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:128`
  ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
  · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:435`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
  · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:201`
    · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:70`
  · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:79`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:105`  _(also used by 48: frobenius_norm_sq_subgaussian_concentration, gaussian_quadratic_form_concentration, diag_sq_sum_le_frobeniusNormSq, …)_
    ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 221: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:89`  _(also used by 31: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  · `singularValues_eq_vocabulary` — lemma · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:30`  _(also used by 7: ky_fan_singular_values_product, sv_diag_singularValues, low_rank_frobenius_error_decomposition, …)_
  ★ `singular_value_properties` — theorem · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:39`  _(also used by 6: ky_fan_singular_values_product, sv_diag_singularValues, low_rank_frobenius_error_decomposition, …)_
    · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:208`
      · `toEuclideanLin_sub_smul_eq_sum_eigen_sub` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:302`
      · `orthonormalBasis_norm_sq_sum_smul` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:282`
    · `norm_sq_toEuclideanLin_sub_smul_eq_sum` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:344`
    · `sub_le_abs_sub_of_gap_near` — lemma · `Statlib/StatFoundation/BasicAnalysis/sub_le_abs_sub_of_gap_near.lean:8`
  · `off_target_energy_mul_gap_sq_le_residual_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:374`  _(also used by 1: davis_kahan_eigvec)_
  · `eigenvector_mem_eigenSubspaceLe` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:47`
  · `orthogonal_eigen_family_card_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:114`
  · `eigenvalues_lt_neg_singularValue_card_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:167`
      ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
      · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:479`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
      · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:148`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
      · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:830`  _(also used by 1: sortedEigenvalues_le_of_add_posSemidef)_
          · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:226`
      · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:259`  _(also used by 1: off_target_energy_eq_one_sub_single_coeff_sq)_
        · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:415`
        · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:448`
      · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:470`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
        · `abs_rayleigh_le_l2_opNorm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:162`  _(also used by 5: abs_quadratic_le_opNorm_mul_norm_sq, sortedEigenvalues_zero_le_rayleigh, rayleigh_le_sortedEigenvalues_last, …)_
      · `inner_self_op_le_l2_opNorm_mul_norm_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:187`
        · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:514`
        · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:492`
      · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:563`  _(also used by 2: sortedEigenvalues_le_of_add_posSemidef, von_neumann_trace_inequality)_
    · `weyl_sorted_upper` — lemma · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:112`
  ★ `weyl_sorted` — theorem · `Statlib/HighDim/SpectralPerturbation/Weyl.lean:176`  _(also used by 1: exists_perturbed_unit_eigenvector_near)_
  ◆ `colOf` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:927`
    · `span_cols_le_eigenSubspaceLe` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1082`
        · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 20: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, …)_
  · `colOf_orthonormal` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1031`
    · `finrank_span_colOf_eq_card` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1062`
  · `sortedEigenvalues_perm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:47`  _(also used by 1: hermitian_trace_exp_mono_of_sub_posSemidef)_
    · `finrank_eigenSubspaceLe_eq_r` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1092`
  · `span_cols_eq_eigenSubspaceLe` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1142`
      · `toEuclideanLin_sub_id_apply` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1196`
        · `proj_self_adjoint` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1169`
          · `colOf_eq_toEuclideanLin_single` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1162`
      · `toEuclideanLin_mul` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:938`
        · `proj_fix_col` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1178`
      · `proj_orthogonal` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1211`
      · `eigenvectorBasis_mem_eigenSubspaceLe` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1251`
          · `toEuclideanLin_eq_sum_col_smul` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1005`
        · `mem_span_cols_of_mul` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1013`
      · `proj_coeff_zero_of_mem` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1070`
    · `col_energy_eq_off_energy` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1258`
    · `off_target_pred_mul_gap_sq_le_residual_sq` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:963`
      · `frobSq_eq_trace` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:766`
      · `proj_symm_sub` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:796`
      · `proj_idem` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:773`
      · `trace_proj_eq` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:822`
      · `trace_proj_cross` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:806`
    · `frobSq_proj_diff` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:879`
      · `proj_idem_sub` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:781`
      · `proj_symm_sub_one` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:800`
      · `trace_orth_comp` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:834`
    · `frobSq_orth_comp` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:851`
      · `col_norm_sq` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:932`
    · `frobSq_mul_col` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:944`
  ★ `davis_kahan_subspace_sharp` — theorem · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1308`
  · `opNorm_nonneg` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2569`  _(also used by 4: rank_constrained_denoising_frobenius_bound_s2, rank_constrained_denoising_frobenius_bound_s1K, rank_constrained_denoising_frobenius_bound_s3, …)_
  ◆ `topCols` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1555`
    ◆ `singularValue` — def · `Statlib/HighDim/Vocabulary/SVD.lean:79`  _(also used by 3: nuclearNorm_add_le, nuclearNorm_eq_iSup_opNorm_le_one, von_neumann_trace_inequality)_
    · `singularValues_antitone` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2349`
    · `sigma_gap_col` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2823`
    ◆ `tailCols` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1558`
          · `toEuclideanLin_col` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1970`
      · `svd_A_apply_Vcol` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1978`
      · `svd_At_apply_Ucol` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2017`
        · `gram_right_eigen` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2067`
      · `right_cross_orth` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2190`
    · `cross_top_transpose_tail_right` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2360`
    · `singularValues_strict_gt_tail` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2803`
        · `gram_left_eigen` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2092`
      · `left_cross_orth` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2268`
    · `cross_top_transpose_tail_left` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2525`
    · `pairing_vec` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2593`
    · `pairing_vec_transpose` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2605`
    · `topCols_orth` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1564`
      ◆ `diagBlock` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1670`
        · `svd_rank1_decomposition` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1428`
        · `sum_univ_r_plus_q` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1630`
        · `block1_entry` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1677`
        · `block2_entry` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1711`
      · `A_block_decomp` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1744`
      · `top_transpose_tail` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1607`
      · `col_isometry` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1838`
    · `tailCols_orth` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1585`
      · `diagBlock_norm_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2386`
    · `residual_vec_bound` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2436`
        · `sym_idem_contraction` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1793`
      · `col_transpose_contraction` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1869`
    · `tail_residual_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1919`
      ◆ `svd_transpose` — def · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2617`
      · `svd_transpose_singularValue` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2857`
    · `residual_vec_bound_transpose` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2943`
        · `orth_proj_symm` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2637`
        · `orth_proj_idem` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2644`
      · `orth_proj_contraction` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2666`
      · `opNorm_vec_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2551`  _(also used by 1: rank1_top_singular_vector_recovery)_
        · `opNorm_eq_l2` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2561`  _(also used by 1: rank1_top_singular_vector_recovery)_
      · `opNorm_transpose_vec_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2575`  _(also used by 1: rank1_top_singular_vector_recovery)_
      · `sin_theta_scalar` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:1524`
    · `column_alpha_bound` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2678`
  · `column_alpha_j` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2979`
  · `proj_diff_frob_le` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2891`
      · `opNorm_transpose` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2848`
    · `column_beta_bound` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:2867`
  · `column_beta_j` — lemma · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:3102`
★ `wedin_sin_theta` — theorem · `Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean:3225` **← headline**

> Closure has 130 declarations — diagram omitted (cap 60).
