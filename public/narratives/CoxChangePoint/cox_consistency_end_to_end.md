# Proof narrative — cox_consistency_end_to_end

Root: **cox_consistency_end_to_end** (theorem) `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:365` · topic `CoxChangePoint`
Closure: 37 declarations across 10 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 62: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 10: truncationResidual, empiricalCovariance, fpcScoreError, …)_
    ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 18: benchmark_eigsys, truncationResidual, EstimatedEigensystem, …)_
  ▣ `CoxModel` — structure · `Statlib/CoxChangePoint/CoxModel.lean:80`  _(also used by 5: benchmark_model, CoxModel.toCoxTheorem2Hypotheses, CoxModel.toCoxTheorem3Hypotheses, …)_
  ▣ `CoxParam` — private structure · `Statlib/CoxChangePoint/Auto/smoothed_empirical_process_approximation.lean:18`  _(also used by 8: AssumptionsA8A9, smoothed_empirical_process_approximation_S1, smoothed_empirical_process_approximation_S2, …)_
    ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 33: TruncSample, benchmark_obs, coxScoreAt, …)_
    ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 18: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
        ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
          ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
          ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
        ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
    ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 3: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax.le)_
    ◆ `IsLikelihoodArgmax` — def · `Statlib/CoxChangePoint/ScoreEquation.lean:70`  _(also used by 3: IsLikelihoodArgmax.mem, IsLikelihoodArgmax.le, IsCoxMLE.argmax)_
    ◆ `realize` — def · `Statlib/CoxChangePoint/Foundation.lean:135`  _(also used by 9: CoxLANExpansionHypothesis, coxLogRatio, toLANExpansion, …)_
  ◆ `IsCoxMLE` — def · `Statlib/CoxChangePoint/ScoreEquation.lean:90`  _(also used by 1: IsCoxMLE.argmax)_
          ◆ `fpcScore` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:64`  _(also used by 2: truncationResidual, fpcScoreError)_
        ◆ `truncatedScores` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:69`
      ◆ `CoxObs.ofFunctional` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:110`
    ◆ `buildSample` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:158`
  ◆ `sample` — def · `Statlib/CoxChangePoint/CoxModel.lean:132`
  ▣ `VW_2_14_9_Conclusion` — structure · `Statlib/CoxChangePoint/ChainingProof.lean:226`  _(also used by 6: VW_2_14_9_Conclusion.tail_bound_no_sqrt, toConclusion, PolynomialBracketingClass.toVW_2_14_9_Conclusion, …)_
  ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 12: LemmaS1Data, concreteGn, buildLemmaS1Data, …)_
  ◆ `ConvergesInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:54`  _(also used by 8: benchmark_convergesInProbability, CoxTheorem2Hypotheses, CoxModel.toCoxTheorem2Hypotheses, …)_
      ★ `unique_max_of_strictConcave` — theorem · `Statlib/CoxChangePoint/StrictConcaveUnique.lean:52`
    ★ `wellSeparated_of_strictConcave_compact` — theorem · `Statlib/CoxChangePoint/StrictConcaveUnique.lean:96`
  ★ `CoxBaselineHypotheses.hWellSep_from_concave` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:230`
      · `IsCoxMLE_implies_argmax` — lemma · `Statlib/CoxChangePoint/ScoreEquation.lean:105`
    · `IsCoxMLE_implies_Gn_le` — lemma · `Statlib/CoxChangePoint/ScoreEquation.lean:119`
  ★ `CoxBaselineHypotheses.hArgmax_from_MLE` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:266`
      ★ `unifConv_of_tail_bound` — theorem · `Statlib/CoxChangePoint/LemmaS1Abstract.lean:77`  _(also used by 1: unifConv_of_two_param_tail_bound)_
    ★ `unifConv_of_VW_2_14_9_conclusion` — theorem · `Statlib/CoxChangePoint/ChainingProof.lean:296`  _(also used by 1: PolynomialBracketingClass.unifConv)_
  ★ `CoxBaselineHypotheses.hUnif_from_VW_2_14_9` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:291`
    ▣ `CoxBaselineHypotheses` — structure · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:93`  _(also used by 2: rate, asymDist)_
      ◆ `toTheorem1Assumptions` — def · `Statlib/CoxChangePoint/CoxModel.lean:168`
    ★ `cox_consistency` — theorem · `Statlib/CoxChangePoint/CoxModel.lean:213`
  ★ `consistency` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:125`  _(also used by 1: rate)_
★ `cox_consistency_end_to_end` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:365` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxParam"]
  n1["◆ FunctionalSample"]
  n2["▣ Eigensystem"]
  n3["▣ CoxModel"]
  n4["▣ CoxParam"]
  n5["▣ CoxObs"]
  n6["◆ Sample"]
  n7["◆ g"]
  n8["◆ atRisk"]
  n9["◆ expG"]
  n10["◆ riskSum"]
  n11["◆ logPartialLikelihood"]
  n12["◆ IsLikelihoodArgmax"]
  n13["◆ realize"]
  n14["◆ IsCoxMLE"]
  n15["◆ fpcScore"]
  n16["◆ truncatedScores"]
  n17["◆ CoxObs.ofFunctional"]
  n18["◆ buildSample"]
  n19["◆ sample"]
  n20["▣ VW_2_14_9_Conclusion"]
  n21["◆ Gn"]
  n22["◆ ConvergesInProbability"]
  n23["★ unique_max_of_strictConcave"]
  n24["★ wellSeparated_of_strictConcave_compact"]
  n25["★ CoxBaselineHypotheses.hWellSep_from_concave"]
  n26["· IsCoxMLE_implies_argmax"]
  n27["· IsCoxMLE_implies_Gn_le"]
  n28["★ CoxBaselineHypotheses.hArgmax_from_MLE"]
  n29["★ unifConv_of_tail_bound"]
  n30["★ unifConv_of_VW_2_14_9_conclusion"]
  n31["★ CoxBaselineHypotheses.hUnif_from_VW_2_14_9"]
  n32["▣ CoxBaselineHypotheses"]
  n33["◆ toTheorem1Assumptions"]
  n34["★ cox_consistency"]
  n35["★ consistency"]
  n36["★ cox_consistency_end_to_end"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n6 --> n5
  n7 --> n0
  n7 --> n5
  n8 --> n5
  n9 --> n0
  n9 --> n5
  n9 --> n7
  n10 --> n5
  n10 --> n0
  n10 --> n8
  n10 --> n9
  n11 --> n5
  n11 --> n0
  n11 --> n7
  n11 --> n10
  n12 --> n5
  n12 --> n0
  n12 --> n11
  n13 --> n6
  n13 --> n5
  n14 --> n6
  n14 --> n0
  n14 --> n12
  n14 --> n13
  n15 --> n1
  n15 --> n2
  n16 --> n1
  n16 --> n2
  n16 --> n15
  n17 --> n1
  n17 --> n2
  n17 --> n5
  n17 --> n16
  n18 --> n1
  n18 --> n2
  n18 --> n6
  n18 --> n17
  n19 --> n3
  n19 --> n6
  n19 --> n18
  n21 --> n5
  n21 --> n0
  n21 --> n11
  n24 --> n23
  n25 --> n3
  n25 --> n4
  n25 --> n24
  n26 --> n6
  n26 --> n0
  n26 --> n14
  n26 --> n11
  n26 --> n13
  n27 --> n6
  n27 --> n0
  n27 --> n14
  n27 --> n21
  n27 --> n26
  n27 --> n11
  n27 --> n13
  n28 --> n3
  n28 --> n14
  n28 --> n19
  n28 --> n21
  n28 --> n27
  n30 --> n20
  n30 --> n29
  n31 --> n3
  n31 --> n20
  n31 --> n4
  n31 --> n21
  n31 --> n19
  n31 --> n30
  n32 --> n3
  n32 --> n4
  n32 --> n21
  n32 --> n19
  n33 --> n3
  n33 --> n0
  n33 --> n21
  n33 --> n19
  n34 --> n3
  n34 --> n0
  n34 --> n21
  n34 --> n19
  n34 --> n33
  n35 --> n32
  n35 --> n22
  n35 --> n4
  n35 --> n34
  n36 --> n3
  n36 --> n4
  n36 --> n14
  n36 --> n19
  n36 --> n20
  n36 --> n21
  n36 --> n22
  n36 --> n25
  n36 --> n28
  n36 --> n31
  n36 --> n35
  class n36 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
