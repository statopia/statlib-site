# Proof narrative — offDiagCoeff_norm_sq_le

Root: **offDiagCoeff_norm_sq_le** (lemma) `Statlib/HighDim/Concentration/HansonWright.lean:696` · topic `HighDim`
Closure: 10 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `offDiagCoeff` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:39`  _(also used by 3: offDiagCoeff_const, decoupledOffDiagQuadForm_eq_sum_coeff, decoupledOffDiagQuadForm_eq_inner_coeff)_
    ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 37: offDiagCoeffVec_eq_zeroDiagMatrix_mulVec, offDiagCoeffVec_norm_le_zeroDiag, diagQuadForm_zeroDiagMatrix, …)_
      · `offDiagCoeff_eq_zeroDiagMatrix_mulVec` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:169`
    · `offDiagCoeff_norm_le_zeroDiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:195`
      ◆ `diagPartMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:57`  _(also used by 1: zeroDiagMatrix_add_diagPartMatrix)_
        · `matrix_entry_abs_le_l2_opNorm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:350`  _(also used by 1: diag_hanson_wright_tail_high)_
      · `diagPartMatrix_norm_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:637`
    · `zeroDiagMatrix_norm_le_two` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:656`  _(also used by 2: offDiagCoeffVec_norm_le, zeroDiag_hanson_scale_half_le)_
  · `offDiagCoeff_norm_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:673`
· `offDiagCoeff_norm_sq_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:696` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ offDiagCoeff"]
  n1["◆ zeroDiagMatrix"]
  n2["· offDiagCoeff_eq_zeroDiagMatrix_mulVec"]
  n3["· offDiagCoeff_norm_le_zeroDiag"]
  n4["◆ diagPartMatrix"]
  n5["· matrix_entry_abs_le_l2_opNorm"]
  n6["· diagPartMatrix_norm_le"]
  n7["· zeroDiagMatrix_norm_le_two"]
  n8["· offDiagCoeff_norm_le"]
  n9["· offDiagCoeff_norm_sq_le"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n1
  n7 --> n4
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n8 --> n3
  n8 --> n7
  n9 --> n0
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
