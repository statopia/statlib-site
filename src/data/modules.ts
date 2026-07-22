// ---------------------------------------------------------------------------
// The top-level modules of statlib (mirrors Statlib/ on `main`). Each groups
// several topic areas from theorems.ts (by `topicIds`) and carries its own
// roadmap.
//
// This drives the module framing on Home and Library. Keep `topicIds` in
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
      "empirical-process tools, sub-Gaussian and sub-exponential variables, " +
      "and concentration inequalities.",
    roadmap:
      "Grow shared vocabulary as concepts get reused across areas, and broaden " +
      "the estimation, testing, empirical-process, and asymptotic foundations.",
    topicIds: [
      "statistics",
      "convergence",
      "empirical-processes",
      "random-variables",
      "concentration",
    ],
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
      "Strengthen the operator-convexity, matrix-concentration, covariance, RIP, " +
      "spectral-perturbation, and regression theorem chains.",
    topicIds: [
      "matrix-analysis",
      "hd-concentration",
      "covariance",
      "hd-geometry",
      "hd-regression",
      "spectral",
    ],
  },
  {
    id: "nonparametric",
    title: "Nonparametric statistics",
    lean: "Statlib.Nonparametric",
    summary:
      "Approximation and risk vocabulary for nonparametric statistics: finite " +
      "sieves, Holder classes, spline and wavelet approximation, RKHS and neural " +
      "network candidate classes, and oracle interfaces.",
    roadmap:
      "Fill in the remaining nonparametric approximation chains while keeping " +
      "the sieve and risk interfaces reusable across estimators.",
    topicIds: [
      "nonparametric-approximation",
      "nonparametric-vocabulary",
      "nonparametric-oracle",
    ],
  },
];
