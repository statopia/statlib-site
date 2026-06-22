// GENERATED from statlib `main` Statlib/ tree. Regenerate when the library changes.
export interface TreeNode { name: string; dir?: boolean; children?: TreeNode[]; }

export const libraryTree: TreeNode = {
  "name": "Statlib",
  "dir": true,
  "children": [
    {
      "name": "HighDim",
      "dir": true,
      "children": [
        {
          "name": "Concentration",
          "dir": true,
          "children": [
            {
              "name": "HansonWright.lean",
              "dir": false
            },
            {
              "name": "MatrixBernstein.lean",
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
              "name": "Properties.lean",
              "dir": false
            },
            {
              "name": "SampleCovariance.lean",
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
            }
          ]
        },
        {
          "name": "Regression",
          "dir": true,
          "children": [
            {
              "name": "LassoOracle.lean",
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
      "name": "StatFoundation",
      "dir": true,
      "children": [
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
                  "name": "Tightness.lean",
                  "dir": false
                }
              ]
            },
            {
              "name": "CentralLimitTheorem",
              "dir": true,
              "children": [
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
              "name": "SubExponential",
              "dir": true,
              "children": [
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
                  "name": "subexp_mgf_finite.lean",
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
                }
              ]
            },
            {
              "name": "SubGaussian",
              "dir": true,
              "children": [
                {
                  "name": "sq_le_two_mul_exp.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_even_moment_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_even_moment_le_of_tail.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_exp_sq_le.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_exp_sq_le_at_one_third.lean",
                  "dir": false
                },
                {
                  "name": "subgaussian_fourth_moment_le.lean",
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
              "name": "Independence.lean",
              "dir": false
            },
            {
              "name": "OrliczNorm.lean",
              "dir": false
            },
            {
              "name": "RandomVariable.lean",
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
          "name": "Convergence.lean",
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
      "name": "HighDim.lean",
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
