# Proof narrative — variance_marginals_le_variance_prod

Root: **variance_marginals_le_variance_prod** (theorem) `Statlib/Variance/variance_marginals_le_variance_prod.lean:22` · topic `Variance`
Closure: 4 declarations across 4 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  · `sq_integral_le_integral_sq` — lemma · `Statlib/Variance/sq_integral_le_integral_sq.lean:19`
  · `memLp_marginal_fst` — lemma · `Statlib/Variance/memLp_marginal_fst.lean:20`
  · `memLp_marginal_snd` — lemma · `Statlib/Variance/memLp_marginal_snd.lean:20`
★ `variance_marginals_le_variance_prod` — theorem · `Statlib/Variance/variance_marginals_le_variance_prod.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["· sq_integral_le_integral_sq"]
  n1["· memLp_marginal_fst"]
  n2["· memLp_marginal_snd"]
  n3["★ variance_marginals_le_variance_prod"]
  n1 --> n0
  n2 --> n0
  n3 --> n1
  n3 --> n2
  n3 --> n0
  class n3 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
