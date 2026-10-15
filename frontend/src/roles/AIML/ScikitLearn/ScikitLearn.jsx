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
// SCIKIT-LEARN & ML WORKFLOWS DATA
// =====================================================

const subtopics = [
  {
    id: "scikit-learn-basics",
    title: "Scikit-Learn Basics",
    icon: "⚙️",

    lesson: {
      overview:
        "Scikit-learn is a popular Python machine learning library that provides tools for data preprocessing, model training, evaluation, and machine learning workflows.",

      sections: [
        {
          heading: "What is Scikit-Learn?",
          points: [
            "Scikit-learn provides implementations of many classical machine learning algorithms.",
            "It works closely with the Python scientific computing ecosystem, including NumPy and related tools.",
            "It provides a consistent API for many machine learning tasks.",
          ],
        },
        {
          heading: "Common Machine Learning Tasks",
          points: [
            "Scikit-learn supports classification and regression.",
            "It also provides clustering, dimensionality reduction, preprocessing, and model selection tools.",
            "These components can be combined to create complete machine learning workflows.",
          ],
        },
        {
          heading: "The Estimator API",
          points: [
            "Many Scikit-learn models follow a common estimator interface.",
            "The fit() method is commonly used to learn from training data.",
            "The predict() method is commonly used to generate predictions.",
          ],
        },
        {
          heading: "Why Use Scikit-Learn?",
          points: [
            "It reduces the amount of code required to implement common machine learning techniques.",
            "Its consistent API makes it easier to experiment with different models.",
            "It provides utilities for evaluation, preprocessing, and model selection.",
          ],
        },
      ],

      mistakes: [
        "Assuming every Scikit-learn model works identically internally.",
        "Training models without separating training and evaluation data.",
        "Ignoring preprocessing requirements of individual algorithms.",
      ],

      quiz: [
        {
          question:
            "Scikit-learn is primarily a:",
          options: [
            "Python machine learning library",
            "Database management system",
            "Web browser",
            "Operating system",
          ],
          answer: "Python machine learning library",
        },
        {
          question:
            "Which method is commonly used to train a Scikit-learn estimator?",
          options: [
            "fit()",
            "start()",
            "trainPage()",
            "executeModel()",
          ],
          answer: "fit()",
        },
        {
          question:
            "Which method is commonly used to generate predictions?",
          options: [
            "predict()",
            "generateHTML()",
            "outputData()",
            "runSQL()",
          ],
          answer: "predict()",
        },
      ],
    },
  },

  {
    id: "datasets-estimators",
    title: "Datasets & Estimators",
    icon: "🧩",

    lesson: {
      overview:
        "Scikit-learn provides a consistent way to work with datasets and machine learning estimators. Understanding the distinction between input features, target values, and estimators is essential for building models.",

      sections: [
        {
          heading: "Features and Target",
          points: [
            "Features are the input variables used by a model.",
            "The target is the value the model is trained to predict in supervised learning.",
            "They are often represented separately as X for features and y for the target.",
          ],
        },
        {
          heading: "Estimators",
          points: [
            "An estimator is an object that can learn parameters from data.",
            "Many Scikit-learn machine learning models implement the estimator interface.",
            "Calling fit() allows the estimator to learn from the supplied training data.",
          ],
        },
        {
          heading: "Transformers",
          points: [
            "Transformers modify or transform data rather than directly producing a prediction.",
            "Common examples include scaling and encoding transformations.",
            "Transformers commonly implement fit() and transform().",
          ],
        },
        {
          heading: "Predictors",
          points: [
            "Predictors are estimators that can generate predictions.",
            "Classification and regression models commonly provide predict().",
            "Some models also provide probability-related methods depending on the algorithm.",
          ],
        },
      ],

      mistakes: [
        "Confusing features with the target variable.",
        "Applying transformations incorrectly to training and test data.",
        "Assuming every estimator provides exactly the same methods.",
      ],

      quiz: [
        {
          question:
            "In a typical supervised learning workflow, X commonly represents:",
          options: [
            "Input features",
            "Target labels only",
            "Model errors",
            "Test scores",
          ],
          answer: "Input features",
        },
        {
          question:
            "What does fit() generally allow an estimator to do?",
          options: [
            "Learn from data",
            "Delete the dataset",
            "Create a website",
            "Display a chart automatically",
          ],
          answer: "Learn from data",
        },
        {
          question:
            "A transformer is primarily used to:",
          options: [
            "Transform data",
            "Replace the operating system",
            "Create database tables",
            "Generate random labels",
          ],
          answer: "Transform data",
        },
      ],
    },
  },

  {
    id: "train-test-split",
    title: "Train-Test Split",
    icon: "✂️",

    lesson: {
      overview:
        "Train-test splitting separates data into a training portion used to learn the model and a test portion used to evaluate its performance on unseen data.",

      sections: [
        {
          heading: "Why Split the Data?",
          points: [
            "A model should be evaluated on data that was not used to train it.",
            "This helps estimate how well the model may generalize to unseen examples.",
            "Using the same data for training and final evaluation can produce misleading results.",
          ],
        },
        {
          heading: "Training Set",
          points: [
            "The training set is used by the model to learn its parameters.",
            "Preprocessing transformations that learn values should also be fitted using training data.",
            "The model can use the training set repeatedly during development.",
          ],
        },
        {
          heading: "Test Set",
          points: [
            "The test set is held aside for final evaluation.",
            "It should represent data that was not used to select or tune the final model.",
            "Keeping it separate helps provide a more trustworthy estimate of generalization.",
          ],
        },
        {
          heading: "Random State",
          points: [
            "A random state can make a randomized split reproducible.",
            "Reproducibility makes experiments easier to compare.",
            "The exact value of the random state is not inherently special.",
          ],
        },
      ],

      mistakes: [
        "Training the model on the test set.",
        "Using the test set repeatedly while tuning the model.",
        "Fitting preprocessing transformations on the entire dataset before splitting.",
      ],

      quiz: [
        {
          question:
            "The training set is primarily used to:",
          options: [
            "Learn the model",
            "Perform the final unbiased evaluation",
            "Create the operating system",
            "Replace the validation process",
          ],
          answer: "Learn the model",
        },
        {
          question:
            "The test set should ideally contain:",
          options: [
            "Data not used for model training and selection",
            "Only duplicated training examples",
            "Only model parameters",
            "No target information",
          ],
          answer:
            "Data not used for model training and selection",
        },
        {
          question:
            "Why can random_state be useful?",
          options: [
            "For reproducible randomized splits",
            "To increase the number of features",
            "To remove all missing values",
            "To guarantee perfect accuracy",
          ],
          answer:
            "For reproducible randomized splits",
        },
      ],
    },
  },

  {
    id: "pipelines",
    title: "Pipelines",
    icon: "🔗",

    lesson: {
      overview:
        "A Scikit-learn Pipeline chains multiple processing steps and a final estimator into a single workflow. Pipelines help organize machine learning processes and reduce the risk of inconsistent preprocessing.",

      sections: [
        {
          heading: "What is a Pipeline?",
          points: [
            "A Pipeline connects a sequence of transformations and a final estimator.",
            "Each intermediate step generally transforms the data.",
            "The final step is typically a predictor or another estimator.",
          ],
        },
        {
          heading: "Why Pipelines Matter",
          points: [
            "Pipelines help ensure that preprocessing is applied consistently.",
            "They make workflows easier to reproduce and maintain.",
            "They can also make cross-validation and hyperparameter tuning safer.",
          ],
        },
        {
          heading: "Pipeline Flow",
          points: [
            "Raw input data enters the first transformation.",
            "The transformed data passes through subsequent steps.",
            "The final estimator receives the processed data and makes predictions.",
          ],
        },
        {
          heading: "Example Structure",
          points: [
            "A common pipeline might contain a scaler followed by a classifier.",
            "The scaler learns its parameters from training data during fitting.",
            "When predictions are made, the same learned transformation is applied before prediction.",
          ],
        },
      ],

      mistakes: [
        "Performing preprocessing separately in a way that causes data leakage.",
        "Putting a predictor before the final pipeline step.",
        "Applying a different preprocessing procedure during testing.",
      ],

      quiz: [
        {
          question:
            "A Pipeline is used to:",
          options: [
            "Chain preprocessing steps and an estimator",
            "Store only images",
            "Replace Python",
            "Create database tables",
          ],
          answer:
            "Chain preprocessing steps and an estimator",
        },
        {
          question:
            "Why are pipelines useful during cross-validation?",
          options: [
            "They help keep preprocessing inside each training workflow",
            "They remove the need for evaluation",
            "They guarantee 100% accuracy",
            "They eliminate all features",
          ],
          answer:
            "They help keep preprocessing inside each training workflow",
        },
        {
          question:
            "The final step of a typical machine learning Pipeline is:",
          options: [
            "An estimator or predictor",
            "A raw CSV file",
            "A database server",
            "A text editor",
          ],
          answer: "An estimator or predictor",
        },
      ],
    },
  },

  {
    id: "preprocessing-pipelines",
    title: "Preprocessing Pipelines",
    icon: "🛠️",

    lesson: {
      overview:
        "Preprocessing pipelines combine transformations such as scaling, encoding, and imputation into a structured workflow. They are especially useful when a dataset contains different types of features.",

      sections: [
        {
          heading: "Why Preprocess Data?",
          points: [
            "Machine learning algorithms often require data in a suitable numerical representation.",
            "Preprocessing can include scaling numerical features and encoding categorical features.",
            "Missing-value handling can also be incorporated into a preprocessing workflow.",
          ],
        },
        {
          heading: "ColumnTransformer",
          points: [
            "ColumnTransformer can apply different transformations to different groups of columns.",
            "For example, numerical columns can be scaled while categorical columns are encoded.",
            "This allows heterogeneous datasets to be processed systematically.",
          ],
        },
        {
          heading: "Preventing Data Leakage",
          points: [
            "Transformations that learn from data should be fitted only using the appropriate training portion.",
            "A preprocessing pipeline can keep this fitting process inside model training.",
            "This prevents information from evaluation data from influencing preprocessing parameters.",
          ],
        },
        {
          heading: "Combining with a Model",
          points: [
            "A preprocessing pipeline can be combined with a final estimator.",
            "The complete workflow can then be fitted and evaluated as one object.",
            "This simplifies experimentation and deployment.",
          ],
        },
      ],

      mistakes: [
        "Scaling or imputing using the entire dataset before evaluation.",
        "Applying categorical encoding inconsistently between training and testing.",
        "Ignoring differences between numerical and categorical columns.",
      ],

      quiz: [
        {
          question:
            "What can ColumnTransformer do?",
          options: [
            "Apply different transformations to different columns",
            "Train only neural networks",
            "Create database indexes",
            "Delete categorical features automatically",
          ],
          answer:
            "Apply different transformations to different columns",
        },
        {
          question:
            "A preprocessing pipeline can help prevent:",
          options: [
            "Data leakage",
            "All model errors",
            "All missing values permanently",
            "All overfitting",
          ],
          answer: "Data leakage",
        },
        {
          question:
            "Categorical features may need:",
          options: [
            "Encoding",
            "Gradient descent only",
            "A confusion matrix",
            "A decision boundary before training",
          ],
          answer: "Encoding",
        },
      ],
    },
  },

  {
    id: "model-persistence",
    title: "Model Persistence",
    icon: "💾",

    lesson: {
      overview:
        "Model persistence means saving a trained machine learning model so that it can be loaded later without retraining it from scratch. This is important when deploying models into applications.",

      sections: [
        {
          heading: "Why Save a Model?",
          points: [
            "Training a model can take time and computational resources.",
            "Saving allows the trained model to be reused later.",
            "A saved model can be integrated into an application or service.",
          ],
        },
        {
          heading: "Serialization",
          points: [
            "Serialization converts an in-memory object into a form that can be stored.",
            "Python machine learning workflows can use tools such as joblib or pickle for object persistence.",
            "The chosen method should be used carefully and with trusted files.",
          ],
        },
        {
          heading: "Saving the Complete Workflow",
          points: [
            "It is often useful to save preprocessing together with the trained model.",
            "A complete Pipeline can package preprocessing and prediction into one object.",
            "This helps ensure that future inputs receive the same transformations.",
          ],
        },
        {
          heading: "Loading Models",
          points: [
            "A saved model can be loaded into a Python environment later.",
            "The environment should be compatible with the saved model and its dependencies.",
            "Versioning models and their dependencies is important for reliable deployment.",
          ],
        },
      ],

      mistakes: [
        "Saving the model without the preprocessing steps it depends on.",
        "Loading serialized model files from untrusted sources.",
        "Ignoring library and dependency versions.",
      ],

      quiz: [
        {
          question:
            "Why is model persistence useful?",
          options: [
            "It allows a trained model to be reused later",
            "It automatically improves accuracy",
            "It removes the need for training data forever",
            "It converts regression into clustering",
          ],
          answer:
            "It allows a trained model to be reused later",
        },
        {
          question:
            "Which tools can be used for Python object persistence?",
          options: [
            "joblib or pickle",
            "HTML or CSS",
            "SQL or JSON only",
            "React or Vite",
          ],
          answer: "joblib or pickle",
        },
        {
          question:
            "Why can saving preprocessing with the model be useful?",
          options: [
            "It keeps future input transformations consistent",
            "It removes all model parameters",
            "It prevents every possible error",
            "It changes the model into a database",
          ],
          answer:
            "It keeps future input transformations consistent",
        },
      ],
    },
  },

  {
    id: "end-to-end-workflow",
    title: "End-to-End ML Workflow",
    icon: "🚀",

    lesson: {
      overview:
        "An end-to-end machine learning workflow connects the complete process from understanding data to preprocessing, training, evaluation, tuning, and deployment. A structured workflow makes experiments more reliable and reproducible.",

      sections: [
        {
          heading: "Step 1: Understand the Problem",
          points: [
            "Define what needs to be predicted or discovered.",
            "Identify the target variable when working on a supervised problem.",
            "Determine what metric should represent successful performance.",
          ],
        },
        {
          heading: "Step 2: Prepare the Data",
          points: [
            "Inspect the dataset and identify missing, duplicate, or inconsistent values.",
            "Separate features and target appropriately.",
            "Split the data before fitting transformations that learn from the data.",
          ],
        },
        {
          heading: "Step 3: Train and Evaluate",
          points: [
            "Build preprocessing and model pipelines when appropriate.",
            "Train candidate models using the training data.",
            "Use validation or cross-validation to compare approaches.",
          ],
        },
        {
          heading: "Step 4: Tune and Select",
          points: [
            "Tune relevant hyperparameters using an appropriate validation strategy.",
            "Select a model based on meaningful evaluation metrics and practical requirements.",
            "Keep the final test set separate for final evaluation.",
          ],
        },
        {
          heading: "Step 5: Save and Deploy",
          points: [
            "Save the complete trained workflow when it is ready for use.",
            "Deploy the model through an application or API when required.",
            "Monitor the model and data after deployment because real-world conditions can change.",
          ],
        },
      ],

      mistakes: [
        "Skipping problem definition and choosing a metric too late.",
        "Allowing test data to influence training or hyperparameter selection.",
        "Deploying a model without preserving its preprocessing workflow.",
        "Assuming a model remains accurate forever without monitoring.",
      ],

      quiz: [
        {
          question:
            "What should be defined early in an ML workflow?",
          options: [
            "The problem and appropriate evaluation metric",
            "Only the final deployment server",
            "Only the UI design",
            "Only the model filename",
          ],
          answer:
            "The problem and appropriate evaluation metric",
        },
        {
          question:
            "What should generally remain separate until final evaluation?",
          options: [
            "The test set",
            "The training set",
            "The feature names",
            "The model code",
          ],
          answer: "The test set",
        },
        {
          question:
            "Why can monitoring be important after deployment?",
          options: [
            "Real-world data and conditions can change",
            "It guarantees zero errors",
            "It removes the need for evaluation",
            "It replaces preprocessing",
          ],
          answer:
            "Real-world data and conditions can change",
        },
      ],
    },
  },
];

// =====================================================
// SCIKIT-LEARN COMPONENT
// =====================================================

function ScikitLearn({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] =
    useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-scikitlearn", subtopics);

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
          ⚙️ Scikit-Learn & ML Workflows
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn how to use Scikit-learn for machine
          learning models, preprocessing, pipelines,
          model persistence, and complete ML workflows.
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

export default ScikitLearn;