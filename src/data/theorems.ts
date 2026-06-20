// ---------------------------------------------------------------------------
// The library catalog that powers /library.
//
// FIRST VERSION: hand-maintained. When the statlib repo stabilizes, replace
// this file with one generated from the Lean sources (scan `theorem`/`lemma`
// declarations -> emit this same shape) so the site stays in sync automatically.
//
// `status` drives the badge color:
//   "proved"   -> fully machine-checked, no sorry
//   "wip"      -> formalized statement, proof in progress
//   "planned"  -> on the roadmap, not yet stated
//
// `latex` is a KaTeX-compatible formula rendered at build time. Keep it to the
// statement's essence — one line.
// ---------------------------------------------------------------------------

export type TheoremStatus = "proved" | "wip" | "planned";

export interface TheoremEntry {
  name: string; // human-readable name
  lean?: string; // Lean declaration name, e.g. "StatLib.Prob.markov"
  latex?: string; // one-line KaTeX statement
  blurb: string; // one sentence on what it says
  status: TheoremStatus;
}

export interface TopicArea {
  id: string; // anchor / filter key
  title: string;
  summary: string;
  theorems: TheoremEntry[];
}

// Placeholder content — replace names/formulas/blurbs with the real catalog.
export const topics: TopicArea[] = [
  {
    id: "probability",
    title: "Probability foundations",
    summary: "Measure-theoretic building blocks the rest of the library leans on.",
    theorems: [
      {
        name: "Markov's inequality",
        lean: "StatLib.Prob.markov",
        latex: "\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}",
        blurb: "Tail bound for a nonnegative random variable in terms of its mean.",
        status: "proved",
      },
      {
        name: "Chebyshev's inequality",
        lean: "StatLib.Prob.chebyshev",
        latex: "\\mathbb{P}\\!\\left(|X-\\mu| \\ge k\\sigma\\right) \\le \\frac{1}{k^2}",
        blurb: "Concentration of a variable around its mean via the variance.",
        status: "proved",
      },
      {
        name: "Borel–Cantelli (first lemma)",
        lean: "StatLib.Prob.borelCantelliFirst",
        latex: "\\sum_n \\mathbb{P}(A_n) < \\infty \\;\\Rightarrow\\; \\mathbb{P}(\\limsup_n A_n) = 0",
        blurb: "Summable probabilities imply the events occur only finitely often.",
        status: "wip",
      },
    ],
  },
  {
    id: "limit-theorems",
    title: "Limit theorems",
    summary: "Asymptotic backbone — laws of large numbers and central limit results.",
    theorems: [
      {
        name: "Weak law of large numbers",
        lean: "StatLib.Limit.wlln",
        latex: "\\bar{X}_n \\xrightarrow{\\;p\\;} \\mu",
        blurb: "Sample mean converges in probability to the population mean.",
        status: "proved",
      },
      {
        name: "Lindeberg CLT",
        lean: "StatLib.Limit.lindebergClt",
        latex: "\\frac{1}{s_n}\\sum_{i=1}^{n}(X_i-\\mu_i) \\xrightarrow{\\;d\\;} \\mathcal{N}(0,1)",
        blurb: "Central limit theorem under the Lindeberg condition.",
        status: "wip",
      },
      {
        name: "Strong law of large numbers",
        lean: "StatLib.Limit.slln",
        latex: "\\bar{X}_n \\xrightarrow{\\;a.s.\\;} \\mu",
        blurb: "Almost-sure convergence of the sample mean.",
        status: "planned",
      },
    ],
  },
  {
    id: "estimation",
    title: "Estimation theory",
    summary: "Properties of estimators — bias, efficiency, and information bounds.",
    theorems: [
      {
        name: "Cramér–Rao lower bound",
        lean: "StatLib.Est.cramerRao",
        latex: "\\operatorname{Var}(\\hat{\\theta}) \\ge \\frac{1}{I(\\theta)}",
        blurb: "Variance floor for any unbiased estimator via Fisher information.",
        status: "wip",
      },
      {
        name: "Gauss–Markov theorem",
        lean: "StatLib.Est.gaussMarkov",
        latex: "\\operatorname{Var}(\\hat{\\beta}_{\\mathrm{OLS}}) \\preceq \\operatorname{Var}(\\tilde{\\beta})",
        blurb: "OLS is the best linear unbiased estimator under standard conditions.",
        status: "planned",
      },
    ],
  },
  {
    id: "concentration",
    title: "Concentration inequalities",
    summary: "Sharper-than-Chebyshev deviation bounds for sums and martingales.",
    theorems: [
      {
        name: "Hoeffding's inequality",
        lean: "StatLib.Conc.hoeffding",
        latex: "\\mathbb{P}\\!\\left(\\bar{X}-\\mathbb{E}[\\bar{X}] \\ge t\\right) \\le e^{-2nt^2/(b-a)^2}",
        blurb: "Exponential tail bound for bounded independent summands.",
        status: "proved",
      },
      {
        name: "Azuma's inequality",
        lean: "StatLib.Conc.azuma",
        latex: "\\mathbb{P}(|X_n-X_0| \\ge t) \\le 2\\exp\\!\\left(-\\frac{t^2}{2\\sum_i c_i^2}\\right)",
        blurb: "Concentration for martingales with bounded differences.",
        status: "planned",
      },
    ],
  },
];
