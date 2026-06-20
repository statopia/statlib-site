# Proof narrative — hasBracketing_of_bracketingNumber_lt_top

Root: **hasBracketing_of_bracketingNumber_lt_top** (lemma) `Statlib/CoxChangePoint/BracketingEntropy.lean:142` · topic `CoxChangePoint`
Closure: 6 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ▣ `Bracket` — structure · `Statlib/CoxChangePoint/BracketingEntropy.lean:58`  _(also used by 2: lower_le_of_contains, le_upper_of_contains)_
    ◆ `contains` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:79`  _(also used by 2: lower_le_of_contains, le_upper_of_contains)_
  ◆ `bracketingCardinalities` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:111`  _(also used by 2: BracketingNumber_lt_top_of_hasBracketing, coveringLeBracketing_trivial_of_no_bracketing)_
  ◆ `BracketingNumber` — noncomputable def · `Statlib/CoxChangePoint/BracketingEntropy.lean:120`  _(also used by 6: BracketingNumber_lt_top_of_hasBracketing, bracketingEntropy, vw_2_14_9_statement, …)_
  ◆ `HasBracketing` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:102`  _(also used by 2: BracketingNumber_lt_top_of_hasBracketing, coveringLeBracketing_trivial_of_no_bracketing)_
· `hasBracketing_of_bracketingNumber_lt_top` — lemma · `Statlib/CoxChangePoint/BracketingEntropy.lean:142` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Bracket"]
  n1["◆ contains"]
  n2["◆ bracketingCardinalities"]
  n3["◆ BracketingNumber"]
  n4["◆ HasBracketing"]
  n5["· hasBracketing_of_bracketingNumber_lt_top"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n0
  n4 --> n1
  n5 --> n3
  n5 --> n4
  n5 --> n2
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
