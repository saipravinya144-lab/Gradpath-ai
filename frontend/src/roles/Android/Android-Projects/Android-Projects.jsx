import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const AndroidStudioProjectStructure = ({ goBack }) => {
  const subtopics = [
    {
      id: "intro-android-studio",
      title: "Introduction to Android Studio",
      lesson: {
        overview:
          "Android Studio is the official integrated development environment (IDE) for Android application development. It provides tools for writing code, designing interfaces, managing projects, testing applications, and debugging problems.",
        sections: [
          {
            title: "What is Android Studio?",
            content:
              "Android Studio is an IDE based on IntelliJ IDEA and designed specifically for Android development. It provides a complete environment where developers can create, edit, build, run, and debug Android applications.",
          },
          {
            title: "Important Features",
            content:
              "Android Studio provides a code editor, visual layout tools, emulator support, debugging tools, Gradle integration, project management, and tools for inspecting application performance.",
          },
          {
            title: "Why Use Android Studio?",
            content:
              "Android Studio brings the major tools required for Android development into one environment. It makes it easier to manage Android projects, write Kotlin code, design interfaces, test applications, and identify errors.",
          },
        ],
        mistakes: [
          "Thinking Android Studio is only a code editor.",
          "Ignoring the built-in emulator and debugging tools.",
          "Confusing Android Studio with the Android operating system.",
        ],
        quiz: [
          {
            question: "What is Android Studio?",
            options: [
              "An IDE for Android development",
              "An Android operating system",
              "A programming language",
              "A database system",
            ],
            answer: "An IDE for Android development",
          },
          {
            question:
              "Which language is commonly used for modern Android development?",
            options: ["Kotlin", "HTML", "SQL", "CSS"],
            answer: "Kotlin",
          },
          {
            question: "Which tool can be used to test Android apps without a physical phone?",
            options: ["Android Emulator", "Git", "MySQL", "Photoshop"],
            answer: "Android Emulator",
          },
        ],
      },
    },

    {
      id: "creating-project",
      title: "Creating an Android Project",
      lesson: {
        overview:
          "Creating an Android project involves selecting a project template, configuring the project name and package, choosing a programming language, and setting the minimum Android version.",
        sections: [
          {
            title: "Starting a New Project",
            content:
              "In Android Studio, a new project can be created using the New Project option. Android Studio provides different templates that help start applications with common structures.",
          },
          {
            title: "Project Configuration",
            content:
              "During project creation, you typically provide the application name, package name, save location, programming language, and minimum SDK version. These settings define important characteristics of the application.",
          },
          {
            title: "Minimum SDK",
            content:
              "The minimum SDK determines the oldest Android version that the application is intended to support. Choosing it involves balancing compatibility with access to newer Android features.",
          },
        ],
        mistakes: [
          "Using an unclear or inappropriate project name.",
          "Choosing a minimum SDK without considering compatibility.",
          "Changing package identifiers unnecessarily after starting development.",
        ],
        quiz: [
          {
            question: "What is selected when creating a new Android project?",
            options: [
              "A project template",
              "A database table",
              "A web server",
              "A CSS framework",
            ],
            answer: "A project template",
          },
          {
            question: "What does the minimum SDK define?",
            options: [
              "The oldest Android version supported",
              "The maximum app size",
              "The number of screens",
              "The number of developers",
            ],
            answer: "The oldest Android version supported",
          },
          {
            question: "Which language can be selected for modern Android development?",
            options: ["Kotlin", "PHP", "SQL", "XML only"],
            answer: "Kotlin",
          },
        ],
      },
    },

    {
      id: "project-structure",
      title: "Android Project Structure",
      lesson: {
        overview:
          "An Android project contains multiple files and directories that work together to build the application. Understanding the project structure makes it easier to locate source code, resources, configuration files, and build settings.",
        sections: [
          {
            title: "Source Code",
            content:
              "The app module contains source code such as Kotlin files. Application logic, activities, classes, and other components are generally organized within the source directories.",
          },
          {
            title: "Resources",
            content:
              "The res directory contains application resources such as layouts, images, strings, colors, and other resource definitions. Android resources can be referenced from application code.",
          },
          {
            title: "Important Files",
            content:
              "Important project files include AndroidManifest.xml, Gradle build files, and settings files. These files define application information, dependencies, build configuration, and project structure.",
          },
        ],
        mistakes: [
          "Deleting project files without understanding their purpose.",
          "Confusing the project-level structure with the app module.",
          "Putting resources in arbitrary folders instead of the appropriate resource directories.",
        ],
        quiz: [
          {
            question: "Where are Android application resources commonly stored?",
            options: ["res", "node_modules", "database", "bin"],
            answer: "res",
          },
          {
            question: "Where is Android application information declared?",
            options: [
              "AndroidManifest.xml",
              "index.html",
              "package.json",
              "style.css",
            ],
            answer: "AndroidManifest.xml",
          },
          {
            question: "Which folder commonly contains Kotlin source code?",
            options: ["java", "images", "assets-only", "database"],
            answer: "java",
          },
        ],
      },
    },

    {
      id: "gradle-dependencies",
      title: "Gradle & Dependencies",
      lesson: {
        overview:
          "Gradle is the build system used by Android projects. It manages how applications are compiled and packaged and also helps manage external libraries and project dependencies.",
        sections: [
          {
            title: "What is Gradle?",
            content:
              "Gradle is a build automation system used by Android projects. Android Studio uses Gradle to compile source code, process resources, resolve dependencies, and generate application builds.",
          },
          {
            title: "Dependencies",
            content:
              "Dependencies are external libraries or components that an application uses. Adding a dependency allows developers to use functionality provided by that library instead of implementing everything from scratch.",
          },
          {
            title: "Build Configuration",
            content:
              "Gradle configuration files define information such as plugins, dependencies, SDK settings, and build options. Changes to these files may require Gradle synchronization before they take effect.",
          },
        ],
        mistakes: [
          "Adding unnecessary dependencies.",
          "Using incompatible library versions.",
          "Ignoring Gradle synchronization errors.",
        ],
        quiz: [
          {
            question: "What is Gradle mainly used for?",
            options: [
              "Building and configuring Android projects",
              "Drawing images",
              "Editing videos",
              "Creating database records",
            ],
            answer: "Building and configuring Android projects",
          },
          {
            question: "What is a dependency?",
            options: [
              "An external library or component used by an application",
              "A screenshot",
              "A device",
              "A programming language",
            ],
            answer: "An external library or component used by an application",
          },
          {
            question: "What may be required after changing Gradle configuration?",
            options: [
              "Gradle synchronization",
              "Deleting the project",
              "Formatting the computer",
              "Changing the operating system",
            ],
            answer: "Gradle synchronization",
          },
        ],
      },
    },

    {
      id: "android-manifest",
      title: "Android Manifest",
      lesson: {
        overview:
          "The Android Manifest is an important configuration file that provides essential information about an Android application to the Android operating system.",
        sections: [
          {
            title: "Purpose of the Manifest",
            content:
              "AndroidManifest.xml describes essential application information such as application components, permissions, and other configuration details required by Android.",
          },
          {
            title: "Application Components",
            content:
              "Components such as activities, services, broadcast receivers, and content providers can be declared in the manifest when required by the application.",
          },
          {
            title: "Permissions",
            content:
              "Applications that need access to protected features or data may declare required permissions in the manifest. Examples include permissions related to internet access or device features.",
          },
        ],
        mistakes: [
          "Forgetting to declare required application components.",
          "Requesting unnecessary permissions.",
          "Confusing manifest permissions with runtime permission requests.",
        ],
        quiz: [
          {
            question: "What is the main purpose of AndroidManifest.xml?",
            options: [
              "To provide essential application configuration",
              "To store database records",
              "To contain CSS styles",
              "To store videos",
            ],
            answer: "To provide essential application configuration",
          },
          {
            question: "Which can be declared in the manifest?",
            options: [
              "Application components",
              "SQL queries only",
              "CSS animations",
              "Excel formulas",
            ],
            answer: "Application components",
          },
          {
            question: "Where can application permissions be declared?",
            options: [
              "AndroidManifest.xml",
              "README.txt",
              "index.css",
              "database.sql",
            ],
            answer: "AndroidManifest.xml",
          },
        ],
      },
    },

    {
      id: "build-run-emulator",
      title: "Build, Run & Emulator",
      lesson: {
        overview:
          "Android Studio allows developers to build and run applications on physical Android devices or virtual devices using the Android Emulator.",
        sections: [
          {
            title: "Building an Application",
            content:
              "Building an application converts source code and resources into an installable application package. Gradle performs the required build tasks.",
          },
          {
            title: "Running an Application",
            content:
              "An application can be run from Android Studio by selecting a target device and starting the application. The target may be a physical Android device or an emulator.",
          },
          {
            title: "Android Emulator",
            content:
              "The Android Emulator creates a virtual Android device on the computer. It allows developers to test applications across different Android versions, screen sizes, and device configurations.",
          },
        ],
        mistakes: [
          "Forgetting to select a valid target device.",
          "Assuming emulator behavior is always identical to physical hardware.",
          "Ignoring build or runtime errors shown by Android Studio.",
        ],
        quiz: [
          {
            question: "What does building an Android application produce?",
            options: [
              "An installable application package",
              "A spreadsheet",
              "A database server",
              "A web page",
            ],
            answer: "An installable application package",
          },
          {
            question: "What can be used to run an Android application without a physical phone?",
            options: [
              "Android Emulator",
              "Excel",
              "GitHub",
              "MySQL",
            ],
            answer: "Android Emulator",
          },
          {
            question: "What does an emulator provide?",
            options: [
              "A virtual Android device",
              "A physical phone",
              "A database",
              "A web server",
            ],
            answer: "A virtual Android device",
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

  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-android-projects", subtopics);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const activeTopic = subtopics[activeTopicIndex];
  const quiz = activeTopic.lesson.quiz;
  const currentQuestion = quiz[questionIndex];
  const options = shuffledQuizOptions[activeTopic.id][questionIndex];

  const completedCount = completedTopics.length;
  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const submitAnswer = () => {
    if (!selectedAnswer || answerSubmitted) return;

    setAnswerSubmitted(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = async () => {
    if (questionIndex < quiz.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerSubmitted(false);
    } else {
      const finalScore = score;

      await saveQuizResult({
        subject: "Android Developer",
        role: "Android Developer",
        topic: activeTopic.title,
        topicId: activeTopic.id,
        score: finalScore,
        totalQuestions: quiz.length
      });

      if (!completedTopics.includes(activeTopic.id)) {
        saveProgress(activeTopic.id);
      }

      setQuizStarted(false);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setAnswerSubmitted(false);
      setScore(0);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setScore(0);
  };

  const openTopic = (index) => {
    setActiveTopicIndex(index);
    setQuizStarted(false);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setScore(0);
  };

  const previousLesson = () => {
    if (activeTopicIndex > 0) {
      openTopic(activeTopicIndex - 1);
    }
  };

  const nextLesson = () => {
    if (activeTopicIndex < subtopics.length - 1) {
      openTopic(activeTopicIndex + 1);
    }
  };

  const getOptionClass = (option) => {
    if (!answerSubmitted) {
      return selectedAnswer === option
        ? "option selected"
        : "option";
    }

    if (option === currentQuestion.answer) {
      return "option correct";
    }

    if (
      option === selectedAnswer &&
      selectedAnswer !== currentQuestion.answer
    ) {
      return "option wrong";
    }

    return "option";
  };

  if (quizStarted) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.topBar}>
            <button
              style={styles.backButton}
              onClick={() => setQuizStarted(false)}
            >
              ← Back to Lesson
            </button>

            <div style={styles.quizProgress}>
              Question {questionIndex + 1} of {quiz.length}
            </div>
          </div>

          <div style={styles.quizCard}>
            <h1 style={styles.quizTitle}>🧠 {activeTopic.title} Quiz</h1>

            <div style={styles.progressTrack}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${
                    ((questionIndex + 1) / quiz.length) * 100
                  }%`,
                }}
              />
            </div>

            <h2 style={styles.question}>
              {currentQuestion.question}
            </h2>

            <div style={styles.optionsContainer}>
              {options.map((option) => (
                <button
                  key={option}
                  className={getOptionClass(option)}
                  onClick={() => {
                    if (!answerSubmitted) {
                      setSelectedAnswer(option);
                    }
                  }}
                  style={styles.optionButton}
                  disabled={answerSubmitted}
                >
                  <span>{option}</span>

                  {answerSubmitted &&
                    option === currentQuestion.answer && (
                      <span style={styles.check}>✓</span>
                    )}

                  {answerSubmitted &&
                    option === selectedAnswer &&
                    selectedAnswer !== currentQuestion.answer && (
                      <span style={styles.cross}>✕</span>
                    )}
                </button>
              ))}
            </div>

            {answerSubmitted && (
              <div
                style={{
                  ...styles.feedback,
                  ...(selectedAnswer === currentQuestion.answer
                    ? styles.feedbackCorrect
                    : styles.feedbackWrong),
                }}
              >
                {selectedAnswer === currentQuestion.answer ? (
                  <>
                    <strong>✓ Correct!</strong>
                    <p>Great job! Your answer is correct.</p>
                  </>
                ) : (
                  <>
                    <strong>✕ Incorrect</strong>
                    <p>
                      Correct answer:{" "}
                      <strong>{currentQuestion.answer}</strong>
                    </p>
                  </>
                )}
              </div>
            )}

            {!answerSubmitted ? (
              <button
                style={{
                  ...styles.primaryButton,
                  opacity: selectedAnswer ? 1 : 0.5,
                  cursor: selectedAnswer ? "pointer" : "not-allowed",
                }}
                onClick={submitAnswer}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </button>
            ) : (
              <button
                style={styles.primaryButton}
                onClick={nextQuestion}
              >
                {questionIndex < quiz.length - 1
                  ? "Next Question →"
                  : "Finish Quiz ✓"}
              </button>
            )}
          </div>
        </div>

        <style>
          {`
            .option {
              width: 100%;
              padding: 16px 18px;
              margin-bottom: 12px;
              border: 2px solid #dbeafe;
              border-radius: 10px;
              background: white;
              text-align: left;
              font-size: 15px;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
              transition: 0.2s;
            }

            .option:hover:not(:disabled) {
              border-color: #2563eb;
              background: #eff6ff;
            }

            .option.selected {
              border-color: #2563eb;
              background: #eff6ff;
            }

            .option.correct {
              border-color: #16a34a;
              background: #dcfce7;
              color: #166534;
            }

            .option.wrong {
              border-color: #dc2626;
              background: #fee2e2;
              color: #991b1b;
            }

            .option:disabled {
              cursor: default;
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <button style={styles.backButton} onClick={goBack}>
            ← Back to Topics
          </button>

          <h1 style={styles.title}>
            🛠️ Android Studio & Project Structure
          </h1>

          <p style={styles.subtitle}>
            Learn how Android Studio works, how projects are structured,
            and how Android applications are built and run.
          </p>

          <div style={styles.overallProgress}>
            <div style={styles.progressHeader}>
              <span>Overall Progress</span>
              <strong>{overallProgress}%</strong>
            </div>

            <div style={styles.progressTrack}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${overallProgress}%`,
                }}
              />
            </div>

            <p style={styles.progressText}>
              {completedCount} of {subtopics.length} lessons completed
            </p>
          </div>
        </div>

        <div style={styles.navigation}>
          <button
            style={{
              ...styles.navButton,
              opacity: activeTopicIndex === 0 ? 0.5 : 1,
            }}
            onClick={previousLesson}
            disabled={activeTopicIndex === 0}
          >
            ← Previous Lesson
          </button>

          <span style={styles.lessonCounter}>
            Lesson {activeTopicIndex + 1} of {subtopics.length}
          </span>

          <button
            style={{
              ...styles.navButton,
              opacity:
                activeTopicIndex === subtopics.length - 1 ? 0.5 : 1,
            }}
            onClick={nextLesson}
            disabled={activeTopicIndex === subtopics.length - 1}
          >
            Next Lesson →
          </button>
        </div>

        <div style={styles.lessonCard}>
          <div style={styles.lessonHeader}>
            <div>
              <span style={styles.lessonNumber}>
                LESSON {activeTopicIndex + 1}
              </span>

              <h2 style={styles.lessonTitle}>
                {activeTopic.title}
              </h2>
            </div>

            {completedTopics.includes(activeTopic.id) && (
              <span style={styles.completedBadge}>✓ Completed</span>
            )}
          </div>

          <div style={styles.overviewBox}>
            <h3>📖 Overview</h3>
            <p>{activeTopic.lesson.overview}</p>
          </div>

          <div style={styles.sections}>
            {activeTopic.lesson.sections.map((section, index) => (
              <div style={styles.section} key={index}>
                <h3>
                  {index + 1}. {section.title}
                </h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          <div style={styles.mistakesBox}>
            <h3>⚠️ Common Mistakes</h3>

            <ul>
              {activeTopic.lesson.mistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </div>

          <div style={styles.quizStartBox}>
            <h3>🧠 Test Your Knowledge</h3>
            <p>
              Take the 3-question quiz to complete this lesson.
            </p>

            <button style={styles.primaryButton} onClick={startQuiz}>
              Start Quiz →
            </button>
          </div>
        </div>

        <div style={styles.bottomNavigation}>
          <button
            style={{
              ...styles.navButton,
              opacity: activeTopicIndex === 0 ? 0.5 : 1,
            }}
            onClick={previousLesson}
            disabled={activeTopicIndex === 0}
          >
            ← Previous Lesson
          </button>

          <button style={styles.secondaryButton} onClick={goBack}>
            Back to Topics
          </button>

          <button
            style={{
              ...styles.navButton,
              opacity:
                activeTopicIndex === subtopics.length - 1 ? 0.5 : 1,
            }}
            onClick={nextLesson}
            disabled={activeTopicIndex === subtopics.length - 1}
          >
            Next Lesson →
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
    padding: "35px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: "25px",
  },

  backButton: {
    display: "block",
    marginBottom: "20px",
    padding: "10px 18px",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    background: "white",
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "600",
  },

  title: {
    fontSize: "32px",
    color: "#1e40af",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.6",
  },

  overallProgress: {
    background: "white",
    border: "1px solid #dbeafe",
    borderRadius: "12px",
    padding: "18px",
    marginTop: "25px",
    textAlign: "left",
  },

  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontWeight: "600",
  },

  progressTrack: {
    width: "100%",
    height: "9px",
    background: "#e2e8f0",
    borderRadius: "20px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#2563eb",
    borderRadius: "20px",
    transition: "width 0.3s ease",
  },

  progressText: {
    margin: "8px 0 0",
    fontSize: "13px",
    color: "#64748b",
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "15px",
  },

  navButton: {
    padding: "10px 16px",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    background: "white",
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "600",
  },

  lessonCounter: {
    fontWeight: "600",
    color: "#475569",
  },

  lessonCard: {
    background: "white",
    border: "1px solid #dbeafe",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.08)",
  },

  lessonHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "15px",
    marginBottom: "25px",
  },

  lessonNumber: {
    fontSize: "12px",
    color: "#2563eb",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  lessonTitle: {
    fontSize: "28px",
    margin: "7px 0 0",
    color: "#1e3a8a",
  },

  completedBadge: {
    background: "#dcfce7",
    color: "#166534",
    padding: "8px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },

  overviewBox: {
    background: "#eff6ff",
    borderLeft: "4px solid #2563eb",
    padding: "18px",
    borderRadius: "8px",
    marginBottom: "25px",
  },

  sections: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  section: {
    paddingBottom: "10px",
    borderBottom: "1px solid #e2e8f0",
  },

  mistakesBox: {
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "10px",
    padding: "18px",
    marginTop: "25px",
  },

  quizStartBox: {
    background: "#f8fafc",
    border: "1px solid #dbeafe",
    borderRadius: "10px",
    padding: "22px",
    marginTop: "25px",
  },

  primaryButton: {
    padding: "12px 22px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "12px",
  },

  secondaryButton: {
    padding: "10px 18px",
    background: "white",
    color: "#2563eb",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },

  bottomNavigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "25px",
    gap: "15px",
  },

  quizProgress: {
    fontWeight: "600",
    color: "#475569",
  },

  quizCard: {
    background: "white",
    border: "1px solid #dbeafe",
    borderRadius: "16px",
    padding: "35px",
    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.08)",
  },

  quizTitle: {
    color: "#1e40af",
    marginBottom: "20px",
  },

  question: {
    fontSize: "21px",
    lineHeight: "1.5",
    margin: "30px 0 20px",
  },

  optionsContainer: {
    marginBottom: "20px",
  },

  check: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  cross: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  feedback: {
    padding: "16px",
    borderRadius: "10px",
    marginTop: "15px",
    marginBottom: "10px",
  },

  feedbackCorrect: {
    background: "#dcfce7",
    border: "1px solid #86efac",
    color: "#166534",
  },

  feedbackWrong: {
    background: "#fee2e2",
    border: "1px solid #fca5a5",
    color: "#991b1b",
  },
};

export default AndroidStudioProjectStructure;