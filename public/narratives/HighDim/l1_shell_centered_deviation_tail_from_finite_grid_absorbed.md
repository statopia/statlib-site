# Proof narrative — l1_shell_centered_deviation_tail_from_finite_grid_absorbed

Root: **l1_shell_centered_deviation_tail_from_finite_grid_absorbed** (lemma) `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:769` · topic `HighDim`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l1Norm` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:17`  _(also used by 201: l1_linear_rademacher_complexity_bound, finite_l1_quadratic_rademacher_coord_bound, finite_l1_quadratic_rademacher_coord_energy_bound, …)_
  ◆ `l2NormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:13`  _(also used by 218: matrixRowVec_norm_sq, offDiagCoeffVec_norm_sq_le_frobenius, offDiagCoeffVec_norm_sq_integral_le_frobenius, …)_
    · `l1_shell_centered_deviation_subset_finite_grid` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:650`
    · `finite_grid_centered_deviation_tail` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:586`  _(also used by 1: l1_shell_localized_centered_deviation_tail_from_finite_grid)_
  · `l1_shell_centered_deviation_tail_from_finite_grid` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:700`
· `l1_shell_centered_deviation_tail_from_finite_grid_absorbed` — lemma · `Statlib/HighDim/CovarianceMatrix/L1QuadraticProcess.lean:769` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l1Norm"]
  n1["◆ l2NormSq"]
  n2["· l1_shell_centered_deviation_subset_finite_grid"]
  n3["· finite_grid_centered_deviation_tail"]
  n4["· l1_shell_centered_deviation_tail_from_finite_grid"]
  n5["· l1_shell_centered_deviation_tail_from_finite_grid_absorbed"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
