// =====================================================
// STATISTICS TOPIC
// =====================================================

import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

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

// =====================================================
// STATISTICS LESSONS
// =====================================================

const subtopics = [
  // ===================================================
  // 1. DESCRIPTIVE STATISTICS
  // ===================================================

  {
    id: "descriptive-statistics",
    title: "Descriptive Statistics",
    icon: "📊",

    lesson: {
      overview:
        "Descriptive statistics help summarize and understand the main characteristics of a dataset. They provide a simple way to describe large amounts of data using numbers and summaries.",

      sections: [
        {
          heading: "Measures of Central Tendency",
          content:
            "Mean, median, and mode are common measures of central tendency. The mean is the arithmetic average, the median is the middle value after sorting the data, and the mode is the most frequently occurring value.",
        },
        {
          heading: "Measures of Dispersion",
          content:
            "Measures such as range, variance, and standard deviation describe how spread out the data is. A larger standard deviation generally indicates that observations are more spread out around the mean.",
        },
        {
          heading: "Percentiles and Quartiles",
          content:
            "Percentiles describe the position of a value relative to a dataset. Quartiles divide ordered data into four parts and are useful for understanding the distribution and spread of values.",
        },
      ],

      mistakes: [
        "Assuming the mean is always representative of the data.",
        "Confusing variance with standard deviation.",
        "Ignoring outliers when interpreting descriptive statistics.",
      ],

      quiz: [
        {
          question:
            "Which measure represents the middle value of ordered data?",
          options: [
            "Median",
            "Mean",
            "Mode",
            "Range",
          ],
          answer: "Median",
        },
        {
          question:
            "Which measure describes how spread out data is around the mean?",
          options: [
            "Standard deviation",
            "Median",
            "Mode",
            "Percentile",
          ],
          answer: "Standard deviation",
        },
        {
          question:
            "Which measure represents the most frequently occurring value?",
          options: [
            "Mode",
            "Mean",
            "Median",
            "Variance",
          ],
          answer: "Mode",
        },
      ],
    },
  },

  // ===================================================
  // 2. PROBABILITY BASICS
  // ===================================================

  {
    id: "probability-basics",
    title: "Probability Basics",
    icon: "🎲",

    lesson: {
      overview:
        "Probability measures how likely an event is to occur. It is an important foundation for statistics, machine learning, and data analysis.",

      sections: [
        {
          heading: "Probability",
          content:
            "Probability is a value between 0 and 1. A probability of 0 means an event is impossible, while a probability of 1 means the event is certain.",
        },
        {
          heading: "Events and Outcomes",
          content:
            "An experiment can produce one or more possible outcomes. An event is a collection of outcomes that we are interested in. For example, when rolling a die, getting an even number is an event containing several possible outcomes.",
        },
        {
          heading: "Conditional Probability",
          content:
            "Conditional probability describes the probability of an event occurring given that another event has already occurred. It is useful when analyzing relationships between events.",
        },
      ],

      mistakes: [
        "Confusing probability with percentage without converting correctly.",
        "Assuming two events are independent without checking their relationship.",
        "Forgetting that probability values must be between 0 and 1.",
      ],

      quiz: [
        {
          question:
            "What is the possible range of a probability?",
          options: [
            "0 to 1",
            "1 to 100",
            "-1 to 1",
            "0 to 10",
          ],
          answer: "0 to 1",
        },
        {
          question:
            "What does a probability of 1 represent?",
          options: [
            "A certain event",
            "An impossible event",
            "A random guess",
            "An unlikely event",
          ],
          answer: "A certain event",
        },
        {
          question:
            "What does conditional probability describe?",
          options: [
            "The probability of an event given another condition",
            "The average of a dataset",
            "The spread of numerical values",
            "The largest value in a dataset",
          ],
          answer:
            "The probability of an event given another condition",
        },
      ],
    },
  },

  // ===================================================
  // 3. DISTRIBUTIONS
  // ===================================================

  {
    id: "distributions",
    title: "Distributions",
    icon: "📈",

    lesson: {
      overview:
        "A probability distribution describes how values or probabilities are distributed across possible outcomes. Understanding distributions helps analysts identify patterns and make statistical decisions.",

      sections: [
        {
          heading: "Normal Distribution",
          content:
            "The normal distribution is a continuous probability distribution with a symmetric, bell-shaped curve. In a perfectly normal distribution, the mean, median, and mode are equal.",
        },
        {
          heading: "Skewness",
          content:
            "A distribution can be symmetric or skewed. Positive skew generally means the distribution has a longer tail toward larger values, while negative skew has a longer tail toward smaller values.",
        },
        {
          heading: "Discrete and Continuous Distributions",
          content:
            "Discrete distributions describe countable outcomes, while continuous distributions describe values that can take any value within an interval. The type of distribution depends on the nature of the variable being analyzed.",
        },
      ],

      mistakes: [
        "Assuming every dataset follows a normal distribution.",
        "Confusing positive skew with values being mostly positive.",
        "Treating discrete variables as continuous without considering their nature.",
      ],

      quiz: [
        {
          question:
            "What shape is commonly associated with a normal distribution?",
          options: [
            "Bell-shaped",
            "Always flat",
            "V-shaped",
            "Square-shaped",
          ],
          answer: "Bell-shaped",
        },
        {
          question:
            "What does positive skew generally indicate?",
          options: [
            "A longer tail toward larger values",
            "A longer tail toward smaller values",
            "No variation",
            "All values are positive",
          ],
          answer: "A longer tail toward larger values",
        },
        {
          question:
            "Which type of variable has countable outcomes?",
          options: [
            "Discrete",
            "Continuous",
            "Categorical-only",
            "Infinite-only",
          ],
          answer: "Discrete",
        },
      ],
    },
  },

  // ===================================================
  // 4. SAMPLING
  // ===================================================

  {
    id: "sampling",
    title: "Sampling",
    icon: "🎯",

    lesson: {
      overview:
        "Sampling is the process of selecting a subset of a population for analysis. Good sampling methods help analysts draw conclusions about a larger population without examining every individual.",

      sections: [
        {
          heading: "Population and Sample",
          content:
            "A population is the complete group being studied, while a sample is a smaller subset selected from that population. Analysts often work with samples because studying an entire population may be expensive or impractical.",
        },
        {
          heading: "Random Sampling",
          content:
            "In simple random sampling, each member of the population has a chance of being selected. Random sampling helps reduce selection bias when properly implemented.",
        },
        {
          heading: "Sampling Bias",
          content:
            "Sampling bias occurs when the selected sample does not properly represent the target population. Biased samples can lead to misleading conclusions and poor decisions.",
        },
      ],

      mistakes: [
        "Assuming every sample automatically represents the population.",
        "Ignoring selection bias.",
        "Using a very small or poorly selected sample for important conclusions.",
      ],

      quiz: [
        {
          question:
            "What is a sample?",
          options: [
            "A subset of a population",
            "The entire population",
            "A database table",
            "A statistical formula",
          ],
          answer: "A subset of a population",
        },
        {
          question:
            "What is one purpose of random sampling?",
          options: [
            "Reduce selection bias",
            "Guarantee a normal distribution",
            "Remove all missing values",
            "Increase the population size",
          ],
          answer: "Reduce selection bias",
        },
        {
          question:
            "What can sampling bias cause?",
          options: [
            "Misleading conclusions",
            "Perfect predictions",
            "Automatic data cleaning",
            "Larger populations",
          ],
          answer: "Misleading conclusions",
        },
      ],
    },
  },

  // ===================================================
  // 5. CORRELATION
  // ===================================================

  {
    id: "correlation",
    title: "Correlation",
    icon: "🔗",

    lesson: {
      overview:
        "Correlation measures the strength and direction of a relationship between variables. It helps analysts identify whether two variables tend to change together.",

      sections: [
        {
          heading: "Correlation Coefficient",
          content:
            "A correlation coefficient commonly ranges from -1 to +1. A value close to +1 indicates a strong positive relationship, while a value close to -1 indicates a strong negative relationship.",
        },
        {
          heading: "Positive and Negative Correlation",
          content:
            "Positive correlation means that variables tend to increase or decrease together. Negative correlation means that when one variable increases, the other tends to decrease.",
        },
        {
          heading: "Correlation vs Causation",
          content:
            "Correlation does not necessarily mean that one variable causes another. Two variables can be correlated because of coincidence, another underlying factor, or other relationships.",
        },
      ],

      mistakes: [
        "Assuming correlation proves causation.",
        "Interpreting a weak correlation as a strong relationship.",
        "Ignoring nonlinear relationships when using simple correlation measures.",
      ],

      quiz: [
        {
          question:
            "What does a correlation close to +1 generally indicate?",
          options: [
            "Strong positive relationship",
            "Strong negative relationship",
            "No relationship",
            "Perfect randomness",
          ],
          answer: "Strong positive relationship",
        },
        {
          question:
            "What does a correlation close to -1 generally indicate?",
          options: [
            "Strong negative relationship",
            "Strong positive relationship",
            "No variation",
            "No observations",
          ],
          answer: "Strong negative relationship",
        },
        {
          question:
            "Does correlation automatically prove causation?",
          options: [
            "No",
            "Yes",
            "Only for small datasets",
            "Only for categorical data",
          ],
          answer: "No",
        },
      ],
    },
  },

  // ===================================================
  // 6. HYPOTHESIS TESTING
  // ===================================================

  {
    id: "hypothesis-testing",
    title: "Hypothesis Testing",
    icon: "🧪",

    lesson: {
      overview:
        "Hypothesis testing is a statistical method used to evaluate claims about a population using sample data. It provides a structured way to determine whether observed evidence supports a particular claim.",

      sections: [
        {
          heading: "Null and Alternative Hypotheses",
          content:
            "The null hypothesis represents the default assumption or a statement of no effect or no difference. The alternative hypothesis represents the effect, difference, or relationship that the analysis is investigating.",
        },
        {
          heading: "P-Value",
          content:
            "A p-value measures how compatible the observed data is with the null hypothesis under the assumptions of the statistical test. A small p-value can provide evidence against the null hypothesis.",
        },
        {
          heading: "Statistical Significance",
          content:
            "A significance level, often represented by alpha, is chosen before testing. If the p-value is below the chosen significance level, the result is commonly described as statistically significant and the null hypothesis is rejected.",
        },
      ],

      mistakes: [
        "Saying that a p-value is the probability that the null hypothesis is true.",
        "Treating statistical significance as proof of practical importance.",
        "Choosing the significance level after seeing the results.",
      ],

      quiz: [
        {
          question:
            "What does the null hypothesis generally represent?",
          options: [
            "A default assumption or no-effect statement",
            "The final conclusion",
            "A guaranteed result",
            "A sample mean",
          ],
          answer:
            "A default assumption or no-effect statement",
        },
        {
          question:
            "What can a small p-value provide evidence against?",
          options: [
            "The null hypothesis",
            "The dataset",
            "The population",
            "The sample size",
          ],
          answer: "The null hypothesis",
        },
        {
          question:
            "What is commonly done when the p-value is below the chosen significance level?",
          options: [
            "Reject the null hypothesis",
            "Increase the sample automatically",
            "Delete the dataset",
            "Accept every hypothesis",
          ],
          answer: "Reject the null hypothesis",
        },
      ],
    },
  },
];

// =====================================================
// STATISTICS COMPONENT
// =====================================================

function Statistics({ goBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const { completed, markComplete: saveProgress } = useLearningProgress("dataanalyst-statistics", subtopics);

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState({});

  // ===================================================
  // SHUFFLED QUIZ OPTIONS
  // ===================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  // ===================================================
  // PROGRESS
  // ===================================================

  const completedCount = completed.length;

  const overallProgress =
    (completedCount / subtopics.length) * 100;

  // ===================================================
  // OPEN TOPIC
  // ===================================================

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  // ===================================================
  // CLOSE TOPIC
  // ===================================================

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  // ===================================================
  // MARK LESSON COMPLETE
  // ===================================================

  const markComplete = (topicId) => {
    if (!topicId) return;
    saveProgress(topicId);
  };

  // ===================================================
  // SELECT QUIZ ANSWER
  // ===================================================

  const selectAnswer = (
    topicId,
    questionIndex,
    answer
  ) => {
    setQuizAnswers((previous) => ({
      ...previous,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  // ===================================================
  // CHECK QUIZ
  // ===================================================

  const checkQuiz = async (topic) => {

    const score = getQuizScore(topic);

    await saveQuizResult({
      subject: "Data Analyst",
      role: "Data Analyst",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });
    setQuizSubmitted((previous) => ({
      ...previous,
      [topic.id]: true,
    }));
  };

  // ===================================================
  // CALCULATE QUIZ SCORE
  // ===================================================

  const getQuizScore = (topic) => {
    let score = 0;

    topic.lesson.quiz.forEach((question, index) => {
      const selectedAnswer =
        quizAnswers[`${topic.id}-${index}`];

      if (selectedAnswer === question.answer) {
        score++;
      }
    });

    return score;
  };

  // ===================================================
  // PREVIOUS TOPIC
  // ===================================================

  const goToPrevious = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex > 0) {
      setSelectedTopic(
        subtopics[currentIndex - 1]
      );
    }
  };

  // ===================================================
  // NEXT TOPIC
  // ===================================================

  const goToNext = () => {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    if (currentIndex < subtopics.length - 1) {
      setSelectedTopic(
        subtopics[currentIndex + 1]
      );
    }
  };

  // =====================================================
  // LESSON PAGE
  // =====================================================

  if (selectedTopic) {
    const currentIndex = subtopics.findIndex(
      (topic) => topic.id === selectedTopic.id
    );

    const quizSubmittedForTopic =
      quizSubmitted[selectedTopic.id] || false;

    const score = getQuizScore(selectedTopic);

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
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Back Button */}

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
            ← Back to Statistics
          </button>

          {/* Lesson Card */}

          <div
            style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "30px",
              boxShadow:
                "0 4px 12px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                color: "#64748b",
                marginBottom: "8px",
              }}
            >
              Lesson {currentIndex + 1} of{" "}
              {subtopics.length}
            </div>

            <h1
              style={{
                color: "#1e3a8a",
                marginTop: "0",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h1>

            {/* Overview */}

            <h2 style={{ color: "#1e40af" }}>
              📖 Overview
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
              }}
            >
              {selectedTopic.lesson.overview}
            </p>

            {/* Lesson Sections */}

            {selectedTopic.lesson.sections.map(
              (section, index) => (
                <div key={index}>
                  <h2
                    style={{
                      color: "#1e40af",
                      marginTop: "28px",
                    }}
                  >
                    {index + 1}.{" "}
                    {section.heading}
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              )
            )}

            {/* Common Mistakes */}

            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "#eff6ff",
                borderRadius: "10px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  color: "#1e40af",
                  marginTop: "0",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                {selectedTopic.lesson.mistakes.map(
                  (mistake, index) => (
                    <li key={index}>
                      {mistake}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Quiz */}

            <div style={{ marginTop: "35px" }}>
              <h2 style={{ color: "#1e40af" }}>
                🧠 Quick Quiz
              </h2>

              {selectedTopic.lesson.quiz.map(
                (question, questionIndex) => {
                  const options =
                    shuffledQuizOptions[
                      selectedTopic.id
                    ][questionIndex];

                  const selectedAnswer =
                    quizAnswers[
                      `${selectedTopic.id}-${questionIndex}`
                    ];

                  return (
                    <div
                      key={questionIndex}
                      style={{
                        marginBottom: "28px",
                        padding: "20px",
                        border:
                          "1px solid #dbeafe",
                        borderRadius: "10px",
                      }}
                    >
                      <h3
                        style={{
                          color: "#1e3a8a",
                          marginTop: "0",
                        }}
                      >
                        {questionIndex + 1}.{" "}
                        {question.question}
                      </h3>

                      {options.map((option) => {
                        const isSelected =
                          selectedAnswer ===
                          option;

                        const isCorrect =
                          option ===
                          question.answer;

                        let background = "white";

                        if (
                          quizSubmittedForTopic
                        ) {
                          if (isCorrect) {
                            background =
                              "#dcfce7";
                          } else if (
                            isSelected
                          ) {
                            background =
                              "#fee2e2";
                          }
                        } else if (
                          isSelected
                        ) {
                          background =
                            "#dbeafe";
                        }

                        return (
                          <button
                            key={option}
                            onClick={() =>
                              !quizSubmittedForTopic &&
                              selectAnswer(
                                selectedTopic.id,
                                questionIndex,
                                option
                              )
                            }
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "left",
                              marginTop: "10px",
                              padding:
                                "12px 15px",
                              border:
                                "1px solid #bfdbfe",
                              borderRadius: "8px",
                              background,
                              cursor:
                                quizSubmittedForTopic
                                  ? "default"
                                  : "pointer",
                              color: "#334155",
                              fontSize: "15px",
                            }}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  );
                }
              )}

              {!quizSubmittedForTopic && (
                <button
                  onClick={() =>
                    checkQuiz(selectedTopic)
                  }
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 22px",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Submit Quiz
                </button>
              )}

              {quizSubmittedForTopic && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "18px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    border:
                      "1px solid #bfdbfe",
                  }}
                >
                  <strong
                    style={{
                      color: "#1e3a8a",
                    }}
                  >
                    🎯 Your Score: {score} /{" "}
                    {
                      selectedTopic.lesson.quiz
                        .length
                    }
                  </strong>
                </div>
              )}
            </div>

            {/* Complete Lesson */}

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop:
                  "1px solid #e2e8f0",
              }}
            >
              <button
                onClick={() =>
                  saveProgress(
                    selectedTopic.id
                  )
                }
                style={{
                  background:
                    completed.includes(
                      selectedTopic.id
                    )
                      ? "#16a34a"
                      : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                {completed.includes(
                  selectedTopic.id
                )
                  ? "✓ Lesson Completed"
                  : "✓ Mark Lesson Complete"}
              </button>
            </div>
          </div>

          {/* Navigation */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "25px",
              gap: "15px",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              style={{
                background:
                  currentIndex === 0
                    ? "#cbd5e1"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor:
                  currentIndex === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ← Previous
            </button>

            <button
              onClick={closeTopic}
              style={{
                background: "#1e40af",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor: "pointer",
              }}
            >
              📚 All Statistics Topics
            </button>

            <button
              onClick={goToNext}
              disabled={
                currentIndex ===
                subtopics.length - 1
              }
              style={{
                background:
                  currentIndex ===
                  subtopics.length - 1
                    ? "#cbd5e1"
                    : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "11px 20px",
                cursor:
                  currentIndex ===
                  subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // STATISTICS ROADMAP PAGE
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
        {/* Back Button */}

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
          ← Back to Data Analyst Roadmap
        </button>

        {/* Header */}

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
            📊 Statistics
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Build the statistical foundation needed
            for data analysis and decision-making.
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
            boxShadow:
              "0 4px 12px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <strong
              style={{ color: "#1e3a8a" }}
            >
              Overall Progress
            </strong>

            <span
              style={{ color: "#64748b" }}
            >
              {completedCount} /{" "}
              {subtopics.length} Lessons
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
                transition:
                  "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Topic Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {subtopics.map(
            (topic, index) => {
              const isCompleted =
                completed.includes(topic.id) ||
                false;

              return (
                <div
                  key={topic.id}
                  style={{
                    background: "white",
                    border:
                      "1px solid #bfdbfe",
                    borderRadius: "14px",
                    padding: "25px",
                    boxShadow:
                      "0 4px 12px rgba(37, 99, 235, 0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      marginBottom: "10px",
                    }}
                  >
                    Lesson {index + 1}
                  </div>

                  <h3
                    style={{
                      color: "#1e3a8a",
                      minHeight: "55px",
                      margin:
                        "0 0 15px 0",
                    }}
                  >
                    {topic.icon}{" "}
                    {topic.title}
                  </h3>

                  <div
                    style={{
                      color: "#64748b",
                      marginBottom: "12px",
                    }}
                  >
                    📚 1 Lesson
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "#dbeafe",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom:
                        "15px",
                    }}
                  >
                    <div
                      style={{
                        width: isCompleted
                          ? "100%"
                          : "0%",
                        height: "100%",
                        background:
                          "#2563eb",
                        transition:
                          "width 0.3s ease",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      color: isCompleted
                        ? "#16a34a"
                        : "#64748b",
                      fontSize: "14px",
                      marginBottom:
                        "18px",
                    }}
                  >
                    {isCompleted
                      ? "✓ Completed"
                      : "0 / 1 completed"}
                  </div>

                  <button
                    onClick={() =>
                      openTopic(topic)
                    }
                    style={{
                      width: "100%",
                      background:
                        "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding:
                        "11px 15px",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    ▶ Open Lesson
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Statistics;