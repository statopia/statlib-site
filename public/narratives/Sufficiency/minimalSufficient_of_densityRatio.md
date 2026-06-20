# Proof narrative — minimalSufficient_of_densityRatio

Root: **minimalSufficient_of_densityRatio** (theorem) `Statlib/Sufficiency/minimalSufficient_of_densityRatio.lean:21` · topic `Sufficiency`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `DominatedFamily` — structure · `Statlib/Sufficiency/DominatedFamily.lean:15`  _(also used by 6: DominatedFamily.density, DominatedFamily.mixtureDensity, DominatedFamily.mixtureRatio, …)_
  ◆ `IsSufficientFor` — def · `Statlib/Sufficiency/IsSufficientFor.lean:17`  _(also used by 4: IsSufficientForFamily, factorization_backward, factorization_forward, …)_
  ◆ `DensityRatioCondition` — def · `Statlib/Sufficiency/DensityRatioCondition.lean:17`
  ◆ `HasJointFactorization` — def · `Statlib/Sufficiency/HasJointFactorization.lean:18`  _(also used by 1: mixtureRatio_minimalSufficient)_
★ `minimalSufficient_of_densityRatio` — theorem · `Statlib/Sufficiency/minimalSufficient_of_densityRatio.lean:21` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ DominatedFamily"]
  n1["◆ IsSufficientFor"]
  n2["◆ DensityRatioCondition"]
  n3["◆ HasJointFactorization"]
  n4["★ minimalSufficient_of_densityRatio"]
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
