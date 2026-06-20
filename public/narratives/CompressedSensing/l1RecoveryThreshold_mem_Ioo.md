# Proof narrative — l1RecoveryThreshold_mem_Ioo

Root: **l1RecoveryThreshold_mem_Ioo** (theorem) `Statlib/CompressedSensing/l1RecoveryThreshold_mem_Ioo.lean:15` · topic `CompressedSensing`
Closure: 6 declarations across 6 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l1RecoveryThreshold` — noncomputable def · `Statlib/CompressedSensing/l1RecoveryThreshold.lean:10`  _(also used by 3: candes_2008_kernel_contraction, candes_tao_recovery, rip_implies_zero_on_kernel)_
    ★ `one_lt_sqrt_two` — theorem · `Statlib/CompressedSensing/one_lt_sqrt_two.lean:12`  _(also used by 1: candes_2008_kernel_contraction)_
  ★ `l1RecoveryThreshold_pos` — theorem · `Statlib/CompressedSensing/l1RecoveryThreshold_pos.lean:14`
    ★ `sqrt_two_lt_two` — theorem · `Statlib/CompressedSensing/sqrt_two_lt_two.lean:12`
  ★ `l1RecoveryThreshold_lt_one` — theorem · `Statlib/CompressedSensing/l1RecoveryThreshold_lt_one.lean:14`  _(also used by 1: rip_implies_zero_on_kernel)_
★ `l1RecoveryThreshold_mem_Ioo` — theorem · `Statlib/CompressedSensing/l1RecoveryThreshold_mem_Ioo.lean:15` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l1RecoveryThreshold"]
  n1["★ one_lt_sqrt_two"]
  n2["★ l1RecoveryThreshold_pos"]
  n3["★ sqrt_two_lt_two"]
  n4["★ l1RecoveryThreshold_lt_one"]
  n5["★ l1RecoveryThreshold_mem_Ioo"]
  n2 --> n0
  n2 --> n1
  n4 --> n0
  n4 --> n3
  n5 --> n0
  n5 --> n2
  n5 --> n4
  class n5 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
