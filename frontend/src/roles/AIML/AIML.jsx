import React, { useEffect, useState } from "react";

import AIMLFoundations from "./AIML_Foundations/AIML_Foundations";
import NumPy from "./NumPy/NumPy";
import Pandas from "./Pandas/Pandas";
import DataPreprocessing from "./DataPreprocessing/DataPreprocessing";
import MachineLearningAlgorithms from "./MachineLearningAlgorithms/MachineLearningAlgorithms";
import ModelEvaluation from "./ModelEvaluation/ModelEvaluation";
import ScikitLearn from "./ScikitLearn/ScikitLearn";
import DeepLearningFoundations from "./DeepLearningFoundations/DeepLearningFoundations";
import NeuralNetworksCNNs from "./NeuralNetworksCNNs/NeuralNetworksCNNs";
import NLPTextProcessing from "./NLPTextProcessing/NLPTextProcessing";
import TransformersGenerativeAI from "./TransformersGenerativeAI/TransformersGenerativeAI";
import ComputerVision from "./ComputerVision/ComputerVision";
import ModelDeploymentMLOps from "./ModelDeploymentMLOps/ModelDeploymentMLOps";
import AIMLProjects from "./AIMLProjects/AIMLProjects";

// =====================================================
// AI / ML ROADMAP TOPICS
// =====================================================

const topics = [
  {
    id: "foundations",
    title: "AI & Machine Learning Foundations",
    icon: "🧠",
    lessons: 8,
    namespace: "aiml-aiml-foundations",
    component: AIMLFoundations,
  },

  {
    id: "numpy",
    title: "NumPy & Scientific Computing",
    icon: "🔢",
    lessons: 6,
    namespace: "aiml-numpy",
    component: NumPy,
  },

  {
    id: "pandas",
    title: "Pandas & Data Processing",
    icon: "🐼",
    lessons: 7,
    namespace: "aiml-pandas",
    component: Pandas,
  },

  {
    id: "preprocessing",
    title: "Data Preprocessing & Feature Engineering",
    icon: "🧹",
    lessons: 8,
    namespace: "aiml-preprocessing",
    component: DataPreprocessing,
  },

  {
    id: "algorithms",
    title: "Machine Learning Algorithms",
    icon: "🤖",
    lessons: 10,
    namespace: "aiml-algorithms",
    component: MachineLearningAlgorithms,
  },

  {
    id: "evaluation",
    title: "Model Evaluation & Optimization",
    icon: "📊",
    lessons: 8,
    namespace: "aiml-evaluation",
    component: ModelEvaluation,
  },

  {
    id: "scikit-learn",
    title: "Scikit-Learn & ML Workflows",
    icon: "⚙️",
    lessons: 7,
    namespace: "aiml-scikit-learn",
    component: ScikitLearn,
  },

  {
    id: "deep-learning",
    title: "Deep Learning Foundations",
    icon: "🧠",
    lessons: 9,
    namespace: "aiml-deep-learning",
    component: DeepLearningFoundations,
  },

  {
    id: "neural-networks",
    title: "Neural Networks & CNNs",
    icon: "👁️",
    lessons: 8,
    namespace: "aiml-neural-networks",
    component: NeuralNetworksCNNs,
  },

  {
    id: "nlp",
    title: "NLP & Text Processing",
    icon: "📝",
    lessons: 8,
    namespace: "aiml-nlp",
    component: NLPTextProcessing,
  },

  {
    id: "transformers",
    title: "Transformers & Generative AI",
    icon: "✨",
    lessons: 9,
    namespace: "aiml-transformers",
    component: TransformersGenerativeAI,
  },

  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: "📷",
    lessons: 7,
    namespace: "aiml-computer-vision",
    component: ComputerVision,
  },

  {
    id: "mlops",
    title: "Model Deployment & MLOps",
    icon: "🚀",
    lessons: 8,
    namespace: "aiml-mlops",
    component: ModelDeploymentMLOps,
  },

  {
    id: "projects",
    title: "AI / ML Projects",
    icon: "🏆",
    lessons: 7,
    namespace: "aiml-projects",
    component: AIMLProjects,
  },
];

// =====================================================
// AI / ML COMPONENT
// =====================================================

function AIML({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  // =====================================================
  // LOAD SAVED PROGRESS
  // =====================================================

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const response = await fetch(
          "https://gradpath-ai-backend.onrender.com/learning-progress",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCompletedTopics(data.completedTopics || []);
        }
      } catch (error) {
        console.error(
          "Error loading AI/ML learning progress:",
          error
        );
      }
    };

    fetchProgress();
  }, []);

  // =====================================================
  // TOTAL LESSONS
  // =====================================================

  const totalLessons = topics.reduce(
    (total, topic) => total + topic.lessons,
    0
  );

  // =====================================================
  // GET TOPIC PROGRESS
  // =====================================================

  const getTopicProgress = (topic) => {
    const completedCount = completedTopics.filter((id) =>
      id.startsWith(`${topic.namespace}-`)
    ).length;

    if (topic.lessons === 0) return 0;

    return Math.min(
      100,
      Math.round(
        (completedCount / topic.lessons) * 100
      )
    );
  };

  // =====================================================
  // OVERALL COMPLETED LESSONS
  // =====================================================

  const completedLessons = topics.reduce(
    (total, topic) => {
      const completedCount = completedTopics.filter((id) =>
        id.startsWith(`${topic.namespace}-`)
      ).length;

      return total + Math.min(completedCount, topic.lessons);
    },
    0
  );

  // =====================================================
  // OVERALL PROGRESS
  // =====================================================

  const overallProgress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons / totalLessons) * 100
        );

  // =====================================================
  // OPEN TOPIC
  // =====================================================

  const handleOpenTopic = (topicId) => {
    setSelectedTopic(topicId);
  };

  // =====================================================
  // SELECTED TOPIC PAGE
  // =====================================================

  if (selectedTopic) {
    const topic = topics.find(
      (item) => item.id === selectedTopic
    );

    if (topic.component) {
      const TopicComponent = topic.component;

      return (
        <TopicComponent
          goBack={() => setSelectedTopic(null)}
        />
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
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedTopic(null)}
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
            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "30px",
                color: "#111827",
              }}
            >
              {topic.icon} {topic.title}
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "#555",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}
            >
              This topic will be built next. 🚀
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // AI / ML ROADMAP PAGE
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
        {/* BACK BUTTON */}

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
          🤖 AI / ML Engineer
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn artificial intelligence and machine
          learning from foundational concepts to deep
          learning, generative AI, deployment, and
          real-world projects.
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
            {completedLessons} of {totalLessons} lessons
            completed
          </p>
        </div>

        {/* TOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {topics.map((topic, index) => {
            const progress = getTopicProgress(topic);

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
                    {topic.lessons} lessons
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
                    handleOpenTopic(topic.id)
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
                  {progress === 100
                    ? "Review Topic →"
                    : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AIML;