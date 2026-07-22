# Proof narrative — standardReal_ou_mehler_generator_pos

Root: **standardReal_ou_mehler_generator_pos** (theorem) `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:3250` · topic `StatFoundation`
Closure: 26 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `standardReal` — abbrev · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:31`  _(also used by 38: memLp_aeval_intPolynomial_standard, integrable_aeval_intPolynomial_standard, memLp_hermite_eval_mul, …)_
  ◆ `standardReal_ou_mehler` — def · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1294`  _(also used by 2: standardReal_ou_mehler_log_growth_pos, standardReal_ou_mehler_log_growth_local_pos)_
  · `abs_le_of_deriv_bound` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:22`  _(also used by 1: standardReal_ou_mehler_log_growth_local_pos)_
            · `integrable_exp_abs_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:652`  _(also used by 1: integrable_quadratic_mul_exp_abs_gaussianReal)_
            · `integrable_linear_mul_exp_abs_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:681`  _(also used by 1: integrable_linear_mul_exp_abs_standard)_
        · `integrable_linear_mul_exp_abs_mul_gaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:761`
        · `weighted_gaussian_integrableExpSet_id_eq_univ` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:933`
        · `gaussian_kernel_eq_gaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:887`
        · `gaussian_kernel_exp_mul_zero_pdf` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:912`
      · `gaussian_convolution_nonneg_linearGrowth_contDiff_top` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1070`
      · `gaussian_convolution_linearGrowth_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:997`
    · `gaussian_convolution_linearGrowth_contDiff_top_of_bound` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1148`
  ★ `standardReal_mehler_apply_contDiff` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1564`  _(also used by 1: standardReal_ou_mehler_basic)_
  · `integrable_of_contDiff_deriv_bounded_standardReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:44`  _(also used by 1: standardReal_ou_mehler_log_growth_pos)_
  · `standardReal_mehler_integrand_integrable` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:1311`  _(also used by 4: standardReal_mehler_apply_pos, standardReal_mehler_apply_continuous, standardReal_ou_mehler_log_growth_pos, …)_
      · `memLp_pow_id_gaussianReal_aux` — private lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:114`
  · `memLp_pow_id_gaussianReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:139`  _(also used by 2: standardReal_integrable_mul_log_of_pos_contDiff_deriv_bounded, standardReal_ou_mehler_log_growth_local_pos)_
      · `hasDerivAt_standardGaussianPDFReal` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:178`  _(also used by 1: hasDerivAt_hermite_eval_mul_gaussianPDF)_
      · `integrable_id_mul_mul_pdf_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:96`
      · `integrable_mul_pdf_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:84`
    · `standard_stein_identity` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Stein.lean:25`  _(also used by 3: integral_hermite_eval_eq_zero, integral_hermite_eval_mul_succ, standard_stein_identity_of_lipschitz)_
      · `memLp_polynomial_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Standard.lean:144`  _(also used by 2: memLp_aeval_intPolynomial_standard, integrable_polynomial_mul_pdf_standard)_
    · `integrable_mul_polynomial_of_memLp_standard` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/Hermite.lean:302`  _(also used by 1: integral_polynomial_mul_eq_zero_of_moments)_
  · `standardReal_integrationByParts_smooth_bddDeriv` — lemma · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:195`
  ★ `integrable_id` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/HilbertSpace.lean:253`
★ `standardReal_ou_mehler_generator_pos` — theorem · `Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean:3250` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ standardReal"]
  n1["◆ standardReal_ou_mehler"]
  n2["· abs_le_of_deriv_bound"]
  n3["· integrable_exp_abs_gaussianReal"]
  n4["· integrable_linear_mul_exp_abs_gaussianReal"]
  n5["· integrable_linear_mul_exp_abs_mul_gaussianPDFReal"]
  n6["· weighted_gaussian_integrableExpSet_id_eq_univ"]
  n7["· gaussian_kernel_eq_gaussianPDFReal"]
  n8["· gaussian_kernel_exp_mul_zero_pdf"]
  n9["· gaussian_convolution_nonneg_linearGrowth_contDiff_top"]
  n10["· gaussian_convolution_linearGrowth_integrable"]
  n11["· gaussian_convolution_linearGrowth_contDiff_top_of_bound"]
  n12["★ standardReal_mehler_apply_contDiff"]
  n13["· integrable_of_contDiff_deriv_bounded_standardReal"]
  n14["· standardReal_mehler_integrand_integrable"]
  n15["· memLp_pow_id_gaussianReal_aux"]
  n16["· memLp_pow_id_gaussianReal"]
  n17["· hasDerivAt_standardGaussianPDFReal"]
  n18["· integrable_id_mul_mul_pdf_of_memLp_standard"]
  n19["· integrable_mul_pdf_of_memLp_standard"]
  n20["· standard_stein_identity"]
  n21["· memLp_polynomial_standard"]
  n22["· integrable_mul_polynomial_of_memLp_standard"]
  n23["· standardReal_integrationByParts_smooth_bddDeriv"]
  n24["★ integrable_id"]
  n25["★ standardReal_ou_mehler_generator_pos"]
  n1 --> n0
  n4 --> n3
  n5 --> n4
  n6 --> n5
  n8 --> n7
  n9 --> n6
  n9 --> n8
  n10 --> n5
  n10 --> n7
  n11 --> n9
  n11 --> n10
  n12 --> n0
  n12 --> n2
  n12 --> n11
  n13 --> n0
  n13 --> n2
  n14 --> n0
  n14 --> n13
  n16 --> n15
  n18 --> n0
  n19 --> n0
  n20 --> n0
  n20 --> n17
  n20 --> n18
  n20 --> n19
  n21 --> n0
  n21 --> n16
  n22 --> n0
  n22 --> n21
  n23 --> n0
  n23 --> n2
  n23 --> n16
  n23 --> n20
  n23 --> n13
  n23 --> n22
  n25 --> n1
  n25 --> n12
  n25 --> n0
  n25 --> n14
  n25 --> n23
  n25 --> n24
  n25 --> n16
  n25 --> n2
  n25 --> n13
  class n25 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
