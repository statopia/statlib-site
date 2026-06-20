# Proof narrative — efron_stein_anova_key

Root: **efron_stein_anova_key** (lemma) `Statlib/Variance/efron_stein_anova_key.lean:22` · topic `Variance`
Closure: 17 declarations across 17 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sigmaAlgExcept` — def · `Statlib/Variance/sigmaAlgExcept.lean:20`  _(also used by 14: gaussian_poincare_of_condVar_sum, condExp_eq_fiberAvg_pi, condVar_le_condExp_gradf_sq_ae_succ, …)_
  · `sigmaAlgExcept_le` — lemma · `Statlib/Variance/sigmaAlgExcept_le.lean:22`  _(also used by 4: condExp_eq_fiberAvg_pi, condVar_le_condExp_gradf_sq_ae_succ, gaussian_poincare_coord_bound_core, …)_
      · `variance_pi_of_isEmpty` — lemma · `Statlib/Variance/variance_pi_of_isEmpty.lean:17`  _(also used by 1: efron_stein_isEmpty)_
      ◆ `condExpExceptCoord` — def · `Statlib/Variance/condExpExceptCoord.lean:21`  _(also used by 13: gaussian_poincare_of_efron_stein, gaussian_poincare_of_condVar_sum, gaussian_poincare_coord_bound_core, …)_
        ◆ `piSys` — def · `Statlib/Variance/piSys.lean:22`
          · `iIndep_coord_pi` — lemma · `Statlib/Variance/iIndep_coord_pi.lean:22`
      · `indep_sigmaAlgExcept_coord` — lemma · `Statlib/Variance/indep_sigmaAlgExcept_coord.lean:24`
      · `setIntegral_eq_integral_mul_meas_of_indep` — lemma · `Statlib/Variance/setIntegral_eq_integral_mul_meas_of_indep.lean:22`
          · `generateFrom_piSys` — lemma · `Statlib/Variance/generateFrom_piSys.lean:25`
          · `isPiSystem_piSys` — lemma · `Statlib/Variance/isPiSystem_piSys.lean:21`
        · `ae_eq_zero_of_integral_piSys_zero` — lemma · `Statlib/Variance/ae_eq_zero_of_integral_piSys_zero.lean:25`
      · `condExp_condExp_comm_pi` — lemma · `Statlib/Variance/condExp_condExp_comm_pi.lean:29`
        · `integral_sq_condExp_le` — lemma · `Statlib/Variance/integral_sq_condExp_le.lean:43`
      · `efron_stein_condVar_le_of_condExp` — lemma · `Statlib/Variance/efron_stein_condVar_le_of_condExp.lean:24`
    ★ `efron_stein_core_gen` — theorem · `Statlib/Variance/efron_stein_core_gen.lean:29`
  ★ `efron_stein_core` — theorem · `Statlib/Variance/efron_stein_core.lean:21`  _(also used by 1: efron_stein)_
· `efron_stein_anova_key` — lemma · `Statlib/Variance/efron_stein_anova_key.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sigmaAlgExcept"]
  n1["· sigmaAlgExcept_le"]
  n2["· variance_pi_of_isEmpty"]
  n3["◆ condExpExceptCoord"]
  n4["◆ piSys"]
  n5["· iIndep_coord_pi"]
  n6["· indep_sigmaAlgExcept_coord"]
  n7["· setIntegral_eq_integral_mul_meas_of_indep"]
  n8["· generateFrom_piSys"]
  n9["· isPiSystem_piSys"]
  n10["· ae_eq_zero_of_integral_piSys_zero"]
  n11["· condExp_condExp_comm_pi"]
  n12["· integral_sq_condExp_le"]
  n13["· efron_stein_condVar_le_of_condExp"]
  n14["★ efron_stein_core_gen"]
  n15["★ efron_stein_core"]
  n16["· efron_stein_anova_key"]
  n1 --> n0
  n3 --> n0
  n4 --> n0
  n6 --> n0
  n6 --> n5
  n8 --> n4
  n8 --> n1
  n9 --> n4
  n10 --> n4
  n10 --> n8
  n10 --> n9
  n11 --> n0
  n11 --> n1
  n11 --> n4
  n11 --> n6
  n11 --> n7
  n11 --> n10
  n13 --> n3
  n13 --> n0
  n13 --> n1
  n13 --> n11
  n13 --> n12
  n14 --> n0
  n14 --> n2
  n14 --> n3
  n14 --> n1
  n14 --> n11
  n14 --> n6
  n14 --> n7
  n14 --> n13
  n15 --> n0
  n15 --> n14
  n16 --> n0
  n16 --> n1
  n16 --> n15
  class n16 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
