# Proof narrative — representer_minimizer_mem_span_of_pos_lam

Root: **representer_minimizer_mem_span_of_pos_lam** (theorem) `Statlib/Nonparametric/KernelRegression/Representer.lean:81` · topic `Nonparametric`
Closure: 6 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `RKHSModel` — structure · `Statlib/Nonparametric/Vocabulary/RKHS.lean:16`  _(also used by 28: rkhs_eval_bound, rkhsBall_uniform_bound, rkhsBall_lipschitz, …)_
  ◆ `kernelRidgeObjective` — noncomputable def · `Statlib/Nonparametric/Vocabulary/RKHS.lean:29`  _(also used by 2: krr_closed_form_pos_lam, representer_projection_minimizer)_
    ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`  _(also used by 24: exists_fullyConnectedReLUNet_mul_approx_on_box, exists_fullyConnectedReLUNet_linear_combination_two, exists_fullyConnectedReLUNet_coordinate_mul_approx_on_box, …)_
    ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 16: exists_fullyConnectedReLUNet_finite_linear_combination_approx, exists_fullyConnectedReLUNet_product_of_depth_one_approximants_on_box, exists_fullyConnectedReLUNet_finite_centered_monomial_polynomial_approx_on_box, …)_
  ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 79: unit_cube_grid_finite_measurable_cover, kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, …)_
★ `representer_minimizer_mem_span_of_pos_lam` — theorem · `Statlib/Nonparametric/KernelRegression/Representer.lean:81` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ RKHSModel"]
  n1["◆ kernelRidgeObjective"]
  n2["◆ bias"]
  n3["▣ DenseLayer"]
  n4["◆ apply"]
  n5["★ representer_minimizer_mem_span_of_pos_lam"]
  n1 --> n0
  n3 --> n2
  n4 --> n3
  n4 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
