# Proof narrative — tendsto_covariance_self_of_tendsto_integral_of_momentConvergence_two_real

Root: **tendsto_covariance_self_of_tendsto_integral_of_momentConvergence_two_real** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:400` · topic `StatFoundation`
Closure: 5 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `MomentConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:113`  _(also used by 4: momentConvergence_one_of_inLpConvergence_one, momentConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable, momentConvergence_two_of_tendsto_integral_norm_rpow_two, …)_
      ★ `tendsto_integral_norm_rpow_two_of_momentConvergence_two` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:298`
    ★ `tendsto_integral_sq_of_momentConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:318`
  ★ `tendsto_variance_of_tendsto_integral_of_momentConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:339`
★ `tendsto_covariance_self_of_tendsto_integral_of_momentConvergence_two_real` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/IntegralConvergence.lean:400` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ MomentConvergence"]
  n1["★ tendsto_integral_norm_rpow_two_of_momentConvergence_two"]
  n2["★ tendsto_integral_sq_of_momentConvergence_two_real"]
  n3["★ tendsto_variance_of_tendsto_integral_of_momentConvergence_two_real"]
  n4["★ tendsto_covariance_self_of_tendsto_integral_of_momentConvergence_two_real"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n4 --> n0
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
