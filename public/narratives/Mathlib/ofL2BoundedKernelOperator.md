# Proof narrative — ofL2BoundedKernelOperator

Root: **ofL2BoundedKernelOperator** (noncomputable def) `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:269` · topic `Mathlib`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `SymmetricKernelOperator` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:103`  _(also used by 4: L2BoundedKernelOperator.ofSymmetric, ofEmpiricalCov, HasEigendecomposition, …)_
  ▣ `L2BoundedKernelOperator` — structure · `Statlib/CoxChangePoint/L2Operator.lean:212`  _(also used by 6: integralAction_integral_sq_le, L2BoundedKernelOperator.ofSymmetric, integralAction_smul, …)_
  ▣ `L2KernelHS` — structure · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:196`  _(also used by 4: kernelNormSq, kernelNormSq_nonneg, toContinuousLinearMap, …)_
◆ `ofL2BoundedKernelOperator` — noncomputable def · `Statlib/Mathlib/Analysis/HilbertSchmidt.lean:269` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SymmetricKernelOperator"]
  n1["▣ L2BoundedKernelOperator"]
  n2["▣ L2KernelHS"]
  n3["◆ ofL2BoundedKernelOperator"]
  n1 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
