# Proof narrative — one_step_smooth_lindeberg_bound_bounded

Root: **one_step_smooth_lindeberg_bound_bounded** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/SmoothComparison.lean:35` · topic `StatFoundation`
Closure: 4 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `smoothMax` — noncomputable def · `Statlib/StatFoundation/Convergence/AnalysisTools/SmoothMax.lean:37`  _(also used by 4: smoothMax_def_measurable_continuous, smoothMax_bounds_max_log_card, smoothMax_hessian_bounds, …)_
  ◆ `softmaxWeight` — noncomputable def · `Statlib/StatFoundation/Convergence/AnalysisTools/SmoothMax.lean:42`  _(also used by 3: softmax_weights_sum_nonneg, smoothMax_hessian_bounds, smoothMax_third_derivative_bounds)_
  ★ `smoothMax_gradient_eq_softmax` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/SmoothMax.lean:173`  _(also used by 2: smoothMax_hessian_bounds, smoothMax_third_derivative_bounds)_
★ `one_step_smooth_lindeberg_bound_bounded` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/SmoothComparison.lean:35` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ smoothMax"]
  n1["◆ softmaxWeight"]
  n2["★ smoothMax_gradient_eq_softmax"]
  n3["★ one_step_smooth_lindeberg_bound_bounded"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
