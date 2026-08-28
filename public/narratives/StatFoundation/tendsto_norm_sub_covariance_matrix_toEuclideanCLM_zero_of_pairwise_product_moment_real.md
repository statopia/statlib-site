# Proof narrative — tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real

Root: **tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1119` · topic `StatFoundation`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ★ `tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:916`  _(also used by 1: tendsto_matrix_toEuclideanCLM_of_forall_entries_real)_
    ★ `tendsto_norm_sub_matrix_toEuclideanCLM_zero_of_forall_entries_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:989`  _(also used by 1: tendsto_norm_sub_secondMoment_matrix_toEuclideanCLM_zero_of_pairwise_integral_mul_real)_
  ★ `tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1033`  _(also used by 1: tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_forall_inLpConvergence_two_real)_
  ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_cross_covariance_matrix_of_pairwise_product_moment_real, tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, …)_
★ `tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:1119` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ tendsto_matrix_l2_opNorm_sub_zero_of_forall_entries_real"]
  n1["★ tendsto_norm_sub_matrix_toEuclideanCLM_zero_of_forall_entries_real"]
  n2["★ tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_covariance_real"]
  n3["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n4["★ tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real"]
  n1 --> n0
  n2 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
