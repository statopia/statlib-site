# Proof narrative — expFamily_fisherInformation_mean_param_eq_inv_variance

Root: **expFamily_fisherInformation_mean_param_eq_inv_variance** (theorem) `Statlib/ExpFamily/expFamily_fisherInformation_mean_param_eq_inv_variance.lean:33` · topic `ExpFamily`
Closure: 9 declarations across 9 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 42: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
    ◆ `scoreFunction` — noncomputable def · `Statlib/Information/scoreFunction.lean:12`  _(also used by 1: cramer_rao)_
  ◆ `fisherInformation` — noncomputable def · `Statlib/Information/fisherInformation.lean:12`  _(also used by 5: IsEfficient, IsAsymptoticallyEfficient, IsMLEAsymptoticallyNormal, …)_
  ◆ `expFamilyLogDensity` — noncomputable def · `Statlib/Information/expFamilyLogDensity.lean:13`
        ★ `expFamily_score_eq` — theorem · `Statlib/Information/expFamily_score_eq.lean:16`
      ★ `expFamily_fisher_eq` — theorem · `Statlib/Information/expFamily_fisher_eq.lean:17`
    ★ `expFamily_fisher_eq_variance` — theorem · `Statlib/Information/expFamily_fisher_eq_variance.lean:18`
  ★ `expFamily_variance_eq_fisherInformation` — theorem · `Statlib/ExpFamily/expFamily_variance_eq_fisherInformation.lean:17`
★ `expFamily_fisherInformation_mean_param_eq_inv_variance` — theorem · `Statlib/ExpFamily/expFamily_fisherInformation_mean_param_eq_inv_variance.lean:33` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ scoreFunction"]
  n2["◆ fisherInformation"]
  n3["◆ expFamilyLogDensity"]
  n4["★ expFamily_score_eq"]
  n5["★ expFamily_fisher_eq"]
  n6["★ expFamily_fisher_eq_variance"]
  n7["★ expFamily_variance_eq_fisherInformation"]
  n8["★ expFamily_fisherInformation_mean_param_eq_inv_variance"]
  n2 --> n0
  n2 --> n1
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n3
  n5 --> n4
  n6 --> n0
  n6 --> n2
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n2
  n7 --> n3
  n7 --> n6
  n8 --> n0
  n8 --> n2
  n8 --> n3
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
