# Proof narrative — thresholdedMatrix_abs_le

Root: **thresholdedMatrix_abs_le** (lemma) `Statlib/HDStats/thresholdedMatrix_abs_le.lean:12` · topic `HDStats`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `hardThreshold` — noncomputable def · `Statlib/HDStats/hardThreshold.lean:13`  _(also used by 4: hardThreshold_above_threshold, hardThreshold_below_threshold, hardThreshold_idempotent, …)_
  ◆ `thresholdedMatrix` — noncomputable def · `Statlib/HDStats/thresholdedMatrix.lean:13`  _(also used by 2: thresholdedMatrix_eq_of_large, thresholdedMatrix_eq_zero_of_small)_
  · `hardThreshold_abs_le` — lemma · `Statlib/HDStats/hardThreshold_abs_le.lean:11`
· `thresholdedMatrix_abs_le` — lemma · `Statlib/HDStats/thresholdedMatrix_abs_le.lean:12` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ hardThreshold"]
  n1["◆ thresholdedMatrix"]
  n2["· hardThreshold_abs_le"]
  n3["· thresholdedMatrix_abs_le"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
