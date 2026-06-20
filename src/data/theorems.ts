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
// ---------------------------------------------------------------------------

export type TheoremStatus = "proved" | "wip" | "planned";

export interface TheoremEntry {
  name: string; // human-readable name
  lean?: string; // Lean declaration name, e.g. "StatLib.Clt.lindeberg"
  blurb: string; // one sentence on what it says
  status: TheoremStatus;
}

export interface TopicArea {
  id: string; // anchor / filter key
  title: string;
  summary: string;
  theorems: TheoremEntry[];
}

// Placeholder content — replace blurbs/names with the real catalog.
export const topics: TopicArea[] = [
  {
    id: "probability",
    title: "Probability foundations",
    summary: "Measure-theoretic building blocks the rest of the library leans on.",
    theorems: [
      {
        name: "Markov's inequality",
        lean: "StatLib.Prob.markov",
        blurb: "Tail bound for a nonnegative random variable in terms of its mean.",
        status: "proved",
      },
      {
        name: "Chebyshev's inequality",
        lean: "StatLib.Prob.chebyshev",
        blurb: "Concentration of a variable around its mean via the variance.",
        status: "proved",
      },
      {
        name: "Borel–Cantelli (first lemma)",
        lean: "StatLib.Prob.borelCantelliFirst",
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
        blurb: "Sample mean converges in probability to the population mean.",
        status: "proved",
      },
      {
        name: "Lindeberg CLT",
        lean: "StatLib.Limit.lindebergClt",
        blurb: "Central limit theorem under the Lindeberg condition.",
        status: "wip",
      },
      {
        name: "Strong law of large numbers",
        lean: "StatLib.Limit.slln",
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
        blurb: "Variance floor for any unbiased estimator via Fisher information.",
        status: "wip",
      },
      {
        name: "Gauss–Markov theorem",
        lean: "StatLib.Est.gaussMarkov",
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
        blurb: "Exponential tail bound for bounded independent summands.",
        status: "proved",
      },
      {
        name: "Azuma's inequality",
        lean: "StatLib.Conc.azuma",
        blurb: "Concentration for martingales with bounded differences.",
        status: "planned",
      },
    ],
  },
];
