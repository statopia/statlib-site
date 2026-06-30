# Proof narrative — offdiag_hanson_wright_tail_high_of_const_decoupling_and_decoupled_tail

Root: **offdiag_hanson_wright_tail_high_of_const_decoupling_and_decoupled_tail** (theorem) `Statlib/HighDim/Concentration/HansonWright.lean:3892` · topic `HighDim`
Closure: 17 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 33: offDiagQuadForm_centered_eq_self_of_indep, coord_mul_subexponential_exists_of_indep, coord_mul_scaled_subexponential_exists_of_indep, …)_
  ◆ `quadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:15`  _(also used by 29: quadForm_centered_eq_diag_offdiag_centered, quadForm_centered_tail_le_diag_offdiag_tail, quadForm_centered_tail_le_two_mul_of_diag_offdiag_tail_bounds, …)_
  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 37: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, …)_
  ◆ `decoupledOffDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:33`  _(also used by 49: decoupledOffDiagQuadForm_eq_sum_coeff, decoupledOffDiagQuadForm_eq_inner_coeff, decoupledOffDiagQuadForm_const_right_eq_inner_coeffVec, …)_
  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:37`  _(also used by 44: diag_sq_sum_le_frobeniusNormSq, frobeniusNormSq_zeroDiagMatrix_le, frobeniusNormSq_nonneg, …)_
  ◆ `offDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:27`  _(also used by 17: offDiagQuadForm_eq_zero_of_entries, quadForm_centered_eq_diag_offdiag_centered, offDiagQuadForm_integrable_of_coord_sq_integrable, …)_
        ◆ `diagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:21`  _(also used by 8: quadForm_centered_eq_diag_offdiag_centered, diagQuadForm_centered_eq_sum, quadForm_centered_tail_le_diag_offdiag_tail, …)_
      · `quadForm_eq_diag_add_offdiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:284`  _(also used by 1: quadForm_centered_eq_diag_offdiag_centered)_
      · `diagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:302`
      · `offDiagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:308`
    · `quadForm_zeroDiagMatrix_eq_offDiagQuadForm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:319`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
      · `coord_mul_integrable_of_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1280`  _(also used by 1: offDiagQuadForm_integrable_of_coord_sq_integrable)_
      · `coord_mul_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1297`  _(also used by 1: coord_mul_subexponential_exists_of_indep)_
    · `offDiagQuadForm_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1331`  _(also used by 1: offDiagQuadForm_centered_eq_self_of_indep)_
  · `offdiag_tail_of_zeroDiag_centered_quad_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2968`  _(also used by 6: offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb, …)_
  ★ `zeroDiag_centered_quadratic_form_tail_high_of_const_decoupling_and_decoupled_tail` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3046`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_const_decoupling_absorb)_
★ `offdiag_hanson_wright_tail_high_of_const_decoupling_and_decoupled_tail` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3892` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasMean"]
  n1["◆ quadForm"]
  n2["◆ zeroDiagMatrix"]
  n3["◆ decoupledOffDiagQuadForm"]
  n4["◆ frobeniusNormSq"]
  n5["◆ offDiagQuadForm"]
  n6["◆ diagQuadForm"]
  n7["· quadForm_eq_diag_add_offdiag"]
  n8["· diagQuadForm_zeroDiagMatrix"]
  n9["· offDiagQuadForm_zeroDiagMatrix"]
  n10["· quadForm_zeroDiagMatrix_eq_offDiagQuadForm"]
  n11["· coord_mul_integrable_of_sq_integrable"]
  n12["· coord_mul_integral_eq_zero_of_indep"]
  n13["· offDiagQuadForm_integral_eq_zero_of_indep"]
  n14["· offdiag_tail_of_zeroDiag_centered_quad_tail"]
  n15["★ zeroDiag_centered_quadratic_form_tail_high_of_const_decoupling_and_decoupled_tail"]
  n16["★ offdiag_hanson_wright_tail_high_of_const_decoupling_and_decoupled_tail"]
  n7 --> n1
  n7 --> n6
  n7 --> n5
  n8 --> n6
  n8 --> n2
  n9 --> n5
  n9 --> n2
  n10 --> n1
  n10 --> n2
  n10 --> n5
  n10 --> n7
  n10 --> n8
  n10 --> n9
  n12 --> n0
  n13 --> n0
  n13 --> n5
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n1
  n14 --> n2
  n14 --> n5
  n14 --> n10
  n14 --> n13
  n15 --> n1
  n15 --> n2
  n15 --> n3
  n15 --> n4
  n16 --> n0
  n16 --> n1
  n16 --> n2
  n16 --> n3
  n16 --> n4
  n16 --> n5
  n16 --> n14
  n16 --> n15
  class n16 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
