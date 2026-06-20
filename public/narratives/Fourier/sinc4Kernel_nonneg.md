# Proof narrative — sinc4Kernel_nonneg

Root: **sinc4Kernel_nonneg** (lemma) `Statlib/Fourier/sinc4Kernel_nonneg.lean:11` · topic `Fourier`
Closure: 5 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `triangleKernel` — noncomputable def · `Statlib/Fourier/triangleKernel.lean:7`  _(also used by 11: jackson_kernel_tail_bound, triangleKernel_continuous, triangleKernel_eq_on_nonneg, …)_
  ◆ `sinc4Kernel` — noncomputable def · `Statlib/Fourier/sinc4Kernel.lean:9`  _(also used by 3: sinc4Kernel_integrable, sinc4Kernel_integral, sinc4Kernel_zero_of_abs_ge)_
  · `sinc4Kernel_eq` — lemma · `Statlib/Fourier/sinc4Kernel_eq.lean:9`  _(also used by 1: sinc4Kernel_zero_of_abs_ge)_
  · `triangleKernel_nonneg` — lemma · `Statlib/Fourier/triangleKernel_nonneg.lean:8`  _(also used by 3: jackson_kernel_tail_bound, triangleKernel_first_moment, triangleKernel_tail)_
· `sinc4Kernel_nonneg` — lemma · `Statlib/Fourier/sinc4Kernel_nonneg.lean:11` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ triangleKernel"]
  n1["◆ sinc4Kernel"]
  n2["· sinc4Kernel_eq"]
  n3["· triangleKernel_nonneg"]
  n4["· sinc4Kernel_nonneg"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  n3 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  class n4 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
