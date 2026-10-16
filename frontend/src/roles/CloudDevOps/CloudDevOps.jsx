import React, { useEffect, useState } from "react";

import useLearningProgress from "../../hooks/useLearningProgress";

import CloudComputingFundamentals from "./Cloud-Computing-Fundamentals/Cloud-Computing-Fundamentals";
import LinuxSystemAdministration from "./Linux-System-Administration/Linux-System-Administration";
import NetworkingFundamentals from "./Networking-Fundamentals/Networking-Fundamentals";
import AWSCloudPlatform from "./AWS-Cloud-Platform/AWS-Cloud-Platform";
import DockerContainers from "./Docker-Containers/Docker-Containers";
import Kubernetes from "./Kubernetes/Kubernetes";
import GitCICD from "./Git-CI-CD/Git-CI-CD";
import InfrastructureAsCode from "./Infrastructure-as-Code/Infrastructure-as-Code";
import CloudSecurity from "./Cloud-Security/Cloud-Security";
import MonitoringLogging from "./Monitoring-Logging/Monitoring-Logging";
import DevOpsCloudTools from "./DevOps-Cloud-Tools/DevOps-Cloud-Tools";
import CloudDeploymentArchitecture from "./Cloud-Deployment-Architecture/Cloud-Deployment-Architecture";
import DevOpsProjects from "./DevOps-Projects/DevOps-Projects";
import CloudDevOpsCapstone from "./Cloud-DevOps-Capstone/Cloud-DevOps-Capstone";

const topics = [
  {
    id: "cloud-computing-fundamentals",
    title: "Cloud Computing Fundamentals",
    icon: "☁️",
    lessons: 8,
    namespace: "clouddevops-cloud-computing-fundamentals",
    component: CloudComputingFundamentals,
  },

  {
    id: "linux-system-administration",
    title: "Linux & System Administration",
    icon: "🐧",
    lessons: 7,
    namespace: "clouddevops-linux-system-administration",
    component: LinuxSystemAdministration,
  },

  {
    id: "networking-fundamentals",
    title: "Networking Fundamentals",
    icon: "🌐",
    lessons: 8,
    namespace: "clouddevops-networking-fundamentals",
    component: NetworkingFundamentals,
  },

  {
    id: "aws-cloud-platform",
    title: "AWS / Cloud Platform",
    icon: "☁️",
    lessons: 9,
    namespace: "clouddevops-aws-cloud-platform",
    component: AWSCloudPlatform,
  },

  {
    id: "docker-containers",
    title: "Docker & Containers",
    icon: "🐳",
    lessons: 8,
    namespace: "clouddevops-docker-containers",
    component: DockerContainers,
  },

  {
    id: "kubernetes",
    title: "Kubernetes",
    icon: "⚙️",
    lessons: 8,
    namespace: "clouddevops-kubernetes",
    component: Kubernetes,
  },

  {
    id: "git-ci-cd",
    title: "Git & CI/CD",
    icon: "🔄",
    lessons: 8,
    namespace: "clouddevops-git-ci-cd",
    component: GitCICD,
  },

  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    icon: "🏗️",
    lessons: 7,
    namespace: "clouddevops-infrastructure-as-code",
    component: InfrastructureAsCode,
  },

  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: "🔐",
    lessons: 7,
    namespace: "clouddevops-cloud-security",
    component: CloudSecurity,
  },

  {
    id: "monitoring-logging",
    title: "Monitoring & Logging",
    icon: "📊",
    lessons: 7,
    namespace: "clouddevops-monitoring-logging",
    component: MonitoringLogging,
  },

  {
    id: "devops-cloud-tools",
    title: "DevOps & Cloud Tools",
    icon: "🛠️",
    lessons: 7,
    namespace: "clouddevops-devops-cloud-tools",
    component: DevOpsCloudTools,
  },

  {
    id: "cloud-deployment-architecture",
    title: "Cloud Deployment & Architecture",
    icon: "🏢",
    lessons: 8,
    namespace: "clouddevops-cloud-deployment-architecture",
    component: CloudDeploymentArchitecture,
  },

  {
    id: "devops-projects",
    title: "DevOps Projects",
    icon: "💻",
    lessons: 7,
    namespace: "clouddevops-devops-projects",
    component: DevOpsProjects,
  },

  {
    id: "cloud-devops-capstone",
    title: "Cloud / DevOps Capstone Project",
    icon: "🏆",
    lessons: 6,
    namespace: "clouddevops-cloud-devops-capstone",
    component: CloudDevOpsCapstone,
  },
];

const CloudDevOps = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  // =====================================================
  // LOAD SAVED PROGRESS
  // =====================================================

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

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
          "Error loading Cloud / DevOps progress:",
          error
        );
      }
    };

    fetchProgress();

  }, [selectedTopic]);

  // =====================================================
  // TOTAL LESSONS
  // =====================================================

  const totalLessons = topics.reduce(
    (total, topic) => total + topic.lessons,
    0
  );

  // =====================================================
  // TOPIC PROGRESS
  // =====================================================

  const getTopicProgress = (topic) => {
    const completedCount = completedTopics.filter((id) =>
      id.startsWith(`${topic.namespace}-`)
    ).length;

    return Math.min(
      100,
      Math.round(
        (completedCount / topic.lessons) * 100
      )
    );
  };

  // =====================================================
  // COMPLETED LESSONS
  // =====================================================

  const completedLessons = topics.reduce(
    (total, topic) => {
      const completedCount = completedTopics.filter((id) =>
        id.startsWith(`${topic.namespace}-`)
      ).length;

      return (
        total +
        Math.min(completedCount, topic.lessons)
      );
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
  // OPEN SELECTED TOPIC
  // =====================================================

  if (selectedTopic) {
    const TopicComponent = selectedTopic.component;

    if (TopicComponent) {
      return (
        <TopicComponent
          goBack={closeTopic}
        />
      );
    }
  }

  // =====================================================
  // MAIN ROADMAP
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >

        {/* BACK TO CAREER ROADMAP */}

        <button
          onClick={goBack}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          ← Back to Career Roadmap
        </button>

        {/* HEADER */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1d4ed8",
            }}
          >
            ☁️ Cloud / DevOps Engineer
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Learn cloud computing, infrastructure,
            automation, deployment, security,
            monitoring, and DevOps practices through
            a structured career roadmap.
          </p>
        </div>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "25px",
            marginBottom: "30px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            <span>Overall Progress</span>

            <span>
              {overallProgress}%
            </span>
          </div>

          <div
            style={{
              height: "10px",
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
                transition:
                  "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>

        {/* TOPIC HEADING */}

        <h2
          style={{
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          📚 Cloud / DevOps Learning Roadmap
        </h2>

        {/* TOPIC CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {topics.map((topic, index) => {
            const progress =
              getTopicProgress(topic);

            const completedCount =
              Math.min(
                completedTopics.filter((id) =>
                  id.startsWith(
                    `${topic.namespace}-`
                  )
                ).length,
                topic.lessons
              );

            return (
              <div
                key={topic.id}
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow:
                    "0 3px 12px rgba(0,0,0,0.05)",
                }}
              >

                {/* TOPIC NUMBER */}

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  TOPIC {index + 1}
                </div>

                {/* TOPIC TITLE */}

                <h3
                  style={{
                    color: "#1e3a8a",
                    margin: "0 0 12px",
                    fontSize: "19px",
                  }}
                >
                  {topic.icon} {topic.title}
                </h3>

                {/* LESSON COUNT */}

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "15px",
                  }}
                >
                  {topic.lessons} lessons
                </p>

                {/* PROGRESS LABEL */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                >
                  <span>Progress</span>

                  <span>
                    {completedCount} / {topic.lessons}
                  </span>
                </div>

                {/* PROGRESS BAR */}

                <div
                  style={{
                    height: "7px",
                    background: "#e5e7eb",
                    borderRadius: "7px",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#60a5fa",
                      borderRadius: "7px",
                      transition:
                        "width 0.3s ease",
                    }}
                  />
                </div>

                {/* PERCENTAGE */}

                <p
                  style={{
                    margin: "0 0 18px",
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  {progress}% complete
                </p>

                {/* OPEN TOPIC */}

                <button
                  onClick={() =>
                    openTopic(topic)
                  }
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
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

        {/* BACK TO CAREER ROLES */}

        <div
          style={{
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <button
            onClick={goBack}
            style={{
              padding: "11px 22px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            ← Back to Career Roles
          </button>
        </div>

      </div>
    </div>
  );
};

export default CloudDevOps;