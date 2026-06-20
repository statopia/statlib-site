# Proof narrative — lemma_s4

Root: **lemma_s4** (theorem) `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:154` · topic `CoxChangePoint`
Closure: 9 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `AssumptionA1` — structure · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:10`
      ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 72: liftAuto, concreteGn, buildLemmaS1Data, …)_
      ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 42: TruncSample, benchmark_obs, coxScoreAt, …)_
  ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 16: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
  ▣ `AssumptionA7` — structure · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:18`
  · `lemma_s4_add_sq_bound` — private lemma · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:45`
  · `lemma_s4_supr_sq_lintegral_bound` — private lemma · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:60`
  · `lemma_s4_z1_const_factor` — private lemma · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:86`
★ `lemma_s4` — theorem · `Statlib/CoxChangePoint/SupProductSquareIntegrable.lean:154` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ AssumptionA1"]
  n1["▣ CoxParam"]
  n2["▣ CoxObs"]
  n3["◆ g"]
  n4["▣ AssumptionA7"]
  n5["· lemma_s4_add_sq_bound"]
  n6["· lemma_s4_supr_sq_lintegral_bound"]
  n7["· lemma_s4_z1_const_factor"]
  n8["★ lemma_s4"]
  n3 --> n1
  n3 --> n2
  n4 --> n3
  n6 --> n4
  n6 --> n3
  n7 --> n0
  n7 --> n4
  n7 --> n3
  n7 --> n6
  n8 --> n0
  n8 --> n4
  n8 --> n3
  n8 --> n5
  n8 --> n7
  n8 --> n6
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
