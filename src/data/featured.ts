// ---------------------------------------------------------------------------
// Featured formalizations for the /featured page: representative theorems shown
// as their REAL Lean statement (verbatim from the statlib `main` source, proof
// body omitted), with the math statement and, when available, a dependency diagram.
//
// `statement` is copied faithfully from the source — do not paraphrase or weaken
// it. Optional `svg` paths are relative to public/narratives.
// ---------------------------------------------------------------------------

export interface FeaturedThm {
  name: string;
  module: string; // which board it belongs to
  leanFile: string; // source path (shown as caption)
  math: string; // KaTeX statement
  blurb: string; // one-line plain-language summary
  statement: string; // real Lean statement, verbatim (proof omitted)
  svg?: string; // dependency diagram, relative to /narratives
  decls?: number; // declarations shown in the graph
  graphLabel?: string; // defaults to "proof dependency graph"
}

export const featuredThms: FeaturedThm[] = [
  {
    name: "Holder-smooth ReLU approximation at the -2s/d rate",
    module: "Nonparametric approximation",
    leanFile: "Statlib/Nonparametric/Approximation/NeuralNetworkAlgebra.lean",
    math:
      "f\\in\\mathcal{H}^{r+\\beta}([0,1]^d)\\Rightarrow\\exists g\\in\\mathcal{N}_{L,W}:\\ " +
      "\\sup_{x\\in[0,1]^d}|g(x)-f(x)|\\le c\\,(LW^2)^{-2(r+\\beta)/d}",
    blurb:
      "A fixed-width grid-scale construction is converted into an explicit " +
      "depth-width approximation rate for high-dimensional Holder-smooth functions.",
    statement: `theorem holderSmoothBall_unitCube_LW2_rate_from_fixed_width_M_rate
    {d r W0 : ℕ} {beta C B cDepth cErr : ℝ}
    (hd : 0 < d) (hW0 : 0 < W0)
    (hbeta_nonneg : 0 ≤ beta)
    (hsmooth_pos : 0 < (r : ℝ) + beta)
    (hcDepth : 0 < cDepth) (hcErr : 0 < cErr)
    (hMrate :
      ∀ M : ℕ, 0 < M →
        ∃ D P : ℕ,
          0 < D ∧
          (D : ℝ) ≤ cDepth * ((M : ℝ) ^ d) ∧
          P = fullyConnectedReLUParameterCount d D W0 ∧
          ∀ f : (Fin d → ℝ) → ℝ,
            f ∈ holderSmoothBall r beta C B →
            ∃ g : (Fin d → ℝ) → ℝ,
              g ∈ reluNetworkClass d D W0 P ∧
              ∀ x : Fin d → ℝ,
                (∀ q : Fin d, x q ∈ Set.Icc (0 : ℝ) 1) →
                  |g x - f x| ≤ cErr * (M : ℝ).rpow (-(2 * ((r : ℝ) + beta)))) :
    ∃ cRate : ℝ, 0 < cRate ∧
      ∀ M : ℕ, 0 < M →
        ∃ L W P : ℕ,
          0 < L ∧ 0 < W ∧
          P = fullyConnectedReLUParameterCount d L W ∧
          ∀ f : (Fin d → ℝ) → ℝ,
            f ∈ holderSmoothBall r beta C B →
            ∃ g : (Fin d → ℝ) → ℝ,
              g ∈ reluNetworkClass d L W P ∧
              ∀ x : Fin d → ℝ,
                (∀ q : Fin d, x q ∈ Set.Icc (0 : ℝ) 1) →
                  |g x - f x| ≤ cRate *
                    (((L : ℝ) * (W : ℝ) ^ 2).rpow
                      (-(2 * ((r : ℝ) + beta) / (d : ℝ)))) := by`,
  },
  {
    name: "High-order multivariate B-spline Holder rate",
    module: "Nonparametric approximation",
    leanFile: "Statlib/Nonparametric/Approximation/Spline.lean",
    math:
      "f_0\\in\\mathcal{H}^{r+\\beta}([0,1]^d)\\Rightarrow" +
      "\\mathcal{E}_{m_K}(f_0)\\le M\\,m_K^{-2(r+\\beta)/d}",
    blurb:
      "A positive-degree tensor-product B-spline basis on the high-dimensional " +
      "unit cube achieves the optimal Holder-smooth squared-error sieve exponent.",
    statement: `theorem unit_cube_bspline_high_order_holder_smooth_uniform_sieve_approximation_rate
    (q d r : ℕ)
    (nu : Measure (splineUnitCubeDomain d)) [IsFiniteMeasure nu]
    (beta C B : ℝ)
    (hd : 0 < d)
    (hr_pos : 0 < r)
    (hdegree : r ≤ q + 1)
    (hregularity : (r : ℝ) + beta ≤ (q + 1 : ℝ))
    (hbeta_nonneg : 0 ≤ beta)
    (hbeta_le_one : beta ≤ 1)
    (hC_nonneg : 0 ≤ C)
    (hB_nonneg : 0 ≤ B) :
    ∃ M : ℝ, 0 ≤ M ∧
      ∀ K : ℕ, 0 < K →
        ∀ f0 : splineUnitCubeDomain d → ℝ,
          f0 ∈ unitCubeTraceHolderSmoothBall d r beta C B →
            sieveApproximationError nu
              (unitCubePositiveDegreeExtendedBSplineSystem q d K).basisCount
              (tensorProductSplineSieve
                (unitCubePositiveDegreeExtendedBSplineSystem q d K)) f0
            ≤ M * Real.rpow
              ((unitCubePositiveDegreeExtendedBSplineSystem q d K).basisCount : ℝ)
              (-(2 * ((r : ℝ) + beta)) / (d : ℝ)) := by`,
  },
  {
    name: "Gaussian Log-Sobolev inequality for Lipschitz functions",
    module: "Statistical foundations",
    leanFile: "Statlib/StatFoundation/RandomVariable/Gaussian/LogSobolev.lean",
    math:
      "\\operatorname{Ent}_{\\gamma}(e^g)\\le\\frac12" +
      "\\int\\|\\nabla g\\|^2e^g\\,d\\gamma",
    blurb:
      "The public finite-dimensional Gross inequality for standard Gaussian " +
      "measure, used by the downstream Herbst concentration chain.",
    statement: `theorem standardGaussian_logSobolev_lipschitz_euclidean
    {n : ℕ}
    (g : EuclideanSpace ℝ (Fin n) → ℝ) (K : ℝ≥0)
    (hg : LipschitzWith K g) :
    let γ : Measure (EuclideanSpace ℝ (Fin n)) :=
      (standardPi n).map
        ((PiLp.uniformEquiv (2 : ENNReal) (fun _ : Fin n => ℝ)).symm :
          (Fin n → ℝ) → EuclideanSpace ℝ (Fin n));
    (∫ x, g x * Real.exp (g x) ∂γ) -
        (∫ x, Real.exp (g x) ∂γ) *
          Real.log (∫ x, Real.exp (g x) ∂γ) ≤
      (1 / 2 : ℝ) *
        ∫ x, (‖fderiv ℝ g x‖ ^ 2) * Real.exp (g x) ∂γ := by`,
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
