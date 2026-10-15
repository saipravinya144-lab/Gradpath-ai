import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const ActivitiesFragments = ({ goBack }) => {
  const subtopics = [
    {
      id: "activities",
      title: "Activities in Android",
      lesson: {
        overview:
          "An Activity represents a screen or a focused interaction in an Android application. Activities provide an entry point for user interaction and work with layouts, intents, and other Android components.",
        sections: [
          {
            title: "What is an Activity?",
            content:
              "An Activity is an Android application component that provides a user interface for a specific task or interaction. For example, an application may have separate activities for login, settings, or a main screen.",
          },
          {
            title: "Activity and UI",
            content:
              "An Activity can display a user interface and respond to user interactions. The Activity connects application logic with the UI presented to the user.",
          },
          {
            title: "Multiple Activities",
            content:
              "An application can contain multiple activities. Activities can be launched from other activities or components when the application needs to move the user to another screen or interaction.",
          },
        ],
        mistakes: [
          "Thinking an Activity is the same thing as the entire Android application.",
          "Putting all application functionality into one Activity.",
          "Forgetting that an Activity has a lifecycle managed by Android.",
        ],
        quiz: [
          {
            question: "What does an Activity generally represent?",
            options: [
              "A screen or focused interaction",
              "A database table",
              "A Gradle dependency",
              "A physical Android device",
            ],
            answer: "A screen or focused interaction",
          },
          {
            question: "Can an Android application have multiple activities?",
            options: ["Yes", "No", "Only one", "Only two"],
            answer: "Yes",
          },
          {
            question: "What can an Activity provide?",
            options: [
              "A user interface and interaction",
              "Only database storage",
              "Only image processing",
              "Only network access",
            ],
            answer: "A user interface and interaction",
          },
        ],
      },
    },

    {
      id: "activity-lifecycle",
      title: "Activity Lifecycle",
      lesson: {
        overview:
          "The Activity lifecycle describes the different states an Activity goes through during its lifetime. Android calls lifecycle methods as an Activity is created, becomes visible, interacts with the user, pauses, stops, or is destroyed.",
        sections: [
          {
            title: "Main Lifecycle Methods",
            content:
              "Important lifecycle methods include onCreate(), onStart(), onResume(), onPause(), onStop(), and onDestroy(). These methods allow an Activity to respond appropriately to changes in its state.",
          },
          {
            title: "Active and Inactive States",
            content:
              "An Activity may move between active and inactive states as the user navigates through the application or another Activity comes into focus. Android manages these transitions.",
          },
          {
            title: "Why Lifecycle Matters",
            content:
              "Understanding the lifecycle helps developers manage resources, save necessary state, and avoid performing inappropriate operations when an Activity is not active.",
          },
        ],
        mistakes: [
          "Assuming onCreate() is called only once for the entire lifetime of an Activity.",
          "Ignoring lifecycle changes during screen rotation or configuration changes.",
          "Keeping expensive resources active when the Activity is no longer visible.",
        ],
        quiz: [
          {
            question: "Which method is commonly called when an Activity is first created?",
            options: ["onCreate()", "onClick()", "onBuild()", "onLaunchApp()"],
            answer: "onCreate()",
          },
          {
            question: "Which lifecycle method indicates that an Activity is becoming visible?",
            options: ["onStart()", "onDelete()", "onCompile()", "onInput()"],
            answer: "onStart()",
          },
          {
            question: "Which method is called when an Activity is no longer visible?",
            options: ["onStop()", "onCreate()", "onStart()", "onBuild()"],
            answer: "onStop()",
          },
        ],
      },
    },

    {
      id: "managing-activities",
      title: "Creating & Managing Activities",
      lesson: {
        overview:
          "Activities are created as Kotlin classes and configured as Android components. Managing activities involves defining their UI, lifecycle behavior, and how they interact with other parts of the application.",
        sections: [
          {
            title: "Creating an Activity",
            content:
              "An Activity can be created as a Kotlin class that extends an appropriate Android Activity class. The Activity can then define its behavior and connect to a user interface.",
          },
          {
            title: "Setting the UI",
            content:
              "An Activity can display a layout as its content. The layout contains the UI elements that users interact with on that screen.",
          },
          {
            title: "Managing Activity State",
            content:
              "Activity state may need to be handled when the user leaves the screen, returns to it, or when Android recreates the Activity because of configuration changes.",
          },
        ],
        mistakes: [
          "Forgetting to connect the Activity with its intended UI.",
          "Keeping temporary state only in fields without considering recreation.",
          "Creating unnecessary activities for every small UI element.",
        ],
        quiz: [
          {
            question: "What is commonly used to implement an Activity?",
            options: [
              "A Kotlin class extending an Activity class",
              "A SQL table",
              "A CSS file",
              "A Gradle dependency only",
            ],
            answer: "A Kotlin class extending an Activity class",
          },
          {
            question: "What can an Activity display?",
            options: [
              "A user interface",
              "Only a database",
              "Only a server",
              "Only a text file",
            ],
            answer: "A user interface",
          },
          {
            question: "Why is Activity state important?",
            options: [
              "The Activity may be recreated or moved between lifecycle states",
              "It changes the programming language",
              "It replaces the Android Manifest",
              "It installs Android Studio",
            ],
            answer:
              "The Activity may be recreated or moved between lifecycle states",
          },
        ],
      },
    },

    {
      id: "intents",
      title: "Intents & Activity Communication",
      lesson: {
        overview:
          "Intents are messaging objects used to request actions from Android components. They are commonly used to start activities and pass information between components.",
        sections: [
          {
            title: "What is an Intent?",
            content:
              "An Intent describes an action that an application wants Android or another component to perform. Intents can be explicit or implicit depending on how the target is specified.",
          },
          {
            title: "Explicit Intents",
            content:
              "An explicit Intent identifies a specific component, such as a particular Activity within the application. They are commonly used for navigation between screens in the same application.",
          },
          {
            title: "Passing Data",
            content:
              "Intent extras can be used to attach small pieces of information to an Intent. The receiving Activity can retrieve that information and use it during its operation.",
          },
        ],
        mistakes: [
          "Confusing explicit and implicit intents.",
          "Using inconsistent keys when passing data.",
          "Passing unnecessarily large amounts of data through Intent extras.",
        ],
        quiz: [
          {
            question: "What is an Intent commonly used for?",
            options: [
              "Communicating with or starting Android components",
              "Creating SQL tables",
              "Styling buttons",
              "Building APK files manually",
            ],
            answer: "Communicating with or starting Android components",
          },
          {
            question: "What does an explicit Intent identify?",
            options: [
              "A specific component",
              "Any random application",
              "A database record",
              "A CSS class",
            ],
            answer: "A specific component",
          },
          {
            question: "How can small pieces of data be passed using an Intent?",
            options: [
              "Intent extras",
              "Gradle plugins",
              "XML comments",
              "Image resources",
            ],
            answer: "Intent extras",
          },
        ],
      },
    },

    {
      id: "fragments",
      title: "Fragments",
      lesson: {
        overview:
          "A Fragment represents a reusable portion of a user interface and its associated behavior. Fragments are hosted by activities and can help create flexible screen designs.",
        sections: [
          {
            title: "What is a Fragment?",
            content:
              "A Fragment is a modular component that represents part of an application's UI or behavior. It operates within the context of a host Activity.",
          },
          {
            title: "Why Use Fragments?",
            content:
              "Fragments can make UI components reusable and help applications organize complex screens. Multiple fragments can be used within an Activity when appropriate.",
          },
          {
            title: "Fragment Transactions",
            content:
              "Fragments can be added, removed, replaced, or otherwise managed by the application. These operations allow the visible portion of a screen to change without necessarily changing the entire Activity.",
          },
        ],
        mistakes: [
          "Treating a Fragment as an independent application component that does not need a host.",
          "Putting unnecessary logic into fragments.",
          "Ignoring the Fragment lifecycle.",
        ],
        quiz: [
          {
            question: "What does a Fragment generally represent?",
            options: [
              "A reusable portion of UI and behavior",
              "A complete Android device",
              "A database",
              "A Gradle project",
            ],
            answer: "A reusable portion of UI and behavior",
          },
          {
            question: "A Fragment is normally hosted by what?",
            options: ["An Activity", "A database", "Gradle", "An emulator"],
            answer: "An Activity",
          },
          {
            question: "What can be done with fragments?",
            options: [
              "They can be added, removed, or replaced",
              "They can only be deleted",
              "They can only display images",
              "They can replace Kotlin",
            ],
            answer: "They can be added, removed, or replaced",
          },
        ],
      },
    },

    {
      id: "fragment-lifecycle",
      title: "Fragment Lifecycle",
      lesson: {
        overview:
          "Fragments have their own lifecycle that is connected to the lifecycle of their host Activity. Understanding this lifecycle is important for managing UI, resources, and state correctly.",
        sections: [
          {
            title: "Fragment Lifecycle Methods",
            content:
              "Important Fragment lifecycle methods include onAttach(), onCreate(), onCreateView(), onViewCreated(), onStart(), onResume(), onPause(), onStop(), onDestroyView(), and onDestroy().",
          },
          {
            title: "Fragment View Lifecycle",
            content:
              "A Fragment object can exist even when its associated view has been destroyed. The distinction between the Fragment lifecycle and its view lifecycle is important when working with UI references.",
          },
          {
            title: "Managing Resources",
            content:
              "Resources associated with a Fragment's view should be released appropriately when the view is destroyed. This helps prevent memory-related problems.",
          },
        ],
        mistakes: [
          "Confusing the Fragment lifecycle with the Activity lifecycle.",
          "Keeping references to destroyed Fragment views.",
          "Ignoring onDestroyView() when managing view-related resources.",
        ],
        quiz: [
          {
            question: "Which method is used to create a Fragment's UI view?",
            options: [
              "onCreateView()",
              "onBuildView()",
              "onStartApp()",
              "onCreateScreen()",
            ],
            answer: "onCreateView()",
          },
          {
            question: "Which method is associated with destroying the Fragment's view?",
            options: [
              "onDestroyView()",
              "onDeleteScreen()",
              "onRemoveActivity()",
              "onClearApp()",
            ],
            answer: "onDestroyView()",
          },
          {
            question: "Why is the Fragment view lifecycle important?",
            options: [
              "The Fragment can outlive its view",
              "Fragments cannot have views",
              "It replaces the Activity lifecycle",
              "It manages Gradle",
            ],
            answer: "The Fragment can outlive its view",
          },
        ],
      },
    },

    {
      id: "activity-fragment-communication",
      title: "Activity–Fragment Communication",
      lesson: {
        overview:
          "Activities and fragments often need to exchange information or coordinate actions. Communication should be designed clearly so that components remain manageable and reusable.",
        sections: [
          {
            title: "Sharing Information",
            content:
              "An Activity and its fragments may need to share information. Modern Android applications commonly use shared architecture components such as ViewModel when state needs to be shared between UI components.",
          },
          {
            title: "Fragment Arguments",
            content:
              "Arguments can be supplied when creating a Fragment to provide initial information. This is useful when the Fragment needs specific data to display or process.",
          },
          {
            title: "Good Communication Practices",
            content:
              "Communication should minimize unnecessary coupling. Reusable fragments should avoid depending too heavily on specific Activity implementations and should have clear responsibilities.",
          },
        ],
        mistakes: [
          "Creating tightly coupled Activity and Fragment code.",
          "Passing large amounts of data through Fragment arguments.",
          "Using direct references to Activities when a cleaner communication mechanism is available.",
        ],
        quiz: [
          {
            question: "What can be used to provide initial data to a Fragment?",
            options: [
              "Fragment arguments",
              "CSS variables",
              "Gradle tasks",
              "Database tables only",
            ],
            answer: "Fragment arguments",
          },
          {
            question: "What can help share UI-related state between components?",
            options: [
              "ViewModel",
              "ImageView",
              "TextView",
              "Android Emulator",
            ],
            answer: "ViewModel",
          },
          {
            question: "What is a good communication design principle?",
            options: [
              "Minimize unnecessary coupling",
              "Put all logic in one component",
              "Use direct references everywhere",
              "Avoid reusable components",
            ],
            answer: "Minimize unnecessary coupling",
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
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-activities-fragments", subtopics);
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
            <h1 style={styles.quizTitle}>
              🧠 {activeTopic.title} Quiz
            </h1>

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
                  cursor: selectedAnswer
                    ? "pointer"
                    : "not-allowed",
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
            🧩 Activities & Fragments
          </h1>

          <p style={styles.subtitle}>
            Learn how Android screens work, understand Activity and
            Fragment lifecycles, navigate between screens, and manage
            communication between components.
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
                activeTopicIndex === subtopics.length - 1
                  ? 0.5
                  : 1,
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
              <span style={styles.completedBadge}>
                ✓ Completed
              </span>
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

            <button
              style={styles.primaryButton}
              onClick={startQuiz}
            >
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

          <button
            style={styles.secondaryButton}
            onClick={goBack}
          >
            Back to Topics
          </button>

          <button
            style={{
              ...styles.navButton,
              opacity:
                activeTopicIndex === subtopics.length - 1
                  ? 0.5
                  : 1,
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
    background:
      "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
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
    boxShadow:
      "0 4px 15px rgba(37, 99, 235, 0.08)",
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

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
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
    boxShadow:
      "0 4px 15px rgba(37, 99, 235, 0.08)",
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

  optionButton: {
    fontFamily: "Arial, sans-serif",
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

export default ActivitiesFragments;