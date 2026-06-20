# Proof narrative — kaplanMeier_no_events

Root: **kaplanMeier_no_events** (theorem) `Statlib/Survival/kaplanMeier_no_events.lean:15` · topic `Survival`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `SurvivalSample` — structure · `Statlib/Survival/SurvivalSample.lean:11`  _(also used by 3: greenwood_variance_formula, kaplanMeier_empty, riskSet_antitone)_
  ◆ `eventTimesLE` — noncomputable def · `Statlib/Survival/eventTimesLE.lean:11`  _(also used by 2: greenwood_variance_formula, kaplanMeier_empty)_
    ◆ `numEvents` — noncomputable def · `Statlib/Survival/numEvents.lean:11`  _(also used by 1: greenwood_variance_formula)_
    ◆ `riskSet` — noncomputable def · `Statlib/Survival/riskSet.lean:12`  _(also used by 2: greenwood_variance_formula, riskSet_antitone)_
  ◆ `kaplanMeier` — noncomputable def · `Statlib/Survival/kaplanMeier.lean:16`  _(also used by 2: greenwood_variance_formula, kaplanMeier_empty)_
★ `kaplanMeier_no_events` — theorem · `Statlib/Survival/kaplanMeier_no_events.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ SurvivalSample"]
  n1["◆ eventTimesLE"]
  n2["◆ numEvents"]
  n3["◆ riskSet"]
  n4["◆ kaplanMeier"]
  n5["★ kaplanMeier_no_events"]
  n1 --> n0
  n2 --> n0
  n3 --> n0
  n4 --> n0
  n4 --> n1
  n4 --> n2
  n4 --> n3
  n5 --> n0
  n5 --> n4
  n5 --> n1
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
