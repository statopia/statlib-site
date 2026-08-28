# Proof narrative — growth_function_real_le_sauer_shelah

Root: **growth_function_real_le_sauer_shelah** (theorem) `Statlib/StatFoundation/Vocabulary/VCDimension.lean:442` · topic `StatFoundation`
Closure: 9 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `ShattersSet` — def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:43`  _(also used by 1: vcDimension)_
      ◆ `subgraph` — def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:83`
  ◆ `subgraphClass` — def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:87`  _(also used by 1: vcDimensionReal)_
  ◆ `HasVCDimensionRealLe` — def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:109`  _(also used by 1: IsVCRealClass)_
    ◆ `growthFunction` — noncomputable def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:72`  _(also used by 2: growthFunctionPseudo, growthFunction_le_two_pow)_
  ◆ `growthFunctionReal` — noncomputable def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:113`
  ◆ `HasVCDimensionLe` — def · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:60`  _(also used by 2: HasPseudoDimensionLe, IsVCClass)_
  ★ `sauer_shelah_sum_bound` — theorem · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:206`  _(also used by 1: graph_class_growth_le_sauer_shelah)_
★ `growth_function_real_le_sauer_shelah` — theorem · `Statlib/StatFoundation/Vocabulary/VCDimension.lean:442` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ ShattersSet"]
  n1["◆ subgraph"]
  n2["◆ subgraphClass"]
  n3["◆ HasVCDimensionRealLe"]
  n4["◆ growthFunction"]
  n5["◆ growthFunctionReal"]
  n6["◆ HasVCDimensionLe"]
  n7["★ sauer_shelah_sum_bound"]
  n8["★ growth_function_real_le_sauer_shelah"]
  n2 --> n1
  n3 --> n0
  n3 --> n2
  n5 --> n4
  n5 --> n2
  n6 --> n0
  n7 --> n6
  n7 --> n4
  n7 --> n0
  n8 --> n3
  n8 --> n5
  n8 --> n7
  n8 --> n2
  n8 --> n6
  class n8 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
