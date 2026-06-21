# Proof narrative — lindeberg_feller_central_limit_theorem

Root: **lindeberg_feller_central_limit_theorem** (theorem) `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:676` · topic `StatFoundation`
Closure: 21 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `LindebergSum` — def · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:25`
  · `charFun_gaussianReal_standard` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:272`  _(also used by 1: charfun_normalized_sum_bound)_
    · `charfun_indep_sum_eq_prod` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:34`
      · `var_ratio_le_lindeberg` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:274`
    · `lindeberg_implies_max_var_tendsto` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:327`
    · `norm_prod_sub_prod_le_sum_mul_pow` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:227`
    · `prod_one_sub_tendsto_exp_neg` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:380`
            · `norm_ofReal_mul_I` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:16`  _(also used by 1: norm_cexp_sub_quadratic_le_third)_
        · `norm_cexp_sub_quadratic_le` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:22`  _(also used by 1: charfun_taylor_third_moment)_
        · `norm_cexp_sub_quadratic_le_sq` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:79`
      · `charfun_error_le_j` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:110`
    · `sum_charfun_errors_le` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:243`
  ★ `charfun_lindeberg_pointwise` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:476`
      · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
      ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:14`
    ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: isTight_of_charFun_tendsto_inner)_
      ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: cramer_wold_reverse)_
    · `charFun_eq_of_subseq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:168`
    · `probMeasure_eq_of_charFun_eq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:180`
  ★ `levy_continuity` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:193`  _(also used by 1: iid_central_limit_theorem)_
★ `lindeberg_feller_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/LindebergFeller.lean:676` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ LindebergSum"]
  n1["· charFun_gaussianReal_standard"]
  n2["· charfun_indep_sum_eq_prod"]
  n3["· var_ratio_le_lindeberg"]
  n4["· lindeberg_implies_max_var_tendsto"]
  n5["· norm_prod_sub_prod_le_sum_mul_pow"]
  n6["· prod_one_sub_tendsto_exp_neg"]
  n7["· norm_ofReal_mul_I"]
  n8["· norm_cexp_sub_quadratic_le"]
  n9["· norm_cexp_sub_quadratic_le_sq"]
  n10["· charfun_error_le_j"]
  n11["· sum_charfun_errors_le"]
  n12["★ charfun_lindeberg_pointwise"]
  n13["· compl_Icc_eq_abs_gt"]
  n14["★ isTight_finiteRange"]
  n15["★ isTight_of_charFun_tendsto"]
  n16["★ levy_forward"]
  n17["· charFun_eq_of_subseq"]
  n18["· probMeasure_eq_of_charFun_eq"]
  n19["★ levy_continuity"]
  n20["★ lindeberg_feller_central_limit_theorem"]
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n6 --> n5
  n8 --> n7
  n9 --> n8
  n10 --> n9
  n10 --> n8
  n11 --> n0
  n11 --> n10
  n12 --> n0
  n12 --> n2
  n12 --> n4
  n12 --> n6
  n12 --> n5
  n12 --> n11
  n15 --> n13
  n15 --> n14
  n17 --> n16
  n19 --> n15
  n19 --> n17
  n19 --> n18
  n20 --> n0
  n20 --> n1
  n20 --> n12
  n20 --> n19
  class n20 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
