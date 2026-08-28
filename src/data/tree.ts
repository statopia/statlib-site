// GENERATED from statlib `main` Statlib/ tree, excluding underscore-prefixed scratch directories.
export interface TreeNode { name: string; dir?: boolean; children?: TreeNode[]; }

export const libraryTree: TreeNode = 
{
  "name": "Statlib",
  "dir": true,
  "children": [
    {
      "name": "Causal",
      "dir": true,
      "children": [
        {
          "name": "SCM",
          "dir": true,
          "children": [
            {
              "name": "Backdoor.lean",
              "dir": false
            },
            {
              "name": "Frontdoor.lean",
              "dir": false
            },
            {
              "name": "FrontdoorCriterion.lean",
              "dir": false
            },
            {
              "name": "GFormula.lean",
              "dir": false
            },
            {
              "name": "GFormulaGraph.lean",
              "dir": false
            },
            {
              "name": "MoralizedGraph.lean",
              "dir": false
            },
            {
              "name": "Theorems.lean",
              "dir": false
            },
            {
              "name": "Vocabulary.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Identification.lean",
          "dir": false
        },
        {
          "name": "SCM.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "HighDim",
      "dir": true,
      "children": [
        {
          "name": "Concentration",
          "dir": true,
          "children": [
            {
              "name": "FrobeniusNormSqConcentration.lean",
              "dir": false
            },
            {
              "name": "GaussianQuadraticForm.lean",
              "dir": false
            },
            {
              "name": "HansonWright.lean",
              "dir": false
            },
            {
              "name": "MatrixBernstein.lean",
              "dir": false
            },
            {
              "name": "OperatorNormSubgaussian.lean",
              "dir": false
            },
            {
              "name": "SubGaussianMax.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "CovarianceMatrix",
          "dir": true,
          "children": [
            {
              "name": "L1QuadraticProcess",
              "dir": true,
              "children": [
                {
                  "name": "RadiusFluctuation.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "CovDiagonalConcentration.lean",
              "dir": false
            },
            {
              "name": "CovQuadraticDeviation.lean",
              "dir": false
            },
            {
              "name": "CovTraceConcentration.lean",
              "dir": false
            },
            {
              "name": "L1QuadraticProcess.lean",
              "dir": false
            },
            {
              "name": "Properties.lean",
              "dir": false
            },
            {
              "name": "SampleCovariance.lean",
              "dir": false
            },
            {
              "name": "SampleCovEigenvalueLower.lean",
              "dir": false
            },
            {
              "name": "SampleCovEigenvalueUpper.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Geometry",
          "dir": true,
          "children": [
            {
              "name": "CoveringNumbers.lean",
              "dir": false
            },
            {
              "name": "JohnsonLindenstrauss.lean",
              "dir": false
            },
            {
              "name": "RIPConstruction.lean",
              "dir": false
            },
            {
              "name": "SubGaussianRIPTailAnisotropic.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "MatrixAnalysis",
          "dir": true,
          "children": [
            {
              "name": "AndoVocabulary.lean",
              "dir": false
            },
            {
              "name": "CStarBridge.lean",
              "dir": false
            },
            {
              "name": "Fischer.lean",
              "dir": false
            },
            {
              "name": "FrobeniusNormSvdRelation.lean",
              "dir": false
            },
            {
              "name": "GoldenThompson.lean",
              "dir": false
            },
            {
              "name": "Hadamard.lean",
              "dir": false
            },
            {
              "name": "HansenPedersenJensenMulLog.lean",
              "dir": false
            },
            {
              "name": "HardSvThreshold.lean",
              "dir": false
            },
            {
              "name": "KleinTraceExpVariationalLb.lean",
              "dir": false
            },
            {
              "name": "KyFan.lean",
              "dir": false
            },
            {
              "name": "LiebRuskaiConjInvJointlyConvex.lean",
              "dir": false
            },
            {
              "name": "LiebThirring.lean",
              "dir": false
            },
            {
              "name": "LiebTraceConcavity.lean",
              "dir": false
            },
            {
              "name": "LowRankFrobeniusErrorDecomposition.lean",
              "dir": false
            },
            {
              "name": "MatrixLogIntegralRep.lean",
              "dir": false
            },
            {
              "name": "NuclearNormLeSqrtRank.lean",
              "dir": false
            },
            {
              "name": "NuclearNormProperties.lean",
              "dir": false
            },
            {
              "name": "OperatorConvexMulLog.lean",
              "dir": false
            },
            {
              "name": "PowerTraceConcavity.lean",
              "dir": false
            },
            {
              "name": "RankOneSinTheta.lean",
              "dir": false
            },
            {
              "name": "RelativeEntropyJointConvex.lean",
              "dir": false
            },
            {
              "name": "SingularValueProperties.lean",
              "dir": false
            },
            {
              "name": "SVDFoundation.lean",
              "dir": false
            },
            {
              "name": "SvdSortedExists.lean",
              "dir": false
            },
            {
              "name": "SvSoftThreshold.lean",
              "dir": false
            },
            {
              "name": "TraceExp.lean",
              "dir": false
            },
            {
              "name": "TraceExpVariationalFormula.lean",
              "dir": false
            },
            {
              "name": "VonNeumann.lean",
              "dir": false
            },
            {
              "name": "WedinSinTheta.lean",
              "dir": false
            },
            {
              "name": "Weyl.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "MatrixRecovery",
          "dir": true,
          "children": [
            {
              "name": "RankConstrainedDenoising.lean",
              "dir": false
            },
            {
              "name": "RankOneSpectralInitialization.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Regression",
          "dir": true,
          "children": [
            {
              "name": "DebiasingLasso.lean",
              "dir": false
            },
            {
              "name": "DesignNoiseInnerSubexponential.lean",
              "dir": false
            },
            {
              "name": "DesignNoiseSecondMoment.lean",
              "dir": false
            },
            {
              "name": "Incoherence.lean",
              "dir": false
            },
            {
              "name": "L1RSEFromCovariance.lean",
              "dir": false
            },
            {
              "name": "LassoOracle.lean",
              "dir": false
            },
            {
              "name": "LassoRSEOracle.lean",
              "dir": false
            },
            {
              "name": "SampleCovarianceDesignBridge.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "SpectralPerturbation",
          "dir": true,
          "children": [
            {
              "name": "DavisKahan.lean",
              "dir": false
            },
            {
              "name": "Eigenvalues.lean",
              "dir": false
            },
            {
              "name": "PCA.lean",
              "dir": false
            },
            {
              "name": "Weyl.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Vocabulary",
          "dir": true,
          "children": [
            {
              "name": "CStarBridge.lean",
              "dir": false
            },
            {
              "name": "DebiasingLasso.lean",
              "dir": false
            },
            {
              "name": "DesignMatrix.lean",
              "dir": false
            },
            {
              "name": "Norms.lean",
              "dir": false
            },
            {
              "name": "QuadraticForms.lean",
              "dir": false
            },
            {
              "name": "Quantum.lean",
              "dir": false
            },
            {
              "name": "RandomMatrix.lean",
              "dir": false
            },
            {
              "name": "RandomVector.lean",
              "dir": false
            },
            {
              "name": "Restrictions.lean",
              "dir": false
            },
            {
              "name": "Sparse.lean",
              "dir": false
            },
            {
              "name": "Spectral.lean",
              "dir": false
            },
            {
              "name": "SVD.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Basic.lean",
          "dir": false
        },
        {
          "name": "Concentration.lean",
          "dir": false
        },
        {
          "name": "CovarianceMatrix.lean",
          "dir": false
        },
        {
          "name": "Geometry.lean",
          "dir": false
        },
        {
          "name": "MatrixAnalysis.lean",
          "dir": false
        },
        {
          "name": "MatrixRecovery.lean",
          "dir": false
        },
        {
          "name": "Regression.lean",
          "dir": false
        },
        {
          "name": "SpectralPerturbation.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "HypothesisTesting",
      "dir": true,
      "children": [
        {
          "name": "Asymptotic",
          "dir": true,
          "children": [
            {
              "name": "ChiSquareAsymptotics.lean",
              "dir": false
            },
            {
              "name": "TTestAsymptotic.lean",
              "dir": false
            },
            {
              "name": "Vocabulary.lean",
              "dir": false
            },
            {
              "name": "ZTestAsymptotic.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Inference",
          "dir": true,
          "children": [
            {
              "name": "ConfidenceInterval.lean",
              "dir": false
            },
            {
              "name": "NormalTheoryConfidence.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "MLR",
          "dir": true,
          "children": [
            {
              "name": "KarlinRubin.lean",
              "dir": false
            },
            {
              "name": "NPConditions.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "MultipleTesting",
          "dir": true,
          "children": [
            {
              "name": "BenjaminiHochberg.lean",
              "dir": false
            },
            {
              "name": "Bonferroni.lean",
              "dir": false
            },
            {
              "name": "Holm.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "NeymanPearson",
          "dir": true,
          "children": [
            {
              "name": "Complete.lean",
              "dir": false
            },
            {
              "name": "Existence.lean",
              "dir": false
            },
            {
              "name": "IntegralInequality.lean",
              "dir": false
            },
            {
              "name": "IntegrandInequality.lean",
              "dir": false
            },
            {
              "name": "Optimality.lean",
              "dir": false
            },
            {
              "name": "ToTestFunction.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Nonparametric",
          "dir": true,
          "children": [
            {
              "name": "SignedRank.lean",
              "dir": false
            },
            {
              "name": "SignTest.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "NormalTheory",
          "dir": true,
          "children": [
            {
              "name": "ANOVA.lean",
              "dir": false
            },
            {
              "name": "SampleMean.lean",
              "dir": false
            },
            {
              "name": "TTest.lean",
              "dir": false
            },
            {
              "name": "VarianceTest.lean",
              "dir": false
            },
            {
              "name": "ZTest.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "PValue",
          "dir": true,
          "children": [
            {
              "name": "DecisionRule.lean",
              "dir": false
            },
            {
              "name": "Validity.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "UMPU",
          "dir": true,
          "children": [
            {
              "name": "Basic.lean",
              "dir": false
            },
            {
              "name": "Boundary.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Bridge.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "Nonparametric",
      "dir": true,
      "children": [
        {
          "name": "Approximation",
          "dir": true,
          "children": [
            {
              "name": "FunctionClasses.lean",
              "dir": false
            },
            {
              "name": "Holder.lean",
              "dir": false
            },
            {
              "name": "Kernel.lean",
              "dir": false
            },
            {
              "name": "Metric.lean",
              "dir": false
            },
            {
              "name": "NeuralNetwork.lean",
              "dir": false
            },
            {
              "name": "NeuralNetworkAlgebra.lean",
              "dir": false
            },
            {
              "name": "RKHS.lean",
              "dir": false
            },
            {
              "name": "Sieve.lean",
              "dir": false
            },
            {
              "name": "Spline.lean",
              "dir": false
            },
            {
              "name": "SplineFacts.lean",
              "dir": false
            },
            {
              "name": "Wavelet.lean",
              "dir": false
            },
            {
              "name": "WaveletFacts.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "FunctionalData",
          "dir": true,
          "children": [
            {
              "name": "Mean.lean",
              "dir": false
            },
            {
              "name": "Regression.lean",
              "dir": false
            },
            {
              "name": "Vocabulary.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "KernelRegression",
          "dir": true,
          "children": [
            {
              "name": "KernelRate.lean",
              "dir": false
            },
            {
              "name": "KRRClosedForm.lean",
              "dir": false
            },
            {
              "name": "Representer.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "OracleInterface",
          "dir": true,
          "children": [
            {
              "name": "Risk.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Vocabulary",
          "dir": true,
          "children": [
            {
              "name": "ConformalQuantileRegression.lean",
              "dir": false
            },
            {
              "name": "Estimator.lean",
              "dir": false
            },
            {
              "name": "FunctionClasses.lean",
              "dir": false
            },
            {
              "name": "Kernel.lean",
              "dir": false
            },
            {
              "name": "KernelMethods.lean",
              "dir": false
            },
            {
              "name": "KernelRegression.lean",
              "dir": false
            },
            {
              "name": "Loss.lean",
              "dir": false
            },
            {
              "name": "Models.lean",
              "dir": false
            },
            {
              "name": "NeuralNetwork.lean",
              "dir": false
            },
            {
              "name": "Risk.lean",
              "dir": false
            },
            {
              "name": "RKHS.lean",
              "dir": false
            },
            {
              "name": "Sieve.lean",
              "dir": false
            },
            {
              "name": "Spline.lean",
              "dir": false
            },
            {
              "name": "Wavelet.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Approximation.lean",
          "dir": false
        },
        {
          "name": "Basic.lean",
          "dir": false
        },
        {
          "name": "ConformalQuantileRegression.lean",
          "dir": false
        },
        {
          "name": "FunctionalData.lean",
          "dir": false
        },
        {
          "name": "KernelRegression.lean",
          "dir": false
        },
        {
          "name": "OracleInterface.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "RandomMatrix",
      "dir": true,
      "children": [
        {
          "name": "Vocabulary",
          "dir": true,
          "children": [
            {
              "name": "Distributions.lean",
              "dir": false
            },
            {
              "name": "Ensemble.lean",
              "dir": false
            },
            {
              "name": "SpectralMeasure.lean",
              "dir": false
            },
            {
              "name": "StieltjesTransform.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Basic.lean",
          "dir": false
        },
        {
          "name": "MeasuresAreProbability.lean",
          "dir": false
        },
        {
          "name": "MPSceLemmas.lean",
          "dir": false
        },
        {
          "name": "SpectralMoment.lean",
          "dir": false
        },
        {
          "name": "StieltjesAnalysis.lean",
          "dir": false
        },
        {
          "name": "StieltjesTransformBound.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "StatFoundation",
      "dir": true,
      "children": [
        {
          "name": "BasicAnalysis",
          "dir": true,
          "children": [
            {
              "name": "exp_neg_sq_div_le_exp_neg_sq_div_of_den_le.lean",
              "dir": false
            },
            {
              "name": "measure_le_ofReal_of_measureReal_le.lean",
              "dir": false
            },
            {
              "name": "sub_le_abs_sub_of_gap_near.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Concentration",
          "dir": true,
          "children": [
            {
              "name": "ExponentialType",
              "dir": true,
              "children": [
                {
                  "name": "azuma_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "azuma_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "bennett_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_bounded_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_bounded_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_martingale_bounded_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_martingale_bounded_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_martingale_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_martingale_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "bernstein_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_bounded_mean_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_bounded_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_bounded_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_mean_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_mgf_le.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_sum_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "hoeffding_sum_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "mcdiarmid_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_max_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mean_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_sum_mgf_le_of_indep.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_abs_tail_real.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_max_expectation_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_max_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_sum_mgf_le_of_indep.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "MomentType",
              "dir": true,
              "children": [
                {
                  "name": "bdg_upper_l2.lean",
                  "dir": false
                },
                {
                  "name": "cramer_chernoff.lean",
                  "dir": false
                },
                {
                  "name": "efron_stein_inequality.lean",
                  "dir": false
                },
                {
                  "name": "jensen_inequality_prob.lean",
                  "dir": false
                },
                {
                  "name": "khintchine_inequality.lean",
                  "dir": false
                },
                {
                  "name": "lyapunov_moment_ineq.lean",
                  "dir": false
                },
                {
                  "name": "moment_tail_bound.lean",
                  "dir": false
                },
                {
                  "name": "paley_zygmund.lean",
                  "dir": false
                },
                {
                  "name": "rosenthal_inequality.lean",
                  "dir": false
                },
                {
                  "name": "von_bahr_esseen.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "ExponentialType.lean",
              "dir": false
            },
            {
              "name": "MomentType.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Convergence",
          "dir": true,
          "children": [
            {
              "name": "AnalysisTools",
              "dir": true,
              "children": [
                {
                  "name": "StochasticOrder",
                  "dir": true,
                  "children": [
                    {
                      "name": "Algebra.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraAdd.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraAddLittle.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraDeterministicScale.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraFiniteSum.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraMap.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraProduct.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraProductBig.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraProductMixedLittleBig.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraProductMixedOBigLittle.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraSubBig.lean",
                      "dir": false
                    },
                    {
                      "name": "AlgebraSubLittle.lean",
                      "dir": false
                    },
                    {
                      "name": "Basic.lean",
                      "dir": false
                    },
                    {
                      "name": "ConvergenceBridges.lean",
                      "dir": false
                    },
                    {
                      "name": "Rate.lean",
                      "dir": false
                    },
                    {
                      "name": "RateBig.lean",
                      "dir": false
                    },
                    {
                      "name": "RateBounds.lean",
                      "dir": false
                    },
                    {
                      "name": "RateLittle.lean",
                      "dir": false
                    },
                    {
                      "name": "RateRefinement.lean",
                      "dir": false
                    },
                    {
                      "name": "SlutskyProduct.lean",
                      "dir": false
                    },
                    {
                      "name": "TailGates.lean",
                      "dir": false
                    }
                  ]
                },
                {
                  "name": "AsymptoticLinear.lean",
                  "dir": false
                },
                {
                  "name": "CharacteristicFunction.lean",
                  "dir": false
                },
                {
                  "name": "ConvergenceModes.lean",
                  "dir": false
                },
                {
                  "name": "CramerWold.lean",
                  "dir": false
                },
                {
                  "name": "IntegralConvergence.lean",
                  "dir": false
                },
                {
                  "name": "LevyContinuity.lean",
                  "dir": false
                },
                {
                  "name": "MappingTheorems.lean",
                  "dir": false
                },
                {
                  "name": "Scheffe.lean",
                  "dir": false
                },
                {
                  "name": "SmoothComparison.lean",
                  "dir": false
                },
                {
                  "name": "SmoothCutoff.lean",
                  "dir": false
                },
                {
                  "name": "SmoothMax.lean",
                  "dir": false
                },
                {
                  "name": "Tightness.lean",
                  "dir": false
                },
                {
                  "name": "UniformIntegrability.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "CentralLimitTheorem",
              "dir": true,
              "children": [
                {
                  "name": "FiniteLinearCombination.lean",
                  "dir": false
                },
                {
                  "name": "IID.lean",
                  "dir": false
                },
                {
                  "name": "LindebergFeller.lean",
                  "dir": false
                },
                {
                  "name": "Lyapunov.lean",
                  "dir": false
                },
                {
                  "name": "MaxType.lean",
                  "dir": false
                },
                {
                  "name": "Multivariate.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "LawOfLargeNumbers",
              "dir": true,
              "children": [
                {
                  "name": "GlivenkoCantelli.lean",
                  "dir": false
                },
                {
                  "name": "UniformStrongLaw.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "Resampling",
              "dir": true,
              "children": [
                {
                  "name": "AntiConcentration.lean",
                  "dir": false
                },
                {
                  "name": "BootstrapInterface.lean",
                  "dir": false
                },
                {
                  "name": "GaussianMaxComparison.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "AnalysisTools.lean",
              "dir": false
            },
            {
              "name": "CentralLimitTheorem.lean",
              "dir": false
            },
            {
              "name": "LawOfLargeNumbers.lean",
              "dir": false
            },
            {
              "name": "Resampling.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "EmpiricalProcess",
          "dir": true,
          "children": [
            {
              "name": "BoundedDifference.lean",
              "dir": false
            },
            {
              "name": "DudleyEntropyIntegral.lean",
              "dir": false
            },
            {
              "name": "DudleyRademacher.lean",
              "dir": false
            },
            {
              "name": "FiniteClassRademacherComplexity.lean",
              "dir": false
            },
            {
              "name": "GlivenkoCantelliQuantitative.lean",
              "dir": false
            },
            {
              "name": "RademacherContraction.lean",
              "dir": false
            },
            {
              "name": "RademacherGeneralizationBound.lean",
              "dir": false
            },
            {
              "name": "RademacherSignMGF.lean",
              "dir": false
            },
            {
              "name": "Symmetrization.lean",
              "dir": false
            },
            {
              "name": "UniformDeviationFiniteClass.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Probability",
          "dir": true,
          "children": [
            {
              "name": "ChiSquared.lean",
              "dir": false
            },
            {
              "name": "CondMgfFreezing.lean",
              "dir": false
            },
            {
              "name": "FDistribution.lean",
              "dir": false
            },
            {
              "name": "TDistribution.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "RandomVariable",
          "dir": true,
          "children": [
            {
              "name": "Gaussian",
              "dir": true,
              "children": [
                {
                  "name": "Hermite.lean",
                  "dir": false
                },
                {
                  "name": "HilbertSpace.lean",
                  "dir": false
                },
                {
                  "name": "LipschitzConcentration.lean",
                  "dir": false
                },
                {
                  "name": "LogSobolev.lean",
                  "dir": false
                },
                {
                  "name": "Standard.lean",
                  "dir": false
                },
                {
                  "name": "Stein.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "HilbertValue",
              "dir": true,
              "children": [
                {
                  "name": "Covariance.lean",
                  "dir": false
                },
                {
                  "name": "Vocabulary.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "SubExponential",
              "dir": true,
              "children": [
                {
                  "name": "scalar_sq_centered_exp_integrable.lean",
                  "dir": false
                },
                {
                  "name": "scalar_sq_centered_subexponential_explicit.lean",
                  "dir": false
                },
                {
                  "name": "subexp_closure.lean",
                  "dir": false
                },
                {
                  "name": "subexp_cond_mgf_le_of_indep.lean",
                  "dir": false
                },
                {
                  "name": "subexp_exp_tail_of_subexp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_finite_of_exp_tail.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_finite_of_moment_le.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_finite.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_le_of_bounded.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_le_of_exponential.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_le_of_sq_subgaussian.lean",
                  "dir": false
                },
                {
                  "name": "subexp_mgf_le_of_subgaussian.lean",
                  "dir": false
                },
                {
                  "name": "subexp_moment_le_of_mgf_finite.lean",
                  "dir": false
                },
                {
                  "name": "subexp_of_mgf_finite.lean",
                  "dir": false
                },
                {
                  "name": "subexp_variance_le.lean",
                  "dir": false
                },
                {
                  "name": "subexponential_mgf_const_mul.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_prod_subexponential.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "SubGaussian",
              "dir": true,
              "children": [
                {
                  "name": "cond_subgaussian_linear_form_of_indep.lean",
                  "dir": false
                },
                {
                  "name": "sq_le_two_mul_exp.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_even_moment_le_of_tail.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_even_moment_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_exp_sq_le_at_one_third.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_exp_sq_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_fourth_moment_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_integral_eq_zero.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_meas_abs_ge_le_two_exp.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_meas_ge_le_exp.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_mgf_eq_of_gaussian.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_mgf_le_of_bounded.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_mgf_le_of_even_moment.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_mgf_le_of_exp_sq.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_mgf_mono_param.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_variance_le.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "Gaussian.lean",
              "dir": false
            },
            {
              "name": "HilbertValue.lean",
              "dir": false
            },
            {
              "name": "SubExponential.lean",
              "dir": false
            },
            {
              "name": "SubGaussian.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Statistics",
          "dir": true,
          "children": [
            {
              "name": "Estimation",
              "dir": true,
              "children": [
                {
                  "name": "AsymptoticLinear.lean",
                  "dir": false
                },
                {
                  "name": "Consistency.lean",
                  "dir": false
                },
                {
                  "name": "CramerRao.lean",
                  "dir": false
                },
                {
                  "name": "MLE.lean",
                  "dir": false
                },
                {
                  "name": "MultiParameter.lean",
                  "dir": false
                },
                {
                  "name": "UStatistic.lean",
                  "dir": false
                },
                {
                  "name": "Vocabulary.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "Sufficiency",
              "dir": true,
              "children": [
                {
                  "name": "LehmannScheffe",
                  "dir": true,
                  "children": [
                    {
                      "name": "CompleteUnique.lean",
                      "dir": false
                    },
                    {
                      "name": "CondExp.lean",
                      "dir": false
                    },
                    {
                      "name": "MSE.lean",
                      "dir": false
                    },
                    {
                      "name": "UMVUE.lean",
                      "dir": false
                    }
                  ]
                },
                {
                  "name": "Basic.lean",
                  "dir": false
                },
                {
                  "name": "Basu.lean",
                  "dir": false
                },
                {
                  "name": "LehmannScheffe.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "Conformal.lean",
              "dir": false
            },
            {
              "name": "Estimation.lean",
              "dir": false
            },
            {
              "name": "Sufficiency.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Vocabulary",
          "dir": true,
          "children": [
            {
              "name": "Conformal.lean",
              "dir": false
            },
            {
              "name": "CoveringNumbers.lean",
              "dir": false
            },
            {
              "name": "EmpiricalProcess.lean",
              "dir": false
            },
            {
              "name": "FiniteCoordinate.lean",
              "dir": false
            },
            {
              "name": "GaussianCriticalValue.lean",
              "dir": false
            },
            {
              "name": "Independence.lean",
              "dir": false
            },
            {
              "name": "MaxType.lean",
              "dir": false
            },
            {
              "name": "OrliczNorm.lean",
              "dir": false
            },
            {
              "name": "ParametricFamily.lean",
              "dir": false
            },
            {
              "name": "RandomVariable.lean",
              "dir": false
            },
            {
              "name": "Resampling.lean",
              "dir": false
            },
            {
              "name": "StochasticOrder.lean",
              "dir": false
            },
            {
              "name": "UniformIntegrability.lean",
              "dir": false
            },
            {
              "name": "VCDimension.lean",
              "dir": false
            }
          ]
        },
        {
          "name": "Basic.lean",
          "dir": false
        },
        {
          "name": "BasicAnalysis.lean",
          "dir": false
        },
        {
          "name": "Concentration.lean",
          "dir": false
        },
        {
          "name": "Convergence.lean",
          "dir": false
        },
        {
          "name": "EmpiricalProcess.lean",
          "dir": false
        },
        {
          "name": "Probability.lean",
          "dir": false
        },
        {
          "name": "RandomVariable.lean",
          "dir": false
        },
        {
          "name": "Statistics.lean",
          "dir": false
        },
        {
          "name": "Vocabulary.lean",
          "dir": false
        }
      ]
    },
    {
      "name": "Basic.lean",
      "dir": false
    },
    {
      "name": "Causal.lean",
      "dir": false
    },
    {
      "name": "HighDim.lean",
      "dir": false
    },
    {
      "name": "HypothesisTesting.lean",
      "dir": false
    },
    {
      "name": "Nonparametric.lean",
      "dir": false
    },
    {
      "name": "RandomMatrix.lean",
      "dir": false
    },
    {
      "name": "StatFoundation.lean",
      "dir": false
    },
    {
      "name": "Vocabulary.lean",
      "dir": false
    }
  ]
};
