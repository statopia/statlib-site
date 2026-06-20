# Proof narrative — jackson_kernel_tail_bound

Root: **jackson_kernel_tail_bound** (lemma) `Statlib/Fourier/jackson_kernel_tail_bound.lean:32` · topic `Fourier`
Closure: 13 declarations across 13 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `triangleKernel` — noncomputable def · `Statlib/Fourier/triangleKernel.lean:7`  _(also used by 2: sinc4Kernel, sinc4Kernel_eq)_
  · `triangleKernel_continuous` — lemma · `Statlib/Fourier/triangleKernel_continuous.lean:8`  _(also used by 1: sinc4Kernel_integrable)_
  · `triangleKernel_nonneg` — lemma · `Statlib/Fourier/triangleKernel_nonneg.lean:8`  _(also used by 1: sinc4Kernel_nonneg)_
  · `triangleKernel_zero_of_abs_ge` — lemma · `Statlib/Fourier/triangleKernel_zero_of_abs_ge.lean:8`  _(also used by 1: sinc4Kernel_zero_of_abs_ge)_
    · `triangleKernel_support_subset` — lemma · `Statlib/Fourier/triangleKernel_support_subset.lean:9`
    · `triangleKernel_hasCompactSupport` — lemma · `Statlib/Fourier/triangleKernel_hasCompactSupport.lean:9`  _(also used by 1: sinc4Kernel_integrable)_
  · `triangleKernel_integrable` — lemma · `Statlib/Fourier/triangleKernel_integrable.lean:10`  _(also used by 1: sinc4Kernel_integral)_
    · `triangleKernel_eq_on_nonpos` — lemma · `Statlib/Fourier/triangleKernel_eq_on_nonpos.lean:8`
    · `triangleKernel_eq_on_nonneg` — lemma · `Statlib/Fourier/triangleKernel_eq_on_nonneg.lean:8`
  · `triangleKernel_integral` — lemma · `Statlib/Fourier/triangleKernel_integral.lean:13`  _(also used by 1: sinc4Kernel_integral)_
  · `triangleKernel_first_moment` — lemma · `Statlib/Fourier/triangleKernel_first_moment.lean:14`
  · `triangleKernel_tail` — lemma · `Statlib/Fourier/triangleKernel_tail.lean:12`
· `jackson_kernel_tail_bound` — lemma · `Statlib/Fourier/jackson_kernel_tail_bound.lean:32` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ triangleKernel"]
  n1["· triangleKernel_continuous"]
  n2["· triangleKernel_nonneg"]
  n3["· triangleKernel_zero_of_abs_ge"]
  n4["· triangleKernel_support_subset"]
  n5["· triangleKernel_hasCompactSupport"]
  n6["· triangleKernel_integrable"]
  n7["· triangleKernel_eq_on_nonpos"]
  n8["· triangleKernel_eq_on_nonneg"]
  n9["· triangleKernel_integral"]
  n10["· triangleKernel_first_moment"]
  n11["· triangleKernel_tail"]
  n12["· jackson_kernel_tail_bound"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n4
  n6 --> n0
  n6 --> n1
  n6 --> n5
  n7 --> n0
  n8 --> n0
  n9 --> n0
  n9 --> n4
  n9 --> n1
  n9 --> n7
  n9 --> n8
  n10 --> n0
  n10 --> n2
  n10 --> n3
  n10 --> n1
  n10 --> n4
  n10 --> n6
  n10 --> n9
  n11 --> n0
  n11 --> n3
  n11 --> n6
  n11 --> n2
  n11 --> n9
  n12 --> n0
  n12 --> n1
  n12 --> n2
  n12 --> n6
  n12 --> n9
  n12 --> n10
  n12 --> n11
  n12 --> n3
  class n12 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
