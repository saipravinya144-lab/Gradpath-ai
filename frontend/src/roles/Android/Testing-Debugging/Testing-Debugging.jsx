import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "testing-basics",
    title: "Android Testing Basics",
    lesson: {
      overview:
        "Testing helps Android developers verify that an application behaves correctly and continues to work as features change.",
      sections: [
        {
          heading: "Why Testing Matters",
          content:
            "Testing helps identify defects before users encounter them. It also gives developers confidence when modifying or adding application features.",
        },
        {
          heading: "Types of Android Tests",
          content:
            "Android projects commonly use local unit tests for application logic and instrumented tests that run on an Android device or emulator. UI testing can verify how users interact with screens.",
        },
        {
          heading: "Testing Strategy",
          content:
            "A useful testing strategy combines different types of tests. Small pieces of application logic can be tested quickly, while broader tests can verify how multiple components work together.",
        },
      ],
      mistakes: [
        "Testing only after the entire application has been completed.",
        "Relying only on manual testing.",
        "Writing tests without considering the behavior the application should provide.",
      ],
      quiz: [
        {
          question: "Why is application testing important?",
          options: [
            "To identify defects and verify expected behavior",
            "Only to change the application icon",
            "Only to design layouts",
            "Only to compile Kotlin",
          ],
          answer: "To identify defects and verify expected behavior",
        },
        {
          question: "Which is a type of Android test?",
          options: [
            "Local unit test",
            "Wallpaper test",
            "Brightness test",
            "Keyboard-color test",
          ],
          answer: "Local unit test",
        },
        {
          question: "Why can multiple types of tests be useful?",
          options: [
            "They verify different levels of application behavior",
            "They replace Android Studio",
            "They remove the need for code",
            "They automatically design every screen",
          ],
          answer: "They verify different levels of application behavior",
        },
      ],
    },
  },

  {
    id: "unit-testing",
    title: "Unit Testing",
    lesson: {
      overview:
        "Unit tests verify small pieces of application logic independently. They are useful for checking functions, calculations, validation rules, and other logic.",
      sections: [
        {
          heading: "What is a Unit Test?",
          content:
            "A unit test checks the behavior of a small, isolated piece of code. The test provides input and verifies that the resulting output or behavior matches the expected result.",
        },
        {
          heading: "JUnit",
          content:
            "JUnit is commonly used for writing unit tests in Android projects. Test methods can use assertions to verify expected results.",
        },
        {
          heading: "Example Use Cases",
          content:
            "Unit tests can verify calculations, string formatting, input validation, business rules, and other logic that does not require a real Android device.",
        },
      ],
      mistakes: [
        "Testing many unrelated behaviors in one unit test.",
        "Writing tests that depend unnecessarily on external systems.",
        "Ignoring edge cases such as empty or invalid input.",
      ],
      quiz: [
        {
          question: "What does a unit test generally verify?",
          options: [
            "A small and isolated piece of application logic",
            "The entire internet connection",
            "The phone battery",
            "The Android operating system",
          ],
          answer: "A small and isolated piece of application logic",
        },
        {
          question: "Which framework is commonly used for Android unit tests?",
          options: ["JUnit", "Photoshop", "Gradle UI", "Chrome"],
          answer: "JUnit",
        },
        {
          question: "Which is suitable for a unit test?",
          options: [
            "Testing an input validation function",
            "Testing the phone charger",
            "Testing screen brightness manually",
            "Testing the device wallpaper",
          ],
          answer: "Testing an input validation function",
        },
      ],
    },
  },

  {
    id: "ui-testing",
    title: "UI Testing",
    lesson: {
      overview:
        "UI testing verifies that application screens and user interactions behave as expected. It can help ensure that buttons, input fields, navigation, and other interface elements work correctly.",
      sections: [
        {
          heading: "What is UI Testing?",
          content:
            "UI tests interact with application screens in a way similar to a user. They can verify that elements are displayed correctly and that interactions produce the expected result.",
        },
        {
          heading: "User Interaction",
          content:
            "A UI test can perform actions such as entering text, clicking a button, selecting an item, or navigating between screens and then check the resulting UI state.",
        },
        {
          heading: "Instrumented Tests",
          content:
            "Many Android UI tests run on an emulator or physical Android device because they need access to the Android framework and application interface.",
        },
      ],
      mistakes: [
        "Creating UI tests that depend heavily on timing.",
        "Using unstable selectors for UI elements.",
        "Testing only the visual appearance without checking actual behavior.",
      ],
      quiz: [
        {
          question: "What does UI testing verify?",
          options: [
            "Application screens and user interactions",
            "Only database storage",
            "Only Kotlin syntax",
            "Only Gradle configuration",
          ],
          answer: "Application screens and user interactions",
        },
        {
          question: "Which action can a UI test perform?",
          options: [
            "Click a button",
            "Change the phone battery",
            "Install Android Studio",
            "Modify the operating system",
          ],
          answer: "Click a button",
        },
        {
          question: "Where can many Android UI tests run?",
          options: [
            "An Android emulator or physical device",
            "Only inside a text editor",
            "Only inside a database",
            "Only on a spreadsheet",
          ],
          answer: "An Android emulator or physical device",
        },
      ],
    },
  },

  {
    id: "debugging",
    title: "Debugging Android Apps",
    lesson: {
      overview:
        "Debugging is the process of finding and fixing problems in an application. Android Studio provides tools that help developers inspect application behavior and locate errors.",
      sections: [
        {
          heading: "Finding the Problem",
          content:
            "Debugging begins by reproducing the problem and identifying where the unexpected behavior occurs. Developers can then inspect the relevant code and application state.",
        },
        {
          heading: "Breakpoints",
          content:
            "Breakpoints pause program execution at selected lines of code. Developers can inspect variables and follow the execution flow to understand what the application is doing.",
        },
        {
          heading: "Debugging Workflow",
          content:
            "A typical workflow is reproduce the issue, inspect logs or errors, use breakpoints when necessary, identify the cause, make a change, and test the result again.",
        },
      ],
      mistakes: [
        "Changing code randomly without first reproducing the issue.",
        "Ignoring the actual error message or stack trace.",
        "Assuming the first suspicious line is always the root cause.",
      ],
      quiz: [
        {
          question: "What is debugging?",
          options: [
            "Finding and fixing problems in an application",
            "Designing an application icon",
            "Creating a database only",
            "Installing an emulator",
          ],
          answer: "Finding and fixing problems in an application",
        },
        {
          question: "What does a breakpoint do?",
          options: [
            "Pauses program execution at a selected location",
            "Deletes the application",
            "Creates a new database",
            "Changes the screen resolution",
          ],
          answer: "Pauses program execution at a selected location",
        },
        {
          question: "What is a useful first step when debugging?",
          options: [
            "Reproduce the problem",
            "Delete the entire project",
            "Restart the computer immediately",
            "Rewrite every file",
          ],
          answer: "Reproduce the problem",
        },
      ],
    },
  },

  {
    id: "logcat-errors",
    title: "Logcat & Error Analysis",
    lesson: {
      overview:
        "Logcat displays system and application log messages and is one of the most useful tools for understanding Android application behavior and errors.",
      sections: [
        {
          heading: "What is Logcat?",
          content:
            "Logcat provides a stream of log messages generated by applications and the Android system. Developers can filter the output to find messages related to their application.",
        },
        {
          heading: "Log Levels",
          content:
            "Android logging includes different levels such as verbose, debug, info, warning, and error. Choosing an appropriate level can make important information easier to identify.",
        },
        {
          heading: "Stack Traces",
          content:
            "When an application crashes, Logcat can contain a stack trace showing where the exception occurred. Reading the exception type and relevant lines can help locate the problem.",
        },
      ],
      mistakes: [
        "Ignoring the exception type in a crash log.",
        "Looking only at the final line of a stack trace.",
        "Leaving excessive debug logging in production unnecessarily.",
      ],
      quiz: [
        {
          question: "What is Logcat used for?",
          options: [
            "Viewing Android system and application log messages",
            "Designing layouts",
            "Creating database tables",
            "Editing images",
          ],
          answer: "Viewing Android system and application log messages",
        },
        {
          question: "Which can appear in Logcat after an application crash?",
          options: [
            "A stack trace",
            "A database schema only",
            "A layout preview only",
            "An Android Studio license",
          ],
          answer: "A stack trace",
        },
        {
          question: "Why are log levels useful?",
          options: [
            "They help organize and identify different types of messages",
            "They change the device wallpaper",
            "They create Activities",
            "They replace unit tests",
          ],
          answer:
            "They help organize and identify different types of messages",
        },
      ],
    },
  },

  {
    id: "testing-best-practices",
    title: "Testing & Debugging Best Practices",
    lesson: {
      overview:
        "Good testing and debugging practices make Android applications more reliable, maintainable, and easier to develop.",
      sections: [
        {
          heading: "Test Early",
          content:
            "Testing during development makes it easier to identify the source of a problem. Small, focused tests can provide fast feedback when application logic changes.",
        },
        {
          heading: "Use Reproducible Steps",
          content:
            "When a bug occurs, record the steps needed to reproduce it. Reproducible steps make it easier to investigate, fix, and verify the problem.",
        },
        {
          heading: "Verify the Fix",
          content:
            "After fixing a bug, test the affected functionality again and consider whether the change could affect other parts of the application. Regression tests can help prevent the problem from returning.",
        },
      ],
      mistakes: [
        "Fixing a bug without testing the affected functionality again.",
        "Not recording reproducible steps for difficult bugs.",
        "Deleting useful tests because the current version appears to work.",
      ],
      quiz: [
        {
          question: "Why should developers test early?",
          options: [
            "It provides faster feedback and helps identify problems sooner",
            "It eliminates the need for code",
            "It prevents Android Studio from opening",
            "It replaces application design",
          ],
          answer:
            "It provides faster feedback and helps identify problems sooner",
        },
        {
          question: "Why are reproducible steps useful?",
          options: [
            "They make it easier to investigate and verify a bug",
            "They increase screen brightness",
            "They create a Firebase project",
            "They change the application package name",
          ],
          answer:
            "They make it easier to investigate and verify a bug",
        },
        {
          question: "What should be done after fixing a bug?",
          options: [
            "Test the affected functionality again",
            "Delete all tests",
            "Ignore the change",
            "Immediately release without testing",
          ],
          answer: "Test the affected functionality again",
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

const TestingDebugging = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-testing-debugging", subtopics);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const quizQuestions = activeTopic?.lesson?.quiz || [];

  const currentQuestion =
    quizQuestions[questionIndex] || quizQuestions[0];

  const options =
    activeTopic && shuffledQuizOptions[activeTopic.id]
      ? shuffledQuizOptions[activeTopic.id][questionIndex] || []
      : [];

  const progress =
    subtopics.length > 0
      ? Math.round(
          (completedTopics.length / subtopics.length) * 100
        )
      : 0;

  const markCompleted = () => {
    if (!activeTopic) return;
    saveProgress(activeTopic.id);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted || !currentQuestion) {
      return;
    }

    setSubmitted(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer("");
      setSubmitted(false);
    } else {
      const finalScore = score;

      await saveQuizResult({
        subject: "Android Developer",
        role: "Android Developer",
        topic: activeTopic.title,
        topicId: activeTopic.id,
        score: finalScore,
        totalQuestions: quizQuestions.length
      });

      markCompleted();
    }
  };

  const openTopic = (index) => {
    setActiveTopicIndex(index);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  const goToNextLesson = () => {
    if (activeTopicIndex < subtopics.length - 1) {
      openTopic(activeTopicIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (activeTopicIndex > 0) {
      openTopic(activeTopicIndex - 1);
    }
  };

  if (!activeTopic) {
    return null;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
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
        <button
          onClick={goBack}
          style={{
            border: "none",
            background: "#2563eb",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          ← Back to Android Topics
        </button>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              margin: "0 0 8px",
              color: "#1e3a8a",
              fontSize: "30px",
            }}
          >
            🧪 Testing & Debugging
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Learn how to test Android applications, analyze errors,
            and debug problems effectively.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              color: "#334155",
              fontWeight: "600",
            }}
          >
            <span>Overall Progress</span>
            <span>{progress}%</span>
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
                width: `${progress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completedTopics.includes(topic.id);
            const isActive = index === activeTopicIndex;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "20px",
                  border: isActive
                    ? "2px solid #2563eb"
                    : "1px solid #bfdbfe",
                  boxShadow:
                    "0 5px 15px rgba(37, 99, 235, 0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                >
                  {index + 1}.
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                  }}
                >
                  {topic.title}
                </h3>

                <p
                  style={{
                    color: isCompleted ? "#15803d" : "#64748b",
                    fontSize: "14px",
                    marginBottom: "15px",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "Not completed"}
                </p>

                <button
                  onClick={() => openTopic(index)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "Review Lesson"
                    : "Open Lesson"}
                </button>
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 5px",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Lesson {activeTopicIndex + 1} of{" "}
                {subtopics.length}
              </p>

              <h2
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                  fontSize: "26px",
                }}
              >
                {activeTopic.title}
              </h2>
            </div>

            <div
              style={{
                padding: "8px 14px",
                background: "#eff6ff",
                color: "#2563eb",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {completedTopics.includes(activeTopic.id)
                ? "✓ Completed"
                : "In Progress"}
            </div>
          </div>

          <section style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              Overview
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {activeTopic.lesson.overview}
            </p>
          </section>

          {(activeTopic.lesson.sections || []).map(
            (section, index) => (
              <section
                key={index}
                style={{
                  marginBottom: "24px",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                  }}
                >
                  {section.heading}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    lineHeight: "1.7",
                  }}
                >
                  {section.content}
                </p>
              </section>
            )
          )}

          <section
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#fff7ed",
              borderRadius: "12px",
              border: "1px solid #fed7aa",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                color: "#c2410c",
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "22px",
                color: "#7c2d12",
                lineHeight: "1.8",
              }}
            >
              {(activeTopic.lesson.mistakes || []).map(
                (mistake, index) => (
                  <li key={index}>{mistake}</li>
                )
              )}
            </ul>
          </section>

          <section
            style={{
              padding: "24px",
              background: "#eff6ff",
              borderRadius: "14px",
              border: "1px solid #bfdbfe",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                }}
              >
                🧠 Quick Quiz
              </h3>

              <span
                style={{
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Question {questionIndex + 1} of{" "}
                {quizQuestions.length}
              </span>
            </div>

            {currentQuestion && (
              <>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#334155",
                    marginBottom: "18px",
                  }}
                >
                  {currentQuestion.question}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {options.map((option, index) => {
                    const isSelected =
                      selectedAnswer === option;

                    const isCorrect =
                      option === currentQuestion.answer;

                    let background = "white";
                    let border = "1px solid #bfdbfe";
                    let textColor = "#334155";

                    if (submitted && isCorrect) {
                      background = "#dcfce7";
                      border = "2px solid #16a34a";
                      textColor = "#166534";
                    } else if (
                      submitted &&
                      isSelected &&
                      !isCorrect
                    ) {
                      background = "#fee2e2";
                      border = "2px solid #dc2626";
                      textColor = "#991b1b";
                    } else if (isSelected) {
                      background = "#dbeafe";
                      border = "2px solid #2563eb";
                      textColor = "#1e3a8a";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!submitted) {
                            setSelectedAnswer(option);
                          }
                        }}
                        style={{
                          textAlign: "left",
                          padding: "13px 15px",
                          border,
                          borderRadius: "9px",
                          background,
                          color: textColor,
                          cursor: submitted
                            ? "default"
                            : "pointer",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted &&
                  selectedAnswer !== currentQuestion.answer && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
                      }}
                    >
                      Correct answer:{" "}
                      {currentQuestion.answer}
                    </p>
                  )}

                {submitted &&
                  selectedAnswer === currentQuestion.answer && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
                      }}
                    >
                      ✓ Correct answer!
                    </p>
                  )}

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {!submitted ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!selectedAnswer}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: selectedAnswer
                          ? "#2563eb"
                          : "#94a3b8",
                        color: "white",
                        cursor: selectedAnswer
                          ? "pointer"
                          : "not-allowed",
                        fontWeight: "600",
                      }}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#2563eb",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {questionIndex <
                      quizQuestions.length - 1
                        ? "Next Question →"
                        : "Complete Lesson ✓"}
                    </button>
                  )}
                </div>

                {submitted &&
                  questionIndex ===
                    quizQuestions.length - 1 && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#475569",
                        fontSize: "14px",
                      }}
                    >
                      Current quiz score: {score}/
                      {quizQuestions.length}
                    </p>
                  )}
              </>
            )}
          </section>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPreviousLesson}
              disabled={activeTopicIndex === 0}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  activeTopicIndex === 0
                    ? "#f1f5f9"
                    : "white",
                color:
                  activeTopicIndex === 0
                    ? "#94a3b8"
                    : "#2563eb",
                cursor:
                  activeTopicIndex === 0
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={goBack}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back to Topics
            </button>

            <button
              onClick={goToNextLesson}
              disabled={
                activeTopicIndex === subtopics.length - 1
              }
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "none",
                background:
                  activeTopicIndex === subtopics.length - 1
                    ? "#94a3b8"
                    : "#2563eb",
                color: "white",
                cursor:
                  activeTopicIndex === subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingDebugging;