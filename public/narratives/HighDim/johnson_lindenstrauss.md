# Proof narrative — johnson_lindenstrauss

Root: **johnson_lindenstrauss** (theorem) `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:726` · topic `HighDim`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 53: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      · `euclidean_norm_sq` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:21`  _(also used by 14: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
      ★ `subgaussian_exp_sq_le` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le.lean:22`
      ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 31: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
      ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, diag_hanson_wright_tail_high, cov_trace_concentration, …)_
    ★ `jl_single_pair` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:48`
  ★ `jl_distortion_probabilistic` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:526`
★ `johnson_lindenstrauss` — theorem · `Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean:726` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l2NormSq"]
  n1["· euclidean_norm_sq"]
  n2["★ subgaussian_exp_sq_le"]
  n3["▣ HasSubexponentialMGF"]
  n4["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n5["★ jl_single_pair"]
  n6["★ jl_distortion_probabilistic"]
  n7["★ johnson_lindenstrauss"]
  n1 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n5
  n7 --> n0
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
