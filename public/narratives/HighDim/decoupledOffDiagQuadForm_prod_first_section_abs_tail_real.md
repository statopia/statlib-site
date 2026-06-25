# Proof narrative — decoupledOffDiagQuadForm_prod_first_section_abs_tail_real

Root: **decoupledOffDiagQuadForm_prod_first_section_abs_tail_real** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:190` · topic `HighDim`
Closure: 14 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 74: subgaussian_projection_second_moment_le, subgaussian_projection_sq_integrable, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
  ◆ `decoupledOffDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:33`  _(also used by 44: decoupledOffDiagQuadForm_measurable, decoupledOffDiagQuadForm_prod_measurable, decoupledOffDiagQuadForm_prod_tail_measurableSet, …)_
  ◆ `offDiagCoeffVec` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:46`  _(also used by 18: offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, offDiagCoeffVec_norm_le_zeroDiag, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, …)_
    · `subgaussian_abs_tail_real` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:122`  _(also used by 3: decoupledOffDiagQuadForm_const_right_abs_tail_real_spectral, decoupledOffDiagQuadForm_const_right_abs_tail_real_frobenius, decoupledOffDiagQuadForm_const_right_abs_tail_real_of_coeff_norm_sq_le)_
          ◆ `offDiagCoeff` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:39`  _(also used by 4: offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, offDiagCoeff_norm_le, …)_
          · `decoupledOffDiagQuadForm_eq_sum_coeff` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:42`
          · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:32`  _(also used by 13: offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_vector_coord, subgaussian_norm_sq_mean_le_dim, …)_
        · `decoupledOffDiagQuadForm_eq_inner_coeff` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:61`
        · `offDiagCoeff_const` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:35`
      · `decoupledOffDiagQuadForm_const_right_eq_inner_coeffVec` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:69`
    · `decoupledOffDiagQuadForm_const_right_subgaussian` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:76`  _(also used by 3: decoupledOffDiagQuadForm_const_right_abs_tail_real_spectral, decoupledOffDiagQuadForm_const_right_abs_tail_real_frobenius, decoupledOffDiagQuadForm_const_right_abs_tail_real_of_coeff_norm_sq_le)_
  · `decoupledOffDiagQuadForm_const_right_abs_tail_real` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:166`
  · `decoupledOffDiagQuadForm_prod_mk_eq_const_right` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:179`  _(also used by 2: decoupledOffDiagQuadForm_prod_first_section_abs_tail_real_spectral, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real_frobenius)_
· `decoupledOffDiagQuadForm_prod_first_section_abs_tail_real` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:190` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsSubGaussianVector"]
  n1["◆ decoupledOffDiagQuadForm"]
  n2["◆ offDiagCoeffVec"]
  n3["· subgaussian_abs_tail_real"]
  n4["◆ offDiagCoeff"]
  n5["· decoupledOffDiagQuadForm_eq_sum_coeff"]
  n6["· inner_eq_sum"]
  n7["· decoupledOffDiagQuadForm_eq_inner_coeff"]
  n8["· offDiagCoeff_const"]
  n9["· decoupledOffDiagQuadForm_const_right_eq_inner_coeffVec"]
  n10["· decoupledOffDiagQuadForm_const_right_subgaussian"]
  n11["· decoupledOffDiagQuadForm_const_right_abs_tail_real"]
  n12["· decoupledOffDiagQuadForm_prod_mk_eq_const_right"]
  n13["· decoupledOffDiagQuadForm_prod_first_section_abs_tail_real"]
  n5 --> n1
  n5 --> n4
  n7 --> n1
  n7 --> n4
  n7 --> n5
  n7 --> n6
  n8 --> n4
  n8 --> n2
  n9 --> n1
  n9 --> n2
  n9 --> n7
  n9 --> n8
  n10 --> n0
  n10 --> n1
  n10 --> n2
  n10 --> n9
  n11 --> n0
  n11 --> n1
  n11 --> n2
  n11 --> n3
  n11 --> n10
  n12 --> n1
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n11
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
