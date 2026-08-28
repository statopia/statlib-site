# Proof narrative — inLpConvergence_congr

Root: **inLpConvergence_congr** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:935` · topic `StatFoundation`
Closure: 4 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `InLpConvergence` — def · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:77`  _(also used by 66: tendstoInMeasure_of_inLpConvergence, inProbabilityConvergence_of_inLpConvergence, inLpConvergence_of_tendsto_eLpNorm, …)_
  ★ `inLpConvergence_congr_right` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:921`
  ★ `inLpConvergence_congr_left` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:907`
★ `inLpConvergence_congr` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:935` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ InLpConvergence"]
  n1["★ inLpConvergence_congr_right"]
  n2["★ inLpConvergence_congr_left"]
  n3["★ inLpConvergence_congr"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
