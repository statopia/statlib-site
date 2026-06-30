# Proof narrative — matrix_bernstein

Root: **matrix_bernstein** (theorem) `Statlib/HighDim/Concentration/MatrixBernstein.lean:4446` · topic `HighDim`
Closure: 103 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasZeroMean` — structure · `Statlib/HighDim/Vocabulary/RandomMatrix.lean:62`  _(also used by 2: hermitianDilationFin_hasZeroMean, matrix_bernstein_rect)_
  ◆ `HasBoundedSpectralNorm` — def · `Statlib/HighDim/Vocabulary/RandomMatrix.lean:38`  _(also used by 3: integrable_transpose_mul_of_bounded, integrable_transpose_mul_of_bounded_meas, matrix_bernstein_rect)_
    ★ `hermitian_l2_opNorm_eq_sup_abs_eigenvalues` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:293`  _(also used by 1: hermitian_exp_smul_le_exp_norm_bound)_
  ★ `hermitian_l2_opNorm_lt_of_posDef_sub_add` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1040`  _(also used by 1: matrix_bernstein_rect)_
    ★ `posDef_smul_one_of_pos` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:3137`
      ★ `matrix_dotProduct_mulVec_le_l2_opNorm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1132`
    ★ `hermitian_posDef_sub_of_l2_opNorm_lt` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1154`
      ★ `integrable_mul_transpose_of_bounded` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2952`
      ★ `measurable_mul_transpose` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2932`
    ★ `integrable_mul_transpose_of_bounded_meas` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2988`  _(also used by 1: matrix_bernstein_rect)_
    ★ `matrix_entry_abs_le_l2_opNorm_rect` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1188`
    ◆ `matrixEntryCLM` — private def · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1259`
    ★ `matrix_integral_apply_of_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1269`  _(also used by 1: hermitianDilationFin_integral_mul_self_of_integrable)_
    ★ `hermitian_mul_self_diag_eq_sum_sq` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:3169`
    ★ `bernstein_bounded_sum_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_bounded_sum_meas_ge_le_exp.lean:9`
      ★ `posDef_fin_one_iff` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:3148`
    ★ `not_posDef_fin_one_sub_iff` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:3164`
      ★ `hermitian_trace_exp_eq_sum_exp_eigenvalues` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:328`
      ★ `hermitian_exp_trace_ge_exp_of_exists_eigenvalue_ge` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:358`
        ★ `hermitian_posDef_sub_of_forall_eigenvalues_lt` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:961`
      ★ `hermitian_exists_eigenvalue_ge_of_not_posDef_sub` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1024`
    ★ `hermitian_exp_trace_ge_exp_of_not_posDef_sub` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1033`
    ★ `hermitian_trace_exp_le_card_mul_exp_norm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:936`
    ★ `hermitian_trace_exp_nonneg` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:369`
    ★ `matrix_integrable_of_entry_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1276`
    ★ `matrix_integral_eq_zero_of_hasZeroMean` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1376`
    ★ `matrix_trace_integral_of_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1524`
      ★ `trace_le_of_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:809`  _(also used by 1: hermitian_trace_exp_le_quadratic_norm)_
          ★ `real_exp_le_bernstein_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:80`
        ★ `hermitian_exp_le_quadratic_norm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:818`  _(also used by 1: hermitian_trace_exp_le_quadratic_norm)_
      ★ `hermitian_exp_smul_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:892`
    ★ `hermitian_trace_exp_smul_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:926`
    ★ `single_trace_exp_integral_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2302`
        ★ `hermitian_exp_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:376`
            ★ `posSemidef_l2_opNorm_le_trace` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1225`
          ★ `matrix_integrable_of_posSemidef_trace_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1294`
        ★ `matrix_exp_integrable_of_trace_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1303`
    ★ `matrix_exp_integrable_of_bounded_hermitian` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1322`
    ★ `matrix_integral_posSemidef_of_ae` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1386`
        ★ `matrix_integral_sub_posSemidef_of_ae` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1514`
      ★ `single_exp_integral_le_quadratic_matrix_raw` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2212`
    ★ `single_exp_integral_le_quadratic_matrix` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2242`
    ★ `hermitian_one_add_self_le_exp` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:747`
    ★ `matrix_trace_le_card_mul_l2_opNorm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1213`
    ★ `matrix_laplace_trace_mgf_bound_single` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2433`
      ★ `iIndepFun_matrix_sum_indep_of_notMem` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1583`
        ★ `trace_exp_add_eq_trace_exp_mul_of_commute` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:956`
            ★ `matrix_trace_mul_integral_eq_trace_mul_integral_of_indepFun` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1540`
            ★ `trace_mul_nonneg_of_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1238`
            ★ `trace_mul_le_trace_mul_of_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1250`
          ★ `matrix_laplace_one_step_of_trace_exp_add_le` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1606`
        ★ `matrix_laplace_one_step_of_commute` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1668`
          ★ `matrix_integral_posDef_of_ae` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1439`
          ★ `hermitian_exp_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:385`
        ★ `matrix_exp_integral_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1505`
        ★ `real_log_matrix_isHermitian_of_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:554`
        ★ `real_matrix_exp_log_of_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:560`
        ★ `matrix_posSemidef_set_closed` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:566`
        ★ `matrix_posSemidef_set_convex` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:590`
          · `realToCStarMatrix` — private noncomputable abbrev · `Statlib/HighDim/Concentration/MatrixBernstein.lean:392`
            ★ `realToCStarMatrix_nonneg_of_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:433`
            ★ `realToCStarMatrix_continuous` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:417`
            ★ `realToCStarMatrix_exp` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:424`
            ★ `realToCStarMatrix_strictPositive_of_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:508`
            ★ `realToCStarMatrix_isSelfAdjoint_of_isHermitian` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:518`
          ★ `cstar_log_real_matrix_le_of_exp_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:603`
            · `realToCStarMatrixStarAlgHom` — private noncomputable def · `Statlib/HighDim/Concentration/MatrixBernstein.lean:398`
            ★ `realToCStarMatrix_cfc` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:530`
          ★ `realToCStarMatrix_log_of_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:540`
            ★ `real_posSemidef_of_complexification_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:446`
            ★ `realToCStarMatrix_posSemidef_of_nonneg` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:477`
          ★ `realToCStarMatrix_le_reflects_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:490`
        ★ `real_log_matrix_le_of_exp_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:629`
          ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 10: davis_kahan_subspace, sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last, …)_
            ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 1: weyl_sorted_upper)_
            ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 1: weyl_sorted_upper)_
            · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:434`  _(also used by 1: weyl_sorted_upper)_
            · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:40`  _(also used by 2: sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
            · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:69`
            · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:78`  _(also used by 1: weyl_sorted_upper)_
            · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:478`  _(also used by 1: weyl_sorted_upper)_
            · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:105`
            · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:127`
            · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:147`  _(also used by 1: weyl_sorted_upper)_
            · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:829`  _(also used by 1: weyl_sorted_upper)_
            · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:200`
            · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:207`  _(also used by 1: toEuclideanLin_sub_smul_eq_sum_eigen_sub)_
            · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:225`
            · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:258`  _(also used by 1: off_target_energy_eq_one_sub_single_coeff_sq)_
            · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:414`
            · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:447`
            · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:469`  _(also used by 1: weyl_sorted_upper)_
            · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:513`
            · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:491`
            · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:562`  _(also used by 1: weyl_sorted_upper)_
          ★ `sortedEigenvalues_le_of_add_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:640`
          · `sortedEigenvalues_perm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:46`
        ★ `hermitian_trace_exp_mono_of_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:703`
        ⚠ `matrix_lieb_one_step_trace_axiom` — axiom · `Statlib/HighDim/Concentration/MatrixBernstein.lean:63`
      ★ `matrix_lieb_one_step_trace` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1861`
    ★ `matrix_laplace_trace_mgf_bound_lieb_core` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2074`
  ★ `matrix_bernstein_one_sided` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:3190`  _(also used by 1: matrix_bernstein_rect)_
★ `matrix_bernstein` — theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:4446` **← headline**

> Closure has 103 declarations — diagram omitted (cap 60).
