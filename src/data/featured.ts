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
    name: "Central Limit Theorem (i.i.d.)",
    module: "Statistical foundations",
    leanFile: "Statlib/StatFoundation/Convergence/CentralLimitTheorem/IID.lean",
    math: "\\frac{S_n}{\\sigma\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0,1)",
    blurb:
      "For i.i.d. centered variables with finite variance and third moment, the " +
      "standardized partial sums converge in distribution to the standard normal.",
    statement: `theorem central_limit_theorem
    {Y : ℕ → Ω → ℝ} {σ ρ : ℝ} (hσ : 0 < σ)
    (hm : ∀ i, Measurable (Y i))
    (hindep : iIndepFun (m := fun _ => inferInstance) Y μ)
    (hiid : ∀ i j, IdentDistrib (Y i) (Y j) μ μ)
    (hmean : ∀ i, ∫ ω, Y i ω ∂μ = 0)
    (hvar : ∀ i, ∫ ω, (Y i ω) ^ 2 ∂μ = σ ^ 2)
    (h3 : ∀ i, ∫ ω, |Y i ω| ^ 3 ∂μ = ρ)
    (hLp : ∀ i, MemLp (Y i) 3 μ) :
    let μs : ℕ → ProbabilityMeasure ℝ := fun n =>
      ⟨μ.map (standardizedSum Y σ (n + 1)),
        Measure.isProbabilityMeasure_map
          (measurable_standardizedSum hm).aemeasurable⟩
    ∃ μ₀ : ProbabilityMeasure ℝ,
      (∀ t, charFun (↑μ₀ : Measure ℝ) t =
        charFun (gaussianReal (0 : ℝ) (1 : NNReal)) t) ∧
      Tendsto μs atTop (𝓝 μ₀) := by`,
    svg: "StatFoundation/central_limit_theorem.svg",
    decls: 25,
  },
  {
    name: "Hanson–Wright inequality (isotropic)",
    module: "High-dimensional statistics",
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
        {t : ℝ} (_ht : 0 ≤ t),
        μ {ω | |quadForm A X ω - A.trace| ≥ t} ≤
        ENNReal.ofReal (2 * Real.exp (-c * min
            (t ^ 2 / ((σ : ℝ) ^ 4 * frobeniusNormSq A))
            (t   / ((σ : ℝ) ^ 2 * ‖A‖)))) := by`,
    svg: "HighDim/hanson_wright_isotropic.svg",
    decls: 106,
  },
  {
    name: "Johnson–Lindenstrauss embedding",
    module: "High-dimensional statistics",
    leanFile: "Statlib/HighDim/Geometry/JohnsonLindenstrauss.lean",
    math:
      "\\Pr\\big[\\forall i,j:\\,(1-\\varepsilon)\\|v_{ij}\\|^2 \\le " +
      "\\tfrac1k\\|\\Phi v_{ij}\\|^2 \\le (1+\\varepsilon)\\|v_{ij}\\|^2\\big] " +
      "\\ge 1 - 2N^2 e^{-k\\varepsilon^2/4000}",
    blurb:
      "A random k×n sub-Gaussian projection preserves all pairwise distances " +
      "among N points up to (1±ε) distortion, with high probability.",
    statement: `theorem jl_distortion_probabilistic {n k : ℕ} {N : ℕ} (hk : 0 < k)
    (μ : Measure Ω) [IsProbabilityMeasure μ]
    (Φ : Ω → Matrix (Fin k) (Fin n) ℝ)
    (hΦ_meas : ∀ i : Fin k, ∀ j : Fin n, Measurable (fun ω => Φ ω i j))
    (hΦ_iid : iIndepFun (fun p : Fin k × Fin n => fun ω => Φ ω p.1 p.2) μ)
    (hΦ_gaussian : ∀ i j, HasSubgaussianMGF (fun ω => Φ ω i j) 1 μ ∧
                          ∫ ω, Φ ω i j ∂μ = 0 ∧ ∫ ω, (Φ ω i j) ^ 2 ∂μ = 1)
    (hΦ_mulVec_iIndep : ∀ x : EuclideanSpace ℝ (Fin n),
      iIndepFun (fun i : Fin k => fun ω => ((Φ ω).mulVec x) i) μ)
    (points : Fin N → EuclideanSpace ℝ (Fin n))
    (ε : ℝ) (hε₀ : 0 < ε) (hε₁ : ε < 1) :
    μ {ω | ∀ i j : Fin N,
        let v := points i - points j
        (1 - ε) * ‖v‖ ^ 2 ≤
          l2NormSq ((1 / Real.sqrt k : ℝ) • (Matrix.mulVec (Φ ω) v)) ∧
        l2NormSq ((1 / Real.sqrt k : ℝ) • (Matrix.mulVec (Φ ω) v)) ≤
          (1 + ε) * ‖v‖ ^ 2} ≥
    1 - ENNReal.ofReal (2 * (N : ℝ) ^ 2 * Real.exp (-(k : ℝ) * ε ^ 2 / 4000)) := by`,
    svg: "HighDim/jl_distortion_probabilistic.svg",
    decls: 15,
  },
];
