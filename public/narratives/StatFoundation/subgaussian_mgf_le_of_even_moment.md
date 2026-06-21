# Proof narrative — subgaussian_mgf_le_of_even_moment

Root: **subgaussian_mgf_le_of_even_moment** (theorem) `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:183` · topic `StatFoundation`
Closure: 8 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

      · `two_mul_le_two_pow_of_two_le` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:10`
    · `two_pow_le_centralBinom` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:28`
  · `two_pow_mul_factorial_sq_le_factorial_two_mul` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:51`
    · `two_pow_mul_factorial_mul_succ_factorial_le_factorial_two_mul_add_one` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:66`
  · `sqrt_factorial_mul_succ_div_factorial_two_mul_add_one_le` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:82`
  · `tsum_pow_div_factorial_succ` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:117`
  · `one_add_two_mul_one_add_sqrt_mul_exp_half_sub_one_le_exp_two` — private lemma · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:127`
★ `subgaussian_mgf_le_of_even_moment` — theorem · `Statlib/StatFoundation/RandomVariable/SubGaussian/subgaussian_mgf_le_of_even_moment.lean:183` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· two_mul_le_two_pow_of_two_le"]
  n1["· two_pow_le_centralBinom"]
  n2["· two_pow_mul_factorial_sq_le_factorial_two_mul"]
  n3["· two_pow_mul_factorial_mul_succ_factorial_le_factorial_two_mul_add_one"]
  n4["· sqrt_factorial_mul_succ_div_factorial_two_mul_add_one_le"]
  n5["· tsum_pow_div_factorial_succ"]
  n6["· one_add_two_mul_one_add_sqrt_mul_exp_half_sub_one_le_exp_two"]
  n7["★ subgaussian_mgf_le_of_even_moment"]
  n1 --> n0
  n2 --> n1
  n3 --> n1
  n4 --> n3
  n7 --> n2
  n7 --> n4
  n7 --> n5
  n7 --> n6
  class n7 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
