# Proof narrative — tendsto_covarianceBilin_map_toLp_apply_of_pairwise_product_moment_real

Root: **tendsto_covarianceBilin_map_toLp_apply_of_pairwise_product_moment_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1364` · topic `StatFoundation`
Closure: 9 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `tendsto_inner_continuousLinearMap_apply_of_tendsto_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1190`  _(also used by 2: tendsto_inner_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real, tendsto_inner_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real)_
        ★ `tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:958`
        ★ `tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:916`  _(also used by 1: tendsto_norm_sub_matrix_toEuclideanCLM_zero_of_forall_entries_real)_
      ★ `tendsto_matrix_toEuclideanCLM_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:974`  _(also used by 1: tendsto_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real)_
    ★ `tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1006`  _(also used by 4: tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real, tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_inner_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real, …)_
    ★ `inner_covariance_matrix_toEuclideanCLM_eq_covarianceBilin_map_toLp_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1223`
  ★ `tendsto_covarianceBilin_map_toLp_apply_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1267`  _(also used by 1: tendsto_covarianceBilin_map_toLp_apply_of_forall_inLpConvergence_two_real)_
  ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_cross_covariance_matrix_of_pairwise_product_moment_real, tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real, …)_
★ `tendsto_covarianceBilin_map_toLp_apply_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1364` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ tendsto_inner_continuousLinearMap_apply_of_tendsto_real"]
  n1["★ tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real"]
  n2["★ tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real"]
  n3["★ tendsto_matrix_toEuclideanCLM_of_forall_entries_real"]
  n4["★ tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real"]
  n5["★ inner_covariance_matrix_toEuclideanCLM_eq_covarianceBilin_map_toLp_real"]
  n6["★ tendsto_covarianceBilin_map_toLp_apply_of_pairwise_covariance_real"]
  n7["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n8["★ tendsto_covarianceBilin_map_toLp_apply_of_pairwise_product_moment_real"]
  n3 --> n1
  n3 --> n2
  n4 --> n3
  n6 --> n0
  n6 --> n4
  n6 --> n5
  n8 --> n6
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
