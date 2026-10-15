import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// QUIZ SHUFFLE
// =====================================================

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

// =====================================================
// MODEL EVALUATION & OPTIMIZATION DATA
// =====================================================

const subtopics = [
  {
    id: "classification-metrics",
    title: "Classification Metrics",
    icon: "📊",

    lesson: {
      overview:
        "Classification metrics are measures used to evaluate how well a classification model predicts classes. Different metrics focus on different aspects of model performance, so the right metric depends on the problem.",

      sections: [
        {
          heading: "Accuracy",
          points: [
            "Accuracy is the proportion of predictions that are correct.",
            "It is calculated as correct predictions divided by total predictions.",
            "Accuracy can be misleading when classes are highly imbalanced.",
          ],
        },
        {
          heading: "Precision",
          points: [
            "Precision measures how many predicted positive cases are actually positive.",
            "It is especially important when false positives are costly.",
            "High precision means that positive predictions are usually correct.",
          ],
        },
        {
          heading: "Recall",
          points: [
            "Recall measures how many actual positive cases the model successfully identifies.",
            "It is especially important when missing positive cases is costly.",
            "Recall is also called sensitivity or true positive rate.",
          ],
        },
        {
          heading: "F1-Score",
          points: [
            "F1-score combines precision and recall into a single metric.",
            "It is the harmonic mean of precision and recall.",
            "It can be useful when both false positives and false negatives matter.",
          ],
        },
      ],

      mistakes: [
        "Using accuracy automatically for every classification problem.",
        "Ignoring class imbalance.",
        "Looking at only one metric without considering the business or application requirements.",
      ],

      quiz: [
        {
          question:
            "Which metric measures the proportion of correct predictions out of all predictions?",
          options: [
            "Accuracy",
            "Recall",
            "Precision",
            "F1-score",
          ],
          answer: "Accuracy",
        },
        {
          question:
            "Which metric focuses on how many predicted positives are actually positive?",
          options: [
            "Precision",
            "Recall",
            "Accuracy",
            "MSE",
          ],
          answer: "Precision",
        },
        {
          question:
            "F1-score combines:",
          options: [
            "Precision and recall",
            "Accuracy and MSE",
            "Recall and R²",
            "Variance and bias",
          ],
          answer: "Precision and recall",
        },
      ],
    },
  },

  {
    id: "regression-metrics",
    title: "Regression Metrics",
    icon: "📈",

    lesson: {
      overview:
        "Regression metrics evaluate models that predict continuous numerical values. They measure the difference between predicted values and actual target values.",

      sections: [
        {
          heading: "Mean Absolute Error",
          points: [
            "Mean Absolute Error (MAE) calculates the average absolute difference between predictions and actual values.",
            "It is easy to interpret because it uses the same units as the target.",
            "MAE treats errors more evenly than squared-error metrics.",
          ],
        },
        {
          heading: "Mean Squared Error",
          points: [
            "Mean Squared Error (MSE) calculates the average squared prediction error.",
            "Squaring makes larger errors contribute more strongly to the metric.",
            "A lower MSE generally indicates better performance on the evaluated data.",
          ],
        },
        {
          heading: "Root Mean Squared Error",
          points: [
            "Root Mean Squared Error (RMSE) is the square root of MSE.",
            "RMSE is expressed in the same units as the target variable.",
            "Because errors are squared before averaging, large errors receive greater weight.",
          ],
        },
        {
          heading: "R² Score",
          points: [
            "R² measures how much of the variation in the target is explained by the regression model relative to a baseline.",
            "A higher R² can indicate better explanatory performance in the evaluated setting.",
            "R² should be interpreted together with other metrics and validation results.",
          ],
        },
      ],

      mistakes: [
        "Comparing metrics across datasets without considering their target scales.",
        "Assuming R² alone tells the entire story about model performance.",
        "Ignoring the effect of large errors when selecting a regression metric.",
      ],

      quiz: [
        {
          question:
            "Which regression metric uses the same units as the target and averages absolute errors?",
          options: [
            "MAE",
            "MSE",
            "R²",
            "Accuracy",
          ],
          answer: "MAE",
        },
        {
          question:
            "Which metric gives larger errors greater influence because errors are squared?",
          options: [
            "MSE",
            "MAE",
            "Accuracy",
            "Recall",
          ],
          answer: "MSE",
        },
        {
          question:
            "RMSE is calculated as:",
          options: [
            "The square root of MSE",
            "The square of MAE",
            "The ratio of precision to recall",
            "The average classification accuracy",
          ],
          answer: "The square root of MSE",
        },
      ],
    },
  },

  {
    id: "confusion-matrix",
    title: "Confusion Matrix",
    icon: "🧩",

    lesson: {
      overview:
        "A confusion matrix is a table used to summarize the predictions of a classification model. It compares predicted classes with actual classes and provides the basis for several classification metrics.",

      sections: [
        {
          heading: "True Positive and True Negative",
          points: [
            "A True Positive occurs when the model correctly predicts the positive class.",
            "A True Negative occurs when the model correctly predicts the negative class.",
            "These are correct predictions for the respective classes.",
          ],
        },
        {
          heading: "False Positive",
          points: [
            "A False Positive occurs when the model predicts positive but the actual class is negative.",
            "False positives are also called Type I errors in many statistical contexts.",
            "Reducing false positives can be important in applications where unnecessary alerts are costly.",
          ],
        },
        {
          heading: "False Negative",
          points: [
            "A False Negative occurs when the model predicts negative but the actual class is positive.",
            "False negatives are also called Type II errors in many statistical contexts.",
            "Reducing false negatives can be important when missing a positive case has serious consequences.",
          ],
        },
        {
          heading: "Why Confusion Matrices Matter",
          points: [
            "A confusion matrix provides more detail than accuracy alone.",
            "It helps identify which types of classification errors the model makes.",
            "Precision, recall, and other metrics can be calculated from its values.",
          ],
        },
      ],

      mistakes: [
        "Mixing up false positives and false negatives.",
        "Looking only at total correct predictions.",
        "Ignoring which type of error is more important for the application.",
      ],

      quiz: [
        {
          question:
            "A prediction is positive and the actual class is positive. This is:",
          options: [
            "True Positive",
            "False Positive",
            "True Negative",
            "False Negative",
          ],
          answer: "True Positive",
        },
        {
          question:
            "A model predicts positive when the actual class is negative. This is:",
          options: [
            "False Positive",
            "True Positive",
            "False Negative",
            "True Negative",
          ],
          answer: "False Positive",
        },
        {
          question:
            "A model predicts negative when the actual class is positive. This is:",
          options: [
            "False Negative",
            "False Positive",
            "True Negative",
            "True Positive",
          ],
          answer: "False Negative",
        },
      ],
    },
  },

  {
    id: "cross-validation",
    title: "Cross-Validation",
    icon: "🔄",

    lesson: {
      overview:
        "Cross-validation is a model evaluation technique that repeatedly divides available training data into training and validation portions. It provides a more reliable estimate of how a model may perform on unseen data.",

      sections: [
        {
          heading: "Why Cross-Validation?",
          points: [
            "A single train-validation split can produce an evaluation that depends heavily on how the data was divided.",
            "Cross-validation evaluates the model across multiple splits.",
            "This provides a more stable estimate of model performance.",
          ],
        },
        {
          heading: "K-Fold Cross-Validation",
          points: [
            "In K-Fold Cross-Validation, the data is divided into K folds.",
            "The model is trained on K-1 folds and validated on the remaining fold.",
            "The process repeats so that each fold serves as the validation set.",
          ],
        },
        {
          heading: "Choosing K",
          points: [
            "Common choices include values such as 5 or 10.",
            "A larger K generally means more training iterations.",
            "The appropriate value depends on dataset size, computational resources, and the problem.",
          ],
        },
        {
          heading: "Stratified Cross-Validation",
          points: [
            "For classification, stratified methods can preserve class proportions across folds.",
            "This can be especially useful when classes are imbalanced.",
            "The exact splitting strategy should match the data and evaluation goal.",
          ],
        },
      ],

      mistakes: [
        "Allowing test-set information to influence model selection.",
        "Using ordinary K-Fold when class distribution needs to be preserved.",
        "Assuming cross-validation removes every possible source of data leakage.",
      ],

      quiz: [
        {
          question:
            "What is the main purpose of cross-validation?",
          options: [
            "Estimate model performance more reliably",
            "Create new labels",
            "Remove every feature",
            "Replace the model with a database",
          ],
          answer:
            "Estimate model performance more reliably",
        },
        {
          question:
            "In 5-Fold Cross-Validation, how many folds are used?",
          options: [
            "5",
            "2",
            "10",
            "50",
          ],
          answer: "5",
        },
        {
          question:
            "Stratified cross-validation is particularly useful for:",
          options: [
            "Maintaining class proportions",
            "Sorting numerical values",
            "Creating images",
            "Removing all outliers",
          ],
          answer: "Maintaining class proportions",
        },
      ],
    },
  },

  {
    id: "overfitting-underfitting",
    title: "Overfitting & Underfitting",
    icon: "⚖️",

    lesson: {
      overview:
        "Overfitting and underfitting describe two common problems in machine learning. A good model should learn useful patterns from training data while still generalizing well to unseen data.",

      sections: [
        {
          heading: "Overfitting",
          points: [
            "Overfitting occurs when a model learns training data too closely, including noise or accidental patterns.",
            "An overfit model can achieve very strong training performance but poor validation or test performance.",
            "Complex models with insufficient constraints are often more susceptible to overfitting.",
          ],
        },
        {
          heading: "Underfitting",
          points: [
            "Underfitting occurs when a model is too simple to capture important patterns in the data.",
            "An underfit model performs poorly on both training and unseen data.",
            "Insufficient model complexity or excessive regularization can contribute to underfitting.",
          ],
        },
        {
          heading: "Generalization",
          points: [
            "Generalization means performing well on new data that was not used during training.",
            "Validation and test sets help estimate generalization performance.",
            "The goal is not simply to maximize training accuracy.",
          ],
        },
        {
          heading: "Controlling Overfitting",
          points: [
            "Regularization can discourage overly complex models.",
            "More training data can sometimes improve generalization.",
            "Cross-validation and appropriate model constraints can help identify and control overfitting.",
          ],
        },
      ],

      mistakes: [
        "Choosing a model only because it has the highest training score.",
        "Confusing high training performance with good generalization.",
        "Assuming that increasing model complexity always improves results.",
      ],

      quiz: [
        {
          question:
            "A model performs extremely well on training data but poorly on unseen data. This is likely:",
          options: [
            "Overfitting",
            "Underfitting",
            "Normalization",
            "Clustering",
          ],
          answer: "Overfitting",
        },
        {
          question:
            "A model performs poorly on both training and validation data. This may indicate:",
          options: [
            "Underfitting",
            "Overfitting only",
            "Perfect generalization",
            "Data visualization",
          ],
          answer: "Underfitting",
        },
        {
          question:
            "The ability of a model to perform well on unseen data is called:",
          options: [
            "Generalization",
            "Encoding",
            "Tokenization",
            "Clustering",
          ],
          answer: "Generalization",
        },
      ],
    },
  },

  {
    id: "bias-variance",
    title: "Bias & Variance",
    icon: "🎯",

    lesson: {
      overview:
        "Bias and variance describe two different sources of prediction error. Understanding their relationship helps in choosing model complexity and improving generalization.",

      sections: [
        {
          heading: "Bias",
          points: [
            "Bias represents error caused by overly strong simplifying assumptions in a model.",
            "A high-bias model may be too simple to capture important patterns.",
            "High bias is often associated with underfitting.",
          ],
        },
        {
          heading: "Variance",
          points: [
            "Variance represents how much a model's predictions can change when trained on different samples of data.",
            "A high-variance model can become very sensitive to the training dataset.",
            "High variance is often associated with overfitting.",
          ],
        },
        {
          heading: "Bias-Variance Tradeoff",
          points: [
            "Increasing model complexity can reduce bias but may increase variance.",
            "Reducing complexity can reduce variance but may increase bias.",
            "The goal is to find a useful balance that produces good generalization.",
          ],
        },
        {
          heading: "Practical Importance",
          points: [
            "Training and validation performance can provide clues about bias and variance.",
            "Regularization can help control variance.",
            "More informative features or a more expressive model can sometimes reduce bias.",
          ],
        },
      ],

      mistakes: [
        "Thinking bias and variance are simply good versus bad.",
        "Assuming one fixed model complexity works for every dataset.",
        "Ignoring validation performance when analyzing the tradeoff.",
      ],

      quiz: [
        {
          question:
            "High bias is commonly associated with:",
          options: [
            "Underfitting",
            "Overfitting",
            "Perfect fitting",
            "Data encoding",
          ],
          answer: "Underfitting",
        },
        {
          question:
            "High variance is commonly associated with:",
          options: [
            "Overfitting",
            "Underfitting",
            "Feature encoding",
            "Clustering",
          ],
          answer: "Overfitting",
        },
        {
          question:
            "The bias-variance tradeoff concerns:",
          options: [
            "Balancing model simplicity and sensitivity to training data",
            "Choosing database columns",
            "Sorting observations",
            "Creating labels",
          ],
          answer:
            "Balancing model simplicity and sensitivity to training data",
        },
      ],
    },
  },

  {
    id: "hyperparameter-tuning",
    title: "Hyperparameter Tuning",
    icon: "🔧",

    lesson: {
      overview:
        "Hyperparameter tuning is the process of finding suitable values for settings that control how a machine learning algorithm behaves. These values are chosen before or outside the model's parameter-learning process.",

      sections: [
        {
          heading: "Parameters vs Hyperparameters",
          points: [
            "Model parameters are learned from training data.",
            "Hyperparameters are settings selected by the practitioner or tuning procedure.",
            "Examples include tree depth, number of neighbors, learning rate, and regularization strength.",
          ],
        },
        {
          heading: "Grid Search",
          points: [
            "Grid Search evaluates combinations from a predefined set of hyperparameter values.",
            "It can systematically explore a specified search space.",
            "The computational cost can grow quickly as more parameters and values are included.",
          ],
        },
        {
          heading: "Random Search",
          points: [
            "Random Search samples hyperparameter combinations from defined distributions or ranges.",
            "It can explore large search spaces more efficiently in some situations.",
            "The number of trials can be controlled according to available resources.",
          ],
        },
        {
          heading: "Validation During Tuning",
          points: [
            "Validation or cross-validation should be used to compare candidate configurations.",
            "The test set should generally remain separate until final evaluation.",
            "The chosen metric should reflect the actual goal of the machine learning task.",
          ],
        },
      ],

      mistakes: [
        "Tuning hyperparameters directly on the final test set.",
        "Searching an unnecessarily huge parameter space.",
        "Choosing the best configuration using an inappropriate evaluation metric.",
      ],

      quiz: [
        {
          question:
            "Hyperparameters are generally:",
          options: [
            "Settings selected outside the model's learned parameters",
            "Always learned automatically from labels",
            "Database fields",
            "Output labels",
          ],
          answer:
            "Settings selected outside the model's learned parameters",
        },
        {
          question:
            "Grid Search evaluates:",
          options: [
            "Predefined combinations of hyperparameters",
            "Only one random configuration",
            "Only training labels",
            "Only test data",
          ],
          answer:
            "Predefined combinations of hyperparameters",
        },
        {
          question:
            "Why should the final test set generally remain separate during tuning?",
          options: [
            "To avoid using test information for model selection",
            "Because test data cannot contain numbers",
            "Because models cannot use validation data",
            "To increase the number of features",
          ],
          answer:
            "To avoid using test information for model selection",
        },
      ],
    },
  },

  {
    id: "model-selection",
    title: "Model Selection",
    icon: "🏆",

    lesson: {
      overview:
        "Model selection is the process of choosing an appropriate machine learning model or configuration for a particular problem. The decision should consider validation performance, complexity, interpretability, computational requirements, and the real-world objective.",

      sections: [
        {
          heading: "Comparing Models",
          points: [
            "Different algorithms may perform differently on the same dataset.",
            "Models should be compared using the same evaluation procedure and relevant metrics.",
            "Validation or cross-validation results are commonly used for comparison.",
          ],
        },
        {
          heading: "Choosing the Right Metric",
          points: [
            "The best model is not necessarily the one with the highest accuracy.",
            "The evaluation metric should reflect the cost of different types of errors.",
            "For example, precision and recall may matter more than accuracy in an imbalanced classification problem.",
          ],
        },
        {
          heading: "Complexity and Interpretability",
          points: [
            "A more complex model may provide better predictive performance but can be harder to interpret.",
            "In some applications, interpretability is an important requirement.",
            "The simplest model that satisfies the application's needs can be a strong choice.",
          ],
        },
        {
          heading: "Final Evaluation",
          points: [
            "After model selection and tuning, the final model can be evaluated on a held-out test set.",
            "The test set should represent data that was not used to choose the model.",
            "This provides a more unbiased estimate of expected performance on unseen data.",
          ],
        },
      ],

      mistakes: [
        "Selecting a model based only on training performance.",
        "Using different evaluation procedures for different models.",
        "Repeatedly checking the test set and then choosing the model based on it.",
      ],

      quiz: [
        {
          question:
            "Models should generally be compared using:",
          options: [
            "The same appropriate evaluation procedure",
            "Only training accuracy",
            "Different random metrics",
            "Only model size",
          ],
          answer:
            "The same appropriate evaluation procedure",
        },
        {
          question:
            "What should guide the choice of evaluation metric?",
          options: [
            "The goals and costs of the application",
            "The model's name",
            "The programming language",
            "The number of files in the project",
          ],
          answer:
            "The goals and costs of the application",
        },
        {
          question:
            "When should the held-out test set ideally be used?",
          options: [
            "For final evaluation after model selection",
            "For repeatedly tuning every hyperparameter",
            "For creating training labels",
            "For choosing the feature scaling method repeatedly",
          ],
          answer:
            "For final evaluation after model selection",
        },
      ],
    },
  },
];

// =====================================================
// MODEL EVALUATION COMPONENT
// =====================================================

function ModelEvaluation({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] =
    useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-modelevaluation", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] =
    useState({});

  // =====================================================
  // STABLE QUIZ SHUFFLE
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) =>
          shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // =====================================================
  // PROGRESS
  // =====================================================

  const completedCount =
    completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const currentIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const currentTopic =
    currentIndex >= 0
      ? subtopics[currentIndex]
      : null;

  // =====================================================
  // OPEN SUBTOPIC
  // =====================================================

  const openSubtopic = (topicId) => {
    setSelectedSubtopic(topicId);
  };

  // =====================================================
  // MARK COMPLETE
  // =====================================================

  const markComplete = (topicId) => {
    saveProgress(topicId);
  };

  // =====================================================
  // QUIZ ANSWER
  // =====================================================

  const selectAnswer = (
    topicId,
    questionIndex,
    answer
  ) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [topicId]: {
        ...(prev[topicId] || {}),
        [questionIndex]: answer,
      },
    }));
  };

  // =====================================================
  // SUBMIT QUIZ
  // =====================================================

  const submitQuiz = async (topicId) => {

    const topic = subtopics.find(
      (item) => item.id === topicId
    );

    if (!topic) return;

    const score = getQuizScore(topic);

    await saveQuizResult({
      subject: "AI/ML",
      role: "AI/ML Engineer",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });
    setQuizSubmitted((prev) => ({
      ...prev,
      [topicId]: true,
    }));
  };

  // =====================================================
  // QUIZ SCORE
  // =====================================================

  const getQuizScore = (topic) => {
    const answers = quizAnswers[topic.id] || {};

    return topic.lesson.quiz.reduce(
      (score, question, index) => {
        if (
          answers[index] === question.answer
        ) {
          return score + 1;
        }

        return score;
      },
      0
    );
  };

  // =====================================================
  // NEXT LESSON
  // =====================================================

  const goToNext = () => {
    if (
      currentIndex >= 0 &&
      currentIndex < subtopics.length - 1
    ) {
      setSelectedSubtopic(
        subtopics[currentIndex + 1].id
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedSubtopic(
        subtopics[currentIndex - 1].id
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =====================================================
  // LESSON PAGE
  // =====================================================

  if (currentTopic) {
    const topicProgress = completed.includes(currentTopic.id)
      ? 100
      : 0;

    const answers =
      quizAnswers[currentTopic.id] || {};

    const submitted =
      quizSubmitted[currentTopic.id] || false;

    const score = getQuizScore(currentTopic);

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
          padding: "30px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* BACK BUTTON */}

          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "25px",
            }}
          >
            ← Back to Topics
          </button>

          {/* TITLE */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
              marginBottom: "22px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                color: "#2563eb",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Lesson {currentIndex + 1} of{" "}
              {subtopics.length}
            </p>

            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "30px",
                color: "#111827",
              }}
            >
              {currentTopic.icon}{" "}
              {currentTopic.title}
            </h1>

            <p
              style={{
                margin: "0 0 16px",
                color: "#6b7280",
                fontSize: "15px",
              }}
            >
              Progress: {topicProgress}%
            </p>

            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${topicProgress}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          {/* OVERVIEW */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #dbeafe",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#111827",
              }}
            >
              📖 Overview
            </h2>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {currentTopic.lesson.overview}
            </p>
          </div>

          {/* LESSON SECTIONS */}

          {currentTopic.lesson.sections.map(
            (section, index) => (
              <div
                key={section.heading}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "1px solid #dbeafe",
                  marginBottom: "22px",
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    color: "#111827",
                  }}
                >
                  {index + 1}.{" "}
                  {section.heading}
                </h2>

                <ul
                  style={{
                    paddingLeft: "22px",
                    marginBottom: 0,
                  }}
                >
                  {section.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        color: "#4b5563",
                        lineHeight: "1.8",
                        marginBottom: "10px",
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* COMMON MISTAKES */}

          <div
            style={{
              background: "#fff7ed",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #fed7aa",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#9a3412",
              }}
            >
              ⚠️ Common Mistakes
            </h2>

            <ul
              style={{
                paddingLeft: "22px",
                marginBottom: 0,
              }}
            >
              {currentTopic.lesson.mistakes.map(
                (mistake) => (
                  <li
                    key={mistake}
                    style={{
                      color: "#7c2d12",
                      lineHeight: "1.8",
                      marginBottom: "10px",
                    }}
                  >
                    {mistake}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUIZ */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #bfdbfe",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#111827",
              }}
            >
              🧠 Quick Quiz
            </h2>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "25px",
              }}
            >
              Answer all 3 questions and check
              your score.
            </p>

            {currentTopic.lesson.quiz.map(
              (question, questionIndex) => {
                const options =
                  shuffledQuizOptions[
                    currentTopic.id
                  ][questionIndex];

                const selectedAnswer =
                  answers[questionIndex];

                return (
                  <div
                    key={question.question}
                    style={{
                      marginBottom: "30px",
                      paddingBottom: "25px",
                      borderBottom:
                        questionIndex <
                        currentTopic.lesson.quiz
                          .length -
                          1
                          ? "1px solid #e5e7eb"
                          : "none",
                    }}
                  >
                    <h3
                      style={{
                        color: "#111827",
                        lineHeight: "1.5",
                        marginBottom: "15px",
                      }}
                    >
                      {questionIndex + 1}.{" "}
                      {question.question}
                    </h3>

                    {options.map((option) => {
                      const isSelected =
                        selectedAnswer === option;

                      const isCorrect =
                        option === question.answer;

                      let background = "white";
                      let border =
                        "1px solid #d1d5db";

                      if (
                        submitted &&
                        isCorrect
                      ) {
                        background = "#dcfce7";
                        border =
                          "1px solid #16a34a";
                      } else if (
                        submitted &&
                        isSelected &&
                        !isCorrect
                      ) {
                        background = "#fee2e2";
                        border =
                          "1px solid #dc2626";
                      } else if (isSelected) {
                        background = "#eff6ff";
                        border =
                          "1px solid #2563eb";
                      }

                      return (
                        <button
                          key={option}
                          onClick={() =>
                            !submitted &&
                            selectAnswer(
                              currentTopic.id,
                              questionIndex,
                              option
                            )
                          }
                          disabled={submitted}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            background,
                            border,
                            borderRadius: "10px",
                            padding: "13px 15px",
                            marginBottom: "10px",
                            cursor: submitted
                              ? "default"
                              : "pointer",
                            fontSize: "15px",
                            color: "#111827",
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                );
              }
            )}

            {!submitted ? (
              <button
                onClick={() =>
                  submitQuiz(currentTopic.id)
                }
                disabled={
                  Object.keys(answers).length !==
                  currentTopic.lesson.quiz.length
                }
                style={{
                  background:
                    Object.keys(answers).length ===
                    currentTopic.lesson.quiz.length
                      ? "#2563eb"
                      : "#9ca3af",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor:
                    Object.keys(answers).length ===
                    currentTopic.lesson.quiz.length
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                Check Quiz
              </button>
            ) : (
              <div
                style={{
                  background:
                    score ===
                    currentTopic.lesson.quiz.length
                      ? "#dcfce7"
                      : "#eff6ff",
                  borderRadius: "12px",
                  padding: "18px",
                  color: "#111827",
                  fontWeight: "600",
                }}
              >
                🎯 Your Score: {score} /{" "}
                {currentTopic.lesson.quiz.length}
              </div>
            )}
          </div>

          {/* COMPLETE LESSON */}

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px 30px",
              border: "1px solid #dbeafe",
              marginBottom: "22px",
              textAlign: "center",
            }}
          >
            <button
              onClick={() =>
                saveProgress(currentTopic.id)
              }
              disabled={completed.includes(currentTopic.id)}
              style={{
                background: completed.includes(
                  currentTopic.id
                )
                  ? "#16a34a"
                  : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "13px 24px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: completed.includes(
                  currentTopic.id
                )
                  ? "default"
                  : "pointer",
              }}
            >
              {completed.includes(currentTopic.id)
                ? "✅ Lesson Completed"
                : "✓ Mark Lesson Complete"}
            </button>
          </div>

          {/* NAVIGATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                background:
                  currentIndex === 0
                    ? "#d1d5db"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor:
                  currentIndex === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={() =>
                setSelectedSubtopic(null)
              }
              style={{
                background: "white",
                color: "#2563eb",
                border:
                  "1px solid #2563eb",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Back to Topics
            </button>

            <button
              onClick={goToNext}
              disabled={
                currentIndex ===
                subtopics.length - 1
              }
              style={{
                background:
                  currentIndex ===
                  subtopics.length - 1
                    ? "#d1d5db"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: "600",
                cursor:
                  currentIndex ===
                  subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // TOPIC LIST PAGE
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
        padding: "30px 20px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* BACK */}

        <button
          onClick={goBack}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        {/* HEADER */}

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          📊 Model Evaluation & Optimization
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn how to evaluate machine learning
          models, understand errors, prevent
          overfitting, tune hyperparameters, and
          select models that generalize well.
        </p>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow:
              "0 4px 15px rgba(0, 0, 0, 0.06)",
            border: "1px solid #dbeafe",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "21px",
              color: "#111827",
            }}
          >
            Overall Progress: {overallProgress}% 🎯
          </h2>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              margin: "12px 0 0",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {completedCount} of {subtopics.length}{" "}
            lessons completed
          </p>
        </div>

        {/* SUBTOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const progress = completed.includes(topic.id)
              ? 100
              : 0;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "205px",
                  border: "1px solid #bfdbfe",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 7px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.35",
                    }}
                  >
                    {index + 1}. {topic.icon}{" "}
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      color: "#6b7280",
                    }}
                  >
                    1 lesson
                  </p>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "16px",
                      color: "#111827",
                    }}
                  >
                    Progress: {progress}%
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "13px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#2563eb",
                        borderRadius: "10px",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    openSubtopic(topic.id)
                  }
                  style={{
                    alignSelf: "flex-start",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "9px",
                    padding: "11px 20px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {completed.includes(topic.id)
                    ? "Review Lesson →"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModelEvaluation;