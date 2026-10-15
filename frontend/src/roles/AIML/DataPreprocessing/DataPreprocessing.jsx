import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: 1,
    title: "Understanding Datasets",
    icon: "📋",
    lesson: {
      overview:
        "Before building a machine learning model, you need to understand the dataset you are working with. This includes identifying rows, columns, features, targets, data types, and the overall structure of the data.",
      sections: [
        {
          heading: "Features and Target",
          points: [
            "Features are the input variables used by a machine learning model.",
            "The target is the value the model is trying to predict.",
            "For example, in house price prediction, area and number of rooms can be features while price is the target.",
          ],
        },
        {
          heading: "Rows and Columns",
          points: [
            "Rows usually represent individual observations or records.",
            "Columns represent variables or attributes.",
            "Understanding what each column represents is important before preprocessing.",
          ],
        },
        {
          heading: "Understanding Data Types",
          points: [
            "Numerical columns contain values such as age, salary, or temperature.",
            "Categorical columns contain categories such as city, department, or product type.",
            "Some columns may contain dates, text, Boolean values, or identifiers.",
          ],
        },
      ],
      commonMistakes: [
        "Starting model training without understanding the dataset.",
        "Confusing features with the target variable.",
        "Treating identifier columns as meaningful predictive features without checking their purpose.",
      ],
      quiz: [
        {
          question: "What is a feature in machine learning?",
          options: [
            "An input variable used by the model",
            "The final prediction only",
            "A database password",
            "A programming language",
          ],
          answer: "An input variable used by the model",
        },
        {
          question: "What is the target?",
          options: [
            "The value the model is trying to predict",
            "The name of the dataset",
            "The number of rows",
            "A column used only for sorting",
          ],
          answer: "The value the model is trying to predict",
        },
        {
          question: "What do rows commonly represent in a dataset?",
          options: [
            "Individual observations or records",
            "Only column names",
            "Programming functions",
            "Machine learning algorithms",
          ],
          answer: "Individual observations or records",
        },
      ],
    },
  },

  {
    id: 2,
    title: "Missing Values",
    icon: "❓",
    lesson: {
      overview:
        "Missing values occur when some observations do not contain a value for a particular feature. Handling missing data is an important part of preparing a dataset for machine learning.",
      sections: [
        {
          heading: "Why Values Go Missing",
          points: [
            "Data may be missing because information was not collected.",
            "Errors during data entry or data integration can create missing values.",
            "Some measurements may simply be unavailable for certain observations.",
          ],
        },
        {
          heading: "Detecting Missing Values",
          points: [
            "Pandas provides tools such as isnull() and isna() to identify missing values.",
            "Checking the number and distribution of missing values helps determine how they should be handled.",
            "Missingness should be investigated rather than automatically ignored.",
          ],
        },
        {
          heading: "Handling Missing Values",
          points: [
            "Rows or columns with missing values can sometimes be removed.",
            "Numerical missing values can often be filled using statistics such as the mean or median.",
            "Categorical missing values may be filled using the mode or a dedicated category when appropriate.",
          ],
        },
      ],
      commonMistakes: [
        "Removing every row containing a missing value without considering the amount of data lost.",
        "Using the mean blindly when the data contains strong outliers.",
        "Ignoring why values are missing.",
      ],
      quiz: [
        {
          question: "What does a missing value represent?",
          options: [
            "An observation where a value is unavailable",
            "A duplicate row",
            "A machine learning prediction",
            "A feature with perfect data",
          ],
          answer: "An observation where a value is unavailable",
        },
        {
          question: "Which Pandas method can help identify missing values?",
          options: ["isnull()", "find_missing()", "missing()", "check_empty()"],
          answer: "isnull()",
        },
        {
          question: "Which statistic can commonly be used to fill numerical missing values?",
          options: ["Mean or median", "File size", "Column name", "Row number"],
          answer: "Mean or median",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Duplicate & Inconsistent Data",
    icon: "🧹",
    lesson: {
      overview:
        "Real-world datasets can contain duplicate records and inconsistent values. Cleaning these issues helps improve data quality before machine learning.",
      sections: [
        {
          heading: "Duplicate Records",
          points: [
            "A duplicate is a record that appears more than once when it should represent a single observation.",
            "Duplicate rows can distort statistics and model training.",
            "Pandas provides duplicated() and drop_duplicates() for identifying and handling duplicates.",
          ],
        },
        {
          heading: "Inconsistent Values",
          points: [
            "The same category can sometimes be written in different ways.",
            "For example, 'India', 'india', and 'IND' may represent the same category.",
            "Standardizing formats can make categorical data more consistent.",
          ],
        },
        {
          heading: "Data Validation",
          points: [
            "Values should be checked against expected ranges and formats.",
            "Unexpected values may indicate data-entry or collection problems.",
            "Cleaning should preserve valid information rather than deleting data unnecessarily.",
          ],
        },
      ],
      commonMistakes: [
        "Removing duplicates without checking whether they are actually valid repeated observations.",
        "Ignoring capitalization and formatting differences in categories.",
        "Deleting unusual values without investigating them first.",
      ],
      quiz: [
        {
          question: "Why can duplicate records be a problem?",
          options: [
            "They can distort analysis and model training",
            "They automatically improve model accuracy",
            "They convert numbers into text",
            "They install new libraries",
          ],
          answer: "They can distort analysis and model training",
        },
        {
          question: "Which Pandas method identifies duplicate rows?",
          options: [
            "duplicated()",
            "find_duplicate_rows()",
            "repeat_check()",
            "duplicate_search()",
          ],
          answer: "duplicated()",
        },
        {
          question: "What is data standardization useful for?",
          options: [
            "Making inconsistent representations more consistent",
            "Deleting the entire dataset",
            "Training a neural network",
            "Changing the operating system",
          ],
          answer: "Making inconsistent representations more consistent",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Categorical Data",
    icon: "🏷️",
    lesson: {
      overview:
        "Categorical data represents values belonging to distinct groups or categories. Machine learning algorithms often require categorical values to be transformed into numerical representations.",
      sections: [
        {
          heading: "Types of Categorical Data",
          points: [
            "Nominal categories have no natural ordering, such as colors or cities.",
            "Ordinal categories have an inherent order, such as low, medium, and high.",
            "The type of category influences which encoding technique is appropriate.",
          ],
        },
        {
          heading: "Why Encoding is Needed",
          points: [
            "Many machine learning algorithms work with numerical inputs.",
            "Text-based categories therefore often need to be converted into numerical representations.",
            "The encoding method should preserve the useful meaning of the category.",
          ],
        },
        {
          heading: "Examples",
          points: [
            "A color column might contain Red, Blue, and Green.",
            "A size column might contain Small, Medium, and Large.",
            "These categories can be transformed into numerical features using suitable encoding methods.",
          ],
        },
      ],
      commonMistakes: [
        "Assigning arbitrary numerical values to nominal categories and accidentally implying an order.",
        "Treating every categorical variable as ordinal.",
        "Ignoring unseen categories when preparing data for future predictions.",
      ],
      quiz: [
        {
          question: "What is categorical data?",
          options: [
            "Data representing distinct groups or categories",
            "Only continuous numerical data",
            "Only images",
            "A machine learning algorithm",
          ],
          answer: "Data representing distinct groups or categories",
        },
        {
          question: "Which type of categorical data has an inherent order?",
          options: [
            "Ordinal",
            "Nominal",
            "Random",
            "Continuous",
          ],
          answer: "Ordinal",
        },
        {
          question: "Why is categorical encoding often required?",
          options: [
            "Many ML algorithms require numerical inputs",
            "It increases file size",
            "It removes all categories",
            "It replaces Python",
          ],
          answer: "Many ML algorithms require numerical inputs",
        },
      ],
    },
  },

  {
    id: 5,
    title: "Feature Scaling",
    icon: "📏",
    lesson: {
      overview:
        "Feature scaling transforms numerical features so that their values are placed on comparable scales. It is especially important for algorithms that depend on distances or gradients.",
      sections: [
        {
          heading: "Why Scaling Matters",
          points: [
            "Features can have very different numerical ranges.",
            "A feature with much larger values can dominate distance-based or gradient-based calculations.",
            "Scaling can help certain algorithms train more effectively.",
          ],
        },
        {
          heading: "Standardization",
          points: [
            "Standardization transforms values using their mean and standard deviation.",
            "A commonly used result has a mean close to 0 and a standard deviation close to 1.",
            "StandardScaler in Scikit-Learn is commonly used for this purpose.",
          ],
        },
        {
          heading: "Normalization",
          points: [
            "Normalization can transform values into a bounded range such as 0 to 1.",
            "Min-max scaling is a common normalization approach.",
            "The appropriate scaling method depends on the dataset and algorithm.",
          ],
        },
      ],
      commonMistakes: [
        "Scaling the target variable unnecessarily.",
        "Fitting a scaler on the entire dataset before splitting into training and testing data.",
        "Assuming every machine learning algorithm requires feature scaling.",
      ],
      quiz: [
        {
          question: "Why is feature scaling useful?",
          options: [
            "It puts numerical features on comparable scales",
            "It converts all numbers into text",
            "It removes every feature",
            "It automatically selects the best model",
          ],
          answer: "It puts numerical features on comparable scales",
        },
        {
          question: "What is a common result of standardization?",
          options: [
            "Mean close to 0 and standard deviation close to 1",
            "All values become strings",
            "All values become exactly 100",
            "All rows are deleted",
          ],
          answer: "Mean close to 0 and standard deviation close to 1",
        },
        {
          question: "What is a common range for min-max scaling?",
          options: ["0 to 1", "10 to 100", "-100 to 100", "1 to 1000"],
          answer: "0 to 1",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Encoding Features",
    icon: "🔢",
    lesson: {
      overview:
        "Encoding converts categorical information into numerical representations that machine learning algorithms can process.",
      sections: [
        {
          heading: "Label Encoding",
          points: [
            "Label encoding assigns numerical labels to categories.",
            "It can be useful when categories have a meaningful order.",
            "Using numerical labels for nominal categories can accidentally suggest an ordering.",
          ],
        },
        {
          heading: "One-Hot Encoding",
          points: [
            "One-hot encoding creates a separate binary feature for each category.",
            "For example, categories Red, Blue, and Green can become separate indicator columns.",
            "It is commonly used for nominal categorical variables.",
          ],
        },
        {
          heading: "Choosing an Encoding Method",
          points: [
            "Ordinal categories can often use an encoding that preserves their order.",
            "Nominal categories commonly use one-hot encoding.",
            "The choice should depend on the meaning of the categorical variable.",
          ],
        },
      ],
      commonMistakes: [
        "Using arbitrary numeric labels for nominal categories when the model may interpret them as ordered.",
        "Creating inconsistent encodings between training and future data.",
        "Ignoring the number of unique categories when choosing an encoding approach.",
      ],
      quiz: [
        {
          question: "What does encoding do?",
          options: [
            "Converts categorical information into numerical representations",
            "Deletes categorical columns",
            "Trains a neural network",
            "Creates a database",
          ],
          answer:
            "Converts categorical information into numerical representations",
        },
        {
          question: "Which encoding creates separate binary features for categories?",
          options: [
            "One-hot encoding",
            "Binary deletion",
            "Mean encoding only",
            "Row encoding",
          ],
          answer: "One-hot encoding",
        },
        {
          question: "Which type of category has a meaningful order?",
          options: [
            "Ordinal",
            "Nominal",
            "Random",
            "Unstructured",
          ],
          answer: "Ordinal",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Feature Selection",
    icon: "🎯",
    lesson: {
      overview:
        "Feature selection is the process of choosing the most useful input variables for a machine learning model. Removing irrelevant or redundant features can simplify models and sometimes improve performance.",
      sections: [
        {
          heading: "Why Select Features?",
          points: [
            "Not every available feature is useful for prediction.",
            "Irrelevant features can add noise and unnecessary complexity.",
            "Reducing the number of features can make models faster and easier to interpret.",
          ],
        },
        {
          heading: "Methods of Feature Selection",
          points: [
            "Filter methods can use statistical relationships between features and the target.",
            "Wrapper methods evaluate subsets of features using model performance.",
            "Embedded methods perform feature selection during model training.",
          ],
        },
        {
          heading: "Avoiding Data Leakage",
          points: [
            "Feature selection should be performed using only information available from the training data.",
            "Using information from the test set can produce overly optimistic evaluation results.",
            "A proper preprocessing workflow helps prevent leakage.",
          ],
        },
      ],
      commonMistakes: [
        "Selecting features using the complete dataset before splitting into training and testing data.",
        "Removing a feature simply because its name looks unimportant.",
        "Assuming more features always lead to a better model.",
      ],
      quiz: [
        {
          question: "What is feature selection?",
          options: [
            "Choosing useful input variables for a model",
            "Selecting a programming language",
            "Choosing a database",
            "Selecting rows randomly",
          ],
          answer: "Choosing useful input variables for a model",
        },
        {
          question: "What can irrelevant features add?",
          options: [
            "Noise and unnecessary complexity",
            "Guaranteed accuracy",
            "More labels",
            "More training data",
          ],
          answer: "Noise and unnecessary complexity",
        },
        {
          question: "Why should test-set information be avoided during feature selection?",
          options: [
            "To prevent data leakage",
            "To increase the number of columns",
            "To make files smaller",
            "To create categorical data",
          ],
          answer: "To prevent data leakage",
        },
      ],
    },
  },

  {
    id: 8,
    title: "Feature Engineering",
    icon: "🛠️",
    lesson: {
      overview:
        "Feature engineering involves creating, transforming, or combining variables to provide more useful information to a machine learning model.",
      sections: [
        {
          heading: "Creating New Features",
          points: [
            "Existing variables can sometimes be combined to create more informative features.",
            "For example, date information can be transformed into day, month, or year features.",
            "Domain knowledge is often valuable when designing useful features.",
          ],
        },
        {
          heading: "Transforming Features",
          points: [
            "Numerical features can sometimes be transformed using logarithms or other mathematical operations.",
            "Text can be transformed into numerical representations.",
            "Transformations can help models work more effectively with certain types of data.",
          ],
        },
        {
          heading: "Feature Engineering in ML",
          points: [
            "Good features can make patterns easier for a model to learn.",
            "Feature engineering should be performed consistently for training and future data.",
            "Feature engineering is often an iterative process based on experimentation and evaluation.",
          ],
        },
      ],
      commonMistakes: [
        "Creating features using information that would not be available at prediction time.",
        "Applying different feature transformations to training and future data.",
        "Creating many unnecessary features without evaluating their usefulness.",
      ],
      quiz: [
        {
          question: "What is feature engineering?",
          options: [
            "Creating or transforming variables to make them more useful for a model",
            "Installing machine learning libraries",
            "Deleting the target variable",
            "Building a computer network",
          ],
          answer:
            "Creating or transforming variables to make them more useful for a model",
        },
        {
          question: "What can domain knowledge help with?",
          options: [
            "Designing useful features",
            "Replacing all machine learning algorithms",
            "Deleting datasets",
            "Installing Python",
          ],
          answer: "Designing useful features",
        },
        {
          question: "Why should feature engineering be consistent?",
          options: [
            "Training and future data must receive compatible transformations",
            "It makes all models identical",
            "It removes categorical variables",
            "It prevents Python from running",
          ],
          answer:
            "Training and future data must receive compatible transformations",
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

function DataPreprocessing({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("aiml-datapreprocessing", subtopics);
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

  const completedCount =
    completed.length;

  const progress = Math.round(
    (completedCount / subtopics.length) * 100
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

        return (
          score +
          (selectedAnswer === question.answer ? 1 : 0)
        );
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

  // =====================================================
  // SELECTED LESSON PAGE
  // =====================================================

  if (selectedTopic) {
    const options = shuffledQuizOptions[selectedTopic.id];

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

            {/* ================= COMMON MISTAKES ================= */}

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

            {/* ================= QUIZ ================= */}

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

            {/* ================= COMPLETE ================= */}

            <div
              style={{
                marginTop: "30px",
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

            {/* ================= NAVIGATION ================= */}

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

  // =====================================================
  // DATA PREPROCESSING ROADMAP PAGE
  // =====================================================

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
          🧹 Data Preprocessing & Feature Engineering
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Learn how to understand, clean, transform, and
          prepare datasets for machine learning models.
        </p>

        {/* ================= OVERALL PROGRESS ================= */}

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
            {completedCount} of {subtopics.length} lessons
            completed
          </p>
        </div>

        {/* ================= LESSON CARDS ================= */}

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

export default DataPreprocessing;