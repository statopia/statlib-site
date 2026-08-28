# Proof narrative — hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence

Root: **hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:118` · topic `StatFoundation`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 67: inLpConvergence_congr_left, inLpConvergence_congr_right, inLpConvergence_congr, …)_
  ◆ `HasUniformlyAbsolutelyContinuousLpIntegral` — abbrev · `Statlib/StatFoundation/Vocabulary/UniformIntegrability.lean:25`  _(also used by 5: tendsto_eLpNorm_zero_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral, inLpConvergence_of_tendstoInMeasure_of_hasUniformlyAbsolutelyContinuousLpIntegral, inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one, …)_
  ★ `tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:104`  _(also used by 1: inProbabilityConvergence_and_uacIntegral_iff_inLpConvergence_one)_
★ `hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/UniformIntegrability.lean:118` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InLpConvergence"]
  n1["◆ HasUniformlyAbsolutelyContinuousLpIntegral"]
  n2["★ tendstoInMeasure_and_hasUniformlyAbsolutelyContinuousLpIntegral_iff_inLpConvergence"]
  n3["★ hasUniformlyAbsolutelyContinuousLpIntegral_of_inLpConvergence"]
  n2 --> n1
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
