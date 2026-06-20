# Proof narrative — mgf_add_const

Root: **mgf_add_const** (lemma) `Statlib/HDStats/mgf_add_const.lean:16` · topic `HDStats`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `HasSubExpMGF` — def · `Statlib/HDStats/HasSubExpMGF.lean:16`  _(also used by 6: bernstein_tail, const_smul, integrable_exp_mul, …)_
  · `mgf_le` — lemma · `Statlib/HDStats/mgf_le.lean:11`  _(also used by 1: bernstein_tail)_
· `mgf_add_const` — lemma · `Statlib/HDStats/mgf_add_const.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ HasSubExpMGF"]
  n1["· mgf_le"]
  n2["· mgf_add_const"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
