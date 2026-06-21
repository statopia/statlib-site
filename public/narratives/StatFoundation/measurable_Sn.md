# Proof narrative — measurable_Sn

Root: **measurable_Sn** (lemma) `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:32` · topic `StatFoundation`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `standardizedSum` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:21`  _(also used by 2: iid_central_limit_theorem, central_limit_theorem)_
  ◆ `Sn` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:29`
  · `measurable_standardizedSum` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:24`  _(also used by 2: iid_central_limit_theorem, central_limit_theorem)_
· `measurable_Sn` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:32` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ standardizedSum"]
  n1["◆ Sn"]
  n2["· measurable_standardizedSum"]
  n3["· measurable_Sn"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
