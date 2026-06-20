# Proof narrative — uniform_convergence_of_Gn

Root: **uniform_convergence_of_Gn** (theorem) `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:106` · topic `CoxChangePoint`
Closure: 13 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `Assumptions` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:37`  _(also used by 3: TruncSample, concreteGn, buildLemmaS1Data)_
      ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 37: TruncSample, benchmark_obs, coxScoreAt, …)_
      ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 69: liftAuto, concreteGn, buildLemmaS1Data, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
    ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 18: concreteGn, buildLemmaS1Data, CoxBaselineHypotheses, …)_
    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:29`
    ◆ `paramSpace` — def · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:70`  _(also used by 1: buildLemmaS1Data)_
  ▣ `LemmaS1Data` — structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:84`  _(also used by 1: buildLemmaS1Data)_
★ `uniform_convergence_of_Gn` — theorem · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_Gn.lean:106` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Assumptions"]
  n1["▣ CoxObs"]
  n2["▣ CoxParam"]
  n3["◆ g"]
  n4["◆ atRisk"]
  n5["◆ expG"]
  n6["◆ riskSum"]
  n7["◆ logPartialLikelihood"]
  n8["◆ Gn"]
  n9["▣ CoxParam"]
  n10["◆ paramSpace"]
  n11["▣ LemmaS1Data"]
  n12["★ uniform_convergence_of_Gn"]
  n3 --> n2
  n3 --> n1
  n4 --> n1
  n5 --> n2
  n5 --> n1
  n5 --> n3
  n6 --> n1
  n6 --> n2
  n6 --> n4
  n6 --> n5
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n6
  n8 --> n1
  n8 --> n2
  n8 --> n7
  n10 --> n0
  n10 --> n9
  n11 --> n0
  n11 --> n8
  n11 --> n9
  n11 --> n10
  n12 --> n0
  n12 --> n11
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
