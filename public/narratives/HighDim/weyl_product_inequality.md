# Proof narrative — weyl_product_inequality

Root: **weyl_product_inequality** (theorem) `Statlib/HighDim/MatrixAnalysis/Weyl.lean:21` · topic `HighDim`
Closure: 18 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `singularValues` — noncomputable def · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:22`  _(also used by 18: frobenius_norm_svd_relation, sv_diag_singularValues, low_rank_frobenius_error_decomposition, …)_
    ▣ `SVD` — structure · `Statlib/HighDim/Vocabulary/SVD.lean:37`  _(also used by 33: sv_diag_singularValues, low_rank_frobenius_error_decomposition, nuclearNorm_add_le, …)_
  ★ `svd_exists` — theorem · `Statlib/HighDim/MatrixAnalysis/SVDFoundation.lean:20`  _(also used by 5: nuclearNorm_add_le, nuclearNorm_eq_iSup_opNorm_le_one, svSoftThreshold, …)_
  ★ `sorted_svd_exists` — theorem · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:17`  _(also used by 2: sv_diag_singularValues, low_rank_frobenius_error_decomposition)_
    · `orth_square_mul_transpose` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:439`  _(also used by 1: low_rank_frobenius_error_decomposition)_
  · `singularValues_eq_vocabulary` — lemma · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:30`  _(also used by 6: sv_diag_singularValues, low_rank_frobenius_error_decomposition, nuclear_norm_le_sqrt_rank_mul_frobenius, …)_
  ★ `singular_value_properties` — theorem · `Statlib/HighDim/MatrixAnalysis/SingularValueProperties.lean:39`  _(also used by 5: sv_diag_singularValues, low_rank_frobenius_error_decomposition, von_neumann_trace_inequality, …)_
      · `sum_injective_eq_sum_subset_perm` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:511`
  · `prod_reindex_orderIsoOfFin` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:466`
      · `sum_eq_subtype_injective` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:490`
  · `cauchy_binet_diag` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:611`
    · `matrix_eq_diagonal_of_offdiag` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:425`
    · `prod_subset_le_top` — lemma · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:930`
  ★ `ky_fan_singular_values_product` — theorem · `Statlib/HighDim/MatrixAnalysis/KyFan.lean:994`
    ◆ `singularValues` — noncomputable def · `Statlib/HighDim/Vocabulary/SVD.lean:108`  _(also used by 2: leftSingularVectors, nuclearNorm)_
  ★ `svd_sorted_exists` — theorem · `Statlib/HighDim/MatrixAnalysis/SvdSortedExists.lean:13`
  ★ `svd_singular_values_unique` — theorem · `Statlib/HighDim/MatrixAnalysis/SVDFoundation.lean:663`  _(also used by 4: sv_diag_singularValues, low_rank_frobenius_error_decomposition, nuclearNorm_eq_iSup_opNorm_le_one, …)_
★ `weyl_product_inequality` — theorem · `Statlib/HighDim/MatrixAnalysis/Weyl.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ singularValues"]
  n1["▣ SVD"]
  n2["★ svd_exists"]
  n3["★ sorted_svd_exists"]
  n4["· orth_square_mul_transpose"]
  n5["· singularValues_eq_vocabulary"]
  n6["★ singular_value_properties"]
  n7["· sum_injective_eq_sum_subset_perm"]
  n8["· prod_reindex_orderIsoOfFin"]
  n9["· sum_eq_subtype_injective"]
  n10["· cauchy_binet_diag"]
  n11["· matrix_eq_diagonal_of_offdiag"]
  n12["· prod_subset_le_top"]
  n13["★ ky_fan_singular_values_product"]
  n14["◆ singularValues"]
  n15["★ svd_sorted_exists"]
  n16["★ svd_singular_values_unique"]
  n17["★ weyl_product_inequality"]
  n2 --> n1
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n5 --> n0
  n6 --> n0
  n10 --> n7
  n10 --> n8
  n10 --> n9
  n12 --> n8
  n13 --> n0
  n13 --> n3
  n13 --> n4
  n13 --> n5
  n13 --> n6
  n13 --> n10
  n13 --> n11
  n13 --> n12
  n15 --> n1
  n15 --> n14
  n15 --> n2
  n16 --> n1
  n17 --> n0
  n17 --> n13
  n17 --> n10
  n17 --> n2
  n17 --> n15
  n17 --> n16
  n17 --> n5
  n17 --> n3
  n17 --> n8
  n17 --> n6
  class n17 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
