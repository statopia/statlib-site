# Proof narrative — hp_jensen_mul_log

Root: **hp_jensen_mul_log** (theorem) `Statlib/HighDim/MatrixAnalysis/HansenPedersenJensenMulLog.lean:1300` · topic `HighDim`
Closure: 12 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ★ `matrix_integrable_of_entry_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:316`  _(also used by 5: matrix_integral_eq_zero_of_hasZeroMean, matrix_lieb_one_step_trace, single_exp_integral_le_quadratic_matrix, …)_
            ★ `matrix_entry_abs_le_l2_opNorm_rect` — private theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:274`
        ◆ `matrixEntryCLM` — private def · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:299`
    ★ `matrix_integral_apply_of_integrable` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:309`  _(also used by 7: matrix_integral_eq_zero_of_hasZeroMean, matrix_integral_posDef_of_ae, matrix_trace_integral_of_integrable, …)_
    ★ `matrix_log_integral_rep` — theorem · `Statlib/HighDim/MatrixAnalysis/MatrixLogIntegralRep.lean:8`
      ★ `lieb_ruskai_conj_inv_jointly_convex` — theorem · `Statlib/HighDim/MatrixAnalysis/LiebRuskaiConjInvJointlyConvex.lean:7`
    ★ `matrix_integral_posSemidef_of_ae` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:334`  _(also used by 4: matrix_integral_posDef_of_ae, matrix_integral_sub_posSemidef_of_ae, matrix_laplace_one_step_of_trace_exp_add_le, …)_
    ★ `op_convex_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/OperatorConvexMulLog.lean:14`
    ★ `real_log_matrix_isHermitian_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:89`  _(also used by 4: matrix_lieb_one_step_trace, quantumRelativeEntropy_eq_perspectiveInner, perspectiveInner_jointConvex, …)_
    ★ `real_matrix_exp_log_of_posDef` — theorem · `Statlib/HighDim/MatrixAnalysis/TraceExp.lean:94`  _(also used by 2: matrix_lieb_one_step_trace, quantumRelativeEntropy_eq_perspectiveInner)_
  ★ `hansen_pedersen_jensen_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/HansenPedersenJensenMulLog.lean:28`  _(also used by 1: perspectiveInner_jointConvex)_
★ `hp_jensen_mul_log` — theorem · `Statlib/HighDim/MatrixAnalysis/HansenPedersenJensenMulLog.lean:1300` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ matrix_integrable_of_entry_integrable"]
  n1["★ matrix_entry_abs_le_l2_opNorm_rect"]
  n2["◆ matrixEntryCLM"]
  n3["★ matrix_integral_apply_of_integrable"]
  n4["★ matrix_log_integral_rep"]
  n5["★ lieb_ruskai_conj_inv_jointly_convex"]
  n6["★ matrix_integral_posSemidef_of_ae"]
  n7["★ op_convex_mul_log"]
  n8["★ real_log_matrix_isHermitian_of_posDef"]
  n9["★ real_matrix_exp_log_of_posDef"]
  n10["★ hansen_pedersen_jensen_mul_log"]
  n11["★ hp_jensen_mul_log"]
  n2 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n6 --> n3
  n6 --> n2
  n7 --> n4
  n7 --> n5
  n7 --> n6
  n10 --> n7
  n10 --> n8
  n10 --> n9
  n10 --> n4
  n10 --> n3
  n10 --> n6
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
