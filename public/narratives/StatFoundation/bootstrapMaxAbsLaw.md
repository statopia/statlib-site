# Proof narrative — bootstrapMaxAbsLaw

Root: **bootstrapMaxAbsLaw** (noncomputable def) `Statlib/StatFoundation/Vocabulary/Resampling.lean:70` · topic `StatFoundation`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `maxAbsCoord` — noncomputable def · `Statlib/StatFoundation/Vocabulary/MaxType.lean:39`  _(also used by 5: maxAbsCoord_measurable, maxAbsCoord_lipschitz, tendstoInDistribution_maxAbsCoord_of_tendstoInDistribution, …)_
  ◆ `multiplierSumVec` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Resampling.lean:55`  _(also used by 6: bootstrapMaxLaw_isProbabilityMeasure, multiplierSumVec_mean_zero, multiplierSumVec_covariance_eq_sampleGram, …)_
◆ `bootstrapMaxAbsLaw` — noncomputable def · `Statlib/StatFoundation/Vocabulary/Resampling.lean:70` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ maxAbsCoord"]
  n1["◆ multiplierSumVec"]
  n2["◆ bootstrapMaxAbsLaw"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
