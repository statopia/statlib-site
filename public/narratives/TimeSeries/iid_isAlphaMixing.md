# Proof narrative — iid_isAlphaMixing

Root: **iid_isAlphaMixing** (theorem) `Statlib/TimeSeries/iid_isAlphaMixing.lean:18` · topic `TimeSeries`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `IsAlphaMixing` — def · `Statlib/TimeSeries/IsAlphaMixing.lean:11`  _(also used by 1: const_isAlphaMixing)_
  ★ `iid_alpha_mixing_eq_zero` — theorem · `Statlib/TimeSeries/iid_alpha_mixing_eq_zero.lean:18`
★ `iid_isAlphaMixing` — theorem · `Statlib/TimeSeries/iid_isAlphaMixing.lean:18` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ IsAlphaMixing"]
  n1["★ iid_alpha_mixing_eq_zero"]
  n2["★ iid_isAlphaMixing"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
