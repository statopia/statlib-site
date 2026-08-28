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
  homeTopicIds?: string[];
}

export const modules: LibraryModule[] = [
  {
    id: "stat-foundation",
    title: "Statistical foundations",
    lean: "Statlib.StatFoundation",
    summary:
      "The probability and statistics core the rest of the library builds on: " +
      "stochastic-order asymptotics (big-O/little-o in probability, Slutsky), " +
      "uniform integrability and integral convergence, " +
      "conformal prediction, sufficiency and statistical inference, " +
      "convergence and limit theorems, empirical-process tools, " +
      "sub-Gaussian and sub-exponential variables, finite-dimensional Gaussian " +
      "functional inequalities, Lipschitz concentration, and concentration inequalities.",
    roadmap:
      "Grow shared vocabulary as concepts get reused across areas, broaden " +
      "the estimation, testing, empirical-process, and asymptotic foundations, " +
      "and expand stochastic-order and conformal-inference toolchains.",
    topicIds: [
      "statistics",
      "convergence",
      "stochastic-order",
      "uniform-integrability",
      "empirical-processes",
      "random-variables",
      "concentration",
      "conformal",
    ],
  },
  {
    id: "high-dim",
    title: "High-dimensional statistics",
    lean: "Statlib.HighDim",
    summary:
      "Statistics in the high-dimensional regime: matrix concentration " +
      "(Hanson–Wright, matrix Bernstein), Wedin sin-theta perturbation, covariance estimation, " +
      "L1 quadratic-process analysis, L1 RSE bounds from covariance, " +
      "high-dimensional geometry, regression, and debiased LASSO inference.",
    roadmap:
      "Strengthen the operator-convexity, matrix-concentration, covariance, RIP, " +
      "spectral-perturbation, debiasing, and regression theorem chains; " +
      "extend L1-process results to broader design matrix families.",
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
      "sieves, Holder classes, high-order tensor-product B-spline and wavelet " +
      "approximation, RKHS and neural-network rates, conformal quantile regression, " +
      "and oracle interfaces.",
    roadmap:
      "Fill in the remaining nonparametric approximation chains while keeping " +
      "the sieve and risk interfaces reusable across estimators; " +
      "extend conformal-prediction results to broader nonparametric settings.",
    topicIds: [
      "nonparametric-approximation",
      "nonparametric-vocabulary",
      "nonparametric-oracle",
    ],
    homeTopicIds: [
      "nonparametric-approximation",
      "nonparametric-oracle",
    ],
  },
];
