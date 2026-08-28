# Proof narrative — golden_thompson

Root: **golden_thompson** (theorem) `Statlib/HighDim/MatrixAnalysis/GoldenThompson.lean:1018` · topic `HighDim`
Closure: 39 declarations across 12 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `hermitian_exp_posSemidef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:56`  _(also used by 2: matrix_exp_integrable_of_trace_integrable, matrix_laplace_one_step_of_trace_exp_add_le)_
  ★ `hermitian_exp_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:65`  _(also used by 3: matrix_exp_integral_posDef, matrix_lieb_pair_trace_posDef, matrix_lieb_one_step_trace)_
    ★ `matrix_integrable_of_entry_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:298`  _(also used by 5: matrix_integral_eq_zero_of_hasZeroMean, matrix_lieb_one_step_trace, single_exp_integral_le_quadratic_matrix, …)_
        ★ `matrix_entry_abs_le_l2_opNorm_rect` — private theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:256`
      ◆ `matrixEntryCLM` — private def · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:281`
    ★ `matrix_integral_apply_of_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:291`  _(also used by 7: matrix_integral_eq_zero_of_hasZeroMean, matrix_integral_posDef_of_ae, matrix_trace_integral_of_integrable, …)_
  ★ `matrix_log_integral_rep` — theorem · `Statlib/HighDim/MatrixAnalysis/MatrixLogIntegralRep.lean:8`
    ★ `posDef_convex_combo` — private theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:27`
    ◆ `quantumRelativeEntropy` — noncomputable def · `Statlib/HighDim/Vocabulary/Quantum.lean:17`
      ★ `real_log_matrix_isHermitian_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:71`  _(also used by 1: matrix_lieb_one_step_trace)_
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
          ★ `real_matrix_exp_log_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:76`  _(also used by 1: matrix_lieb_one_step_trace)_
          · `leftMulKronecker_mulVec_vec` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:30`
          · `rightMulKronecker_mulVec_vec` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:35`
        · `quantumRelativeEntropy_eq_perspectiveInner` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:115`
            · `leftMulKronecker_add` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:40`
            · `leftMulKronecker_smul` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:44`
          · `leftMulKronecker_convex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:56`
            · `rightMulKronecker_add` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:48`
            · `rightMulKronecker_smul` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:52`
          · `rightMulKronecker_convex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:61`
            ★ `lieb_ruskai_conj_inv_jointly_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebRuskaiConjInvJointlyConvex.lean:7`  _(also used by 2: resolvent_loewner_convex, resolvent_trace_convex)_
            ★ `matrix_integral_posSemidef_of_ae` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:316`  _(also used by 4: matrix_integral_posDef_of_ae, matrix_integral_sub_posSemidef_of_ae, matrix_laplace_one_step_of_trace_exp_add_le, …)_
            ★ `op_convex_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/OperatorConvexMulLog.lean:14`
          ★ `hansen_pedersen_jensen_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/HansenPedersenJensenMulLog.lean:28`  _(also used by 1: hp_jensen_mul_log)_
        · `perspectiveInner_jointConvex` — lemma · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:388`
      ★ `quantumRelativeEntropy_jointConvex` — theorem · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:990`
    ★ `relative_entropy_joint_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/RelativeEntropyJointConvex.lean:1053`
  ★ `trace_exp_add_log_concave_two_point` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebTraceConcavity.lean:75`  _(also used by 1: trace_exp_add_log_concave)_
★ `golden_thompson` — theorem · `Statlib/HighDim/MatrixAnalysis/GoldenThompson.lean:1018` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ hermitian_exp_posSemidef"]
  n1["★ hermitian_exp_posDef"]
  n2["★ matrix_integrable_of_entry_integrable"]
  n3["★ matrix_entry_abs_le_l2_opNorm_rect"]
  n4["◆ matrixEntryCLM"]
  n5["★ matrix_integral_apply_of_integrable"]
  n6["★ matrix_log_integral_rep"]
  n7["★ posDef_convex_combo"]
  n8["◆ quantumRelativeEntropy"]
  n9["★ real_log_matrix_isHermitian_of_posDef"]
  n10["· add_hermitian"]
  n11["★ klein_trace_exp_variational_lb"]
  n12["★ trace_exp_variational_formula"]
  n13["◆ perspectiveInner"]
  n14["◆ leftMulKronecker"]
  n15["◆ rightMulKronecker"]
  n16["◆ hilbertSchmidtVecOne"]
  n17["· leftMulKronecker_posDef"]
  n18["· rightMulKronecker_posDef"]
  n19["· leftMulKronecker_comm_rightMulKronecker"]
  n20["★ real_matrix_exp_log_of_posDef"]
  n21["· leftMulKronecker_mulVec_vec"]
  n22["· rightMulKronecker_mulVec_vec"]
  n23["· quantumRelativeEntropy_eq_perspectiveInner"]
  n24["· leftMulKronecker_add"]
  n25["· leftMulKronecker_smul"]
  n26["· leftMulKronecker_convex"]
  n27["· rightMulKronecker_add"]
  n28["· rightMulKronecker_smul"]
  n29["· rightMulKronecker_convex"]
  n30["★ lieb_ruskai_conj_inv_jointly_convex"]
  n31["★ matrix_integral_posSemidef_of_ae"]
  n32["★ op_convex_mul_log"]
  n33["★ hansen_pedersen_jensen_mul_log"]
  n34["· perspectiveInner_jointConvex"]
  n35["★ quantumRelativeEntropy_jointConvex"]
  n36["★ relative_entropy_joint_convex"]
  n37["★ trace_exp_add_log_concave_two_point"]
  n38["★ golden_thompson"]
  n1 --> n0
  n4 --> n3
  n5 --> n4
  n6 --> n2
  n6 --> n5
  n11 --> n1
  n12 --> n8
  n12 --> n9
  n12 --> n1
  n12 --> n10
  n12 --> n11
  n17 --> n14
  n18 --> n15
  n19 --> n14
  n19 --> n15
  n21 --> n14
  n22 --> n15
  n23 --> n8
  n23 --> n13
  n23 --> n14
  n23 --> n15
  n23 --> n16
  n23 --> n17
  n23 --> n18
  n23 --> n19
  n23 --> n9
  n23 --> n20
  n23 --> n21
  n23 --> n22
  n24 --> n14
  n25 --> n14
  n26 --> n14
  n26 --> n24
  n26 --> n25
  n27 --> n15
  n28 --> n15
  n29 --> n15
  n29 --> n27
  n29 --> n28
  n31 --> n5
  n31 --> n4
  n32 --> n6
  n32 --> n30
  n32 --> n31
  n33 --> n32
  n33 --> n9
  n33 --> n20
  n33 --> n6
  n33 --> n5
  n33 --> n31
  n34 --> n13
  n34 --> n14
  n34 --> n15
  n34 --> n16
  n34 --> n17
  n34 --> n18
  n34 --> n26
  n34 --> n29
  n34 --> n19
  n34 --> n9
  n34 --> n33
  n35 --> n8
  n35 --> n13
  n35 --> n14
  n35 --> n15
  n35 --> n16
  n35 --> n23
  n35 --> n34
  n36 --> n8
  n36 --> n35
  n37 --> n7
  n37 --> n12
  n37 --> n8
  n37 --> n36
  n38 --> n1
  n38 --> n0
  n38 --> n6
  n38 --> n37
  class n38 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
