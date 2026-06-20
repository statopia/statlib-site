# Proof narrative — condEntropyAt_nonneg

Root: **condEntropyAt_nonneg** (lemma) `Statlib/Entropy/Basic.lean:187` · topic `Entropy`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 21: SatisfiesLSI, entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, …)_
  ◆ `condEntropyAt` — def · `Statlib/Entropy/Basic.lean:77`  _(also used by 18: condEntropyAt_eq, condEntropyAt_le_of_satisfiesLSI, integrable_condEntropyAt_of_nonneg, …)_
· `condEntropyAt_nonneg` — lemma · `Statlib/Entropy/Basic.lean:187` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ entropy"]
  n1["◆ condEntropyAt"]
  n2["· condEntropyAt_nonneg"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
