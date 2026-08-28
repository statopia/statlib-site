# Proof narrative — tendsto_covariance_matrix_of_pairwise_product_moment_real

Root: **tendsto_covariance_matrix_of_pairwise_product_moment_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:744` · topic `StatFoundation`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ★ `tendsto_cross_covariance_matrix_of_pairwise_covariance_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:628`  _(also used by 2: tendsto_covariance_matrix_of_pairwise_covariance_real, tendsto_cross_covariance_matrix_of_forall_inProbabilityConvergence_of_isUniformIntegrableInLp_two_real)_
    ★ `tendsto_covariance_of_tendsto_integral_mul_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:371`  _(also used by 7: tendsto_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, tendsto_norm_sub_covariance_matrix_toEuclideanCLM_zero_of_pairwise_product_moment_real, tendsto_norm_covariance_matrix_toEuclideanCLM_of_pairwise_product_moment_real, …)_
  ★ `tendsto_cross_covariance_matrix_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:709`  _(also used by 1: tendsto_cross_covariance_matrix_of_forall_inLpConvergence_two_real)_
★ `tendsto_covariance_matrix_of_pairwise_product_moment_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:744` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ tendsto_cross_covariance_matrix_of_pairwise_covariance_real"]
  n1["★ tendsto_covariance_of_tendsto_integral_mul_real"]
  n2["★ tendsto_cross_covariance_matrix_of_pairwise_product_moment_real"]
  n3["★ tendsto_covariance_matrix_of_pairwise_product_moment_real"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
