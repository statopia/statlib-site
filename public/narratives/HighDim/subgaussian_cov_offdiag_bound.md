# Proof narrative — subgaussian_cov_offdiag_bound

Root: **subgaussian_cov_offdiag_bound** (lemma) `Statlib/HighDim/CovarianceMatrix/Properties.lean:353` · topic `HighDim`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 77: decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, decoupledOffDiagQuadForm_prod_first_section_abs_tail_real, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 20: cov_diagonal_concentration, cov_quadratic_deviation, cov_trace_concentration, …)_
  · `subgaussian_variance_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:142`  _(also used by 1: subgaussian_rip_tail_anisotropic)_
· `subgaussian_cov_offdiag_bound` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:353` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsSubGaussianVector"]
  n1["▣ HasCovarianceMatrix"]
  n2["· subgaussian_variance_bound"]
  n3["· subgaussian_cov_offdiag_bound"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
