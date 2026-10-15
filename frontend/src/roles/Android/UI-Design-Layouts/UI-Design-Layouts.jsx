import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const UIDesignLayouts = ({ goBack }) => {
  const subtopics = [
    {
      id: "android-ui-basics",
      title: "Android UI Basics",
      lesson: {
        overview:
          "Android user interfaces are built using UI components such as text, buttons, images, input fields, and containers. Understanding these basic components is essential for creating usable Android applications.",
        sections: [
          {
            title: "What is an Android UI?",
            content:
              "The user interface is the part of an Android application that users see and interact with. It can contain text, buttons, images, input fields, lists, menus, and other interactive elements.",
          },
          {
            title: "Views and ViewGroups",
            content:
              "A View represents an individual UI element, such as a TextView or Button. A ViewGroup is a container that can hold and arrange multiple views. Layouts such as LinearLayout and ConstraintLayout are examples of ViewGroups.",
          },
          {
            title: "UI Components",
            content:
              "Common Android UI components include TextView for displaying text, EditText for user input, Button for actions, ImageView for images, and RecyclerView for displaying lists efficiently.",
          },
        ],
        mistakes: [
          "Treating every UI component as a layout container.",
          "Using too many nested layouts unnecessarily.",
          "Ignoring usability when arranging UI components.",
        ],
        quiz: [
          {
            question: "What does a View represent in Android?",
            options: [
              "An individual UI element",
              "A database",
              "A Gradle file",
              "An Android device",
            ],
            answer: "An individual UI element",
          },
          {
            question: "Which is an example of a ViewGroup?",
            options: [
              "LinearLayout",
              "TextView",
              "Button",
              "EditText",
            ],
            answer: "LinearLayout",
          },
          {
            question: "Which component is commonly used to display text?",
            options: ["TextView", "Button", "ImageView", "RecyclerView"],
            answer: "TextView",
          },
        ],
      },
    },

    {
      id: "xml-layouts",
      title: "XML Layouts",
      lesson: {
        overview:
          "XML can be used to describe Android user interfaces. Layout XML files define the structure and properties of UI components and can be associated with activities or other parts of an application.",
        sections: [
          {
            title: "What is XML?",
            content:
              "XML stands for Extensible Markup Language. In traditional Android UI development, XML files are used to describe the hierarchy and properties of interface components.",
          },
          {
            title: "Layout Files",
            content:
              "Layout XML files are commonly stored inside the res/layout directory. They define which views appear on a screen and how those views are arranged.",
          },
          {
            title: "Common Attributes",
            content:
              "Common XML attributes include layout_width, layout_height, id, text, padding, margin, and orientation. These attributes control the appearance and positioning of UI components.",
          },
        ],
        mistakes: [
          "Forgetting to provide required layout dimensions.",
          "Using duplicate IDs for views that need to be accessed individually.",
          "Confusing padding with margin.",
        ],
        quiz: [
          {
            question: "Where are Android XML layout files commonly stored?",
            options: [
              "res/layout",
              "res/database",
              "src/images",
              "gradle/layout",
            ],
            answer: "res/layout",
          },
          {
            question: "Which attribute identifies a view?",
            options: ["id", "color", "orientation", "padding"],
            answer: "id",
          },
          {
            question: "Which attribute controls the space inside a view?",
            options: ["padding", "margin", "id", "orientation"],
            answer: "padding",
          },
        ],
      },
    },

    {
      id: "textview-edittext",
      title: "TextView & EditText",
      lesson: {
        overview:
          "TextView and EditText are two fundamental Android UI components. TextView displays text while EditText allows users to enter and edit text.",
        sections: [
          {
            title: "TextView",
            content:
              "TextView is used to display text to the user. Its properties can control the text content, size, appearance, alignment, and other visual characteristics.",
          },
          {
            title: "EditText",
            content:
              "EditText provides an input field where users can enter information such as names, email addresses, passwords, or other text.",
          },
          {
            title: "Using Input Values",
            content:
              "An application can read the value entered into an EditText and use that information for processing. Input fields should provide clear labels and appropriate input types.",
          },
        ],
        mistakes: [
          "Using TextView when user input is required.",
          "Not specifying an appropriate input type for EditText.",
          "Leaving input fields without meaningful labels or hints.",
        ],
        quiz: [
          {
            question: "Which component displays text?",
            options: ["TextView", "EditText", "Button", "ImageView"],
            answer: "TextView",
          },
          {
            question: "Which component allows users to enter text?",
            options: ["EditText", "TextView", "ImageView", "LinearLayout"],
            answer: "EditText",
          },
          {
            question: "What should an input field generally provide?",
            options: [
              "A clear purpose or label",
              "Only an image",
              "A database connection",
              "A Gradle plugin",
            ],
            answer: "A clear purpose or label",
          },
        ],
      },
    },

    {
      id: "buttons-imageview",
      title: "Buttons & ImageView",
      lesson: {
        overview:
          "Buttons allow users to perform actions, while ImageView displays images in an Android interface. Both are commonly used in interactive applications.",
        sections: [
          {
            title: "Button",
            content:
              "A Button is an interactive UI component that can trigger an action when the user taps it. Examples include Login, Submit, Save, Delete, and Continue buttons.",
          },
          {
            title: "ImageView",
            content:
              "ImageView is used to display images in an Android application. Images can come from application resources or other supported sources.",
          },
          {
            title: "User Interaction",
            content:
              "Buttons can respond to user interactions through click handling. The application can then perform an operation such as changing a screen, submitting information, or updating data.",
          },
        ],
        mistakes: [
          "Using buttons without meaningful labels.",
          "Using images that are unnecessarily large.",
          "Forgetting to provide appropriate click behavior for interactive buttons.",
        ],
        quiz: [
          {
            question: "What is a Button mainly used for?",
            options: [
              "Performing an action",
              "Displaying a database",
              "Storing images",
              "Managing Gradle",
            ],
            answer: "Performing an action",
          },
          {
            question: "Which component displays an image?",
            options: ["ImageView", "TextView", "EditText", "Button"],
            answer: "ImageView",
          },
          {
            question: "What commonly happens when a user taps a Button?",
            options: [
              "A click action is triggered",
              "The application is always deleted",
              "The emulator shuts down",
              "The database is automatically removed",
            ],
            answer: "A click action is triggered",
          },
        ],
      },
    },

    {
      id: "linear-layout",
      title: "LinearLayout",
      lesson: {
        overview:
          "LinearLayout is a layout container that arranges its child views in a single direction: vertically or horizontally.",
        sections: [
          {
            title: "Vertical Orientation",
            content:
              "With vertical orientation, child views are arranged from top to bottom. This is useful for simple forms and screens where components need to appear one below another.",
          },
          {
            title: "Horizontal Orientation",
            content:
              "With horizontal orientation, child views are arranged from left to right. It can be useful for placing related controls beside each other.",
          },
          {
            title: "Weight and Space",
            content:
              "LinearLayout supports layout weights that can be used to distribute available space among child views. However, excessive use of weights can affect performance and layout complexity.",
          },
        ],
        mistakes: [
          "Creating deeply nested LinearLayouts.",
          "Using weights unnecessarily.",
          "Forgetting to specify the orientation.",
        ],
        quiz: [
          {
            question: "How does LinearLayout arrange its children?",
            options: [
              "In a single direction",
              "Only in a grid",
              "Randomly",
              "Only as a list",
            ],
            answer: "In a single direction",
          },
          {
            question: "Which orientations are available in LinearLayout?",
            options: [
              "Vertical and horizontal",
              "Diagonal and circular",
              "Grid and diagonal",
              "Only vertical",
            ],
            answer: "Vertical and horizontal",
          },
          {
            question: "What can layout weight help with?",
            options: [
              "Distributing available space",
              "Creating databases",
              "Compiling Kotlin",
              "Installing Android Studio",
            ],
            answer: "Distributing available space",
          },
        ],
      },
    },

    {
      id: "constraint-layout",
      title: "ConstraintLayout",
      lesson: {
        overview:
          "ConstraintLayout is a flexible layout system that positions views using relationships called constraints. It can help create complex responsive interfaces with a relatively flat view hierarchy.",
        sections: [
          {
            title: "What are Constraints?",
            content:
              "Constraints define relationships between views or between a view and its parent. For example, a view can be constrained to the top, bottom, start, or end of another view.",
          },
          {
            title: "Positioning Views",
            content:
              "Instead of relying only on fixed positions, ConstraintLayout allows developers to describe how views should relate to one another. This makes interfaces more adaptable to different screen sizes.",
          },
          {
            title: "Benefits",
            content:
              "ConstraintLayout can reduce unnecessary nested layouts and provide flexible control over positioning. It is useful when designing more complex Android screens.",
          },
        ],
        mistakes: [
          "Creating incomplete constraints.",
          "Using hard-coded positions instead of relationships.",
          "Adding unnecessary constraints that make layouts difficult to understand.",
        ],
        quiz: [
          {
            question: "How does ConstraintLayout position views?",
            options: [
              "Using constraints and relationships",
              "Using database queries",
              "Using SQL joins",
              "Using Gradle dependencies",
            ],
            answer: "Using constraints and relationships",
          },
          {
            question: "What is one benefit of ConstraintLayout?",
            options: [
              "Flexible positioning with fewer nested layouts",
              "Automatic database creation",
              "Automatic Kotlin compilation",
              "Replacing Android Studio",
            ],
            answer: "Flexible positioning with fewer nested layouts",
          },
          {
            question: "A constraint can define a relationship between what?",
            options: [
              "Views or a view and its parent",
              "Only databases",
              "Only activities and Gradle",
              "Only images",
            ],
            answer: "Views or a view and its parent",
          },
        ],
      },
    },

    {
      id: "scrollview-recyclerview",
      title: "ScrollView & RecyclerView Basics",
      lesson: {
        overview:
          "ScrollView allows content to be scrolled when it does not fit on the screen. RecyclerView is designed for displaying collections of items efficiently and is commonly used for lists.",
        sections: [
          {
            title: "ScrollView",
            content:
              "ScrollView provides scrolling for content that is larger than the available screen area. It is useful for screens such as long forms or informational pages.",
          },
          {
            title: "RecyclerView",
            content:
              "RecyclerView displays a collection of items using reusable view holders. It is designed to efficiently handle lists or grids containing many items.",
          },
          {
            title: "When to Use Them",
            content:
              "ScrollView is useful for a single scrollable content area, while RecyclerView is generally preferred for dynamic collections of repeated items such as contact lists, messages, or products.",
          },
        ],
        mistakes: [
          "Using ScrollView for very large dynamic lists.",
          "Forgetting to configure a RecyclerView layout manager and adapter.",
          "Creating unnecessarily complex list item layouts.",
        ],
        quiz: [
          {
            question: "What is ScrollView mainly used for?",
            options: [
              "Scrolling content",
              "Managing dependencies",
              "Creating databases",
              "Compiling Kotlin",
            ],
            answer: "Scrolling content",
          },
          {
            question: "Which component is designed for displaying collections of items efficiently?",
            options: ["RecyclerView", "TextView", "ImageView", "EditText"],
            answer: "RecyclerView",
          },
          {
            question: "Which is a common use case for RecyclerView?",
            options: [
              "Displaying a list of products",
              "Storing passwords",
              "Building Gradle",
              "Installing Android Studio",
            ],
            answer: "Displaying a list of products",
          },
        ],
      },
    },

    {
      id: "responsive-ui",
      title: "Designing Responsive Android UIs",
      lesson: {
        overview:
          "Android applications run on devices with different screen sizes, resolutions, and orientations. Responsive UI design helps interfaces remain usable across different devices.",
        sections: [
          {
            title: "Different Screen Sizes",
            content:
              "Android devices can have different screen dimensions and densities. UI layouts should avoid relying on fixed pixel positions so that they can adapt to different screens.",
          },
          {
            title: "dp and sp",
            content:
              "Density-independent pixels (dp) are commonly used for layout dimensions, while scale-independent pixels (sp) are commonly used for text sizes. These units help maintain consistent sizing across devices.",
          },
          {
            title: "Responsive Design Practices",
            content:
              "Use flexible layouts, appropriate constraints, scalable dimensions, and scrollable content where necessary. Interfaces should remain readable and accessible in different orientations and screen sizes.",
          },
        ],
        mistakes: [
          "Using fixed pixel values everywhere.",
          "Ignoring landscape orientation.",
          "Making text too small or difficult to read.",
        ],
        quiz: [
          {
            question: "Which unit is commonly used for Android layout dimensions?",
            options: ["dp", "kg", "km", "px only"],
            answer: "dp",
          },
          {
            question: "Which unit is commonly used for text size?",
            options: ["sp", "kg", "cm only", "GB"],
            answer: "sp",
          },
          {
            question: "Why should Android UIs be responsive?",
            options: [
              "Android devices have different screen sizes and configurations",
              "All Android devices have identical screens",
              "It makes databases faster",
              "It replaces Kotlin",
            ],
            answer:
              "Android devices have different screen sizes and configurations",
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
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("android-ui-design-layouts", subtopics);
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

          <h1 style={styles.title}>🎨 UI Design & Layouts</h1>

          <p style={styles.subtitle}>
            Learn how Android interfaces are built using UI components,
            XML layouts, layout containers, and responsive design
            principles.
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

export default UIDesignLayouts;