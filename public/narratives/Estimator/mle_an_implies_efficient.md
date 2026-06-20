# Proof narrative — mle_an_implies_efficient

Root: **mle_an_implies_efficient** (theorem) `Statlib/Estimator/mle_an_implies_efficient.lean:22` · topic `Estimator`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ▣ `ParametricFamily` — structure · `Statlib/Statistic/Basic.lean:64`  _(also used by 46: CoverageProb, IsConfidenceInterval, IsConfidenceSet, …)_
      ◆ `scoreFunction` — noncomputable def · `Statlib/Information/scoreFunction.lean:12`  _(also used by 2: cramer_rao, expFamily_score_eq)_
    ◆ `fisherInformation` — noncomputable def · `Statlib/Information/fisherInformation.lean:12`  _(also used by 7: IsEfficient, IsSuperefficient, expFamily_fisherInformation_mean_param_eq_inv_variance, …)_
    ▣ `IsAsymptoticallyNormal` — structure · `Statlib/Estimator/IsAsymptoticallyNormal.lean:22`  _(also used by 2: IsSuperefficient, clt_isAsymptoticallyNormal)_
  ◆ `IsMLEAsymptoticallyNormal` — def · `Statlib/Estimator/IsMLEAsymptoticallyNormal.lean:22`
  ◆ `IsAsymptoticallyEfficient` — def · `Statlib/Estimator/IsAsymptoticallyEfficient.lean:22`
★ `mle_an_implies_efficient` — theorem · `Statlib/Estimator/mle_an_implies_efficient.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ ParametricFamily"]
  n1["◆ scoreFunction"]
  n2["◆ fisherInformation"]
  n3["▣ IsAsymptoticallyNormal"]
  n4["◆ IsMLEAsymptoticallyNormal"]
  n5["◆ IsAsymptoticallyEfficient"]
  n6["★ mle_an_implies_efficient"]
  n2 --> n0
  n2 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n3
  n5 --> n2
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
