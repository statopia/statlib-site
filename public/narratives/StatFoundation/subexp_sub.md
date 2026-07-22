# Proof narrative — subexp_sub

Root: **subexp_sub** (theorem) `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_closure.lean:578` · topic `StatFoundation`
Closure: 5 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 29: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
    · `subexponential_mgf_const_mul` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexponential_mgf_const_mul.lean:12`
  ★ `subexp_const_mul` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_closure.lean:42`
  ★ `subexp_add` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_closure.lean:105`
★ `subexp_sub` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_closure.lean:578` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ HasSubexponentialMGF"]
  n1["· subexponential_mgf_const_mul"]
  n2["★ subexp_const_mul"]
  n3["★ subexp_add"]
  n4["★ subexp_sub"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
