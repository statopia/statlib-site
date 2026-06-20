# Proof narrative — multivariate_clt

Root: **multivariate_clt** (theorem) `Statlib/LimitTheorems/multivariate_clt.lean:38` · topic `LimitTheorems`
Closure: 28 declarations across 28 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `measurable_proj` — lemma · `Statlib/LimitTheorems/measurable_proj.lean:25`
  · `iIndepFun_proj` — lemma · `Statlib/LimitTheorems/iIndepFun_proj.lean:26`
  · `identDistrib_proj` — lemma · `Statlib/LimitTheorems/identDistrib_proj.lean:27`
    ◆ `Sn` — abbrev · `Statlib/LimitTheorems/Sn.lean:13`
    · `measurable_Sn` — lemma · `Statlib/LimitTheorems/measurable_Sn.lean:13`
      · `lyapunov_third_moment` — lemma · `Statlib/CharFun/lyapunov_third_moment.lean:19`  _(also used by 6: charfun_diff_exp_bound, charfun_integral_bound, charfun_integrand_bound, …)_
        · `charfun_sum_indep` — lemma · `Statlib/CharFun/charfun_sum_indep.lean:19`
      · `charfun_iid_sum_eq_prod` — lemma · `Statlib/CharFun/charfun_iid_sum_eq_prod.lean:20`  _(also used by 2: charfun_diff_exp_bound, charfun_diff_taylor_bound)_
      · `charFun_gaussianReal_standard` — lemma · `Statlib/CharFun/charFun_gaussianReal_standard.lean:18`  _(also used by 3: charfun_diff_exp_bound, charfun_diff_taylor_bound, lindeberg_feller_clt)_
            · `norm_ofReal_mul_I` — lemma · `Statlib/CharFun/norm_ofReal_mul_I.lean:17`  _(also used by 1: norm_cexp_sub_quadratic_le_third)_
          · `norm_cexp_sub_quadratic_le` — lemma · `Statlib/CharFun/norm_cexp_sub_quadratic_le.lean:19`  _(also used by 2: charfun_error_le_j, norm_cexp_sub_quadratic_le_sq)_
        · `charfun_taylor_third_moment` — lemma · `Statlib/CharFun/charfun_taylor_third_moment.lean:22`  _(also used by 2: charfun_diff_exp_bound, norm_charFun_le_one_sub)_
        · `norm_prod_sub_prod_le_sum` — lemma · `Statlib/CharFun/norm_prod_sub_prod_le_sum.lean:19`
      · `charfun_prod_vs_pow_bound` — lemma · `Statlib/CharFun/charfun_prod_vs_pow_bound.lean:21`  _(also used by 1: charfun_diff_taylor_bound)_
        · `complex_pow_approx_exp_decay` — lemma · `Statlib/CharFun/complex_pow_approx_exp_decay.lean:21`  _(also used by 1: charfun_diff_exp_bound)_
      · `complex_pow_approx_exp` — lemma · `Statlib/CharFun/complex_pow_approx_exp.lean:18`  _(also used by 1: charfun_diff_taylor_bound)_
        · `charfun_arith_aux` — lemma · `Statlib/CharFun/charfun_arith_aux.lean:17`
      · `charfun_final_arithmetic` — lemma · `Statlib/CharFun/charfun_final_arithmetic.lean:18`
    · `charfun_normalized_sum_bound` — lemma · `Statlib/CharFun/charfun_normalized_sum_bound.lean:32`
        · `compl_Icc_eq_abs_gt` — lemma · `Statlib/LimitTheorems/compl_Icc_eq_abs_gt.lean:16`
        ★ `isTight_finiteRange` — theorem · `Statlib/LimitTheorems/isTight_finiteRange.lean:16`
      ★ `isTight_of_charFun_tendsto` — theorem · `Statlib/LimitTheorems/isTight_of_charFun_tendsto.lean:23`  _(also used by 1: isTight_of_charFun_tendsto_inner)_
        ★ `levy_forward` — theorem · `Statlib/LimitTheorems/levy_forward.lean:20`  _(also used by 3: clt_isAsymptoticallyNormal, cramer_wold_reverse, ustatistic_clt_nondegenerate)_
      · `charFun_eq_of_subseq` — lemma · `Statlib/LimitTheorems/charFun_eq_of_subseq.lean:17`
      · `probMeasure_eq_of_charFun_eq` — lemma · `Statlib/LimitTheorems/probMeasure_eq_of_charFun_eq.lean:17`
    ★ `levy_continuity` — theorem · `Statlib/LimitTheorems/levy_continuity.lean:25`  _(also used by 2: lindeberg_feller_clt, gaussian_limit_of_charfun_convergence)_
  ★ `central_limit_theorem` — theorem · `Statlib/LimitTheorems/central_limit_theorem.lean:20`
★ `multivariate_clt` — theorem · `Statlib/LimitTheorems/multivariate_clt.lean:38` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· measurable_proj"]
  n1["· iIndepFun_proj"]
  n2["· identDistrib_proj"]
  n3["◆ Sn"]
  n4["· measurable_Sn"]
  n5["· lyapunov_third_moment"]
  n6["· charfun_sum_indep"]
  n7["· charfun_iid_sum_eq_prod"]
  n8["· charFun_gaussianReal_standard"]
  n9["· norm_ofReal_mul_I"]
  n10["· norm_cexp_sub_quadratic_le"]
  n11["· charfun_taylor_third_moment"]
  n12["· norm_prod_sub_prod_le_sum"]
  n13["· charfun_prod_vs_pow_bound"]
  n14["· complex_pow_approx_exp_decay"]
  n15["· complex_pow_approx_exp"]
  n16["· charfun_arith_aux"]
  n17["· charfun_final_arithmetic"]
  n18["· charfun_normalized_sum_bound"]
  n19["· compl_Icc_eq_abs_gt"]
  n20["★ isTight_finiteRange"]
  n21["★ isTight_of_charFun_tendsto"]
  n22["★ levy_forward"]
  n23["· charFun_eq_of_subseq"]
  n24["· probMeasure_eq_of_charFun_eq"]
  n25["★ levy_continuity"]
  n26["★ central_limit_theorem"]
  n27["★ multivariate_clt"]
  n2 --> n0
  n4 --> n3
  n7 --> n6
  n10 --> n9
  n11 --> n10
  n13 --> n11
  n13 --> n12
  n15 --> n14
  n17 --> n16
  n18 --> n5
  n18 --> n7
  n18 --> n8
  n18 --> n13
  n18 --> n15
  n18 --> n17
  n21 --> n19
  n21 --> n20
  n23 --> n22
  n25 --> n21
  n25 --> n23
  n25 --> n24
  n26 --> n3
  n26 --> n4
  n26 --> n18
  n26 --> n25
  n27 --> n0
  n27 --> n1
  n27 --> n2
  n27 --> n26
  class n27 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
