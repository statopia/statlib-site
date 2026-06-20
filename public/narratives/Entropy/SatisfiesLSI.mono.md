# Proof narrative — SatisfiesLSI.mono

Root: **SatisfiesLSI.mono** (lemma) `Statlib/Entropy/Basic.lean:233` · topic `Entropy`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 21: condEntropyAt, entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, …)_
  ◆ `SatisfiesLSI` — def · `Statlib/Entropy/Basic.lean:42`  _(also used by 12: TensorizationLSIAt, SatisfiesLSI.apply, tensorization_lsi, …)_
· `SatisfiesLSI.mono` — lemma · `Statlib/Entropy/Basic.lean:233` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ entropy"]
  n1["◆ SatisfiesLSI"]
  n2["· SatisfiesLSI.mono"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
