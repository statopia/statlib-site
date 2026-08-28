# Proof narrative — ate_y1_eq_by_propensity

Root: **ate_y1_eq_by_propensity** (theorem) `Statlib/Causal/Identification.lean:1718` · topic `Causal`
Closure: 8 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `Unconfounded` — def · `Statlib/Causal/Vocabulary.lean:38`  _(also used by 1: ate_diff_eq)_
  ◆ `Consistent` — def · `Statlib/Causal/Vocabulary.lean:44`  _(also used by 2: obs_eq_potential_outcome_of_T, ate_diff_eq)_
  ◆ `propensityScore` — noncomputable def · `Statlib/Causal/Vocabulary.lean:31`  _(also used by 2: ate_diff_eq, condExp_mul_indicator_eq_mul_condExp_of_condIndep)_
  ◆ `Overlap` — def · `Statlib/Causal/Vocabulary.lean:49`  _(also used by 1: ate_diff_eq)_
  ★ `condIndep_of_unconfounded_by_propensity` — theorem · `Statlib/Causal/Identification.lean:788`
    ★ `tendstoInMeasure_of_tendsto_eLpNorm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:976`  _(also used by 3: condExp_mul_indicator_eq_mul_condExp_of_condIndep, tendstoInMeasure_of_inLpConvergence, inProbabilityConvergence_of_tendsto_eLpNorm)_
  ★ `ate_y1_eq` — theorem · `Statlib/Causal/Identification.lean:65`  _(also used by 1: ate_diff_eq)_
★ `ate_y1_eq_by_propensity` — theorem · `Statlib/Causal/Identification.lean:1718` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Unconfounded"]
  n1["◆ Consistent"]
  n2["◆ propensityScore"]
  n3["◆ Overlap"]
  n4["★ condIndep_of_unconfounded_by_propensity"]
  n5["★ tendstoInMeasure_of_tendsto_eLpNorm"]
  n6["★ ate_y1_eq"]
  n7["★ ate_y1_eq_by_propensity"]
  n3 --> n2
  n4 --> n0
  n4 --> n2
  n6 --> n0
  n6 --> n1
  n6 --> n3
  n6 --> n2
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n3
  n7 --> n2
  n7 --> n4
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
