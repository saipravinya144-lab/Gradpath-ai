import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const DigitalForensics = ({ goBack }) => {
  const subtopics = [
    {
      id: 1,
      title: "Digital Forensics Fundamentals",
      lesson: {
        explanation: `
Digital forensics is the process of identifying, collecting, preserving, examining, and analyzing digital evidence.

Digital evidence can come from computers, smartphones, storage devices, networks, cloud services, and other digital systems.

The main goal of digital forensics is to determine what happened, when it happened, how it happened, and what evidence supports the findings.

A forensic investigation should preserve the original evidence and use controlled methods so that the evidence is not accidentally modified.

Important stages include identification, preservation, collection, examination, analysis, and reporting.

Digital forensics is used in areas such as incident response, cybercrime investigations, internal security investigations, fraud investigations, and legal proceedings.

Investigators must follow applicable laws, organizational policies, and proper evidence-handling procedures.
        `,
        mistakes: [
          "Changing or modifying the original evidence.",
          "Failing to document investigation activities.",
          "Ignoring the importance of evidence integrity.",
          "Performing investigations without proper authorization.",
        ],
        quiz: [
          {
            question: "What is the main purpose of digital forensics?",
            options: [
              "To collect and analyze digital evidence",
              "To increase internet speed",
              "To design websites",
              "To create computer games",
            ],
            answer: "To collect and analyze digital evidence",
          },
          {
            question: "Which principle is important when handling digital evidence?",
            options: [
              "Preserve its integrity",
              "Modify it immediately",
              "Delete unnecessary files",
              "Share it publicly",
            ],
            answer: "Preserve its integrity",
          },
          {
            question: "Which of these can contain digital evidence?",
            options: [
              "Computers and smartphones",
              "Only printers",
              "Only monitors",
              "Only keyboards",
            ],
            answer: "Computers and smartphones",
          },
        ],
      },
    },

    {
      id: 2,
      title: "Evidence Collection & Preservation",
      lesson: {
        explanation: `
Evidence collection is one of the most important stages of a forensic investigation.

Investigators first identify potential sources of evidence and then collect them using controlled and documented procedures.

Examples include hard drives, USB devices, mobile phones, memory captures, log files, network records, and cloud records.

Evidence preservation aims to prevent accidental modification, destruction, or contamination.

A forensic image is a copy of a storage device created for examination. Investigators can analyze the copy while preserving the original evidence.

Hash values can be used to verify whether digital evidence has changed. If the same evidence produces the same hash value before and after handling, this provides evidence of integrity.

Documentation should record who collected the evidence, when it was collected, where it came from, and how it was handled.
        `,
        mistakes: [
          "Analyzing the original evidence unnecessarily.",
          "Failing to document evidence handling.",
          "Not verifying evidence integrity.",
          "Allowing unauthorized people to access evidence.",
        ],
        quiz: [
          {
            question: "Why is evidence preservation important?",
            options: [
              "To maintain evidence integrity",
              "To make evidence larger",
              "To improve computer performance",
              "To remove all metadata",
            ],
            answer: "To maintain evidence integrity",
          },
          {
            question: "What is a forensic image?",
            options: [
              "A copy of storage media used for forensic examination",
              "A screenshot of a website",
              "A computer wallpaper",
              "A network diagram",
            ],
            answer: "A copy of storage media used for forensic examination",
          },
          {
            question: "What can a hash value help verify?",
            options: [
              "Evidence integrity",
              "Internet bandwidth",
              "Screen resolution",
              "CPU temperature",
            ],
            answer: "Evidence integrity",
          },
        ],
      },
    },

    {
      id: 3,
      title: "File Systems & Digital Artifacts",
      lesson: {
        explanation: `
A file system controls how data is organized and stored on a storage device.

Common file systems include NTFS, FAT32, exFAT, ext4, and APFS.

Digital forensic investigators examine file-system structures and artifacts to understand activity on a device.

Important artifacts may include file metadata, timestamps, browser history, downloaded files, system logs, recently accessed files, application data, and deleted-file information.

File timestamps can provide useful information about when files were created, modified, or accessed. However, timestamps must be interpreted carefully because they can be affected by system configuration or other factors.

Deleted files may sometimes leave recoverable information in unused storage areas, depending on the file system and storage technology.

Understanding file systems helps investigators reconstruct events and identify relevant evidence.
        `,
        mistakes: [
          "Assuming every timestamp is automatically accurate.",
          "Ignoring file-system metadata.",
          "Assuming deleted files are always permanently gone.",
          "Examining artifacts without considering their context.",
        ],
        quiz: [
          {
            question: "What does a file system primarily manage?",
            options: [
              "How data is organized and stored",
              "Internet passwords",
              "Monitor brightness",
              "Keyboard layout only",
            ],
            answer: "How data is organized and stored",
          },
          {
            question: "Which is an example of a digital artifact?",
            options: [
              "Browser history",
              "Desk lamp",
              "Chair",
              "Paper notebook",
            ],
            answer: "Browser history",
          },
          {
            question: "Why should timestamps be interpreted carefully?",
            options: [
              "They can be affected by system conditions",
              "They never contain useful information",
              "They are always encrypted",
              "They only exist on mobile devices",
            ],
            answer: "They can be affected by system conditions",
          },
        ],
      },
    },

    {
      id: 4,
      title: "Disk & Memory Forensics",
      lesson: {
        explanation: `
Disk forensics focuses on information stored on persistent storage such as hard drives and solid-state drives.

Investigators can examine file systems, partitions, files, metadata, logs, application artifacts, and other stored information.

Memory forensics focuses on volatile data found in system RAM.

RAM may contain information that is not stored permanently on disk, such as running processes, active network connections, loaded modules, and temporary information.

Volatile evidence can disappear when a system is powered off, so investigators must carefully consider the order in which evidence is collected.

Disk and memory analysis complement each other. Disk evidence can show historical activity, while memory can provide information about the system's current state at the time of collection.

Forensic analysis should always be performed using controlled and documented procedures.
        `,
        mistakes: [
          "Ignoring volatile memory.",
          "Assuming disk evidence contains everything needed.",
          "Changing system state unnecessarily during investigation.",
          "Failing to document collection procedures.",
        ],
        quiz: [
          {
            question: "What does memory forensics primarily examine?",
            options: [
              "Volatile data in RAM",
              "Paper documents",
              "Printer ink",
              "Monitor pixels",
            ],
            answer: "Volatile data in RAM",
          },
          {
            question: "Why can RAM be important during an investigation?",
            options: [
              "It can contain information about the system's active state",
              "It permanently stores every file",
              "It replaces the hard drive",
              "It contains only photographs",
            ],
            answer: "It can contain information about the system's active state",
          },
          {
            question: "What is a major focus of disk forensics?",
            options: [
              "Analyzing stored digital information",
              "Increasing RAM capacity",
              "Repairing monitors",
              "Designing processors",
            ],
            answer: "Analyzing stored digital information",
          },
        ],
      },
    },

    {
      id: 5,
      title: "Network Forensics",
      lesson: {
        explanation: `
Network forensics involves examining network-related evidence to understand communications and security incidents.

Potential evidence sources include packet captures, firewall logs, proxy logs, DNS records, authentication logs, and network-flow information.

Investigators can use network evidence to determine which systems communicated, when communication occurred, and what types of traffic were involved.

Network forensics can help investigate incidents such as unauthorized access, malware activity, suspicious connections, and data-transfer events.

Packet captures can provide detailed information about network communications when they are available.

Logs are also important because they provide records of network activity generated by security devices and services.

Network evidence should be correlated with endpoint and other evidence rather than interpreted in isolation.
        `,
        mistakes: [
          "Looking at network evidence without considering timestamps.",
          "Treating a single log entry as complete proof.",
          "Ignoring endpoint evidence.",
          "Failing to preserve relevant network records.",
        ],
        quiz: [
          {
            question: "What is network forensics concerned with?",
            options: [
              "Analyzing network-related evidence",
              "Designing computer cases",
              "Editing photographs",
              "Managing office furniture",
            ],
            answer: "Analyzing network-related evidence",
          },
          {
            question: "Which can be a source of network forensic evidence?",
            options: [
              "Firewall logs",
              "Keyboard stickers",
              "Monitor stand",
              "Mouse pad",
            ],
            answer: "Firewall logs",
          },
          {
            question: "Why should network evidence be correlated with other evidence?",
            options: [
              "To build a more complete understanding of events",
              "To make logs disappear",
              "To increase network speed",
              "To change packet contents",
            ],
            answer: "To build a more complete understanding of events",
          },
        ],
      },
    },

    {
      id: 6,
      title: "Mobile & Cloud Forensics",
      lesson: {
        explanation: `
Mobile forensics focuses on collecting and analyzing evidence from smartphones and other mobile devices.

Potential evidence includes messages, call records, application data, photographs, device information, location-related records, and system artifacts.

Cloud forensics deals with evidence stored or processed by cloud services.

Cloud environments can create additional challenges because data may be distributed across multiple systems, regions, accounts, and service providers.

Investigators may need to work with authorized service providers to obtain relevant records.

Legal requirements, privacy considerations, access permissions, and organizational policies are especially important when dealing with mobile and cloud evidence.

Investigators must document how evidence was obtained and maintain its integrity throughout the investigation.
        `,
        mistakes: [
          "Accessing mobile or cloud accounts without authorization.",
          "Ignoring privacy and legal requirements.",
          "Assuming cloud data exists in only one physical location.",
          "Failing to document evidence sources.",
        ],
        quiz: [
          {
            question: "Which is an example of mobile forensic evidence?",
            options: [
              "Application data",
              "Desk furniture",
              "Printer paper",
              "Monitor stand",
            ],
            answer: "Application data",
          },
          {
            question: "Why can cloud forensics be challenging?",
            options: [
              "Data may be distributed across systems and locations",
              "Cloud data never produces evidence",
              "Cloud services do not store information",
              "Cloud systems cannot generate logs",
            ],
            answer: "Data may be distributed across systems and locations",
          },
          {
            question: "What is especially important when collecting mobile or cloud evidence?",
            options: [
              "Authorization and legal requirements",
              "Changing account passwords randomly",
              "Deleting old messages",
              "Sharing evidence publicly",
            ],
            answer: "Authorization and legal requirements",
          },
        ],
      },
    },

    {
      id: 7,
      title: "Forensic Analysis & Reporting",
      lesson: {
        explanation: `
Forensic analysis involves examining collected evidence and developing conclusions supported by that evidence.

Investigators may organize evidence chronologically to reconstruct events. This is known as timeline analysis.

Evidence from different sources can be correlated to identify relationships between events.

A forensic report should clearly describe the investigation scope, evidence examined, methodology, findings, and conclusions.

Reports should distinguish observed facts from interpretations.

Good forensic reports are clear, reproducible, objective, and supported by evidence.

Investigators should avoid unsupported assumptions and should clearly document limitations or uncertainties.

The final report may be used by security teams, management, auditors, legal professionals, or other authorized stakeholders.
        `,
        mistakes: [
          "Making conclusions without supporting evidence.",
          "Mixing facts with unsupported assumptions.",
          "Failing to document methodology.",
          "Ignoring limitations or uncertainty.",
        ],
        quiz: [
          {
            question: "What is timeline analysis used for?",
            options: [
              "Reconstructing events in chronological order",
              "Increasing storage capacity",
              "Encrypting every file",
              "Changing system time",
            ],
            answer: "Reconstructing events in chronological order",
          },
          {
            question: "What should a forensic report contain?",
            options: [
              "Scope, methodology, findings, and conclusions",
              "Only screenshots",
              "Only personal opinions",
              "Only system passwords",
            ],
            answer: "Scope, methodology, findings, and conclusions",
          },
          {
            question: "What should investigators do when evidence is uncertain?",
            options: [
              "Clearly document the limitation or uncertainty",
              "Hide the uncertainty",
              "Invent missing evidence",
              "Delete the evidence",
            ],
            answer: "Clearly document the limitation or uncertainty",
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
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-digital-forensics", subtopics);
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
    ((completedLessons.length) / totalLessons) * 100;

  const lessonProgress = ((questionIndex + (submitted ? 1 : 0)) /
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
            🔬 Digital Forensics
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Learn how digital evidence is collected, preserved, analyzed,
            and reported during authorized forensic investigations.
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
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
                      index === currentLesson ? "#eff6ff" : "#ffffff",
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
                    background: isCorrect ? "#dcfce7" : "#fef3c7",
                    color: isCorrect ? "#166534" : "#92400e",
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
                    currentLesson === 0 ? "#e5e7eb" : "#ffffff",
                  color:
                    currentLesson === 0 ? "#94a3b8" : "#2563eb",
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

export default DigitalForensics;