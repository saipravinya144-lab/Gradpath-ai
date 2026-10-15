import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

// =====================================================
// LINUX & SYSTEM ADMINISTRATION
// =====================================================

const subtopics = [
  {
    id: "linux-fundamentals",
    title: "Linux Fundamentals",
    lesson: {
      description:
        "Linux is an open-source operating system widely used in servers, cloud infrastructure, containers, development environments, and embedded systems. Understanding Linux fundamentals is an important foundation for Cloud and DevOps work.",

      points: [
        "Linux is an open-source operating system based on the Linux kernel.",
        "Linux distributions combine the Linux kernel with system tools, libraries, package managers, and other software.",
        "Popular distributions include Ubuntu, Debian, Fedora, and Red Hat Enterprise Linux.",
        "Linux systems are commonly managed through a command-line interface.",
        "Linux is widely used for servers and cloud infrastructure.",
      ],

      example:
        "A cloud virtual machine can run Ubuntu Linux. An administrator can connect to it through SSH and manage files, install software, configure services, and monitor the system.",

      mistakes: [
        "Thinking Linux and every Linux distribution are exactly the same thing.",
        "Assuming Linux can only be used through a graphical interface.",
        "Running commands without understanding what they do.",
      ],

      quiz: [
        {
          question: "What is Linux?",
          options: [
            "An open-source operating system kernel",
            "A cloud provider",
            "A database",
            "A programming language",
          ],
          answer: "An open-source operating system kernel",
        },
        {
          question: "Which of the following is a Linux distribution?",
          options: [
            "Ubuntu",
            "JavaScript",
            "Docker",
            "HTML",
          ],
          answer: "Ubuntu",
        },
        {
          question:
            "Why is Linux widely used in cloud environments?",
          options: [
            "It is widely supported for servers and infrastructure",
            "It only works on personal laptops",
            "It does not support networking",
            "It cannot run applications",
          ],
          answer:
            "It is widely supported for servers and infrastructure",
        },
      ],
    },
  },

  {
    id: "linux-file-system",
    title: "Linux File System",
    lesson: {
      description:
        "The Linux file system organizes files and directories in a hierarchical structure. Unlike Windows drive-letter organization, Linux generally uses a single directory tree that begins at the root directory represented by /.",

      points: [
        "The root directory is represented by /.",
        "Directories such as /home, /etc, /var, /tmp, and /usr have specific purposes.",
        "The /home directory commonly contains users' personal files.",
        "The /etc directory contains many system configuration files.",
        "The /var directory commonly stores variable data such as logs.",
        "Paths can be absolute or relative.",
      ],

      example:
        "The absolute path /home/user/documents/report.txt identifies a file starting from the root directory.",

      mistakes: [
        "Confusing the root directory / with the root user.",
        "Deleting system files without understanding their purpose.",
        "Mixing Windows-style paths with Linux paths.",
      ],

      quiz: [
        {
          question: "What symbol represents the Linux root directory?",
          options: [
            "/",
            "\\",
            "~",
            ":",
          ],
          answer: "/",
        },
        {
          question: "Which directory commonly contains user home directories?",
          options: [
            "/home",
            "/etc",
            "/boot",
            "/dev",
          ],
          answer: "/home",
        },
        {
          question:
            "Which directory commonly contains system configuration files?",
          options: [
            "/etc",
            "/home",
            "/media",
            "/tmp",
          ],
          answer: "/etc",
        },
      ],
    },
  },

  {
    id: "linux-commands-utilities",
    title: "Linux Commands & Utilities",
    lesson: {
      description:
        "Linux provides many command-line utilities for navigating directories, managing files, viewing system information, searching for data, and performing administrative tasks.",

      points: [
        "pwd displays the current working directory.",
        "ls lists files and directories.",
        "cd changes the current directory.",
        "cp copies files or directories.",
        "mv moves or renames files and directories.",
        "rm removes files or directories.",
        "cat, less, and head can be used to view file contents.",
        "grep can search for matching text.",
      ],

      example:
        "Running `pwd` shows where you are in the file system, while `ls` displays the contents of the current directory.",

      mistakes: [
        "Using rm without checking the target path.",
        "Forgetting that Linux commands and file names are usually case-sensitive.",
        "Running administrative commands unnecessarily.",
      ],

      quiz: [
        {
          question: "Which command shows the current working directory?",
          options: [
            "pwd",
            "ls",
            "cd",
            "mkdir",
          ],
          answer: "pwd",
        },
        {
          question: "Which command lists files and directories?",
          options: [
            "ls",
            "pwd",
            "rm",
            "touch",
          ],
          answer: "ls",
        },
        {
          question: "Which command is commonly used to search text patterns?",
          options: [
            "grep",
            "cd",
            "mkdir",
            "pwd",
          ],
          answer: "grep",
        },
      ],
    },
  },

  {
    id: "users-groups-permissions",
    title: "Users, Groups & Permissions",
    lesson: {
      description:
        "Linux uses users, groups, and permissions to control access to files and system resources. Each file has ownership information and permissions that determine what users can do with it.",

      points: [
        "Linux accounts are represented by users.",
        "Groups can be used to manage permissions for multiple users.",
        "Files generally have an owner and an associated group.",
        "Permissions include read, write, and execute.",
        "Permissions are applied to the owner, group, and other users.",
        "Commands such as chmod, chown, and usermod are commonly used for permission and account management.",
      ],

      example:
        "A configuration file might allow its owner to read and modify it while allowing other users only to read it.",

      mistakes: [
        "Giving every user unrestricted permissions.",
        "Confusing file ownership with file permissions.",
        "Using chmod values without understanding their effect.",
      ],

      quiz: [
        {
          question:
            "Which of the following is a Linux file permission?",
          options: [
            "Read",
            "Compile",
            "Deploy",
            "Download",
          ],
          answer: "Read",
        },
        {
          question:
            "Which command can change file permissions?",
          options: [
            "chmod",
            "pwd",
            "ls",
            "cd",
          ],
          answer: "chmod",
        },
        {
          question:
            "Why are groups useful in Linux?",
          options: [
            "They allow permissions to be managed for multiple users",
            "They replace the operating system",
            "They remove the need for passwords",
            "They create cloud regions",
          ],
          answer:
            "They allow permissions to be managed for multiple users",
        },
      ],
    },
  },

  {
    id: "processes-system-services",
    title: "Processes & System Services",
    lesson: {
      description:
        "A process is a running instance of a program. Linux provides tools for viewing, managing, and monitoring processes. System services are background programs that provide functionality such as networking, logging, or web serving.",

      points: [
        "Every running program is represented by one or more processes.",
        "Processes have identifiers called process IDs or PIDs.",
        "Commands such as ps and top can be used to inspect processes.",
        "A process can consume resources such as CPU and memory.",
        "System services commonly run in the background.",
        "systemctl is commonly used to manage services on systems using systemd.",
      ],

      example:
        "An administrator can use `systemctl status` to inspect the status of a service and use process-monitoring tools to investigate resource usage.",

      mistakes: [
        "Terminating an important system process without checking its purpose.",
        "Assuming every running process is a separate application window.",
        "Ignoring CPU and memory usage when troubleshooting.",
      ],

      quiz: [
        {
          question: "What is a process?",
          options: [
            "A running instance of a program",
            "A physical hard drive",
            "A network cable",
            "A cloud region",
          ],
          answer: "A running instance of a program",
        },
        {
          question: "What does PID stand for?",
          options: [
            "Process ID",
            "Program Internet Directory",
            "Process Installation Data",
            "Private Instance Domain",
          ],
          answer: "Process ID",
        },
        {
          question:
            "Which command is commonly used with systemd to manage services?",
          options: [
            "systemctl",
            "grep",
            "pwd",
            "mkdir",
          ],
          answer: "systemctl",
        },
      ],
    },
  },

  {
    id: "package-management",
    title: "Package Management & Software Installation",
    lesson: {
      description:
        "Linux package managers simplify the installation, updating, and removal of software. Different Linux distributions use different package management systems.",

      points: [
        "A package contains software and related metadata needed for installation.",
        "Package managers can install, update, and remove software.",
        "Ubuntu and Debian commonly use the APT package management system.",
        "Fedora and related distributions commonly use DNF.",
        "Package repositories provide software packages that package managers can retrieve.",
        "Keeping packages updated helps maintain functionality and security.",
      ],

      example:
        "On an Ubuntu system, an administrator can use APT to install a package from configured repositories.",

      mistakes: [
        "Installing software from unknown sources without checking it.",
        "Forgetting to update package metadata before installing software when required.",
        "Assuming commands for one distribution always work unchanged on another.",
      ],

      quiz: [
        {
          question: "What is the purpose of a package manager?",
          options: [
            "To install, update, and remove software",
            "To create physical servers",
            "To design websites",
            "To replace the Linux kernel",
          ],
          answer: "To install, update, and remove software",
        },
        {
          question:
            "Which package management system is commonly associated with Ubuntu?",
          options: [
            "APT",
            "DNF",
            "npm",
            "pip",
          ],
          answer: "APT",
        },
        {
          question:
            "Why are software repositories useful?",
          options: [
            "They provide packages that package managers can retrieve",
            "They replace computer hardware",
            "They prevent all software bugs",
            "They create network cables",
          ],
          answer:
            "They provide packages that package managers can retrieve",
        },
      ],
    },
  },

  {
    id: "shell-scripting-basics",
    title: "Shell Scripting Basics",
    lesson: {
      description:
        "Shell scripting allows administrators and developers to automate sequences of commands. Scripts can perform repetitive tasks, process files, check system conditions, and automate parts of system administration.",

      points: [
        "A shell provides an interface for interacting with the operating system.",
        "Bash is one of the most commonly used shells on Linux systems.",
        "Shell scripts contain commands that can be executed in sequence.",
        "Variables can store values inside scripts.",
        "Conditional statements allow scripts to make decisions.",
        "Loops allow repeated operations.",
        "Shell scripting is useful for automation and administration.",
      ],

      example:
        "A shell script can check whether a service is running and perform an appropriate action based on the result.",

      mistakes: [
        "Writing scripts without testing them safely.",
        "Using variables incorrectly because of shell syntax.",
        "Running scripts with excessive privileges.",
      ],

      quiz: [
        {
          question: "What is shell scripting mainly useful for?",
          options: [
            "Automating command-line tasks",
            "Designing computer hardware",
            "Creating physical networks",
            "Replacing databases",
          ],
          answer: "Automating command-line tasks",
        },
        {
          question: "Which shell is widely used on Linux?",
          options: [
            "Bash",
            "HTML",
            "SQL",
            "CSS",
          ],
          answer: "Bash",
        },
        {
          question:
            "What can loops be used for in shell scripts?",
          options: [
            "Repeating operations",
            "Creating physical CPUs",
            "Changing the monitor",
            "Removing the operating system",
          ],
          answer: "Repeating operations",
        },
      ],
    },
  },
];

// =====================================================
// COMPONENT
// =====================================================

const LinuxSystemAdministration = ({ goBack }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-linux-system-administration", subtopics);

  // =====================================================
  // SHUFFLED QUIZ OPTIONS
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const topic = subtopics[currentLesson];

  const quizQuestions = topic.lesson.quiz;

  const question = quizQuestions[questionIndex];

  const options =
    shuffledQuizOptions[topic.id][questionIndex];

  // =====================================================
  // PROGRESS
  // =====================================================

  const progress = Math.round(
    (completedLessons.length / subtopics.length) * 100
  );

  // =====================================================
  // SUBMIT ANSWER
  // =====================================================

  const submitAnswer = () => {
    if (selectedAnswer === null) {
      return;
    }
    setSubmitted(true);
  };

  // =====================================================
  // NEXT QUESTION
  // =====================================================

  const nextQuestion = async () => {
    if (!submitted) {
      return;
    }

    const updatedScore = score + (selectedAnswer === question.answer ? 1 : 0);

    if (questionIndex < quizQuestions.length - 1) {
      setScore(updatedScore);
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
      return;
    }

    await saveQuizResult({
      subject: "Cloud/DevOps",
      role: "Cloud/DevOps Engineer",
      topic: topic.title,
      topicId: topic.id,
      score: updatedScore,
      totalQuestions: quizQuestions.length
    });

    if (!completedLessons.includes(topic.id)) {
      saveProgress(topic.id);
    }

    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // NEXT LESSON
  // =====================================================

  const nextLesson = () => {
    if (!completedLessons.includes(topic.id)) {
      saveProgress(topic.id);
    }

    if (currentLesson < subtopics.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  // =====================================================
  // SELECT LESSON
  // =====================================================

  const selectLesson = (index) => {
    setCurrentLesson(index);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        {/* BACK BUTTON */}

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
          ← Back to Cloud / DevOps Roadmap
        </button>

        {/* HEADER */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#1d4ed8",
            }}
          >
            🐧 Linux & System Administration
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn Linux fundamentals, file systems,
            commands, permissions, processes,
            software management, and shell scripting
            for Cloud and DevOps environments.
          </p>
        </div>

        {/* PROGRESS */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "22px",
            marginBottom: "25px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            <span>Topic Progress</span>

            <span>{progress}%</span>
          </div>

          <div
            style={{
              height: "9px",
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
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              margin: "10px 0 0",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            {completedLessons.length} of{" "}
            {subtopics.length} lessons completed
          </p>
        </div>

        {/* LESSON NAVIGATION */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "25px",
          }}
        >
          {subtopics.map((item, index) => (
            <button
              key={item.id}
              onClick={() => selectLesson(index)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border:
                  currentLesson === index
                    ? "1px solid #2563eb"
                    : "1px solid #bfdbfe",
                background:
                  currentLesson === index
                    ? "#2563eb"
                    : "#ffffff",
                color:
                  currentLesson === index
                    ? "#ffffff"
                    : "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {index + 1}

              {completedLessons.includes(item.id)
                ? " ✓"
                : ""}
            </button>
          ))}
        </div>

        {/* LESSON CARD */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "35px",
            boxShadow:
              "0 4px 18px rgba(0,0,0,0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          {/* LESSON NUMBER */}

          <div
            style={{
              color: "#64748b",
              fontSize: "13px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            LESSON {currentLesson + 1} OF{" "}
            {subtopics.length}
          </div>

          {/* LESSON TITLE */}

          <h2
            style={{
              color: "#1e3a8a",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            {topic.title}
          </h2>

          {/* DESCRIPTION */}

          <p
            style={{
              color: "#334155",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            {topic.lesson.description}
          </p>

          {/* KEY POINTS */}

          <h3
            style={{
              color: "#1d4ed8",
              marginTop: "30px",
            }}
          >
            📌 Key Points
          </h3>

          <ul
            style={{
              color: "#334155",
              lineHeight: "1.8",
              paddingLeft: "22px",
            }}
          >
            {topic.lesson.points.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>

          {/* EXAMPLE */}

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "10px",
              padding: "18px",
              marginTop: "25px",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginTop: 0,
              }}
            >
              💡 Example
            </h3>

            <p
              style={{
                color: "#334155",
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              {topic.lesson.example}
            </p>
          </div>

          {/* COMMON MISTAKES */}

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "10px",
              padding: "18px",
              marginTop: "25px",
            }}
          >
            <h3
              style={{
                color: "#c2410c",
                marginTop: 0,
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
                paddingLeft: "22px",
                marginBottom: 0,
              }}
            >
              {topic.lesson.mistakes.map(
                (mistake, index) => (
                  <li key={index}>{mistake}</li>
                )
              )}
            </ul>
          </div>

          {/* QUIZ */}

          <div
            style={{
              marginTop: "35px",
              paddingTop: "30px",
              borderTop: "1px solid #dbeafe",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginTop: 0,
              }}
            >
              📝 Quick Quiz
            </h3>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question {questionIndex + 1} of{" "}
              {quizQuestions.length}
            </p>

            <h4
              style={{
                color: "#1e3a8a",
                fontSize: "17px",
                lineHeight: "1.5",
              }}
            >
              {question.question}
            </h4>

            {/* OPTIONS */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "18px",
              }}
            >
              {options.map((option) => {
                const isSelected =
                  selectedAnswer === option;

                const isCorrect =
                  option === question.answer;

                let background = "#ffffff";
                let border = "1px solid #bfdbfe";
                let color = "#334155";

                if (submitted && isCorrect) {
                  background = "#dcfce7";
                  border = "1px solid #22c55e";
                  color = "#166534";
                } else if (
                  submitted &&
                  isSelected &&
                  !isCorrect
                ) {
                  background = "#fee2e2";
                  border = "1px solid #ef4444";
                  color = "#991b1b";
                } else if (isSelected) {
                  background = "#eff6ff";
                  border = "1px solid #2563eb";
                  color = "#1d4ed8";
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
                      borderRadius: "9px",
                      border,
                      background,
                      color,
                      cursor: submitted
                        ? "default"
                        : "pointer",
                      fontWeight: isSelected
                        ? "600"
                        : "400",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK */}

            {submitted && (
              <div
                style={{
                  marginTop: "18px",
                  padding: "15px",
                  borderRadius: "9px",
                  background:
                    selectedAnswer === question.answer
                      ? "#dcfce7"
                      : "#fee2e2",
                  color:
                    selectedAnswer === question.answer
                      ? "#166534"
                      : "#991b1b",
                  lineHeight: "1.6",
                }}
              >
                {selectedAnswer === question.answer ? (
                  <strong>✅ Correct answer!</strong>
                ) : (
                  <>
                    <strong>
                      ❌ Incorrect answer.
                    </strong>

                    <br />

                    Correct answer:{" "}
                    <strong>{question.answer}</strong>
                  </>
                )}
              </div>
            )}

            {/* QUIZ BUTTON */}

            {!submitted ? (
              <button
                onClick={submitAnswer}
                disabled={selectedAnswer === null}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    selectedAnswer === null
                      ? "#94a3b8"
                      : "#2563eb",
                  color: "#ffffff",
                  cursor:
                    selectedAnswer === null
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                }}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: "20px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {questionIndex <
                quizQuestions.length - 1
                  ? "Next Question →"
                  : "Finish Quiz →"}
              </button>
            )}
          </div>

          {/* LESSON NAVIGATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginTop: "35px",
              paddingTop: "25px",
              borderTop: "1px solid #dbeafe",
            }}
          >
            <button
              onClick={previousLesson}
              disabled={currentLesson === 0}
              style={{
                padding: "11px 20px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  currentLesson === 0
                    ? "#f1f5f9"
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

            {currentLesson <
            subtopics.length - 1 ? (
              <button
                onClick={nextLesson}
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
                Next Lesson →
              </button>
            ) : (
              <button
                onClick={() => {
                  if (
                    !completedLessons.includes(
                      topic.id
                    )
                  ) {
                    saveProgress(topic.id);
                  }
                }}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#16a34a",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                ✓ Complete Topic
              </button>
            )}
          </div>
        </div>

        {/* TOPIC COMPLETION */}

        {completedLessons.length ===
          subtopics.length && (
          <div
            style={{
              marginTop: "25px",
              background: "#ecfdf5",
              border: "1px solid #86efac",
              borderRadius: "14px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#166534",
                marginTop: 0,
              }}
            >
              🎉 Topic Completed!
            </h2>

            <p
              style={{
                color: "#166534",
                marginBottom: "20px",
              }}
            >
              You have completed all 7 lessons in
              Linux & System Administration.
            </p>

            <button
              onClick={goBack}
              style={{
                padding: "11px 22px",
                borderRadius: "8px",
                border: "none",
                background: "#16a34a",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ← Back to Cloud / DevOps Roadmap
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinuxSystemAdministration;