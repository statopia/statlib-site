# Proof narrative — populationObjectiveCoxFormula_self_zero

Root: **populationObjectiveCoxFormula_self_zero** (lemma) `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:118` · topic `CoxChangePoint`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 39: TruncSample, benchmark_obs, coxScoreAt, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 69: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
    ◆ `expectedExpG` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:84`  _(also used by 1: expectedExpG_nonneg)_
  ◆ `populationObjectiveCoxFormula` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:111`
· `populationObjectiveCoxFormula_self_zero` — lemma · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:118` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["▣ CoxParam"]
  n2["◆ g"]
  n3["◆ expectedExpG"]
  n4["◆ populationObjectiveCoxFormula"]
  n5["· populationObjectiveCoxFormula_self_zero"]
  n2 --> n1
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
