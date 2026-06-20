# Proof narrative — empiricalGap_eq

Root: **empiricalGap_eq** (lemma) `Statlib/CoxChangePoint/PopulationObjective.lean:110` · topic `CoxChangePoint`
Closure: 12 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 36: TruncSample, benchmark_obs, coxScoreAt, …)_
  ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 21: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 66: liftAuto, concreteGn, buildLemmaS1Data, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
  ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 16: LemmaS1Data, concreteGn, buildLemmaS1Data, …)_
    ◆ `populationObjective` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjective.lean:61`  _(also used by 1: populationObjective_self_zero)_
  ◆ `empiricalGap` — noncomputable def · `Statlib/CoxChangePoint/PopulationObjective.lean:93`  _(also used by 3: empiricalGap_self_zero, supEmpiricalGap, supEmpiricalGap_nonneg_of_bddAbove)_
· `empiricalGap_eq` — lemma · `Statlib/CoxChangePoint/PopulationObjective.lean:110` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["◆ Sample"]
  n2["▣ CoxParam"]
  n3["◆ g"]
  n4["◆ atRisk"]
  n5["◆ expG"]
  n6["◆ riskSum"]
  n7["◆ logPartialLikelihood"]
  n8["◆ Gn"]
  n9["◆ populationObjective"]
  n10["◆ empiricalGap"]
  n11["· empiricalGap_eq"]
  n1 --> n0
  n3 --> n2
  n3 --> n0
  n4 --> n0
  n5 --> n2
  n5 --> n0
  n5 --> n3
  n6 --> n0
  n6 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n0
  n7 --> n2
  n7 --> n3
  n7 --> n6
  n8 --> n0
  n8 --> n2
  n8 --> n7
  n9 --> n1
  n9 --> n2
  n9 --> n8
  n10 --> n1
  n10 --> n2
  n10 --> n8
  n10 --> n9
  n11 --> n1
  n11 --> n2
  n11 --> n10
  n11 --> n8
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
