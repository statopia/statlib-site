import { topics, type TheoremEntry } from "./theorems";

export type SelectedResult = TheoremEntry & { topic: string; topicId: string };

const homeLean = [
  "lindeberg_feller_central_limit_theorem",
  "gaussian_lipschitz_concentration",
  "matrix_rip_recovery_bound",
  "subgaussian_random_design_lasso_oracle",
  "SampleCovariance.ae_tendsto_norm_and_lowerEdgeEigenvalue",
  "exists_reluNetworkClass_holderSmoothBall_unitCube_uniform_architecture",
];

const libraryLeanByTopic: Record<string, string[]> = {
  statistics: ["lehmannScheffe_umvue"],
  "uniform-integrability": [
    "inLpConvergence_one_of_inProbabilityConvergence_of_isUniformIntegrable",
  ],
  "empirical-processes": ["rademacher_generalization_bound"],
  "matrix-analysis": ["trace_exp_add_log_concave"],
  "hd-concentration": ["matrix_bernstein"],
  covariance: ["marchenko_pastur_convergence"],
  "hd-regression": ["tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real"],
  "nonparametric-approximation": [
    "unit_cube_bspline_high_order_holder_smooth_uniform_sieve_approximation_rate",
  ],
};

const catalog = new Map<string, SelectedResult>();
for (const topic of topics) {
  for (const theorem of topic.theorems) {
    if (!theorem.lean) continue;
    if (catalog.has(theorem.lean)) throw new Error(`Duplicate catalog Lean ID: ${theorem.lean}`);
    catalog.set(theorem.lean, { ...theorem, topic: topic.title, topicId: topic.id });
  }
}

const selected = new Set<string>();
function resolve(lean: string, topicId?: string): SelectedResult {
  if (selected.has(lean)) throw new Error(`Result selected twice: ${lean}`);
  const result = catalog.get(lean);
  if (!result || result.status !== "proved" || !result.latex ||
      (topicId && result.topicId !== topicId)) {
    throw new Error(`Invalid selected result: ${lean}`);
  }
  selected.add(lean);
  return result;
}

export const homeResults = homeLean.map((lean) => resolve(lean));
export const libraryResultsByTopic = new Map(
  Object.entries(libraryLeanByTopic).map(([topicId, leans]) => {
    if (!topics.some((topic) => topic.id === topicId)) throw new Error(`Unknown topic: ${topicId}`);
    return [topicId, leans.map((lean) => resolve(lean, topicId))] as const;
  }),
);
