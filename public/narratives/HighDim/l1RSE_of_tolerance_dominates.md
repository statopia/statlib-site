# Proof narrative — l1RSE_of_tolerance_dominates

Root: **l1RSE_of_tolerance_dominates** (theorem) `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:16` · topic `HighDim`
Closure: 8 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 217: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ◆ `IsInCone` — def · `Statlib/HighDim/Vocabulary/Sparse.lean:49`  _(also used by 12: rip_implies_uniformRE, lasso_cone_condition, lasso_oracle_prediction_of_supportRE, …)_
      ▣ `SatisfiesRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:84`  _(also used by 8: lasso_oracle_prediction, lasso_oracle_l1, lasso_oracle_support_l2, …)_
    ▣ `SatisfiesUniformRE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:118`  _(also used by 10: rip_implies_uniformRE, lasso_oracle_prediction_of_uniformRE, lasso_oracle_l1_of_uniformRE, …)_
  ▣ `SatisfiesL1RSE` — structure · `Statlib/HighDim/Vocabulary/DesignMatrix.lean:159`  _(also used by 11: l1RSE_of_half_covariance_l1_lower, l1RSE_probability_from_lower_event, subgaussian_design_l1RSE_from_final_tau_eps_cover_budget_named_event, …)_
  ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 203: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
  · `l2NormSq_le_l1Norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 3: quadratic_remainder_abs_from_bilinear_l2_tail, l1_shell_l2NormSq_pos_le_one, l1_shell_dyadic_endpoint_cover_from_finite_interval)_
★ `l1RSE_of_tolerance_dominates` — theorem · `Statlib/HighDim/Regression/L1RSEFromCovariance.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["◆ IsInCone"]
  n2["▣ SatisfiesRE"]
  n3["▣ SatisfiesUniformRE"]
  n4["▣ SatisfiesL1RSE"]
  n5["◆ l1Norm"]
  n6["· l2NormSq_le_l1Norm_sq"]
  n7["★ l1RSE_of_tolerance_dominates"]
  n2 --> n1
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  n6 --> n0
  n6 --> n5
  n7 --> n4
  n7 --> n0
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
