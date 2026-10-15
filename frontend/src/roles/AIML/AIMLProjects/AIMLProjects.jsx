import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "regression-project",
    title: "Regression Project",
    icon: "📈",
    lesson: {
      overview:
        "A regression project uses machine learning to predict a continuous numerical value. It is a good first end-to-end project because it brings together data preprocessing, feature selection, model training, evaluation, and prediction.",
      sections: [
        {
          heading: "Project Goal",
          points: [
            "Choose a real-world problem where the target is a continuous value.",
            "Examples include predicting house prices, sales, demand, or delivery time.",
            "Clearly define the input features and the numerical target before building the model.",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Collect or select an appropriate dataset.",
            "Explore the dataset and understand the features.",
            "Handle missing values, duplicates, and inconsistent data.",
            "Split the data into training and testing sets.",
            "Train one or more regression models.",
            "Evaluate predictions using suitable regression metrics.",
            "Use the final model to make predictions on new data.",
          ],
        },
        {
          heading: "What to Include in the Project",
          points: [
            "Dataset description and problem statement.",
            "Exploratory data analysis and preprocessing decisions.",
            "Model selection and training process.",
            "Evaluation metrics such as MAE, MSE, RMSE, or R².",
            "Comparison of models where appropriate.",
            "Clear conclusions, limitations, and possible improvements.",
          ],
        },
      ],
      mistakes: [
        "Using classification metrics for a regression problem.",
        "Training on the test data.",
        "Ignoring missing values and outliers.",
        "Choosing a model without understanding the target variable.",
      ],
      quiz: [
        {
          question: "What type of target does a regression model usually predict?",
          options: [
            "A continuous numerical value",
            "Only text labels",
            "Only image pixels",
            "A database table",
          ],
          answer: "A continuous numerical value",
        },
        {
          question: "Which metric can be used for regression evaluation?",
          options: [
            "Mean Absolute Error",
            "Accuracy only",
            "Precision only",
            "Recall only",
          ],
          answer: "Mean Absolute Error",
        },
        {
          question: "What should be kept separate from training data?",
          options: [
            "Test data",
            "The Python interpreter",
            "The project title",
            "The README filename",
          ],
          answer: "Test data",
        },
      ],
    },
  },

  {
    id: "classification-project",
    title: "Classification Project",
    icon: "🤖",
    lesson: {
      overview:
        "A classification project predicts categories or classes from input data. It is an important portfolio project because classification is widely used in areas such as fraud detection, spam filtering, customer analysis, and medical prediction.",
      sections: [
        {
          heading: "Project Goal",
          points: [
            "Choose a problem where the target belongs to one or more defined classes.",
            "Examples include spam detection, disease classification, customer churn, or fraud detection.",
            "Understand what each class represents before training a model.",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Collect and inspect labeled data.",
            "Clean and preprocess the dataset.",
            "Analyze class distribution.",
            "Split the dataset into training and testing data.",
            "Train suitable classification algorithms.",
            "Evaluate the models using classification metrics.",
            "Select an appropriate model and test it on unseen examples.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "Accuracy measures the proportion of correct predictions.",
            "Precision measures how many predicted positives are actually positive.",
            "Recall measures how many actual positives were identified.",
            "F1-score balances precision and recall.",
            "A confusion matrix provides a detailed view of classification results.",
          ],
        },
      ],
      mistakes: [
        "Using accuracy alone when classes are highly imbalanced.",
        "Ignoring the meaning and cost of false positives and false negatives.",
        "Training and evaluating on the same data.",
        "Ignoring class distribution.",
      ],
      quiz: [
        {
          question: "What does a classification model predict?",
          options: [
            "A category or class",
            "Only a continuous number",
            "Only an image size",
            "Only a database index",
          ],
          answer: "A category or class",
        },
        {
          question: "Which metric balances precision and recall?",
          options: [
            "F1-score",
            "RMSE",
            "R²",
            "MSE",
          ],
          answer: "F1-score",
        },
        {
          question: "What is especially important when classes are imbalanced?",
          options: [
            "Looking beyond accuracy and using appropriate evaluation metrics",
            "Deleting the minority class",
            "Using only training accuracy",
            "Ignoring the class distribution",
          ],
          answer:
            "Looking beyond accuracy and using appropriate evaluation metrics",
        },
      ],
    },
  },

  {
    id: "clustering-project",
    title: "Clustering Project",
    icon: "🔵",
    lesson: {
      overview:
        "A clustering project applies unsupervised learning to group similar data points without predefined class labels. It is useful for discovering natural patterns and segments within datasets.",
      sections: [
        {
          heading: "Project Goal",
          points: [
            "Choose a dataset where meaningful groups may exist.",
            "Examples include customer segmentation, product grouping, or document grouping.",
            "Since clustering is unsupervised, predefined target labels are generally not required for training.",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Collect and understand the dataset.",
            "Select useful features for clustering.",
            "Clean and preprocess the data.",
            "Scale numerical features when appropriate.",
            "Choose a clustering algorithm such as K-Means.",
            "Determine a suitable number of clusters when required.",
            "Analyze and visualize the resulting groups.",
          ],
        },
        {
          heading: "Interpreting Results",
          points: [
            "Examine the characteristics of each cluster.",
            "Use visualizations to understand separation between groups.",
            "Metrics such as silhouette score can help evaluate clustering structure.",
            "Domain knowledge is important when assigning meaning to discovered clusters.",
          ],
        },
      ],
      mistakes: [
        "Assuming every dataset naturally contains useful clusters.",
        "Ignoring feature scaling when it matters.",
        "Choosing the number of clusters without analysis.",
        "Treating cluster labels as meaningful class names automatically.",
      ],
      quiz: [
        {
          question: "Is clustering generally supervised or unsupervised learning?",
          options: [
            "Unsupervised learning",
            "Supervised learning only",
            "Reinforcement learning only",
            "Rule-based programming",
          ],
          answer: "Unsupervised learning",
        },
        {
          question: "What can clustering be used for?",
          options: [
            "Discovering groups in data",
            "Only predicting a continuous target",
            "Only generating passwords",
            "Only creating web pages",
          ],
          answer: "Discovering groups in data",
        },
        {
          question: "Which metric can help evaluate clustering structure?",
          options: [
            "Silhouette score",
            "Accuracy only",
            "Recall only",
            "BLEU score only",
          ],
          answer: "Silhouette score",
        },
      ],
    },
  },

  {
    id: "nlp-project",
    title: "NLP Project",
    icon: "📝",
    lesson: {
      overview:
        "An NLP project applies natural language processing techniques to solve a problem involving human language. It can combine text preprocessing, feature extraction, machine learning, and evaluation.",
      sections: [
        {
          heading: "Project Ideas",
          points: [
            "Build a sentiment analysis system.",
            "Create a spam message classifier.",
            "Build a text classification application.",
            "Create a simple document or review analysis system.",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Collect or select a text dataset.",
            "Clean and normalize text where appropriate.",
            "Tokenize and transform text into numerical features.",
            "Use approaches such as TF-IDF or word embeddings.",
            "Train a suitable NLP model.",
            "Evaluate the model on unseen text.",
          ],
        },
        {
          heading: "Improving an NLP Project",
          points: [
            "Analyze incorrect predictions to understand model limitations.",
            "Experiment with preprocessing and feature representations.",
            "Compare multiple models when useful.",
            "Consider modern transformer-based approaches for more advanced projects.",
          ],
        },
      ],
      mistakes: [
        "Removing useful information during text cleaning.",
        "Training on duplicated or leaked text.",
        "Ignoring class imbalance.",
        "Evaluating the model only on training examples.",
      ],
      quiz: [
        {
          question: "What type of data does an NLP project primarily work with?",
          options: [
            "Human language and text",
            "Only numerical sensor data",
            "Only video frames",
            "Only database schemas",
          ],
          answer: "Human language and text",
        },
        {
          question: "Which is a common text feature representation?",
          options: [
            "TF-IDF",
            "Bounding boxes",
            "Pixel pooling",
            "GPS coordinates",
          ],
          answer: "TF-IDF",
        },
        {
          question: "What should be analyzed when improving an NLP model?",
          options: [
            "Incorrect predictions and model limitations",
            "Only the UI font",
            "Only the file size",
            "Only the project logo",
          ],
          answer: "Incorrect predictions and model limitations",
        },
      ],
    },
  },

  {
    id: "computer-vision-project",
    title: "Computer Vision Project",
    icon: "📷",
    lesson: {
      overview:
        "A computer vision project applies image processing and machine learning or deep learning to solve a visual problem. A strong project should demonstrate the complete pipeline from image data preparation to model evaluation and inference.",
      sections: [
        {
          heading: "Project Ideas",
          points: [
            "Build an image classification system.",
            "Create an object detection application.",
            "Build a plant disease recognition system.",
            "Create a traffic or camera-based detection application.",
            "Build an image segmentation project.",
          ],
        },
        {
          heading: "Project Workflow",
          points: [
            "Collect or select an appropriate image dataset.",
            "Inspect image quality and labels.",
            "Resize and preprocess images as required.",
            "Split the dataset appropriately.",
            "Train a computer vision model.",
            "Evaluate the model using suitable metrics.",
            "Build an inference workflow or application.",
          ],
        },
        {
          heading: "Project Presentation",
          points: [
            "Clearly explain the visual problem being solved.",
            "Show representative examples from the dataset.",
            "Explain the chosen model and preprocessing pipeline.",
            "Present evaluation results and examples of predictions.",
            "Discuss limitations and possible future improvements.",
          ],
        },
      ],
      mistakes: [
        "Using inconsistent image preprocessing.",
        "Ignoring incorrect labels or poor-quality images.",
        "Training and testing on overlapping images.",
        "Showing only accuracy without discussing practical limitations.",
      ],
      quiz: [
        {
          question: "What is an important first step in a computer vision project?",
          options: [
            "Understand and prepare the image dataset",
            "Deploy immediately",
            "Delete the test set",
            "Skip preprocessing",
          ],
          answer: "Understand and prepare the image dataset",
        },
        {
          question: "Which is a possible computer vision project?",
          options: [
            "Object detection application",
            "SQL query optimizer only",
            "Text editor only",
            "Operating system scheduler",
          ],
          answer: "Object detection application",
        },
        {
          question: "What should a project presentation discuss besides accuracy?",
          options: [
            "Limitations and practical results",
            "Only the project title",
            "Only the programming language",
            "Only the number of files",
          ],
          answer: "Limitations and practical results",
        },
      ],
    },
  },

  {
    id: "generative-ai-rag-project",
    title: "Generative AI / RAG Project",
    icon: "✨",
    lesson: {
      overview:
        "A Generative AI or Retrieval-Augmented Generation (RAG) project combines language models with application logic to generate useful responses. RAG adds external knowledge retrieval so that a system can ground its responses in a selected knowledge base.",
      sections: [
        {
          heading: "Project Ideas",
          points: [
            "Build a document question-answering assistant.",
            "Create a chatbot for a specific knowledge domain.",
            "Build a study assistant using course material.",
            "Create a retrieval-based assistant for company or project documents.",
          ],
        },
        {
          heading: "RAG Workflow",
          points: [
            "Collect and prepare the knowledge documents.",
            "Split documents into meaningful chunks.",
            "Generate embeddings for the chunks.",
            "Store embeddings in a suitable vector store.",
            "Retrieve relevant chunks for a user query.",
            "Provide the retrieved context to the language model.",
            "Generate a response based on the retrieved information.",
          ],
        },
        {
          heading: "Making the Project Reliable",
          points: [
            "Use relevant and trustworthy source documents.",
            "Design prompts that clearly explain the task and available context.",
            "Evaluate retrieval quality as well as generated responses.",
            "Handle cases where relevant information cannot be found.",
            "Protect sensitive information in the knowledge base.",
          ],
        },
      ],
      mistakes: [
        "Assuming RAG automatically eliminates hallucinations.",
        "Using poor-quality or irrelevant documents.",
        "Retrieving too much irrelevant context.",
        "Ignoring evaluation of both retrieval and generation.",
      ],
      quiz: [
        {
          question: "What does RAG add to a generative AI system?",
          options: [
            "Retrieval of relevant external knowledge",
            "Automatic replacement of the language model",
            "Only image resizing",
            "Only database backups",
          ],
          answer: "Retrieval of relevant external knowledge",
        },
        {
          question: "What are embeddings commonly used for in RAG?",
          options: [
            "Representing content numerically for similarity-based retrieval",
            "Creating database passwords",
            "Compressing videos only",
            "Rendering UI components",
          ],
          answer:
            "Representing content numerically for similarity-based retrieval",
        },
        {
          question: "Does RAG guarantee that a model will never hallucinate?",
          options: [
            "No",
            "Yes, always",
            "Only for images",
            "Only when using a vector database",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "capstone-project",
    title: "AI / ML Capstone Project",
    icon: "🏆",
    lesson: {
      overview:
        "An AI / ML capstone project is a complete end-to-end system that demonstrates your ability to define a problem, work with data, build and evaluate a model, deploy the solution, and communicate the results.",
      sections: [
        {
          heading: "Choosing the Problem",
          points: [
            "Start with a clear and meaningful real-world problem.",
            "Define who will use the system and what decision or task it supports.",
            "Determine whether the problem requires regression, classification, clustering, NLP, computer vision, or generative AI.",
          ],
        },
        {
          heading: "End-to-End Workflow",
          points: [
            "Define the problem and success criteria.",
            "Collect or select data.",
            "Perform exploratory data analysis.",
            "Clean and preprocess the data.",
            "Engineer or select useful features when appropriate.",
            "Train and compare suitable models.",
            "Evaluate the final solution on unseen data.",
            "Build an inference API or application.",
            "Deploy and monitor the system when appropriate.",
          ],
        },
        {
          heading: "What Makes a Strong Capstone?",
          points: [
            "A clearly defined problem and target users.",
            "A well-understood and appropriately prepared dataset.",
            "A justified model selection process.",
            "Meaningful evaluation rather than a single accuracy number.",
            "A usable application or API.",
            "Clear documentation, architecture, limitations, and future improvements.",
          ],
        },
        {
          heading: "Portfolio Presentation",
          points: [
            "Explain the problem before discussing the technology.",
            "Show the architecture and major components.",
            "Demonstrate the working application.",
            "Present model results and relevant metrics.",
            "Explain challenges and how they were addressed.",
            "Discuss limitations honestly and identify realistic future improvements.",
          ],
        },
      ],
      mistakes: [
        "Choosing an overly large problem that cannot be completed well.",
        "Focusing on the model while ignoring the application.",
        "Using a dataset without understanding its limitations.",
        "Reporting metrics without explaining what they mean.",
        "Failing to document the project architecture and decisions.",
      ],
      quiz: [
        {
          question: "What should come first in a capstone project?",
          options: [
            "A clear problem definition and success criteria",
            "Deployment before data collection",
            "Choosing a random algorithm",
            "Designing the project logo",
          ],
          answer: "A clear problem definition and success criteria",
        },
        {
          question: "What makes an AI/ML capstone stronger?",
          options: [
            "Combining a justified ML solution with a usable application and clear evaluation",
            "Only having the largest model",
            "Only having many source files",
            "Only showing training accuracy",
          ],
          answer:
            "Combining a justified ML solution with a usable application and clear evaluation",
        },
        {
          question: "What should be discussed honestly in a capstone presentation?",
          options: [
            "Limitations and future improvements",
            "Only successful predictions",
            "Only the project name",
            "Only the programming language",
          ],
          answer: "Limitations and future improvements",
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

function AIMLProjects({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-aimlprojects", subtopics);
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
            🏆 AI / ML Projects
          </h1>

          <p style={{ color: "#475569", lineHeight: "1.6" }}>
            Build practical AI and machine learning projects that combine
            data preparation, modeling, evaluation, deployment, and
            real-world problem solving.
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

export default AIMLProjects;