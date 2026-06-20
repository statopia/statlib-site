# Proof narrative — uniform_slln

Root: **uniform_slln** (theorem) `Statlib/LimitTheorems/uniform_slln.lean:20` · topic `LimitTheorems`
Closure: 14 declarations across 14 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `sampleAvg` — noncomputable def · `Statlib/LimitTheorems/sampleAvg.lean:12`  _(also used by 1: sampleAvg_continuous)_
  ◆ `popMean` — noncomputable def · `Statlib/LimitTheorems/popMean.lean:10`
  · `popMean_continuous` — lemma · `Statlib/LimitTheorems/popMean_continuous.lean:12`
    ◆ `oscEnvelope` — noncomputable def · `Statlib/LimitTheorems/oscEnvelope.lean:11`
    · `oscEnvelope_measurable` — lemma · `Statlib/LimitTheorems/oscEnvelope_measurable.lean:11`
      · `iSup_prop_le` — lemma · `Statlib/LimitTheorems/iSup_prop_le.lean:22`
    · `oscEnvelope_le_two_mul` — lemma · `Statlib/LimitTheorems/oscEnvelope_le_two_mul.lean:12`
    · `le_oscEnvelope` — lemma · `Statlib/LimitTheorems/le_oscEnvelope.lean:14`
    · `oscEnvelope_tendsto_zero` — lemma · `Statlib/LimitTheorems/oscEnvelope_tendsto_zero.lean:11`
  · `slln_oscillation_bound` — lemma · `Statlib/LimitTheorems/slln_oscillation_bound.lean:14`
      · `integrable_U_comp_X` — lemma · `Statlib/LimitTheorems/integrable_U_comp_X.lean:11`
    · `slln_pointwise` — lemma · `Statlib/LimitTheorems/slln_pointwise.lean:15`
  · `slln_finset_ae` — lemma · `Statlib/LimitTheorems/slln_finset_ae.lean:15`
★ `uniform_slln` — theorem · `Statlib/LimitTheorems/uniform_slln.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ sampleAvg"]
  n1["◆ popMean"]
  n2["· popMean_continuous"]
  n3["◆ oscEnvelope"]
  n4["· oscEnvelope_measurable"]
  n5["· iSup_prop_le"]
  n6["· oscEnvelope_le_two_mul"]
  n7["· le_oscEnvelope"]
  n8["· oscEnvelope_tendsto_zero"]
  n9["· slln_oscillation_bound"]
  n10["· integrable_U_comp_X"]
  n11["· slln_pointwise"]
  n12["· slln_finset_ae"]
  n13["★ uniform_slln"]
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
