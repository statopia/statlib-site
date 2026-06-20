# Proof narrative — bernstein_tail

Root: **bernstein_tail** (lemma) `Statlib/HDStats/bernstein_tail.lean:24` · topic `HDStats`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `HasSubExpMGF` — def · `Statlib/HDStats/HasSubExpMGF.lean:16`  _(also used by 3: const_smul, mgf_add_const, zero)_
  · `nonneg_left` — lemma · `Statlib/HDStats/nonneg_left.lean:11`
  · `nonneg_right` — lemma · `Statlib/HDStats/nonneg_right.lean:11`
  · `integrable_exp_mul` — lemma · `Statlib/HDStats/integrable_exp_mul.lean:11`
  · `mgf_le` — lemma · `Statlib/HDStats/mgf_le.lean:11`  _(also used by 1: mgf_add_const)_
· `bernstein_tail` — lemma · `Statlib/HDStats/bernstein_tail.lean:24` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ HasSubExpMGF"]
  n1["· nonneg_left"]
  n2["· nonneg_right"]
  n3["· integrable_exp_mul"]
  n4["· mgf_le"]
  n5["· bernstein_tail"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
