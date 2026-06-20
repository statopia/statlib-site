# Proof narrative — vw_2_14_9_full

Root: **vw_2_14_9_full** (theorem) `Statlib/CoxChangePoint/Chaining.lean:265` · topic `CoxChangePoint`
Closure: 6 declarations across 2 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ▣ `Bracket` — structure · `Statlib/CoxChangePoint/BracketingEntropy.lean:58`  _(also used by 3: lower_le_of_contains, le_upper_of_contains, HasBracketing)_
        ◆ `contains` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:79`  _(also used by 3: lower_le_of_contains, le_upper_of_contains, HasBracketing)_
      ◆ `bracketingCardinalities` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:111`  _(also used by 3: BracketingNumber_lt_top_of_hasBracketing, hasBracketing_of_bracketingNumber_lt_top, coveringLeBracketing_trivial_of_no_bracketing)_
    ◆ `BracketingNumber` — noncomputable def · `Statlib/CoxChangePoint/BracketingEntropy.lean:120`  _(also used by 6: BracketingNumber_lt_top_of_hasBracketing, hasBracketing_of_bracketingNumber_lt_top, vw_2_14_9_statement, …)_
  ◆ `bracketingEntropy` — noncomputable def · `Statlib/CoxChangePoint/BracketingEntropy.lean:168`
★ `vw_2_14_9_full` — theorem · `Statlib/CoxChangePoint/Chaining.lean:265` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Bracket"]
  n1["◆ contains"]
  n2["◆ bracketingCardinalities"]
  n3["◆ BracketingNumber"]
  n4["◆ bracketingEntropy"]
  n5["★ vw_2_14_9_full"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
