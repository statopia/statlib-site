# Proof narrative — SpectralFamilyHS.toEigensystem_lam_summable_sq

Root: **SpectralFamilyHS.toEigensystem_lam_summable_sq** (lemma) `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:331` · topic `CoxChangePoint`
Closure: 15 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ▣ `SymmetricKernelOperator` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:103`  _(also used by 2: L2BoundedKernelOperator.ofSymmetric, ofEmpiricalCov)_
    ▣ `L2BoundedKernelOperator` — structure · `Statlib/CoxChangePoint/L2Operator.lean:212`  _(also used by 6: integralAction_integral_sq_le, L2BoundedKernelOperator.ofSymmetric, integralAction_smul, …)_
      ▣ `CoxParam` — structure · `Statlib/CoxChangePoint/Foundation.lean:57`  _(also used by 72: liftAuto, concreteGn, buildLemmaS1Data, …)_
      ▣ `CoxObs` — structure · `Statlib/CoxChangePoint/Foundation.lean:38`  _(also used by 42: TruncSample, benchmark_obs, coxScoreAt, …)_
    ◆ `g` — noncomputable def · `Statlib/CoxChangePoint/Foundation.lean:68`  _(also used by 18: AssumptionA7, exponential_moment_bound, HasFirstOrderTaylor, …)_
  ▣ `L2KernelMapData` — structure · `Statlib/CoxChangePoint/L2OperatorMap.lean:204`  _(also used by 9: SpectralFamilyHS.toEigensystem_lam_decreasing, opNorm_le, L2KernelMapData.mk', …)_
  ▣ `SpectralFamilyHS` — structure · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:87`  _(also used by 11: inner_self_eq_one, inner_of_ne, norm_eigenfn, …)_
  ◆ `toContinuousLinearMap` — def · `Statlib/CoxChangePoint/L2OperatorMap.lean:239`  _(also used by 9: SpectralFamilyHS.toEigensystem_lam_decreasing, opNorm_le, InfiniteDimSpectralData.phiRepr, …)_
      ▣ `HasEigendecomposition` — structure · `Statlib/CoxChangePoint/SpectralOperator.lean:193`  _(also used by 1: toEigendecompositionSpec)_
    ▣ `Eigensystem` — structure · `Statlib/CoxChangePoint/FPC.lean:42`  _(also used by 21: benchmark_eigsys, CoxModel, fpcScore, …)_
  ◆ `toEigensystem` — def · `Statlib/CoxChangePoint/SpectralOperator.lean:226`  _(also used by 3: SpectralFamilyHS.toEigensystem_lam_decreasing, toEigendecompositionSpec, InfiniteDimSpectralData.toEigensystem)_
    ◆ `SpectralFamilyHS.phiRepr` — noncomputable def · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:306`
    · `SpectralFamilyHS.phiRepr_meas` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:313`
  ◆ `SpectralFamilyHS.toEigensystem` — noncomputable def · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:321`  _(also used by 1: SpectralFamilyHS.toEigensystem_lam_decreasing)_
· `SpectralFamilyHS.toEigensystem_lam_summable_sq` — lemma · `Statlib/CoxChangePoint/InfiniteDimSpectral.lean:331` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SymmetricKernelOperator"]
  n1["▣ L2BoundedKernelOperator"]
  n2["▣ CoxParam"]
  n3["▣ CoxObs"]
  n4["◆ g"]
  n5["▣ L2KernelMapData"]
  n6["▣ SpectralFamilyHS"]
  n7["◆ toContinuousLinearMap"]
  n8["▣ HasEigendecomposition"]
  n9["▣ Eigensystem"]
  n10["◆ toEigensystem"]
  n11["◆ SpectralFamilyHS.phiRepr"]
  n12["· SpectralFamilyHS.phiRepr_meas"]
  n13["◆ SpectralFamilyHS.toEigensystem"]
  n14["· SpectralFamilyHS.toEigensystem_lam_summable_sq"]
  n1 --> n0
  n4 --> n2
  n4 --> n3
  n5 --> n1
  n5 --> n4
  n8 --> n0
  n10 --> n0
  n10 --> n8
  n10 --> n9
  n11 --> n5
  n11 --> n6
  n11 --> n7
  n12 --> n5
  n12 --> n6
  n12 --> n7
  n12 --> n11
  n13 --> n10
  n13 --> n5
  n13 --> n6
  n13 --> n7
  n13 --> n9
  n13 --> n11
  n13 --> n12
  n14 --> n5
  n14 --> n6
  n14 --> n7
  n14 --> n13
  n14 --> n10
  class n14 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
