# Proof narrative — tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real

Root: **tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2013` · topic `StatFoundation`
Closure: 7 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 64: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
  ★ `tendsto_secondMoment_matrix_of_pairwise_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1762`  _(also used by 1: tendsto_secondMoment_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real)_
        ★ `inLpConvergence_iff_tendsto_Lp_toLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1046`  _(also used by 1: inLpConvergence_of_tendsto_Lp_toLp)_
      ★ `tendsto_Lp_toLp_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1059`
    ★ `tendsto_integral_mul_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1941`  _(also used by 4: tendsto_integral_sq_of_inLpConvergence_two_real, tendsto_covariance_of_inLpConvergence_two_real, tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real, …)_
  ★ `tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1997`  _(also used by 7: tendsto_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real, tendsto_norm_sub_secondMoment_matrix_toEuclideanCLM_zero_of_forall_inLpConvergence_two_real, tendsto_norm_secondMoment_matrix_toEuclideanCLM_of_forall_inLpConvergence_two_real, …)_
★ `tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2013` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InLpConvergence"]
  n1["★ tendsto_secondMoment_matrix_of_pairwise_integral_mul_real"]
  n2["★ inLpConvergence_iff_tendsto_Lp_toLp"]
  n3["★ tendsto_Lp_toLp_of_inLpConvergence"]
  n4["★ tendsto_integral_mul_of_inLpConvergence_two_real"]
  n5["★ tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real"]
  n6["★ tendsto_secondMoment_matrix_of_forall_inLpConvergence_two_real"]
  n2 --> n0
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
