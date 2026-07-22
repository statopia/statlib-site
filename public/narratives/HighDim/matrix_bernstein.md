# Proof narrative — matrix_bernstein

Root: **matrix_bernstein** (theorem) `Statlib/HighDim/Concentration/MatrixBernstein.lean:4078` · topic `HighDim`
Closure: 146 declarations across 17 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasZeroMean` — structure · `Statlib/HighDim/Vocabulary/RandomMatrix.lean:62`  _(also used by 2: hermitianDilationFin_hasZeroMean, matrix_bernstein_rect)_
  ◆ `HasBoundedSpectralNorm` — def · `Statlib/HighDim/Vocabulary/RandomMatrix.lean:38`  _(also used by 3: integrable_transpose_mul_of_bounded, integrable_transpose_mul_of_bounded_meas, matrix_bernstein_rect)_
    ★ `hermitian_l2_opNorm_eq_sup_abs_eigenvalues` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:246`  _(also used by 1: hermitian_exp_smul_le_exp_norm_bound)_
  ★ `hermitian_l2_opNorm_lt_of_posDef_sub_add` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:590`  _(also used by 1: matrix_bernstein_rect)_
    ★ `posDef_smul_one_of_pos` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2801`
      ★ `matrix_dotProduct_mulVec_le_l2_opNorm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:682`
    ★ `hermitian_posDef_sub_of_l2_opNorm_lt` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:704`
      ★ `integrable_mul_transpose_of_bounded` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2616`
      ★ `measurable_mul_transpose` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2596`
    ★ `integrable_mul_transpose_of_bounded_meas` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2652`  _(also used by 1: matrix_bernstein_rect)_
        ★ `matrix_entry_abs_le_l2_opNorm_rect` — private theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:274`
      ◆ `matrixEntryCLM` — private def · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:299`
    ★ `matrix_integral_apply_of_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:309`  _(also used by 1: hermitianDilationFin_integral_mul_self_of_integrable)_
    ★ `matrix_entry_abs_le_l2_opNorm_rect` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:738`
    ◆ `matrixEntryCLM` — private def · `Statlib/HighDim/Concentration/MatrixBernstein.lean:809`
    ★ `hermitian_mul_self_diag_eq_sum_sq` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2833`
    ★ `bernstein_bounded_sum_meas_ge_le_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_bounded_sum_meas_ge_le_exp.lean:9`
      ★ `posDef_fin_one_iff` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2812`
    ★ `not_posDef_fin_one_sub_iff` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2828`
      ★ `hermitian_trace_exp_eq_sum_exp_eigenvalues` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:38`
      ★ `hermitian_exp_trace_ge_exp_of_exists_eigenvalue_ge` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:281`
        ★ `hermitian_posDef_sub_of_forall_eigenvalues_lt` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:511`
      ★ `hermitian_exists_eigenvalue_ge_of_not_posDef_sub` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:574`
    ★ `hermitian_exp_trace_ge_exp_of_not_posDef_sub` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:583`
    ★ `hermitian_trace_exp_le_card_mul_exp_norm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:486`
    ★ `hermitian_trace_exp_nonneg` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:68`
    ★ `matrix_integrable_of_entry_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:316`
    ★ `matrix_integral_eq_zero_of_hasZeroMean` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:901`
    ★ `matrix_trace_integral_of_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:997`
      ★ `trace_le_of_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:359`  _(also used by 1: hermitian_trace_exp_le_quadratic_norm)_
          ★ `real_exp_le_bernstein_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:33`
        ★ `hermitian_exp_le_quadratic_norm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:368`  _(also used by 1: hermitian_trace_exp_le_quadratic_norm)_
      ★ `hermitian_exp_smul_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:442`
    ★ `hermitian_trace_exp_smul_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:476`
    ★ `single_trace_exp_integral_le_quadratic` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1966`
          ★ `hermitian_exp_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:74`
            ★ `posSemidef_l2_opNorm_le_trace` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:775`
          ★ `matrix_integrable_of_posSemidef_trace_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:819`
        ★ `matrix_exp_integrable_of_trace_integrable` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:828`
    ★ `matrix_exp_integrable_of_bounded_hermitian` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:847`
    ★ `matrix_integral_posSemidef_of_ae` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:334`
        ★ `matrix_integral_sub_posSemidef_of_ae` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:987`
      ★ `single_exp_integral_le_quadratic_matrix_raw` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1876`
    ★ `single_exp_integral_le_quadratic_matrix` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1906`
    ★ `hermitian_one_add_self_le_exp` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:297`
    ★ `matrix_trace_le_card_mul_l2_opNorm` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:763`
    ★ `matrix_laplace_trace_mgf_bound_single` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2097`
    ★ `trace_exp_add_smul_finset_sum_integrable_of_bounded` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1615`
      ★ `iIndepFun_matrix_sum_indep_of_notMem` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1056`
        ★ `trace_exp_add_eq_trace_exp_mul_of_commute` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:506`
            ★ `matrix_trace_mul_integral_eq_trace_mul_integral_of_indepFun` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1013`
            ★ `trace_mul_nonneg_of_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:788`
            ★ `trace_mul_le_trace_mul_of_sub_posSemidef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:800`
          ★ `matrix_laplace_one_step_of_trace_exp_add_le` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1079`
        ★ `matrix_laplace_one_step_of_commute` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1141`
          ★ `matrix_integral_posDef_of_ae` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:911`
        ★ `hermitian_exp_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:83`
        ★ `matrix_exp_integral_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:978`
        ★ `real_log_matrix_isHermitian_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:89`
        ★ `real_matrix_exp_log_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:94`
          ◆ `realToCStarMatrix` — noncomputable abbrev · `Statlib/HighDim/Vocabulary/CStarBridge.lean:14`
            ★ `realToCStarMatrix_nonneg_of_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:32`
            ★ `realToCStarMatrix_continuous` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:18`
            ★ `realToCStarMatrix_exp` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:24`
            ★ `realToCStarMatrix_strictPositive_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:103`
            ★ `realToCStarMatrix_isSelfAdjoint_of_isHermitian` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:112`
          ★ `cstar_log_real_matrix_le_of_exp_sub_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:131`
            ◆ `realToCStarMatrixStarAlgHom` — noncomputable def · `Statlib/HighDim/Vocabulary/CStarBridge.lean:20`
            ★ `realToCStarMatrix_cfc` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:123`
          ★ `realToCStarMatrix_log_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:132`
            ★ `real_posSemidef_of_complexification_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:44`
            ★ `realToCStarMatrix_posSemidef_of_nonneg` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:74`
          ★ `realToCStarMatrix_le_reflects_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/CStarBridge.lean:86`
        ★ `real_log_matrix_le_of_exp_sub_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:157`
          ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 10: davis_kahan_subspace, sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last, …)_
            ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 1: weyl_sorted_upper)_
            ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 1: weyl_sorted_upper)_
            · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:435`  _(also used by 1: weyl_sorted_upper)_
            · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:41`  _(also used by 2: sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
            · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:70`
            · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:79`  _(also used by 1: weyl_sorted_upper)_
            · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:479`  _(also used by 1: weyl_sorted_upper)_
            · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:106`
            · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:128`
            · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:148`  _(also used by 1: weyl_sorted_upper)_
            · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:830`  _(also used by 1: weyl_sorted_upper)_
            · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:201`
            · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:208`  _(also used by 1: toEuclideanLin_sub_smul_eq_sum_eigen_sub)_
            · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:226`
            · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:259`  _(also used by 1: off_target_energy_eq_one_sub_single_coeff_sq)_
            · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:415`
            · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:448`
            · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:470`  _(also used by 1: weyl_sorted_upper)_
            · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:514`
            · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:492`
            · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:563`  _(also used by 1: weyl_sorted_upper)_
          ★ `sortedEigenvalues_le_of_add_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:168`
          · `sortedEigenvalues_perm` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:47`
        ★ `hermitian_trace_exp_mono_of_sub_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:231`
          ★ `measurable_trace_exp_add_const` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1265`
        ★ `trace_exp_add_const_integrable_of_le` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1278`
        ★ `integrable_prod_trace_exp_add_of_indepFun` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1203`
          ★ `integral_pair_eq_prod_integral_of_indepFun` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1166`
            ★ `matrix_posDef_weighted_add` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:43`
            ★ `matrix_posDef_cone_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:59`
            ★ `posDef_convex_combo` — private theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:27`
            ◆ `quantumRelativeEntropy` — noncomputable def · `Statlib/HighDim/Vocabulary/Quantum.lean:17`
            · `add_hermitian` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:582`  _(also used by 1: exists_perturbed_unit_eigenvector_near)_
            ★ `klein_trace_exp_variational_lb` — theorem · `Statlib/HighDim/MatrixAnalysis/KleinTraceExpVariationalLb.lean:9`
            ★ `trace_exp_variational_formula` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExpVariationalFormula.lean:13`
            ◆ `perspectiveInner` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:101`
            ◆ `leftMulKronecker` — def · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:16`
            ◆ `rightMulKronecker` — def · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:22`
            ◆ `hilbertSchmidtVecOne` — def · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:27`
            · `leftMulKronecker_posDef` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:66`
            · `rightMulKronecker_posDef` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:70`
            · `leftMulKronecker_comm_rightMulKronecker` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:77`
            · `leftMulKronecker_mulVec_vec` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:30`
            · `rightMulKronecker_mulVec_vec` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:35`
            · `quantumRelativeEntropy_eq_perspectiveInner` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:115`
            · `leftMulKronecker_add` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:40`
            · `leftMulKronecker_smul` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:44`
            · `leftMulKronecker_convex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:56`
            · `rightMulKronecker_add` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:48`
            · `rightMulKronecker_smul` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:52`
            · `rightMulKronecker_convex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:61`
            ★ `matrix_log_integral_rep` — theorem · `Statlib/HighDim/MatrixAnalysis/MatrixLogIntegralRep.lean:8`
            ★ `lieb_ruskai_conj_inv_jointly_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebRuskaiConjInvJointlyConvex.lean:7`
            ★ `op_convex_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/OperatorConvexMulLog.lean:14`
            ★ `hansen_pedersen_jensen_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/HansenPedersenJensenMulLog.lean:28`  _(also used by 1: hp_jensen_mul_log)_
            · `perspectiveInner_jointConvex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:388`
            ★ `quantumRelativeEntropy_jointConvex` — theorem · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:990`
            ★ `relative_entropy_joint_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:1053`
            ★ `trace_exp_add_log_concave_two_point` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:75`
            ★ `trace_exp_add_log_concave` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:143`  _(also used by 1: trace_exp_add_log_finset_jensen_posDef)_
            ★ `trace_exp_add_log_continuousOn_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:291`
            ★ `closure_hypograph_le` — private theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:390`
            ★ `concaveOn_le_map_integral_of_integral_mem` — private theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:422`
            ★ `trace_exp_add_log_jensen_integral_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:449`
          ★ `lieb_jensen_fixed_trace_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1187`
          ★ `integral_prod_le_of_ae_integral_le` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1299`
        ★ `matrix_lieb_pair_trace_posDef` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1313`
      ★ `matrix_lieb_one_step_trace` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1420`
    ★ `matrix_laplace_trace_mgf_bound_lieb_core` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:1715`
  ★ `matrix_bernstein_one_sided` — private theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:2855`  _(also used by 1: matrix_bernstein_rect)_
★ `matrix_bernstein` — theorem · `Statlib/HighDim/Concentration/MatrixBernstein.lean:4078` **← headline**

> Closure has 146 declarations — diagram omitted (cap 60).
