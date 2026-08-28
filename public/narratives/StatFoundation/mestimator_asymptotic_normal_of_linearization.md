# Proof narrative — mestimator_asymptotic_normal_of_linearization

Root: **mestimator_asymptotic_normal_of_linearization** (theorem) `Statlib/StatFoundation/Statistics/Estimation/AsymptoticLinear.lean:197` · topic `StatFoundation`
Closure: 30 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsMEstimatorOn` — def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:102`  _(also used by 2: finite_mestimator_consistent_of_uniform_gap, mestimator_consistent_sample_average_finite)_
  ◆ `HasCoordinatewiseAEMeasurableLimit` — abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:38`  _(also used by 16: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_linearScore_l1_rowApprox_and_se_real, tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, …)_
  ◆ `finiteLinearCombination` — noncomputable abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:29`  _(also used by 13: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, hasFiniteLinearCombinationIsBigOInProbability_of_coordinatewise_real, hasFiniteLinearCombinationIsLittleOInProbability_of_coordinatewise_real, …)_
  ◆ `HasFiniteLinearCombinationTendstoInDistribution` — abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:43`  _(also used by 19: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_linearScore_l1_rowApprox_and_se_real, tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, …)_
  ◆ `HasCoordinatewiseAEMeasurable` — abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:33`  _(also used by 42: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_linearScore_l1_rowApprox_and_se_real, tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, …)_
  ◆ `scaledCenteredFiniteCoordinate` — abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:76`  _(also used by 36: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_linearScore_l1_rowApprox_and_se_real, tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, …)_
  ★ `tendstoInMeasure_iff_measureReal_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:628`  _(also used by 1: mestimator_asymptotic_normal)_
  ◆ `HasFiniteLinearCombinationTendstoInMeasureZero` — abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:52`  _(also used by 4: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, mle_asymptotic_normal_vec, mle_asymptotic_normal_vec_cov, …)_
  ◆ `finiteCoordinateVector` — noncomputable abbrev · `Statlib/StatFoundation/Vocabulary/FiniteCoordinate.lean:25`  _(also used by 17: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_scoreVector_l1_rowApprox_and_se_real, …)_
            ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: charFun_eq_of_subseq)_
            · `charFun_map_innerSL` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:22`
            · `continuous_charFun` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:39`
            · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
            ★ `isTightMeasureSet_singleton` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:113`  _(also used by 1: isTightMeasureSet_finiteRange)_
            ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:18`  _(also used by 1: isTightMeasureSet_range_map_of_isBigOInProbability_one_real)_
            ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: levy_continuity)_
            · `isTight_of_charFun_tendsto_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:131`
            ★ `levy_forward_inner` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:61`
            · `charFun_eq_of_subseq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:99`
            · `probMeasure_eq_of_charFun_eq_inner` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:114`
            ★ `cramer_wold_charFun` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:261`
          ★ `cramer_wold_reverse` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:297`  _(also used by 1: cramer_wold_iff)_
        ★ `tendstoInDistribution_of_forall_inner_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:348`  _(also used by 1: tendstoInDistribution_iff_forall_inner_real)_
    ★ `tendstoInDistribution_toLp_of_finiteLinearCombination_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:409`  _(also used by 3: standardizedPartialSumVec_tendstoInDistribution, maxCoord_standardizedPartialSum_tendsto, maxAbsCoord_standardizedPartialSum_tendsto)_
      ★ `tendstoInMeasure_congr_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:830`  _(also used by 7: inProbabilityConvergence_congr_left, tendstoInDistribution_add_of_isBigOInProbability_tendsto_zero_left, tendstoInDistribution_add_of_isBigOInProbability_tendsto_zero_right, …)_
      ★ `tendstoInDistribution_of_tendstoInMeasure_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:354`  _(also used by 12: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInDistribution_add_of_tendstoInMeasure_zero_left, tendstoInDistribution_add_of_tendstoInMeasure_zero_right, …)_
    ★ `tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_tendstoInMeasure_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:454`  _(also used by 2: tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_isBigOInProbability_real, tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_isLittleOInProbability_real)_
  ★ `tendstoInDistribution_scaledCenteredFiniteCoordinate_of_remainder_tendstoInMeasure_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/AsymptoticLinear.lean:56`  _(also used by 2: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, mle_asymptotic_normal_vec)_
  ★ `tendstoInDistribution_toLp_iff_finiteLinearCombination_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/CramerWold.lean:430`  _(also used by 2: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_scoreVector_and_l1_rowApprox_real, tendstoInDistribution_studentizedDebiasedLasso_coordinate_of_scoreVector_l1_rowApprox_and_se_real)_
★ `mestimator_asymptotic_normal_of_linearization` — theorem · `Statlib/StatFoundation/Statistics/Estimation/AsymptoticLinear.lean:197` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsMEstimatorOn"]
  n1["◆ HasCoordinatewiseAEMeasurableLimit"]
  n2["◆ finiteLinearCombination"]
  n3["◆ HasFiniteLinearCombinationTendstoInDistribution"]
  n4["◆ HasCoordinatewiseAEMeasurable"]
  n5["◆ scaledCenteredFiniteCoordinate"]
  n6["★ tendstoInMeasure_iff_measureReal_norm"]
  n7["◆ HasFiniteLinearCombinationTendstoInMeasureZero"]
  n8["◆ finiteCoordinateVector"]
  n9["★ levy_forward"]
  n10["· charFun_map_innerSL"]
  n11["· continuous_charFun"]
  n12["· compl_Icc_eq_abs_gt"]
  n13["★ isTightMeasureSet_singleton"]
  n14["★ isTight_finiteRange"]
  n15["★ isTight_of_charFun_tendsto"]
  n16["· isTight_of_charFun_tendsto_inner"]
  n17["★ levy_forward_inner"]
  n18["· charFun_eq_of_subseq_inner"]
  n19["· probMeasure_eq_of_charFun_eq_inner"]
  n20["★ cramer_wold_charFun"]
  n21["★ cramer_wold_reverse"]
  n22["★ tendstoInDistribution_of_forall_inner_real"]
  n23["★ tendstoInDistribution_toLp_of_finiteLinearCombination_real"]
  n24["★ tendstoInMeasure_congr_left"]
  n25["★ tendstoInDistribution_of_tendstoInMeasure_sub"]
  n26["★ tendstoInDistribution_toLp_of_finiteLinearCombination_remainder_tendstoInMeasure_real"]
  n27["★ tendstoInDistribution_scaledCenteredFiniteCoordinate_of_remainder_tendstoInMeasure_real"]
  n28["★ tendstoInDistribution_toLp_iff_finiteLinearCombination_real"]
  n29["★ mestimator_asymptotic_normal_of_linearization"]
  n3 --> n2
  n7 --> n2
  n14 --> n13
  n15 --> n12
  n15 --> n14
  n16 --> n15
  n16 --> n10
  n18 --> n17
  n20 --> n16
  n20 --> n18
  n20 --> n19
  n21 --> n9
  n21 --> n10
  n21 --> n11
  n21 --> n20
  n21 --> n19
  n22 --> n21
  n23 --> n4
  n23 --> n1
  n23 --> n3
  n23 --> n8
  n23 --> n22
  n23 --> n2
  n26 --> n4
  n26 --> n1
  n26 --> n3
  n26 --> n7
  n26 --> n8
  n26 --> n23
  n26 --> n2
  n26 --> n24
  n26 --> n25
  n27 --> n4
  n27 --> n5
  n27 --> n1
  n27 --> n3
  n27 --> n7
  n27 --> n8
  n27 --> n26
  n28 --> n4
  n28 --> n1
  n28 --> n8
  n28 --> n3
  n28 --> n2
  n28 --> n23
  n29 --> n0
  n29 --> n1
  n29 --> n3
  n29 --> n4
  n29 --> n5
  n29 --> n2
  n29 --> n6
  n29 --> n7
  n29 --> n8
  n29 --> n27
  n29 --> n28
  class n29 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
