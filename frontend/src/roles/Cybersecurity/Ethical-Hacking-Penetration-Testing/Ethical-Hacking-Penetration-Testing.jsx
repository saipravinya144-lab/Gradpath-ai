import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// ETHICAL HACKING & PENETRATION TESTING LESSONS
// =====================================================

const subtopics = [
  {
    id: "ethical-hacking-fundamentals",
    title: "Ethical Hacking Fundamentals",
    icon: "🕵️",
    lesson: {
      overview:
        "Learn what ethical hacking is, how authorized security testing works, and the principles that distinguish defensive testing from unauthorized activity.",
      sections: [
        {
          heading: "What is Ethical Hacking?",
          points: [
            "Ethical hacking is authorized security testing performed to identify weaknesses and improve security.",
            "Ethical hackers work within a clearly defined scope and follow the rules agreed with the system owner.",
            "The purpose is to discover and document weaknesses before they can cause harm.",
          ],
        },
        {
          heading: "Authorization and Scope",
          points: [
            "Security testing should only be performed against systems for which explicit permission has been obtained.",
            "The scope defines which systems, applications, networks, and activities are included.",
            "Testing rules should specify limitations, timing, communication procedures, and handling of sensitive information.",
          ],
        },
        {
          heading: "Ethical Principles",
          points: [
            "Protect confidentiality and integrity of information discovered during testing.",
            "Avoid unnecessary disruption to production systems.",
            "Report findings responsibly and provide useful remediation guidance.",
          ],
        },
      ],
      mistakes: [
        "Testing systems without authorization.",
        "Going outside the agreed assessment scope.",
        "Treating sensitive information discovered during testing carelessly.",
      ],
      quiz: [
        {
          question: "What is the main purpose of ethical hacking?",
          options: [
            "Identify security weaknesses with authorization",
            "Damage systems",
            "Steal confidential information",
            "Disable security controls permanently",
          ],
          answer: "Identify security weaknesses with authorization",
        },
        {
          question: "What defines which systems may be tested?",
          options: [
            "The agreed assessment scope",
            "The attacker's preference",
            "The operating system wallpaper",
            "The number of employees",
          ],
          answer: "The agreed assessment scope",
        },
        {
          question:
            "Which principle is important during an ethical security assessment?",
          options: [
            "Minimize unnecessary disruption",
            "Delete discovered data",
            "Ignore authorization",
            "Publish confidential findings publicly",
          ],
          answer: "Minimize unnecessary disruption",
        },
      ],
    },
  },

  {
    id: "penetration-testing-methodology",
    title: "Penetration Testing Methodology",
    icon: "🧭",
    lesson: {
      overview:
        "Understand the structured phases commonly used during an authorized penetration test.",
      sections: [
        {
          heading: "Planning",
          points: [
            "The engagement begins by defining objectives, scope, authorization, and rules of engagement.",
            "Testing teams should understand important systems and business constraints before testing begins.",
            "Communication and escalation procedures should be agreed in advance.",
          ],
        },
        {
          heading: "Testing Lifecycle",
          points: [
            "A typical engagement may include reconnaissance, scanning, vulnerability analysis, controlled validation, and reporting.",
            "The exact methodology can vary according to the type of assessment.",
            "Testing should remain within the agreed scope throughout the engagement.",
          ],
        },
        {
          heading: "Reporting",
          points: [
            "Findings should be documented with evidence and business impact.",
            "Recommendations should help system owners reduce identified risks.",
            "Retesting can be performed later to verify remediation.",
          ],
        },
      ],
      mistakes: [
        "Beginning testing without clearly defined rules.",
        "Ignoring the agreed scope during the assessment.",
        "Focusing only on technical findings without explaining business impact.",
      ],
      quiz: [
        {
          question:
            "What should be established before a penetration test begins?",
          options: [
            "Objectives, scope, authorization, and rules of engagement",
            "A public announcement",
            "A new operating system",
            "An unrelated application",
          ],
          answer:
            "Objectives, scope, authorization, and rules of engagement",
        },
        {
          question:
            "Which activity commonly occurs toward the end of an assessment?",
          options: [
            "Reporting findings and recommendations",
            "Deleting the client's systems",
            "Publishing credentials",
            "Removing all logs",
          ],
          answer: "Reporting findings and recommendations",
        },
        {
          question: "What can retesting verify?",
          options: [
            "Whether reported vulnerabilities were successfully addressed",
            "Whether users changed their names",
            "Whether a website has more colors",
            "Whether the organization has more employees",
          ],
          answer:
            "Whether reported vulnerabilities were successfully addressed",
        },
      ],
    },
  },

  {
    id: "reconnaissance-information-gathering",
    title: "Reconnaissance & Information Gathering",
    icon: "🔎",
    lesson: {
      overview:
        "Learn how authorized testers collect information about an assessment target to understand its attack surface.",
      sections: [
        {
          heading: "Reconnaissance",
          points: [
            "Reconnaissance is the process of gathering information about an authorized target.",
            "Information can include domains, applications, technologies, organizational assets, and publicly available information.",
            "The goal is to understand the environment before deeper security testing.",
          ],
        },
        {
          heading: "Passive and Active Reconnaissance",
          points: [
            "Passive reconnaissance collects information without directly interacting with the target infrastructure in a significant way.",
            "Active reconnaissance involves direct interaction with authorized systems.",
            "The choice depends on the engagement scope and rules.",
          ],
        },
        {
          heading: "Attack Surface",
          points: [
            "The attack surface consists of the externally or internally exposed points through which a system can be accessed or affected.",
            "Reducing unnecessary exposed services can reduce attack surface.",
            "Asset discovery and reconnaissance can reveal forgotten or undocumented resources.",
          ],
        },
      ],
      mistakes: [
        "Collecting information about targets outside the authorized scope.",
        "Assuming public information is always accurate.",
        "Ignoring forgotten or undocumented assets.",
      ],
      quiz: [
        {
          question: "What is reconnaissance?",
          options: [
            "Gathering information about an authorized target",
            "Deleting system files",
            "Encrypting every database",
            "Installing an operating system",
          ],
          answer: "Gathering information about an authorized target",
        },
        {
          question:
            "What is passive reconnaissance?",
          options: [
            "Collecting information with limited direct interaction with the target",
            "Disabling a server",
            "Changing user passwords",
            "Deleting application logs",
          ],
          answer:
            "Collecting information with limited direct interaction with the target",
        },
        {
          question: "What does attack surface describe?",
          options: [
            "Exposed points through which systems can potentially be accessed or affected",
            "The physical size of a server",
            "The number of employees in an organization",
            "The color of a security dashboard",
          ],
          answer:
            "Exposed points through which systems can potentially be accessed or affected",
        },
      ],
    },
  },

  {
    id: "scanning-enumeration",
    title: "Scanning & Enumeration",
    icon: "📡",
    lesson: {
      overview:
        "Learn how authorized testers identify reachable systems, services, and other technical information during security assessments.",
      sections: [
        {
          heading: "Scanning",
          points: [
            "Scanning helps identify reachable hosts, services, and potential points of exposure.",
            "The intensity of scanning should match the engagement rules and operational requirements.",
            "Results should be interpreted rather than blindly trusted.",
          ],
        },
        {
          heading: "Enumeration",
          points: [
            "Enumeration attempts to gather more detailed information about discovered services and systems.",
            "This can help testers understand what technologies are exposed.",
            "Enumeration should remain limited to systems covered by authorization.",
          ],
        },
        {
          heading: "Safe Assessment",
          points: [
            "Security testing should avoid unnecessary service disruption.",
            "Production environments may require carefully controlled testing windows.",
            "Unexpected effects should be communicated according to the engagement plan.",
          ],
        },
      ],
      mistakes: [
        "Scanning systems without permission.",
        "Using unnecessarily aggressive testing against sensitive production systems.",
        "Treating scanner results as guaranteed facts.",
      ],
      quiz: [
        {
          question: "What can scanning help identify?",
          options: [
            "Reachable hosts and exposed services",
            "Employee salaries",
            "Application source-code ownership",
            "Personal preferences",
          ],
          answer: "Reachable hosts and exposed services",
        },
        {
          question: "What is enumeration?",
          options: [
            "Gathering more detailed information about discovered systems or services",
            "Deleting discovered services",
            "Encrypting a hard drive",
            "Changing a user's profile picture",
          ],
          answer:
            "Gathering more detailed information about discovered systems or services",
        },
        {
          question:
            "Why should scanning intensity be controlled?",
          options: [
            "Aggressive testing can unnecessarily affect systems",
            "Scanning never produces information",
            "Authorization becomes unnecessary",
            "It prevents all vulnerabilities",
          ],
          answer:
            "Aggressive testing can unnecessarily affect systems",
        },
      ],
    },
  },

  {
    id: "vulnerability-analysis",
    title: "Vulnerability Analysis",
    icon: "🧪",
    lesson: {
      overview:
        "Learn how penetration testers analyze discovered weaknesses and determine whether findings are relevant and significant.",
      sections: [
        {
          heading: "Finding Vulnerabilities",
          points: [
            "Vulnerability analysis examines systems and applications for security weaknesses.",
            "Findings can come from automated scanners, configuration reviews, code analysis, or manual testing.",
            "Each finding should be validated carefully.",
          ],
        },
        {
          heading: "False Positives and False Negatives",
          points: [
            "A false positive occurs when a tool reports a weakness that is not actually present.",
            "A false negative occurs when an existing weakness is not detected.",
            "Manual review can help improve confidence in assessment results.",
          ],
        },
        {
          heading: "Impact Analysis",
          points: [
            "Testers should consider confidentiality, integrity, and availability impacts.",
            "Business context can influence the significance of a vulnerability.",
            "Findings should be documented with enough evidence to support remediation.",
          ],
        },
      ],
      mistakes: [
        "Accepting automated findings without validation.",
        "Ignoring business impact.",
        "Assuming an automated scan can identify every vulnerability.",
      ],
      quiz: [
        {
          question: "What is vulnerability analysis?",
          options: [
            "Examining systems for security weaknesses and their potential impact",
            "Designing application interfaces",
            "Managing employee attendance",
            "Creating backup schedules only",
          ],
          answer:
            "Examining systems for security weaknesses and their potential impact",
        },
        {
          question: "What is a false negative?",
          options: [
            "A real vulnerability that was not detected",
            "A vulnerability that was correctly detected",
            "A successful backup",
            "A correctly configured firewall",
          ],
          answer:
            "A real vulnerability that was not detected",
        },
        {
          question:
            "Which security properties are commonly considered when evaluating impact?",
          options: [
            "Confidentiality, integrity, and availability",
            "Speed, size, and color",
            "Username, password, and email",
            "Width, height, and resolution",
          ],
          answer:
            "Confidentiality, integrity, and availability",
        },
      ],
    },
  },

  {
    id: "exploitation-concepts",
    title: "Exploitation Concepts",
    icon: "⚙️",
    lesson: {
      overview:
        "Understand the concept of controlled exploitation and why ethical testers carefully validate vulnerabilities without causing unnecessary harm.",
      sections: [
        {
          heading: "What is Exploitation?",
          points: [
            "Exploitation is the controlled use of a vulnerability to demonstrate its security impact.",
            "During an authorized assessment, exploitation should be limited to what is necessary to validate the finding.",
            "The objective is evidence and risk understanding, not damage.",
          ],
        },
        {
          heading: "Proof of Concept",
          points: [
            "A proof of concept demonstrates that a reported weakness has meaningful security impact.",
            "A minimal proof of concept is generally preferable when it can establish the finding without unnecessary risk.",
            "Sensitive information discovered during testing should be protected.",
          ],
        },
        {
          heading: "Safety Controls",
          points: [
            "Testing should follow the agreed rules of engagement.",
            "High-risk actions may require explicit approval before execution.",
            "Production systems should be treated carefully to avoid outages or data loss.",
          ],
        },
      ],
      mistakes: [
        "Performing destructive actions when a safer validation is available.",
        "Testing beyond the agreed authorization.",
        "Collecting or retaining unnecessary sensitive information.",
      ],
      quiz: [
        {
          question: "What is exploitation in penetration testing?",
          options: [
            "Controlled validation of a vulnerability's security impact",
            "Random destruction of systems",
            "Deleting security logs",
            "Publishing confidential data",
          ],
          answer:
            "Controlled validation of a vulnerability's security impact",
        },
        {
          question: "What is a proof of concept?",
          options: [
            "A demonstration that a security weakness has meaningful impact",
            "A backup of the entire organization",
            "A list of employees",
            "A software license",
          ],
          answer:
            "A demonstration that a security weakness has meaningful impact",
        },
        {
          question:
            "What should guide exploitation during an authorized assessment?",
          options: [
            "The agreed rules of engagement and safety requirements",
            "The tester's curiosity",
            "Random targets",
            "Public social-media posts",
          ],
          answer:
            "The agreed rules of engagement and safety requirements",
        },
      ],
    },
  },

  {
    id: "post-exploitation-impact",
    title: "Post-Exploitation & Impact Assessment",
    icon: "📈",
    lesson: {
      overview:
        "Learn how authorized testers assess the potential consequences of a validated weakness while minimizing unnecessary impact.",
      sections: [
        {
          heading: "Post-Exploitation Concept",
          points: [
            "Post-exploitation assessment examines what additional impact could result after a vulnerability has been validated.",
            "The assessment should remain within the authorized scope.",
            "Testers should gather only the evidence necessary to demonstrate impact.",
          ],
        },
        {
          heading: "Impact Assessment",
          points: [
            "Potential impact may involve unauthorized access to information, modification of resources, or disruption of services.",
            "The severity of impact depends on the systems and information involved.",
            "Business consequences should be considered alongside technical consequences.",
          ],
        },
        {
          heading: "Minimizing Risk",
          points: [
            "Avoid unnecessary persistence or destructive actions.",
            "Do not access unrelated personal or confidential information.",
            "Clean up test artifacts according to the engagement rules.",
          ],
        },
      ],
      mistakes: [
        "Accessing more information than necessary to prove impact.",
        "Leaving test artifacts behind.",
        "Continuing assessment after reaching the authorized objective.",
      ],
      quiz: [
        {
          question:
            "What is the purpose of post-exploitation assessment?",
          options: [
            "Understand the potential impact of a validated vulnerability",
            "Destroy the target environment",
            "Publish confidential information",
            "Disable all security controls",
          ],
          answer:
            "Understand the potential impact of a validated vulnerability",
        },
        {
          question:
            "What should testers collect during impact assessment?",
          options: [
            "Only the evidence necessary to demonstrate the impact",
            "Every file they can access",
            "All employee information",
            "All private communications",
          ],
          answer:
            "Only the evidence necessary to demonstrate the impact",
        },
        {
          question:
            "Why should unnecessary persistence be avoided?",
          options: [
            "It can create additional security and operational risk",
            "It makes reports shorter",
            "It prevents authorization",
            "It improves password strength",
          ],
          answer:
            "It can create additional security and operational risk",
        },
      ],
    },
  },

  {
    id: "web-network-penetration-testing",
    title: "Web & Network Penetration Testing",
    icon: "🌐",
    lesson: {
      overview:
        "Learn the major areas considered when assessing web applications and network environments in an authorized penetration test.",
      sections: [
        {
          heading: "Web Application Testing",
          points: [
            "Web testing examines areas such as authentication, authorization, input handling, session management, and security configuration.",
            "Testing should consider both application logic and technical implementation.",
            "OWASP resources are commonly used as references for web application security testing.",
          ],
        },
        {
          heading: "Network Testing",
          points: [
            "Network assessments examine exposed services, segmentation, configurations, and security controls.",
            "Testing can help identify unnecessary exposure and weaknesses in network architecture.",
            "Network testing should account for systems that are sensitive to scanning or disruption.",
          ],
        },
        {
          heading: "Comparing Assessments",
          points: [
            "Web application testing focuses heavily on application behavior and data handling.",
            "Network testing focuses more heavily on hosts, services, segmentation, and infrastructure.",
            "Both can reveal weaknesses that affect organizational security.",
          ],
        },
      ],
      mistakes: [
        "Testing production systems without considering operational risk.",
        "Focusing only on technical vulnerabilities while ignoring application logic.",
        "Assuming a secure network automatically means the web application is secure.",
      ],
      quiz: [
        {
          question:
            "Which area is important in web application security testing?",
          options: [
            "Authentication and authorization",
            "Monitor brightness",
            "Keyboard layout",
            "Printer color",
          ],
          answer: "Authentication and authorization",
        },
        {
          question:
            "What can network penetration testing examine?",
          options: [
            "Exposed services and network security controls",
            "Employee hobbies",
            "Website font preferences",
            "Office furniture",
          ],
          answer:
            "Exposed services and network security controls",
        },
        {
          question:
            "Why should application logic be considered during web testing?",
          options: [
            "Security weaknesses can exist in how the application behaves, not only in its technical configuration",
            "Logic is unrelated to security",
            "Logic automatically encrypts databases",
            "Logic replaces authentication",
          ],
          answer:
            "Security weaknesses can exist in how the application behaves, not only in its technical configuration",
        },
      ],
    },
  },

  {
    id: "penetration-testing-reports",
    title: "Penetration Testing Reports & Remediation",
    icon: "📋",
    lesson: {
      overview:
        "Learn how penetration-testing findings are documented, communicated, and followed through to remediation.",
      sections: [
        {
          heading: "Report Structure",
          points: [
            "A penetration-testing report commonly contains an executive summary, methodology, findings, evidence, and recommendations.",
            "Technical findings should explain the affected asset, weakness, impact, and supporting evidence.",
            "Sensitive information should be handled securely.",
          ],
        },
        {
          heading: "Remediation Recommendations",
          points: [
            "Recommendations should be practical and aligned with the identified root cause.",
            "Fixes can involve patches, configuration changes, code changes, stronger access controls, or architectural improvements.",
            "Remediation priorities should consider severity and business context.",
          ],
        },
        {
          heading: "Retesting",
          points: [
            "Retesting checks whether previously reported weaknesses have been addressed.",
            "A finding should not be considered resolved solely because a ticket was closed.",
            "Security teams can use assessment results to improve long-term security practices.",
          ],
        },
      ],
      mistakes: [
        "Writing reports that lack evidence or business context.",
        "Providing recommendations that do not address the underlying cause.",
        "Failing to verify remediation.",
      ],
      quiz: [
        {
          question:
            "What should a technical penetration-testing finding explain?",
          options: [
            "Affected asset, weakness, impact, evidence, and recommendations",
            "Only the tester's name",
            "Only the company logo",
            "Only the date",
          ],
          answer:
            "Affected asset, weakness, impact, evidence, and recommendations",
        },
        {
          question: "What is the purpose of retesting?",
          options: [
            "Verify whether reported weaknesses have been addressed",
            "Create new user accounts",
            "Delete the original report",
            "Increase system complexity",
          ],
          answer:
            "Verify whether reported weaknesses have been addressed",
        },
        {
          question:
            "What should remediation recommendations address?",
          options: [
            "The underlying cause of the identified weakness",
            "Only the report's formatting",
            "Only the tester's computer",
            "The organization's logo",
          ],
          answer:
            "The underlying cause of the identified weakness",
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

function EthicalHackingPenetrationTesting({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-ethical-hacking-penetration-testing", subtopics);

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
            🕵️ Ethical Hacking & Penetration Testing
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn authorized security testing,
            penetration-testing methodology,
            reconnaissance, vulnerability analysis,
            controlled validation, impact assessment,
            and security reporting.
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

export default EthicalHackingPenetrationTesting;