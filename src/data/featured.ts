// ---------------------------------------------------------------------------
// Featured formalizations for the /featured page: representative theorems shown
// as their REAL Lean statement (verbatim from the statlib `main` source, proof
// body omitted), with the math statement and a dependency diagram.
//
// `statement` is copied faithfully from the source — do not paraphrase or weaken
// it. `svg` paths are relative to public/narratives.
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
    svg: "Nonparametric/unit_cube_bspline_high_order_holder_smooth_uniform_sieve_approximation_rate.svg",
    decls: 83,
  },
  {
    name: "Gaussian concentration for Lipschitz functions",
    module: "Statistical foundations",
    leanFile: "Statlib/StatFoundation/RandomVariable/Gaussian/LipschitzConcentration.lean",
    math:
      "\\mathbb{P}\\!\\left(|f(X)-\\mathbb{E}f(X)|\\ge t\\right)" +
      "\\le 2\\exp\\!\\left(-\\frac{t^2}{2L^2}\\right)",
    blurb:
      "An L-Lipschitz function of a vector with independent standard Gaussian " +
      "coordinates has a dimension-free Gaussian tail around its mean.",
    statement: `theorem gaussian_lipschitz_concentration
    {Ω : Type*} [MeasurableSpace Ω] (μ : Measure Ω) [IsProbabilityMeasure μ]
    {n : ℕ}
    (X : Ω → EuclideanSpace ℝ (Fin n)) (hX_meas : Measurable X)
    (hX_iid : iIndepFun (fun i ω => X ω i) μ)
    (hX_std : ∀ i, Measure.map (fun ω => X ω i) μ = gaussianReal 0 1)
    (f : EuclideanSpace ℝ (Fin n) → ℝ) (L : ℝ≥0) (hL : 0 < L)
    (hf : LipschitzWith L f)
    (hf_int : Integrable (fun ω => f (X ω)) μ) :
    ∀ {t : ℝ}, 0 ≤ t →
      μ {ω | t ≤ |f (X ω) - ∫ ω', f (X ω') ∂μ|} ≤
      ENNReal.ofReal (2 * Real.exp (-t ^ 2 / (2 * (L : ℝ) ^ 2))) := by`,
    svg: "StatFoundation/gaussian_lipschitz_concentration.svg",
    decls: 115,
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
    decls: 130,
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
    decls: 68,
  },
];
