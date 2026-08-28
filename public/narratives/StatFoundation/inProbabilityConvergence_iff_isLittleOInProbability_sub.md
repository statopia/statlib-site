# Proof narrative — inProbabilityConvergence_iff_isLittleOInProbability_sub

Root: **inProbabilityConvergence_iff_isLittleOInProbability_sub** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:327` · topic `StatFoundation`
Closure: 14 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `InProbabilityTailEvent` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:46`  _(also used by 6: t_test_consistent, CompleteConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `InProbabilityConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:61`  _(also used by 67: t_test_consistent, tendstoInMeasure_of_inProbabilityConvergence, inProbabilityConvergence_of_tendstoInMeasure, …)_
  ◆ `IsLittleOInProbability` — def · `Statlib/StatFoundation/Vocabulary/StochasticOrder.lean:58`  _(also used by 45: isLittleOInProbability_add, isLittleOInProbability_smul_rate, isLittleOInProbability_mul_rate, …)_
      ★ `inProbabilityConvergence_neg` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:201`  _(also used by 1: z_estimator_linearization_from_mvt)_
      ★ `inProbabilityConvergence_add` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:218`  _(also used by 1: z_estimator_linearization_from_mvt)_
    ★ `inProbabilityConvergence_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:284`  _(also used by 3: inProbabilityConvergence_sub_of_isBigOInProbability_tendsto_zero_left, inProbabilityConvergence_sub_of_isBigOInProbability_tendsto_zero_right, z_estimator_linearization_from_mvt)_
      ★ `tendstoInMeasure_iff_dist` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:574`  _(also used by 5: tendstoInMeasure_of_inProbabilityConvergence, tendstoInMeasure_lipschitz, tendstoInMeasure_inv_of_ne_zero, …)_
        ★ `tendstoInMeasure_iff_norm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:584`  _(also used by 1: z_estimator_linearization_from_mvt)_
      ★ `isLittleOInProbability_one_iff_tendstoInMeasure_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/Basic.lean:201`  _(also used by 5: tendstoInDistribution_debiasedLasso_scaledCenteredFiniteCoordinate_of_linearScore_and_l1_rowApprox_real, tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, isLittleOInProbability_implies_inProbabilityConvergence_zero, …)_
    ★ `isLittleOInProbability_one_of_inProbabilityConvergence_zero` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:82`  _(also used by 5: isLittleOInProbability_one_iff_inProbabilityConvergence_zero, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_left, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_right, …)_
  ★ `isLittleOInProbability_one_sub_of_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:298`
    ★ `isLittleOInProbability_add_inProbabilityConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:112`  _(also used by 2: inProbabilityConvergence_add_isLittleOInProbability, inProbabilityConvergence_add_of_inProbabilityConvergence_zero_left)_
  ★ `inProbabilityConvergence_of_isLittleOInProbability_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:315`
★ `inProbabilityConvergence_iff_isLittleOInProbability_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/StochasticOrder/ConvergenceBridges.lean:327` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InProbabilityTailEvent"]
  n1["◆ InProbabilityConvergence"]
  n2["◆ IsLittleOInProbability"]
  n3["★ inProbabilityConvergence_neg"]
  n4["★ inProbabilityConvergence_add"]
  n5["★ inProbabilityConvergence_sub"]
  n6["★ tendstoInMeasure_iff_dist"]
  n7["★ tendstoInMeasure_iff_norm"]
  n8["★ isLittleOInProbability_one_iff_tendstoInMeasure_zero"]
  n9["★ isLittleOInProbability_one_of_inProbabilityConvergence_zero"]
  n10["★ isLittleOInProbability_one_sub_of_inProbabilityConvergence"]
  n11["★ isLittleOInProbability_add_inProbabilityConvergence"]
  n12["★ inProbabilityConvergence_of_isLittleOInProbability_sub"]
  n13["★ inProbabilityConvergence_iff_isLittleOInProbability_sub"]
  n1 --> n0
  n3 --> n1
  n3 --> n0
  n4 --> n1
  n4 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  n8 --> n2
  n8 --> n7
  n9 --> n1
  n9 --> n2
  n9 --> n6
  n9 --> n0
  n9 --> n8
  n10 --> n1
  n10 --> n2
  n10 --> n5
  n10 --> n9
  n11 --> n2
  n11 --> n1
  n11 --> n0
  n12 --> n2
  n12 --> n1
  n12 --> n11
  n13 --> n1
  n13 --> n2
  n13 --> n10
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
