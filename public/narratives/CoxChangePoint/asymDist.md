# Proof narrative — asymDist

Root: **asymDist** (theorem) `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:173` · topic `CoxChangePoint`
Closure: 22 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `Theorem3Assumptions` — structure · `Statlib/CoxChangePoint/Theorem2And3.lean:119`  _(also used by 1: jointAsymptoticDistToTheorem3)_
  ★ `theorem_3` — theorem · `Statlib/CoxChangePoint/Theorem2And3.lean:165`  _(also used by 1: toAsymDist)_
      ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 68: liftAuto, concreteGn, buildLemmaS1Data, …)_
      ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 10: truncationResidual, empiricalCovariance, fpcScoreError, …)_
      ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 18: benchmark_eigsys, truncationResidual, EstimatedEigensystem, …)_
    ▣ `CoxModel` — structure · `Statlib/CoxChangePoint/CoxModel.lean:80`  _(also used by 11: benchmark_model, CoxBaselineHypotheses.hWellSep_from_concave, CoxBaselineHypotheses.hArgmax_from_MLE, …)_
    ▣ `CoxParam` — private structure · `Statlib/CoxChangePoint/Auto/smoothed_empirical_process_approximation.lean:18`  _(also used by 12: AssumptionsA8A9, smoothed_empirical_process_approximation_S1, smoothed_empirical_process_approximation_S2, …)_
      ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 35: TruncSample, benchmark_obs, coxScoreAt, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
      ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
    ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 18: LemmaS1Data, concreteGn, buildLemmaS1Data, …)_
      ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 22: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
            ◆ `fpcScore` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:64`  _(also used by 2: truncationResidual, fpcScoreError)_
          ◆ `truncatedScores` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:69`
        ◆ `CoxObs.ofFunctional` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:110`
      ◆ `buildSample` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:158`
    ◆ `sample` — def · `Statlib/CoxChangePoint/CoxModel.lean:132`  _(also used by 5: CoxBaselineHypotheses.hArgmax_from_MLE, CoxBaselineHypotheses.hUnif_from_VW_2_14_9, cox_consistency_end_to_end, …)_
  ▣ `CoxBaselineHypotheses` — structure · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:93`  _(also used by 2: consistency, rate)_
★ `asymDist` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:173` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Theorem3Assumptions"]
  n1["★ theorem_3"]
  n2["▣ CoxParam"]
  n3["◆ FunctionalSample"]
  n4["▣ Eigensystem"]
  n5["▣ CoxModel"]
  n6["▣ CoxParam"]
  n7["▣ CoxObs"]
  n8["◆ g"]
  n9["◆ atRisk"]
  n10["◆ expG"]
  n11["◆ riskSum"]
  n12["◆ logPartialLikelihood"]
  n13["◆ Gn"]
  n14["◆ Sample"]
  n15["◆ fpcScore"]
  n16["◆ truncatedScores"]
  n17["◆ CoxObs.ofFunctional"]
  n18["◆ buildSample"]
  n19["◆ sample"]
  n20["▣ CoxBaselineHypotheses"]
  n21["★ asymDist"]
  n1 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n8 --> n2
  n8 --> n7
  n9 --> n7
  n10 --> n2
  n10 --> n7
  n10 --> n8
  n11 --> n7
  n11 --> n2
  n11 --> n9
  n11 --> n10
  n12 --> n7
  n12 --> n2
  n12 --> n8
  n12 --> n11
  n13 --> n7
  n13 --> n2
  n13 --> n12
  n14 --> n7
  n15 --> n3
  n15 --> n4
  n16 --> n3
  n16 --> n4
  n16 --> n15
  n17 --> n3
  n17 --> n4
  n17 --> n7
  n17 --> n16
  n18 --> n3
  n18 --> n4
  n18 --> n14
  n18 --> n17
  n19 --> n5
  n19 --> n14
  n19 --> n18
  n20 --> n5
  n20 --> n6
  n20 --> n13
  n20 --> n19
  n21 --> n1
  n21 --> n20
  class n21 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
