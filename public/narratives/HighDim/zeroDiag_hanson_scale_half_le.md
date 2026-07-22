# Proof narrative — zeroDiag_hanson_scale_half_le

Root: **zeroDiag_hanson_scale_half_le** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:1202` · topic `HighDim`
Closure: 9 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:37`  _(also used by 42: diag_sq_sum_le_frobeniusNormSq, frobeniusNormSq_nonneg, offDiagCoeffVec_norm_sq_le_frobenius, …)_
  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 38: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, …)_
  · `frobeniusNormSq_zeroDiagMatrix_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:388`  _(also used by 2: offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius)_
    ◆ `diagPartMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:57`  _(also used by 1: zeroDiagMatrix_add_diagPartMatrix)_
      · `matrix_entry_abs_le_l2_opNorm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:350`  _(also used by 1: diag_hanson_wright_tail_high)_
    · `diagPartMatrix_norm_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:637`
  · `zeroDiagMatrix_norm_le_two` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:656`  _(also used by 2: offDiagCoeff_norm_le, offDiagCoeffVec_norm_le)_
  · `half_min_le_min_of_den_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1176`
· `zeroDiag_hanson_scale_half_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1202` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ frobeniusNormSq"]
  n1["◆ zeroDiagMatrix"]
  n2["· frobeniusNormSq_zeroDiagMatrix_le"]
  n3["◆ diagPartMatrix"]
  n4["· matrix_entry_abs_le_l2_opNorm"]
  n5["· diagPartMatrix_norm_le"]
  n6["· zeroDiagMatrix_norm_le_two"]
  n7["· half_min_le_min_of_den_le"]
  n8["· zeroDiag_hanson_scale_half_le"]
  n2 --> n0
  n2 --> n1
  n5 --> n3
  n5 --> n4
  n6 --> n1
  n6 --> n3
  n6 --> n5
  n8 --> n0
  n8 --> n1
  n8 --> n2
  n8 --> n6
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
