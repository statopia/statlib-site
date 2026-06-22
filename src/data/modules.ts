// ---------------------------------------------------------------------------
// The two top-level modules of statlib (mirrors Statlib/ on `main`):
// StatFoundation and HighDim. Each groups several topic areas from
// theorems.ts (by `topicIds`) and carries its own roadmap.
//
// This drives the two-board framing on Home and Library. Keep `topicIds` in
// sync with the ids in theorems.ts.
// ---------------------------------------------------------------------------

export interface LibraryModule {
  id: string;
  title: string;
  lean: string; // Lean namespace / import path
  summary: string;
  roadmap: string;
  topicIds: string[];
}

export const modules: LibraryModule[] = [
  {
    id: "stat-foundation",
    title: "Statistical foundations",
    lean: "Statlib.StatFoundation",
    summary:
      "The probability and statistics core the rest of the library builds on: " +
      "sufficiency and statistical inference, convergence and limit theorems, " +
      "the tail behavior of sub-Gaussian and sub-exponential variables, and " +
      "concentration inequalities.",
    roadmap:
      "Grow shared vocabulary as concepts get reused across areas, and broaden " +
      "the estimation, testing, and asymptotic foundations.",
    topicIds: ["statistics", "convergence", "random-variables", "concentration"],
  },
  {
    id: "high-dim",
    title: "High-dimensional statistics",
    lean: "Statlib.HighDim",
    summary:
      "Statistics in the high-dimensional regime: matrix concentration " +
      "(Hanson–Wright, matrix Bernstein), covariance estimation, " +
      "high-dimensional geometry, regression, and spectral perturbation.",
    roadmap:
      "Strengthen the concentration, covariance, RIP, spectral-perturbation, " +
      "and regression theorem chains.",
    topicIds: ["hd-concentration", "covariance", "hd-geometry", "hd-regression", "spectral"],
  },
];
