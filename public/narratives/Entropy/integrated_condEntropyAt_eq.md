# Proof narrative — integrated_condEntropyAt_eq

Root: **integrated_condEntropyAt_eq** (private lemma) `Statlib/Entropy/LogSobolev.lean:3433` · topic `Entropy`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 21: SatisfiesLSI, entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, …)_
  ◆ `condEntropyAt` — def · `Statlib/Entropy/Basic.lean:77`  _(also used by 18: condEntropyAt_eq, condEntropyAt_nonneg, condEntropyAt_le_of_satisfiesLSI, …)_
  · `integral_condExpect_eq_integral_pi` — private lemma · `Statlib/Entropy/LogSobolev.lean:3260`  _(also used by 5: entropy_chain_rule_pi, jensen_condExpect_integral_le, integrated_condEntropyAt_condExpect_le, …)_
· `integrated_condEntropyAt_eq` — private lemma · `Statlib/Entropy/LogSobolev.lean:3433` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ entropy"]
  n1["◆ condEntropyAt"]
  n2["· integral_condExpect_eq_integral_pi"]
  n3["· integrated_condEntropyAt_eq"]
  n1 --> n0
  n3 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
