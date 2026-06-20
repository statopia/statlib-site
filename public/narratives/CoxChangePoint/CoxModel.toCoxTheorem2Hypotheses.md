# Proof narrative — CoxModel.toCoxTheorem2Hypotheses

Root: **CoxModel.toCoxTheorem2Hypotheses** (def) `Statlib/CoxChangePoint/CoxTheorem23EndToEnd.lean:261` · topic `CoxChangePoint`
Closure: 32 declarations across 9 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 66: liftAuto, concreteGn, buildLemmaS1Data, …)_
    ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 10: truncationResidual, empiricalCovariance, fpcScoreError, …)_
    ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 18: benchmark_eigsys, truncationResidual, EstimatedEigensystem, …)_
  ▣ `CoxModel` — structure · `Statlib/CoxChangePoint/CoxModel.lean:80`  _(also used by 8: benchmark_model, CoxBaselineHypotheses.hWellSep_from_concave, CoxBaselineHypotheses.hArgmax_from_MLE, …)_
  ▣ `CoxParam` — private structure · `Statlib/CoxChangePoint/Auto/smoothed_empirical_process_approximation.lean:18`  _(also used by 9: AssumptionsA8A9, smoothed_empirical_process_approximation_S1, smoothed_empirical_process_approximation_S2, …)_
  ◆ `ConvergesInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:54`  _(also used by 6: benchmark_convergesInProbability, cox_consistency_end_to_end, cox_theorem_2_end_to_end, …)_
  ▣ `SecondOrderWellSeparated` — structure · `Statlib/CoxChangePoint/Theorem2Proof.lean:80`  _(also used by 1: cox_theorem_2_end_to_end)_
  ▣ `UniformEntropyControl` — structure · `Statlib/CoxChangePoint/Theorem2Proof.lean:98`  _(also used by 1: cox_theorem_2_end_to_end)_
        ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 35: TruncSample, benchmark_obs, coxScoreAt, …)_
          ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 17: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
            ◆ `atRisk` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:89`  _(also used by 3: riskSumWeightedZ, riskSumWeightedAlpha, riskSumWeightedBeta)_
            ◆ `expG` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:75`  _(also used by 4: expG_pos, riskSumWeightedZ, riskSumWeightedAlpha, …)_
          ◆ `riskSum` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:93`  _(also used by 4: riskSum_nonneg, meanZ, meanAlphaInRiskSet, …)_
        ◆ `logPartialLikelihood` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:104`  _(also used by 6: coxLogPartialLikelihoodRatio, CoxFirstOrderTaylor, IsLikelihoodArgmax, …)_
      ◆ `Gn` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:112`  _(also used by 16: LemmaS1Data, concreteGn, buildLemmaS1Data, …)_
        ◆ `Sample` — def · `Statlib/CoxChangePoint/Foundation.lean:127`  _(also used by 22: benchmark_sample, CoxLANExpansionHypothesis, coxLogRatio, …)_
            ◆ `fpcScore` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:64`  _(also used by 2: truncationResidual, fpcScoreError)_
            ◆ `truncatedScores` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:69`
          ◆ `CoxObs.ofFunctional` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:110`
        ◆ `buildSample` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:158`
      ◆ `sample` — def · `Statlib/CoxChangePoint/CoxModel.lean:132`  _(also used by 3: CoxBaselineHypotheses.hArgmax_from_MLE, CoxBaselineHypotheses.hUnif_from_VW_2_14_9, cox_consistency_end_to_end)_
    ▣ `CoxBaselineHypotheses` — structure · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:93`  _(also used by 1: asymDist)_
    ◆ `IsBoundedInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:42`  _(also used by 19: toRate, cox_theorem_2_end_to_end, isOP_of_triangle_decomp, …)_
      ▣ `Theorem2Assumptions` — structure · `Statlib/CoxChangePoint/Theorem2And3.lean:65`
    ★ `theorem_2` — theorem · `Statlib/CoxChangePoint/Theorem2And3.lean:103`
        ◆ `toTheorem1Assumptions` — def · `Statlib/CoxChangePoint/CoxModel.lean:168`
      ★ `cox_consistency` — theorem · `Statlib/CoxChangePoint/CoxModel.lean:213`
    ★ `consistency` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:125`  _(also used by 1: cox_consistency_end_to_end)_
  ★ `rate` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:138`  _(also used by 4: ConvergesInProbTo, cox_theorem_2_end_to_end, VW_3_4_1_Conclusion, …)_
  ▣ `RateChoice` — structure · `Statlib/CoxChangePoint/Theorem2Proof.lean:122`  _(also used by 1: cox_theorem_2_end_to_end)_
  ▣ `CoxTheorem2Hypotheses` — structure · `Statlib/CoxChangePoint/CoxTheorem23EndToEnd.lean:94`  _(also used by 2: toRate, cox_theorem_2_end_to_end)_
◆ `CoxModel.toCoxTheorem2Hypotheses` — def · `Statlib/CoxChangePoint/CoxTheorem23EndToEnd.lean:261` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxParam"]
  n1["◆ FunctionalSample"]
  n2["▣ Eigensystem"]
  n3["▣ CoxModel"]
  n4["▣ CoxParam"]
  n5["◆ ConvergesInProbability"]
  n6["▣ SecondOrderWellSeparated"]
  n7["▣ UniformEntropyControl"]
  n8["▣ CoxObs"]
  n9["◆ g"]
  n10["◆ atRisk"]
  n11["◆ expG"]
  n12["◆ riskSum"]
  n13["◆ logPartialLikelihood"]
  n14["◆ Gn"]
  n15["◆ Sample"]
  n16["◆ fpcScore"]
  n17["◆ truncatedScores"]
  n18["◆ CoxObs.ofFunctional"]
  n19["◆ buildSample"]
  n20["◆ sample"]
  n21["▣ CoxBaselineHypotheses"]
  n22["◆ IsBoundedInProbability"]
  n23["▣ Theorem2Assumptions"]
  n24["★ theorem_2"]
  n25["◆ toTheorem1Assumptions"]
  n26["★ cox_consistency"]
  n27["★ consistency"]
  n28["★ rate"]
  n29["▣ RateChoice"]
  n30["▣ CoxTheorem2Hypotheses"]
  n31["◆ CoxModel.toCoxTheorem2Hypotheses"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n9 --> n0
  n9 --> n8
  n10 --> n8
  n11 --> n0
  n11 --> n8
  n11 --> n9
  n12 --> n8
  n12 --> n0
  n12 --> n10
  n12 --> n11
  n13 --> n8
  n13 --> n0
  n13 --> n9
  n13 --> n12
  n14 --> n8
  n14 --> n0
  n14 --> n13
  n15 --> n8
  n16 --> n1
  n16 --> n2
  n17 --> n1
  n17 --> n2
  n17 --> n16
  n18 --> n1
  n18 --> n2
  n18 --> n8
  n18 --> n17
  n19 --> n1
  n19 --> n2
  n19 --> n15
  n19 --> n18
  n20 --> n3
  n20 --> n15
  n20 --> n19
  n21 --> n3
  n21 --> n4
  n21 --> n14
  n21 --> n20
  n23 --> n5
  n24 --> n23
  n24 --> n22
  n25 --> n3
  n25 --> n0
  n25 --> n14
  n25 --> n20
  n26 --> n3
  n26 --> n0
  n26 --> n14
  n26 --> n20
  n26 --> n25
  n27 --> n21
  n27 --> n5
  n27 --> n4
  n27 --> n26
  n28 --> n21
  n28 --> n4
  n28 --> n22
  n28 --> n24
  n28 --> n27
  n30 --> n5
  n30 --> n6
  n30 --> n7
  n30 --> n28
  n30 --> n29
  n31 --> n3
  n31 --> n4
  n31 --> n5
  n31 --> n6
  n31 --> n7
  n31 --> n28
  n31 --> n29
  n31 --> n30
  class n31 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
