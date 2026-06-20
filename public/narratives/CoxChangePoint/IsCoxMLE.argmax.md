# Proof narrative — IsCoxMLE.argmax

Root: **IsCoxMLE.argmax** (lemma) `Statlib/CoxChangePoint/ScoreEquation.lean:94` · topic `CoxChangePoint`
Closure: 12 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 35: TruncSample, benchmark_obs, coxScoreAt, …)_
  ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 21: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 66: liftAuto, concreteGn, buildLemmaS1Data, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, Gn, …)_
  ◆ `IsLikelihoodArgmax` — def · `Statlib/CoxChangePoint/ScoreEquation.lean:70`  _(also used by 2: IsLikelihoodArgmax.mem, IsLikelihoodArgmax.le)_
  ◆ `realize` — def · `Statlib/CoxChangePoint/Foundation.lean:135`  _(also used by 10: CoxLANExpansionHypothesis, coxLogRatio, toLANExpansion, …)_
  ◆ `IsCoxMLE` — def · `Statlib/CoxChangePoint/ScoreEquation.lean:90`  _(also used by 4: CoxBaselineHypotheses.hArgmax_from_MLE, cox_consistency_end_to_end, IsCoxMLE_implies_argmax, …)_
· `IsCoxMLE.argmax` — lemma · `Statlib/CoxChangePoint/ScoreEquation.lean:94` **← headline**

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
  n8["◆ IsLikelihoodArgmax"]
  n9["◆ realize"]
  n10["◆ IsCoxMLE"]
  n11["· IsCoxMLE.argmax"]
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
  n9 --> n0
  n10 --> n1
  n10 --> n2
  n10 --> n8
  n10 --> n9
  n11 --> n1
  n11 --> n2
  n11 --> n10
  n11 --> n8
  n11 --> n9
  class n11 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
