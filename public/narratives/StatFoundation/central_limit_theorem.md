# Proof narrative — central_limit_theorem

Root: **central_limit_theorem** (theorem) `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:96` · topic `StatFoundation`
Closure: 25 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `standardizedSum` — abbrev · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:21`  _(also used by 1: Sn)_
  · `measurable_standardizedSum` — lemma · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:24`  _(also used by 1: measurable_Sn)_
      · `lyapunov_third_moment` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:563`
        · `charfun_sum_indep` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:282`
      · `charfun_iid_sum_eq_prod` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:323`
      · `charFun_gaussianReal_standard` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:272`  _(also used by 1: lindeberg_feller_central_limit_theorem)_
            · `norm_ofReal_mul_I` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:16`  _(also used by 1: norm_cexp_sub_quadratic_le_third)_
          · `norm_cexp_sub_quadratic_le` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:22`  _(also used by 2: norm_cexp_sub_quadratic_le_sq, charfun_error_le_j)_
        · `charfun_taylor_third_moment` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:86`
        · `norm_prod_sub_prod_le_sum` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:187`
      · `charfun_prod_vs_pow_bound` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:419`
        · `complex_pow_approx_exp_decay` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:350`
      · `complex_pow_approx_exp` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:401`
        · `charfun_arith_aux` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:486`
      · `charfun_final_arithmetic` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:510`
    · `charfun_normalized_sum_bound` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/CharacteristicFunction.lean:612`
        · `compl_Icc_eq_abs_gt` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:15`
        ★ `isTight_finiteRange` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/Tightness.lean:14`
      ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:44`  _(also used by 1: isTight_of_charFun_tendsto_inner)_
        ★ `levy_forward` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:31`  _(also used by 1: cramer_wold_reverse)_
      · `charFun_eq_of_subseq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:168`
      · `probMeasure_eq_of_charFun_eq` — lemma · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:180`
    ★ `levy_continuity` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/LevyContinuity.lean:193`  _(also used by 1: lindeberg_feller_central_limit_theorem)_
  ★ `iid_central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:42`  _(also used by 1: multivariate_central_limit_theorem)_
★ `central_limit_theorem` — theorem · `Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean:96` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ standardizedSum"]
  n1["· measurable_standardizedSum"]
  n2["· lyapunov_third_moment"]
  n3["· charfun_sum_indep"]
  n4["· charfun_iid_sum_eq_prod"]
  n5["· charFun_gaussianReal_standard"]
  n6["· norm_ofReal_mul_I"]
  n7["· norm_cexp_sub_quadratic_le"]
  n8["· charfun_taylor_third_moment"]
  n9["· norm_prod_sub_prod_le_sum"]
  n10["· charfun_prod_vs_pow_bound"]
  n11["· complex_pow_approx_exp_decay"]
  n12["· complex_pow_approx_exp"]
  n13["· charfun_arith_aux"]
  n14["· charfun_final_arithmetic"]
  n15["· charfun_normalized_sum_bound"]
  n16["· compl_Icc_eq_abs_gt"]
  n17["★ isTight_finiteRange"]
  n18["★ isTight_of_charFun_tendsto"]
  n19["★ levy_forward"]
  n20["· charFun_eq_of_subseq"]
  n21["· probMeasure_eq_of_charFun_eq"]
  n22["★ levy_continuity"]
  n23["★ iid_central_limit_theorem"]
  n24["★ central_limit_theorem"]
  n1 --> n0
  n4 --> n3
  n7 --> n6
  n8 --> n7
  n10 --> n8
  n10 --> n9
  n12 --> n11
  n14 --> n13
  n15 --> n2
  n15 --> n4
  n15 --> n5
  n15 --> n10
  n15 --> n12
  n15 --> n14
  n18 --> n16
  n18 --> n17
  n20 --> n19
  n22 --> n18
  n22 --> n20
  n22 --> n21
  n23 --> n0
  n23 --> n1
  n23 --> n15
  n23 --> n22
  n24 --> n0
  n24 --> n1
  n24 --> n23
  class n24 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
