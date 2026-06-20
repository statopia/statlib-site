# Proof narrative — integrable_polynomial_mul_gaussianPDFReal

Root: **integrable_polynomial_mul_gaussianPDFReal** (lemma) `Statlib/Gaussian/Basic.lean:160` · topic `Gaussian`
Closure: 5 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 96: TensorizationLSIAt, stdGaussianPi, stdGaussianPi_absolutelyContinuous, …)_
      · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/Gaussian/Basic.lean:112`
    · `memLp_pow_id_gaussianReal` — lemma · `Statlib/Gaussian/Basic.lean:137`  _(also used by 4: ouSemigroup_time_deriv_leibniz, ouSemigroup_lower_bound, ouSemigroup_lower_bound_Ioo, …)_
  · `memLp_polynomial_gaussianReal` — lemma · `Statlib/Gaussian/Basic.lean:142`  _(also used by 2: memLp_aeval_intPolynomial_gaussianReal, integrable_f_mul_realPoly_gaussian)_
· `integrable_polynomial_mul_gaussianPDFReal` — lemma · `Statlib/Gaussian/Basic.lean:160` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ stdGaussian"]
  n1["· memLp_pow_id_gaussianReal_aux"]
  n2["· memLp_pow_id_gaussianReal"]
  n3["· memLp_polynomial_gaussianReal"]
  n4["· integrable_polynomial_mul_gaussianPDFReal"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
