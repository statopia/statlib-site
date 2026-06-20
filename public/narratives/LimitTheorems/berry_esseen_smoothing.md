# Proof narrative — berry_esseen_smoothing

Root: **berry_esseen_smoothing** (lemma) `Statlib/LimitTheorems/berry_esseen_smoothing.lean:13` · topic `LimitTheorems`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `smoothing_kernel_exists` — lemma · `Statlib/LimitTheorems/smoothing_kernel_exists.lean:10`
  · `cdf_smoothing_bound` — lemma · `Statlib/LimitTheorems/cdf_smoothing_bound.lean:10`
  · `smoothed_cdf_fourier_bound` — lemma · `Statlib/LimitTheorems/smoothed_cdf_fourier_bound.lean:24`
· `berry_esseen_smoothing` — lemma · `Statlib/LimitTheorems/berry_esseen_smoothing.lean:13` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· smoothing_kernel_exists"]
  n1["· cdf_smoothing_bound"]
  n2["· smoothed_cdf_fourier_bound"]
  n3["· berry_esseen_smoothing"]
  n3 --> n0
  n3 --> n1
  n3 --> n2
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
