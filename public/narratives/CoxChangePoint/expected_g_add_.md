# Proof narrative — expected_g_add_

Root: **expected_g_add_** (theorem) `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:148` · topic `CoxChangePoint`
Closure: 7 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 39: TruncSample, benchmark_obs, coxScoreAt, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 68: liftAuto, concreteGn, buildLemmaS1Data, …)_
  ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 16: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
  ◆ `expected_g` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:78`
    ◆ `CoxParam.with_` — def · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:59`
  · `g_with_` — lemma · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:131`
★ `expected_g_add_` — theorem · `Statlib/CoxChangePoint/PopulationObjectiveConcrete.lean:148` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["▣ CoxParam"]
  n2["◆ g"]
  n3["◆ expected_g"]
  n4["◆ CoxParam.with_"]
  n5["· g_with_"]
  n6["★ expected_g_add_"]
  n2 --> n1
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n1
  n5 --> n1
  n5 --> n0
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
