# Proof narrative — krr_closed_form_zero_lam_of_posDef

Root: **krr_closed_form_zero_lam_of_posDef** (theorem) `Statlib/Nonparametric/KernelRegression/KRRClosedForm.lean:272` · topic `Nonparametric`
Closure: 8 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RKHSModel` — structure · `Statlib/Nonparametric/Vocabulary/RKHS.lean:16`  _(also used by 28: rkhs_eval_bound, rkhsBall_uniform_bound, rkhsBall_lipschitz, …)_
  ◆ `kernelGramMatrix` — def · `Statlib/Nonparametric/Vocabulary/KernelMethods.lean:51`  _(also used by 3: krr_closed_form_pos_lam, featureMap_gram_psd, featureMap_gram_posDef)_
    ◆ `IsSymmetricKernel` — def · `Statlib/Nonparametric/Vocabulary/KernelMethods.lean:17`  _(also used by 3: IsPSDKernel, IsPDKernel, rkhsModel_kernel_psd)_
  ★ `rkhsModel_kernel_symm` — theorem · `Statlib/Nonparametric/Vocabulary/RKHS.lean:43`  _(also used by 1: krr_closed_form_pos_lam)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 79: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
★ `krr_closed_form_zero_lam_of_posDef` — theorem · `Statlib/Nonparametric/KernelRegression/KRRClosedForm.lean:272` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RKHSModel"]
  n1["◆ kernelGramMatrix"]
  n2["◆ IsSymmetricKernel"]
  n3["★ rkhsModel_kernel_symm"]
  n4["◆ bias"]
  n5["▣ DenseLayer"]
  n6["◆ apply"]
  n7["★ krr_closed_form_zero_lam_of_posDef"]
  n3 --> n0
  n3 --> n2
  n5 --> n4
  n6 --> n5
  n6 --> n4
  n7 --> n0
  n7 --> n1
  n7 --> n3
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
