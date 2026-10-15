import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: 1,
    title: "NumPy Basics",
    icon: "🔢",
    lesson: {
      overview:
        "NumPy is a Python library used for numerical computing. It provides fast, efficient multidimensional arrays and many mathematical operations that are important in data science and machine learning.",
      sections: [
        {
          heading: "What is NumPy?",
          points: [
            "NumPy stands for Numerical Python.",
            "It provides the ndarray, a powerful multidimensional array structure.",
            "NumPy operations are generally faster than performing the same numerical operations with Python lists.",
            "It is widely used as a foundation for libraries such as Pandas and many machine learning tools.",
          ],
        },
        {
          heading: "Why NumPy is Important for AI / ML",
          points: [
            "Machine learning involves working with large amounts of numerical data.",
            "NumPy makes mathematical and array operations easier and more efficient.",
            "It supports vectors, matrices, multidimensional arrays, and numerical calculations.",
          ],
        },
        {
          heading: "Importing NumPy",
          points: [
            "NumPy is commonly imported using the alias np.",
            "Example: import numpy as np",
            "The alias np makes NumPy functions shorter and easier to use.",
          ],
        },
      ],
      commonMistakes: [
        "Confusing NumPy arrays with normal Python lists.",
        "Forgetting to import NumPy before using np.",
        "Assuming every Python operation behaves exactly the same way on NumPy arrays.",
      ],
      quiz: [
        {
          question: "What does NumPy stand for?",
          options: [
            "Numerical Python",
            "Network Python",
            "New Python",
            "Numeric Programming",
          ],
          answer: "Numerical Python",
        },
        {
          question: "What is the main array structure provided by NumPy?",
          options: [
            "ndarray",
            "DataFrame",
            "List",
            "Tuple",
          ],
          answer: "ndarray",
        },
        {
          question: "What alias is commonly used when importing NumPy?",
          options: ["np", "num", "numpyx", "npy"],
          answer: "np",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Arrays & Dimensions",
    icon: "📐",
    lesson: {
      overview:
        "NumPy arrays can store numerical data in one or more dimensions. Understanding dimensions, shape, size, and data types is essential when working with machine learning datasets.",
      sections: [
        {
          heading: "One-Dimensional Arrays",
          points: [
            "A one-dimensional array is similar to a sequence of values.",
            "It can represent a vector or a simple list of numerical values.",
            "Example: np.array([10, 20, 30, 40]).",
          ],
        },
        {
          heading: "Two-Dimensional Arrays",
          points: [
            "A two-dimensional array contains rows and columns.",
            "It can represent a matrix or a table of numerical values.",
            "Example: np.array([[1, 2], [3, 4]]).",
          ],
        },
        {
          heading: "Shape and Dimensions",
          points: [
            "The ndim attribute tells you the number of dimensions.",
            "The shape attribute tells you the size along each dimension.",
            "The size attribute gives the total number of elements.",
          ],
        },
      ],
      commonMistakes: [
        "Mixing up shape and size.",
        "Forgetting that a matrix has both rows and columns.",
        "Assuming a one-dimensional array automatically behaves like a row or column matrix.",
      ],
      quiz: [
        {
          question: "Which NumPy attribute gives the number of dimensions?",
          options: ["ndim", "shape", "size", "dimension"],
          answer: "ndim",
        },
        {
          question: "What does shape describe?",
          options: [
            "The size along each dimension",
            "Only the total number of elements",
            "The data type",
            "The memory address",
          ],
          answer: "The size along each dimension",
        },
        {
          question: "Which attribute gives the total number of elements?",
          options: ["size", "shape", "ndim", "length"],
          answer: "size",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Array Operations",
    icon: "➕",
    lesson: {
      overview:
        "NumPy allows mathematical operations to be performed efficiently on entire arrays. These operations are commonly used when transforming and preparing machine learning data.",
      sections: [
        {
          heading: "Arithmetic Operations",
          points: [
            "NumPy arrays support addition, subtraction, multiplication, and division.",
            "Operations can often be applied element by element.",
            "This avoids writing explicit loops for many numerical tasks.",
          ],
        },
        {
          heading: "Mathematical Functions",
          points: [
            "NumPy provides functions such as np.sum(), np.mean(), np.max(), and np.min().",
            "These functions can be applied to arrays to calculate useful statistics.",
            "They are frequently used during data analysis and preprocessing.",
          ],
        },
        {
          heading: "Vectorized Operations",
          points: [
            "Vectorization means applying an operation to many values at once.",
            "NumPy uses optimized numerical operations internally.",
            "Vectorized code is often shorter and more efficient than manual loops.",
          ],
        },
      ],
      commonMistakes: [
        "Using Python loops when a simple vectorized NumPy operation is available.",
        "Confusing element-wise multiplication with matrix multiplication.",
        "Ignoring the dimensions of arrays before performing operations.",
      ],
      quiz: [
        {
          question: "What is a major advantage of NumPy array operations?",
          options: [
            "They can operate on many values efficiently",
            "They remove the need for Python",
            "They only work with text",
            "They automatically build ML models",
          ],
          answer: "They can operate on many values efficiently",
        },
        {
          question: "Which function calculates the mean of values?",
          options: ["np.mean()", "np.average_all()", "np.middle()", "np.avgvalue()"],
          answer: "np.mean()",
        },
        {
          question: "What is vectorization?",
          options: [
            "Applying operations efficiently to arrays",
            "Converting Python into Java",
            "Deleting array elements",
            "Changing an array into a string",
          ],
          answer: "Applying operations efficiently to arrays",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Indexing & Slicing",
    icon: "✂️",
    lesson: {
      overview:
        "Indexing allows you to access specific elements of a NumPy array, while slicing allows you to select a range or portion of an array.",
      sections: [
        {
          heading: "Indexing",
          points: [
            "NumPy uses zero-based indexing.",
            "The first element is at index 0.",
            "For a two-dimensional array, you can specify both row and column positions.",
          ],
        },
        {
          heading: "Slicing",
          points: [
            "Slicing selects a range of elements from an array.",
            "A common slicing form is array[start:stop].",
            "The stop position is generally excluded.",
          ],
        },
        {
          heading: "Two-Dimensional Selection",
          points: [
            "Rows and columns can be selected using separate indexes.",
            "You can select individual rows, columns, or rectangular sections.",
            "This is useful when preparing subsets of datasets.",
          ],
        },
      ],
      commonMistakes: [
        "Forgetting that NumPy indexing starts at zero.",
        "Assuming the stop index in a slice is included.",
        "Using incorrect row and column positions in multidimensional arrays.",
      ],
      quiz: [
        {
          question: "What index represents the first element of a NumPy array?",
          options: ["0", "1", "-1", "first"],
          answer: "0",
        },
        {
          question: "In array[1:4], which position is normally excluded?",
          options: ["4", "1", "2", "3"],
          answer: "4",
        },
        {
          question: "What can slicing be used for?",
          options: [
            "Selecting a portion of an array",
            "Installing NumPy",
            "Changing Python versions",
            "Creating a database",
          ],
          answer: "Selecting a portion of an array",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Broadcasting",
    icon: "📡",
    lesson: {
      overview:
        "Broadcasting is a NumPy mechanism that allows arithmetic operations between arrays with compatible shapes without explicitly copying data.",
      sections: [
        {
          heading: "What is Broadcasting?",
          points: [
            "Broadcasting allows NumPy to perform operations on arrays with different but compatible shapes.",
            "It can automatically expand the smaller array conceptually to match the larger array during an operation.",
            "This makes many numerical operations concise.",
          ],
        },
        {
          heading: "Simple Example",
          points: [
            "A scalar can be added to every element of an array.",
            "For example, adding 5 to an array adds 5 to each element.",
            "NumPy handles this automatically through broadcasting.",
          ],
        },
        {
          heading: "Shape Compatibility",
          points: [
            "Broadcasting follows rules based on array dimensions.",
            "Not every pair of shapes can be broadcast together.",
            "Understanding shapes helps prevent broadcasting errors.",
          ],
        },
      ],
      commonMistakes: [
        "Assuming every differently shaped array can be combined.",
        "Ignoring array dimensions when debugging broadcasting errors.",
        "Confusing broadcasting with permanently copying values into a larger array.",
      ],
      quiz: [
        {
          question: "What does broadcasting allow NumPy to do?",
          options: [
            "Operate on compatible arrays with different shapes",
            "Convert arrays into databases",
            "Automatically train neural networks",
            "Remove all dimensions",
          ],
          answer: "Operate on compatible arrays with different shapes",
        },
        {
          question: "What can be added to every element of an array using broadcasting?",
          options: ["A scalar", "Only a string", "Only a function", "A file"],
          answer: "A scalar",
        },
        {
          question: "What is important when using broadcasting?",
          options: [
            "Shape compatibility",
            "File names",
            "HTML tags",
            "Database passwords",
          ],
          answer: "Shape compatibility",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Linear Algebra Basics",
    icon: "🧮",
    lesson: {
      overview:
        "Linear algebra is fundamental to machine learning. NumPy provides tools for working with vectors, matrices, matrix multiplication, and other numerical operations used in ML algorithms.",
      sections: [
        {
          heading: "Vectors",
          points: [
            "A vector is an ordered collection of numerical values.",
            "Vectors can represent features, observations, or mathematical quantities.",
            "NumPy arrays can be used to represent vectors.",
          ],
        },
        {
          heading: "Matrices",
          points: [
            "A matrix is a rectangular arrangement of values organized into rows and columns.",
            "Matrices are heavily used in machine learning and data representation.",
            "NumPy provides efficient operations for matrix calculations.",
          ],
        },
        {
          heading: "Matrix Multiplication",
          points: [
            "Matrix multiplication combines matrices according to specific mathematical rules.",
            "The dimensions of the matrices must be compatible.",
            "Matrix multiplication is important in neural networks and many ML calculations.",
          ],
        },
      ],
      commonMistakes: [
        "Confusing element-wise multiplication with matrix multiplication.",
        "Ignoring matrix dimensions before multiplication.",
        "Thinking vectors and matrices are interchangeable in every operation.",
      ],
      quiz: [
        {
          question: "Why is linear algebra important in machine learning?",
          options: [
            "Many ML calculations use vectors and matrices",
            "It is only used for web design",
            "It replaces Python",
            "It is unrelated to ML",
          ],
          answer: "Many ML calculations use vectors and matrices",
        },
        {
          question: "What does a matrix contain?",
          options: [
            "Values arranged in rows and columns",
            "Only one value",
            "Only text",
            "Only functions",
          ],
          answer: "Values arranged in rows and columns",
        },
        {
          question: "What must be considered before matrix multiplication?",
          options: [
            "Matrix dimensions",
            "HTML structure",
            "File extension",
            "Screen resolution",
          ],
          answer: "Matrix dimensions",
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

function NumPy({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-numpy", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const progress = Math.round(
    (completed.length /
      subtopics.length) *
      100
  );

  const handleAnswer = (questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${selectedSubtopic}-${questionIndex}`]: answer,
    }));
  };

  const checkQuiz = async () => {
    const score = calculateScore();

    await saveQuizResult({
      subject: "AI/ML",
      role: "AI/ML Engineer",
      topic: selectedTopic?.title || selectedSubtopic,
      topicId: selectedSubtopic,
      score,
      totalQuestions: selectedTopic?.lesson?.quiz?.length || 0
    });

    setQuizSubmitted((prev) => ({
      ...prev,
      [selectedSubtopic]: true,
    }));
  };

  const calculateScore = () => {
    if (!selectedTopic) return 0;

    return selectedTopic.lesson.quiz.reduce(
      (score, question, index) => {
        const selectedAnswer =
          quizAnswers[`${selectedSubtopic}-${index}`];

        return score +
          (selectedAnswer === question.answer ? 1 : 0);
      },
      0
    );
  };

  const markComplete = () => {
    saveProgress(selectedSubtopic);
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(
        subtopics[selectedIndex - 1].id
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(
        subtopics[selectedIndex + 1].id
      );
    }
  };

  if (selectedTopic) {
    const options =
      shuffledQuizOptions[selectedTopic.id];

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
            ← Back to Topics
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
            <h1
              style={{
                margin: "0 0 10px",
                fontSize: "30px",
                color: "#111827",
              }}
            >
              {selectedTopic.icon} {selectedTopic.title}
            </h1>

            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginBottom: "28px",
              }}
            >
              Lesson {selectedIndex + 1} of{" "}
              {subtopics.length}
            </p>

            <h2
              style={{
                color: "#111827",
                fontSize: "22px",
              }}
            >
              📖 Overview
            </h2>

            <p
              style={{
                color: "#374151",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              {selectedTopic.lesson.overview}
            </p>

            {selectedTopic.lesson.sections.map(
              (section) => (
                <div
                  key={section.heading}
                  style={{
                    marginTop: "28px",
                  }}
                >
                  <h2
                    style={{
                      color: "#111827",
                      fontSize: "21px",
                    }}
                  >
                    {section.heading}
                  </h2>

                  <ul
                    style={{
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
              )
            )}

            <div
              style={{
                marginTop: "30px",
                padding: "22px",
                background: "#eff6ff",
                borderRadius: "14px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  color: "#1e3a8a",
                  fontSize: "20px",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  paddingLeft: "22px",
                  color: "#374151",
                  lineHeight: "1.8",
                  marginBottom: 0,
                }}
              >
                {selectedTopic.lesson.commonMistakes.map(
                  (mistake) => (
                    <li key={mistake}>{mistake}</li>
                  )
                )}
              </ul>
            </div>

            <div
              style={{
                marginTop: "35px",
                padding: "25px",
                borderRadius: "16px",
                background: "#f8fafc",
                border: "1px solid #dbeafe",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  color: "#111827",
                }}
              >
                🧠 Quick Quiz
              </h2>

              {selectedTopic.lesson.quiz.map(
                (question, questionIndex) => {
                  const answerKey = `${selectedSubtopic}-${questionIndex}`;
                  const selectedAnswer =
                    quizAnswers[answerKey];

                  return (
                    <div
                      key={question.question}
                      style={{
                        marginBottom: "28px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "700",
                          color: "#111827",
                          lineHeight: "1.5",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </p>

                      {options[questionIndex].map(
                        (option) => (
                          <label
                            key={option}
                            style={{
                              display: "block",
                              padding: "10px 12px",
                              marginBottom: "8px",
                              borderRadius: "8px",
                              border:
                                "1px solid #dbeafe",
                              background:
                                selectedAnswer === option
                                  ? "#dbeafe"
                                  : "white",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="radio"
                              name={answerKey}
                              value={option}
                              checked={
                                selectedAnswer === option
                              }
                              onChange={() =>
                                handleAnswer(
                                  questionIndex,
                                  option
                                )
                              }
                              style={{
                                marginRight: "9px",
                              }}
                            />

                            {option}
                          </label>
                        )
                      )}
                    </div>
                  );
                }
              )}

              <button
                onClick={checkQuiz}
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

              {quizSubmitted[selectedSubtopic] && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "15px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    color: "#1e3a8a",
                    fontWeight: "600",
                  }}
                >
                  🎯 Score: {calculateScore()} /{" "}
                  {selectedTopic.lesson.quiz.length}
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={markComplete}
                disabled={completed.includes(selectedSubtopic)}
                style={{
                  background: completed.includes(selectedSubtopic)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 20px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(selectedSubtopic)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(selectedSubtopic)
                  ? "✅ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>

            <div
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={goToPrevious}
                disabled={selectedIndex === 0}
                style={{
                  background:
                    selectedIndex === 0
                      ? "#e5e7eb"
                      : "#2563eb",
                  color:
                    selectedIndex === 0
                      ? "#9ca3af"
                      : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor:
                    selectedIndex === 0
                      ? "default"
                      : "pointer",
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => setSelectedSubtopic(null)}
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Back to Topics
              </button>

              <button
                onClick={goToNext}
                disabled={
                  selectedIndex === subtopics.length - 1
                }
                style={{
                  background:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "#e5e7eb"
                      : "#2563eb",
                  color:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "#9ca3af"
                      : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontWeight: "600",
                  cursor:
                    selectedIndex ===
                    subtopics.length - 1
                      ? "default"
                      : "pointer",
                }}
              >
                Next →
              </button>
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
          🔢 NumPy & Scientific Computing
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn NumPy fundamentals, arrays, operations,
          indexing, broadcasting, and linear algebra
          concepts used in AI and machine learning.
        </p>

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
            Overall Progress: {progress}% 🎯
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
                width: `${progress}%`,
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
            {
              completed.length
            }{" "}
            of {subtopics.length} lessons completed
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
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
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "210px",
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
                      margin: "0 0 8px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.35",
                    }}
                  >
                    {index + 1}. {topic.icon}{" "}
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 15px",
                      fontSize: "15px",
                      color: "#6b7280",
                    }}
                  >
                    Lesson {index + 1}
                  </p>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "15px",
                      color: isCompleted
                        ? "#16a34a"
                        : "#111827",
                      fontWeight: "600",
                    }}
                  >
                    {isCompleted
                      ? "Completed: 100%"
                      : "Progress: 0%"}
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
                        width: isCompleted
                          ? "100%"
                          : "0%",
                        height: "100%",
                        background: "#2563eb",
                        borderRadius: "10px",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    setSelectedSubtopic(topic.id)
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
                  {isCompleted
                    ? "Review Lesson →"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NumPy;