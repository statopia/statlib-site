# Proof narrative — hoeffding_lemma

Root: **hoeffding_lemma** (theorem) `Statlib/EmpiricalProcess/HoeffdingLemma.lean:32` · topic `EmpiricalProcess`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `exp_convex_bound'` — private lemma · `Statlib/EmpiricalProcess/HoeffdingLemma.lean:13`
  ★ `hoeffding_cosh_bound` — theorem · `Statlib/EmpiricalProcess/Chaining.lean:159`
★ `hoeffding_lemma` — theorem · `Statlib/EmpiricalProcess/HoeffdingLemma.lean:32` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· exp_convex_bound'"]
  n1["★ hoeffding_cosh_bound"]
  n2["★ hoeffding_lemma"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
