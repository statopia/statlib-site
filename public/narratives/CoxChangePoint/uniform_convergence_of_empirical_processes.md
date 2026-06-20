# Proof narrative — uniform_convergence_of_empirical_processes

Root: **uniform_convergence_of_empirical_processes** (theorem) `Statlib/CoxChangePoint/Auto/uniform_convergence_of_empirical_processes.lean:20` · topic `CoxChangePoint`
Closure: 30 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `CoxAssumptions` — private structure · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_empirical_processes.lean:6`
          ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 66: liftAuto, concreteGn, buildLemmaS1Data, …)_
          ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 10: truncationResidual, empiricalCovariance, fpcScoreError, …)_
          ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 18: benchmark_eigsys, truncationResidual, EstimatedEigensystem, …)_
        ▣ `CoxModel` — structure · `Statlib/CoxChangePoint/CoxModel.lean:80`  _(also used by 9: benchmark_model, CoxBaselineHypotheses.hWellSep_from_concave, CoxBaselineHypotheses.hArgmax_from_MLE, …)_
      ▣ `CoxParam` — private structure · `Statlib/CoxChangePoint/Auto/smoothed_empirical_process_approximation.lean:18`  _(also used by 10: AssumptionsA8A9, smoothed_empirical_process_approximation_S1, smoothed_empirical_process_approximation_S2, …)_
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
        ◆ `ConvergesInProbability` — def · `Statlib/EmpiricalProcess/StochasticOrder.lean:54`  _(also used by 8: benchmark_convergesInProbability, cox_consistency_end_to_end, CoxTheorem2Hypotheses, …)_
        ▣ `Theorem2Assumptions` — structure · `Statlib/CoxChangePoint/Theorem2And3.lean:65`
      ★ `theorem_2` — theorem · `Statlib/CoxChangePoint/Theorem2And3.lean:103`
          ◆ `toTheorem1Assumptions` — def · `Statlib/CoxChangePoint/CoxModel.lean:168`
        ★ `cox_consistency` — theorem · `Statlib/CoxChangePoint/CoxModel.lean:213`
      ★ `consistency` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:125`  _(also used by 1: cox_consistency_end_to_end)_
    ★ `rate` — theorem · `Statlib/CoxChangePoint/CoxConsistencyEndToEnd.lean:138`  _(also used by 5: CoxTheorem2Hypotheses, CoxModel.toCoxTheorem2Hypotheses, cox_theorem_2_end_to_end, …)_
  ◆ `ConvergesInProbTo` — private def · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_empirical_processes.lean:15`
★ `uniform_convergence_of_empirical_processes` — theorem · `Statlib/CoxChangePoint/Auto/uniform_convergence_of_empirical_processes.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ CoxAssumptions"]
  n1["▣ CoxParam"]
  n2["◆ FunctionalSample"]
  n3["▣ Eigensystem"]
  n4["▣ CoxModel"]
  n5["▣ CoxParam"]
  n6["▣ CoxObs"]
  n7["◆ g"]
  n8["◆ atRisk"]
  n9["◆ expG"]
  n10["◆ riskSum"]
  n11["◆ logPartialLikelihood"]
  n12["◆ Gn"]
  n13["◆ Sample"]
  n14["◆ fpcScore"]
  n15["◆ truncatedScores"]
  n16["◆ CoxObs.ofFunctional"]
  n17["◆ buildSample"]
  n18["◆ sample"]
  n19["▣ CoxBaselineHypotheses"]
  n20["◆ IsBoundedInProbability"]
  n21["◆ ConvergesInProbability"]
  n22["▣ Theorem2Assumptions"]
  n23["★ theorem_2"]
  n24["◆ toTheorem1Assumptions"]
  n25["★ cox_consistency"]
  n26["★ consistency"]
  n27["★ rate"]
  n28["◆ ConvergesInProbTo"]
  n29["★ uniform_convergence_of_empirical_processes"]
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n7 --> n1
  n7 --> n6
  n8 --> n6
  n9 --> n1
  n9 --> n6
  n9 --> n7
  n10 --> n6
  n10 --> n1
  n10 --> n8
  n10 --> n9
  n11 --> n6
  n11 --> n1
  n11 --> n7
  n11 --> n10
  n12 --> n6
  n12 --> n1
  n12 --> n11
  n13 --> n6
  n14 --> n2
  n14 --> n3
  n15 --> n2
  n15 --> n3
  n15 --> n14
  n16 --> n2
  n16 --> n3
  n16 --> n6
  n16 --> n15
  n17 --> n2
  n17 --> n3
  n17 --> n13
  n17 --> n16
  n18 --> n4
  n18 --> n13
  n18 --> n17
  n19 --> n4
  n19 --> n5
  n19 --> n12
  n19 --> n18
  n22 --> n21
  n23 --> n22
  n23 --> n20
  n24 --> n4
  n24 --> n1
  n24 --> n12
  n24 --> n18
  n25 --> n4
  n25 --> n1
  n25 --> n12
  n25 --> n18
  n25 --> n24
  n26 --> n19
  n26 --> n21
  n26 --> n5
  n26 --> n25
  n27 --> n19
  n27 --> n5
  n27 --> n20
  n27 --> n23
  n27 --> n26
  n28 --> n27
  n29 --> n0
  n29 --> n28
  class n29 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
