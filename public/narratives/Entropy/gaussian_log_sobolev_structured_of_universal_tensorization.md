# Proof narrative — gaussian_log_sobolev_structured_of_universal_tensorization

Root: **gaussian_log_sobolev_structured_of_universal_tensorization** (theorem) `Statlib/Entropy/LogSobolev.lean:3109` · topic `Entropy`
Closure: 14 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      ◆ `stdGaussian` — abbrev · `Statlib/Gaussian/Basic.lean:29`  _(also used by 96: stdGaussianPi_absolutelyContinuous, integrable_mul_gaussianPDFReal_of_memLp, integrable_id_mul_mul_gaussianPDFReal_of_memLp, …)_
    ◆ `stdGaussianPi` — def · `Statlib/Gaussian/Basic.lean:32`  _(also used by 67: isProbabilityMeasure_stdGaussianPi, sigmaFinite_stdGaussianPi, stdGaussianPi_absolutelyContinuous, …)_
  ▣ `GaussianSobolevRegularity` — structure · `Statlib/Entropy/Basic.lean:68`  _(also used by 1: gaussian_log_sobolev_structured_of_tensorization_at)_
    ◆ `entropy` — def · `Statlib/Entropy/Basic.lean:31`  _(also used by 22: condEntropyAt, entropy_eq_integral_mul_log_of_integral_eq_one, entropy_const, …)_
  ◆ `SatisfiesLSI` — def · `Statlib/Entropy/Basic.lean:42`  _(also used by 7: SatisfiesLSI.mono, SatisfiesLSI.apply, gaussian_log_sobolev_structured_of_tensorization_at, …)_
  ◆ `entropyPi` — def · `Statlib/Entropy/Basic.lean:35`  _(also used by 14: entropyPi_eq_integral_mul_log_of_integral_eq_one, entropyPi_const, entropyPi_sq_eq, …)_
    ◆ `TensorizationLSIAt` — def · `Statlib/Entropy/Basic.lean:52`  _(also used by 2: gaussian_log_sobolev_structured_of_tensorization_at, tensorization_lsi_core)_
  ◆ `UniversalTensorizationLSI` — def · `Statlib/Entropy/Basic.lean:64`
        ★ `tensorization_lsi` — theorem · `Statlib/Entropy/LogSobolev.lean:3037`
      ★ `tensorization_lsi_of_at` — theorem · `Statlib/Entropy/LogSobolev.lean:3051`
    ★ `gaussian_log_sobolev_of_tensorization_at` — theorem · `Statlib/Entropy/LogSobolev.lean:3070`  _(also used by 2: gaussian_log_sobolev_structured_of_tensorization_at, gaussian_log_sobolev)_
    · `tensorization_lsi_at_of_universal` — lemma · `Statlib/Entropy/LogSobolev.lean:3065`
  ★ `gaussian_log_sobolev_of_universal_tensorization` — theorem · `Statlib/Entropy/LogSobolev.lean:3083`
★ `gaussian_log_sobolev_structured_of_universal_tensorization` — theorem · `Statlib/Entropy/LogSobolev.lean:3109` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ stdGaussian"]
  n1["◆ stdGaussianPi"]
  n2["▣ GaussianSobolevRegularity"]
  n3["◆ entropy"]
  n4["◆ SatisfiesLSI"]
  n5["◆ entropyPi"]
  n6["◆ TensorizationLSIAt"]
  n7["◆ UniversalTensorizationLSI"]
  n8["★ tensorization_lsi"]
  n9["★ tensorization_lsi_of_at"]
  n10["★ gaussian_log_sobolev_of_tensorization_at"]
  n11["· tensorization_lsi_at_of_universal"]
  n12["★ gaussian_log_sobolev_of_universal_tensorization"]
  n13["★ gaussian_log_sobolev_structured_of_universal_tensorization"]
  n1 --> n0
  n2 --> n1
  n4 --> n3
  n6 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  n7 --> n6
  n8 --> n4
  n8 --> n6
  n8 --> n5
  n9 --> n4
  n9 --> n6
  n9 --> n5
  n9 --> n8
  n10 --> n4
  n10 --> n6
  n10 --> n5
  n10 --> n9
  n11 --> n7
  n11 --> n6
  n12 --> n4
  n12 --> n7
  n12 --> n5
  n12 --> n10
  n12 --> n11
  n13 --> n2
  n13 --> n4
  n13 --> n7
  n13 --> n5
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
