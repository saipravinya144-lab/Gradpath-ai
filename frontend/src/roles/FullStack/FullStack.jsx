import React, { useEffect, useState } from "react";

import HTML from "./HTML/HTML";
import CSS from "./CSS/CSS";
import GitGitHub from "./GitGitHub/GitGitHub";
import ReactRoadmap from "./React/React";
import FrontendTools from "./FrontendTools/FrontendTools";
import Backend from "./Backend/Backend";
import Databases from "./Databases/Databases";
import APIs from "./APIs/APIs";
import Authentication from "./Authentication/Authentication";
import Security from "./Security/Security";
import Deployment from "./Deployment/Deployment";
import Projects from "./Projects/Projects";

const topics = [
  {
    id: "html",
    title: "HTML",
    icon: "🌐",
    subtopics: 7,
  },
  {
    id: "css",
    title: "CSS",
    icon: "🎨",
    subtopics: 11,
  },
  {
    id: "gitgithub",
    title: "Git & GitHub",
    icon: "🐙",
    subtopics: 11,
  },
  {
    id: "react",
    title: "React",
    icon: "⚛️",
    subtopics: 16,
  },
  {
    id: "frontendtools",
    title: "Frontend Tools",
    icon: "🛠️",
    subtopics: 5,
  },
  {
    id: "backend",
    title: "Backend",
    icon: "🖥️",
    subtopics: 12,
  },
  {
    id: "databases",
    title: "Databases",
    icon: "🗄️",
    subtopics: 11,
  },
  {
    id: "apis",
    title: "APIs",
    icon: "🔗",
    subtopics: 9,
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: "🔐",
    subtopics: 9,
  },
  {
    id: "security",
    title: "Security",
    icon: "🛡️",
    subtopics: 10,
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: "🚀",
    subtopics: 9,
  },
  {
    id: "projects",
    title: "Full Stack Projects",
    icon: "💻",
    subtopics: 7,
  },
];

function FullStack({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  // =====================================================
  // LOAD PERSISTENT PROGRESS
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
          "Error loading Full Stack progress:",
          error
        );
      }
    };

    fetchProgress();
  }, []);

  // =====================================================
  // CALCULATE TOPIC PROGRESS
  // =====================================================

  const getTopicProgress = (topic) => {
    const namespace = `fullstack-${topic.id}`;

    const completedCount = completedTopics.filter((id) =>
      id.startsWith(`${namespace}-`)
    ).length;

    if (topic.subtopics === 0) {
      return 0;
    }

    return Math.round(
      (completedCount / topic.subtopics) * 100
    );
  };

  // =====================================================
  // OVERALL PROGRESS
  // =====================================================

  const totalSubtopics = topics.reduce(
    (total, topic) => total + topic.subtopics,
    0
  );

  const completedSubtopics = topics.reduce(
    (total, topic) => {
      const namespace = `fullstack-${topic.id}`;

      const completedCount = completedTopics.filter((id) =>
        id.startsWith(`${namespace}-`)
      ).length;

      return total + completedCount;
    },
    0
  );

  const overallProgress =
    totalSubtopics === 0
      ? 0
      : Math.round(
          (completedSubtopics / totalSubtopics) * 100
        );

  // =====================================================
  // TOPIC BACK HANDLER
  // =====================================================

  const goBackToFullStackRoadmap = () => {
    setSelectedTopic(null);
  };

  // =====================================================
  // HTML TOPIC
  // =====================================================

  if (selectedTopic === "html") {
    return (
      <HTML
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // CSS TOPIC
  // =====================================================

  if (selectedTopic === "css") {
    return (
      <CSS
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // GIT & GITHUB
  // =====================================================

  if (selectedTopic === "gitgithub") {
    return (
      <GitGitHub
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // REACT
  // =====================================================

  if (selectedTopic === "react") {
    return (
      <ReactRoadmap
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // FRONTEND TOOLS
  // =====================================================

  if (selectedTopic === "frontendtools") {
    return (
      <FrontendTools
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // BACKEND
  // =====================================================

  if (selectedTopic === "backend") {
    return (
      <Backend
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // DATABASES
  // =====================================================

  if (selectedTopic === "databases") {
    return (
      <Databases
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // APIS
  // =====================================================

  if (selectedTopic === "apis") {
    return (
      <APIs
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // AUTHENTICATION
  // =====================================================

  if (selectedTopic === "authentication") {
    return (
      <Authentication
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // SECURITY
  // =====================================================

  if (selectedTopic === "security") {
    return (
      <Security
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // DEPLOYMENT
  // =====================================================

  if (selectedTopic === "deployment") {
    return (
      <Deployment
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // PROJECTS
  // =====================================================

  if (selectedTopic === "projects") {
    return (
      <Projects
        goBack={goBackToFullStackRoadmap}
      />
    );
  }

  // =====================================================
  // FULL STACK ROADMAP PAGE
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

        {/* ================================================= */}
        {/* BACK TO CAREER ROADMAP */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={() => {
            console.log("Full Stack Back clicked");

            if (typeof goBack === "function") {
              goBack();
            } else {
              console.error(
                "FullStack: goBack function was not provided"
              );
            }
          }}
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

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          💻 Full Stack Developer
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn frontend, backend, databases, APIs, security,
          deployment and real-world full stack development.
        </p>

        {/* ================================================= */}
        {/* OVERALL PROGRESS */}
        {/* ================================================= */}

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
        </div>

        {/* ================================================= */}
        {/* TOPIC CARDS */}
        {/* ================================================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {topics.map((topic, index) => {
            const progress =
              getTopicProgress(topic);

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "180px",
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
                      margin: "0 0 4px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.3",
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
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedTopic(topic.id)
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
                  Open Topic →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default FullStack;