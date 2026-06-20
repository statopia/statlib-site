# Proof narrative — candes_tao_recovery

Root: **candes_tao_recovery** (theorem) `Statlib/CompressedSensing/candes_tao_recovery.lean:23` · topic `CompressedSensing`
Closure: 24 declarations across 24 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ◆ `l1RecoveryThreshold` — noncomputable def · `Statlib/CompressedSensing/l1RecoveryThreshold.lean:10`  _(also used by 2: l1RecoveryThreshold_mem_Ioo, l1RecoveryThreshold_pos)_
  ◆ `IsSSparse` — def · `Statlib/CompressedSensing/IsSSparse.lean:11`  _(also used by 3: IsSSparse.mono, IsSSparse.neg, zero_isSSparse)_
  ◆ `IsRIP` — def · `Statlib/CompressedSensing/IsRIP.lean:13`
  ★ `cone_constraint` — theorem · `Statlib/CompressedSensing/cone_constraint.lean:15`
      ★ `sqrt_two_lt_two` — theorem · `Statlib/CompressedSensing/sqrt_two_lt_two.lean:12`
    ★ `l1RecoveryThreshold_lt_one` — theorem · `Statlib/CompressedSensing/l1RecoveryThreshold_lt_one.lean:14`  _(also used by 1: l1RecoveryThreshold_mem_Ioo)_
      ★ `exists_top_k_by_abs` — theorem · `Statlib/CompressedSensing/exists_top_k_by_abs.lean:17`
      ◆ `restrictTo` — def · `Statlib/CompressedSensing/restrictTo.lean:15`  _(also used by 3: mulVec_restrictTo_add, restrictTo_disjoint_supports, restrictTo_sum_abs)_
      ★ `restrictTo_isSSparse` — theorem · `Statlib/CompressedSensing/restrictTo_isSSparse.lean:15`
      ★ `restrictTo_add_compl` — theorem · `Statlib/CompressedSensing/restrictTo_add_compl.lean:13`  _(also used by 1: mulVec_restrictTo_add)_
      ★ `restrictTo_sum_sq` — theorem · `Statlib/CompressedSensing/restrictTo_sum_sq.lean:13`
      ★ `sparse_tail_bound` — theorem · `Statlib/CompressedSensing/sparse_tail_bound.lean:15`
        ★ `exists_block_partition` — theorem · `Statlib/CompressedSensing/exists_block_partition.lean:55`
          ★ `IsSSparse.smul` — theorem · `Statlib/CompressedSensing/IsSSparse_smul.lean:14`
          ★ `IsSSparse.add_disjoint` — theorem · `Statlib/CompressedSensing/IsSSparse_add_disjoint.lean:15`
          ★ `IsSSparse.sub_disjoint` — theorem · `Statlib/CompressedSensing/IsSSparse_sub_disjoint.lean:14`
        ★ `rip_restricted_orthogonality` — theorem · `Statlib/CompressedSensing/rip_restricted_orthogonality.lean:20`
        ★ `mulVec_finset_sum` — theorem · `Statlib/CompressedSensing/mulVec_finset_sum.lean:14`
        ★ `block_l2_telescope` — theorem · `Statlib/CompressedSensing/block_l2_telescope.lean:40`
      ★ `block_inner_product_bound` — theorem · `Statlib/CompressedSensing/block_inner_product_bound.lean:67`
      ★ `one_lt_sqrt_two` — theorem · `Statlib/CompressedSensing/one_lt_sqrt_two.lean:12`  _(also used by 1: l1RecoveryThreshold_pos)_
    ★ `candes_2008_kernel_contraction` — theorem · `Statlib/CompressedSensing/candes_2008_kernel_contraction.lean:39`
  ★ `rip_implies_zero_on_kernel` — theorem · `Statlib/CompressedSensing/rip_implies_zero_on_kernel.lean:26`
★ `candes_tao_recovery` — theorem · `Statlib/CompressedSensing/candes_tao_recovery.lean:23` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ l1RecoveryThreshold"]
  n1["◆ IsSSparse"]
  n2["◆ IsRIP"]
  n3["★ cone_constraint"]
  n4["★ sqrt_two_lt_two"]
  n5["★ l1RecoveryThreshold_lt_one"]
  n6["★ exists_top_k_by_abs"]
  n7["◆ restrictTo"]
  n8["★ restrictTo_isSSparse"]
  n9["★ restrictTo_add_compl"]
  n10["★ restrictTo_sum_sq"]
  n11["★ sparse_tail_bound"]
  n12["★ exists_block_partition"]
  n13["★ IsSSparse.smul"]
  n14["★ IsSSparse.add_disjoint"]
  n15["★ IsSSparse.sub_disjoint"]
  n16["★ rip_restricted_orthogonality"]
  n17["★ mulVec_finset_sum"]
  n18["★ block_l2_telescope"]
  n19["★ block_inner_product_bound"]
  n20["★ one_lt_sqrt_two"]
  n21["★ candes_2008_kernel_contraction"]
  n22["★ rip_implies_zero_on_kernel"]
  n23["★ candes_tao_recovery"]
  n2 --> n1
  n5 --> n0
  n5 --> n4
  n8 --> n1
  n8 --> n7
  n9 --> n7
  n10 --> n7
  n12 --> n6
  n13 --> n1
  n14 --> n1
  n15 --> n1
  n16 --> n2
  n16 --> n1
  n16 --> n13
  n16 --> n14
  n16 --> n15
  n19 --> n2
  n19 --> n7
  n19 --> n1
  n19 --> n8
  n19 --> n12
  n19 --> n16
  n19 --> n17
  n19 --> n10
  n19 --> n18
  n21 --> n0
  n21 --> n2
  n21 --> n6
  n21 --> n7
  n21 --> n1
  n21 --> n8
  n21 --> n9
  n21 --> n10
  n21 --> n11
  n21 --> n19
  n21 --> n20
  n22 --> n0
  n22 --> n2
  n22 --> n1
  n22 --> n5
  n22 --> n21
  n23 --> n0
  n23 --> n2
  n23 --> n1
  n23 --> n3
  n23 --> n22
  class n23 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
