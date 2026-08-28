# Proof narrative — truncatedFloorReLUFunction

Root: **truncatedFloorReLUFunction** (noncomputable def) `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:244` · topic `Nonparametric`
Closure: 3 declarations across 1 files. Generated from `proof_graph.json` — no files were moved.

Reading order (foundations first, headline last):

    ◆ `relu` — def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:15`  _(also used by 44: squareReLUHingeInterpolant_error_le_of_mem_cell, unitIntervalSquareReLUHingeNet_realize, exists_fullyConnectedReLUNet_interval_square_approx, …)_
  ◆ `reluStepFunctionApprox` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:239`
◆ `truncatedFloorReLUFunction` — noncomputable def · `Statlib/Nonparametric/Vocabulary/NeuralNetwork.lean:244` **← headline**

## Dependency diagram

```mermaid
flowchart TD
  n0["◆ relu"]
  n1["◆ reluStepFunctionApprox"]
  n2["◆ truncatedFloorReLUFunction"]
  n1 --> n0
  n2 --> n1
  class n2 headline;
  classDef headline fill:#ffe08a,stroke:#d4a017,stroke-width:2px;
  classDef axiomNode fill:#ffd0d0,stroke:#c0392b,stroke-dasharray:4 2;
```
