# Proof narrative — standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded

Root: **standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded** (lemma) `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:74` · topic `StatFoundation`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 48: memLp_aeval_intPolynomial_standard, integrable_aeval_intPolynomial_standard, memLp_hermite_eval_mul, …)_
    · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:114`
  · `memLp_pow_id_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:139`  _(also used by 4: standardReal_integrationByParts_smooth_bddDeriv, standardReal_ou_mehler_log_growth_local_pos, standardReal_ou_mehler_generator_pos, …)_
· `standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:74` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ standardReal"]
  n1["· memLp_pow_id_gaussianReal_aux"]
  n2["· memLp_pow_id_gaussianReal"]
  n3["· standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
