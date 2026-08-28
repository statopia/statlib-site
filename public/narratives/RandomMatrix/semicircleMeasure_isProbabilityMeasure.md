# Proof narrative — semicircleMeasure_isProbabilityMeasure

Root: **semicircleMeasure_isProbabilityMeasure** (theorem) `Statlib/RandomMatrix/MeasuresAreProbability.lean:20` · topic `RandomMatrix`
Closure: 3 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `semicircleDensity` — noncomputable def · `Statlib/RandomMatrix/Vocabulary/Distributions.lean:35`
  ◆ `semicircleMeasure` — noncomputable def · `Statlib/RandomMatrix/Vocabulary/Distributions.lean:44`
★ `semicircleMeasure_isProbabilityMeasure` — theorem · `Statlib/RandomMatrix/MeasuresAreProbability.lean:20` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ semicircleDensity"]
  n1["◆ semicircleMeasure"]
  n2["★ semicircleMeasure_isProbabilityMeasure"]
  n1 --> n0
  n2 --> n1
  n2 --> n0
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
