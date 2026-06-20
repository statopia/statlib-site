# Proof narrative — mpStieltjes_fixed_point

Root: **mpStieltjes_fixed_point** (theorem) `Statlib/RandomMatrix/mpStieltjes_fixed_point.lean:23` · topic `RandomMatrix`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `mpLowerEdge` — noncomputable def · `Statlib/RandomMatrix/mpLowerEdge.lean:17`  _(also used by 8: marchenko_pastur_convergence, mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_not_mem, …)_
  ◆ `mpUpperEdge` — noncomputable def · `Statlib/RandomMatrix/mpUpperEdge.lean:17`  _(also used by 9: marchenko_pastur_convergence, mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_not_mem, …)_
  ◆ `stieltjesTransform` — noncomputable def · `Statlib/RandomMatrix/stieltjesTransform.lean:18`  _(also used by 5: marchenko_pastur_convergence, stieltjesTransform_dirac, stieltjesTransform_smul, …)_
    ◆ `mpDensity` — noncomputable def · `Statlib/RandomMatrix/mpDensity.lean:20`  _(also used by 6: mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_nonpos, …)_
  ◆ `mpMeasure` — noncomputable def · `Statlib/RandomMatrix/mpMeasure.lean:22`  _(also used by 4: marchenko_pastur_convergence, mpMeasure_isProbabilityMeasure, mpMeasure_isProbabilityMeasure_axiom, …)_
  ⚠ `mpStieltjes_fixed_point_axiom` — axiom · `Statlib/RandomMatrix/mpStieltjes_fixed_point_axiom.lean:26`
★ `mpStieltjes_fixed_point` — theorem · `Statlib/RandomMatrix/mpStieltjes_fixed_point.lean:23` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ mpLowerEdge"]
  n1["◆ mpUpperEdge"]
  n2["◆ stieltjesTransform"]
  n3["◆ mpDensity"]
  n4["◆ mpMeasure"]
  n5["⚠ mpStieltjes_fixed_point_axiom"]
  n6["★ mpStieltjes_fixed_point"]
  n3 --> n0
  n3 --> n1
  n4 --> n0
  n4 --> n1
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n2
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n4
  n6 --> n5
  class n6 headline;
  class n5 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
