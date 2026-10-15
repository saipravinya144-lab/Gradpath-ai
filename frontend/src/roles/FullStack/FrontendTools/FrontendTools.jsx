import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "npm",
    title: "NPM & Package Management",
    icon: "📦",
    lesson: {
      overview:
        "NPM (Node Package Manager) is used to install, manage, update, and remove JavaScript packages in frontend projects.",
      sections: [
        {
          title: "What is NPM?",
          points: [
            "NPM is the default package manager for Node.js.",
            "It allows developers to install reusable JavaScript libraries and tools.",
            "Packages are usually installed into the node_modules folder.",
            "package.json stores project information and dependencies.",
          ],
        },
        {
          title: "Important NPM Commands",
          points: [
            "npm init - creates a new package.json file.",
            "npm install - installs project dependencies.",
            "npm install package-name - installs a package.",
            "npm install -D package-name - installs a development dependency.",
            "npm uninstall package-name - removes a package.",
            "npm update - updates installed packages.",
            "npm run command - executes a script defined in package.json.",
          ],
        },
        {
          title: "package.json",
          points: [
            "package.json describes a JavaScript project.",
            "dependencies contains packages required by the application.",
            "devDependencies contains tools mainly required during development.",
            "scripts contains commands such as dev, build, and test.",
          ],
        },
        {
          title: "package-lock.json & node_modules",
          points: [
            "package-lock.json records exact dependency versions.",
            "node_modules contains installed packages.",
            "node_modules should normally not be committed to Git.",
            "Another developer can run npm install to recreate node_modules.",
          ],
        },
      ],
      mistakes: [
        "Do not manually edit files inside node_modules.",
        "Do not commit node_modules to Git.",
        "Do not randomly delete package-lock.json when dependency problems occur.",
        "Check package.json before installing duplicate packages.",
      ],
      quiz: [
        {
          question: "Which file stores project dependencies?",
          options: ["index.html", "package.json", "vite.config.js", "README.md"],
          answer: "package.json",
        },
        {
          question: "Which command installs a package?",
          options: ["npm add-package", "npm install", "npm package", "npm get"],
          answer: "npm install",
        },
        {
          question: "Where are installed NPM packages normally stored?",
          options: ["src", "public", "node_modules", "assets"],
          answer: "node_modules",
        },
      ],
    },
  },

  {
    id: "vite",
    title: "Vite",
    icon: "⚡",
    lesson: {
      overview:
        "Vite is a modern frontend build tool that provides a fast development server and production build system.",
      sections: [
        {
          title: "What is Vite?",
          points: [
            "Vite provides a fast development environment for modern frontend applications.",
            "It works especially well with frameworks such as React.",
            "It provides fast startup and quick updates during development.",
            "Vite can create optimized production builds.",
          ],
        },
        {
          title: "Common Vite Commands",
          points: [
            "npm create vite@latest creates a new Vite project.",
            "npm install installs project dependencies.",
            "npm run dev starts the development server.",
            "npm run build creates a production build.",
            "npm run preview previews the production build locally.",
          ],
        },
        {
          title: "Vite Project Structure",
          points: [
            "src contains application source code.",
            "public contains static assets.",
            "package.json contains project dependencies and scripts.",
            "vite.config.js or vite.config.ts contains Vite configuration.",
            "index.html is the main HTML entry point.",
          ],
        },
        {
          title: "Development vs Production",
          points: [
            "The development server is designed for fast local development.",
            "The production build creates optimized files for deployment.",
            "Run npm run build before deploying a Vite application.",
            "The generated production files are commonly placed in the dist folder.",
          ],
        },
      ],
      mistakes: [
        "Do not assume npm run dev creates the production build.",
        "Do not edit generated dist files instead of changing your source code.",
        "Check the terminal for Vite errors when the application does not start.",
        "Make sure dependencies are installed before running the project.",
      ],
      quiz: [
        {
          question: "Which command normally starts a Vite development server?",
          options: [
            "npm start-vite",
            "npm run dev",
            "vite-start",
            "npm development",
          ],
          answer: "npm run dev",
        },
        {
          question: "Which command creates a production build?",
          options: [
            "npm run build",
            "npm run production",
            "npm build-prod",
            "npm compile",
          ],
          answer: "npm run build",
        },
        {
          question: "What is Vite primarily used for?",
          options: [
            "Database management",
            "Frontend development and building",
            "Writing SQL queries",
            "Managing operating systems",
          ],
          answer: "Frontend development and building",
        },
      ],
    },
  },

  {
    id: "devtools",
    title: "Browser DevTools",
    icon: "🔧",
    lesson: {
      overview:
        "Browser DevTools help developers inspect, debug, test, and understand web applications directly inside the browser.",
      sections: [
        {
          title: "Opening DevTools",
          points: [
            "DevTools can usually be opened with F12 or Ctrl + Shift + I.",
            "You can also right-click a webpage and select Inspect.",
            "DevTools provides several panels for different debugging tasks.",
          ],
        },
        {
          title: "Elements Panel",
          points: [
            "The Elements panel shows the HTML structure of a webpage.",
            "You can inspect individual elements.",
            "You can temporarily change HTML and CSS directly in the browser.",
            "These temporary changes do not modify your source files.",
          ],
        },
        {
          title: "Console",
          points: [
            "The Console displays JavaScript errors and warnings.",
            "console.log() is useful for debugging values.",
            "Console errors can help identify where application problems occur.",
            "Always read the complete error message before changing code.",
          ],
        },
        {
          title: "Network Panel",
          points: [
            "The Network panel shows requests made by the browser.",
            "It can help debug API calls.",
            "You can inspect request URLs, methods, status codes, headers, and responses.",
            "A 404 usually means a requested resource was not found.",
            "A 500 usually indicates a server-side error.",
          ],
        },
        {
          title: "Responsive Testing",
          points: [
            "Device emulation allows you to test different screen sizes.",
            "It is useful for checking responsive layouts.",
            "Test both desktop and mobile layouts before deployment.",
          ],
        },
      ],
      mistakes: [
        "Do not assume a Console error is unrelated to your code.",
        "Remember that changes made in the Elements panel are temporary.",
        "When an API fails, inspect the Network tab instead of only looking at the UI.",
        "Check the exact error message and file/line number before debugging.",
      ],
      quiz: [
        {
          question: "Which DevTools panel is mainly used to inspect HTML and CSS?",
          options: ["Network", "Elements", "Console", "Sources"],
          answer: "Elements",
        },
        {
          question: "Which panel helps inspect API requests?",
          options: ["Network", "Elements", "Application", "Styles"],
          answer: "Network",
        },
        {
          question: "Where would you commonly see JavaScript errors?",
          options: ["Console", "Network", "Elements", "Layout"],
          answer: "Console",
        },
      ],
    },
  },

  {
    id: "eslint",
    title: "ESLint & Code Formatting",
    icon: "🧹",
    lesson: {
      overview:
        "ESLint and code-formatting tools help maintain clean, consistent, and reliable frontend code.",
      sections: [
        {
          title: "What is ESLint?",
          points: [
            "ESLint is a tool for identifying problems in JavaScript and related code.",
            "It can detect certain bugs, suspicious patterns, and style issues.",
            "ESLint rules can be customized for a project.",
            "Modern React projects commonly use ESLint during development.",
          ],
        },
        {
          title: "What is Code Formatting?",
          points: [
            "Code formatting makes source code consistent and readable.",
            "Prettier is a popular code formatter.",
            "Formatting tools can automatically adjust indentation, spacing, and line breaks.",
            "Consistent formatting makes collaboration easier.",
          ],
        },
        {
          title: "Linting vs Formatting",
          points: [
            "Linting focuses on code quality and potential problems.",
            "Formatting focuses mainly on how code is written and displayed.",
            "A project can use both ESLint and a formatter.",
            "Linting and formatting solve different but complementary problems.",
          ],
        },
        {
          title: "Why They Matter",
          points: [
            "They reduce inconsistent coding styles.",
            "They help identify mistakes earlier.",
            "They make code reviews easier.",
            "They help teams maintain common coding standards.",
          ],
        },
      ],
      mistakes: [
        "Do not blindly disable lint rules just to remove warnings.",
        "Do not confuse formatting problems with actual application bugs.",
        "Keep the project's ESLint and formatting configuration consistent.",
        "Fix the underlying problem when a lint rule identifies a genuine issue.",
      ],
      quiz: [
        {
          question: "What is ESLint mainly used for?",
          options: [
            "Database design",
            "Identifying JavaScript code problems",
            "Image editing",
            "Hosting websites",
          ],
          answer: "Identifying JavaScript code problems",
        },
        {
          question: "What is a popular JavaScript code formatter?",
          options: ["Prettier", "MongoDB", "Postman", "Docker"],
          answer: "Prettier",
        },
        {
          question: "What is the main purpose of formatting?",
          options: [
            "Improve code consistency and readability",
            "Create databases",
            "Deploy servers",
            "Increase internet speed",
          ],
          answer: "Improve code consistency and readability",
        },
      ],
    },
  },

  {
    id: "workflow",
    title: "Frontend Development Workflow",
    icon: "🔄",
    lesson: {
      overview:
        "A good frontend workflow helps developers move from planning to coding, testing, debugging, version control, and deployment in an organized way.",
      sections: [
        {
          title: "1. Plan",
          points: [
            "Understand the feature or requirement before coding.",
            "Break large requirements into smaller tasks.",
            "Decide what components and data are required.",
            "Think about possible edge cases before implementation.",
          ],
        },
        {
          title: "2. Develop",
          points: [
            "Create or update the required components.",
            "Keep components focused and understandable.",
            "Reuse existing components when appropriate.",
            "Use meaningful variable, function, and component names.",
          ],
        },
        {
          title: "3. Test",
          points: [
            "Run the application and test the feature manually.",
            "Check different user interactions.",
            "Test both normal and unexpected inputs.",
            "Check the browser Console for errors.",
            "Test responsive behavior on different screen sizes.",
          ],
        },
        {
          title: "4. Debug",
          points: [
            "Read the error message carefully.",
            "Identify the file and line where the problem occurs.",
            "Use console.log when you need to inspect values.",
            "Use Browser DevTools to inspect DOM elements and network requests.",
            "Fix one problem at a time and retest.",
          ],
        },
        {
          title: "5. Version Control",
          points: [
            "Use Git to track changes.",
            "Make commits that represent meaningful changes.",
            "Use descriptive commit messages.",
            "Push completed work to a remote repository when appropriate.",
          ],
        },
        {
          title: "6. Build & Deploy",
          points: [
            "Create a production build before deployment.",
            "Check that the production build works correctly.",
            "Deploy the application using the chosen hosting platform.",
            "After deployment, test the live application again.",
          ],
        },
      ],
      mistakes: [
        "Do not start coding without understanding the requirement.",
        "Do not make huge changes without testing them incrementally.",
        "Do not ignore browser Console errors.",
        "Do not commit unfinished or broken code as if it were complete.",
        "Always test important functionality after deployment.",
      ],
      quiz: [
        {
          question: "What should generally happen before writing a large feature?",
          options: [
            "Deploy immediately",
            "Plan and understand the requirement",
            "Delete the repository",
            "Remove all dependencies",
          ],
          answer: "Plan and understand the requirement",
        },
        {
          question: "Which tool is used for version control?",
          options: ["Git", "Vite", "ESLint", "Chrome"],
          answer: "Git",
        },
        {
          question: "What should you do after deploying an important feature?",
          options: [
            "Never check it again",
            "Delete the source code",
            "Test the live application",
            "Remove Git",
          ],
          answer: "Test the live application",
        },
      ],
    },
  },
];

function FrontendTools({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-frontendtools", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const markComplete = (id) => {
    saveProgress(id);
  };

  const handleAnswer = (topicId, questionIndex, answer) => {
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

    const score = calculateQuizScore(topic);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
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

  const calculateQuizScore = (topic) => {
    return topic.lesson.quiz.reduce((score, question, index) => {
      const selectedAnswer =
        quizAnswers[`${topic.id}-${index}`];

      return score + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);
  };

  const goToPreviousTopic = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(subtopics[selectedIndex - 1].id);
    }
  };

  const goToNextTopic = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(subtopics[selectedIndex + 1].id);
    }
  };

  if (selectedTopic) {
    const topic = selectedTopic;

    const score = quizSubmitted[topic.id]
      ? calculateQuizScore(topic)
      : 0;

    const isFirstTopic = selectedIndex === 0;
    const isLastTopic = selectedIndex === subtopics.length - 1;

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
            ← Back to Frontend Tools
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
            {/* TOPIC HEADER */}

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
                Topic {selectedIndex + 1} of {subtopics.length}
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

            {/* LESSON SECTIONS */}

            {topic.lesson.sections.map((section, index) => (
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
            ))}

            {/* COMMON MISTAKES */}

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
                {topic.lesson.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>

            {/* QUIZ */}

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

              {topic.lesson.quiz.map((question, questionIndex) => {
                const selectedAnswer =
                  quizAnswers[`${topic.id}-${questionIndex}`];

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
                      {questionIndex + 1}. {question.question}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {question.options.map((option) => (
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
                              selectedAnswer === option
                                ? "#dbeafe"
                                : "white",
                            border: "1px solid #dbeafe",
                          }}
                        >
                          <input
                            type="radio"
                            name={`${topic.id}-${questionIndex}`}
                            value={option}
                            checked={selectedAnswer === option}
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
                            selectedAnswer === question.answer
                              ? "#15803d"
                              : "#dc2626",
                        }}
                      >
                        {selectedAnswer === question.answer
                          ? "✅ Correct!"
                          : `❌ Incorrect. Correct answer: ${question.answer}`}
                      </p>
                    )}
                  </div>
                );
              })}

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
                  🎯 Your Score: {score} / {topic.lesson.quiz.length}
                </div>
              )}
            </div>

            {/* COMPLETE TOPIC */}

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
                  ? "✅ Topic Completed"
                  : "✓ Mark Topic Complete"}
              </button>
            </div>

            {/* PREVIOUS / BACK / NEXT NAVIGATION */}

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
                onClick={goToPreviousTopic}
                disabled={isFirstTopic}
                style={{
                  background: isFirstTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isFirstTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isFirstTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                ← Previous Topic
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
                onClick={goToNextTopic}
                disabled={isLastTopic}
                style={{
                  background: isLastTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isLastTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isLastTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                Next Topic →
              </button>
            </div>

            {/* TOPIC PROGRESS */}

            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#f8fbff",
                borderRadius: "10px",
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              {completed.includes(topic.id)
                ? "✅ You have completed this topic."
                : "📖 Complete this topic when you are ready to continue."}
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
          🛠️ Frontend Tools
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn the essential tools and workflow used in modern
          frontend development.
        </p>

        {/* OVERALL PROGRESS */}

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
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
            {completedCount} of {subtopics.length} topics completed
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
          {subtopics.map((topic, index) => {
            const progress = completed.includes(topic.id) ? 100 : 0;

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
                    {index + 1}. {topic.icon} {topic.title}
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
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSubtopic(topic.id)}
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

export default FrontendTools;