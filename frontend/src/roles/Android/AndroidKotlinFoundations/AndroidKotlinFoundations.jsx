import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
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

function AndroidKotlinFoundations({ goBack }) {
  const subtopics = [
    {
      id: "android-introduction",
      title: "Introduction to Android Development",
      icon: "📱",
      lesson: {
        overview:
          "Android development involves creating applications that run on Android devices such as smartphones, tablets, TVs, and other supported devices. Android apps are commonly developed using Kotlin and Android Studio.",

        sections: [
          {
            title: "What is Android?",
            content:
              "Android is a mobile operating system and development platform. Android applications can provide features such as communication, entertainment, productivity, education, shopping, and many other services.",
          },
          {
            title: "Android Development",
            content:
              "Android applications are built using programming languages such as Kotlin and Java along with Android APIs and development tools. Developers create user interfaces, implement application logic, work with device capabilities, store data, and communicate with external services.",
          },
          {
            title: "Android Development Environment",
            content:
              "Android Studio is the primary development environment used for modern Android development. It provides tools for writing code, designing interfaces, managing projects, running applications, debugging, and testing.",
          },
        ],

        mistakes: [
          "Trying to learn Android development without understanding programming fundamentals.",
          "Ignoring the Android project structure.",
          "Writing application logic without understanding the Android lifecycle.",
          "Testing only on one device or screen size.",
        ],

        quiz: [
          {
            question:
              "Which language is commonly recommended for modern Android development?",
            options: ["Kotlin", "HTML", "SQL", "CSS"],
            answer: "Kotlin",
          },
          {
            question: "Which IDE is primarily used for Android development?",
            options: [
              "Android Studio",
              "Microsoft Word",
              "MySQL Workbench",
              "Photoshop",
            ],
            answer: "Android Studio",
          },
          {
            question: "What can Android applications provide?",
            options: [
              "Mobile applications and services",
              "Only database tables",
              "Only web pages",
              "Only operating system drivers",
            ],
            answer: "Mobile applications and services",
          },
        ],
      },
    },

    {
      id: "kotlin-basics",
      title: "Kotlin Basics",
      icon: "🟣",
      lesson: {
        overview:
          "Kotlin is a modern programming language widely used for Android development. Its concise syntax, null-safety features, and interoperability with Java make it well suited for building Android applications.",

        sections: [
          {
            title: "Kotlin Syntax",
            content:
              "Kotlin programs are organized using variables, functions, classes, and expressions. Kotlin does not require semicolons at the end of every statement, and its syntax is designed to reduce unnecessary code.",
          },
          {
            title: "Variables",
            content:
              "Kotlin uses val for read-only references and var for variables whose values can be reassigned. Kotlin can often infer the type of a variable from the value assigned to it.",
          },
          {
            title: "Basic Output and Expressions",
            content:
              "The println() function can be used to print information to the console. Kotlin supports arithmetic, comparison, logical, and other expressions that form the basis of application logic.",
          },
        ],

        mistakes: [
          "Using var everywhere when a val would be sufficient.",
          "Ignoring Kotlin's type system.",
          "Writing unnecessarily verbose Java-style code.",
          "Trying to use variables without initializing them when initialization is required.",
        ],

        quiz: [
          {
            question: "Which Kotlin keyword is used for a read-only variable?",
            options: ["val", "var", "let", "constVar"],
            answer: "val",
          },
          {
            question: "Which Kotlin keyword allows reassignment?",
            options: ["var", "val", "fixed", "readonly"],
            answer: "var",
          },
          {
            question: "Which function prints output to the console?",
            options: ["println()", "printConsole()", "console.log()", "display()"],
            answer: "println()",
          },
        ],
      },
    },

    {
      id: "kotlin-variables-data-types",
      title: "Kotlin Variables & Data Types",
      icon: "🔢",
      lesson: {
        overview:
          "Variables store values that an application works with. Kotlin provides several built-in data types and uses a strong type system to help developers write safer code.",

        sections: [
          {
            title: "Basic Data Types",
            content:
              "Common Kotlin data types include Int for integers, Double and Float for decimal numbers, Boolean for true or false values, Char for individual characters, and String for text.",
          },
          {
            title: "Type Inference",
            content:
              "Kotlin can often determine the type of a variable automatically from its assigned value. For example, a value such as 25 can be inferred as an integer while a quoted value can be inferred as a String.",
          },
          {
            title: "Type Conversion",
            content:
              "Kotlin does not automatically perform every numeric conversion. Functions such as toInt(), toDouble(), toFloat(), and toString() can be used when an explicit conversion is required.",
          },
        ],

        mistakes: [
          "Assuming all numeric types can be freely assigned to one another.",
          "Using the wrong data type for a value.",
          "Performing conversions without checking whether the input is valid.",
          "Confusing Char with String.",
        ],

        quiz: [
          {
            question: "Which Kotlin type represents true or false values?",
            options: ["Boolean", "String", "Int", "Char"],
            answer: "Boolean",
          },
          {
            question: "Which type is commonly used for whole numbers?",
            options: ["Int", "String", "Boolean", "Char"],
            answer: "Int",
          },
          {
            question: "Which function can convert a value to a String?",
            options: ["toString()", "toText()", "asStringValue()", "convertText()"],
            answer: "toString()",
          },
        ],
      },
    },

    {
      id: "kotlin-control-flow",
      title: "Kotlin Control Flow",
      icon: "🔀",
      lesson: {
        overview:
          "Control flow determines the order in which instructions execute. Kotlin provides conditional statements and loops for making decisions and repeating operations.",

        sections: [
          {
            title: "if and else",
            content:
              "The if expression evaluates a condition and executes appropriate code depending on whether the condition is true or false. Kotlin also allows if to return a value, making it an expression.",
          },
          {
            title: "when Expression",
            content:
              "The when expression is Kotlin's flexible alternative to traditional switch-style logic. It can compare a value against multiple possibilities and can also be used to evaluate different conditions.",
          },
          {
            title: "Loops",
            content:
              "Kotlin provides for and while loops for repeated execution. The for loop is commonly used to iterate over ranges and collections, while while repeats code as long as a condition remains true.",
          },
        ],

        mistakes: [
          "Creating loops that never terminate.",
          "Using complicated nested conditions unnecessarily.",
          "Forgetting that when can be used as an expression.",
          "Using the wrong loop for the problem.",
        ],

        quiz: [
          {
            question:
              "Which Kotlin construct is commonly used as an alternative to switch?",
            options: ["when", "choose", "switchCase", "select"],
            answer: "when",
          },
          {
            question:
              "Which loop is commonly used to iterate through a collection?",
            options: ["for", "repeatUntil", "switch", "condition"],
            answer: "for",
          },
          {
            question: "What does an if statement evaluate?",
            options: [
              "A condition",
              "A database",
              "A class file",
              "A package name",
            ],
            answer: "A condition",
          },
        ],
      },
    },

    {
      id: "kotlin-functions",
      title: "Kotlin Functions",
      icon: "🧩",
      lesson: {
        overview:
          "Functions allow developers to organize reusable pieces of logic. Kotlin provides concise syntax for defining functions and supports parameters, return values, default arguments, and other useful features.",

        sections: [
          {
            title: "Defining Functions",
            content:
              "Kotlin functions are declared using the fun keyword. A function can accept parameters and can optionally return a value. Functions help divide a program into smaller, understandable units.",
          },
          {
            title: "Parameters and Return Values",
            content:
              "Parameters allow values to be passed into a function. A return type can specify the type of value returned by the function. Kotlin can infer the return type in many expression-bodied functions.",
          },
          {
            title: "Default and Named Arguments",
            content:
              "Kotlin supports default parameter values, which allow callers to omit arguments when appropriate. Named arguments allow a caller to specify which parameter a value belongs to, improving readability.",
          },
        ],

        mistakes: [
          "Creating functions that perform too many unrelated tasks.",
          "Using unclear function names.",
          "Ignoring parameter types and return types.",
          "Repeating the same logic instead of extracting it into a function.",
        ],

        quiz: [
          {
            question: "Which keyword is used to define a Kotlin function?",
            options: ["fun", "function", "def", "method"],
            answer: "fun",
          },
          {
            question: "What do function parameters provide?",
            options: [
              "Input values to a function",
              "Only class names",
              "Database connections",
              "Screen layouts",
            ],
            answer: "Input values to a function",
          },
          {
            question: "What is the benefit of reusable functions?",
            options: [
              "They reduce repeated logic",
              "They remove all variables",
              "They replace Android Studio",
              "They automatically create databases",
            ],
            answer: "They reduce repeated logic",
          },
        ],
      },
    },

    {
      id: "kotlin-classes-objects",
      title: "Kotlin Classes & Objects",
      icon: "🏗️",
      lesson: {
        overview:
          "Classes and objects are fundamental concepts of object-oriented programming. Kotlin provides concise syntax for creating classes, properties, constructors, methods, and objects.",

        sections: [
          {
            title: "Classes and Properties",
            content:
              "A class defines the structure and behavior of objects. Kotlin allows properties to be declared directly in the primary constructor, making class definitions concise.",
          },
          {
            title: "Objects and Instances",
            content:
              "An object is an instance of a class. Multiple objects can be created from the same class, with each object maintaining its own state.",
          },
          {
            title: "Constructors and Methods",
            content:
              "Constructors initialize objects, while methods define behavior. Kotlin supports primary and secondary constructors and allows methods to be defined directly inside classes.",
          },
        ],

        mistakes: [
          "Creating classes when a simple function or data structure would be enough.",
          "Putting too much unrelated responsibility into one class.",
          "Confusing a class definition with an object instance.",
          "Ignoring visibility and encapsulation.",
        ],

        quiz: [
          {
            question: "What does a class define?",
            options: [
              "Structure and behavior for objects",
              "Only database tables",
              "Only screen colors",
              "Only application icons",
            ],
            answer: "Structure and behavior for objects",
          },
          {
            question: "What is an instance of a class called?",
            options: ["An object", "A package", "A module", "A compiler"],
            answer: "An object",
          },
          {
            question: "What is the purpose of a constructor?",
            options: [
              "To initialize an object",
              "To delete an application",
              "To create a database server",
              "To design an icon",
            ],
            answer: "To initialize an object",
          },
        ],
      },
    },

    {
      id: "kotlin-collections-null-safety",
      title: "Collections & Null Safety",
      icon: "📦",
      lesson: {
        overview:
          "Kotlin provides collection types for storing groups of values and built-in null-safety features that help prevent common null reference errors.",

        sections: [
          {
            title: "Collections",
            content:
              "Common Kotlin collection types include List, Set, and Map. Lists maintain an ordered collection, Sets contain unique elements, and Maps store key-value pairs.",
          },
          {
            title: "Mutable and Read-Only Collections",
            content:
              "Kotlin distinguishes between read-only collection interfaces and mutable collection types. Functions such as mutableListOf() can create collections that allow modifications.",
          },
          {
            title: "Null Safety",
            content:
              "Kotlin's type system distinguishes nullable and non-nullable types. A nullable type is marked using ?, and developers can use safe calls such as ?. and the Elvis operator ?: to handle possible null values safely.",
          },
        ],

        mistakes: [
          "Using nullable types everywhere without a reason.",
          "Using the non-null assertion operator !! without checking the value.",
          "Confusing List with MutableList.",
          "Assuming a collection always contains at least one element.",
        ],

        quiz: [
          {
            question: "Which collection stores key-value pairs?",
            options: ["Map", "List", "Set", "ArrayOnly"],
            answer: "Map",
          },
          {
            question: "How is a nullable Kotlin type indicated?",
            options: ["Using ?", "Using !", "Using #", "Using *"],
            answer: "Using ?",
          },
          {
            question: "What does the safe-call operator look like?",
            options: ["?.", "!!", "??", "::"],
            answer: "?.",
          },
        ],
      },
    },

    {
      id: "kotlin-for-android",
      title: "Kotlin for Android",
      icon: "⚙️",
      lesson: {
        overview:
          "Kotlin provides many features that are particularly useful when building Android applications. Understanding how Kotlin concepts map to Android development creates a strong foundation for working with modern Android APIs.",

        sections: [
          {
            title: "Kotlin and Android",
            content:
              "Modern Android development uses Kotlin extensively. Kotlin's concise syntax can reduce boilerplate code while features such as null safety, extension functions, and higher-order functions support clean application development.",
          },
          {
            title: "Lambdas and Higher-Order Functions",
            content:
              "Kotlin supports lambda expressions and higher-order functions, which are useful when working with collections, callbacks, event handling, and Android APIs. These features allow behavior to be passed as values.",
          },
          {
            title: "Coroutines Introduction",
            content:
              "Kotlin coroutines provide a way to write asynchronous code in a sequential style. They are widely used in Android applications for tasks such as network requests and database operations without blocking the main thread.",
          },
        ],

        mistakes: [
          "Running long operations directly on the main thread.",
          "Using Kotlin features without understanding their behavior.",
          "Ignoring null safety when working with Android APIs.",
          "Starting coroutine-based development without understanding basic coroutine concepts.",
        ],

        quiz: [
          {
            question: "Why is Kotlin widely used for Android development?",
            options: [
              "It provides concise syntax and modern language features",
              "It only works for databases",
              "It replaces the Android operating system",
              "It is used only for designing icons",
            ],
            answer:
              "It provides concise syntax and modern language features",
          },
          {
            question: "What can Kotlin coroutines help with?",
            options: [
              "Asynchronous tasks",
              "Changing phone hardware",
              "Creating physical buttons",
              "Installing Android Studio",
            ],
            answer: "Asynchronous tasks",
          },
          {
            question:
              "Why should long-running operations not block the main thread?",
            options: [
              "It can make the application unresponsive",
              "It changes the application name",
              "It deletes the database",
              "It removes all UI elements",
            ],
            answer: "It can make the application unresponsive",
          },
        ],
      },
    },
  ];

  const { completed, markComplete: saveProgress } = useLearningProgress("android-androidkotlinfoundations", subtopics);
  const [activeTopicIndex, setActiveTopicIndex] = useState(null);

  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const activeTopic =
    activeTopicIndex !== null ? subtopics[activeTopicIndex] : null;

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
    setAnswerSubmitted(false);
  };

  const openTopic = (index) => {
    setActiveTopicIndex(index);
    resetQuiz();
  };

  const closeTopic = () => {
    setActiveTopicIndex(null);
    resetQuiz();
  };

  const goToPreviousLesson = () => {
    if (activeTopicIndex === null || activeTopicIndex === 0) {
      return;
    }

    setActiveTopicIndex((prev) => prev - 1);
    resetQuiz();
  };

  const goToNextLesson = () => {
    if (
      activeTopicIndex === null ||
      activeTopicIndex === subtopics.length - 1
    ) {
      return;
    }

    setActiveTopicIndex((prev) => prev + 1);
    resetQuiz();
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
    setAnswerSubmitted(false);
  };

  const submitAnswer = () => {
    if (!selectedAnswer || answerSubmitted) {
      return;
    }

    const question = activeTopic.lesson.quiz[questionIndex];

    if (selectedAnswer === question.answer) {
      setQuizScore((prev) => prev + 1);
    }

    setAnswerSubmitted(true);
  };

  const goToNextQuestion = async () => {
    if (!answerSubmitted) {
      return;
    }

    if (questionIndex < activeTopic.lesson.quiz.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerSubmitted(false);
    } else {
      await saveQuizResult({
        subject: "Android Developer",
        role: "Android Developer",
        topic: activeTopic.title,
        topicId: activeTopic.id,
        score: quizScore,
        totalQuestions: activeTopic.lesson.quiz.length,
      });
      setQuizFinished(true);
    }
  };

  const markComplete = () => {
    saveProgress(activeTopic.id);
  };

  if (activeTopic) {
    const quiz = activeTopic.lesson.quiz;
    const question = quiz[questionIndex];
    const options = shuffledQuizOptions[activeTopic.id][questionIndex];

    const isFirstLesson = activeTopicIndex === 0;
    const isLastLesson = activeTopicIndex === subtopics.length - 1;

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* Back to Topics */}
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
              marginBottom: "20px",
            }}
          >
            ← Back to Topics
          </button>

          {/* Top Lesson Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              padding: "15px 20px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
              gap: "15px",
            }}
          >
            <button
              onClick={goToPreviousLesson}
              disabled={isFirstLesson}
              style={{
                background: isFirstLesson ? "#cbd5e1" : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 16px",
                cursor: isFirstLesson ? "not-allowed" : "pointer",
                fontSize: "14px",
              }}
            >
              ← Previous
            </button>

            <div
              style={{
                textAlign: "center",
                color: "#1e3a8a",
                fontWeight: "600",
              }}
            >
              Lesson {activeTopicIndex + 1} of {subtopics.length}
            </div>

            <button
              onClick={goToNextLesson}
              disabled={isLastLesson}
              style={{
                background: isLastLesson ? "#cbd5e1" : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 16px",
                cursor: isLastLesson ? "not-allowed" : "pointer",
                fontSize: "14px",
              }}
            >
              Next →
            </button>
          </div>

          {/* Lesson Progress */}
          <div
            style={{
              width: "100%",
              height: "8px",
              background: "#dbeafe",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                width: `${
                  ((activeTopicIndex + 1) / subtopics.length) * 100
                }%`,
                height: "100%",
                background: "#2563eb",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {/* Main Lesson Card */}
          <div
            style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "35px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
            }}
          >
            <h1
              style={{
                color: "#1e3a8a",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              {activeTopic.icon} {activeTopic.title}
            </h1>

            {/* Overview */}
            <div
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>Overview</h3>

              <p>{activeTopic.lesson.overview}</p>
            </div>

            {/* Sections */}
            {activeTopic.lesson.sections.map((section) => (
              <div
                key={section.title}
                style={{
                  marginBottom: "25px",
                }}
              >
                <h3
                  style={{
                    color: "#1e3a8a",
                    marginBottom: "8px",
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {section.content}
                </p>
              </div>
            ))}

            {/* Common Mistakes */}
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  marginTop: 0,
                }}
              >
                ⚠️ Common Mistakes
              </h3>

              <ul
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                  marginBottom: 0,
                }}
              >
                {activeTopic.lesson.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>

            {/* Start Quiz */}
            {!quizStarted && !completed.includes(activeTopic.id) && (
              <button
                onClick={startQuiz}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 18px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                📝 Start Quiz
              </button>
            )}

            {/* Completed */}
            {completed.includes(activeTopic.id) && !quizStarted && (
              <div
                style={{
                  background: "#eff6ff",
                  border: "1px solid #93c5fd",
                  borderRadius: "10px",
                  padding: "18px",
                  textAlign: "center",
                  color: "#1e3a8a",
                  fontWeight: "600",
                }}
              >
                ✅ Lesson Completed
              </div>
            )}

            {/* Quiz */}
            {quizStarted && !quizFinished && (
              <div
                style={{
                  marginTop: "30px",
                  borderTop: "1px solid #dbeafe",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    color: "#64748b",
                    marginBottom: "12px",
                  }}
                >
                  Question {questionIndex + 1} of {quiz.length}
                </div>

                <h3
                  style={{
                    color: "#1e3a8a",
                    marginBottom: "20px",
                  }}
                >
                  {question.question}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {options.map((option) => {
                    const isCorrect = option === question.answer;
                    const isSelected = option === selectedAnswer;

                    let background = "white";
                    let border = "1px solid #bfdbfe";
                    let textColor = "#334155";

                    if (answerSubmitted) {
                      if (isCorrect) {
                        background = "#dcfce7";
                        border = "2px solid #16a34a";
                        textColor = "#166534";
                      } else if (isSelected) {
                        background = "#fee2e2";
                        border = "2px solid #dc2626";
                        textColor = "#991b1b";
                      }
                    } else if (isSelected) {
                      background = "#eff6ff";
                      border = "2px solid #2563eb";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => {
                          if (!answerSubmitted) {
                            setSelectedAnswer(option);
                          }
                        }}
                        disabled={answerSubmitted}
                        style={{
                          textAlign: "left",
                          padding: "13px 16px",
                          borderRadius: "8px",
                          border,
                          background,
                          color: textColor,
                          cursor: answerSubmitted
                            ? "default"
                            : "pointer",
                          fontSize: "15px",
                          fontWeight:
                            answerSubmitted && isCorrect
                              ? "600"
                              : "400",
                        }}
                      >
                        {answerSubmitted && isCorrect && "✅ "}
                        {answerSubmitted &&
                          isSelected &&
                          !isCorrect &&
                          "❌ "}
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {answerSubmitted && (
                  <div
                    style={{
                      marginTop: "18px",
                      padding: "15px",
                      borderRadius: "8px",
                      background:
                        selectedAnswer === question.answer
                          ? "#dcfce7"
                          : "#fee2e2",
                      border:
                        selectedAnswer === question.answer
                          ? "1px solid #86efac"
                          : "1px solid #fca5a5",
                      color:
                        selectedAnswer === question.answer
                          ? "#166534"
                          : "#991b1b",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedAnswer === question.answer ? (
                      <strong>✅ Correct Answer!</strong>
                    ) : (
                      <>
                        <strong>❌ Incorrect Answer.</strong>
                        <br />
                        Correct answer:{" "}
                        <strong>{question.answer}</strong>
                      </>
                    )}
                  </div>
                )}

                {/* Quiz Button */}
                {!answerSubmitted ? (
                  <button
                    onClick={submitAnswer}
                    disabled={!selectedAnswer}
                    style={{
                      width: "100%",
                      marginTop: "22px",
                      background: selectedAnswer
                        ? "#2563eb"
                        : "#94a3b8",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "13px 18px",
                      cursor: selectedAnswer
                        ? "pointer"
                        : "not-allowed",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={goToNextQuestion}
                    style={{
                      width: "100%",
                      marginTop: "22px",
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "13px 18px",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {questionIndex === quiz.length - 1
                      ? "Finish Quiz"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            )}

            {/* Quiz Finished */}
            {quizFinished && (
              <div
                style={{
                  marginTop: "30px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "#1e3a8a",
                    marginTop: 0,
                  }}
                >
                  🎉 Quiz Completed!
                </h2>

                <p
                  style={{
                    color: "#475569",
                    fontSize: "17px",
                  }}
                >
                  Score: {quizScore} / {quiz.length}
                </p>

                {!completed.includes(activeTopic.id) && (
                  <button
                    onClick={markComplete}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px 20px",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    ✅ Mark Lesson Complete
                  </button>
                )}

                {completed.includes(activeTopic.id) && (
                  <p
                    style={{
                      color: "#1e3a8a",
                      fontWeight: "600",
                    }}
                  >
                    ✅ This lesson is already completed.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Bottom Lesson Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "25px",
              gap: "15px",
            }}
          >
            <button
              onClick={goToPreviousLesson}
              disabled={isFirstLesson}
              style={{
                flex: 1,
                background: isFirstLesson ? "#cbd5e1" : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "13px 18px",
                cursor: isFirstLesson ? "not-allowed" : "pointer",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={closeTopic}
              style={{
                background: "white",
                color: "#2563eb",
                border: "1px solid #2563eb",
                borderRadius: "8px",
                padding: "13px 18px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              📚 Back to Topics
            </button>

            <button
              onClick={goToNextLesson}
              disabled={isLastLesson}
              style={{
                flex: 1,
                background: isLastLesson ? "#cbd5e1" : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "13px 18px",
                cursor: isLastLesson ? "not-allowed" : "pointer",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #ffffff)",
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
        {/* Back to Android Roadmap */}
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
          ← Back to Android Developer Roadmap
        </button>

        {/* Heading */}
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
            📱 Android & Kotlin Foundations
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Build a strong foundation in Android development and Kotlin
            programming.
          </p>
        </div>

        {/* Overall Progress */}
        <div
          style={{
            background: "white",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
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
              {completedCount} / {subtopics.length} Lessons
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
            {overallProgress}% Complete
          </div>
        </div>

        {/* Lesson Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completed.includes(topic.id);

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  border: "1px solid #bfdbfe",
                  borderRadius: "14px",
                  padding: "25px",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  Lesson {index + 1}
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
                    color: isCompleted ? "#2563eb" : "#64748b",
                    marginBottom: "12px",
                  }}
                >
                  {isCompleted ? "✅ Completed" : "📚 Lesson"}
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#dbeafe",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted ? "100%" : "0%",
                      height: "100%",
                      background: "#2563eb",
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
                    {isCompleted ? "1 / 1 completed" : "0 / 1 completed"}
                  </span>
                </div>

                <button
                  onClick={() => openTopic(index)}
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
                  ▶ Open Lesson
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AndroidKotlinFoundations;