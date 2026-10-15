import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// CYBERSECURITY TOOLS LESSONS
// =====================================================

const subtopics = [
  {
    id: "cybersecurity-tools-fundamentals",
    title: "Cybersecurity Tools Fundamentals",
    icon: "🛠️",
    lesson: {
      overview:
        "Learn the purpose of cybersecurity tools and how security professionals select and use them during authorized defensive activities.",
      sections: [
        {
          heading: "Why Security Tools Matter",
          points: [
            "Cybersecurity tools help professionals discover assets, analyze traffic, identify vulnerabilities, monitor systems, and investigate incidents.",
            "Tools automate repetitive tasks and provide information that can support security decisions.",
            "Tools do not replace human analysis and security expertise.",
          ],
        },
        {
          heading: "Tool Categories",
          points: [
            "Network analysis tools help inspect network communication.",
            "Vulnerability scanners identify potential security weaknesses.",
            "Web security tools assist with authorized application security testing.",
            "Monitoring and log-analysis tools help detect and investigate suspicious activity.",
          ],
        },
        {
          heading: "Responsible Tool Usage",
          points: [
            "Security tools should be used only against systems and environments where testing or monitoring is authorized.",
            "Tool output should be validated before making important security decisions.",
            "Sensitive information collected by security tools should be protected appropriately.",
          ],
        },
      ],
      mistakes: [
        "Assuming a tool's output is always accurate.",
        "Using security tools against systems without authorization.",
        "Collecting sensitive information unnecessarily.",
      ],
      quiz: [
        {
          question: "What is a major purpose of cybersecurity tools?",
          options: [
            "Supporting security analysis and defensive activities",
            "Automatically eliminating every cyberattack",
            "Replacing all security professionals",
            "Making all systems publicly accessible",
          ],
          answer:
            "Supporting security analysis and defensive activities",
        },
        {
          question: "Why should tool output be validated?",
          options: [
            "Automated results can be incomplete or inaccurate",
            "Tools never produce useful information",
            "Validation disables security controls",
            "Validation removes the need for monitoring",
          ],
          answer:
            "Automated results can be incomplete or inaccurate",
        },
        {
          question: "When should security tools be used?",
          options: [
            "Within an authorized security or monitoring scope",
            "Against any system connected to the internet",
            "Only against personal accounts",
            "Without considering ownership",
          ],
          answer:
            "Within an authorized security or monitoring scope",
        },
      ],
    },
  },

  {
    id: "network-analysis-tools",
    title: "Network Analysis Tools",
    icon: "🌐",
    lesson: {
      overview:
        "Learn how network analysis tools help security teams understand hosts, services, connections, and network behavior.",
      sections: [
        {
          heading: "Network Analysis",
          points: [
            "Network analysis examines communication between systems and the services operating within an environment.",
            "It can help identify unexpected connections and configuration issues.",
            "Security teams can use network information to understand an organization's attack surface.",
          ],
        },
        {
          heading: "Common Tool Functions",
          points: [
            "Host and service discovery tools can help identify authorized network assets.",
            "Port and service information can help administrators understand exposed services.",
            "Network monitoring tools can identify unusual communication patterns.",
          ],
        },
        {
          heading: "Defensive Use",
          points: [
            "Network analysis can support troubleshooting and incident investigation.",
            "Results should be interpreted in the context of normal network behavior.",
            "Testing should be carefully controlled in production environments.",
          ],
        },
      ],
      mistakes: [
        "Scanning networks without permission.",
        "Assuming every open service is automatically malicious.",
        "Ignoring normal network baselines.",
      ],
      quiz: [
        {
          question: "What can network analysis help security teams understand?",
          options: [
            "Hosts, services, and communication patterns",
            "Employee hobbies",
            "Application branding",
            "Monitor specifications",
          ],
          answer:
            "Hosts, services, and communication patterns",
        },
        {
          question: "Why are network baselines useful?",
          options: [
            "They help identify unusual behavior compared with normal activity",
            "They eliminate the need for security monitoring",
            "They automatically block every connection",
            "They replace authentication",
          ],
          answer:
            "They help identify unusual behavior compared with normal activity",
        },
        {
          question:
            "What should be considered before network scanning?",
          options: [
            "Authorization and operational impact",
            "Screen resolution",
            "Keyboard layout",
            "Application theme",
          ],
          answer:
            "Authorization and operational impact",
        },
      ],
    },
  },

  {
    id: "packet-capture-wireshark",
    title: "Packet Capture & Wireshark",
    icon: "📦",
    lesson: {
      overview:
        "Learn the fundamentals of packet capture and how Wireshark can help security professionals inspect network traffic.",
      sections: [
        {
          heading: "Packet Capture",
          points: [
            "Packet capture records network traffic for analysis.",
            "Captured traffic can help troubleshoot connectivity and investigate security events.",
            "The visibility available depends on network architecture, encryption, and capture location.",
          ],
        },
        {
          heading: "Wireshark",
          points: [
            "Wireshark is a network protocol analyzer used to inspect captured network traffic.",
            "It can display packet information organized by protocols and communication flows.",
            "Filters can help analysts focus on relevant traffic within an authorized capture.",
          ],
        },
        {
          heading: "Security Considerations",
          points: [
            "Captured network traffic may contain sensitive information.",
            "Captures should be stored and shared securely.",
            "Encrypted traffic may protect application contents even when packet metadata is visible.",
          ],
        },
      ],
      mistakes: [
        "Capturing traffic without appropriate authorization.",
        "Sharing packet captures without considering sensitive information.",
        "Assuming packet capture always reveals plaintext application data.",
      ],
      quiz: [
        {
          question: "What does packet capture do?",
          options: [
            "Records network traffic for analysis",
            "Deletes network traffic",
            "Creates user accounts",
            "Encrypts every file on a system",
          ],
          answer:
            "Records network traffic for analysis",
        },
        {
          question: "What is Wireshark?",
          options: [
            "A network protocol analyzer",
            "A password manager",
            "A database server",
            "A programming language",
          ],
          answer: "A network protocol analyzer",
        },
        {
          question:
            "Why should packet captures be protected?",
          options: [
            "They may contain sensitive network information",
            "They cannot be opened after capture",
            "They automatically delete passwords",
            "They contain only public information",
          ],
          answer:
            "They may contain sensitive network information",
        },
      ],
    },
  },

  {
    id: "vulnerability-scanning-tools",
    title: "Vulnerability Scanning Tools",
    icon: "🔎",
    lesson: {
      overview:
        "Learn how vulnerability-scanning tools identify potential weaknesses and why their findings require validation.",
      sections: [
        {
          heading: "Purpose",
          points: [
            "Vulnerability scanners compare systems, software, and configurations against known security issues.",
            "They can help security teams assess large environments efficiently.",
            "Scanners may identify outdated software, insecure configurations, and known vulnerabilities.",
          ],
        },
        {
          heading: "Scan Results",
          points: [
            "Results commonly include a vulnerability description, severity, affected asset, and remediation guidance.",
            "False positives can occur when a scanner incorrectly identifies a weakness.",
            "False negatives can occur when a scanner fails to detect an existing issue.",
          ],
        },
        {
          heading: "Using Results",
          points: [
            "Security professionals should validate important findings.",
            "Findings should be prioritized according to organizational risk.",
            "Remediation should be verified after changes are made.",
          ],
        },
      ],
      mistakes: [
        "Treating every scanner result as confirmed.",
        "Ignoring false negatives.",
        "Fixing vulnerabilities without considering asset importance and operational requirements.",
      ],
      quiz: [
        {
          question:
            "What can vulnerability scanners identify?",
          options: [
            "Potential security weaknesses in systems and configurations",
            "Employee attendance",
            "Website colors",
            "Physical office dimensions",
          ],
          answer:
            "Potential security weaknesses in systems and configurations",
        },
        {
          question: "What is a false positive?",
          options: [
            "A reported vulnerability that is not actually present",
            "A vulnerability that was missed",
            "A successful software update",
            "A normal network connection",
          ],
          answer:
            "A reported vulnerability that is not actually present",
        },
        {
          question:
            "What should happen after important vulnerabilities are fixed?",
          options: [
            "Remediation should be verified",
            "All logs should be deleted",
            "Security monitoring should be disabled",
            "The asset should automatically be removed",
          ],
          answer: "Remediation should be verified",
        },
      ],
    },
  },

  {
    id: "web-security-testing-tools",
    title: "Web Security Testing Tools",
    icon: "🌍",
    lesson: {
      overview:
        "Learn how web security tools support authorized testing of application behavior, requests, responses, authentication, and input handling.",
      sections: [
        {
          heading: "Web Security Testing",
          points: [
            "Web security tools can help professionals inspect HTTP requests and responses.",
            "They can assist in analyzing authentication, sessions, input validation, and access control.",
            "Testing should always be performed against authorized applications.",
          ],
        },
        {
          heading: "Intercepting Proxies",
          points: [
            "An intercepting proxy can allow authorized testers to inspect and modify requests within a controlled test environment.",
            "These tools are useful for understanding how web applications process requests.",
            "Care should be taken when testing production applications.",
          ],
        },
        {
          heading: "Security Testing",
          points: [
            "Tools can help identify common application weaknesses.",
            "Automated findings should be reviewed manually.",
            "Testing should avoid unnecessary modification or destruction of application data.",
          ],
        },
      ],
      mistakes: [
        "Testing websites without authorization.",
        "Modifying production data during testing.",
        "Assuming automated web-security findings are always correct.",
      ],
      quiz: [
        {
          question:
            "What can an intercepting proxy help testers inspect?",
          options: [
            "HTTP requests and responses",
            "Computer hardware temperatures only",
            "Employee attendance",
            "Database backups only",
          ],
          answer: "HTTP requests and responses",
        },
        {
          question:
            "What is an important requirement for web security testing?",
          options: [
            "The application must be within the authorized testing scope",
            "The application must be publicly famous",
            "The tester must own the internet",
            "Authorization is unnecessary for public websites",
          ],
          answer:
            "The application must be within the authorized testing scope",
        },
        {
          question:
            "Why should automated web findings be reviewed?",
          options: [
            "Tools can produce false positives or incomplete results",
            "Tools cannot inspect HTTP traffic",
            "Reviewing findings disables security",
            "Automated testing always damages applications",
          ],
          answer:
            "Tools can produce false positives or incomplete results",
        },
      ],
    },
  },

  {
    id: "password-authentication-testing-tools",
    title: "Password & Authentication Testing Tools",
    icon: "🔐",
    lesson: {
      overview:
        "Learn how security professionals evaluate authentication controls and password security in authorized environments.",
      sections: [
        {
          heading: "Authentication Testing",
          points: [
            "Authentication testing evaluates whether identity-verification mechanisms behave securely.",
            "Security teams may assess password policies, MFA enforcement, session handling, and account protections.",
            "Testing should use approved test accounts and controlled environments whenever possible.",
          ],
        },
        {
          heading: "Password Security",
          points: [
            "Organizations should protect passwords using appropriate password-hashing mechanisms.",
            "Password auditing can help identify weak or compromised credentials in authorized environments.",
            "Rate limiting and account protections can reduce repeated authentication attempts.",
          ],
        },
        {
          heading: "Responsible Testing",
          points: [
            "Authentication tests should be carefully controlled to avoid account lockouts or service disruption.",
            "Real user credentials should not be exposed unnecessarily.",
            "Findings should be documented and communicated securely.",
          ],
        },
      ],
      mistakes: [
        "Testing real user accounts unnecessarily.",
        "Causing account lockouts through uncontrolled testing.",
        "Storing recovered credential information insecurely.",
      ],
      quiz: [
        {
          question:
            "What can authentication testing evaluate?",
          options: [
            "Password policies, MFA, sessions, and account protections",
            "Monitor brightness",
            "Website colors",
            "Printer speed",
          ],
          answer:
            "Password policies, MFA, sessions, and account protections",
        },
        {
          question:
            "What should be preferred when testing authentication controls?",
          options: [
            "Approved test accounts and controlled environments",
            "Random public accounts",
            "Unrelated third-party accounts",
            "Accounts belonging to strangers",
          ],
          answer:
            "Approved test accounts and controlled environments",
        },
        {
          question:
            "Why should authentication testing be carefully controlled?",
          options: [
            "It can otherwise cause lockouts or service disruption",
            "Authentication cannot be tested",
            "Testing automatically deletes databases",
            "Testing removes all passwords",
          ],
          answer:
            "It can otherwise cause lockouts or service disruption",
        },
      ],
    },
  },

  {
    id: "security-monitoring-log-analysis",
    title: "Security Monitoring & Log Analysis Tools",
    icon: "📊",
    lesson: {
      overview:
        "Learn how monitoring and log-analysis tools help security teams detect, investigate, and respond to suspicious activity.",
      sections: [
        {
          heading: "Security Logs",
          points: [
            "Logs record events generated by systems, applications, networks, and security devices.",
            "Useful logs can provide evidence during security investigations.",
            "Logs should have appropriate retention, access controls, and protection against unauthorized modification.",
          ],
        },
        {
          heading: "SIEM",
          points: [
            "A Security Information and Event Management system can collect and correlate security events from multiple sources.",
            "Correlation can help analysts identify patterns that may be difficult to see in individual logs.",
            "Alerts should be investigated according to organizational procedures.",
          ],
        },
        {
          heading: "Log Analysis",
          points: [
            "Analysts compare events with known normal behavior and security expectations.",
            "Time synchronization helps correlate events across systems.",
            "Monitoring should balance useful detection with manageable alert volume.",
          ],
        },
      ],
      mistakes: [
        "Collecting logs without protecting them.",
        "Ignoring time synchronization between systems.",
        "Treating every alert as equally important.",
      ],
      quiz: [
        {
          question: "What is the purpose of security logs?",
          options: [
            "Record events that can support monitoring and investigation",
            "Automatically prevent every attack",
            "Replace authentication",
            "Store application images",
          ],
          answer:
            "Record events that can support monitoring and investigation",
        },
        {
          question: "What does SIEM commonly do?",
          options: [
            "Collect and correlate security events from multiple sources",
            "Design websites",
            "Replace operating systems",
            "Create social-media accounts",
          ],
          answer:
            "Collect and correlate security events from multiple sources",
        },
        {
          question:
            "Why is time synchronization useful for security analysis?",
          options: [
            "It helps analysts correlate events across systems",
            "It increases password length",
            "It disables network traffic",
            "It removes the need for logs",
          ],
          answer:
            "It helps analysts correlate events across systems",
        },
      ],
    },
  },

  {
    id: "using-tools-responsibly",
    title: "Choosing & Using Security Tools Responsibly",
    icon: "✅",
    lesson: {
      overview:
        "Learn how to select appropriate cybersecurity tools and use them safely, legally, and effectively in professional environments.",
      sections: [
        {
          heading: "Choosing a Tool",
          points: [
            "Tool selection should be based on the security objective, environment, required visibility, and available expertise.",
            "Organizations should consider maintenance, documentation, compatibility, and data-handling requirements.",
            "A more complex tool is not necessarily better for every task.",
          ],
        },
        {
          heading: "Operational Safety",
          points: [
            "Testing tools should be configured according to the assessment scope and operational constraints.",
            "Backups and recovery procedures are important when security testing may affect systems.",
            "Security teams should monitor for unexpected effects during testing.",
          ],
        },
        {
          heading: "Professional Practice",
          points: [
            "Document tool usage and significant findings.",
            "Protect credentials, logs, packet captures, and other sensitive assessment data.",
            "Use tools to improve security rather than to cause unauthorized harm.",
          ],
        },
      ],
      mistakes: [
        "Choosing tools based only on popularity.",
        "Ignoring operational risks before testing.",
        "Failing to protect information collected during security assessments.",
      ],
      quiz: [
        {
          question:
            "What should influence cybersecurity tool selection?",
          options: [
            "Security objective, environment, requirements, and available expertise",
            "Popularity alone",
            "Logo design",
            "Number of social-media followers",
          ],
          answer:
            "Security objective, environment, requirements, and available expertise",
        },
        {
          question:
            "Why are backups and recovery procedures important?",
          options: [
            "Testing can sometimes have unexpected operational effects",
            "Backups eliminate vulnerabilities",
            "Recovery replaces authentication",
            "Testing never affects systems",
          ],
          answer:
            "Testing can sometimes have unexpected operational effects",
        },
        {
          question:
            "What should happen to sensitive assessment data?",
          options: [
            "It should be protected appropriately",
            "It should always be published",
            "It should be shared publicly",
            "It should be stored without access controls",
          ],
          answer:
            "It should be protected appropriately",
        },
      ],
    },
  },
];

// =====================================================
// SHUFFLE FUNCTION
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
// COMPONENT
// =====================================================

function CybersecurityTools({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-cybersecurity-tools", subtopics);

  // =====================================================
  // STABLE QUIZ SHUFFLE
  // =====================================================

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map(
        (question) => shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const lesson = subtopics[currentLesson];
  const quiz = lesson.lesson.quiz;
  const question = quiz[currentQuestion];

  const options =
    shuffledQuizOptions[lesson.id][currentQuestion];

  const isLastQuestion =
    currentQuestion === quiz.length - 1;

  const isLastLesson =
    currentLesson === subtopics.length - 1;

  const lessonCompleted =
    completedLessons.includes(lesson.id);

  // =====================================================
  // SUBMIT ANSWER
  // =====================================================

  const submitAnswer = () => {
    if (!selectedAnswer || submitted) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [currentQuestion]: selectedAnswer,
    }));

    setSubmitted(true);
  };

  // =====================================================
  // NEXT QUESTION
  // =====================================================

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

  // =====================================================
  // PREVIOUS QUESTION
  // =====================================================

  const previousQuestion = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  // =====================================================
  // NEXT LESSON
  // =====================================================

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

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson === 0) return;

    setCurrentLesson((prev) => prev - 1);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  // =====================================================
  // SELECT LESSON
  // =====================================================

  const selectLesson = (index) => {
    setQuizFinished(false);
    setQuizAnswers({});
    setCurrentLesson(index);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  // =====================================================
  // OPTION STYLE
  // =====================================================

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

    if (
      option === selectedAnswer &&
      option !== question.answer
    ) {
      return {
        ...baseStyle,
        background: "#fee2e2",
        border: "2px solid #dc2626",
        color: "#991b1b",
      };
    }

    return {
      ...baseStyle,
      opacity: 0.7,
    };
  };

  // =====================================================
  // PROGRESS
  // =====================================================

  const lessonProgress =
    ((currentLesson + 1) / subtopics.length) * 100;

  // =====================================================
  // UI
  // =====================================================

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
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* BACK BUTTON */}

        <button
          onClick={goBack}
          style={{
            border: "none",
            background: "#2563eb",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          ← Back to Cybersecurity Topics
        </button>

        {/* HEADER */}

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
            marginBottom: "25px",
          }}
        >
          <h1
            style={{
              margin: "0 0 8px",
              color: "#1e3a8a",
              fontSize: "32px",
            }}
          >
            🛠️ Cybersecurity Tools
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn network analysis, packet capture,
            vulnerability scanning, web security testing,
            authentication testing, security monitoring,
            and responsible tool usage.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#334155",
            }}
          >
            <span>Topic Progress</span>

            <span>
              Lesson {currentLesson + 1} of{" "}
              {subtopics.length}
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
                width: `${lessonProgress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s",
              }}
            />
          </div>
        </div>

        {/* LESSON CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          {subtopics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => selectLesson(index)}
              style={{
                padding: "16px",
                borderRadius: "12px",
                border:
                  currentLesson === index
                    ? "2px solid #2563eb"
                    : "1px solid #bfdbfe",
                background:
                  currentLesson === index
                    ? "#eff6ff"
                    : "white",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "23px",
                  marginBottom: "7px",
                }}
              >
                {topic.icon}
              </div>

              <strong
                style={{
                  display: "block",
                  color: "#1e3a8a",
                  lineHeight: "1.4",
                }}
              >
                {index + 1}. {topic.title}
              </strong>

              <span
                style={{
                  display: "block",
                  marginTop: "7px",
                  fontSize: "13px",
                  color: completedLessons.includes(
                    topic.id
                  )
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

        {/* LESSON CONTENT */}

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
          }}
        >
          {/* LESSON TITLE */}

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
                margin: 0,
                color: "#1e40af",
              }}
            >
              {lesson.icon} {currentLesson + 1}.{" "}
              {lesson.title}
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

          {/* OVERVIEW */}

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

          {/* LESSON SECTIONS */}

          {lesson.lesson.sections.map((section) => (
            <div
              key={section.heading}
              style={{
                marginBottom: "25px",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                }}
              >
                {section.heading}
              </h3>

              <ul
                style={{
                  color: "#334155",
                  lineHeight: "1.8",
                }}
              >
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* COMMON MISTAKES */}

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
            }}
          >
            <h3
              style={{
                color: "#9a3412",
                marginTop: 0,
              }}
            >
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

          {/* QUIZ */}

          <div
            style={{
              marginTop: "35px",
              padding: "25px",
              background: "#f8fafc",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                color: "#1e3a8a",
                marginTop: 0,
              }}
            >
              📝 Lesson Quiz
            </h3>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Question {currentQuestion + 1} of{" "}
              {quiz.length}
            </p>

            <h4
              style={{
                color: "#0f172a",
                fontSize: "17px",
                lineHeight: "1.6",
              }}
            >
              {question.question}
            </h4>

            {/* OPTIONS */}

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

            {/* FEEDBACK */}

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
                  Correct answer:{" "}
                  {question.answer}
                </div>
              )}

            {submitted &&
              selectedAnswer === question.answer && (
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

            {/* QUIZ NAVIGATION */}

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
                  opacity:
                    currentQuestion === 0 ? 0.5 : 1,
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

          {/* LESSON NAVIGATION */}

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
                opacity:
                  currentLesson === 0 ? 0.5 : 1,
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

export default CybersecurityTools;