# Proof narrative — unitCube_selectorIndicatorSieve_holderBall_grid_rate

Root: **unitCube_selectorIndicatorSieve_holderBall_grid_rate** (theorem) `Statlib/Nonparametric/Approximation/Holder.lean:744` · topic `Nonparametric`
Closure: 26 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `FunctionClass` — abbrev · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:16`  _(also used by 21: holder_classApproximationError_le_of_net_member, kernel_smoother_classApproximationError_le_of_holder_bias_member, kernel_smoother_classApproximationError_le_of_holder_bias_rate, …)_
    ◆ `IsHolderFunction` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:44`  _(also used by 17: holder_net_approx_sup_bound, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
  ◆ `holderBall` — def · `Statlib/Nonparametric/Vocabulary/FunctionClasses.lean:56`  _(also used by 6: holderBall_classApproximationError_self_le_zero, exists_selectorIndicator_sieve_for_holderBall_of_finite_net, exists_selectorIndicatorSieve_for_holderBall_rate_of_cover, …)_
    ◆ `integratedSquaredError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Risk.lean:60`  _(also used by 30: supNormBall_classApproximationError_self_le_zero, holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, …)_
    ◆ `seriesFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:27`  _(also used by 30: holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, sieveApproximationError_le_of_holder_selector_net, …)_
  ◆ `sieveApproximationError` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Sieve.lean:42`  _(also used by 19: sieveApproximationError_le_of_holder_selector_net, exists_selectorIndicator_sieve_for_holderBall_of_finite_net, exists_selectorIndicatorSieve_for_holderBall_rate_of_cover, …)_
  ◆ `selectorIndicatorSieve` — def · `Statlib/Nonparametric/Approximation/Sieve.lean:401`  _(also used by 9: holder_selectorIndicator_series_integratedSquaredError_bound, finiteLinearSpan_classApproximationError_le_of_holder_selector_net, sieveApproximationError_le_of_holder_selector_net, …)_
      ◆ `bias` — noncomputable def · `Statlib/Nonparametric/Vocabulary/Estimator.lean:28`
      ▣ `DenseLayer` — structure · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:23`  _(also used by 2: reluApply, OneHiddenReLUNet)_
    ◆ `apply` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:30`  _(also used by 10: kernel_holder_bias_integratedSquaredError_bound, classApproximationError_le_of_exists_pointwise_bound, integratedSquaredError_nonneg, …)_
  ★ `unitCube_grid_finite_measurable_cover` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:551`
    ★ `finiteMeasurableCover_exists_measurable_selector` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:321`  _(also used by 1: exists_selectorIndicatorSieve_for_holderBall_rate_of_finite_measurable_cover)_
            ★ `integratedSquaredError_le_of_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Metric.lean:10`  _(also used by 11: holder_net_integratedSquaredError_bound, holder_classApproximationError_le_of_net_member, holder_selectorIndicator_series_integratedSquaredError_bound, …)_
            ★ `sieveApproximationError_le_of_coefficients` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:107`
            ★ `sieveApproximationError_le_of_pointwise_series_bound` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:248`  _(also used by 1: sieveApproximationError_le_of_holder_selector_net)_
            ★ `sieveApproximationError_range_bddBelow` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:121`
          ★ `sieveApproximationError_le_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:269`
        ★ `sieveApproximationError_uniform_bound_of_exists_pointwise_series` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:285`  _(also used by 3: exists_sieveApproximationError_uniform_bound_of_exists_pointwise_series, tensorProductSplineSieve_holderSmoothBall_error_bound_of_exists_pointwise_series, waveletSieve_holderSmoothBall_error_bound_of_exists_pointwise_series)_
          ★ `selectorIndicator_seriesFunction_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:405`
        ★ `selectorIndicatorSieve_seriesFunction_measurable` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:422`
          ★ `selectorIndicatorSieve_seriesFunction_eq` — theorem · `Statlib/Nonparametric/Approximation/Sieve.lean:428`  _(also used by 3: finiteLinearSpan_classApproximationError_le_of_holder_selector_net, sieveApproximationError_le_of_holder_selector_net, selectorIndicatorBasis_seriesFunction_eq)_
        ★ `holder_selectorIndicator_series_pointwise_bound` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:116`  _(also used by 1: holder_selectorIndicator_series_integratedSquaredError_bound)_
      ★ `holderBall_selectorIndicator_sieveApproximationError_uniform_bound` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:271`
    ★ `exists_selectorIndicatorSieve_for_holderBall_of_finite_net` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:299`  _(also used by 2: exists_selectorIndicator_sieve_for_holderBall_of_finite_net, exists_selectorIndicatorSieve_for_holderBall_rate_of_cover)_
  ★ `exists_selectorIndicatorSieve_for_holderBall_of_finite_measurable_cover` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:319`
★ `unitCube_selectorIndicatorSieve_holderBall_grid_rate` — theorem · `Statlib/Nonparametric/Approximation/Holder.lean:744` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionClass"]
  n1["◆ IsHolderFunction"]
  n2["◆ holderBall"]
  n3["◆ integratedSquaredError"]
  n4["◆ seriesFunction"]
  n5["◆ sieveApproximationError"]
  n6["◆ selectorIndicatorSieve"]
  n7["◆ bias"]
  n8["▣ DenseLayer"]
  n9["◆ apply"]
  n10["★ unitCube_grid_finite_measurable_cover"]
  n11["★ finiteMeasurableCover_exists_measurable_selector"]
  n12["★ integratedSquaredError_le_of_pointwise_bound"]
  n13["★ sieveApproximationError_le_of_coefficients"]
  n14["★ sieveApproximationError_le_of_pointwise_series_bound"]
  n15["★ sieveApproximationError_range_bddBelow"]
  n16["★ sieveApproximationError_le_of_exists_pointwise_series"]
  n17["★ sieveApproximationError_uniform_bound_of_exists_pointwise_series"]
  n18["★ selectorIndicator_seriesFunction_measurable"]
  n19["★ selectorIndicatorSieve_seriesFunction_measurable"]
  n20["★ selectorIndicatorSieve_seriesFunction_eq"]
  n21["★ holder_selectorIndicator_series_pointwise_bound"]
  n22["★ holderBall_selectorIndicator_sieveApproximationError_uniform_bound"]
  n23["★ exists_selectorIndicatorSieve_for_holderBall_of_finite_net"]
  n24["★ exists_selectorIndicatorSieve_for_holderBall_of_finite_measurable_cover"]
  n25["★ unitCube_selectorIndicatorSieve_holderBall_grid_rate"]
  n2 --> n0
  n2 --> n1
  n5 --> n3
  n5 --> n4
  n8 --> n7
  n9 --> n8
  n9 --> n7
  n10 --> n9
  n12 --> n3
  n13 --> n3
  n13 --> n4
  n13 --> n5
  n14 --> n4
  n14 --> n3
  n14 --> n5
  n14 --> n12
  n14 --> n13
  n15 --> n3
  n15 --> n4
  n15 --> n9
  n16 --> n4
  n16 --> n5
  n16 --> n14
  n16 --> n15
  n17 --> n4
  n17 --> n5
  n17 --> n16
  n18 --> n4
  n18 --> n9
  n19 --> n4
  n19 --> n6
  n19 --> n18
  n20 --> n4
  n20 --> n6
  n21 --> n1
  n21 --> n4
  n21 --> n6
  n21 --> n20
  n22 --> n2
  n22 --> n5
  n22 --> n6
  n22 --> n17
  n22 --> n19
  n22 --> n21
  n23 --> n2
  n23 --> n5
  n23 --> n6
  n23 --> n22
  n24 --> n2
  n24 --> n5
  n24 --> n6
  n24 --> n11
  n24 --> n23
  n25 --> n2
  n25 --> n5
  n25 --> n6
  n25 --> n10
  n25 --> n24
  class n25 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
