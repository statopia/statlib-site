# Proof narrative — rip_cross_term_abs_le_half_delta_sum

Root: **rip_cross_term_abs_le_half_delta_sum** (lemma) `Statlib/HighDim/Geometry/RIPConstruction.lean:242` · topic `HighDim`
Closure: 11 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsSparse` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:36`  _(also used by 8: covering_number_sparse_ball, log_covering_number_sparse, exists_support_card_eq_of_isSparse, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 29: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ◆ `SatisfiesRIP` — def · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:62`  _(also used by 5: rip_lower_restrictTo, rip_upper_restrictTo, subgaussian_rip_tail, …)_
  · `isSparse_mono` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:85`
  · `isSparse_add` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:97`
    · `isSparse_neg` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:90`
  · `isSparse_sub` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:115`
  · `l2NormSq_add_of_pointwise_mul_eq_zero` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:189`
  · `l2NormSq_sub_of_pointwise_mul_eq_zero` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:199`
  · `mulVec_l2NormSq_add_sub` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:223`
· `rip_cross_term_abs_le_half_delta_sum` — lemma · `Statlib/HighDim/Geometry/RIPConstruction.lean:242` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsSparse"]
  n1["◆ l2NormSq"]
  n2["◆ SatisfiesRIP"]
  n3["· isSparse_mono"]
  n4["· isSparse_add"]
  n5["· isSparse_neg"]
  n6["· isSparse_sub"]
  n7["· l2NormSq_add_of_pointwise_mul_eq_zero"]
  n8["· l2NormSq_sub_of_pointwise_mul_eq_zero"]
  n9["· mulVec_l2NormSq_add_sub"]
  n10["· rip_cross_term_abs_le_half_delta_sum"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n6 --> n0
  n6 --> n4
  n6 --> n5
  n7 --> n1
  n8 --> n1
  n9 --> n1
  n10 --> n2
  n10 --> n0
  n10 --> n1
  n10 --> n3
  n10 --> n4
  n10 --> n6
  n10 --> n7
  n10 --> n8
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
