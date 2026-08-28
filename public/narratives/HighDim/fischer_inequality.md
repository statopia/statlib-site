# Proof narrative — fischer_inequality

Root: **fischer_inequality** (theorem) `Statlib/HighDim/MatrixAnalysis/Fischer.lean:13` · topic `HighDim`
Closure: 24 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sortedEigenvalues` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:11`  _(also used by 15: hermitian_trace_exp_mono_of_sub_posSemidef, finrank_eigenSubspaceLe_eq_r, span_cols_eq_eigenSubspaceLe, …)_
    ◆ `eigenSubspaceLe` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:16`  _(also used by 12: von_neumann_trace_inequality, eigenvector_mem_eigenSubspaceLe, orthogonal_eigen_family_card_le, …)_
    ◆ `eigenSubspaceGt` — noncomputable def · `Statlib/HighDim/Vocabulary/Spectral.lean:23`  _(also used by 2: von_neumann_trace_inequality, weyl_sorted_upper)_
    · `finrank_eigenSubspaceLe` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:435`  _(also used by 5: von_neumann_trace_inequality, orthogonal_eigen_family_card_le, finrank_eigenSubspaceLe_eq_r, …)_
        · `sortedEigenvalues_mono` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:41`  _(also used by 3: wedin_sin_theta, sortedEigenvalues_zero_le_eigenvalue, eigenvalue_le_sortedEigenvalues_last)_
      · `sortedEigenvalues_lt_card_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:70`
    · `sortedEigenvalues_lt_card_eigen_le_sorted` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:79`  _(also used by 2: wedin_sin_theta, weyl_sorted_upper)_
    · `finrank_eigenSubspaceGt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:479`  _(also used by 2: von_neumann_trace_inequality, weyl_sorted_upper)_
        · `card_sorted_le_eq_card_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:106`
      · `card_eigen_le_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:128`  _(also used by 1: wedin_sin_theta)_
    · `card_eigen_gt_ge_of_sorted_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:148`  _(also used by 1: weyl_sorted_upper)_
    · `exists_ne_zero_mem_inf_of_finrank_lt_add` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:830`  _(also used by 1: weyl_sorted_upper)_
            · `toEuclideanLin_eigenvectorBasis` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:201`  _(also used by 2: eigenvalues_lt_neg_singularValue_card_le, wedin_sin_theta)_
          · `toEuclideanLin_sum_repr` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:208`  _(also used by 2: eigenvector_mem_eigenSubspaceLe, toEuclideanLin_sub_smul_eq_sum_eigen_sub)_
        · `hermitian_rayleigh_eq_sum_eigen` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:226`
        · `orthonormalBasis_norm_sq_eq_sum_repr_sq` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:259`  _(also used by 2: col_energy_eq_off_energy, off_target_energy_eq_one_sub_single_coeff_sq)_
      · `hermitian_rayleigh_le_of_support_eigen_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:415`
      · `eigenSubspaceLe_coeff_zero_of_lt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:448`  _(also used by 1: proj_coeff_zero_of_mem)_
    · `eigenSubspaceLe_rayleigh_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:470`  _(also used by 2: von_neumann_trace_inequality, weyl_sorted_upper)_
      · `hermitian_rayleigh_gt_of_support_eigen_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:514`
      · `eigenSubspaceGt_coeff_zero_of_le` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:492`
    · `eigenSubspaceGt_rayleigh_gt` — lemma · `Statlib/HighDim/SpectralPerturbation/Eigenvalues.lean:563`  _(also used by 2: von_neumann_trace_inequality, weyl_sorted_upper)_
  ★ `sortedEigenvalues_le_of_add_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:150`  _(also used by 1: hermitian_trace_exp_mono_of_sub_posSemidef)_
★ `fischer_inequality` — theorem · `Statlib/HighDim/MatrixAnalysis/Fischer.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sortedEigenvalues"]
  n1["◆ eigenSubspaceLe"]
  n2["◆ eigenSubspaceGt"]
  n3["· finrank_eigenSubspaceLe"]
  n4["· sortedEigenvalues_mono"]
  n5["· sortedEigenvalues_lt_card_le_sorted"]
  n6["· sortedEigenvalues_lt_card_eigen_le_sorted"]
  n7["· finrank_eigenSubspaceGt"]
  n8["· card_sorted_le_eq_card_eigen_le"]
  n9["· card_eigen_le_of_sorted_gt"]
  n10["· card_eigen_gt_ge_of_sorted_gt"]
  n11["· exists_ne_zero_mem_inf_of_finrank_lt_add"]
  n12["· toEuclideanLin_eigenvectorBasis"]
  n13["· toEuclideanLin_sum_repr"]
  n14["· hermitian_rayleigh_eq_sum_eigen"]
  n15["· orthonormalBasis_norm_sq_eq_sum_repr_sq"]
  n16["· hermitian_rayleigh_le_of_support_eigen_le"]
  n17["· eigenSubspaceLe_coeff_zero_of_lt"]
  n18["· eigenSubspaceLe_rayleigh_le"]
  n19["· hermitian_rayleigh_gt_of_support_eigen_gt"]
  n20["· eigenSubspaceGt_coeff_zero_of_le"]
  n21["· eigenSubspaceGt_rayleigh_gt"]
  n22["★ sortedEigenvalues_le_of_add_posSemidef"]
  n23["★ fischer_inequality"]
  n3 --> n1
  n4 --> n0
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n6 --> n5
  n7 --> n2
  n8 --> n0
  n9 --> n0
  n9 --> n4
  n9 --> n8
  n10 --> n0
  n10 --> n9
  n13 --> n12
  n14 --> n13
  n16 --> n14
  n16 --> n15
  n17 --> n1
  n18 --> n1
  n18 --> n16
  n18 --> n17
  n19 --> n14
  n19 --> n15
  n20 --> n2
  n21 --> n2
  n21 --> n19
  n21 --> n20
  n22 --> n0
  n22 --> n1
  n22 --> n2
  n22 --> n3
  n22 --> n6
  n22 --> n7
  n22 --> n10
  n22 --> n11
  n22 --> n18
  n22 --> n21
  n23 --> n0
  n23 --> n22
  class n23 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
