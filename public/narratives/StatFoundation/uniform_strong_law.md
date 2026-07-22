# Proof narrative — uniform_strong_law

Root: **uniform_strong_law** (theorem) `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:408` · topic `StatFoundation`
Closure: 14 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleAverage` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:20`  _(also used by 1: continuous_sampleAverage)_
  ◆ `populationMean` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:24`
  · `continuous_populationMean` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:111`
    ◆ `oscEnvelope` — noncomputable def · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:154`
    · `oscEnvelope_measurable` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:294`
      · `iSup_prop_le` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:143`
    · `oscEnvelope_le_two_mul` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:222`
    · `le_oscEnvelope` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:161`
    · `oscEnvelope_tendsto_zero` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:241`
  · `strong_law_oscillation_bound` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:307`
      · `integrable_U_comp_X` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:29`
    · `strong_law_sampleAverage_pointwise` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:58`
  · `strong_law_sampleAverage_finset_ae` — lemma · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:91`
★ `uniform_strong_law` — theorem · `Statlib/StatFoundation/Convergence/LawOfLargeNumbers/UniformStrongLaw.lean:408` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleAverage"]
  n1["◆ populationMean"]
  n2["· continuous_populationMean"]
  n3["◆ oscEnvelope"]
  n4["· oscEnvelope_measurable"]
  n5["· iSup_prop_le"]
  n6["· oscEnvelope_le_two_mul"]
  n7["· le_oscEnvelope"]
  n8["· oscEnvelope_tendsto_zero"]
  n9["· strong_law_oscillation_bound"]
  n10["· integrable_U_comp_X"]
  n11["· strong_law_sampleAverage_pointwise"]
  n12["· strong_law_sampleAverage_finset_ae"]
  n13["★ uniform_strong_law"]
  n2 --> n1
  n4 --> n3
  n6 --> n3
  n6 --> n5
  n7 --> n3
  n7 --> n5
  n8 --> n3
  n9 --> n3
  n9 --> n4
  n9 --> n6
  n9 --> n7
  n9 --> n8
  n11 --> n0
  n11 --> n1
  n11 --> n10
  n12 --> n0
  n12 --> n1
  n12 --> n11
  n13 --> n0
  n13 --> n1
  n13 --> n2
  n13 --> n9
  n13 --> n12
  class n13 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
