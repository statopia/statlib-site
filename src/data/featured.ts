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
    name: "Rademacher generalization bound",
    module: "Empirical processes",
    leanFile: "Statlib/StatFoundation/EmpiricalProcess/RademacherGeneralizationBound.lean",
    math:
      "\\Pr\\!\\left[\\sup_{f\\in\\mathcal{F}}(Pf-P_n f) \\le " +
      "2\\mathfrak{R}_n(\\mathcal{F}) + \\sqrt{\\log(1/\\delta)/(2n)}\\right] " +
      "\\ge 1-\\delta",
    blurb:
      "A finite-class empirical-process generalization bound combining " +
      "symmetrization, Rademacher complexity, and McDiarmid concentration.",
    statement: `theorem rademacher_generalization_bound (Ω 𝒳 : Type*) [MeasurableSpace Ω] [MeasurableSpace 𝒳]
  (μ : Measure Ω) [IsProbabilityMeasure μ]
  (n N : ℕ) (hn : 0 < n) (hNpos : 0 < N)
  (X : Fin n → Ω → 𝒳) (hXmeas : ∀ i, Measurable (X i))
  (hXindep : iIndepFun X μ)
  (hXident : ∀ i j, IdentDistrib (X i) (X j) μ μ)
  (f : Fin N → 𝒳 → ℝ) (hfmeas : ∀ j, Measurable (f j))
  (hf_nonneg : ∀ j x, 0 ≤ f j x) (hf_le_one : ∀ j x, f j x ≤ 1)
  (δ : ℝ) (hδpos : 0 < δ) (hδlt1 : δ < 1) :
  μ {ω | (⨆ j : Fin N, (∫ ω', f j (X ⟨0, hn⟩ ω') ∂μ
                         - (empiricalAverage n (f j) (fun k => X k ω) : ℝ)))
         ≤ 2 * rademacherComplexity n f μ X + Real.sqrt (Real.log (1/δ) / (2 * (n : ℝ)))} ≥ (1 : ENNReal) - ENNReal.ofReal δ :=
by`,
    svg: "StatFoundation/rademacher_generalization_bound.svg",
    decls: 8,
  },
  {
    name: "Zero-order Holder sieve approximation",
    module: "Nonparametric approximation",
    leanFile: "Statlib/Nonparametric/Approximation/Holder.lean",
    math:
      "\\exists\\phi:\\ \\forall f_0\\in\\mathcal{H}^{\\alpha}(C,B),\\ " +
      "\\mathcal{E}_m(f_0)\\le \\nu(X)(C A^{\\alpha})^2 m^{-2\\alpha/d}",
    blurb:
      "A measurable m-cell selector cover gives a piecewise-constant " +
      "selector-indicator sieve whose integrated squared-error rate over a " +
      "Holder ball is m^{-2 alpha / d}.",
    statement: `theorem holderBall_selectorIndicator_sieveApproximationError_rate_of_cover
    {X : Type*} [PseudoMetricSpace X] [MeasurableSpace X]
    (nu : Measure X) [IsFiniteMeasure nu]
    (m d : ℕ) (alpha C B A : ℝ)
    (hm : 0 < m) (hd : 0 < d)
    (hC : 0 ≤ C) (hA : 0 ≤ A) (hAlpha : 0 ≤ alpha)
    (hf0_meas :
      ∀ f0 : X → ℝ, f0 ∈ holderBall alpha C B → Measurable f0)
    (hcover :
      ∃ z : Fin m → X, ∃ pi : X → Fin m,
        Measurable pi ∧
          ∀ x : X,
            dist x (z (pi x)) ≤
              A * (m : ℝ) ^ (-(1 : ℝ) / (d : ℝ))) :
    ∃ phi : Fin m → X → ℝ,
      ∀ f0 : X → ℝ, f0 ∈ holderBall alpha C B →
        sieveApproximationError nu m phi f0
          ≤ (nu Set.univ).toReal * (C * A.rpow alpha) ^ 2 *
              (m : ℝ) ^ (-(2 * alpha) / (d : ℝ)) := by`,
    svg: "Nonparametric/holderBall_selectorIndicator_sieveApproximationError_rate_of_cover.svg",
    decls: 24,
  },
];
