import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "intro-ai",
    title: "Introduction to AI",
    icon: "🤖",
    lesson: {
      overview:
        "Artificial Intelligence (AI) is the field of computing focused on creating systems that can perform tasks that normally require human intelligence, such as understanding language, recognizing patterns, making predictions, and solving problems.",
      sections: [
        {
          title: "What is Artificial Intelligence?",
          points: [
            "AI systems are designed to perform tasks that involve capabilities associated with human intelligence.",
            "These capabilities can include reasoning, learning, perception, language understanding, and decision-making.",
            "AI can be built using different approaches, including rule-based systems and machine learning.",
            "Modern AI applications often learn patterns from data rather than relying entirely on manually written rules.",
          ],
        },
        {
          title: "Examples of AI",
          points: [
            "Voice assistants that understand spoken commands.",
            "Recommendation systems that suggest movies, products, or music.",
            "Fraud detection systems that identify unusual transactions.",
            "Image recognition systems that identify objects or patterns.",
            "Generative AI systems that produce text, images, audio, or code.",
          ],
        },
        {
          title: "AI in the Real World",
          points: [
            "Healthcare systems can assist with medical image analysis and prediction.",
            "Financial systems can detect suspicious transactions.",
            "Transportation systems can use AI for routing and autonomous driving research.",
            "Businesses can use AI for customer support, forecasting, and automation.",
          ],
        },
      ],
      mistakes: [
        "Do not assume AI always means machine learning.",
        "Do not assume every AI system learns automatically from data.",
        "Do not treat AI predictions as guaranteed to be correct.",
      ],
      quiz: [
        {
          question: "What is the main goal of Artificial Intelligence?",
          options: [
            "Enable computers to perform tasks involving intelligent behavior",
            "Only make websites look attractive",
            "Only store data in databases",
            "Only increase computer storage",
          ],
          answer:
            "Enable computers to perform tasks involving intelligent behavior",
        },
        {
          question: "Which is an example of an AI application?",
          options: [
            "A recommendation system",
            "A plain text file",
            "A computer keyboard",
            "A USB cable",
          ],
          answer: "A recommendation system",
        },
        {
          question: "Can AI be built without machine learning?",
          options: [
            "Yes, some AI systems can use rules or other approaches",
            "No, AI and machine learning are exactly the same",
            "Only when using a database",
            "Only when using Python",
          ],
          answer:
            "Yes, some AI systems can use rules or other approaches",
        },
      ],
    },
  },

  {
    id: "ai-ml-dl",
    title: "AI vs ML vs Deep Learning",
    icon: "🧩",
    lesson: {
      overview:
        "AI, Machine Learning, and Deep Learning are related concepts but they are not identical. AI is the broadest field, machine learning is a major approach within AI, and deep learning is a specialized approach within machine learning.",
      sections: [
        {
          title: "Artificial Intelligence",
          points: [
            "AI is the broad field of creating systems capable of intelligent behavior.",
            "It includes learning, reasoning, planning, perception, and language-related tasks.",
            "AI can include both learning-based and non-learning-based techniques.",
          ],
        },
        {
          title: "Machine Learning",
          points: [
            "Machine learning is a subset of AI.",
            "ML systems learn patterns from data to make predictions or decisions.",
            "Instead of explicitly programming every rule, developers provide data and learning algorithms.",
            "Examples include spam detection, price prediction, and classification.",
          ],
        },
        {
          title: "Deep Learning",
          points: [
            "Deep learning is a subset of machine learning.",
            "It uses neural networks with multiple layers.",
            "Deep learning is especially useful for complex data such as images, audio, and natural language.",
            "Large datasets and significant computing resources are often useful for deep learning.",
          ],
        },
        {
          title: "Relationship",
          points: [
            "AI is the broadest concept.",
            "Machine Learning is one approach to AI.",
            "Deep Learning is a specialized approach within Machine Learning.",
            "Therefore, deep learning is ML, and ML is AI, but AI does not always mean deep learning.",
          ],
        },
      ],
      mistakes: [
        "Do not use AI, ML, and deep learning as interchangeable terms.",
        "Do not assume every AI application requires a neural network.",
        "Do not assume deep learning is always the best choice for every dataset.",
      ],
      quiz: [
        {
          question: "Which concept is the broadest?",
          options: [
            "Artificial Intelligence",
            "Deep Learning",
            "Convolutional Neural Networks",
            "Gradient Descent",
          ],
          answer: "Artificial Intelligence",
        },
        {
          question: "What is Machine Learning?",
          options: [
            "A major approach within Artificial Intelligence",
            "A replacement for databases",
            "A programming language",
            "A type of computer hardware",
          ],
          answer:
            "A major approach within Artificial Intelligence",
        },
        {
          question: "Deep Learning is a subset of what?",
          options: [
            "Machine Learning",
            "HTML",
            "Database Management",
            "Computer Networking",
          ],
          answer: "Machine Learning",
        },
      ],
    },
  },

  {
    id: "types-ml",
    title: "Types of Machine Learning",
    icon: "📚",
    lesson: {
      overview:
        "Machine learning can be categorized according to how a model learns from data. The major categories include supervised learning, unsupervised learning, and reinforcement learning.",
      sections: [
        {
          title: "Supervised Learning",
          points: [
            "The model learns from labeled training data.",
            "Each training example contains input data and a known target or output.",
            "Classification predicts categories.",
            "Regression predicts numerical values.",
          ],
        },
        {
          title: "Unsupervised Learning",
          points: [
            "The model works with data without predefined target labels.",
            "The goal can be to discover hidden patterns or structures.",
            "Clustering groups similar data points.",
            "Dimensionality reduction can simplify high-dimensional data.",
          ],
        },
        {
          title: "Reinforcement Learning",
          points: [
            "An agent interacts with an environment.",
            "The agent receives rewards or penalties based on its actions.",
            "The goal is to learn a strategy that maximizes long-term reward.",
            "It is commonly discussed in robotics, games, and sequential decision-making.",
          ],
        },
        {
          title: "Choosing an Approach",
          points: [
            "Use supervised learning when labeled examples and a target are available.",
            "Use unsupervised learning when discovering structure in unlabeled data is the goal.",
            "Use reinforcement learning when an agent must learn through interaction and rewards.",
          ],
        },
      ],
      mistakes: [
        "Do not call every prediction problem unsupervised learning.",
        "Do not confuse classification with regression.",
        "Do not assume reinforcement learning is simply supervised learning without labels.",
      ],
      quiz: [
        {
          question: "What does supervised learning use?",
          options: [
            "Labeled training data",
            "Only random numbers",
            "Only images",
            "No training data",
          ],
          answer: "Labeled training data",
        },
        {
          question: "What is a common goal of unsupervised learning?",
          options: [
            "Discover patterns or structures in data",
            "Predict using known labels only",
            "Compile source code",
            "Create HTML pages",
          ],
          answer:
            "Discover patterns or structures in data",
        },
        {
          question: "What guides an agent in reinforcement learning?",
          options: [
            "Rewards and penalties",
            "CSS properties",
            "Database tables only",
            "HTML tags",
          ],
          answer: "Rewards and penalties",
        },
      ],
    },
  },

  {
    id: "supervised",
    title: "Supervised Learning",
    icon: "🎯",
    lesson: {
      overview:
        "Supervised learning trains a model using examples where the desired output is known. The model learns a relationship between input features and a target value and then uses that relationship to make predictions on new data.",
      sections: [
        {
          title: "Training Data",
          points: [
            "A supervised dataset contains input features and target labels or values.",
            "Features describe the information provided to the model.",
            "The target is what the model is expected to predict.",
            "The model learns from examples during training.",
          ],
        },
        {
          title: "Classification",
          points: [
            "Classification predicts a discrete category.",
            "Examples include spam vs not spam and disease vs no disease.",
            "Binary classification has two classes.",
            "Multiclass classification contains more than two possible classes.",
          ],
        },
        {
          title: "Regression",
          points: [
            "Regression predicts a numerical value.",
            "Examples include house-price prediction and sales forecasting.",
            "The predicted value is continuous rather than a category.",
            "Different regression algorithms can model different relationships between features and targets.",
          ],
        },
        {
          title: "Basic Workflow",
          points: [
            "Collect and prepare labeled data.",
            "Split data into appropriate training and evaluation sets.",
            "Train a machine learning model.",
            "Evaluate the model on data it did not train on.",
            "Use the trained model to make predictions on new examples.",
          ],
        },
      ],
      mistakes: [
        "Do not evaluate a model only on the same data used for training.",
        "Do not confuse numerical prediction with classification.",
        "Do not ignore the quality of the labels in a supervised dataset.",
      ],
      quiz: [
        {
          question: "What does supervised learning require?",
          options: [
            "Known target values or labels during training",
            "Only unlabeled data",
            "Only rewards",
            "No data",
          ],
          answer:
            "Known target values or labels during training",
        },
        {
          question: "Predicting whether an email is spam is an example of?",
          options: [
            "Classification",
            "Regression",
            "Clustering",
            "Dimensionality reduction",
          ],
          answer: "Classification",
        },
        {
          question: "Predicting a house's numerical price is an example of?",
          options: [
            "Regression",
            "Classification",
            "Clustering",
            "Reinforcement learning",
          ],
          answer: "Regression",
        },
      ],
    },
  },

  {
    id: "unsupervised",
    title: "Unsupervised Learning",
    icon: "🔍",
    lesson: {
      overview:
        "Unsupervised learning works with data where target labels are not provided. Instead of learning to predict a known target, the model attempts to discover useful structures, groups, or representations in the data.",
      sections: [
        {
          title: "Clustering",
          points: [
            "Clustering groups data points according to similarity.",
            "K-Means is a commonly used clustering algorithm.",
            "Clusters can help discover groups of customers or similar documents.",
            "The resulting groups do not automatically have meaningful names.",
          ],
        },
        {
          title: "Dimensionality Reduction",
          points: [
            "Dimensionality reduction reduces the number of features or dimensions.",
            "It can make datasets easier to visualize or process.",
            "Principal Component Analysis (PCA) is a common technique.",
            "Reducing dimensions can also help remove some redundancy.",
          ],
        },
        {
          title: "Applications",
          points: [
            "Customer segmentation.",
            "Exploring large datasets.",
            "Finding unusual or potentially anomalous observations.",
            "Discovering hidden structures before building predictive models.",
          ],
        },
        {
          title: "Important Consideration",
          points: [
            "Unsupervised results require interpretation.",
            "A cluster discovered by an algorithm does not automatically represent a real-world category.",
            "Domain knowledge is often needed to understand whether discovered patterns are useful.",
          ],
        },
      ],
      mistakes: [
        "Do not assume every cluster automatically represents a meaningful business group.",
        "Do not treat clustering as supervised classification.",
        "Do not assume dimensionality reduction always improves model performance.",
      ],
      quiz: [
        {
          question: "What is a common task in unsupervised learning?",
          options: [
            "Clustering",
            "Label prediction using known targets",
            "Password hashing",
            "Web routing",
          ],
          answer: "Clustering",
        },
        {
          question: "What is PCA commonly used for?",
          options: [
            "Dimensionality reduction",
            "Password authentication",
            "HTTP routing",
            "Database transactions",
          ],
          answer: "Dimensionality reduction",
        },
        {
          question: "What kind of data is commonly used in unsupervised learning?",
          options: [
            "Data without predefined target labels",
            "Only perfectly labeled data",
            "Only HTML documents",
            "Only database schemas",
          ],
          answer:
            "Data without predefined target labels",
        },
      ],
    },
  },

  {
    id: "reinforcement",
    title: "Reinforcement Learning",
    icon: "🎮",
    lesson: {
      overview:
        "Reinforcement learning is a machine learning approach in which an agent learns by interacting with an environment. Actions produce rewards or penalties, and the agent learns a strategy for making better decisions over time.",
      sections: [
        {
          title: "Agent & Environment",
          points: [
            "The agent is the decision-making system.",
            "The environment is the world or system with which the agent interacts.",
            "The agent observes a state of the environment.",
            "The agent chooses an action.",
          ],
        },
        {
          title: "Rewards",
          points: [
            "The environment provides a reward or penalty after an action.",
            "Rewards communicate how desirable an outcome was.",
            "The agent attempts to maximize cumulative reward over time.",
            "A short-term reward is not always the same as the best long-term outcome.",
          ],
        },
        {
          title: "Applications",
          points: [
            "Game-playing systems.",
            "Robotics.",
            "Resource allocation.",
            "Sequential decision-making problems.",
            "Control systems.",
          ],
        },
        {
          title: "Exploration & Exploitation",
          points: [
            "Exploration means trying actions to discover potentially better strategies.",
            "Exploitation means choosing actions that are already known to perform well.",
            "A useful reinforcement learning strategy balances these two behaviors.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse rewards with supervised labels.",
        "Do not assume the agent receives the correct action directly from a teacher.",
        "Do not optimize only immediate rewards when long-term rewards matter.",
      ],
      quiz: [
        {
          question: "What does an agent do in reinforcement learning?",
          options: [
            "Interacts with an environment and chooses actions",
            "Only stores training data",
            "Only labels images",
            "Only creates database tables",
          ],
          answer:
            "Interacts with an environment and chooses actions",
        },
        {
          question: "What does the agent generally try to maximize?",
          options: [
            "Cumulative reward",
            "Number of HTML elements",
            "Database size",
            "CSS properties",
          ],
          answer: "Cumulative reward",
        },
        {
          question: "What is exploration?",
          options: [
            "Trying actions to discover potentially better strategies",
            "Always choosing the known best action",
            "Deleting training data",
            "Removing rewards",
          ],
          answer:
            "Trying actions to discover potentially better strategies",
        },
      ],
    },
  },

  {
    id: "train-validation-test",
    title: "Training, Validation & Testing",
    icon: "🧪",
    lesson: {
      overview:
        "Machine learning models need to be evaluated carefully. Separating data into training, validation, and test sets helps measure how well a model generalizes to data it has not seen during training.",
      sections: [
        {
          title: "Training Set",
          points: [
            "The training set is used to learn model parameters.",
            "The model sees these examples during training.",
            "Training performance alone does not tell us how well the model generalizes.",
          ],
        },
        {
          title: "Validation Set",
          points: [
            "The validation set can be used during model development.",
            "It can help compare models or tune hyperparameters.",
            "It should remain separate from the final test set.",
          ],
        },
        {
          title: "Test Set",
          points: [
            "The test set provides a final estimate of model performance.",
            "It should represent unseen data.",
            "Repeatedly tuning the model against the test set can make the final evaluation less trustworthy.",
          ],
        },
        {
          title: "Generalization",
          points: [
            "A useful model should perform well on new data, not just training examples.",
            "Overfitting occurs when a model learns training data too specifically and performs poorly on unseen data.",
            "Proper data splitting and evaluation help detect generalization problems.",
          ],
        },
      ],
      mistakes: [
        "Do not use the test set repeatedly to tune the model.",
        "Do not assume high training accuracy automatically means a good model.",
        "Do not mix training and test data carelessly.",
      ],
      quiz: [
        {
          question: "What is the training set used for?",
          options: [
            "Learning model parameters",
            "Only producing the final report",
            "Only storing backups",
            "Only testing the deployed application",
          ],
          answer: "Learning model parameters",
        },
        {
          question: "What is a validation set useful for?",
          options: [
            "Model selection and hyperparameter tuning",
            "Replacing all training data",
            "Storing passwords",
            "Creating HTML",
          ],
          answer:
            "Model selection and hyperparameter tuning",
        },
        {
          question: "What is the main purpose of a test set?",
          options: [
            "Estimate performance on unseen data",
            "Train the model repeatedly",
            "Replace the database",
            "Create features automatically",
          ],
          answer:
            "Estimate performance on unseen data",
        },
      ],
    },
  },

  {
    id: "ml-workflow",
    title: "ML Workflow",
    icon: "🔄",
    lesson: {
      overview:
        "A machine learning project follows a series of connected steps, from defining the problem and collecting data to preprocessing, training, evaluation, deployment, and monitoring. Understanding this workflow is essential for building useful ML systems.",
      sections: [
        {
          title: "1. Define the Problem",
          points: [
            "Clearly identify what needs to be predicted or discovered.",
            "Determine what success means for the project.",
            "Decide whether the problem is classification, regression, clustering, or another ML task.",
          ],
        },
        {
          title: "2. Collect & Understand Data",
          points: [
            "Collect relevant data for the problem.",
            "Explore the dataset and understand its features.",
            "Check for missing, duplicate, inconsistent, or incorrect data.",
            "Understand the target variable when working with supervised learning.",
          ],
        },
        {
          title: "3. Prepare & Train",
          points: [
            "Preprocess the data appropriately.",
            "Create training and evaluation datasets.",
            "Select a suitable algorithm.",
            "Train the model using the training data.",
          ],
        },
        {
          title: "4. Evaluate & Improve",
          points: [
            "Measure performance using suitable evaluation metrics.",
            "Compare models when necessary.",
            "Tune hyperparameters.",
            "Investigate errors and improve the data or model.",
          ],
        },
        {
          title: "5. Deploy & Monitor",
          points: [
            "Make the trained model available to an application or users.",
            "Monitor predictions and system behavior.",
            "Watch for changes in incoming data or model performance.",
            "Retrain or update the system when appropriate.",
          ],
        },
      ],
      mistakes: [
        "Do not start training before understanding the problem and data.",
        "Do not choose an algorithm without considering the task and dataset.",
        "Do not stop after achieving good training performance.",
        "Do not ignore the model after deployment.",
      ],
      quiz: [
        {
          question: "What should happen before choosing an ML algorithm?",
          options: [
            "Understand and define the problem",
            "Deploy the model immediately",
            "Delete the dataset",
            "Skip data exploration",
          ],
          answer: "Understand and define the problem",
        },
        {
          question: "Why is model evaluation important?",
          options: [
            "To measure how well the model performs",
            "To increase disk space",
            "To replace Python",
            "To create web pages",
          ],
          answer:
            "To measure how well the model performs",
        },
        {
          question: "What can happen after deployment?",
          options: [
            "The model can be monitored and updated when necessary",
            "The model never needs attention again",
            "All training data should be deleted",
            "The model automatically becomes perfect",
          ],
          answer:
            "The model can be monitored and updated when necessary",
        },
      ],
    },
  },
];

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

function AIMLFoundations({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] =
    useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-aiml-foundations", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState({});

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) => shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0
      ? subtopics[selectedIndex]
      : null;

  const markComplete = (topicId) => {
    saveProgress(topicId);
  };

  const handleAnswer = (
    topicId,
    questionIndex,
    answer
  ) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  const submitQuiz = async (topicId) => {

    const topic = subtopics.find(
      (item) => item.id === topicId
    );

    if (!topic) return;

    const score = calculateScore(topic);

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

  const calculateScore = (topic) => {
    return topic.lesson.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${topic.id}-${index}`];

        return (
          score +
          (selectedAnswer === question.answer ? 1 : 0)
        );
      },
      0
    );
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(
        subtopics[selectedIndex - 1].id
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(
        subtopics[selectedIndex + 1].id
      );
    }
  };

  if (selectedTopic) {
    const topic = selectedTopic;

    const score = quizSubmitted[topic.id]
      ? calculateScore(topic)
      : 0;

    const isFirst = selectedIndex === 0;

    const isLast =
      selectedIndex === subtopics.length - 1;

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

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "12px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "30px",
                  color: "#111827",
                }}
              >
                {topic.icon} {topic.title}
              </h1>

              <span
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  border: "1px solid #bfdbfe",
                  borderRadius: "20px",
                  padding: "7px 13px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Lesson {selectedIndex + 1} of{" "}
                {subtopics.length}
              </span>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "#374151",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              {topic.lesson.overview}
            </p>

            {topic.lesson.sections.map(
              (section, index) => (
                <div
                  key={section.title}
                  style={{
                    marginBottom: "28px",
                    padding: "22px",
                    background: "#f8fbff",
                    borderRadius: "14px",
                    border: "1px solid #dbeafe",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 14px",
                      color: "#1e3a8a",
                      fontSize: "21px",
                    }}
                  >
                    {index + 1}. {section.title}
                  </h2>

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "22px",
                      color: "#374151",
                      lineHeight: "1.8",
                    }}
                  >
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
            )}

            <div
              style={{
                marginTop: "10px",
                padding: "22px",
                background: "#eff6ff",
                borderRadius: "14px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  margin: "0 0 14px",
                  color: "#1e3a8a",
                  fontSize: "21px",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "22px",
                  color: "#374151",
                  lineHeight: "1.8",
                }}
              >
                {topic.lesson.mistakes.map(
                  (mistake) => (
                    <li key={mistake}>{mistake}</li>
                  )
                )}
              </ul>
            </div>

            <div style={{ marginTop: "35px" }}>
              <h2
                style={{
                  color: "#111827",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                📝 Quick Quiz
              </h2>

              {topic.lesson.quiz.map(
                (question, questionIndex) => {
                  const selectedAnswer =
                    quizAnswers[
                      `${topic.id}-${questionIndex}`
                    ];

                  const options =
                    shuffledQuizOptions[
                      topic.id
                    ][questionIndex];

                  return (
                    <div
                      key={question.question}
                      style={{
                        marginBottom: "24px",
                        padding: "22px",
                        borderRadius: "14px",
                        background: "#f9fafb",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 15px",
                          color: "#111827",
                          fontSize: "17px",
                          lineHeight: "1.5",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        {options.map((option) => (
                          <label
                            key={option}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "10px 12px",
                              borderRadius: "8px",
                              cursor: "pointer",
                              background:
                                selectedAnswer ===
                                option
                                  ? "#dbeafe"
                                  : "white",
                              border:
                                "1px solid #dbeafe",
                            }}
                          >
                            <input
                              type="radio"
                              name={`${topic.id}-${questionIndex}`}
                              value={option}
                              checked={
                                selectedAnswer ===
                                option
                              }
                              onChange={() =>
                                handleAnswer(
                                  topic.id,
                                  questionIndex,
                                  option
                                )
                              }
                            />

                            <span>{option}</span>
                          </label>
                        ))}
                      </div>

                      {quizSubmitted[topic.id] && (
                        <p
                          style={{
                            marginTop: "14px",
                            fontWeight: "600",
                            color:
                              selectedAnswer ===
                              question.answer
                                ? "#15803d"
                                : "#dc2626",
                          }}
                        >
                          {selectedAnswer ===
                          question.answer
                            ? "✅ Correct!"
                            : `❌ Incorrect. Correct answer: ${question.answer}`}
                        </p>
                      )}
                    </div>
                  );
                }
              )}

              <button
                onClick={() => submitQuiz(topic.id)}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Check Quiz
              </button>

              {quizSubmitted[topic.id] && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "16px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    border: "1px solid #bfdbfe",
                    color: "#1e3a8a",
                    fontWeight: "600",
                  }}
                >
                  🎯 Your Score: {score} /{" "}
                  {topic.lesson.quiz.length}
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "35px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <button
                onClick={() => saveProgress(topic.id)}
                disabled={completed.includes(topic.id)}
                style={{
                  background: completed.includes(topic.id)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(topic.id)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(topic.id)
                  ? "✅ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={goToPrevious}
                disabled={isFirst}
                style={{
                  background: isFirst
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isFirst
                    ? "#9ca3af"
                    : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isFirst
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                ← Previous Lesson
              </button>

              <button
                onClick={() => setSelectedSubtopic(null)}
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                📚 Back to Topics
              </button>

              <button
                onClick={goToNext}
                disabled={isLast}
                style={{
                  background: isLast
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isLast
                    ? "#9ca3af"
                    : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isLast
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                Next Lesson →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🧠 AI & Machine Learning Foundations
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Build a strong foundation in artificial
          intelligence and machine learning concepts
          before moving into data processing, algorithms,
          and deep learning.
        </p>

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
            {completedCount} of {subtopics.length} lessons
            completed
          </p>
        </div>

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
                  minHeight: "200px",
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
                    setSelectedSubtopic(topic.id)
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

export default AIMLFoundations;