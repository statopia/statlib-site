# Proof narrative — directionScoreInformationIdentity

Root: **directionScoreInformationIdentity** (theorem) `Statlib/StatFoundation/Statistics/Estimation/MultiParameter.lean:272` · topic `StatFoundation`
Closure: 6 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `densityScoreDir` — noncomputable def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:221`
  ◆ `secondDirectionalLog` — noncomputable def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:229`
  ◆ `densityScore` — noncomputable def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:64`  _(also used by 6: score_mean_zero_of_density_regular, unbiased_derivative_eq_cov_score, cramer_rao_lower_bound, …)_
  ◆ `fisherInformation` — noncomputable def · `Statlib/StatFoundation/Statistics/Estimation/Vocabulary.lean:72`  _(also used by 2: cramer_rao_lower_bound, mle_asymptotic_normal)_
  ★ `fisher_identity_of_second_derivative` — theorem · `Statlib/StatFoundation/Statistics/Estimation/MLE.lean:39`  _(also used by 1: mle_asymptotic_normal)_
★ `directionScoreInformationIdentity` — theorem · `Statlib/StatFoundation/Statistics/Estimation/MultiParameter.lean:272` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ densityScoreDir"]
  n1["◆ secondDirectionalLog"]
  n2["◆ densityScore"]
  n3["◆ fisherInformation"]
  n4["★ fisher_identity_of_second_derivative"]
  n5["★ directionScoreInformationIdentity"]
  n3 --> n2
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n4
  n5 --> n2
  n5 --> n3
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
