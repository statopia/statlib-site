# Proof narrative — secondMoment_eq_cov_centered

Root: **secondMoment_eq_cov_centered** (lemma) `Statlib/HighDim/CovarianceMatrix/Properties.lean:115` · topic `HighDim`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 60: coord_mul_integral_eq_zero_of_indep, offDiagQuadForm_integral_eq_zero_of_indep, offDiagQuadForm_centered_eq_self_of_indep, …)_
  ▣ `HasCovarianceMatrix` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:101`  _(also used by 18: cov_quadratic_deviation, secondMoment_isSymm, secondMoment_posSemidef, …)_
· `secondMoment_eq_cov_centered` — lemma · `Statlib/HighDim/CovarianceMatrix/Properties.lean:115` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasMean"]
  n1["▣ HasCovarianceMatrix"]
  n2["· secondMoment_eq_cov_centered"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
