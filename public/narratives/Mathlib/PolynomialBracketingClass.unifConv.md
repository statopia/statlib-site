# Proof narrative — PolynomialBracketingClass.unifConv

Root: **PolynomialBracketingClass.unifConv** (theorem) `Statlib/Mathlib/EmpiricalProcess/VWPolynomialClass.lean:259` · topic `Mathlib`
Closure: 9 declarations across 5 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

        ▣ `Bracket` — structure · `Statlib/CoxChangePoint/BracketingEntropy.lean:58`  _(also used by 3: lower_le_of_contains, le_upper_of_contains, HasBracketing)_
        ◆ `contains` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:79`  _(also used by 3: lower_le_of_contains, le_upper_of_contains, HasBracketing)_
      ◆ `bracketingCardinalities` — def · `Statlib/CoxChangePoint/BracketingEntropy.lean:111`  _(also used by 3: BracketingNumber_lt_top_of_hasBracketing, hasBracketing_of_bracketingNumber_lt_top, coveringLeBracketing_trivial_of_no_bracketing)_
    ◆ `BracketingNumber` — noncomputable def · `Statlib/CoxChangePoint/BracketingEntropy.lean:120`  _(also used by 6: BracketingNumber_lt_top_of_hasBracketing, hasBracketing_of_bracketingNumber_lt_top, bracketingEntropy, …)_
  ▣ `PolynomialBracketingClass` — structure · `Statlib/Mathlib/EmpiricalProcess/BracketingIntegralConv.lean:164`  _(also used by 13: bound_pos, polynomialBracketingClass_log_bracketing_le, polynomialBracketingClass_sqrt_log_bracketing_le, …)_
  ▣ `VW_2_14_9_Conclusion` — structure · `Statlib/CoxChangePoint/ChainingProof.lean:226`  _(also used by 7: VW_2_14_9_Conclusion.tail_bound_no_sqrt, toConclusion, CoxBaselineHypotheses.hUnif_from_VW_2_14_9, …)_
    ★ `unifConv_of_tail_bound` — theorem · `Statlib/CoxChangePoint/LemmaS1Abstract.lean:77`  _(also used by 1: unifConv_of_two_param_tail_bound)_
  ★ `unifConv_of_VW_2_14_9_conclusion` — theorem · `Statlib/CoxChangePoint/ChainingProof.lean:296`  _(also used by 1: CoxBaselineHypotheses.hUnif_from_VW_2_14_9)_
★ `PolynomialBracketingClass.unifConv` — theorem · `Statlib/Mathlib/EmpiricalProcess/VWPolynomialClass.lean:259` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ Bracket"]
  n1["◆ contains"]
  n2["◆ bracketingCardinalities"]
  n3["◆ BracketingNumber"]
  n4["▣ PolynomialBracketingClass"]
  n5["▣ VW_2_14_9_Conclusion"]
  n6["★ unifConv_of_tail_bound"]
  n7["★ unifConv_of_VW_2_14_9_conclusion"]
  n8["★ PolynomialBracketingClass.unifConv"]
  n1 --> n0
  n2 --> n0
  n2 --> n1
  n3 --> n2
  n4 --> n3
  n7 --> n5
  n7 --> n6
  n8 --> n4
  n8 --> n5
  n8 --> n7
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
