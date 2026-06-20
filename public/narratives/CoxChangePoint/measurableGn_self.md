# Proof narrative — measurableGn_self

Root: **measurableGn_self** (lemma) `Statlib/CoxChangePoint/PopulationObjective.lean:171` · topic `CoxChangePoint`
Closure: 14 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 34: TruncSample, benchmark_obs, coxScoreAt, …)_
  ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 20: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 65: liftAuto, concreteGn, buildLemmaS1Data, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
  ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 15: LemmaS1Data, concreteGn, buildLemmaS1Data, …)_
  ◆ `MeasurableGn` — def · `Statlib/CoxChangePoint/PopulationObjective.lean:166`
    · `Gn_self_eq_zero` — lemma · `Statlib/CoxChangePoint/Foundation.lean:118`  _(also used by 1: populationObjective_self_zero)_
    ◆ `realize` — def · `Statlib/CoxChangePoint/Foundation.lean:135`  _(also used by 11: CoxLANExpansionHypothesis, coxLogRatio, toLANExpansion, …)_
  · `sample_Gn_self_eq_zero` — lemma · `Statlib/CoxChangePoint/PopulationObjective.lean:81`  _(also used by 1: empiricalGap_self_zero)_
· `measurableGn_self` — lemma · `Statlib/CoxChangePoint/PopulationObjective.lean:171` **← headline**

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
  n9["◆ MeasurableGn"]
  n10["· Gn_self_eq_zero"]
  n11["◆ realize"]
  n12["· sample_Gn_self_eq_zero"]
  n13["· measurableGn_self"]
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
  n10 --> n0
  n10 --> n2
  n10 --> n8
  n11 --> n1
  n11 --> n0
  n12 --> n1
  n12 --> n2
  n12 --> n8
  n12 --> n10
  n12 --> n11
  n13 --> n1
  n13 --> n2
  n13 --> n9
  n13 --> n8
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
