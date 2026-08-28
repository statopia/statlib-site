# Proof narrative — tendsto_covariance_matrix_of_forall_inLpConvergence_two_real

Root: **tendsto_covariance_matrix_of_forall_inLpConvergence_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2303` · topic `StatFoundation`
Closure: 12 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 61: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
      ★ `tendsto_cross_covariance_matrix_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:628`  _(also used by 2: tendsto_covariance_matrix_of_pairwise_covariance_real, tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real)_
      ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real, tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, …)_
    ★ `tendsto_cross_covariance_matrix_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:709`  _(also used by 1: tendsto_covariance_matrix_of_pairwise_product_moment_real)_
      ★ `inLpConvergence_one_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2171`
      ★ `tendsto_integral_of_inLpConvergence_one` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:23`  _(also used by 4: tendsto_integral_sub_zero_of_inLpConvergence_one, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inLpConvergence_one, …)_
    ★ `tendsto_integral_of_inLpConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2188`  _(also used by 2: tendsto_covariance_of_inLpConvergence_two_real, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two)_
        ★ `inLpConvergence_iff_tendsto_Lp_toLp` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1046`  _(also used by 1: inLpConvergence_of_tendsto_Lp_toLp)_
      ★ `tendsto_Lp_toLp_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:1059`
    ★ `tendsto_integral_mul_of_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1941`  _(also used by 4: tendsto_integral_sq_of_inLpConvergence_two_real, tendsto_pairwise_integral_mul_of_forall_inLpConvergence_two_real, tendsto_covariance_of_inLpConvergence_two_real, …)_
  ★ `tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2270`
★ `tendsto_covariance_matrix_of_forall_inLpConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:2303` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InLpConvergence"]
  n1["★ tendsto_cross_covariance_matrix_of_pairwise_covariance_real"]
  n2["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n3["★ tendsto_cross_covariance_matrix_of_pairwise_product_moment_real"]
  n4["★ inLpConvergence_one_of_inLpConvergence_two"]
  n5["★ tendsto_integral_of_inLpConvergence_one"]
  n6["★ tendsto_integral_of_inLpConvergence_two"]
  n7["★ inLpConvergence_iff_tendsto_Lp_toLp"]
  n8["★ tendsto_Lp_toLp_of_inLpConvergence"]
  n9["★ tendsto_integral_mul_of_inLpConvergence_two_real"]
  n10["★ tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real"]
  n11["★ tendsto_covariance_matrix_of_forall_inLpConvergence_two_real"]
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n5 --> n0
  n6 --> n0
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n8 --> n0
  n8 --> n7
  n9 --> n0
  n9 --> n8
  n10 --> n0
  n10 --> n3
  n10 --> n6
  n10 --> n9
  n11 --> n0
  n11 --> n10
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
