# Proof narrative — entropy_eq_two_integral_sq_log_abs

Root: **entropy_eq_two_integral_sq_log_abs** (lemma) `Statlib/Entropy/LogSobolev.lean:141` · topic `Entropy`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 22: SatisfiesLSI, condEntropyAt, entropy_eq_integral_mul_log_of_integral_eq_one, …)_
    · `log_sq_eq_two_mul_log_abs` — lemma · `Statlib/Entropy/LogSobolev.lean:106`
  · `sq_mul_log_sq_eq` — lemma · `Statlib/Entropy/LogSobolev.lean:112`
· `entropy_eq_two_integral_sq_log_abs` — lemma · `Statlib/Entropy/LogSobolev.lean:141` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ entropy"]
  n1["· log_sq_eq_two_mul_log_abs"]
  n2["· sq_mul_log_sq_eq"]
  n3["· entropy_eq_two_integral_sq_log_abs"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
