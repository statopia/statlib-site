# Proof narrative — riskSum_nonneg

Root: **riskSum_nonneg** (lemma) `Statlib/CoxChangePoint/Foundation.lean:97` · topic `CoxChangePoint`
Closure: 8 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 37: TruncSample, benchmark_obs, coxScoreAt, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 68: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
      ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 18: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
    ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
  ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: logPartialLikelihood, meanZ, meanAlphaInRiskSet, …)_
  · `expG_pos` — lemma · `Statlib/CoxChangePoint/Foundation.lean:78`
· `riskSum_nonneg` — lemma · `Statlib/CoxChangePoint/Foundation.lean:97` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["▣ CoxParam"]
  n2["◆ atRisk"]
  n3["◆ g"]
  n4["◆ expG"]
  n5["◆ riskSum"]
  n6["· expG_pos"]
  n7["· riskSum_nonneg"]
  n2 --> n0
  n3 --> n1
  n3 --> n0
  n4 --> n1
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  n6 --> n1
  n6 --> n0
  n6 --> n4
  n7 --> n0
  n7 --> n1
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
