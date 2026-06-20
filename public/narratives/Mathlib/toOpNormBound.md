# Proof narrative — toOpNormBound

Root: **toOpNormBound** (noncomputable def) `Statlib/Mathlib/ProbabilityTheory/CoxCovOpNormBound.lean:194` · topic `Mathlib`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxFrobeniusL2Bound` — structure · `Statlib/Mathlib/ProbabilityTheory/CoxCovOpNormBound.lean:141`  _(also used by 2: ofZeroDifference, CoxIIDBundle)_
  ▣ `OpNormBoundFromExpectation` — structure · `Statlib/Mathlib/ProbabilityTheory/RandomMatrixOpNorm.lean:147`  _(also used by 4: OpNormBoundFromExpectation.tendsto_in_prob, OpNormBoundFromExpectation.toCovDiffSq, OpNormBoundFromExpectation.toCovDiffSq_nonneg, …)_
  · `sq_M_pos` — lemma · `Statlib/Mathlib/ProbabilityTheory/CoxCovOpNormBound.lean:171`
◆ `toOpNormBound` — noncomputable def · `Statlib/Mathlib/ProbabilityTheory/CoxCovOpNormBound.lean:194` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxFrobeniusL2Bound"]
  n1["▣ OpNormBoundFromExpectation"]
  n2["· sq_M_pos"]
  n3["◆ toOpNormBound"]
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
