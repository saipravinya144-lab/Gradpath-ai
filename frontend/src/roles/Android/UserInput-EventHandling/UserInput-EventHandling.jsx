import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const UserInputEventHandling = ({ goBack }) => {
  const subtopics = [
    {
      id: "handling-user-input",
      title: "Handling User Input",
      lesson: {
        overview:
          "Android applications frequently need information from users. User input can come from text fields, buttons, checkboxes, switches, selection controls, and touch interactions.",
        sections: [
          {
            title: "Types of User Input",
            content:
              "Common forms of input include typed text, button clicks, selections, switches, checkboxes, radio buttons, and touch gestures. The appropriate component depends on the type of information the application needs.",
          },
          {
            title: "Reading Input",
            content:
              "An application can read values entered or selected by the user and use them to perform operations. Input should be processed only when appropriate and should be validated when necessary.",
          },
          {
            title: "Events",
            content:
              "An event represents an interaction or occurrence that the application can respond to. Clicks, text changes, selections, and touch actions are examples of events in Android applications.",
          },
        ],
        mistakes: [
          "Not validating user-provided information.",
          "Trying to read input before the user has provided it.",
          "Using the wrong UI component for the type of input required.",
        ],
        quiz: [
          {
            question: "Which of these is a form of user input?",
            options: [
              "Typing text",
              "Gradle synchronization",
              "APK compilation",
              "Manifest generation",
            ],
            answer: "Typing text",
          },
          {
            question: "What does an event represent?",
            options: [
              "An interaction or occurrence the application can respond to",
              "A database table",
              "A project folder",
              "A programming language",
            ],
            answer:
              "An interaction or occurrence the application can respond to",
          },
          {
            question: "Why should user input often be validated?",
            options: [
              "To ensure the input is appropriate and usable",
              "To install Android Studio",
              "To create an emulator",
              "To compile Gradle",
            ],
            answer:
              "To ensure the input is appropriate and usable",
          },
        ],
      },
    },

    {
      id: "button-click-events",
      title: "Button Click Events",
      lesson: {
        overview:
          "Buttons are interactive components that perform actions when users tap them. Android applications can attach click listeners to buttons to execute appropriate code.",
        sections: [
          {
            title: "Click Events",
            content:
              "A click event occurs when a user interacts with a clickable component. For a Button, the application can define what should happen when the user taps it.",
          },
          {
            title: "Click Listeners",
            content:
              "A click listener provides code that is executed when the associated view is clicked. This allows buttons to perform actions such as submitting information, navigating to another screen, or changing UI content.",
          },
          {
            title: "Good Button Design",
            content:
              "Buttons should have clear labels and predictable behavior. The action performed should match the text or purpose communicated by the button.",
          },
        ],
        mistakes: [
          "Creating buttons without click behavior when an action is expected.",
          "Giving buttons unclear labels.",
          "Putting too much unrelated logic directly inside click handlers.",
        ],
        quiz: [
          {
            question: "What happens when a user taps a clickable Button?",
            options: [
              "A click event can be triggered",
              "The database is automatically deleted",
              "The application must close",
              "Gradle is removed",
            ],
            answer: "A click event can be triggered",
          },
          {
            question: "What is a click listener used for?",
            options: [
              "Defining what happens when a view is clicked",
              "Creating a database",
              "Designing an emulator",
              "Installing Kotlin",
            ],
            answer: "Defining what happens when a view is clicked",
          },
          {
            question: "What should a Button label communicate?",
            options: [
              "The action or purpose of the button",
              "The Android version only",
              "The database schema",
              "The Gradle version",
            ],
            answer: "The action or purpose of the button",
          },
        ],
      },
    },

    {
      id: "text-input-validation",
      title: "Text Input & Validation",
      lesson: {
        overview:
          "Text input allows users to provide information through fields such as EditText. Validation checks whether the provided information meets the application's requirements before it is processed.",
        sections: [
          {
            title: "Text Input",
            content:
              "EditText is commonly used to collect text from users. Applications can read the entered value and use it for operations such as searching, registration, login, or form submission.",
          },
          {
            title: "Input Validation",
            content:
              "Validation checks whether user input is acceptable. Examples include checking whether a required field is empty, whether an email has an appropriate format, or whether a value falls within an expected range.",
          },
          {
            title: "Providing Feedback",
            content:
              "When input is invalid, the application should clearly tell the user what needs to be corrected. Helpful feedback makes forms easier to use and reduces errors.",
          },
        ],
        mistakes: [
          "Accepting empty required fields.",
          "Validating only after submitting data to a server.",
          "Showing vague error messages such as 'Invalid input' without explaining the problem.",
        ],
        quiz: [
          {
            question: "Which component is commonly used for text input?",
            options: ["EditText", "TextView", "ImageView", "RecyclerView"],
            answer: "EditText",
          },
          {
            question: "What is input validation?",
            options: [
              "Checking whether input meets required conditions",
              "Creating an Android project",
              "Installing an emulator",
              "Building Gradle dependencies",
            ],
            answer: "Checking whether input meets required conditions",
          },
          {
            question: "What should useful validation feedback do?",
            options: [
              "Explain what the user needs to correct",
              "Close the application",
              "Delete the input automatically",
              "Restart Android Studio",
            ],
            answer: "Explain what the user needs to correct",
          },
        ],
      },
    },

    {
      id: "checkbox-radio-switch",
      title: "CheckBox, RadioButton & Switch",
      lesson: {
        overview:
          "CheckBox, RadioButton, and Switch are controls used for different types of selections. Choosing the correct control makes an interface clearer and easier to use.",
        sections: [
          {
            title: "CheckBox",
            content:
              "A CheckBox allows users to independently select or deselect an option. Multiple checkboxes can generally be selected at the same time.",
          },
          {
            title: "RadioButton",
            content:
              "RadioButtons are commonly used when users must select one option from a group of mutually exclusive choices.",
          },
          {
            title: "Switch",
            content:
              "A Switch represents an on or off state. It is useful for settings that can be enabled or disabled, such as notifications or a particular feature.",
          },
        ],
        mistakes: [
          "Using RadioButtons when multiple selections should be allowed.",
          "Using a Switch for choices that are not naturally on/off states.",
          "Failing to group related RadioButtons correctly.",
        ],
        quiz: [
          {
            question: "Which control allows multiple independent selections?",
            options: ["CheckBox", "RadioButton", "Switch", "TextView"],
            answer: "CheckBox",
          },
          {
            question: "When are RadioButtons commonly used?",
            options: [
              "When selecting one option from a group",
              "For entering long text",
              "For displaying images",
              "For scrolling pages",
            ],
            answer: "When selecting one option from a group",
          },
          {
            question: "Which control represents an on/off state?",
            options: ["Switch", "TextView", "ImageView", "EditText"],
            answer: "Switch",
          },
        ],
      },
    },

    {
      id: "spinners-selection",
      title: "Spinners & Selection Controls",
      lesson: {
        overview:
          "Selection controls allow users to choose values from predefined options. A Spinner provides a compact way to display a list of choices and let the user select one.",
        sections: [
          {
            title: "Spinner",
            content:
              "A Spinner displays a dropdown-style list of choices. It is useful when the application needs the user to select one value from a predefined collection.",
          },
          {
            title: "Selection Events",
            content:
              "Applications can respond when the user selects an item. The selected value can then be used to update the interface or perform another operation.",
          },
          {
            title: "Choosing Selection Controls",
            content:
              "The appropriate selection control depends on the number of options and the type of choice. Checkboxes work well for independent choices, while a Spinner can save screen space when selecting one item from many choices.",
          },
        ],
        mistakes: [
          "Using a Spinner for only two obvious on/off choices.",
          "Providing unclear or duplicate selection options.",
          "Not handling the selected value correctly.",
        ],
        quiz: [
          {
            question: "What does a Spinner commonly provide?",
            options: [
              "A dropdown list of choices",
              "A text editor",
              "An image editor",
              "A database connection",
            ],
            answer: "A dropdown list of choices",
          },
          {
            question: "What can an application do after a Spinner selection?",
            options: [
              "Respond to the selected value",
              "Automatically uninstall itself",
              "Delete Gradle",
              "Change the Android OS",
            ],
            answer: "Respond to the selected value",
          },
          {
            question: "Why can a Spinner be useful?",
            options: [
              "It can save screen space for many choices",
              "It replaces Kotlin",
              "It creates databases",
              "It builds APK files",
            ],
            answer: "It can save screen space for many choices",
          },
        ],
      },
    },

    {
      id: "touch-gestures",
      title: "Touch & Gesture Events",
      lesson: {
        overview:
          "Android applications can respond to touch interactions such as taps, long presses, swipes, and other gestures. Touch handling allows applications to provide richer and more natural interactions.",
        sections: [
          {
            title: "Touch Events",
            content:
              "Touch events describe interactions between the user and the device screen. Applications can detect actions such as pressing, moving, and releasing a finger.",
          },
          {
            title: "Common Gestures",
            content:
              "Common gestures include tap, double tap, long press, swipe, and drag. Different gestures can be used for different application behaviors.",
          },
          {
            title: "Gesture Design",
            content:
              "Gestures should be intuitive and should not be the only way to access important functionality when users may have difficulty discovering or performing them.",
          },
        ],
        mistakes: [
          "Using gestures that users cannot easily discover.",
          "Making important functionality depend entirely on hidden gestures.",
          "Failing to consider accidental touches.",
        ],
        quiz: [
          {
            question: "Which is an example of a touch gesture?",
            options: ["Swipe", "Gradle sync", "APK build", "SQL query"],
            answer: "Swipe",
          },
          {
            question: "What can touch events describe?",
            options: [
              "Interactions with the device screen",
              "Database relationships",
              "Gradle dependencies",
              "Application package names",
            ],
            answer: "Interactions with the device screen",
          },
          {
            question: "What is an important consideration when designing gestures?",
            options: [
              "They should be intuitive",
              "They should always be hidden",
              "They should replace every button",
              "They should never provide feedback",
            ],
            answer: "They should be intuitive",
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
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-userinput-eventhandling", subtopics);
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
            🖱️ User Input & Event Handling
          </h1>

          <p style={styles.subtitle}>
            Learn how Android applications receive user input, handle
            clicks and selections, validate text, and respond to touch
            interactions.
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

export default UserInputEventHandling;