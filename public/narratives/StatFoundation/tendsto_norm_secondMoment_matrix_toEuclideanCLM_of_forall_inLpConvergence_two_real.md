# Proof narrative — tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real

Root: **tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2064` · topic `StatFoundation`
Closure: 11 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 64: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
        ★ `tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:958`
        ★ `tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:916`  _(also used by 1: tendsto_norm_sub_matrix_toEuclideanCLM_zero_of_forall_entries_real)_
      ★ `tendsto_matrix_toEuclideanCLM_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:974`  _(also used by 1: tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real)_
    ★ `tendsto_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1780`  _(also used by 2: tendsto_inner_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real)_
  ★ `tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1816`
        ★ `inLpConvergence_iff_tendsto_Lp_toLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1046`  _(also used by 1: inLpConvergence_of_tendsto_Lp_toLp)_
      ★ `tendsto_Lp_toLp_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1059`
    ★ `tendsto_integral_mul_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1941`  _(also used by 4: tendsto_integral_sq_of_inLpConvergence_two_real, tendsto_covariance_of_inLpConvergence_two_real, tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real, …)_
  ★ `tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1997`  _(also used by 7: tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real, tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real, tendsto_norm_sub_secondMoment_matrix_toEuclideanCLM_zero_of_forall_inLpConvergence_two_real, …)_
★ `tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2064` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InLpConvergence"]
  n1["★ tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real"]
  n2["★ tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real"]
  n3["★ tendsto_matrix_toEuclideanCLM_of_forall_entries_real"]
  n4["★ tendsto_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real"]
  n5["★ tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real"]
  n6["★ inLpConvergence_iff_tendsto_Lp_toLp"]
  n7["★ tendsto_Lp_toLp_of_inLpConvergence"]
  n8["★ tendsto_integral_mul_of_inLpConvergence_two_real"]
  n9["★ tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real"]
  n10["★ tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real"]
  n3 --> n1
  n3 --> n2
  n4 --> n3
  n5 --> n4
  n6 --> n0
  n7 --> n0
  n7 --> n6
  n8 --> n0
  n8 --> n7
  n9 --> n0
  n9 --> n8
  n10 --> n0
  n10 --> n5
  n10 --> n9
  class n10 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
