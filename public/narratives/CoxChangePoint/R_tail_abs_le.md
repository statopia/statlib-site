# Proof narrative — R_tail_abs_le

Root: **R_tail_abs_le** (theorem) `Statlib/CoxChangePoint/RemainderTailOp.lean:77` · topic `CoxChangePoint`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `R_tail` — def · `Statlib/CoxChangePoint/RemainderTailOp.lean:33`
  ★ `s3_cauchy_schwarz_tail` — theorem · `Statlib/CoxChangePoint/S3CauchySchwarzTail.lean:22`
★ `R_tail_abs_le` — theorem · `Statlib/CoxChangePoint/RemainderTailOp.lean:77` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ R_tail"]
  n1["★ s3_cauchy_schwarz_tail"]
  n2["★ R_tail_abs_le"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
