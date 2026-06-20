# Proof narrative — tDistMeasure

Root: **tDistMeasure** (def) `Statlib/Distribution/tDistMeasure.lean:16` · topic `Distribution`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `tDistPDFReal` — def · `Statlib/Distribution/tDistPDFReal.lean:16`  _(also used by 4: measurable_tDistPDFReal, tDistPDFReal_neg, tDistPDFReal_nonneg, …)_
  ◆ `tDistPDF` — def · `Statlib/Distribution/tDistPDF.lean:16`
◆ `tDistMeasure` — def · `Statlib/Distribution/tDistMeasure.lean:16` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ tDistPDFReal"]
  n1["◆ tDistPDF"]
  n2["◆ tDistMeasure"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
