import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "linux-fundamentals",
    title: "Linux Fundamentals",
    icon: "🐧",
    lesson: {
      overview:
        "Learn the basic concepts of Linux, its architecture, distributions, and why Linux is widely used in cybersecurity.",
      sections: [
        {
          heading: "What is Linux?",
          points: [
            "Linux is an open-source operating system kernel.",
            "A complete Linux operating system usually combines the Linux kernel with system utilities, libraries, package managers, and applications.",
            "Linux is widely used on servers, cloud systems, security tools, embedded devices, and development environments.",
          ],
        },
        {
          heading: "Linux Distributions",
          points: [
            "A Linux distribution packages the Linux kernel with software and configuration tools.",
            "Examples include Ubuntu, Debian, Fedora, Arch Linux, and Kali Linux.",
            "Different distributions are designed for different use cases.",
          ],
        },
        {
          heading: "Why Linux Matters in Cybersecurity",
          points: [
            "Many security tools are designed for Linux.",
            "Linux provides strong command-line capabilities.",
            "Security professionals commonly use Linux for system administration, monitoring, analysis, and authorized security testing.",
          ],
        },
      ],
      mistakes: [
        "Thinking Linux and a Linux distribution are exactly the same thing.",
        "Assuming every Linux distribution uses the same package manager.",
        "Running commands without understanding what they do.",
      ],
      quiz: [
        {
          question: "What is Linux primarily?",
          options: [
            "A web browser",
            "An operating system kernel",
            "A database system",
            "A programming language",
          ],
          answer: "An operating system kernel",
        },
        {
          question: "Which is an example of a Linux distribution?",
          options: ["Ubuntu", "Chrome", "Windows", "Oracle"],
          answer: "Ubuntu",
        },
        {
          question:
            "Why is Linux commonly used in cybersecurity environments?",
          options: [
            "It can only run graphical applications",
            "It provides powerful command-line and system-management capabilities",
            "It does not support networking",
            "It cannot run security tools",
          ],
          answer:
            "It provides powerful command-line and system-management capabilities",
        },
      ],
    },
  },

  {
    id: "linux-file-system",
    title: "Linux File System",
    icon: "📁",
    lesson: {
      overview:
        "Understand the Linux directory structure, paths, files, directories, and important system locations.",
      sections: [
        {
          heading: "Linux Directory Structure",
          points: [
            "Linux uses a hierarchical file system beginning at the root directory, represented by /.",
            "Directories can contain files and other directories.",
            "Absolute paths begin from the root directory.",
            "Relative paths are interpreted from the current working directory.",
          ],
        },
        {
          heading: "Important Directories",
          points: [
            "/home commonly contains users' personal files.",
            "/etc contains many system and application configuration files.",
            "/var contains variable data such as logs.",
            "/tmp is commonly used for temporary files.",
            "/bin and /usr/bin contain commonly used executable programs on many Linux systems.",
          ],
        },
        {
          heading: "Paths",
          points: [
            "The command pwd displays the current working directory.",
            "The symbol . refers to the current directory.",
            "The symbol .. refers to the parent directory.",
            "The symbol ~ commonly represents the current user's home directory.",
          ],
        },
      ],
      mistakes: [
        "Confusing the root directory / with the root user's home directory.",
        "Using relative paths without checking the current directory.",
        "Deleting files without verifying the path first.",
      ],
      quiz: [
        {
          question: "What does / represent in a Linux file system?",
          options: [
            "The current user's home directory",
            "The root directory",
            "The temporary directory",
            "The log directory",
          ],
          answer: "The root directory",
        },
        {
          question: "Which directory commonly contains system configuration files?",
          options: ["/home", "/etc", "/tmp", "/media"],
          answer: "/etc",
        },
        {
          question: "What does .. represent in a Linux path?",
          options: [
            "The current directory",
            "The root directory",
            "The parent directory",
            "The home directory",
          ],
          answer: "The parent directory",
        },
      ],
    },
  },

  {
    id: "linux-commands",
    title: "Linux Commands",
    icon: "⌨️",
    lesson: {
      overview:
        "Learn essential Linux commands used for navigating directories, viewing files, creating files, and managing the command line.",
      sections: [
        {
          heading: "Navigation Commands",
          points: [
            "pwd displays the current working directory.",
            "ls lists files and directories.",
            "cd changes the current working directory.",
          ],
        },
        {
          heading: "File and Directory Commands",
          points: [
            "touch can create an empty file.",
            "mkdir creates a directory.",
            "cp copies files or directories.",
            "mv moves or renames files and directories.",
            "rm removes files.",
          ],
        },
        {
          heading: "Viewing Information",
          points: [
            "cat displays file contents.",
            "less allows files to be viewed page by page.",
            "head displays the beginning of a file.",
            "tail displays the end of a file.",
            "man provides documentation for many commands.",
          ],
        },
      ],
      mistakes: [
        "Using rm without checking which files are targeted.",
        "Forgetting that command options can change command behavior.",
        "Assuming cat is the only way to inspect a file.",
      ],
      quiz: [
        {
          question: "Which command displays the current working directory?",
          options: ["pwd", "cd", "ls", "mkdir"],
          answer: "pwd",
        },
        {
          question: "Which command is commonly used to create a directory?",
          options: ["touch", "mkdir", "cat", "pwd"],
          answer: "mkdir",
        },
        {
          question: "Which command displays the contents of a text file?",
          options: ["cat", "cd", "mv", "mkdir"],
          answer: "cat",
        },
      ],
    },
  },

  {
    id: "users-permissions",
    title: "Users & Permissions",
    icon: "👥",
    lesson: {
      overview:
        "Learn how Linux controls access to files and resources through users, groups, ownership, and permissions.",
      sections: [
        {
          heading: "Users and Groups",
          points: [
            "Linux supports multiple users on the same system.",
            "Users can belong to one or more groups.",
            "Groups help administrators manage access for multiple users.",
          ],
        },
        {
          heading: "File Ownership",
          points: [
            "Files generally have an associated owner and group.",
            "The ls -l command can display ownership and permission information.",
            "Ownership can be changed by authorized users using commands such as chown.",
          ],
        },
        {
          heading: "Permissions",
          points: [
            "Linux commonly represents permissions as read, write, and execute.",
            "Permissions are associated with the owner, group, and others.",
            "The chmod command can modify file permissions.",
          ],
        },
      ],
      mistakes: [
        "Giving every user unnecessary permissions.",
        "Confusing file ownership with file permissions.",
        "Using elevated privileges when they are not required.",
      ],
      quiz: [
        {
          question:
            "Which three basic permission types are commonly used in Linux?",
          options: [
            "Read, write, execute",
            "Open, close, delete",
            "Start, stop, pause",
            "Copy, paste, rename",
          ],
          answer: "Read, write, execute",
        },
        {
          question: "Which command is commonly used to change file permissions?",
          options: ["chmod", "pwd", "cat", "mkdir"],
          answer: "chmod",
        },
        {
          question: "What is the purpose of Linux groups?",
          options: [
            "To replace the file system",
            "To manage access for collections of users",
            "To disable networking",
            "To automatically encrypt every file",
          ],
          answer: "To manage access for collections of users",
        },
      ],
    },
  },

  {
    id: "processes-services",
    title: "Processes & Services",
    icon: "⚙️",
    lesson: {
      overview:
        "Understand Linux processes, process identifiers, services, and basic process-management commands.",
      sections: [
        {
          heading: "Processes",
          points: [
            "A process is a running instance of a program.",
            "Linux assigns processes process identifiers, commonly called PIDs.",
            "Processes consume resources such as CPU time and memory.",
          ],
        },
        {
          heading: "Useful Commands",
          points: [
            "ps can display information about running processes.",
            "top provides a dynamic view of processes and resource usage.",
            "kill can send a signal to a process when the user has appropriate permissions.",
          ],
        },
        {
          heading: "Services",
          points: [
            "Services are background programs that provide system or application functionality.",
            "Modern Linux systems commonly use systemd for service management.",
            "The systemctl command can be used to inspect and manage services when authorized.",
          ],
        },
      ],
      mistakes: [
        "Terminating processes without identifying them correctly.",
        "Assuming every process is a service.",
        "Changing system services without understanding their purpose.",
      ],
      quiz: [
        {
          question: "What does PID commonly stand for?",
          options: [
            "Process Identifier",
            "Program Internet Directory",
            "Permission Identity Data",
            "Process Input Device",
          ],
          answer: "Process Identifier",
        },
        {
          question: "Which command provides a dynamic view of running processes?",
          options: ["top", "cd", "mkdir", "touch"],
          answer: "top",
        },
        {
          question: "Which tool is commonly associated with systemd service management?",
          options: ["systemctl", "cat", "pwd", "nano"],
          answer: "systemctl",
        },
      ],
    },
  },

  {
    id: "networking-commands",
    title: "Networking Commands",
    icon: "🌐",
    lesson: {
      overview:
        "Learn basic Linux networking commands used to inspect connectivity, interfaces, routes, and network information.",
      sections: [
        {
          heading: "Network Interfaces",
          points: [
            "The ip command can display and manage network interface information.",
            "Network interfaces connect a system to a network.",
            "An interface may have an IP address assigned to it.",
          ],
        },
        {
          heading: "Connectivity and DNS",
          points: [
            "ping can be used to test network reachability using ICMP.",
            "The ss command can display socket and connection information.",
            "DNS tools can help investigate name resolution.",
          ],
        },
        {
          heading: "Routing",
          points: [
            "The routing table determines how network traffic is forwarded.",
            "The ip route command can display routing information.",
            "Understanding routes helps with network troubleshooting and security analysis.",
          ],
        },
      ],
      mistakes: [
        "Assuming a successful ping proves that every network service is working.",
        "Changing network configuration without understanding the effect.",
        "Exposing sensitive network information unnecessarily.",
      ],
      quiz: [
        {
          question: "Which command can display Linux network interface information?",
          options: ["ip", "mkdir", "touch", "chmod"],
          answer: "ip",
        },
        {
          question: "What is ping commonly used for?",
          options: [
            "Testing network reachability",
            "Changing file permissions",
            "Creating users",
            "Compressing files",
          ],
          answer: "Testing network reachability",
        },
        {
          question: "Which command can display routing information?",
          options: ["ip route", "cat file", "mkdir route", "chmod route"],
          answer: "ip route",
        },
      ],
    },
  },

  {
    id: "linux-security-basics",
    title: "Linux Security Basics",
    icon: "🛡️",
    lesson: {
      overview:
        "Learn practical Linux security fundamentals including updates, permissions, logs, services, and least privilege.",
      sections: [
        {
          heading: "Least Privilege",
          points: [
            "Users and processes should receive only the permissions required for their tasks.",
            "Avoid using administrative privileges for routine tasks when they are unnecessary.",
            "Least privilege reduces the potential impact of compromised accounts or processes.",
          ],
        },
        {
          heading: "System Updates",
          points: [
            "Security updates can fix known vulnerabilities.",
            "Package management tools vary between Linux distributions.",
            "Systems should be maintained according to organizational security requirements.",
          ],
        },
        {
          heading: "Logs and Monitoring",
          points: [
            "Linux systems maintain logs that can help with troubleshooting and security analysis.",
            "Logs can provide information about authentication, services, and system activity.",
            "Monitoring should respect organizational policies and authorized access.",
          ],
        },
        {
          heading: "Basic Hardening",
          points: [
            "Remove or disable unnecessary services when appropriate.",
            "Use strong authentication practices.",
            "Apply appropriate file permissions.",
            "Keep software updated.",
            "Review logs and system activity regularly.",
          ],
        },
      ],
      mistakes: [
        "Running everything as root.",
        "Ignoring security updates.",
        "Disabling security controls just to make a task easier.",
        "Leaving unnecessary services enabled.",
      ],
      quiz: [
        {
          question: "What principle recommends giving users only the permissions they need?",
          options: [
            "Least privilege",
            "Maximum access",
            "Open access",
            "Default trust",
          ],
          answer: "Least privilege",
        },
        {
          question: "Why are security updates important?",
          options: [
            "They can fix known vulnerabilities",
            "They always remove all user files",
            "They disable networking",
            "They eliminate the need for authentication",
          ],
          answer: "They can fix known vulnerabilities",
        },
        {
          question: "Why are Linux logs useful for security?",
          options: [
            "They can provide evidence of system and user activity",
            "They automatically prevent every attack",
            "They replace access controls",
            "They remove the need for monitoring",
          ],
          answer: "They can provide evidence of system and user activity",
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

function LinuxCommandLine({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-linux-command-line", subtopics);

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
  const quiz = lesson.lesson.quiz;
  const question = quiz[currentQuestion];
  const options = shuffledQuizOptions[lesson.id][currentQuestion];

  const isLastQuestion = currentQuestion === quiz.length - 1;
  const isLastLesson = currentLesson === subtopics.length - 1;

  const lessonCompleted = completedLessons.includes(lesson.id);

  const submitAnswer = () => {
    if (!selectedAnswer || submitted) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [currentQuestion]: selectedAnswer,
    }));

    setSubmitted(true);
  };

  const nextQuestion = async () => {
    if (!submitted) return;

    if (currentQuestion === quiz.length - 1) {
      if (!completedLessons.includes(lesson.id)) {
        saveProgress(lesson.id);
      }

      const finalAnswers = {
        ...quizAnswers,
        [currentQuestion]: selectedAnswer,
      };

      const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (finalAnswers[index] === item.answer ? 1 : 0), 0);

      await saveQuizResult({
        subject: "Cybersecurity",
        role: "Cybersecurity",
        topic: lesson.title,
        topicId: lesson.id,
        score: finalScore,
        totalQuestions: quiz.length
      });

      setQuizAnswers(finalAnswers);
      setQuizFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const previousQuestion = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const nextLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (isLastLesson) {
      goBack();
      return;
    }

    setCurrentLesson((prev) => prev + 1);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const previousLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson === 0) return;

    setCurrentLesson((prev) => prev - 1);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const getOptionStyle = (option) => {
    const baseStyle = {
      width: "100%",
      padding: "14px 16px",
      marginBottom: "10px",
      borderRadius: "10px",
      border: "1px solid #bfdbfe",
      background: "white",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "15px",
      transition: "0.2s",
    };

    if (!submitted) {
      if (selectedAnswer === option) {
        return {
          ...baseStyle,
          background: "#eff6ff",
          border: "2px solid #2563eb",
        };
      }

      return baseStyle;
    }

    if (option === question.answer) {
      return {
        ...baseStyle,
        background: "#dcfce7",
        border: "2px solid #16a34a",
        color: "#166534",
      };
    }

    if (option === selectedAnswer && option !== question.answer) {
      return {
        ...baseStyle,
        background: "#fee2e2",
        border: "2px solid #dc2626",
        color: "#991b1b",
      };
    }

    return {
      ...baseStyle,
      opacity: 0.75,
    };
  };

  const progressPercentage =
    ((currentLesson + 1) / subtopics.length) * 100;

  if (quizFinished) {
    const finalScore = lesson.lesson.quiz.reduce((score, item, index) => score + (quizAnswers[index] === item.answer ? 1 : 0), 0);
    const percentage = Math.round((finalScore / quiz.length) * 100);
    const passed = finalScore >= Math.ceil(quiz.length * 0.6);

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "700px", margin: "80px auto", background: "white", borderRadius: "16px", padding: "40px", textAlign: "center", border: "1px solid #bfdbfe", boxShadow: "0 8px 24px rgba(37, 99, 235, 0.08)" }}>
          <h1 style={{ color: "#1e3a8a" }}>🎉 Quiz Completed!</h1>
          <h2>{finalScore} / {quiz.length}</h2>
          <p style={{ fontSize: "22px", fontWeight: "700" }}>{percentage}%</p>
          <p style={{ color: passed ? "#15803d" : "#dc2626", fontWeight: "700" }}>{passed ? "Passed" : "Not Passed"}</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "25px" }}>
            <button onClick={() => { setCurrentQuestion(0); setSelectedAnswer(""); setSubmitted(false); setQuizAnswers({}); setQuizFinished(false); }} style={{ border: "none", background: "#2563eb", color: "white", padding: "12px 20px", borderRadius: "8px", cursor: "pointer" }}>Retry Quiz</button>
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
            cursor: "pointer",
            marginBottom: "25px",
          }}
        >
          ← Back to Cybersecurity Topics
        </button>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
            border: "1px solid #dbeafe",
          }}
        >
          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "8px",
            }}
          >
            🐧 Linux & Command Line
          </h1>

          <p style={{ color: "#475569" }}>
            Learn Linux fundamentals and command-line skills used in
            cybersecurity.
          </p>

          <div style={{ marginTop: "25px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <span>Topic Progress</span>
              <span>
                Lesson {currentLesson + 1} of {subtopics.length}
              </span>
            </div>

            <div
              style={{
                height: "10px",
                background: "#dbeafe",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progressPercentage}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          {subtopics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => {
                setCurrentLesson(index);
                setCurrentQuestion(0);
                setSelectedAnswer("");
                setSubmitted(false);
              }}
              style={{
                padding: "16px",
                borderRadius: "12px",
                border:
                  currentLesson === index
                    ? "2px solid #2563eb"
                    : "1px solid #bfdbfe",
                background:
                  currentLesson === index ? "#eff6ff" : "white",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: "22px" }}>
                {topic.icon}
              </div>

              <strong
                style={{
                  display: "block",
                  marginTop: "8px",
                  color: "#1e3a8a",
                }}
              >
                {index + 1}. {topic.title}
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "6px",
                  fontSize: "13px",
                  color: completedLessons.includes(topic.id)
                    ? "#16a34a"
                    : "#64748b",
                }}
              >
                {completedLessons.includes(topic.id)
                  ? "✓ Completed"
                  : "Not completed"}
              </span>
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: "30px",
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #dbeafe",
            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                color: "#1e40af",
                margin: 0,
              }}
            >
              {lesson.icon} {currentLesson + 1}. {lesson.title}
            </h2>

            {lessonCompleted && (
              <span
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "7px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                ✓ Lesson Completed
              </span>
            )}
          </div>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.7",
              marginTop: "18px",
            }}
          >
            {lesson.lesson.overview}
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e2e8f0",
              margin: "25px 0",
            }}
          />

          {lesson.lesson.sections.map((section) => (
            <div
              key={section.heading}
              style={{
                marginBottom: "25px",
              }}
            >
              <h3 style={{ color: "#1e3a8a" }}>
                {section.heading}
              </h3>

              <ul
                style={{
                  lineHeight: "1.8",
                  color: "#334155",
                }}
              >
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
            }}
          >
            <h3 style={{ color: "#9a3412" }}>
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                color: "#7c2d12",
                lineHeight: "1.8",
              }}
            >
              {lesson.lesson.mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: "35px",
              padding: "25px",
              background: "#f8fafc",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3 style={{ color: "#1e3a8a" }}>
              📝 Lesson Quiz
            </h3>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question {currentQuestion + 1} of {quiz.length}
            </p>

            <h4
              style={{
                fontSize: "17px",
                color: "#0f172a",
                lineHeight: "1.6",
              }}
            >
              {question.question}
            </h4>

            <div style={{ marginTop: "18px" }}>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    if (!submitted) {
                      setSelectedAnswer(option);
                    }
                  }}
                  style={getOptionStyle(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {submitted &&
              selectedAnswer !== question.answer && (
                <div
                  style={{
                    marginTop: "15px",
                    padding: "12px 15px",
                    background: "#fef2f2",
                    borderRadius: "8px",
                    color: "#991b1b",
                    fontWeight: "600",
                  }}
                >
                  Correct answer: {question.answer}
                </div>
              )}

            {submitted && selectedAnswer === question.answer && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "12px 15px",
                  background: "#f0fdf4",
                  borderRadius: "8px",
                  color: "#166534",
                  fontWeight: "600",
                }}
              >
                ✓ Correct answer!
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #bfdbfe",
                  background: "white",
                  cursor:
                    currentQuestion === 0
                      ? "not-allowed"
                      : "pointer",
                  opacity: currentQuestion === 0 ? 0.5 : 1,
                }}
              >
                ← Previous Question
              </button>

              {!submitted ? (
                <button
                  onClick={submitAnswer}
                  disabled={!selectedAnswer}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    cursor: selectedAnswer
                      ? "pointer"
                      : "not-allowed",
                    opacity: selectedAnswer ? 1 : 0.5,
                  }}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {isLastQuestion
                    ? "Finish Quiz"
                    : "Next Question →"}
                </button>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={previousLesson}
              disabled={currentLesson === 0}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background: "white",
                cursor:
                  currentLesson === 0
                    ? "not-allowed"
                    : "pointer",
                opacity: currentLesson === 0 ? 0.5 : 1,
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={nextLesson}
              style={{
                padding: "12px 22px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {isLastLesson
                ? "✓ Complete Topic"
                : "Next Lesson →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinuxCommandLine;