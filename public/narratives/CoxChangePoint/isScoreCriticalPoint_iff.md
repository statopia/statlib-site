# Proof narrative — isScoreCriticalPoint_iff

Root: **isScoreCriticalPoint_iff** (lemma) `Statlib/CoxChangePoint/ScoreEquation.lean:58` · topic `CoxChangePoint`
Closure: 19 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 26: TruncSample, benchmark_obs, coxScoreAt, …)_
  ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 57: liftAuto, concreteGn, buildLemmaS1Data, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`
            ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 18: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 1: expG_pos)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 2: riskSum_nonneg, logPartialLikelihood)_
        ◆ `riskSumWeightedZ` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:74`
      ◆ `meanZ` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:102`
  ◆ `partialScoreGamma` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:137`  _(also used by 1: coxScoreAt)_
      ◆ `alphaScoreContribution` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:57`
        ◆ `riskSumWeightedAlpha` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:80`
      ◆ `meanAlphaInRiskSet` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:110`
  ◆ `partialScoreAlpha` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:148`  _(also used by 1: coxScoreAt)_
      ◆ `betaScoreContribution` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:63`
        ◆ `riskSumWeightedBeta` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:87`
      ◆ `meanBetaInRiskSet` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:118`
  ◆ `partialScoreBeta` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:160`  _(also used by 1: coxScoreAt)_
  ◆ `IsScoreCriticalPoint` — def · `Statlib/CoxChangePoint/ScoreEquation.lean:52`
· `isScoreCriticalPoint_iff` — lemma · `Statlib/CoxChangePoint/ScoreEquation.lean:58` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["▣ CoxParam"]
  n2["◆ atRisk"]
  n3["◆ g"]
  n4["◆ expG"]
  n5["◆ riskSum"]
  n6["◆ riskSumWeightedZ"]
  n7["◆ meanZ"]
  n8["◆ partialScoreGamma"]
  n9["◆ alphaScoreContribution"]
  n10["◆ riskSumWeightedAlpha"]
  n11["◆ meanAlphaInRiskSet"]
  n12["◆ partialScoreAlpha"]
  n13["◆ betaScoreContribution"]
  n14["◆ riskSumWeightedBeta"]
  n15["◆ meanBetaInRiskSet"]
  n16["◆ partialScoreBeta"]
  n17["◆ IsScoreCriticalPoint"]
  n18["· isScoreCriticalPoint_iff"]
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
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n4
  n7 --> n0
  n7 --> n1
  n7 --> n5
  n7 --> n6
  n8 --> n0
  n8 --> n1
  n8 --> n7
  n9 --> n1
  n9 --> n0
  n10 --> n0
  n10 --> n1
  n10 --> n2
  n10 --> n4
  n10 --> n9
  n11 --> n0
  n11 --> n1
  n11 --> n5
  n11 --> n10
  n12 --> n0
  n12 --> n1
  n12 --> n9
  n12 --> n11
  n13 --> n1
  n13 --> n0
  n14 --> n0
  n14 --> n1
  n14 --> n2
  n14 --> n4
  n14 --> n13
  n15 --> n0
  n15 --> n1
  n15 --> n5
  n15 --> n14
  n16 --> n0
  n16 --> n1
  n16 --> n13
  n16 --> n15
  n17 --> n0
  n17 --> n1
  n17 --> n8
  n17 --> n12
  n17 --> n16
  n18 --> n0
  n18 --> n1
  n18 --> n17
  n18 --> n8
  n18 --> n12
  n18 --> n16
  class n18 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
