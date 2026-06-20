# Proof narrative — expectedExpG_nonneg

Root: **expectedExpG_nonneg** (lemma) `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:90` · topic `CoxChangePoint`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 40: TruncSample, benchmark_obs, coxScoreAt, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 70: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 18: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
  ◆ `expectedExpG` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:84`  _(also used by 1: populationObjectiveCoxFormula)_
· `expectedExpG_nonneg` — lemma · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:90` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["▣ CoxParam"]
  n2["◆ g"]
  n3["◆ expectedExpG"]
  n4["· expectedExpG_nonneg"]
  n2 --> n1
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
