# Proof narrative — mpMeasure_isProbabilityMeasure

Root: **mpMeasure_isProbabilityMeasure** (theorem) `Statlib/RandomMatrix/mpMeasure_isProbabilityMeasure.lean:19` · topic `RandomMatrix`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `mpLowerEdge` — noncomputable def · `Statlib/RandomMatrix/mpLowerEdge.lean:17`  _(also used by 10: marchenko_pastur_convergence, mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_not_mem, …)_
    ◆ `mpUpperEdge` — noncomputable def · `Statlib/RandomMatrix/mpUpperEdge.lean:17`  _(also used by 11: marchenko_pastur_convergence, mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_not_mem, …)_
    ◆ `mpDensity` — noncomputable def · `Statlib/RandomMatrix/mpDensity.lean:20`  _(also used by 6: mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_nonpos, …)_
  ◆ `mpMeasure` — noncomputable def · `Statlib/RandomMatrix/mpMeasure.lean:22`  _(also used by 4: marchenko_pastur_convergence, mpStieltjes_fixed_point, mpStieltjes_fixed_point_axiom, …)_
  ⚠ `mpMeasure_isProbabilityMeasure_axiom` — axiom · `Statlib/RandomMatrix/mpMeasure_isProbabilityMeasure_axiom.lean:22`
★ `mpMeasure_isProbabilityMeasure` — theorem · `Statlib/RandomMatrix/mpMeasure_isProbabilityMeasure.lean:19` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ mpLowerEdge"]
  n1["◆ mpUpperEdge"]
  n2["◆ mpDensity"]
  n3["◆ mpMeasure"]
  n4["⚠ mpMeasure_isProbabilityMeasure_axiom"]
  n5["★ mpMeasure_isProbabilityMeasure"]
  n2 --> n0
  n2 --> n1
  n3 --> n0
  n3 --> n1
  n3 --> n2
  n4 --> n3
  n5 --> n3
  n5 --> n4
  class n5 headline;
  class n4 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
