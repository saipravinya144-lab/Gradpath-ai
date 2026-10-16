import React, { useEffect, useState } from "react";

import AndroidKotlinFoundations from "./AndroidKotlinFoundations/AndroidKotlinFoundations";
import AndroidStudioProjectStructure from "./Android-Projects/Android-Projects";
import UIDesignLayouts from "./UI-Design-Layouts/UI-Design-Layouts";
import ActivitiesFragments from "./Activities-Fragments/Activities-Fragments";
import UserInputEventHandling from "./UserInput-EventHandling/UserInput-EventHandling";
import AndroidComponents from "./AndroidComponents/AndroidComponents";
import NavigationAppArchitecture from "./Navigation-App-Architecture/Navigation-App-Architecture";
import DataStorage from "./Data-Storage/Data-Storage";
import NetworkingAPIs from "./Networking-APIs/Networking-APIs";
import Firebase from "./Firebase/Firebase";
import NotificationsBackgroundTasks from "./Notifications-Background-Tasks/Notifications-Background-Tasks";
import PermissionsDeviceFeatures from "./Permissions-Device-Features/Permissions-Device-Features";
import TestingDebugging from "./Testing-Debugging/Testing-Debugging";
import AndroidProjects from "./Android-Projects/Android-Projects";

function Android({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const topics = [
    {
      id: "android-kotlin-foundations",
      title: "Android & Kotlin Foundations",
      icon: "📱",
      lessons: 8,
      namespace: "android-androidkotlinfoundations",
      component: AndroidKotlinFoundations,
    },
    {
      id: "android-studio",
      title: "Android Studio & Project Structure",
      icon: "🛠️",
      lessons: 6,
      namespace: "android-android-studio",
      component: AndroidStudioProjectStructure,
    },
    {
      id: "ui-design-layouts",
      title: "UI Design & Layouts",
      icon: "🎨",
      lessons: 8,
      namespace: "android-ui-design-layouts",
      component: UIDesignLayouts,
    },
    {
      id: "activities-fragments",
      title: "Activities & Fragments",
      icon: "📄",
      lessons: 7,
      namespace: "android-activities-fragments",
      component: ActivitiesFragments,
    },
    {
      id: "user-input-events",
      title: "User Input & Event Handling",
      icon: "👆",
      lessons: 6,
      namespace: "android-user-input-events",
      component: UserInputEventHandling,
    },
    {
      id: "android-components",
      title: "Android Components",
      icon: "🧩",
      lessons: 7,
      namespace: "android-android-components",
      component: AndroidComponents,
    },
    {
      id: "navigation-architecture",
      title: "Navigation & App Architecture",
      icon: "🧭",
      lessons: 8,
      namespace: "android-navigation-architecture",
      component: NavigationAppArchitecture,
    },
    {
      id: "data-storage",
      title: "Data Storage",
      icon: "💾",
      lessons: 7,
      namespace: "android-data-storage",
      component: DataStorage,
    },
    {
      id: "networking-apis",
      title: "Networking & APIs",
      icon: "🌐",
      lessons: 7,
      namespace: "android-networking-apis",
      component: NetworkingAPIs,
    },
    {
      id: "firebase",
      title: "Firebase",
      icon: "🔥",
      lessons: 7,
      namespace: "android-firebase",
      component: Firebase,
    },
    {
      id: "notifications-background",
      title: "Notifications & Background Tasks",
      icon: "🔔",
      lessons: 6,
      namespace: "android-notifications-background",
      component: NotificationsBackgroundTasks,
    },
    {
      id: "permissions-device-features",
      title: "Permissions & Device Features",
      icon: "🔐",
      lessons: 6,
      namespace: "android-permissions-device-features",
      component: PermissionsDeviceFeatures,
    },
    {
      id: "testing-debugging",
      title: "Testing & Debugging",
      icon: "🧪",
      lessons: 6,
      namespace: "android-testing-debugging",
      component: TestingDebugging,
    },
    {
      id: "android-projects",
      title: "Android Projects",
      icon: "🚀",
      lessons: 6,
      namespace: "android-android-projects",
      component: AndroidProjects,
    },
  ];

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
          "Error loading Android learning progress:",
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
  // COMPLETED LESSONS
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
  // OPEN TOPIC COMPONENT
  // =====================================================

  if (selectedTopic) {
    if (selectedTopic.component) {
      const TopicComponent = selectedTopic.component;

      return (
        <TopicComponent goBack={closeTopic} />
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
            ← Back to Android Developer Roadmap
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
  // ANDROID ROADMAP PAGE
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

        {/* HEADING */}

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
            📱 Android Developer Roadmap
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Follow these topics step by step to build your Android
            development skills.
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
              {completedLessons} / {totalLessons} Lessons
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

          <div
            style={{
              textAlign: "right",
              color: "#64748b",
              fontSize: "14px",
              marginTop: "8px",
            }}
          >
            Overall Progress: {overallProgress}%
          </div>
        </div>

        {/* TOPICS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {topics.map((topic, index) => {
            const progress = getTopicProgress(topic);

            const completedCount = Math.min(
              completedTopics.filter((id) =>
                id.startsWith(`${topic.namespace}-`)
              ).length,
              topic.lessons
            );

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
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#2563eb",
                      borderRadius: "8px",
                      transition: "width 0.3s ease",
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
                      color: "#2563eb",
                      fontSize: "14px",
                      fontWeight: "600",
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
                    ? "✓ Review Topic"
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

export default Android;