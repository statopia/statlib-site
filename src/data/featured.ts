// ---------------------------------------------------------------------------
// Featured formalizations for the /featured page: representative theorems shown
// as their REAL Lean statement (verbatim from the statlib `main` source, proof
// body omitted), with the math statement and a dependency diagram.
//
// `statement` is copied faithfully from the source — do not paraphrase or weaken
// it. `svg` is relative to public/narratives.
// ---------------------------------------------------------------------------

export interface FeaturedThm {
  name: string;
  module: string; // which board it belongs to
  leanFile: string; // source path (shown as caption)
  math: string; // KaTeX statement
  blurb: string; // one-line plain-language summary
  statement: string; // real Lean statement, verbatim (proof omitted)
  svg: string; // dependency diagram, relative to /narratives
  decls: number; // declarations shown in the graph
  graphLabel?: string; // defaults to "proof dependency graph"
}

export const featuredThms: FeaturedThm[] = [
  {
    name: "ReLU network approximation from a pointwise witness",
    module: "Nonparametric approximation",
    leanFile: "Statlib/Nonparametric/Approximation/NeuralNetwork.lean",
    math:
      "\\exists N\\in\\mathcal{N}_{d,D,W,P}:\\ \\sup_x |N(x)-f_0(x)|\\le\\varepsilon" +
      "\\Rightarrow \\mathcal{E}(\\mathcal{N}_{d,D,W,P},f_0)\\le \\nu(X)\\varepsilon^2",
    blurb:
      "A fully connected ReLU witness with uniform approximation error gives a " +
      "class approximation-error bound after integrating squared loss.",
    statement: `theorem reluNetworkClass_classApproximationError_le_of_exists_pointwise
  (d depth width parameterCount : ℕ)
  (f0 : (Fin d → ℝ) → ℝ)
  (nu : Measure (Fin d → ℝ))
  (eps : ℝ)
  (h_f0_meas : Measurable f0)
  (h_nu_fin : IsFiniteMeasure nu)
  (h_eps_nonneg : 0 ≤ eps)

  (h_exists_net : ∃ N : FullyConnectedReLUNet d, 0 < N.depth ∧
    N.depth ≤ depth ∧ N.width ≤ width ∧ N.parameterCount ≤ parameterCount ∧
      Measurable (N.realize) ∧ ∀ x : Fin d → ℝ, |N.realize x - f0 x| ≤ eps)
  (h_bdd_below : BddBelow (Set.image (fun (f : (Fin d → ℝ) → ℝ) => integratedSquaredError nu f f0) (reluNetworkClass d depth width parameterCount)))
  : classApproximationError nu (reluNetworkClass d depth width parameterCount) f0 ≤ (nu Set.univ).toReal * eps ^ 2 := by`,
    svg: "Nonparametric/reluNetworkClass_classApproximationError_le_of_exists_pointwise.svg",
    decls: 13,
  },
  {
    name: "Wedin sin-theta theorem for singular subspaces",
    module: "Matrix analysis",
    leanFile: "Statlib/HighDim/MatrixAnalysis/WedinSinTheta.lean",
    math:
      "\\max\\{\\|UU^\\top-\\hat U\\hat U^\\top\\|_F,\\|VV^\\top-\\hat V\\hat V^\\top\\|_F\\}" +
      "\\le \\sqrt{2r}\\,\\|E\\|_{\\mathrm{op}}/\\delta",
    blurb:
      "A rectangular singular-subspace perturbation theorem: if Ahat = A + E " +
      "and the top-r singular values are separated, both projector distances " +
      "are controlled by the operator norm of E over the gap.",
    statement: `theorem wedin_sin_theta {m n r : ℕ} (hr0 : 0 < r) (hrm : r < m) (hrn : r < n)
    (A E : Matrix (Fin m) (Fin n) ℝ) (Ahat : Matrix (Fin m) (Fin n) ℝ) (h_Ahat : Ahat = A + E)
    (U1 Uhat1 : Matrix (Fin m) (Fin r) ℝ) (V1 Vhat1 : Matrix (Fin n) (Fin r) ℝ)
    (hU1_orth : U1.transpose * U1 = 1) (hUhat1_orth : Uhat1.transpose * Uhat1 = 1)
    (hV1_orth : V1.transpose * V1 = 1) (hVhat1_orth : Vhat1.transpose * Vhat1 = 1)
    (hU1_sub : IsTopRLeftSingularSubspace A r (Nat.le_of_lt hrm) U1)
    (hUhat1_sub : IsTopRLeftSingularSubspace Ahat r (Nat.le_of_lt hrm) Uhat1)
    (hV1_sub : IsTopRRightSingularSubspace A r (Nat.le_of_lt hrn) V1)
    (hVhat1_sub : IsTopRRightSingularSubspace Ahat r (Nat.le_of_lt hrn) Vhat1)
    (δ : ℝ) (hδ : 0 < δ) (hrmin : r < min m n := lt_min_iff.mpr ⟨hrm, hrn⟩)
    (hgap : 2 * δ ≤
      singularValues A ⟨Nat.pred r, lt_trans (Nat.pred_lt (Nat.pos_iff_ne_zero.mp hr0)) hrmin⟩ -
        singularValues A ⟨r, hrmin⟩)
    (hE : opNorm E < δ / 2) :
    max (frobeniusNorm (U1 * U1.transpose - Uhat1 * Uhat1.transpose))
        (frobeniusNorm (V1 * V1.transpose - Vhat1 * Vhat1.transpose)) ≤
      Real.sqrt (2 * (r : ℝ)) * opNorm E / δ := by`,
    svg: "HighDim/wedin_sin_theta.svg",
    decls: 14,
    graphLabel: "selected dependency map",
  },
  {
    name: "Debiased LASSO standard Wald coverage",
    module: "High-dimensional regression",
    leanFile: "Statlib/HighDim/Regression/DebiasingLasso.lean",
    math:
      "\\mathbb{P}\\!\\left(\\beta_j\\in\\left(\\hat b_j-c\\hat s_j/a_n,\\hat b_j+c\\hat s_j/a_n\\right)\\right)" +
      "\\to 1-\\alpha",
    blurb:
      "An iid-score debiasing result: L1 control, row-approximation error, " +
      "studentization, and Gaussian critical-value calibration produce standard " +
      "Wald confidence-interval coverage.",
    statement: `theorem tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real
    {Ω : Type*} [MeasurableSpace Ω] {μ : Measure Ω} [IsProbabilityMeasure μ]
    {p : ℕ}
    (a l1Rate : ℕ → ℝ)
    (M Gram : ℕ → Matrix (Fin p) (Fin p) ℝ)
    (β : Fin p → ℝ)
    (βhat linearScore : ℕ → Ω → Fin p → ℝ)
    (rowErr : ℕ → Fin p → ℝ)
    (Yscore : ℕ → Ω → ℝ) (σ ρ : ℝ)
    (Zstd : Ω → ℝ)
    (se : ℕ → Ω → Fin p → ℝ) (j : Fin p)
    (c α : ℝ)
    (hσ_pos : 0 < σ)
    (hY_meas : ∀ i, Measurable (Yscore i))
    (hY_indep : iIndepFun (m := fun _ => inferInstance) Yscore μ)
    (hY_iid : ∀ i q, IdentDistrib (Yscore i) (Yscore q) μ μ)
    (hY_mean : ∀ i, ∫ ω, Yscore i ω ∂μ = 0)
    (hY_var : ∀ i, ∫ ω, (Yscore i ω) ^ 2 ∂μ = σ ^ 2)
    (hY_third : ∀ i, ∫ ω, |Yscore i ω| ^ 3 ∂μ = ρ)
    (hY_Lp : ∀ i, MemLp (Yscore i) 3 μ)
    (hscore_repr : ∀ n,
      Statlib.StatFoundation.Convergence.CLT.standardizedSum Yscore σ (n + 1)
        =ᵐ[μ] (fun ω => a n * linearScore n ω j))
    (hZstd : AEMeasurable Zstd μ)
    (hZstd_law : μ.map Zstd = gaussianReal (0 : ℝ) (1 : NNReal))
    (hT : HasCoordinatewiseAEMeasurable μ
      (scaledCenteredFiniteCoordinate a
        (fun n ω =>
          debiasedLassoEstimator (M n) (Gram n) β (βhat n ω) (linearScore n ω))
        β))
    (hrow : ∀ᶠ n in atTop,
      HasDebiasedLassoRowApproxError (M n) (Gram n) (rowErr n))
    (hl1 : IsBigOInProbability μ
      (fun n ω => l1Norm (fun k => β k - βhat n ω k)) l1Rate atTop)
    (hrate : ∀ q : Fin p,
      Tendsto (fun n => (a n * rowErr n q) * l1Rate n) atTop (nhds 0))
    (hse : TendstoInMeasure μ (fun n ω => se n ω j) atTop (fun _ => (1 : ℝ)))
    (hse_meas : ∀ n, AEMeasurable (fun ω => se n ω j) μ)
    (ha_pos : ∀ n, 0 < a n)
    (hse_pos : ∀ n ω, 0 < se n ω j)
    (hcrit : IsStandardGaussianTwoSidedCriticalValue α c) :
    Tendsto
      (fun n =>
        μ {ω |
          β j ∈ Set.Ioo
            (debiasedLassoEstimator (M n) (Gram n) β (βhat n ω) (linearScore n ω) j
              - c * se n ω j / a n)
            (debiasedLassoEstimator (M n) (Gram n) β (βhat n ω) (linearScore n ω) j
              + c * se n ω j / a n)})
      atTop
      (nhds (ENNReal.ofReal (1 - α))) := by`,
    svg: "HighDim/tendsto_measure_debiasedLasso_standardWaldCI_coverage_iidScoreSum_real.svg",
    decls: 13,
    graphLabel: "selected dependency map",
  },
];
