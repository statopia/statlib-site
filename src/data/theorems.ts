// ---------------------------------------------------------------------------
// The library catalog that powers /library.
//
// GENERATED from the statlib repo (`main`) Lean sources via the
// statlib-catalog-extract workflow. To refresh: re-run the workflow against an
// updated statlib checkout, then regenerate this file. Hand-edits are fine too —
// follow the same shape.
//
//   "proved"  -> fully machine-checked, no sorry
//   "wip"     -> formalized statement, proof in progress
//   "planned" -> on the roadmap, not yet stated
// ---------------------------------------------------------------------------

export type TheoremStatus = "proved" | "wip" | "planned";

export interface TheoremEntry {
  name: string;
  lean?: string;
  latex?: string;
  blurb: string;
  status: TheoremStatus;
}

export interface TopicArea {
  id: string;
  title: string;
  summary: string;
  declarationCounts?: {
    theorems: number;
    lemmas: number;
  };
  theorems: TheoremEntry[];
}

export const topics: TopicArea[] = [
  {
    id: "concentration",
    title: "Concentration inequalities",
    summary: "Tail and moment bounds controlling how sums and functions of independent (or martingale) random variables deviate from their means.",
    declarationCounts: { theorems: 37, lemmas: 1 },
    theorems: [
      {
        name: "Hoeffding's inequality (sub-Gaussian sum)",
        lean: "hoeffding_sum_meas_ge_le_exp",
        latex: "\\mathbb{P}\\!\\left(\\sum_i X_i \\ge t\\right) \\le \\exp\\!\\left(\\frac{-t^2}{2\\sum_i \\sigma_i^2}\\right)",
        blurb: "For independent zero-mean sub-Gaussian variables, the probability the sum exceeds t decays like a Gaussian tail in t.",
        status: "proved",
      },
      {
        name: "Cramér–Chernoff bound",
        lean: "cramer_chernoff",
        latex: "\\mathbb{P}(X \\ge t) \\le e^{-\\lambda t}\\, \\mathbb{E}\\!\\left[e^{\\lambda X}\\right]",
        blurb: "The foundational moment-generating-function tail bound obtained by combining monotonicity of the exponential with Markov's inequality.",
        status: "proved",
      },
      {
        name: "Bernstein's inequality (sub-exponential sum)",
        lean: "bernstein_sum_meas_ge_le_exp",
        latex: "\\mathbb{P}\\!\\left(\\sum_i X_i \\ge t\\right) \\le \\exp\\!\\left(-\\tfrac12 \\min\\!\\left(\\tfrac{t^2}{\\sum_i \\sigma_i^2},\\, \\tfrac{t}{b_{\\max}}\\right)\\right)",
        blurb: "For independent zero-mean sub-exponential variables, the tail interpolates between Gaussian and exponential decay depending on the deviation scale.",
        status: "proved",
      },
      {
        name: "Bernstein's inequality (bounded two-sided form)",
        lean: "bernstein_bounded_sum_meas_abs_ge_le_two_exp",
        latex: "\\mathbb{P}\\!\\left(\\left|\\sum_i X_i\\right| \\ge t\\right) \\le 2\\exp\\!\\left(-\\frac{t^2}{2(v + Mt/3)}\\right)",
        blurb: "For independent zero-mean bounded variables with |X_i| <= M and total second moment at most v, the absolute deviation of the sum has the classical Bernstein tail.",
        status: "proved",
      },
      {
        name: "Azuma–Hoeffding inequality",
        lean: "azuma_sum_meas_ge_le_exp",
        latex: "\\mathbb{P}\\!\\left(\\sum_k d_k \\ge t\\right) \\le \\exp\\!\\left(\\frac{-t^2}{2\\sum_k c_k^2}\\right)",
        blurb: "A bounded martingale-difference sequence concentrates with a Gaussian-type tail, giving a martingale analogue of Hoeffding's inequality.",
        status: "proved",
      },
      {
        name: "McDiarmid's bounded-differences inequality",
        lean: "mcdiarmid_meas_ge_le_exp",
        latex: "\\mathbb{P}\\!\\left(f(X) - \\mathbb{E}f(X) \\ge t\\right) \\le \\exp\\!\\left(\\frac{-2t^2}{\\sum_i c_i^2}\\right)",
        blurb: "A function of independent variables that changes by at most c_i when one coordinate changes concentrates sharply around its mean.",
        status: "proved",
      },
      {
        name: "Efron–Stein inequality",
        lean: "efron_stein_inequality",
        latex: "\\mathrm{Var}\\big(f(X)\\big) \\le \\tfrac12 \\sum_i \\mathbb{E}\\!\\left[\\big(f(X) - f(X^{(i)})\\big)^2\\right]",
        blurb: "Bounds the variance of a function of independent variables by the expected squared effect of resampling each coordinate independently.",
        status: "proved",
      },
    ],
  },
  {
    id: "convergence",
    title: "Convergence & limit theorems",
    summary: "Formalizes the central limit theorems (IID, Lindeberg-Feller, multivariate), the Lévy continuity and Cramér-Wold tools behind weak convergence, and uniform laws of large numbers including Glivenko-Cantelli.",
    declarationCounts: { theorems: 32, lemmas: 51 },
    theorems: [
      {
        name: "Central Limit Theorem (IID)",
        lean: "central_limit_theorem",
        latex: "\\frac{S_n}{\\sigma\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0,1)",
        blurb: "For i.i.d. centered random variables with finite variance and third moment, the standardized partial sums converge in distribution to the standard normal.",
        status: "proved",
      },
      {
        name: "Lindeberg-Feller Central Limit Theorem",
        lean: "lindeberg_feller_central_limit_theorem",
        latex: "\\frac{\\sum_{j} X_{n,j}}{s_n} \\xrightarrow{d} \\mathcal{N}(0,1) \\text{ under Lindeberg's condition}",
        blurb: "A triangular array of independent, centered row-variables whose normalized sums satisfy the Lindeberg condition converges in distribution to the standard normal.",
        status: "proved",
      },
      {
        name: "Uniform Strong Law of Large Numbers",
        lean: "uniform_strong_law",
        latex: "\\sup_{\\theta \\in \\Theta}\\left|\\frac1n\\sum_{j<n} U(X_j,\\theta) - \\mathbb{E}U(X,\\theta)\\right| \\xrightarrow{a.s.} 0",
        blurb: "For i.i.d. samples and a compact parameter space, continuous dominated criterion functions satisfy uniform almost-sure convergence of sample averages to population means.",
        status: "proved",
      },
      {
        name: "Multivariate Central Limit Theorem",
        lean: "multivariate_central_limit_theorem",
        latex: "\\langle c, \\tfrac{1}{\\sqrt{n}}\\sum_{i} X_i\\rangle \\xrightarrow{d} \\mathcal{N}(0,\\sigma_c^2)",
        blurb: "For i.i.d. random vectors, every one-dimensional projection of the standardized sums converges to a Gaussian, giving the vector CLT via Cramér-Wold.",
        status: "proved",
      },
      {
        name: "Lévy Continuity Theorem",
        lean: "levy_continuity",
        latex: "\\varphi_{\\mu_n}(t) \\to f(t),\\ f \\text{ cont. at } 0 \\;\\Rightarrow\\; \\mu_n \\xrightarrow{w} \\mu_0",
        blurb: "Pointwise convergence of characteristic functions to a function continuous at zero implies weak convergence of the underlying probability measures.",
        status: "proved",
      },
      {
        name: "Cramér-Wold Theorem",
        lean: "cramer_wold_iff",
        latex: "\\mu_n \\xrightarrow{w} \\mu_0 \\iff \\forall c,\\ \\langle c, \\cdot\\rangle_*\\mu_n \\xrightarrow{w} \\langle c, \\cdot\\rangle_*\\mu_0",
        blurb: "Weak convergence of measures on a finite-dimensional space is equivalent to weak convergence of all one-dimensional linear projections.",
        status: "proved",
      },
      {
        name: "Glivenko-Cantelli Theorem",
        lean: "glivenko_cantelli_continuous_cdf",
        latex: "\\sup_{t} |F_n(t) - F(t)| \\xrightarrow{a.s.} 0",
        blurb: "For i.i.d. samples with continuous population CDF, the empirical CDF converges almost surely to the true CDF uniformly over the real line.",
        status: "proved",
      },
    ],
  },
  {
    id: "random-variables",
    title: "Tail behavior of random variables",
    summary: "Concentration and tail-bound theory for sub-Gaussian and sub-exponential random variables, including Hoeffding-type MGF bounds and exponential tail inequalities.",
    declarationCounts: { theorems: 48, lemmas: 34 },
    theorems: [
      {
        name: "Sub-Gaussian one-sided tail bound",
        lean: "subgaussian_meas_ge_le_exp",
        latex: "\\mathbb{P}(X \\ge t) \\le e^{-t^2/(2\\sigma^2)}",
        blurb: "A mean-zero sigma^2-sub-Gaussian random variable has its right tail bounded by a Gaussian exponential decay.",
        status: "proved",
      },
      {
        name: "Sub-Gaussian two-sided tail bound",
        lean: "subgaussian_meas_abs_ge_le_two_exp",
        latex: "\\mathbb{P}(|X| \\ge t) \\le 2\\,e^{-t^2/(2\\sigma^2)}",
        blurb: "A mean-zero sub-Gaussian random variable concentrates around zero with a two-sided exponential tail.",
        status: "proved",
      },
      {
        name: "Hoeffding's lemma (bounded implies sub-Gaussian)",
        lean: "subgaussian_mgf_le_of_bounded",
        latex: "a \\le X \\le b,\\ \\mathbb{E}X=0 \\implies X \\text{ is } \\tfrac{(b-a)^2}{4}\\text{-sub-Gaussian}",
        blurb: "A bounded mean-zero random variable is sub-Gaussian with proxy variance (b-a)^2/4, giving the classical Hoeffding MGF bound.",
        status: "proved",
      },
      {
        name: "Sub-exponential Bernstein tail bound",
        lean: "subexp_meas_ge_le_exp",
        latex: "\\mathbb{P}(X \\ge t) \\le \\exp\\!\\left(-\\tfrac{1}{2}\\min\\!\\left(\\tfrac{t^2}{\\sigma^2},\\tfrac{t}{b}\\right)\\right)",
        blurb: "A mean-zero sub-exponential random variable obeys a Bernstein-type tail that is Gaussian for small t and exponential for large t.",
        status: "proved",
      },
      {
        name: "Sub-exponential MGF bound for squared sub-Gaussian",
        lean: "subexp_mgf_le_of_sq_subgaussian",
        latex: "X \\text{ sub-Gaussian} \\implies X^2 \\text{ is sub-exponential}",
        blurb: "The square of a sub-Gaussian random variable is sub-exponential, with an explicit moment generating function bound.",
        status: "proved",
      },
      {
        name: "Sub-exponential implies local finite MGF",
        lean: "subexp_mgf_finite",
        latex: "X \\text{ sub-exponential} \\implies \\exists c_0>0,\\ \\mathbb{E}e^{\\lambda X}<\\infty\\ \\text{ for } |\\lambda|\\le c_0",
        blurb: "A bundled sub-exponential MGF condition guarantees integrability of exp(lambda X) throughout a nontrivial neighborhood of the origin.",
        status: "proved",
      },
      {
        name: "Exponential tail implies local finite MGF",
        lean: "subexp_mgf_finite_of_exp_tail",
        latex: "\\mathbb{P}(|X|\\ge t) \\le c_1e^{-c_2t}\\ \\Rightarrow\\ \\exists c_0>0,\\ \\mathbb{E}e^{\\lambda X}<\\infty\\ \\text{ for } |\\lambda|\\le c_0",
        blurb: "A clean two-sided exponential tail bound is converted into finite moment-generating functions near zero.",
        status: "proved",
      },
      {
        name: "Local finite MGF implies sub-exponential",
        lean: "subexp_of_mgf_finite",
        latex: "\\mathbb{E}X=0,\\ \\mathbb{E}e^{\\lambda X}<\\infty\\ \\text{ near }0 \\Rightarrow X \\text{ is sub-exponential}",
        blurb: "The converse direction: a mean-zero variable with finite MGF on a neighborhood of zero admits sub-exponential parameters.",
        status: "proved",
      },
    ],
  },
  {
    id: "statistics",
    title: "Statistical inference & sufficiency",
    summary: "A measure-theoretic foundation for sufficient, ancillary, and complete statistics, culminating in the Lehmann-Scheffé and Basu theorems of classical estimation theory.",
    declarationCounts: { theorems: 5, lemmas: 5 },
    theorems: [
      {
        name: "Lehmann-Scheffé theorem",
        lean: "lehmannScheffe_umvue",
        latex: "\\exists h,\\; \\mathbb{E}_\\theta[(h\\circ T - g(\\theta))^2] \\le \\mathbb{E}_\\theta[(\\delta' - g(\\theta))^2]\\ \\forall \\delta'\\text{ unbiased}",
        blurb: "If T is a complete sufficient statistic and δ is unbiased for g(θ), then a function of T is the unique uniformly minimum-variance unbiased estimator (UMVUE) of g(θ).",
        status: "proved",
      },
      {
        name: "Basu's theorem",
        lean: "basu_indepFun",
        latex: "T \\text{ complete sufficient},\\ V \\text{ ancillary} \\implies T \\perp\\!\\!\\!\\perp V \\text{ under each } P_i",
        blurb: "A boundedly complete sufficient statistic is independent of every ancillary statistic under each measure in the family.",
        status: "proved",
      },
      {
        name: "Conditioning reduces MSE",
        lean: "condExp_reduces_mse",
        latex: "\\int (\\mathbb{E}[f\\mid m] - c)^2 \\, d\\mu \\le \\int (f - c)^2 \\, d\\mu",
        blurb: "The Rao-Blackwell L² projection step: replacing an estimator by its conditional expectation given a sub-σ-algebra never increases mean squared error.",
        status: "proved",
      },
      {
        name: "Completeness uniqueness of unbiased estimators",
        lean: "ae_eq_of_complete_unbiased",
        latex: "T \\text{ complete},\\ \\mathbb{E}_\\theta[f_i\\circ T]=g(\\theta) \\implies f_1\\circ T \\stackrel{a.e.}{=} f_2\\circ T",
        blurb: "Under a complete statistic, any two unbiased σ(T)-measurable estimators of the same parameter coincide almost everywhere.",
        status: "proved",
      },
      {
        name: "Sufficiency invariance of conditional expectation",
        lean: "condExp_eq_of_sufficient",
        latex: "T \\text{ sufficient} \\implies \\mathbb{E}_{\\theta_1}[f\\mid \\sigma(T)] \\stackrel{a.e.}{=} \\mathbb{E}_{\\theta_2}[f\\mid \\sigma(T)]",
        blurb: "If T is sufficient, the conditional expectation given σ(T) does not depend on the parameter θ.",
        status: "proved",
      },
      {
        name: "Parametric family and sufficiency vocabulary",
        lean: "ParametricFamily",
        latex: "P : \\Theta \\to \\mathrm{Measure}(\\Omega),\\quad \\forall\\theta\\ \\text{IsProbabilityMeasure}(P_\\theta)",
        blurb: "The headline structure modeling a parametric family of probability measures, underpinning the definitions of sufficient, complete, ancillary, and unbiased statistics.",
        status: "proved",
      },
    ],
  },
  {
    id: "hd-concentration",
    title: "High-dimensional concentration",
    summary: "Concentration inequalities for high-dimensional random objects — sub-Gaussian maxima, the matrix Bernstein inequality for sums of independent random matrices, and the Hanson-Wright bound for quadratic forms.",
    declarationCounts: { theorems: 38, lemmas: 115 },
    theorems: [
      {
        name: "Matrix Bernstein inequality",
        lean: "matrix_bernstein",
        latex: "\\mathbb{P}\\!\\left(\\Big\\|\\sum_k X_k\\Big\\| \\ge t\\right) \\le 2n\\,\\exp\\!\\left(\\frac{-t^2/2}{\\sigma^2 + Rt/3}\\right)",
        blurb: "For a sum of independent, centered, Hermitian random matrices with spectral norm bounded by R and total variance σ², the operator norm of the sum has a Bernstein-type sub-exponential tail.",
        status: "proved",
      },
      {
        name: "Rectangular matrix Bernstein inequality",
        lean: "matrix_bernstein_rect",
        latex: "\\mathbb{P}\\!\\left(\\Big\\|\\sum_k X_k\\Big\\| \\ge t\\right) \\le (p+q)\\,\\exp\\!\\left(\\frac{-t^2/2}{\\sigma^2 + Rt/3}\\right)",
        blurb: "The matrix Bernstein bound extended to sums of independent centered rectangular p×q random matrices via Hermitian dilation, with variance the max of the two one-sided second-moment norms.",
        status: "proved",
      },
      {
        name: "Sub-Gaussian maximum tail bound",
        lean: "subgaussian_linf_tail",
        latex: "\\mathbb{P}\\!\\left(\\max_{i\\le n} |X_i| \\ge t\\right) \\le 2n\\,e^{-t^2/(2\\sigma^2)}",
        blurb: "A union bound giving a sub-Gaussian tail for the ℓ∞ norm (coordinate-wise maximum) of a centered sub-Gaussian random vector.",
        status: "proved",
      },
      {
        name: "Expected sub-Gaussian maximum bound",
        lean: "subgaussian_linf_expectation",
        latex: "\\mathbb{E}\\!\\left[\\max_{i\\le n} |X_i|\\right] \\le \\sigma\\sqrt{2\\log(2n)}",
        blurb: "The expected coordinate-wise maximum of a centered sub-Gaussian random vector grows only like σ times the square root of the log dimension.",
        status: "proved",
      },
      {
        name: "Hanson-Wright inequality",
        lean: "hanson_wright",
        latex: "\\mathbb{P}\\big(|X^\\top A X - \\mathbb{E}[X^\\top A X]| \\ge t\\big) \\le 2\\exp\\!\\left(-c\\min\\!\\Big(\\tfrac{t^2}{\\sigma^4\\|A\\|_F^2}, \\tfrac{t}{\\sigma^2\\|A\\|}\\Big)\\right)",
        blurb: "A quadratic form of a centered, independent-coordinate, sub-Gaussian random vector concentrates around its mean with a mixed sub-Gaussian / sub-exponential tail governed by the Frobenius and operator norms of A.",
        status: "proved",
      },
      {
        name: "Hanson-Wright inequality (isotropic)",
        lean: "hanson_wright_isotropic",
        latex: "\\mathbb{P}\\big(|X^\\top A X - \\operatorname{tr}A| \\ge t\\big) \\le 2\\exp\\!\\left(-c\\min\\!\\Big(\\tfrac{t^2}{\\sigma^4\\|A\\|_F^2}, \\tfrac{t}{\\sigma^2\\|A\\|}\\Big)\\right)",
        blurb: "The isotropic specialization of Hanson-Wright, where the centering term is exactly the trace of A.",
        status: "proved",
      },
    ],
  },
  {
    id: "covariance",
    title: "Covariance estimation",
    summary: "Concentration and unbiasedness guarantees for the sample second-moment (covariance) matrix estimator of high-dimensional sub-Gaussian random vectors.",
    declarationCounts: { theorems: 5, lemmas: 26 },
    theorems: [
      {
        name: "Sample covariance matrix concentration",
        lean: "sampleCovariance_concentration",
        latex: "\\mathbb{P}\\big(\\|\\hat\\Sigma - \\Sigma\\| \\ge C\\sigma^2(\\sqrt{(n+t)/m} + (n+t)/m)\\big) \\le 2e^{-t}",
        blurb: "For i.i.d. centered sub-Gaussian vectors there is a universal constant so the sample second-moment matrix concentrates around the true covariance in operator norm with exponential tails.",
        status: "proved",
      },
      {
        name: "Sample covariance concentration (fixed-confidence form)",
        lean: "sampleCovariance_confidence",
        latex: "\\|\\hat\\Sigma - \\Sigma\\| \\le C\\sigma^2\\big(\\sqrt{(n+\\log(2/\\delta))/m} + (n+\\log(2/\\delta))/m\\big) \\text{ w.p. } \\ge 1-\\delta",
        blurb: "Restates the concentration bound as a high-probability operator-norm error guarantee holding with probability at least 1 minus delta.",
        status: "proved",
      },
      {
        name: "Unbiasedness of the sample second-moment estimator",
        lean: "sampleSecondMoment_unbiased",
        latex: "\\mathbb{E}[\\hat\\Sigma_{ij}] = \\Sigma_{ij} \\quad \\forall i,j",
        blurb: "Each entry of the sample second-moment matrix is an unbiased estimate of the corresponding entry of the population covariance matrix.",
        status: "proved",
      },
      {
        name: "Sample second-moment (covariance) matrix",
        lean: "sampleSecondMoment",
        latex: "\\hat\\Sigma(\\omega) = \\frac{1}{m}\\sum_{k=1}^m X_k(\\omega) X_k(\\omega)^\\top",
        blurb: "The headline estimator: the empirical average of outer products of the sample vectors, a random symmetric matrix.",
        status: "proved",
      },
      {
        name: "Isotropic norm concentration",
        lean: "isotropic_norm_concentration",
        latex: "\\mathbb{P}\\big(\\big|\\|X\\|^2 - n\\big| \\ge t\\big) \\le 2\\exp\\!\\big(-c\\min(t^2/(\\sigma^4 n),\\, t/\\sigma^2)\\big)",
        blurb: "An isotropic sub-Gaussian vector has squared norm tightly concentrated about its dimension n, with Bernstein-type sub-exponential tails.",
        status: "proved",
      },
    ],
  },
  {
    id: "hd-geometry",
    title: "High-dimensional geometry",
    summary: "Geometric foundations of high-dimensional statistics: covering numbers of Euclidean and sparse balls, Johnson-Lindenstrauss dimension reduction, and the restricted isometry property for random sub-Gaussian sensing matrices.",
    declarationCounts: { theorems: 10, lemmas: 31 },
    theorems: [
      {
        name: "Covering number bounds for the Euclidean unit ball",
        lean: "covering_number_euclidean_ball",
        latex: "(1/\\varepsilon)^n \\le N(B_2^n,\\varepsilon) \\le \\lceil 3/\\varepsilon \\rceil^{\\,n}",
        blurb: "The Euclidean unit ball has matching volumetric lower and constructive upper covering-number bounds, up to constants.",
        status: "proved",
      },
      {
        name: "Covering number lower bound (volumetric)",
        lean: "covering_number_euclidean_ball_lower",
        latex: "(1/\\varepsilon)^n \\le N(B_2^n,\\varepsilon)",
        blurb: "Any epsilon-cover of the unit ball must contain at least (1/epsilon)^n points, matching the upper bound up to constants.",
        status: "proved",
      },
      {
        name: "Johnson-Lindenstrauss embedding (probabilistic)",
        lean: "jl_distortion_probabilistic",
        latex: "\\Pr\\big[\\forall i,j:\\,(1-\\varepsilon)\\|v_{ij}\\|^2 \\le \\tfrac1k\\|\\Phi v_{ij}\\|^2 \\le (1+\\varepsilon)\\|v_{ij}\\|^2\\big] \\ge 1 - 2N^2 e^{-k\\varepsilon^2/4000}",
        blurb: "A random k-by-n sub-Gaussian projection preserves all pairwise distances among N points up to (1±epsilon) distortion with high probability.",
        status: "proved",
      },
      {
        name: "Restricted isometry property of sub-Gaussian matrices",
        lean: "subgaussian_rip_sample_complexity",
        latex: "m \\gtrsim \\sigma^4 s\\,\\log(en/s)/\\delta^2 \\;\\Rightarrow\\; \\Pr[X \\text{ is } (s,\\delta)\\text{-RIP}] \\ge 1 - 2e^{-c\\delta^2 m/\\sigma^4}",
        blurb: "An m-by-n matrix with i.i.d. isotropic sub-Gaussian rows satisfies the (s,delta) restricted isometry property with high probability once m exceeds order s·log(en/s)/delta^2.",
        status: "proved",
      },
      {
        name: "RIP implies restricted eigenvalue condition",
        lean: "rip_implies_re",
        latex: "(s,\\delta)\\text{-RIP},\\ \\delta < \\sqrt2 - 1 \\;\\Rightarrow\\; (s,3)\\text{-RE with constant } \\sqrt{1-\\delta(1+\\sqrt2)}",
        blurb: "A matrix satisfying RIP with small enough constant also satisfies the restricted eigenvalue condition used to guarantee Lasso/compressed-sensing recovery.",
        status: "proved",
      },
    ],
  },
  {
    id: "hd-regression",
    title: "High-dimensional regression",
    summary: "Oracle inequalities for the LASSO estimator in sparse high-dimensional linear models, bounding prediction and estimation error under the Restricted Eigenvalue condition.",
    declarationCounts: { theorems: 5, lemmas: 2 },
    theorems: [
      {
        name: "LASSO solution (minimizer of the LASSO objective)",
        lean: "IsLassoSolution",
        latex: "\\hat\\beta \\in \\arg\\min_{\\beta}\\ \\tfrac{1}{2m}\\|y-X\\beta\\|_2^2 + \\lambda\\|\\beta\\|_1",
        blurb: "Defines the LASSO estimator as a minimizer of the squared-error plus L1-penalty objective over all coefficient vectors.",
        status: "proved",
      },
      {
        name: "LASSO oracle prediction-error bound",
        lean: "lasso_oracle_prediction",
        latex: "\\tfrac{1}{m}\\|X(\\hat\\beta-\\beta^\\star)\\|_2^2 \\le \\frac{16\\,\\lambda^2 s}{\\kappa^2}",
        blurb: "Under the Restricted Eigenvalue condition RE(s,3,κ) and a noise control on λ, the in-sample prediction error of the LASSO is bounded by a sparsity-scaled multiple of λ².",
        status: "proved",
      },
      {
        name: "LASSO oracle L1 estimation bound",
        lean: "lasso_oracle_l1",
        latex: "\\|\\hat\\beta-\\beta^\\star\\|_1 \\le \\frac{8\\,\\lambda s}{\\kappa^2}",
        blurb: "The L1 estimation error of the LASSO is bounded by a sparsity-scaled multiple of λ under the Restricted Eigenvalue condition.",
        status: "proved",
      },
      {
        name: "LASSO oracle L2 (support-restricted) bound",
        lean: "lasso_oracle_l2",
        latex: "\\sum_{j\\in S}(\\hat\\beta_j-\\beta^\\star_j)^2 \\le \\Big(\\frac{4\\lambda}{\\kappa^2}\\Big)^2 s",
        blurb: "The squared L2 estimation error restricted to the true support S is bounded by a sparsity-scaled function of λ and the RE constant κ.",
        status: "proved",
      },
      {
        name: "LASSO cone condition",
        lean: "lasso_cone_condition",
        latex: "\\|(\\hat\\beta-\\beta^\\star)_{S^c}\\|_1 \\le 3\\,\\|(\\hat\\beta-\\beta^\\star)_{S}\\|_1",
        blurb: "Any LASSO solution's error vector lies in the cone where off-support L1 mass is at most three times the on-support L1 mass, enabling the RE condition to apply.",
        status: "proved",
      },
    ],
  },
  {
    id: "spectral",
    title: "Spectral perturbation",
    summary: "Quantitative bounds on how a matrix's eigenvalues and eigenvectors move under perturbation, applied to high-dimensional PCA via sample-covariance concentration.",
    declarationCounts: { theorems: 4, lemmas: 49 },
    theorems: [
      {
        name: "Weyl's inequality (per-index form)",
        lean: "weyl_sorted",
        latex: "|\\tilde\\lambda_k(A+E) - \\tilde\\lambda_k(A)| \\le \\lVert E\\rVert_{\\mathrm{op}}",
        blurb: "Each sorted eigenvalue of a Hermitian matrix moves by at most the operator norm of the perturbation.",
        status: "proved",
      },
      {
        name: "Davis-Kahan eigenvector bound",
        lean: "davis_kahan_eigvec",
        latex: "\\exists\\,\\hat u:\\ \\lVert \\hat u - u\\rVert_2 \\le \\tfrac{4\\lVert E\\rVert_{\\mathrm{op}}}{\\Delta}",
        blurb: "For a simple eigenvalue with eigengap Δ and a small symmetric perturbation, the perturbed unit eigenvector stays within 4‖E‖/Δ of the original.",
        status: "proved",
      },
      {
        name: "Davis-Kahan subspace bound (rank-r)",
        lean: "davis_kahan_subspace",
        latex: "\\lVert \\hat U\\hat U^\\top - UU^\\top\\rVert_F^2 \\le \\left(\\tfrac{2r\\lVert E\\rVert_{\\mathrm{op}}}{\\Delta}\\right)^2",
        blurb: "The r-dimensional invariant subspace of a Hermitian matrix is stable in Frobenius distance, controlled by the spectral gap separating the eigenvalue cluster.",
        status: "proved",
      },
      {
        name: "PCA eigenvector perturbation via covariance concentration",
        lean: "pca_eigvec_perturbation",
        latex: "\\lVert \\hat u_k - u_k\\rVert_2 \\le \\tfrac{2C\\sigma^2}{\\Delta}\\sqrt{\\tfrac{n+\\log(2/\\delta)}{m}}",
        blurb: "With high probability the empirical eigenvector from m sub-Gaussian samples converges to the population eigenvector at a rate set by dimension, sample size, and eigengap.",
        status: "proved",
      },
    ],
  },
];
