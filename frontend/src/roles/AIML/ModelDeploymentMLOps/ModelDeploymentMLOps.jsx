import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "saving-loading-models",
    title: "Saving & Loading Models",
    icon: "💾",
    lesson: {
      overview:
        "After training a machine learning model, you usually need to save it so that it can be reused later without training from scratch. Model persistence is an important step between experimentation and production deployment.",
      sections: [
        {
          heading: "Why Save a Model?",
          points: [
            "Training a model can require significant time and computational resources.",
            "A trained model can be saved and loaded later for predictions.",
            "Saving a model separates the training stage from the inference stage.",
            "Production applications typically load an already-trained model rather than retraining it for every request.",
          ],
        },
        {
          heading: "Model Serialization",
          points: [
            "Serialization converts a model into a format that can be stored and restored.",
            "Python machine learning workflows commonly use tools such as joblib or pickle for compatible models.",
            "The preprocessing steps required by the model should also be preserved.",
            "The saved model should be loaded using compatible library and environment versions.",
          ],
        },
        {
          heading: "Production Considerations",
          points: [
            "Store model files in a controlled and reliable location.",
            "Keep track of model versions.",
            "Record important information such as training data, features, metrics, and dependencies.",
            "Never assume that every saved model is automatically safe or compatible with every environment.",
          ],
        },
      ],
      mistakes: [
        "Saving only the model while forgetting required preprocessing.",
        "Overwriting production models without versioning.",
        "Loading serialized files from untrusted sources.",
        "Ignoring library and dependency compatibility.",
      ],
      quiz: [
        {
          question: "Why is a trained ML model commonly saved?",
          options: [
            "To reuse it without retraining from scratch",
            "To increase the dataset size",
            "To remove all model parameters",
            "To replace the training data permanently",
          ],
          answer: "To reuse it without retraining from scratch",
        },
        {
          question: "What does serialization do?",
          options: [
            "Converts an object into a form that can be stored and restored",
            "Deletes the model",
            "Changes classification into clustering",
            "Removes all dependencies",
          ],
          answer:
            "Converts an object into a form that can be stored and restored",
        },
        {
          question: "What else may need to be preserved with a model?",
          options: [
            "Required preprocessing steps",
            "Only the application logo",
            "Only the browser history",
            "Only the source-code comments",
          ],
          answer: "Required preprocessing steps",
        },
      ],
    },
  },

  {
    id: "ml-apis",
    title: "Building ML APIs",
    icon: "🔗",
    lesson: {
      overview:
        "An ML API exposes a trained machine learning model through a software interface so that applications can send input data and receive predictions. This creates a bridge between an ML model and real-world applications.",
      sections: [
        {
          heading: "What is an ML API?",
          points: [
            "An API provides a defined way for software systems to communicate.",
            "An ML API can accept input features or data and return model predictions.",
            "The API hides model implementation details from the client application.",
            "Web, mobile, and other services can consume the prediction endpoint.",
          ],
        },
        {
          heading: "Typical Prediction Flow",
          points: [
            "A client sends input data to an API endpoint.",
            "The server validates and preprocesses the input.",
            "The trained model generates a prediction.",
            "The server returns the prediction and relevant information to the client.",
          ],
        },
        {
          heading: "API Design",
          points: [
            "Use clear endpoint names and request formats.",
            "Validate incoming data before passing it to the model.",
            "Return consistent response structures.",
            "Handle invalid input and model errors gracefully.",
          ],
        },
      ],
      mistakes: [
        "Accepting arbitrary input without validation.",
        "Using inconsistent preprocessing between training and inference.",
        "Returning unclear or inconsistent response formats.",
        "Exposing internal implementation details unnecessarily.",
      ],
      quiz: [
        {
          question: "What is the purpose of an ML API?",
          options: [
            "To expose model predictions to other applications",
            "To physically increase CPU speed",
            "To replace the dataset",
            "To remove the trained model",
          ],
          answer: "To expose model predictions to other applications",
        },
        {
          question: "What should happen before model inference?",
          options: [
            "Input should be validated and appropriately preprocessed",
            "The model should always be retrained",
            "The database should be deleted",
            "The API should ignore the input",
          ],
          answer:
            "Input should be validated and appropriately preprocessed",
        },
        {
          question: "What does a client typically receive from a prediction endpoint?",
          options: [
            "A prediction response",
            "The server's operating system",
            "The complete training dataset",
            "The model's private credentials",
          ],
          answer: "A prediction response",
        },
      ],
    },
  },

  {
    id: "fastapi",
    title: "FastAPI for ML",
    icon: "⚡",
    lesson: {
      overview:
        "FastAPI is a modern Python web framework that can be used to build APIs for machine learning applications. It is useful for creating prediction endpoints that connect trained models with other software.",
      sections: [
        {
          heading: "FastAPI Basics",
          points: [
            "FastAPI allows developers to define HTTP API endpoints using Python.",
            "It supports request validation through Python type hints and data models.",
            "It can automatically generate interactive API documentation.",
            "FastAPI is commonly used to create lightweight ML inference services.",
          ],
        },
        {
          heading: "ML Prediction Endpoint",
          points: [
            "A prediction route receives structured input.",
            "The input is validated before inference.",
            "The application loads or accesses the trained model.",
            "The model produces a prediction that is returned to the client.",
          ],
        },
        {
          heading: "Production Practices",
          points: [
            "Load models efficiently rather than repeatedly loading them for every request.",
            "Validate request data carefully.",
            "Handle errors and unexpected inputs.",
            "Separate API logic, preprocessing, model inference, and configuration when appropriate.",
          ],
        },
      ],
      mistakes: [
        "Loading a large model for every individual request.",
        "Skipping request validation.",
        "Mixing all application logic into a single endpoint.",
        "Forgetting to handle inference errors.",
      ],
      quiz: [
        {
          question: "What can FastAPI be used for in an ML project?",
          options: [
            "Building prediction APIs",
            "Only creating image files",
            "Only training neural networks",
            "Only storing datasets",
          ],
          answer: "Building prediction APIs",
        },
        {
          question: "Why is request validation useful?",
          options: [
            "It helps ensure incoming data has the expected structure and values",
            "It makes the model disappear",
            "It eliminates the need for testing",
            "It replaces model evaluation",
          ],
          answer:
            "It helps ensure incoming data has the expected structure and values",
        },
        {
          question: "What is generally preferable for a large model?",
          options: [
            "Load it efficiently instead of repeatedly loading it per request",
            "Delete it after every request",
            "Train it for every request",
            "Send the entire model to the client",
          ],
          answer:
            "Load it efficiently instead of repeatedly loading it per request",
        },
      ],
    },
  },

  {
    id: "deployment",
    title: "Model Deployment",
    icon: "🚀",
    lesson: {
      overview:
        "Model deployment is the process of making a trained machine learning model available for real-world predictions. Deployment connects experimentation and model development with an actual application or service.",
      sections: [
        {
          heading: "Deployment Lifecycle",
          points: [
            "Train and evaluate the model.",
            "Save the trained model and required preprocessing components.",
            "Create an inference service or application.",
            "Package the application and its dependencies.",
            "Deploy the service to an appropriate environment.",
            "Monitor the deployed system and improve it when necessary.",
          ],
        },
        {
          heading: "Deployment Options",
          points: [
            "A model can run on a local machine for development and testing.",
            "Cloud platforms can host inference APIs and applications.",
            "Containerized deployments provide a consistent runtime environment.",
            "Some models may be deployed directly on edge or mobile devices.",
          ],
        },
        {
          heading: "Production Readiness",
          points: [
            "The model should be tested with realistic inputs.",
            "The service should handle failures gracefully.",
            "Sensitive configuration should not be hardcoded.",
            "Deployment should support reproducibility and version tracking.",
          ],
        },
      ],
      mistakes: [
        "Deploying a model without testing inference separately.",
        "Forgetting model dependencies.",
        "Hardcoding secrets or credentials.",
        "Treating deployment as the final step and ignoring monitoring.",
      ],
      quiz: [
        {
          question: "What is the main goal of model deployment?",
          options: [
            "Make a trained model available for real-world predictions",
            "Delete the training environment",
            "Remove the model from storage",
            "Replace all evaluation metrics",
          ],
          answer:
            "Make a trained model available for real-world predictions",
        },
        {
          question: "Which can be used to host an ML inference service?",
          options: [
            "A cloud environment",
            "Only a spreadsheet",
            "Only a text editor",
            "Only a presentation file",
          ],
          answer: "A cloud environment",
        },
        {
          question: "What should be monitored after deployment?",
          options: [
            "The behavior and performance of the deployed system",
            "Only the developer's keyboard",
            "Only the source-code line count",
            "Nothing",
          ],
          answer: "The behavior and performance of the deployed system",
        },
      ],
    },
  },

  {
    id: "docker",
    title: "Docker for ML",
    icon: "🐳",
    lesson: {
      overview:
        "Docker packages an application and its dependencies into containers, helping machine learning services run consistently across different environments.",
      sections: [
        {
          heading: "Why Docker?",
          points: [
            "ML applications often depend on specific Python versions and libraries.",
            "Different environments can have different dependency configurations.",
            "Containers provide an isolated and reproducible runtime environment.",
            "A Docker image can package application code, dependencies, and configuration needed to run a service.",
          ],
        },
        {
          heading: "Basic Docker Concepts",
          points: [
            "A Dockerfile describes how to build an image.",
            "An image is a packaged template used to create containers.",
            "A container is a running instance of an image.",
            "Dependencies can be installed during image creation.",
          ],
        },
        {
          heading: "Docker in ML Deployment",
          points: [
            "A trained model can be included or made available to the containerized application.",
            "An ML API can run inside a container.",
            "The same container image can be tested locally and deployed to compatible environments.",
            "Container configuration should be kept reproducible and versioned.",
          ],
        },
      ],
      mistakes: [
        "Creating unnecessarily large images.",
        "Hardcoding sensitive credentials into the image.",
        "Ignoring dependency versions.",
        "Assuming a container automatically solves every production problem.",
      ],
      quiz: [
        {
          question: "What is a major benefit of Docker for ML applications?",
          options: [
            "Consistent and reproducible runtime environments",
            "Automatic perfect model accuracy",
            "Automatic dataset labeling",
            "Replacing all machine learning algorithms",
          ],
          answer: "Consistent and reproducible runtime environments",
        },
        {
          question: "What does a Dockerfile describe?",
          options: [
            "How to build a Docker image",
            "How to calculate model accuracy",
            "How to label images manually",
            "How to write SQL queries",
          ],
          answer: "How to build a Docker image",
        },
        {
          question: "What is a container?",
          options: [
            "A running instance of a Docker image",
            "A machine learning metric",
            "A dataset column",
            "A neural network layer",
          ],
          answer: "A running instance of a Docker image",
        },
      ],
    },
  },

  {
    id: "monitoring",
    title: "Model Monitoring",
    icon: "📈",
    lesson: {
      overview:
        "Model monitoring helps teams understand how a deployed machine learning system behaves after release. Production data can change over time, so monitoring is important for maintaining reliable predictions.",
      sections: [
        {
          heading: "What to Monitor",
          points: [
            "API latency and availability can indicate service health.",
            "Prediction distributions can reveal changes in model behavior.",
            "Input data distributions can be monitored for changes.",
            "When labels become available, model performance can be evaluated over time.",
          ],
        },
        {
          heading: "Data Drift",
          points: [
            "Data drift occurs when the distribution of incoming data changes compared with training data.",
            "Drift can reduce model reliability if the model encounters substantially different inputs.",
            "Monitoring input characteristics can help identify these changes.",
          ],
        },
        {
          heading: "Operational Monitoring",
          points: [
            "Track errors and failed requests.",
            "Monitor resource usage and response times.",
            "Maintain logs that help diagnose problems.",
            "Use alerts for important service failures or unusual behavior.",
          ],
        },
      ],
      mistakes: [
        "Monitoring only server uptime and ignoring model behavior.",
        "Assuming training accuracy guarantees production performance.",
        "Ignoring changes in incoming data.",
        "Creating alerts without defining meaningful thresholds.",
      ],
      quiz: [
        {
          question: "Why is model monitoring important?",
          options: [
            "Production data and model behavior can change over time",
            "Models never change after deployment",
            "Monitoring automatically retrains every model",
            "It removes the need for testing",
          ],
          answer:
            "Production data and model behavior can change over time",
        },
        {
          question: "What is data drift?",
          options: [
            "A change in the distribution of incoming data",
            "A programming syntax error",
            "A Docker image",
            "A model serialization format",
          ],
          answer: "A change in the distribution of incoming data",
        },
        {
          question: "Which is an operational metric worth monitoring?",
          options: [
            "API latency",
            "Keyboard color",
            "Source-code font",
            "File naming style only",
          ],
          answer: "API latency",
        },
      ],
    },
  },

  {
    id: "ml-pipelines",
    title: "ML Pipelines",
    icon: "🔄",
    lesson: {
      overview:
        "An ML pipeline organizes multiple stages of a machine learning workflow into a repeatable process. Pipelines help make preprocessing and model execution consistent and easier to maintain.",
      sections: [
        {
          heading: "Typical ML Pipeline Stages",
          points: [
            "Data ingestion brings data into the workflow.",
            "Data validation checks whether the data meets expectations.",
            "Preprocessing transforms the data into a suitable representation.",
            "Model training creates or updates a model.",
            "Evaluation measures model performance.",
            "Deployment makes an approved model available for inference.",
          ],
        },
        {
          heading: "Why Pipelines Matter",
          points: [
            "They make workflows repeatable.",
            "They reduce manual steps and inconsistencies.",
            "They can help ensure the same preprocessing is applied during training and inference.",
            "They provide a clearer structure for automation and maintenance.",
          ],
        },
        {
          heading: "Pipeline Automation",
          points: [
            "Automated pipelines can run on schedules or when new data becomes available.",
            "Different stages can be tracked independently.",
            "Pipeline failures should be logged and surfaced clearly.",
            "Model versions and data versions should be traceable.",
          ],
        },
      ],
      mistakes: [
        "Applying preprocessing manually in different places.",
        "Building pipelines without validation.",
        "Failing to track model and data versions.",
        "Ignoring pipeline failures.",
      ],
      quiz: [
        {
          question: "What is an ML pipeline?",
          options: [
            "A structured sequence of machine learning workflow stages",
            "A database password",
            "A single visualization",
            "A replacement for training data",
          ],
          answer:
            "A structured sequence of machine learning workflow stages",
        },
        {
          question: "Why are pipelines useful?",
          options: [
            "They improve repeatability and consistency",
            "They guarantee perfect predictions",
            "They remove the need for data",
            "They eliminate all monitoring",
          ],
          answer: "They improve repeatability and consistency",
        },
        {
          question: "What should be traceable in a production ML pipeline?",
          options: [
            "Model and data versions",
            "Only UI colors",
            "Only browser tabs",
            "Only keyboard shortcuts",
          ],
          answer: "Model and data versions",
        },
      ],
    },
  },

  {
    id: "mlops",
    title: "MLOps Basics",
    icon: "⚙️",
    lesson: {
      overview:
        "MLOps combines machine learning, software engineering, automation, and operations practices to make ML systems reliable and maintainable throughout their lifecycle.",
      sections: [
        {
          heading: "What is MLOps?",
          points: [
            "MLOps applies engineering and operational practices to machine learning systems.",
            "It covers activities from experimentation and training to deployment and monitoring.",
            "The goal is to make ML workflows reproducible, maintainable, and scalable.",
          ],
        },
        {
          heading: "Important MLOps Concepts",
          points: [
            "Version control helps track application and configuration changes.",
            "Data and model versioning help reproduce ML experiments and deployments.",
            "Continuous integration and deployment can automate testing and releases.",
            "Monitoring helps detect operational and model-related problems.",
          ],
        },
        {
          heading: "ML Lifecycle",
          points: [
            "Collect and validate data.",
            "Train and evaluate models.",
            "Register or version approved models.",
            "Deploy models to production.",
            "Monitor performance and data behavior.",
            "Retrain or update the system when necessary.",
          ],
        },
      ],
      mistakes: [
        "Thinking MLOps only means deploying a model.",
        "Ignoring data and model versioning.",
        "Automating deployment without automated testing.",
        "Failing to monitor production models.",
      ],
      quiz: [
        {
          question: "What does MLOps primarily focus on?",
          options: [
            "Reliable and maintainable machine learning lifecycle practices",
            "Only writing Python syntax",
            "Only creating dashboards",
            "Only collecting images",
          ],
          answer:
            "Reliable and maintainable machine learning lifecycle practices",
        },
        {
          question: "Which is an important MLOps practice?",
          options: [
            "Model and data versioning",
            "Deleting all model history",
            "Avoiding testing",
            "Manually changing production files without tracking",
          ],
          answer: "Model and data versioning",
        },
        {
          question: "What can happen after monitoring identifies model problems?",
          options: [
            "The model or pipeline can be updated or retrained",
            "The dataset must always be deleted",
            "The API must always be removed",
            "Nothing can be changed",
          ],
          answer: "The model or pipeline can be updated or retrained",
        },
      ],
    },
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

function ModelDeploymentMLOps({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-modeldeploymentmlops", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const currentIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const currentTopic =
    currentIndex !== -1 ? subtopics[currentIndex] : null;

  const handleQuizAnswer = (topicId, questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  const checkQuiz = async (topic) => {

    const score = getScore(topic);

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
      [topic.id]: true,
    }));
  };

  const getScore = (topic) => {
    return topic.lesson.quiz.reduce((total, question, index) => {
      return (
        total +
        (quizAnswers[`${topic.id}-${index}`] === question.answer ? 1 : 0)
      );
    }, 0);
  };

  const toggleComplete = (topicId) => {
    saveProgress(topicId);
  };

  const openTopic = (topicId) => {
    setSelectedSubtopic(topicId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      openTopic(subtopics[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < subtopics.length - 1) {
      openTopic(subtopics[currentIndex + 1].id);
    }
  };

  if (currentTopic) {
    const options = shuffledQuizOptions[currentTopic.id];
    const submitted = quizSubmitted[currentTopic.id];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#eef6ff",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            ← Back to Topics
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h1 style={{ color: "#1e3a8a", marginBottom: "5px" }}>
              {currentTopic.icon} {currentTopic.title}
            </h1>

            <span
              style={{
                color: completed.includes(currentTopic.id)
                  ? "#15803d"
                  : "#2563eb",
                fontWeight: "700",
              }}
            >
              {completed.includes(currentTopic.id) ? "✓ Completed" : "In Progress"}
            </span>
          </div>

          <div style={{ margin: "20px 0 30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              <span>Topic Progress</span>
              <span>
                {completed.includes(currentTopic.id) ? "100%" : "0%"}
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#dbeafe",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: completed.includes(currentTopic.id) ? "100%" : "0%",
                  height: "100%",
                  background: "#2563eb",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          <section>
            <h2 style={{ color: "#2563eb" }}>📖 Overview</h2>

            <p style={{ lineHeight: "1.7", color: "#334155" }}>
              {currentTopic.lesson.overview}
            </p>
          </section>

          {currentTopic.lesson.sections.map((section) => (
            <section key={section.heading} style={{ marginTop: "28px" }}>
              <h2 style={{ color: "#2563eb" }}>{section.heading}</h2>

              <ul style={{ lineHeight: "1.8", color: "#334155" }}>
                {section.points.map((point) => (
                  <li key={point} style={{ marginBottom: "8px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f8fbff",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>⚠️ Common Mistakes</h2>

            <ul style={{ lineHeight: "1.8", color: "#334155" }}>
              {currentTopic.lesson.mistakes.map((mistake) => (
                <li key={mistake} style={{ marginBottom: "8px" }}>
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: "35px" }}>
            <h2 style={{ color: "#2563eb" }}>🧠 Quick Quiz</h2>

            {currentTopic.lesson.quiz.map((question, questionIndex) => (
              <div
                key={question.question}
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  border: "1px solid #dbeafe",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#1e3a8a", lineHeight: "1.5" }}>
                  {questionIndex + 1}. {question.question}
                </h3>

                {options[questionIndex].map((option) => {
                  const selected =
                    quizAnswers[
                      `${currentTopic.id}-${questionIndex}`
                    ] === option;

                  const correct = option === question.answer;

                  return (
                    <label
                      key={option}
                      style={{
                        display: "block",
                        padding: "10px",
                        marginTop: "8px",
                        borderRadius: "8px",
                        background:
                          submitted && correct
                            ? "#dcfce7"
                            : selected
                            ? "#dbeafe"
                            : "#ffffff",
                        border:
                          submitted && correct
                            ? "1px solid #86efac"
                            : selected
                            ? "1px solid #60a5fa"
                            : "1px solid #e2e8f0",
                        cursor: submitted ? "default" : "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`${currentTopic.id}-${questionIndex}`}
                        value={option}
                        checked={selected}
                        disabled={submitted}
                        onChange={() =>
                          handleQuizAnswer(
                            currentTopic.id,
                            questionIndex,
                            option
                          )
                        }
                        style={{ marginRight: "10px" }}
                      />

                      {option}
                    </label>
                  );
                })}
              </div>
            ))}

            {!submitted ? (
              <button
                onClick={() => checkQuiz(currentTopic)}
                disabled={currentTopic.lesson.quiz.some(
                  (_, index) =>
                    !quizAnswers[
                      `${currentTopic.id}-${index}`
                    ]
                )}
                style={{
                  marginTop: "25px",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                Check Quiz
              </button>
            ) : (
              <div
                style={{
                  marginTop: "25px",
                  padding: "18px",
                  background: "#eef6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "10px",
                  color: "#1e3a8a",
                  fontWeight: "700",
                }}
              >
                🎉 Score: {getScore(currentTopic)} /{" "}
                {currentTopic.lesson.quiz.length}
              </div>
            )}
          </section>

          <button
            onClick={() => toggleComplete(currentTopic.id)}
            style={{
              marginTop: "30px",
              width: "100%",
              padding: "13px",
              borderRadius: "9px",
              border: "none",
              background: completed.includes(currentTopic.id)
                ? "#64748b"
                : "#2563eb",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            {completed.includes(currentTopic.id)
              ? "Mark Topic Incomplete"
              : "✓ Mark Topic Complete"}
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "25px",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                padding: "11px 16px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === 0 ? "#e2e8f0" : "#ffffff",
                color:
                  currentIndex === 0 ? "#94a3b8" : "#2563eb",
                cursor:
                  currentIndex === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Topic
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === subtopics.length - 1}
              style={{
                padding: "11px 16px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentIndex === subtopics.length - 1
                    ? "#e2e8f0"
                    : "#2563eb",
                color:
                  currentIndex === subtopics.length - 1
                    ? "#94a3b8"
                    : "#ffffff",
                cursor:
                  currentIndex === subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              Next Topic →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef6ff",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={goBack}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          ← Back to AI / ML Roadmap
        </button>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
          }}
        >
          <h1 style={{ color: "#1e3a8a", marginTop: 0 }}>
            🚀 Model Deployment & MLOps
          </h1>

          <p style={{ color: "#475569", lineHeight: "1.6" }}>
            Learn how trained machine learning models are saved,
            exposed through APIs, deployed, containerized, monitored,
            and managed through practical MLOps workflows.
          </p>

          <div style={{ marginTop: "25px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#334155",
              }}
            >
              <span>Overall Progress</span>
              <span>{overallProgress}%</span>
            </div>

            <div
              style={{
                height: "10px",
                background: "#dbeafe",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${overallProgress}%`,
                  height: "100%",
                  background: "#2563eb",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completed.includes(topic.id);

            return (
              <div
                key={topic.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow:
                    "0 6px 18px rgba(37, 99, 235, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <h2
                    style={{
                      marginTop: 0,
                      color: "#1e3a8a",
                      fontSize: "20px",
                      lineHeight: "1.4",
                    }}
                  >
                    {index + 1}. {topic.icon} {topic.title}
                  </h2>

                  {isCompleted && (
                    <span
                      style={{
                        color: "#15803d",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginBottom: "18px",
                  }}
                >
                  1 lesson
                </p>

                <div
                  style={{
                    height: "7px",
                    background: "#dbeafe",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "15px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted ? "100%" : "0%",
                      height: "100%",
                      background: "#2563eb",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#475569",
                    marginBottom: "15px",
                  }}
                >
                  Progress: {isCompleted ? "100%" : "0%"}
                </p>

                <button
                  onClick={() => openTopic(topic.id)}
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  {isCompleted ? "Review Topic" : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModelDeploymentMLOps;