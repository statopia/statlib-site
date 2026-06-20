# Proof narrative — entropy_sq_nonneg_of_integrable

Root: **entropy_sq_nonneg_of_integrable** (lemma) `Statlib/Entropy/LogSobolev.lean:158` · topic `Entropy`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 21: SatisfiesLSI, condEntropyAt, entropy_eq_integral_mul_log_of_integral_eq_one, …)_
  · `entropy_nonneg_of_density` — lemma · `Statlib/Entropy/Basic.lean:154`
· `entropy_sq_nonneg_of_integrable` — lemma · `Statlib/Entropy/LogSobolev.lean:158` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ entropy"]
  n1["· entropy_nonneg_of_density"]
  n2["· entropy_sq_nonneg_of_integrable"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
