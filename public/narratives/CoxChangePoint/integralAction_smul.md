# Proof narrative — integralAction_smul

Root: **integralAction_smul** (lemma) `Statlib/CoxChangePoint/L2OperatorMap.lean:110` · topic `CoxChangePoint`
Closure: 4 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `integralAction` — noncomputable def · `Statlib/CoxChangePoint/L2Operator.lean:68`  _(also used by 7: integralAction_sq_le, integralAction_symm, integralAction_sq_le_M, …)_
    ▣ `SymmetricKernelOperator` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:103`  _(also used by 4: L2BoundedKernelOperator.ofSymmetric, ofEmpiricalCov, HasEigendecomposition, …)_
  ▣ `L2BoundedKernelOperator` — structure · `Statlib/CoxChangePoint/L2Operator.lean:212`  _(also used by 6: integralAction_integral_sq_le, L2BoundedKernelOperator.ofSymmetric, L2KernelMapData, …)_
· `integralAction_smul` — lemma · `Statlib/CoxChangePoint/L2OperatorMap.lean:110` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ integralAction"]
  n1["▣ SymmetricKernelOperator"]
  n2["▣ L2BoundedKernelOperator"]
  n3["· integralAction_smul"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
