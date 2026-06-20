# Proof narrative — buildLemmaS1Data

Root: **buildLemmaS1Data** (noncomputable def) `Statlib/CoxChangePoint/Bridge.lean:54` · topic `CoxChangePoint`
Closure: 16 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Assumptions` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:37`  _(also used by 1: uniform_convergence_of_Gn)_
    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 36: benchmark_obs, coxScoreAt, coxScoreAt_dim_match, …)_
  ◆ `TruncSample` — def · `Statlib/CoxChangePoint/Bridge.lean:39`
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 66: benchmark_, benchmark_consistency_trivially_true, benchmark_convergesInProbability, …)_
    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:29`
  ◆ `paramSpace` — def · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:70`
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
  ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 16: CoxBaselineHypotheses, CoxBaselineHypotheses.hArgmax_from_MLE, CoxBaselineHypotheses.hUnif_from_VW_2_14_9, …)_
    ◆ `liftAuto` — def · `Statlib/CoxChangePoint/Bridge.lean:30`
  ◆ `concreteGn` — noncomputable def · `Statlib/CoxChangePoint/Bridge.lean:44`
  ▣ `LemmaS1Data` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:84`  _(also used by 1: uniform_convergence_of_Gn)_
◆ `buildLemmaS1Data` — noncomputable def · `Statlib/CoxChangePoint/Bridge.lean:54` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Assumptions"]
  n1["▣ CoxObs"]
  n2["◆ TruncSample"]
  n3["▣ CoxParam"]
  n4["▣ CoxParam"]
  n5["◆ paramSpace"]
  n6["◆ g"]
  n7["◆ atRisk"]
  n8["◆ expG"]
  n9["◆ riskSum"]
  n10["◆ logPartialLikelihood"]
  n11["◆ Gn"]
  n12["◆ liftAuto"]
  n13["◆ concreteGn"]
  n14["▣ LemmaS1Data"]
  n15["◆ buildLemmaS1Data"]
  n2 --> n0
  n2 --> n1
  n5 --> n0
  n5 --> n4
  n6 --> n3
  n6 --> n1
  n7 --> n1
  n8 --> n3
  n8 --> n1
  n8 --> n6
  n9 --> n1
  n9 --> n3
  n9 --> n7
  n9 --> n8
  n10 --> n1
  n10 --> n3
  n10 --> n6
  n10 --> n9
  n11 --> n1
  n11 --> n3
  n11 --> n10
  n12 --> n3
  n13 --> n0
  n13 --> n2
  n13 --> n3
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n11
  n14 --> n4
  n14 --> n5
  n15 --> n0
  n15 --> n2
  n15 --> n3
  n15 --> n5
  n15 --> n13
  n15 --> n14
  n15 --> n11
  class n15 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
