# Proof narrative — clt_isAsymptoticallyNormal

Root: **clt_isAsymptoticallyNormal** (theorem) `Statlib/Estimator/clt_isAsymptoticallyNormal.lean:22` · topic `Estimator`
Closure: 3 declarations across 3 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

  ▣ `IsAsymptoticallyNormal` — structure · `Statlib/Estimator/IsAsymptoticallyNormal.lean:22`  _(also used by 3: IsAsymptoticallyEfficient, IsMLEAsymptoticallyNormal, IsSuperefficient)_
  ★ `levy_forward` — theorem · `Statlib/LimitTheorems/levy_forward.lean:20`  _(also used by 3: charFun_eq_of_subseq, cramer_wold_reverse, ustatistic_clt_nondegenerate)_
★ `clt_isAsymptoticallyNormal` — theorem · `Statlib/Estimator/clt_isAsymptoticallyNormal.lean:22` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["▣ IsAsymptoticallyNormal"]
  n1["★ levy_forward"]
  n2["★ clt_isAsymptoticallyNormal"]
  n2 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
