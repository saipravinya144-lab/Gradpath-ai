import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const CloudSecurity = ({ goBack }) => {
  const subtopics = [
    {
      id: 1,
      title: "Cloud Security Fundamentals",
      lesson: {
        explanation: `
Cloud security is the collection of technologies, processes, policies, and practices used to protect cloud-based systems, applications, data, and infrastructure.

Cloud environments can include services such as virtual machines, storage, databases, containers, serverless applications, and managed platforms.

Security concerns in cloud environments include unauthorized access, data exposure, insecure configurations, weak authentication, vulnerable applications, and insufficient monitoring.

Common cloud security principles include least privilege, strong authentication, encryption, secure configuration, continuous monitoring, and regular security assessments.

Cloud security requires cooperation between cloud providers and customers. The exact security responsibilities depend on the type of cloud service being used.

Organizations should understand their cloud environment and identify which assets and services require protection.
        `,
        mistakes: [
          "Assuming the cloud provider is responsible for every security control.",
          "Using weak authentication for cloud accounts.",
          "Leaving cloud resources with unnecessary public access.",
          "Ignoring cloud configuration and monitoring.",
        ],
        quiz: [
          {
            question: "What is cloud security primarily concerned with?",
            options: [
              "Protecting cloud systems, applications, and data",
              "Designing computer keyboards",
              "Increasing monitor brightness",
              "Creating offline games",
            ],
            answer: "Protecting cloud systems, applications, and data",
          },
          {
            question: "Which is an important cloud security principle?",
            options: [
              "Least privilege",
              "Unlimited access",
              "Disabling authentication",
              "Publicly sharing credentials",
            ],
            answer: "Least privilege",
          },
          {
            question: "Which can be a cloud security risk?",
            options: [
              "Insecure configuration",
              "Screen resolution",
              "Keyboard size",
              "Printer color",
            ],
            answer: "Insecure configuration",
          },
        ],
      },
    },

    {
      id: 2,
      title: "Shared Responsibility Model",
      lesson: {
        explanation: `
The shared responsibility model explains how security responsibilities are divided between a cloud service provider and the customer.

Cloud providers are generally responsible for security of the underlying cloud infrastructure. This can include physical facilities, hardware, and parts of the underlying platform.

Customers remain responsible for securing the parts of the environment they control.

The exact division depends on the service model.

For example, infrastructure services usually give customers more responsibility for operating systems, applications, and configurations. Managed services may shift more infrastructure responsibility to the provider.

In software-as-a-service environments, the provider manages much of the underlying infrastructure, while customers still need to manage areas such as users, access, data, and appropriate configuration.

Understanding this model helps organizations avoid security gaps caused by assuming another party is responsible.
        `,
        mistakes: [
          "Assuming the cloud provider handles all customer security.",
          "Ignoring customer-side configuration responsibilities.",
          "Failing to understand the selected cloud service model.",
          "Not documenting responsibility boundaries.",
        ],
        quiz: [
          {
            question: "What does the shared responsibility model describe?",
            options: [
              "How cloud security responsibilities are divided",
              "How employees share computers",
              "How databases are normalized",
              "How websites are designed",
            ],
            answer: "How cloud security responsibilities are divided",
          },
          {
            question: "Who is generally responsible for the underlying cloud infrastructure?",
            options: [
              "The cloud service provider",
              "Every individual user",
              "A website visitor",
              "A database administrator only",
            ],
            answer: "The cloud service provider",
          },
          {
            question: "Why does the responsibility model vary?",
            options: [
              "Different cloud service models provide different levels of control",
              "Cloud providers never offer security",
              "Customers have no responsibilities",
              "All cloud services work exactly the same way",
            ],
            answer:
              "Different cloud service models provide different levels of control",
          },
        ],
      },
    },

    {
      id: 3,
      title: "Cloud Identity & Access Management",
      lesson: {
        explanation: `
Cloud Identity and Access Management (IAM) controls who can access cloud resources and what actions they are allowed to perform.

IAM commonly involves users, groups, roles, policies, permissions, and authentication mechanisms.

The principle of least privilege means users and services should receive only the permissions necessary to perform their required tasks.

Multi-factor authentication provides an additional layer of protection beyond passwords.

Organizations should avoid sharing accounts because individual identities make activity easier to attribute and audit.

Service accounts and machine identities should also receive only the permissions they require.

Access should be reviewed regularly so that unnecessary accounts and permissions can be removed.

Strong IAM practices can significantly reduce the risk of unauthorized access to cloud resources.
        `,
        mistakes: [
          "Giving users administrator privileges unnecessarily.",
          "Sharing cloud accounts between multiple people.",
          "Failing to remove unused accounts.",
          "Ignoring machine and service identities.",
        ],
        quiz: [
          {
            question: "What does cloud IAM control?",
            options: [
              "Who can access resources and what they can do",
              "Monitor resolution",
              "Internet cable length",
              "Computer temperature",
            ],
            answer: "Who can access resources and what they can do",
          },
          {
            question: "What does least privilege mean?",
            options: [
              "Grant only the permissions required",
              "Give everyone administrator access",
              "Disable all permissions",
              "Share one account with everyone",
            ],
            answer: "Grant only the permissions required",
          },
          {
            question: "Why should unused accounts be removed?",
            options: [
              "To reduce unnecessary access opportunities",
              "To increase screen size",
              "To improve keyboard performance",
              "To delete cloud backups",
            ],
            answer: "To reduce unnecessary access opportunities",
          },
        ],
      },
    },

    {
      id: 4,
      title: "Cloud Network Security",
      lesson: {
        explanation: `
Cloud network security protects communication between cloud resources, users, applications, and external networks.

Cloud platforms commonly provide virtual networks, subnets, routing controls, security groups, network access controls, firewalls, and other security mechanisms.

Network segmentation can separate workloads so that compromise of one component does not automatically provide unrestricted access to other systems.

Inbound and outbound traffic should be controlled according to business and security requirements.

Public exposure should be minimized. Resources that do not need direct internet access should generally not be unnecessarily exposed.

Secure network design also considers encryption of communications, access control, monitoring, and appropriate logging.

Cloud network security should be reviewed regularly because cloud environments can change rapidly as resources are created, modified, and removed.
        `,
        mistakes: [
          "Exposing internal services directly to the internet unnecessarily.",
          "Allowing overly broad network access.",
          "Ignoring outbound traffic controls.",
          "Failing to review changing cloud network configurations.",
        ],
        quiz: [
          {
            question: "What is network segmentation used for?",
            options: [
              "Separating resources to limit unnecessary access",
              "Increasing monitor brightness",
              "Deleting cloud accounts",
              "Replacing authentication",
            ],
            answer: "Separating resources to limit unnecessary access",
          },
          {
            question: "Why should unnecessary public exposure be avoided?",
            options: [
              "It can increase the attack surface",
              "It always improves security",
              "It prevents logging",
              "It disables encryption",
            ],
            answer: "It can increase the attack surface",
          },
          {
            question: "Which is commonly used for cloud network access control?",
            options: [
              "Security groups or network access controls",
              "Text editors",
              "Image viewers",
              "Music players",
            ],
            answer: "Security groups or network access controls",
          },
        ],
      },
    },

    {
      id: 5,
      title: "Data Protection & Encryption in the Cloud",
      lesson: {
        explanation: `
Cloud data protection involves preventing unauthorized access, modification, disclosure, or loss of information stored and processed in cloud environments.

Encryption can protect data both at rest and in transit.

Data at rest refers to information stored on disks, databases, object storage, and other persistent systems.

Data in transit refers to information moving between systems or services.

Encryption reduces the risk of exposing readable information if protected data is intercepted or accessed without authorization.

Key management is an important part of encryption. Organizations need appropriate controls for creating, storing, rotating, and protecting encryption keys.

Access controls should be applied alongside encryption because encryption alone does not solve every security problem.

Organizations should also understand data classification, retention requirements, backups, and applicable privacy or regulatory requirements.
        `,
        mistakes: [
          "Assuming encryption alone provides complete security.",
          "Poorly protecting encryption keys.",
          "Ignoring data stored in backups.",
          "Failing to classify sensitive information.",
        ],
        quiz: [
          {
            question: "What is data at rest?",
            options: [
              "Data stored on persistent systems",
              "Data moving across a network",
              "Deleted data only",
              "Data displayed on a monitor",
            ],
            answer: "Data stored on persistent systems",
          },
          {
            question: "What does encryption in transit protect?",
            options: [
              "Data moving between systems",
              "Only printed documents",
              "Computer hardware",
              "Keyboard input permanently",
            ],
            answer: "Data moving between systems",
          },
          {
            question: "Why is key management important?",
            options: [
              "Encryption keys must be properly protected and controlled",
              "It increases internet speed",
              "It replaces authentication",
              "It removes the need for backups",
            ],
            answer:
              "Encryption keys must be properly protected and controlled",
          },
        ],
      },
    },

    {
      id: 6,
      title: "Cloud Security Monitoring & Compliance",
      lesson: {
        explanation: `
Cloud security monitoring involves continuously observing cloud environments for suspicious activity, configuration changes, access events, and potential security incidents.

Cloud platforms can provide audit logs, access logs, configuration records, monitoring services, and security alerts.

Monitoring helps organizations detect unusual activities such as unexpected administrative actions, abnormal access patterns, or changes to security settings.

Compliance refers to meeting applicable laws, regulations, standards, contracts, and organizational requirements.

Organizations should understand which compliance requirements apply to their data and cloud workloads.

Security monitoring and compliance reporting often depend on accurate logs and appropriate retention policies.

Automated alerts can help identify potentially important events, but security teams still need to investigate and validate alerts.

Regular reviews help identify configuration drift and security weaknesses over time.
        `,
        mistakes: [
          "Disabling cloud audit logs without a valid reason.",
          "Ignoring alerts from cloud security services.",
          "Assuming compliance automatically means complete security.",
          "Failing to review cloud configurations regularly.",
        ],
        quiz: [
          {
            question: "What is cloud security monitoring used for?",
            options: [
              "Detecting suspicious activity and security events",
              "Designing application interfaces",
              "Increasing storage physically",
              "Replacing cloud accounts",
            ],
            answer: "Detecting suspicious activity and security events",
          },
          {
            question: "What is compliance concerned with?",
            options: [
              "Meeting applicable requirements and standards",
              "Increasing processor speed",
              "Changing passwords randomly",
              "Removing all cloud logs",
            ],
            answer: "Meeting applicable requirements and standards",
          },
          {
            question: "Why are audit logs important?",
            options: [
              "They provide records that can support monitoring and investigation",
              "They automatically stop every attack",
              "They replace encryption",
              "They prevent all configuration changes",
            ],
            answer:
              "They provide records that can support monitoring and investigation",
          },
        ],
      },
    },

    {
      id: 7,
      title: "Cloud Security Best Practices",
      lesson: {
        explanation: `
Effective cloud security combines multiple security controls rather than relying on one mechanism.

Important practices include strong identity and access management, least privilege, multi-factor authentication, secure network configuration, encryption, centralized logging, continuous monitoring, backups, vulnerability management, and regular security reviews.

Cloud resources should follow secure configuration standards.

Organizations should maintain an inventory of cloud resources and understand which systems contain sensitive information.

Security automation can help identify configuration problems and enforce approved policies.

Regular testing and review can help organizations detect weaknesses before they result in incidents.

Cloud security should also be integrated into the software development and deployment process so that security is considered throughout the lifecycle.

A strong cloud security program is continuously improved as technologies, threats, applications, and organizational requirements change.
        `,
        mistakes: [
          "Relying on a single security control.",
          "Ignoring cloud resources that are no longer actively used.",
          "Skipping regular security reviews.",
          "Treating security as a one-time configuration task.",
        ],
        quiz: [
          {
            question: "Which is a cloud security best practice?",
            options: [
              "Using least privilege and MFA",
              "Sharing administrator credentials",
              "Leaving resources publicly exposed",
              "Disabling security logging",
            ],
            answer: "Using least privilege and MFA",
          },
          {
            question: "Why should cloud resources be inventoried?",
            options: [
              "To understand what needs to be protected",
              "To remove all cloud services",
              "To disable monitoring",
              "To increase internet speed",
            ],
            answer: "To understand what needs to be protected",
          },
          {
            question: "Why should cloud security be reviewed continuously?",
            options: [
              "Cloud environments and risks change over time",
              "Security never changes",
              "Reviews remove the need for authentication",
              "Cloud systems cannot be monitored",
            ],
            answer: "Cloud environments and risks change over time",
          },
        ],
      },
    },
  ];

  const totalLessons = subtopics.length;

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

  const [currentLesson, setCurrentLesson] = useState(0);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-cloud-security", subtopics);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const lesson = subtopics[currentLesson];
  const isLastLesson = currentLesson === subtopics.length - 1;
  const quizQuestion = lesson.lesson.quiz[questionIndex];
  const options = shuffledQuizOptions[lesson.id][questionIndex];

  const progress =
    (completedLessons.length / totalLessons) * 100;

  const lessonProgress =
    ((questionIndex + (submitted ? 1 : 0)) /
      lesson.lesson.quiz.length) *
    100;

  const submitAnswer = () => {
    if (!selectedAnswer || submitted) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [questionIndex]: selectedAnswer,
    }));

    setSubmitted(true);
  };

  const nextQuestion = async () => {
    if (!submitted) return;

    if (questionIndex === lesson.lesson.quiz.length - 1) {
      if (!completedLessons.includes(lesson.id)) {
        saveProgress(lesson.id);
      }

      const finalAnswers = {
        ...quizAnswers,
        [questionIndex]: selectedAnswer,
      };

      const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (finalAnswers[index] === item.answer ? 1 : 0), 0);

      await saveQuizResult({
        subject: "Cybersecurity",
        role: "Cybersecurity",
        topic: lesson.title,
        topicId: lesson.id,
        score: finalScore,
        totalQuestions: lesson.lesson.quiz.length
      });

      setQuizAnswers(finalAnswers);
      setQuizFinished(true);
      return;
    }

    setQuestionIndex((prev) => prev + 1);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const previousLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  const nextLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (!completedLessons.includes(lesson.id)) {
      saveProgress(lesson.id);
    }

    if (currentLesson < totalLessons - 1) {
      setCurrentLesson(currentLesson + 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  const isCorrect = selectedAnswer === quizQuestion.answer;

  if (quizFinished) {
    const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (quizAnswers[index] === item.answer ? 1 : 0), 0);
    const percentage = Math.round((finalScore / lesson.lesson.quiz.length) * 100);
    const passed = finalScore >= Math.ceil(lesson.lesson.quiz.length * 0.6);

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "700px", margin: "80px auto", background: "white", borderRadius: "16px", padding: "40px", textAlign: "center", border: "1px solid #bfdbfe", boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)" }}>
          <h1 style={{ color: "#1e3a8a" }}>🎉 Quiz Completed!</h1>
          <h2>{finalScore} / {lesson.lesson.quiz.length}</h2>
          <p style={{ fontSize: "22px", fontWeight: "700" }}>{percentage}%</p>
          <p style={{ color: passed ? "#15803d" : "#dc2626", fontWeight: "700" }}>{passed ? "Passed" : "Not Passed"}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "25px" }}>
            <button onClick={() => { setQuestionIndex(0); setSelectedAnswer(""); setSubmitted(false); setQuizAnswers({}); setQuizFinished(false); }} style={{ border: "none", background: "#2563eb", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>Retry Quiz</button>
            <button onClick={nextLesson} style={{ border: "1px solid #2563eb", background: "white", color: "#2563eb", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>{isLastLesson ? "Back to Topics" : "Next Lesson"}</button>
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
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={goBack}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            background: "#ffffff",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          ← Back to Cybersecurity Roadmap
        </button>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              color: "#1d4ed8",
              marginBottom: "8px",
            }}
          >
            ☁️ Cloud Security
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Learn how cloud environments, identities, networks, data,
            and security operations can be protected.
          </p>

          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              <span>Overall Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div
              style={{
                height: "10px",
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
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            {subtopics.map((topic, index) => {
              const completed = completedLessons.includes(topic.id);

              return (
                <div
                  key={topic.id}
                  style={{
                    border: "1px solid #dbeafe",
                    borderRadius: "12px",
                    padding: "16px",
                    background:
                      index === currentLesson
                        ? "#eff6ff"
                        : "#ffffff",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                      marginBottom: "5px",
                    }}
                  >
                    Lesson {index + 1}
                  </div>

                  <h3
                    style={{
                      margin: "5px 0 12px",
                      color: "#1e3a8a",
                      fontSize: "17px",
                    }}
                  >
                    {completed ? "✅ " : ""}
                    {topic.title}
                  </h3>

                  <button
                    onClick={() => {
                      setCurrentLesson(index);
                      setQuestionIndex(0);
                      setSelectedAnswer(null);
                      setSubmitted(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "9px",
                      borderRadius: "7px",
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Open Lesson
                  </button>
                </div>
              );
            })}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e5e7eb",
              margin: "30px 0",
            }}
          />

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <h2
                style={{
                  color: "#1e3a8a",
                  margin: 0,
                }}
              >
                Lesson {currentLesson + 1}: {lesson.title}
              </h2>

              <span
                style={{
                  color: "#64748b",
                  fontWeight: "600",
                }}
              >
                {Math.round(lessonProgress)}%
              </span>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e5e7eb",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: `${lessonProgress}%`,
                  height: "100%",
                  background: "#60a5fa",
                }}
              />
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "25px",
                lineHeight: "1.7",
                color: "#334155",
                whiteSpace: "pre-line",
              }}
            >
              {lesson.lesson.explanation}
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>
                ⚠️ Common Mistakes
              </h3>

              <ul style={{ lineHeight: "1.8" }}>
                {lesson.lesson.mistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                marginTop: "30px",
                padding: "25px",
                border: "1px solid #dbeafe",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>
                📝 Quick Quiz
              </h3>

              <p
                style={{
                  color: "#64748b",
                  marginBottom: "20px",
                }}
              >
                Question {questionIndex + 1} of{" "}
                {lesson.lesson.quiz.length}
              </p>

              <h3 style={{ marginBottom: "20px" }}>
                {quizQuestion.question}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {options.map((option) => {
                  let background = "#ffffff";
                  let border = "1px solid #cbd5e1";

                  if (submitted) {
                    if (option === quizQuestion.answer) {
                      background = "#dcfce7";
                      border = "1px solid #22c55e";
                    } else if (
                      option === selectedAnswer &&
                      option !== quizQuestion.answer
                    ) {
                      background = "#fee2e2";
                      border = "1px solid #ef4444";
                    }
                  } else if (option === selectedAnswer) {
                    background = "#dbeafe";
                    border = "1px solid #2563eb";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        if (!submitted) {
                          setSelectedAnswer(option);
                        }
                      }}
                      style={{
                        textAlign: "left",
                        padding: "13px 15px",
                        borderRadius: "8px",
                        border,
                        background,
                        cursor: submitted
                          ? "default"
                          : "pointer",
                        fontSize: "15px",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    borderRadius: "8px",
                    background: isCorrect
                      ? "#dcfce7"
                      : "#fef3c7",
                    color: isCorrect
                      ? "#166534"
                      : "#92400e",
                  }}
                >
                  {isCorrect ? (
                    <strong>✅ Correct answer!</strong>
                  ) : (
                    <>
                      <strong>❌ Incorrect answer.</strong>

                      <div style={{ marginTop: "6px" }}>
                        Correct answer:{" "}
                        <strong>{quizQuestion.answer}</strong>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {!submitted ? (
                  <button
                    onClick={submitAnswer}
                    disabled={!selectedAnswer}
                    style={{
                      padding: "11px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: selectedAnswer
                        ? "#2563eb"
                        : "#94a3b8",
                      color: "#ffffff",
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
                    onClick={nextQuestion}
                    style={{
                      padding: "11px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#2563eb",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {questionIndex <
                    lesson.lesson.quiz.length - 1
                      ? "Next Question →"
                      : currentLesson < totalLessons - 1
                      ? "Finish Lesson & Next →"
                      : "Finish Topic ✓"}
                  </button>
                )}
              </div>
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button
                onClick={previousLesson}
                disabled={currentLesson === 0}
                style={{
                  padding: "11px 18px",
                  borderRadius: "8px",
                  border: "1px solid #bfdbfe",
                  background:
                    currentLesson === 0
                      ? "#e5e7eb"
                      : "#ffffff",
                  color:
                    currentLesson === 0
                      ? "#94a3b8"
                      : "#2563eb",
                  cursor:
                    currentLesson === 0
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                }}
              >
                ← Previous Lesson
              </button>

              {currentLesson < totalLessons - 1 && (
                <button
                  onClick={nextLesson}
                  style={{
                    padding: "11px 18px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Next Lesson →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurity;