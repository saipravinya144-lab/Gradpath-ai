import React, { useEffect, useState } from "react";

// =====================================================
// TOPIC COMPONENTS
// =====================================================

import Excel from "./Excel/Excel";
import SQL from "./SQL/SQL";
import Statistics from "./Statistics/Statistics";
import PythonDataAnalysis from "./PythonDataAnalysis/PythonDataAnalysis";
import DataVisualization from "./DataVisualization/DataVisualization";
import PowerBI from "./PowerBI/PowerBI";
import DataAnalystProjects from "./DataAnalystProjects/DataAnalystProjects";

// =====================================================
// DATA ANALYST ROADMAP
// =====================================================

const topics = [
  {
    id: "excel",
    title: "Excel",
    icon: "📗",
    lessons: 6,
    namespace: "dataanalyst-excel",
    component: Excel,
  },
  {
    id: "sql",
    title: "SQL",
    icon: "🗄️",
    lessons: 7,
    namespace: "dataanalyst-sql",
    component: SQL,
  },
  {
    id: "statistics",
    title: "Statistics",
    icon: "📊",
    lessons: 6,
    namespace: "dataanalyst-statistics",
    component: Statistics,
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    icon: "🐍",
    lessons: 6,
    namespace: "dataanalyst-python-data-analysis",
    component: PythonDataAnalysis,
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    icon: "📈",
    lessons: 5,
    namespace: "dataanalyst-data-visualization",
    component: DataVisualization,
  },
  {
    id: "power-bi",
    title: "Power BI",
    icon: "📊",
    lessons: 6,
    namespace: "dataanalyst-power-bi",
    component: PowerBI,
  },
  {
    id: "projects",
    title: "Data Analyst Projects",
    icon: "💼",
    lessons: 5,
    namespace: "dataanalyst-projects",
    component: DataAnalystProjects,
  },
];

// =====================================================
// DATA ANALYST COMPONENT
// =====================================================

function DataAnalyst({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  // =====================================================
  // LOAD SAVED PROGRESS
  // =====================================================

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const response = await fetch(
          "http://localhost:5000/learning-progress",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCompletedLessons(data.completedTopics || []);
        }
      } catch (error) {
        console.error(
          "Error loading Data Analyst progress:",
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
    const completedCount = completedLessons.filter((id) =>
      id.startsWith(`${topic.namespace}-`)
    ).length;

    if (topic.lessons === 0) return 0;

    return Math.round(
      (completedCount / topic.lessons) * 100
    );
  };

  // =====================================================
  // OVERALL COMPLETED LESSONS
  // =====================================================

  const totalCompletedLessons = topics.reduce(
    (total, topic) => {
      const completedCount = completedLessons.filter((id) =>
        id.startsWith(`${topic.namespace}-`)
      ).length;

      return total + completedCount;
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
          (totalCompletedLessons / totalLessons) * 100
        );

  // =====================================================
  // OPEN TOPIC
  // =====================================================

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  // =====================================================
  // CLOSE TOPIC
  // =====================================================

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  // =====================================================
  // SELECTED TOPIC PAGE
  // =====================================================

  if (selectedTopic) {
    if (selectedTopic.component) {
      const TopicComponent = selectedTopic.component;

      return (
        <TopicComponent
          goBack={closeTopic}
        />
      );
    }

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={closeTopic}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              cursor: "pointer",
              fontSize: "15px",
              marginBottom: "25px",
            }}
          >
            ← Back to Data Analyst Roadmap
          </button>

          <div
            style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "35px",
              textAlign: "center",
              boxShadow:
                "0 4px 12px rgba(37, 99, 235, 0.08)",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "10px",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
              }}
            >
              This topic is currently being built.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // DATA ANALYST ROADMAP PAGE
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        boxSizing: "border-box",
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
            cursor: "pointer",
            fontSize: "15px",
            marginBottom: "25px",
          }}
        >
          ← Back to Career Roadmap
        </button>

        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "10px",
            }}
          >
            📊 Data Analyst Roadmap
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Follow these topics step by step to build
            your Data Analyst skills.
          </p>
        </div>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "white",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 12px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <strong style={{ color: "#1e3a8a" }}>
              Overall Progress
            </strong>

            <span style={{ color: "#64748b" }}>
              {totalCompletedLessons} / {totalLessons} Lessons
            </span>
          </div>

          <div
            style={{
              width: "100%",
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
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              margin: "10px 0 0",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Overall Progress: {overallProgress}%
          </p>
        </div>

        {/* TOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {topics.map((topic, index) => {
            const progress = getTopicProgress(topic);

            const completedCount = completedLessons.filter(
              (id) =>
                id.startsWith(`${topic.namespace}-`)
            ).length;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "25px",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  Topic {index + 1}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    minHeight: "52px",
                    margin: "0 0 15px 0",
                  }}
                >
                  {topic.icon} {topic.title}
                </h3>

                <div
                  style={{
                    color: "#64748b",
                    marginBottom: "12px",
                  }}
                >
                  📚 {topic.lessons} Lessons
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#dbeafe",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#2563eb",
                      transition:
                        "width 0.3s ease",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    {completedCount} / {topic.lessons} completed
                  </span>

                  <span
                    style={{
                      color: "#1e3a8a",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {progress}%
                  </span>
                </div>

                <button
                  onClick={() => openTopic(topic)}
                  style={{
                    width: "100%",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "11px 15px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {progress === 100
                    ? "Review Topic"
                    : "▶ Open Topic"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DataAnalyst;