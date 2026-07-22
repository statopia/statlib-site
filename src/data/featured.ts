// ---------------------------------------------------------------------------
// Featured formalizations for the /featured page: a few representative,
// substantial theorems shown as their REAL Lean statement (verbatim from the
// statlib `main` source, proof body omitted), with the math statement and the
// theorem's dependency diagram.
//
// `statement` is copied faithfully from the source — do not paraphrase or weaken
// it. `decls` and `svg` come from the proof-narrative artifact (public/narratives).
// ---------------------------------------------------------------------------

export interface FeaturedThm {
  name: string;
  module: string; // which board it belongs to
  leanFile: string; // source path (shown as caption)
  math: string; // KaTeX statement
  blurb: string; // one-line plain-language summary
  statement: string; // real Lean statement, verbatim (proof omitted)
  svg: string; // dependency diagram, relative to /narratives
  decls: number; // declarations in the proof closure
}

export const featuredThms: FeaturedThm[] = [
  {
    name: "Rectangular matrix Bernstein inequality",
    module: "High-dimensional concentration",
    leanFile: "Statlib/HighDim/Concentration/MatrixBernstein.lean",
    math:
      "\\mathbb{P}\\!\\left(\\Big\\|\\sum_k X_k\\Big\\| \\ge t\\right) \\le " +
      "(p+q)\\exp\\!\\left(\\frac{-t^2/2}{\\sigma^2+Rt/3}\\right)",
    blurb:
      "The high-dimensional matrix Bernstein theorem now closes through the " +
      "operator-convexity/Lieb trace chain, with no remaining matrix Lieb axiom.",
    statement: `theorem matrix_bernstein_rect {p q : ℕ} {m : ℕ} (hpq : 0 < p + q) (μ : Measure Ω)
    [IsProbabilityMeasure μ]
    (X : Fin m → Ω → Matrix (Fin p) (Fin q) ℝ)
    (hX_meas : ∀ k, Measurable (X k))
    (hX_ind : iIndepFun X μ)
    (hX_zero : ∀ k, HasZeroMean (X k) μ)
    (R : ℝ) (hR : ∀ k, HasBoundedSpectralNorm (X k) R μ)
    (σsq : ℝ)
    (hσ : max ‖∑ k : Fin m, ∫ ω, (X k ω) * Matrix.transpose (X k ω) ∂μ‖
              ‖∑ k : Fin m, ∫ ω, Matrix.transpose (X k ω) * (X k ω) ∂μ‖ ≤ σsq)
    {t : ℝ} (ht : 0 ≤ t) :
    μ {ω | ‖∑ k : Fin m, X k ω‖ ≥ t} ≤
    ENNReal.ofReal ((p + q : ℝ) * Real.exp (-(t ^ 2 / 2) / (σsq + R * t / 3))) := by`,
    svg: "HighDim/matrix_bernstein_rect.svg",
    decls: 176,
  },
  {
    name: "Anisotropic sub-Gaussian RIP tail",
    module: "High-dimensional geometry",
    leanFile: "Statlib/HighDim/Geometry/SubGaussianRIPTailAnisotropic.lean",
    math:
      "m\\gtrsim \\frac{\\sigma^4}{\\kappa^2}\\frac{s\\log(en/s)}{\\delta^2} " +
      "\\Rightarrow \\Pr[\\text{anisotropic RIP failure}]\\le " +
      "2\\exp(-c\\delta^2m\\kappa^2/\\sigma^4)",
    blurb:
      "A heterogeneous-covariance concentration theorem: sparse quadratic " +
      "forms concentrate around the covariance geometry, not just the identity.",
    statement: `theorem subgaussian_rip_tail_anisotropic :
    ∃ C c : ℝ, 0 < C ∧ 0 < c ∧
      ∀ {Ω : Type*} [MeasurableSpace Ω]
        {n m : ℕ} (_hm : 0 < m) (μ : Measure Ω) [IsProbabilityMeasure μ]
        (rows : Fin m → Ω → EuclideanSpace ℝ (Fin n)) (σ : ℝ≥0)
        (_hrows_meas : ∀ i, Measurable (rows i))
        (_hrows_iid  : iIndepFun rows μ)
        (cov : Matrix (Fin n) (Fin n) ℝ)
        (_hrows_cov  : ∀ i, HasCovarianceMatrix (rows i) cov μ)
        (_hrows_sg   : ∀ i, IsSubGaussianVector (rows i) σ μ) (_hσ : 0 < σ)
        (κ : ℝ) (_hκ : 0 < κ)
        (_hcov_min : ∀ u : EuclideanSpace ℝ (Fin n),
          κ * (∑ a : Fin n, (u a) ^ 2)
            ≤ ∑ a : Fin n, ∑ b : Fin n, u a * cov a b * u b)
        (s : ℕ) (_hs : 0 < s) (_hsn : s ≤ n)
        (δ : ℝ) (_hδ₀ : 0 < δ) (_hδ₁ : δ < 1)
        (_hsc : C * (σ : ℝ) ^ 4 / κ ^ 2 * s * Real.log (Real.exp 1 * n / s) / δ ^ 2
          ≤ (m : ℝ)),
        (let X : Ω → Matrix (Fin m) (Fin n) ℝ := fun ω => Matrix.of (fun i j => rows i ω j)
        μ {ω | ¬ ∀ β : Fin n → ℝ, IsSparse β s →
            (1 - δ) * (∑ a : Fin n, ∑ b : Fin n, β a * cov a b * β b)
                ≤ l2NormSq ((X ω).mulVec β) / (m : ℝ) ∧
            l2NormSq ((X ω).mulVec β) / (m : ℝ)
                ≤ (1 + δ) * (∑ a : Fin n, ∑ b : Fin n, β a * cov a b * β b)}
          ≤ ENNReal.ofReal (2 * Real.exp (-c * δ ^ 2 * (m : ℝ) * κ ^ 2 / (σ : ℝ) ^ 4))) := by`,
    svg: "HighDim/subgaussian_rip_tail_anisotropic.svg",
    decls: 26,
  },
  {
    name: "Hanson–Wright inequality (isotropic)",
    module: "High-dimensional concentration",
    leanFile: "Statlib/HighDim/Concentration/HansonWright.lean",
    math:
      "\\mathbb{P}\\big(|X^\\top A X - \\operatorname{tr}A| \\ge t\\big) \\le " +
      "2\\exp\\!\\left(-c\\min\\!\\Big(\\tfrac{t^2}{\\sigma^4\\|A\\|_F^2}, " +
      "\\tfrac{t}{\\sigma^2\\|A\\|}\\Big)\\right)",
    blurb:
      "A sub-Gaussian quadratic form concentrates around its trace with a tail " +
      "interpolating between Gaussian and exponential decay.",
    statement: `theorem hanson_wright_isotropic :
    ∃ c : ℝ, 0 < c ∧
      ∀ {n : ℕ} (μ : Measure Ω) [IsProbabilityMeasure μ]
        (X : Ω → EuclideanSpace ℝ (Fin n)) (σ : ℝ≥0)
        (_hX_meas : Measurable X)
        (_hX_mean : HasMean X 0 μ)
        (_hX_iso : IsIsotropic X μ)
        (_hX_sg : IsSubGaussianVector X σ μ)
        (_hX_indep : iIndepFun (fun i => fun ω => X ω i) μ)
        (A : Matrix (Fin n) (Fin n) ℝ)
        {t R K : ℝ} (_ht : 0 ≤ t) (_hσ : 0 < (σ : ℝ))
        (_hscale : HansonWrightScaleConditions A σ t R K)
        (_hdecouple :
          μ {ω |
              |quadForm (zeroDiagMatrix A) X ω -
                ∫ ω', quadForm (zeroDiagMatrix A) X ω' ∂μ| ≥ t / 2} ≤
            ENNReal.ofReal K *
              (μ.prod μ) {p : Ω × Ω |
                t / 8 ≤
                  |decoupledOffDiagQuadForm (Ω := Ω × Ω) A
                    (fun p => X p.1) (fun p => X p.2) p|}),
        μ {ω | |quadForm A X ω - A.trace| ≥ t} ≤
        ENNReal.ofReal (2 * Real.exp (-c * min
            (t ^ 2 / ((σ : ℝ) ^ 4 * frobeniusNormSq A))
            (t   / ((σ : ℝ) ^ 2 * ‖A‖)))) := by`,
    svg: "HighDim/hanson_wright_isotropic.svg",
    decls: 62,
  },
  {
    name: "Finite linear span approximation",
    module: "Nonparametric approximation",
    leanFile: "Statlib/Nonparametric/Approximation/Sieve.lean",
    math:
      "\\sup_x |s_\\theta(x)-f_0(x)|\\le\\varepsilon \\Rightarrow " +
      "\\mathcal{E}(\\operatorname{span}\\phi,f_0)\\le \\nu(X)\\varepsilon^2",
    blurb:
      "The nonparametric sieve interface turns a pointwise finite-series witness " +
      "into an integrated squared-error approximation bound.",
    statement: `theorem finiteLinearSpan_classApproximationError_le_of_pointwise_series_bound
  {X : Type u_1} [MeasurableSpace X] (m : ℕ) (phi : Fin m → X → ℝ) (theta : Fin m → ℝ) (f0 : X → ℝ)
  (nu : Measure X) [IsFiniteMeasure nu] (eps : ℝ)
  (h_eps_nonneg : 0 ≤ eps)
  (h_series_meas : Measurable (seriesFunction m phi theta))
  (hphi_meas : ∀ i, Measurable (phi i))
  (h_f0_meas : Measurable f0)
  (h_pointwise : ∀ x : X, |seriesFunction m phi theta x - f0 x| ≤ eps)
  (h_bdd : BddBelow ((fun f => integratedSquaredError nu f f0) '' (finiteLinearSpan m phi)))
  : classApproximationError nu (finiteLinearSpan m phi) f0 ≤ (nu Set.univ).toReal * (eps ^ 2) := by`,
    svg: "Nonparametric/finiteLinearSpan_classApproximationError_le_of_pointwise_series_bound.svg",
    decls: 11,
  },
];
