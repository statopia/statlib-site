# Proof narrative — amse_delta_method_scalar

Root: **amse_delta_method_scalar** (theorem) `Statlib/Estimator/amse_delta_method_scalar.lean:36` · topic `Estimator`
Closure: 7 declarations across 7 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ★ `remainder_tendstoInMeasure` — theorem · `Statlib/LimitTheorems/remainder_tendstoInMeasure.lean:20`
      ★ `slutsky_add` — theorem · `Statlib/LimitTheorems/slutsky_add.lean:16`
    ★ `delta_method` — theorem · `Statlib/LimitTheorems/delta_method.lean:24`  _(also used by 1: delta_method_sqrt_n)_
  ★ `amse_delta_method_convergence` — theorem · `Statlib/Estimator/amse_delta_method_convergence.lean:22`
  ★ `amse_delta_method_second_moment` — theorem · `Statlib/Estimator/amse_delta_method_second_moment.lean:24`
  ★ `amse_delta_method_variance` — theorem · `Statlib/Estimator/amse_delta_method_variance.lean:24`
★ `amse_delta_method_scalar` — theorem · `Statlib/Estimator/amse_delta_method_scalar.lean:36` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["★ remainder_tendstoInMeasure"]
  n1["★ slutsky_add"]
  n2["★ delta_method"]
  n3["★ amse_delta_method_convergence"]
  n4["★ amse_delta_method_second_moment"]
  n5["★ amse_delta_method_variance"]
  n6["★ amse_delta_method_scalar"]
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n6 --> n3
  n6 --> n4
  n6 --> n5
  class n6 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
