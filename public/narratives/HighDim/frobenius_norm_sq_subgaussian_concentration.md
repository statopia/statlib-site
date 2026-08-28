# Proof narrative — frobenius_norm_sq_subgaussian_concentration

Root: **frobenius_norm_sq_subgaussian_concentration** (theorem) `Statlib/HighDim/Concentration/FrobeniusNormSqConcentration.lean:21` · topic `HighDim`
Closure: 58 declarations across 11 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `frobeniusNormSq` — noncomputable def · `Statlib/HighDim/Vocabulary/Norms.lean:105`  _(also used by 44: gaussian_quadratic_form_concentration, frobeniusNormSq_zeroDiagMatrix_le, frobeniusNormSq_nonneg, …)_
  ◆ `quadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:15`  _(also used by 21: gaussian_quadratic_form_concentration, quadratic_form_mean_isotropic, zeroDiag_centered_quadratic_form_tail_high_of_decoupling_and_decoupled_tail, …)_
  ▣ `HasMean` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:83`  _(also used by 114: gaussian_quadratic_form_concentration, coord_mul_subexponential_exists_of_indep, coord_mul_scaled_subexponential_exists_of_indep, …)_
  ▣ `IsSubGaussianVector` — structure · `Statlib/HighDim/Vocabulary/RandomVector.lean:52`  _(also used by 164: gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_const_right_subgaussian, decoupledOffDiagQuadForm_const_right_abs_tail_real, …)_
  ▣ `HansonWrightScaleConditions` — structure · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:67`  _(also used by 3: gaussian_quadratic_form_concentration, hanson_wright, hanson_wright_isotropic)_
  ◆ `zeroDiagMatrix` — def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:52`  _(also used by 33: gaussian_quadratic_form_concentration, offDiagCoeff_eq_zeroDiagMatrix_mulVec, offDiagCoeff_norm_le_zeroDiag, …)_
  ◆ `decoupledOffDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:33`  _(also used by 45: gaussian_quadratic_form_concentration, decoupledOffDiagQuadForm_eq_sum_coeff, decoupledOffDiagQuadForm_eq_inner_coeff, …)_
    ◆ `offDiagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:27`  _(also used by 8: offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_decoupling_norm_bernstein_absorb, …)_
      ◆ `diagQuadForm` — noncomputable def · `Statlib/HighDim/Vocabulary/QuadraticForms.lean:21`  _(also used by 2: diagQuadForm_centered_tail_bernstein_explicit, hanson_wright_tail_high_of_offdiag_tail)_
    · `quadForm_eq_diag_add_offdiag` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:236`
    · `diagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:254`
    · `offDiagQuadForm_zeroDiagMatrix` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:260`
  · `quadForm_zeroDiagMatrix_eq_offDiagQuadForm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:271`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
  · `offDiagQuadForm_eq_zero_of_entries` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:280`  _(also used by 1: zeroDiag_centered_quadratic_form_tail_high_of_offdiag_entries_zero)_
      · `measure_event_le_ofReal_of_one_le` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1495`
        ★ `offdiag_hanson_wright_tail_high_of_offdiag_entries_zero` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4352`
            · `inner_eq_sum` — lemma · `Statlib/HighDim/Vocabulary/Norms.lean:100`  _(also used by 20: decoupledOffDiagQuadForm_eq_inner_coeff, offDiagCoeffVec_apply_eq_inner_row_zeroDiag, subgaussian_norm_sq_mean_le_dim, …)_
          · `subgaussian_vector_coord` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1341`  _(also used by 15: coord_mul_subexponential_exists_of_indep, coord_sq_centered_mgf_bound, weighted_coord_sq_centered_sum_tail_explicit, …)_
            · `coord_mul_integrable_of_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1232`
          · `offDiagQuadForm_integrable_of_coord_sq_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1270`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
            · `diagQuadForm_centered_eq_sum` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:312`  _(also used by 1: diagQuadForm_centered_tail_bernstein_explicit)_
            · `right_pos_of_pos_lt_min` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1518`
            · `hanson_high_spectral_denom_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1539`
            · `hanson_high_norm_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1552`
            ▣ `HasSubexponentialMGF` — structure · `Statlib/StatFoundation/Vocabulary/RandomVariable.lean:74`  _(also used by 30: coord_mul_subexponential_exists_of_indep, subexponential_mgf_const_mul_relaxed, coord_mul_scaled_subexponential_exists_of_indep, …)_
            · `matrix_entry_abs_le_l2_opNorm` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:350`  _(also used by 2: diagPartMatrix_norm_le, symmetric_trotter_product)_
            ★ `subgaussian_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_meas_abs_ge_le_two_exp.lean:9`  _(also used by 5: subgaussian_linf_tail, lasso_noise_condition, coordinate_sample_envelope_good_profile_tail, …)_
            ★ `subgaussian_integrable_exp_sq_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:165`  _(also used by 4: coord_mul_subexponential_exists_of_indep, coord_sq_centered_subexponential_exists, design_noise_inner_subexponential, …)_
            · `coord_sq_centered_scaled_exp_integrable` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2016`  _(also used by 1: cov_trace_concentration)_
            · `sub_gauss_tail_abs` — lemma · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:13`  _(also used by 1: sub_gauss_tail_sq)_
            · `sq_le_two_mul_exp` — lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/sq_le_two_mul_exp.lean:10`  _(also used by 1: standardPi_logSobolev_smooth_finiteFisher_coord)_
            ★ `subgaussian_exp_sq_le_at_one_third` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_exp_sq_le_at_one_third.lean:14`
            ★ `subexp_mgf_le_of_sq_subgaussian_explicit` — theorem · `Statlib/StatFoundation/RandomVariable/SubExponential/subexp_mgf_le_of_sq_subgaussian.lean:73`  _(also used by 2: scalar_sq_centered_subexponential_explicit, subexp_mgf_le_of_sq_subgaussian)_
            · `coord_sq_centered_mgf_bound_explicit` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1952`  _(also used by 2: coord_sq_centered_scaled_mgf_bound_explicit, cov_trace_concentration)_
            · `coord_sq_centered_scaled_subexponential_explicit_of_range` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2097`  _(also used by 2: weighted_coord_sq_centered_sum_tail_explicit, subgaussian_norm_sq_subexponential)_
            ★ `bernstein_sum_meas_abs_ge_le_two_exp` — theorem · `Statlib/StatFoundation/Concentration/ExponentialType/bernstein_sum_meas_abs_ge_le_two_exp.lean:13`  _(also used by 5: weighted_coord_sq_centered_sum_tail_explicit, cov_trace_concentration, sampleCovariance_concentration, …)_
            · `left_pos_of_pos_lt_min` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1513`
            · `hanson_high_frobenius_denom_pos` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1525`  _(also used by 1: hanson_high_frobenius_pos)_
            · `diag_sq_sum_le_frobeniusNormSq` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:377`
            · `two_mul_exp_neg_le_exp_neg_hanson_high` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1580`
            · `diagonal_bernstein_real_bound` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1678`
          ★ `diag_hanson_wright_tail_high` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3897`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
          · `exp_neg_hanson_stronger_le_weaker` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1670`
            · `coord_mul_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1249`  _(also used by 1: coord_mul_subexponential_exists_of_indep)_
            · `offDiagQuadForm_integral_eq_zero_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1283`
          · `offDiagQuadForm_centered_eq_self_of_indep` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1328`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
            · `quadForm_centered_eq_diag_offdiag_centered` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:295`
            · `abs_add_event_subset_half` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1728`
            · `quadForm_centered_tail_le_diag_offdiag_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1745`
          · `quadForm_centered_tail_le_two_mul_of_diag_offdiag_tail_bounds` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:1795`  _(also used by 1: hanson_wright_tail_high_of_offdiag_tail)_
        ★ `hanson_wright_tail_high_of_offdiag_tail_weakened` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4202`
            · `offdiag_tail_of_zeroDiag_centered_quad_tail` — lemma · `Statlib/HighDim/Concentration/HansonWright.lean:2885`  _(also used by 6: offdiag_hanson_wright_tail_high_norm_bernstein_of_decoupling, offdiag_hanson_wright_tail_high_norm_bernstein_of_const_decoupling, offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb, …)_
          ★ `offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:3676`
        ★ `hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4289`
      ★ `hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents'` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4399`
    ★ `hanson_wright_tail_of_const_decoupling_norm_bernstein_absorb_of_exponents` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4484`  _(also used by 1: hanson_wright_of_const_decoupling_norm_bernstein_absorb_of_exponents)_
  ★ `hanson_wright_tail_of_const_decoupling_scale_conditions` — theorem · `Statlib/HighDim/Concentration/HansonWright.lean:4577`  _(also used by 1: hanson_wright)_
★ `frobenius_norm_sq_subgaussian_concentration` — theorem · `Statlib/HighDim/Concentration/FrobeniusNormSqConcentration.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ frobeniusNormSq"]
  n1["◆ quadForm"]
  n2["▣ HasMean"]
  n3["▣ IsSubGaussianVector"]
  n4["▣ HansonWrightScaleConditions"]
  n5["◆ zeroDiagMatrix"]
  n6["◆ decoupledOffDiagQuadForm"]
  n7["◆ offDiagQuadForm"]
  n8["◆ diagQuadForm"]
  n9["· quadForm_eq_diag_add_offdiag"]
  n10["· diagQuadForm_zeroDiagMatrix"]
  n11["· offDiagQuadForm_zeroDiagMatrix"]
  n12["· quadForm_zeroDiagMatrix_eq_offDiagQuadForm"]
  n13["· offDiagQuadForm_eq_zero_of_entries"]
  n14["· measure_event_le_ofReal_of_one_le"]
  n15["★ offdiag_hanson_wright_tail_high_of_offdiag_entries_zero"]
  n16["· inner_eq_sum"]
  n17["· subgaussian_vector_coord"]
  n18["· coord_mul_integrable_of_sq_integrable"]
  n19["· offDiagQuadForm_integrable_of_coord_sq_integrable"]
  n20["· diagQuadForm_centered_eq_sum"]
  n21["· right_pos_of_pos_lt_min"]
  n22["· hanson_high_spectral_denom_pos"]
  n23["· hanson_high_norm_pos"]
  n24["▣ HasSubexponentialMGF"]
  n25["· matrix_entry_abs_le_l2_opNorm"]
  n26["★ subgaussian_meas_abs_ge_le_two_exp"]
  n27["★ subgaussian_integrable_exp_sq_at_one_third"]
  n28["· coord_sq_centered_scaled_exp_integrable"]
  n29["· sub_gauss_tail_abs"]
  n30["· sq_le_two_mul_exp"]
  n31["★ subgaussian_exp_sq_le_at_one_third"]
  n32["★ subexp_mgf_le_of_sq_subgaussian_explicit"]
  n33["· coord_sq_centered_mgf_bound_explicit"]
  n34["· coord_sq_centered_scaled_subexponential_explicit_of_range"]
  n35["★ bernstein_sum_meas_abs_ge_le_two_exp"]
  n36["· left_pos_of_pos_lt_min"]
  n37["· hanson_high_frobenius_denom_pos"]
  n38["· diag_sq_sum_le_frobeniusNormSq"]
  n39["· two_mul_exp_neg_le_exp_neg_hanson_high"]
  n40["· diagonal_bernstein_real_bound"]
  n41["★ diag_hanson_wright_tail_high"]
  n42["· exp_neg_hanson_stronger_le_weaker"]
  n43["· coord_mul_integral_eq_zero_of_indep"]
  n44["· offDiagQuadForm_integral_eq_zero_of_indep"]
  n45["· offDiagQuadForm_centered_eq_self_of_indep"]
  n46["· quadForm_centered_eq_diag_offdiag_centered"]
  n47["· abs_add_event_subset_half"]
  n48["· quadForm_centered_tail_le_diag_offdiag_tail"]
  n49["· quadForm_centered_tail_le_two_mul_of_diag_offdiag_tail_bounds"]
  n50["★ hanson_wright_tail_high_of_offdiag_tail_weakened"]
  n51["· offdiag_tail_of_zeroDiag_centered_quad_tail"]
  n52["★ offdiag_hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents"]
  n53["★ hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents"]
  n54["★ hanson_wright_tail_high_of_const_decoupling_norm_bernstein_absorb_of_exponents'"]
  n55["★ hanson_wright_tail_of_const_decoupling_norm_bernstein_absorb_of_exponents"]
  n56["★ hanson_wright_tail_of_const_decoupling_scale_conditions"]
  n57["★ frobenius_norm_sq_subgaussian_concentration"]
  n4 --> n0
  n9 --> n1
  n9 --> n8
  n9 --> n7
  n10 --> n8
  n10 --> n5
  n11 --> n7
  n11 --> n5
  n12 --> n1
  n12 --> n5
  n12 --> n7
  n12 --> n9
  n12 --> n10
  n12 --> n11
  n13 --> n7
  n15 --> n7
  n15 --> n13
  n17 --> n3
  n17 --> n16
  n19 --> n7
  n19 --> n18
  n20 --> n8
  n22 --> n0
  n22 --> n21
  n23 --> n0
  n23 --> n22
  n27 --> n26
  n28 --> n3
  n28 --> n17
  n28 --> n27
  n31 --> n26
  n32 --> n29
  n32 --> n30
  n32 --> n31
  n32 --> n27
  n33 --> n3
  n33 --> n17
  n33 --> n32
  n34 --> n3
  n34 --> n24
  n34 --> n28
  n34 --> n33
  n35 --> n24
  n37 --> n0
  n37 --> n36
  n38 --> n0
  n40 --> n39
  n41 --> n3
  n41 --> n0
  n41 --> n8
  n41 --> n17
  n41 --> n20
  n41 --> n22
  n41 --> n23
  n41 --> n24
  n41 --> n25
  n41 --> n34
  n41 --> n35
  n41 --> n37
  n41 --> n38
  n41 --> n40
  n43 --> n2
  n44 --> n2
  n44 --> n7
  n44 --> n18
  n44 --> n43
  n45 --> n2
  n45 --> n7
  n45 --> n44
  n46 --> n8
  n46 --> n7
  n46 --> n1
  n46 --> n9
  n48 --> n8
  n48 --> n7
  n48 --> n1
  n48 --> n46
  n48 --> n47
  n49 --> n8
  n49 --> n7
  n49 --> n1
  n49 --> n48
  n50 --> n2
  n50 --> n3
  n50 --> n0
  n50 --> n7
  n50 --> n1
  n50 --> n17
  n50 --> n8
  n50 --> n19
  n50 --> n41
  n50 --> n42
  n50 --> n45
  n50 --> n49
  n51 --> n2
  n51 --> n1
  n51 --> n5
  n51 --> n7
  n51 --> n12
  n51 --> n44
  n52 --> n2
  n52 --> n3
  n52 --> n0
  n52 --> n1
  n52 --> n5
  n52 --> n6
  n52 --> n7
  n52 --> n17
  n52 --> n51
  n53 --> n2
  n53 --> n3
  n53 --> n0
  n53 --> n1
  n53 --> n5
  n53 --> n6
  n53 --> n50
  n53 --> n52
  n54 --> n2
  n54 --> n3
  n54 --> n0
  n54 --> n1
  n54 --> n5
  n54 --> n6
  n54 --> n7
  n54 --> n15
  n54 --> n50
  n54 --> n53
  n55 --> n2
  n55 --> n3
  n55 --> n0
  n55 --> n1
  n55 --> n5
  n55 --> n6
  n55 --> n14
  n55 --> n54
  n56 --> n2
  n56 --> n3
  n56 --> n4
  n56 --> n1
  n56 --> n5
  n56 --> n6
  n56 --> n0
  n56 --> n55
  n57 --> n0
  n57 --> n1
  n57 --> n2
  n57 --> n3
  n57 --> n4
  n57 --> n5
  n57 --> n6
  n57 --> n12
  n57 --> n13
  n57 --> n56
  class n57 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
