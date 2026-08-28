# Proof narrative — tendstoInDistribution_sub_of_tendstoInMeasure_zero_right

Root: **tendstoInDistribution_sub_of_tendstoInMeasure_zero_right** (theorem) `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:498` · topic `StatFoundation`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ★ `tendstoInMeasure_neg` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:307`
  ★ `tendstoInDistribution_of_tendstoInMeasure_sub` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:354`  _(also used by 12: tendstoInDistribution_debiasedLasso_scaledCenteredCoordinate_of_scoreCoordinate_and_l1_rowApprox_real, tendstoInDistribution_add_of_tendstoInMeasure_zero_left, tendstoInDistribution_add_of_tendstoInMeasure_zero_right, …)_
★ `tendstoInDistribution_sub_of_tendstoInMeasure_zero_right` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:498` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ tendstoInMeasure_neg"]
  n1["★ tendstoInDistribution_of_tendstoInMeasure_sub"]
  n2["★ tendstoInDistribution_sub_of_tendstoInMeasure_zero_right"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
