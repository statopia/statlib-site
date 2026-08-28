# Proof narrative — ate_diff_eq

Root: **ate_diff_eq** (theorem) `Statlib/Causal/Identification.lean:1076` · topic `Causal`
Closure: 7 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `Unconfounded` — def · `Statlib/Causal/Vocabulary.lean:38`  _(also used by 2: condIndep_of_unconfounded_by_propensity, ate_y1_eq_by_propensity)_
  ◆ `Consistent` — def · `Statlib/Causal/Vocabulary.lean:44`  _(also used by 2: obs_eq_potential_outcome_of_T, ate_y1_eq_by_propensity)_
  ◆ `propensityScore` — noncomputable def · `Statlib/Causal/Vocabulary.lean:31`  _(also used by 3: condIndep_of_unconfounded_by_propensity, ate_y1_eq_by_propensity, condExp_mul_indicator_eq_mul_condExp_of_condIndep)_
  ◆ `Overlap` — def · `Statlib/Causal/Vocabulary.lean:49`  _(also used by 1: ate_y1_eq_by_propensity)_
    ★ `tendstoInMeasure_of_tendsto_eLpNorm` — theorem · `Statlib/StatFoundation/Convergence/AnalysisTools/ConvergenceModes.lean:976`  _(also used by 3: condExp_mul_indicator_eq_mul_condExp_of_condIndep, tendstoInMeasure_of_inLpConvergence, inProbabilityConvergence_of_tendsto_eLpNorm)_
  ★ `ate_y1_eq` — theorem · `Statlib/Causal/Identification.lean:65`  _(also used by 1: ate_y1_eq_by_propensity)_
★ `ate_diff_eq` — theorem · `Statlib/Causal/Identification.lean:1076` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ Unconfounded"]
  n1["◆ Consistent"]
  n2["◆ propensityScore"]
  n3["◆ Overlap"]
  n4["★ tendstoInMeasure_of_tendsto_eLpNorm"]
  n5["★ ate_y1_eq"]
  n6["★ ate_diff_eq"]
  n3 --> n2
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n3
  n6 --> n2
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
