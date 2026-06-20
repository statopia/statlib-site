# Proof narrative — toCoxLANExpansionHypothesis

Root: **toCoxLANExpansionHypothesis** (noncomputable def) `Statlib/CoxChangePoint/CoxTaylor.lean:195` · topic `CoxChangePoint`
Closure: 27 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 23: TruncSample, benchmark_obs, coxScoreAt_dim_match, …)_
    ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 21: benchmark_sample, coxLogRatio, sample, …)_
    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 53: liftAuto, concreteGn, buildLemmaS1Data, …)_
      ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 16: AssumptionA7, exponential_moment_bound, expansion_trivial, …)_
    ▣ `HasFirstOrderTaylor` — structure · `Statlib/CoxChangePoint/CoxTaylor.lean:85`  _(also used by 1: eval_at_zero)_
        ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`
        ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 1: expG_pos)_
      ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 1: riskSum_nonneg)_
    ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 5: Gn, IsLikelihoodArgmax, IsLikelihoodArgmax.le, …)_
  ◆ `realize` — def · `Statlib/CoxChangePoint/Foundation.lean:135`  _(also used by 9: coxLogRatio, toLANExpansion, Gn, …)_
    ◆ `coxParam_perturb` — noncomputable def · `Statlib/CoxChangePoint/CoxLAN.lean:116`  _(also used by 1: toLANExpansion)_
          ◆ `riskSumWeightedZ` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:74`
        ◆ `meanZ` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:102`
      ◆ `partialScoreGamma` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:137`  _(also used by 2: IsScoreCriticalPoint, isScoreCriticalPoint_iff)_
        ◆ `alphaScoreContribution` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:57`
          ◆ `riskSumWeightedAlpha` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:80`
        ◆ `meanAlphaInRiskSet` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:110`
      ◆ `partialScoreAlpha` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:148`  _(also used by 2: IsScoreCriticalPoint, isScoreCriticalPoint_iff)_
        ◆ `betaScoreContribution` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:63`
          ◆ `riskSumWeightedBeta` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:87`
        ◆ `meanBetaInRiskSet` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:118`
      ◆ `partialScoreBeta` — noncomputable def · `Statlib/CoxChangePoint/Score.lean:160`  _(also used by 2: IsScoreCriticalPoint, isScoreCriticalPoint_iff)_
  ◆ `coxScoreAt` — noncomputable def · `Statlib/CoxChangePoint/CoxLAN.lean:87`  _(also used by 2: coxScoreAt_dim_match, toLANExpansion)_
  ▣ `CoxFirstOrderTaylor` — structure · `Statlib/CoxChangePoint/CoxTaylor.lean:142`
  ◆ `coxLogPartialLikelihoodRatio` — noncomputable def · `Statlib/CoxChangePoint/CoxLAN.lean:155`  _(also used by 3: coxLogRatio, toLANExpansion, linearisation_at_zero)_
  ▣ `CoxLANExpansionHypothesis` — structure · `Statlib/CoxChangePoint/CoxLAN.lean:199`  _(also used by 1: toLANExpansion)_
◆ `toCoxLANExpansionHypothesis` — noncomputable def · `Statlib/CoxChangePoint/CoxTaylor.lean:195` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxObs"]
  n1["◆ Sample"]
  n2["▣ CoxParam"]
  n3["◆ g"]
  n4["▣ HasFirstOrderTaylor"]
  n5["◆ atRisk"]
  n6["◆ expG"]
  n7["◆ riskSum"]
  n8["◆ logPartialLikelihood"]
  n9["◆ realize"]
  n10["◆ coxParam_perturb"]
  n11["◆ riskSumWeightedZ"]
  n12["◆ meanZ"]
  n13["◆ partialScoreGamma"]
  n14["◆ alphaScoreContribution"]
  n15["◆ riskSumWeightedAlpha"]
  n16["◆ meanAlphaInRiskSet"]
  n17["◆ partialScoreAlpha"]
  n18["◆ betaScoreContribution"]
  n19["◆ riskSumWeightedBeta"]
  n20["◆ meanBetaInRiskSet"]
  n21["◆ partialScoreBeta"]
  n22["◆ coxScoreAt"]
  n23["▣ CoxFirstOrderTaylor"]
  n24["◆ coxLogPartialLikelihoodRatio"]
  n25["▣ CoxLANExpansionHypothesis"]
  n26["◆ toCoxLANExpansionHypothesis"]
  n1 --> n0
  n3 --> n2
  n3 --> n0
  n4 --> n3
  n5 --> n0
  n6 --> n2
  n6 --> n0
  n6 --> n3
  n7 --> n0
  n7 --> n2
  n7 --> n5
  n7 --> n6
  n8 --> n0
  n8 --> n2
  n8 --> n3
  n8 --> n7
  n9 --> n1
  n9 --> n0
  n10 --> n2
  n11 --> n0
  n11 --> n2
  n11 --> n5
  n11 --> n6
  n12 --> n0
  n12 --> n2
  n12 --> n7
  n12 --> n11
  n13 --> n0
  n13 --> n2
  n13 --> n12
  n14 --> n2
  n14 --> n0
  n15 --> n0
  n15 --> n2
  n15 --> n5
  n15 --> n6
  n15 --> n14
  n16 --> n0
  n16 --> n2
  n16 --> n7
  n16 --> n15
  n17 --> n0
  n17 --> n2
  n17 --> n14
  n17 --> n16
  n18 --> n2
  n18 --> n0
  n19 --> n0
  n19 --> n2
  n19 --> n5
  n19 --> n6
  n19 --> n18
  n20 --> n0
  n20 --> n2
  n20 --> n7
  n20 --> n19
  n21 --> n0
  n21 --> n2
  n21 --> n18
  n21 --> n20
  n22 --> n0
  n22 --> n2
  n22 --> n13
  n22 --> n17
  n22 --> n21
  n23 --> n1
  n23 --> n2
  n23 --> n4
  n23 --> n8
  n23 --> n9
  n23 --> n10
  n23 --> n22
  n24 --> n0
  n24 --> n2
  n24 --> n8
  n24 --> n10
  n25 --> n1
  n25 --> n2
  n25 --> n24
  n25 --> n9
  n25 --> n22
  n26 --> n23
  n26 --> n25
  n26 --> n24
  n26 --> n9
  n26 --> n22
  class n26 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
