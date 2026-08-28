# Proof narrative — hilbertCovarianceForm_integrability_bridge

Root: **hilbertCovarianceForm_integrability_bridge** (theorem) `Statlib/StatFoundation/RandomVariable/HilbertValue/Covariance.lean:39` · topic `StatFoundation`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `hilbertMean` — noncomputable def · `Statlib/StatFoundation/RandomVariable/HilbertValue/Vocabulary.lean:22`  _(also used by 4: meanEstimator_unbiased, meanEstimator_l2_error, meanEstimator_pointwise_holder, …)_
  ◆ `centeredHilbertRV` — noncomputable def · `Statlib/StatFoundation/RandomVariable/HilbertValue/Vocabulary.lean:26`  _(also used by 2: hilbertCovarianceForm_self_nonneg, hilbertCovarianceForm)_
★ `hilbertCovarianceForm_integrability_bridge` — theorem · `Statlib/StatFoundation/RandomVariable/HilbertValue/Covariance.lean:39` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ hilbertMean"]
  n1["◆ centeredHilbertRV"]
  n2["★ hilbertCovarianceForm_integrability_bridge"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
