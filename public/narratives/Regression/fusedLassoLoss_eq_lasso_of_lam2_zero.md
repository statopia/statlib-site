# Proof narrative — fusedLassoLoss_eq_lasso_of_lam2_zero

Root: **fusedLassoLoss_eq_lasso_of_lam2_zero** (lemma) `Statlib/Regression/fusedLassoLoss_eq_lasso_of_lam2_zero.lean:9` · topic `Regression`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `l1Norm` — def · `Statlib/Regression/l1Norm.lean:15`  _(also used by 24: IsDantzigSelector, IsDantzigSelector.l1_le_truth, IsSqrtLassoEstimator.l1_diff_bound, …)_
    ◆ `totalVariation` — def · `Statlib/Regression/totalVariation.lean:13`  _(also used by 4: fusedLassoLoss_nonneg, totalVariation_const, totalVariation_nonneg, …)_
  ◆ `fusedLassoLoss` — noncomputable def · `Statlib/Regression/fusedLassoLoss.lean:12`  _(also used by 2: IsFusedLassoEstimator, fusedLassoLoss_nonneg)_
  ◆ `lassoLoss` — noncomputable def · `Statlib/Regression/lassoLoss.lean:16`  _(also used by 4: IsAdaptiveLassoEstimator.isLassoEstimator_of_w_one, IsLassoEstimator, elasticNetLoss_eq_lasso_of_lam2_zero, …)_
· `fusedLassoLoss_eq_lasso_of_lam2_zero` — lemma · `Statlib/Regression/fusedLassoLoss_eq_lasso_of_lam2_zero.lean:9` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l1Norm"]
  n1["◆ totalVariation"]
  n2["◆ fusedLassoLoss"]
  n3["◆ lassoLoss"]
  n4["· fusedLassoLoss_eq_lasso_of_lam2_zero"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
