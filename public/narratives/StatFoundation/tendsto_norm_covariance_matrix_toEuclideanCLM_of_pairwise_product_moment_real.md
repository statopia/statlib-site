# Proof narrative — tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real

Root: **tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1152` · topic `StatFoundation`
Closure: 7 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ★ `tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:958`
        ★ `tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:916`  _(also used by 1: tendsto_norm_sub_matrix_toEuclideanCLM_zero_of_forall_entries_real)_
      ★ `tendsto_matrix_toEuclideanCLM_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:974`  _(also used by 1: tendsto_secondMoment_matrix_toEuclideanCLM_of_pairwise_integral_mul_real)_
    ★ `tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1006`  _(also used by 4: tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_covarianceBilin_map_toLp_apply_of_pairwise_covariance_real, tendsto_inner_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real, …)_
  ★ `tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1061`
  ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_cross_covariance_matrix_of_pairwise_product_moment_real, tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real, …)_
★ `tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1152` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ tendsto_matrix_toEuclideanCLM_of_l2_opNorm_sub_zero_real"]
  n1["★ tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real"]
  n2["★ tendsto_matrix_toEuclideanCLM_of_forall_entries_real"]
  n3["★ tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real"]
  n4["★ tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_covariance_real"]
  n5["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n6["★ tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
