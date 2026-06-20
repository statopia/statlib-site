# Proof narrative — toEigendecompositionSpec

Root: **toEigendecompositionSpec** (def) `Statlib/CoxChangePoint/SpectralOperator.lean:240` · topic `CoxChangePoint`
Closure: 10 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `FunctionalSample` — def · `Statlib/CoxChangePoint/FPC.lean:55`  _(also used by 10: CoxModel, fpcScore, truncatedScores, …)_
    ▣ `SymmetricKernelOperator` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:103`  _(also used by 2: L2BoundedKernelOperator, L2BoundedKernelOperator.ofSymmetric)_
  ▣ `HasEigendecomposition` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:193`
    ◆ `empiricalCovariance` — noncomputable def · `Statlib/CoxChangePoint/FPC.lean:86`
    · `empiricalCovariance_symm` — lemma · `Statlib/CoxChangePoint/SpectralOperator.lean:126`
  ◆ `ofEmpiricalCov` — def · `Statlib/CoxChangePoint/SpectralOperator.lean:147`
    ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 21: benchmark_eigsys, CoxModel, fpcScore, …)_
  ▣ `EigendecompositionSpec` — structure · `Statlib/CoxChangePoint/SpectralBridge.lean:64`  _(also used by 1: EstimatedEigensystem.fromSpec)_
  ◆ `toEigensystem` — def · `Statlib/CoxChangePoint/SpectralOperator.lean:226`  _(also used by 4: SpectralFamilyHS.toEigensystem, SpectralFamilyHS.toEigensystem_lam_summable_sq, SpectralFamilyHS.toEigensystem_lam_decreasing, …)_
◆ `toEigendecompositionSpec` — def · `Statlib/CoxChangePoint/SpectralOperator.lean:240` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ FunctionalSample"]
  n1["▣ SymmetricKernelOperator"]
  n2["▣ HasEigendecomposition"]
  n3["◆ empiricalCovariance"]
  n4["· empiricalCovariance_symm"]
  n5["◆ ofEmpiricalCov"]
  n6["▣ Eigensystem"]
  n7["▣ EigendecompositionSpec"]
  n8["◆ toEigensystem"]
  n9["◆ toEigendecompositionSpec"]
  n2 --> n1
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n1
  n5 --> n3
  n5 --> n4
  n7 --> n0
  n7 --> n6
  n7 --> n3
  n8 --> n1
  n8 --> n2
  n8 --> n6
  n9 --> n0
  n9 --> n2
  n9 --> n5
  n9 --> n7
  n9 --> n8
  class n9 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
