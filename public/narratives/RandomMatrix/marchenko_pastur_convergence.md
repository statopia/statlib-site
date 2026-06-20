# Proof narrative — marchenko_pastur_convergence

Root: **marchenko_pastur_convergence** (theorem) `Statlib/RandomMatrix/marchenko_pastur_convergence.lean:35` · topic `RandomMatrix`
Closure: 8 declarations across 8 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `mpLowerEdge` — noncomputable def · `Statlib/RandomMatrix/mpLowerEdge.lean:17`  _(also used by 8: mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_not_mem, mpDensity_nonneg, …)_
  ◆ `mpUpperEdge` — noncomputable def · `Statlib/RandomMatrix/mpUpperEdge.lean:17`  _(also used by 9: mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_not_mem, mpDensity_nonneg, …)_
  ◆ `stieltjesTransform` — noncomputable def · `Statlib/RandomMatrix/stieltjesTransform.lean:18`  _(also used by 5: mpStieltjes_fixed_point, mpStieltjes_fixed_point_axiom, stieltjesTransform_dirac, …)_
  ◆ `empiricalSpectralMeasure` — noncomputable def · `Statlib/RandomMatrix/empiricalSpectralMeasure.lean:20`  _(also used by 3: empiricalSpectralMeasure_def, empiricalSpectralMeasure_isProbabilityMeasure, empiricalSpectralMeasure_zero)_
    ◆ `mpDensity` — noncomputable def · `Statlib/RandomMatrix/mpDensity.lean:20`  _(also used by 6: mpDensity_eq_zero_of_gt_upper, mpDensity_eq_zero_of_lt_lower, mpDensity_eq_zero_of_nonpos, …)_
  ◆ `mpMeasure` — noncomputable def · `Statlib/RandomMatrix/mpMeasure.lean:22`  _(also used by 4: mpMeasure_isProbabilityMeasure, mpMeasure_isProbabilityMeasure_axiom, mpStieltjes_fixed_point, …)_
  ⚠ `stieltjes_continuity_theorem_axiom` — axiom · `Statlib/RandomMatrix/stieltjes_continuity_theorem_axiom.lean:30`
★ `marchenko_pastur_convergence` — theorem · `Statlib/RandomMatrix/marchenko_pastur_convergence.lean:35` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ mpLowerEdge"]
  n1["◆ mpUpperEdge"]
  n2["◆ stieltjesTransform"]
  n3["◆ empiricalSpectralMeasure"]
  n4["◆ mpDensity"]
  n5["◆ mpMeasure"]
  n6["⚠ stieltjes_continuity_theorem_axiom"]
  n7["★ marchenko_pastur_convergence"]
  n4 --> n0
  n4 --> n1
  n5 --> n0
  n5 --> n1
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n2
  n6 --> n3
  n6 --> n5
  n7 --> n0
  n7 --> n1
  n7 --> n2
  n7 --> n3
  n7 --> n5
  n7 --> n6
  class n7 headline;
  class n6 axiomNode;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
