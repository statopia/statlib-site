# Proof narrative — integrable_of_ae_tendsto_of_isUniformIntegrable

Root: **integrable_of_ae_tendsto_of_isUniformIntegrable** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:255` · topic `StatFoundation`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `IsUniformIntegrableInLp` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:53`  _(also used by 39: memLp_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, inLpConvergence_two_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrableInLp_two, …)_
  ◆ `IsUniformIntegrable` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:59`  _(also used by 13: tendsto_integral_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_norm_integral_sub_zero_of_inProbabilityConvergence_of_isUniformIntegrable, tendsto_integral_continuousLinearMap_of_inProbabilityConvergence_of_isUniformIntegrable, …)_
★ `integrable_of_ae_tendsto_of_isUniformIntegrable` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:255` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsUniformIntegrableInLp"]
  n1["◆ IsUniformIntegrable"]
  n2["★ integrable_of_ae_tendsto_of_isUniformIntegrable"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
