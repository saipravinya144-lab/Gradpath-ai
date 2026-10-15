import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "introduction-cybersecurity",
    title: "Introduction to Cybersecurity",
    lesson: {
      overview:
        "Cybersecurity is the practice of protecting computers, networks, applications, devices, and data from unauthorized access, misuse, disruption, or destruction.",
      sections: [
        {
          heading: "What is Cybersecurity?",
          content:
            "Cybersecurity combines technologies, processes, policies, and human practices to protect digital systems and information. It applies to individuals, organizations, governments, and businesses.",
        },
        {
          heading: "Why Cybersecurity Matters",
          content:
            "Modern organizations depend heavily on digital systems. A security incident can affect confidential information, system availability, financial operations, and customer trust.",
        },
        {
          heading: "Common Security Goals",
          content:
            "Security efforts generally aim to protect information from unauthorized disclosure, unauthorized modification, and disruption of access.",
        },
        {
          heading: "Cybersecurity Areas",
          content:
            "Cybersecurity includes areas such as network security, application security, cloud security, identity and access management, incident response, digital forensics, and security operations.",
        },
      ],
      mistakes: [
        "Thinking cybersecurity is only about installing antivirus software.",
        "Ignoring people and processes while focusing only on technology.",
        "Assuming only large organizations are targets.",
      ],
      quiz: [
        {
          question: "What is the primary purpose of cybersecurity?",
          options: [
            "Protect digital systems and information",
            "Increase computer screen resolution",
            "Replace all computer hardware",
            "Create websites only",
          ],
          answer: "Protect digital systems and information",
        },
        {
          question: "Which is part of cybersecurity?",
          options: [
            "Network security",
            "Graphic design only",
            "Video editing only",
            "Spreadsheet formatting only",
          ],
          answer: "Network security",
        },
        {
          question: "Why is cybersecurity important?",
          options: [
            "Digital systems and information need protection from security threats",
            "It makes computers physically larger",
            "It removes the need for passwords",
            "It guarantees that no system can ever fail",
          ],
          answer:
            "Digital systems and information need protection from security threats",
        },
      ],
    },
  },

  {
    id: "cia-triad",
    title: "CIA Triad",
    lesson: {
      overview:
        "The CIA triad is a fundamental cybersecurity model consisting of Confidentiality, Integrity, and Availability. These three principles help organizations define and evaluate security requirements.",
      sections: [
        {
          heading: "Confidentiality",
          content:
            "Confidentiality means preventing unauthorized people or systems from accessing information. Authentication, authorization, encryption, and access controls can help protect confidentiality.",
        },
        {
          heading: "Integrity",
          content:
            "Integrity means maintaining the accuracy and trustworthiness of information. Controls such as hashes, digital signatures, and access restrictions can help detect or prevent unauthorized changes.",
        },
        {
          heading: "Availability",
          content:
            "Availability means ensuring that authorized users can access systems and information when needed. Redundancy, backups, monitoring, and resilient infrastructure can contribute to availability.",
        },
        {
          heading: "Balancing the Three",
          content:
            "Security decisions often involve balancing confidentiality, integrity, and availability according to the requirements and risks of a particular system.",
        },
      ],
      mistakes: [
        "Confusing confidentiality with integrity.",
        "Thinking availability only means having an internet connection.",
        "Focusing on one CIA principle while completely ignoring the others.",
      ],
      quiz: [
        {
          question: "What does the C in CIA stand for?",
          options: [
            "Confidentiality",
            "Control",
            "Communication",
            "Certification",
          ],
          answer: "Confidentiality",
        },
        {
          question: "Which CIA principle focuses on preventing unauthorized modification?",
          options: [
            "Integrity",
            "Availability",
            "Confidentiality",
            "Authentication",
          ],
          answer: "Integrity",
        },
        {
          question: "Which CIA principle ensures authorized users can access resources when needed?",
          options: [
            "Availability",
            "Integrity",
            "Confidentiality",
            "Encryption",
          ],
          answer: "Availability",
        },
      ],
    },
  },

  {
    id: "cyber-threats",
    title: "Types of Cyber Threats",
    lesson: {
      overview:
        "Cyber threats are potential actions or events that can compromise digital systems or information. Understanding common threat categories helps security teams identify appropriate defenses.",
      sections: [
        {
          heading: "Malware",
          content:
            "Malware is malicious software designed to perform harmful or unauthorized actions. Examples include viruses, worms, trojans, ransomware, and spyware.",
        },
        {
          heading: "Phishing",
          content:
            "Phishing attempts to trick people into revealing information, opening malicious content, or performing an unsafe action. It commonly uses deceptive emails, messages, or websites.",
        },
        {
          heading: "Denial-of-Service",
          content:
            "Denial-of-service attacks attempt to make a service or resource unavailable to legitimate users by overwhelming or disrupting it.",
        },
        {
          heading: "Social Engineering",
          content:
            "Social engineering manipulates people rather than relying only on technical weaknesses. Attackers may use deception, impersonation, urgency, or other psychological techniques.",
        },
      ],
      mistakes: [
        "Assuming every cyberattack uses sophisticated malware.",
        "Ignoring social engineering because it targets people instead of systems.",
        "Opening suspicious links or attachments without verification.",
      ],
      quiz: [
        {
          question: "Which is an example of malware?",
          options: [
            "Ransomware",
            "Firewall",
            "Password manager",
            "Backup",
          ],
          answer: "Ransomware",
        },
        {
          question: "What does phishing commonly attempt to do?",
          options: [
            "Trick users into revealing information or performing unsafe actions",
            "Improve network performance",
            "Encrypt legitimate backups automatically",
            "Repair damaged hardware",
          ],
          answer:
            "Trick users into revealing information or performing unsafe actions",
        },
        {
          question: "What does a denial-of-service attack generally target?",
          options: [
            "Service availability",
            "Screen brightness",
            "Keyboard layout",
            "File naming conventions",
          ],
          answer: "Service availability",
        },
      ],
    },
  },

  {
    id: "attack-surfaces",
    title: "Attack Surfaces & Vulnerabilities",
    lesson: {
      overview:
        "An attack surface consists of the points where an attacker could potentially interact with or attempt to compromise a system. Vulnerabilities are weaknesses that may be exploited.",
      sections: [
        {
          heading: "Attack Surface",
          content:
            "An attack surface can include network services, applications, APIs, user accounts, devices, cloud resources, exposed interfaces, and other entry points.",
        },
        {
          heading: "Vulnerability",
          content:
            "A vulnerability is a weakness in software, hardware, configuration, architecture, or process that could create a security risk.",
        },
        {
          heading: "Examples",
          content:
            "Examples include outdated software, weak authentication, insecure configurations, exposed services, and improperly protected data.",
        },
        {
          heading: "Reducing the Attack Surface",
          content:
            "Organizations can reduce exposure by removing unnecessary services, applying security updates, restricting access, using secure configurations, and continuously monitoring systems.",
        },
      ],
      mistakes: [
        "Assuming only internet-facing systems have attack surfaces.",
        "Ignoring outdated software and insecure configurations.",
        "Exposing unnecessary services or interfaces.",
      ],
      quiz: [
        {
          question: "What is an attack surface?",
          options: [
            "Potential points through which a system can be interacted with or attacked",
            "The physical size of a computer",
            "A type of encryption algorithm",
            "A backup storage device",
          ],
          answer:
            "Potential points through which a system can be interacted with or attacked",
        },
        {
          question: "What is a vulnerability?",
          options: [
            "A weakness that could create a security risk",
            "A type of firewall",
            "A security certification",
            "A backup strategy",
          ],
          answer: "A weakness that could create a security risk",
        },
        {
          question: "Which can reduce an attack surface?",
          options: [
            "Removing unnecessary services",
            "Enabling every available service",
            "Using outdated software",
            "Sharing administrative credentials",
          ],
          answer: "Removing unnecessary services",
        },
      ],
    },
  },

  {
    id: "risk-threat-controls",
    title: "Risk, Threat & Security Controls",
    lesson: {
      overview:
        "Understanding the relationship between assets, threats, vulnerabilities, and risk is essential for cybersecurity planning. Security controls are measures used to reduce security risk.",
      sections: [
        {
          heading: "Threat",
          content:
            "A threat is a potential event, actor, or circumstance that could cause harm to an asset or system.",
        },
        {
          heading: "Risk",
          content:
            "Risk represents the potential for loss or harm resulting from a threat exploiting a vulnerability. Risk assessment helps organizations prioritize security efforts.",
        },
        {
          heading: "Security Controls",
          content:
            "Security controls are safeguards used to prevent, detect, or respond to security problems. Examples include access controls, encryption, firewalls, backups, and monitoring.",
        },
        {
          heading: "Control Categories",
          content:
            "Controls can be administrative, technical, or physical. They can also be designed to prevent incidents, detect them, or support recovery and response.",
        },
      ],
      mistakes: [
        "Treating every threat as having the same level of risk.",
        "Confusing a vulnerability with a threat.",
        "Using controls without considering the actual risks they are intended to reduce.",
      ],
      quiz: [
        {
          question: "What is a vulnerability?",
          options: [
            "A weakness that can potentially be exploited",
            "A guaranteed attack",
            "A security policy document only",
            "A backup copy",
          ],
          answer: "A weakness that can potentially be exploited",
        },
        {
          question: "What is the purpose of a security control?",
          options: [
            "To reduce or manage security risk",
            "To increase vulnerabilities",
            "To remove all computer networks",
            "To guarantee zero risk",
          ],
          answer: "To reduce or manage security risk",
        },
        {
          question: "Which is an example of a technical security control?",
          options: [
            "Firewall",
            "Employee vacation policy",
            "Office door",
            "Security awareness poster",
          ],
          answer: "Firewall",
        },
      ],
    },
  },

  {
    id: "security-principles",
    title: "Cybersecurity Principles",
    lesson: {
      overview:
        "Cybersecurity principles provide general guidance for designing and operating secure systems. They help organizations reduce unnecessary exposure and limit the impact of security incidents.",
      sections: [
        {
          heading: "Least Privilege",
          content:
            "The principle of least privilege means users, applications, and processes should receive only the permissions necessary to perform their required tasks.",
        },
        {
          heading: "Defense in Depth",
          content:
            "Defense in depth uses multiple layers of security controls so that failure of one control does not automatically compromise the entire system.",
        },
        {
          heading: "Secure by Design",
          content:
            "Secure-by-design thinking incorporates security requirements during planning and development instead of treating security as an afterthought.",
        },
        {
          heading: "Zero Trust",
          content:
            "Zero Trust is an approach that avoids automatically trusting users or devices based solely on their network location. Access should be evaluated according to identity, context, and authorization requirements.",
        },
      ],
      mistakes: [
        "Giving users permanent administrator privileges without need.",
        "Relying on a single security control.",
        "Adding security only after an application has been completed.",
      ],
      quiz: [
        {
          question: "What does least privilege mean?",
          options: [
            "Give only the permissions necessary for a task",
            "Give every user administrator access",
            "Remove all user accounts",
            "Allow unlimited access by default",
          ],
          answer: "Give only the permissions necessary for a task",
        },
        {
          question: "What is defense in depth?",
          options: [
            "Using multiple layers of security controls",
            "Using only one password",
            "Removing all security controls",
            "Allowing unrestricted access",
          ],
          answer: "Using multiple layers of security controls",
        },
        {
          question: "What does secure-by-design emphasize?",
          options: [
            "Considering security during system planning and development",
            "Adding security only after an incident",
            "Avoiding all testing",
            "Removing authentication",
          ],
          answer:
            "Considering security during system planning and development",
        },
      ],
    },
  },

  {
    id: "security-policies-awareness",
    title: "Security Policies & Awareness",
    lesson: {
      overview:
        "Security policies define expected security practices, while security awareness helps users understand threats and their responsibilities in protecting organizational information.",
      sections: [
        {
          heading: "Security Policies",
          content:
            "Security policies establish rules and expectations for areas such as passwords, acceptable use, data handling, device usage, access control, and incident reporting.",
        },
        {
          heading: "Security Awareness",
          content:
            "Security awareness training helps users recognize threats such as phishing, social engineering, unsafe downloads, and suspicious requests.",
        },
        {
          heading: "Incident Reporting",
          content:
            "Users should know how and when to report suspicious activity. Early reporting can help security teams investigate potential incidents quickly.",
        },
        {
          heading: "Human Factor",
          content:
            "People are an important part of cybersecurity. Clear policies, regular training, and simple reporting procedures can help reduce avoidable security problems.",
        },
      ],
      mistakes: [
        "Writing security policies that users cannot realistically follow.",
        "Providing security training only once and never updating it.",
        "Discouraging users from reporting mistakes or suspicious activity.",
      ],
      quiz: [
        {
          question: "What is the purpose of a security policy?",
          options: [
            "Define security rules and expected practices",
            "Increase internet speed",
            "Replace all security tools",
            "Remove user responsibilities",
          ],
          answer: "Define security rules and expected practices",
        },
        {
          question: "Why is security awareness training useful?",
          options: [
            "It helps users recognize and avoid common security threats",
            "It guarantees that malware cannot exist",
            "It replaces all technical security controls",
            "It removes the need for authentication",
          ],
          answer:
            "It helps users recognize and avoid common security threats",
        },
        {
          question: "Why should suspicious activity be reported quickly?",
          options: [
            "It can help security teams investigate potential incidents sooner",
            "It automatically deletes all evidence",
            "It disables every user account",
            "It guarantees that an attack never happened",
          ],
          answer:
            "It can help security teams investigate potential incidents sooner",
        },
      ],
    },
  },

  {
    id: "cybersecurity-career",
    title: "Cybersecurity Career & Real-World Applications",
    lesson: {
      overview:
        "Cybersecurity includes many career paths and real-world applications. Professionals work across areas such as security analysis, penetration testing, incident response, digital forensics, cloud security, and governance.",
      sections: [
        {
          heading: "Security Analyst",
          content:
            "Security analysts monitor systems, investigate alerts, analyze suspicious activity, and help organizations respond to security incidents.",
        },
        {
          heading: "Security Engineer",
          content:
            "Security engineers design, implement, and maintain technical security controls and secure infrastructure.",
        },
        {
          heading: "Penetration Tester",
          content:
            "Penetration testers perform authorized security assessments to identify weaknesses and provide organizations with information that can be used to improve defenses.",
        },
        {
          heading: "Incident Response & Forensics",
          content:
            "Incident responders investigate and contain security incidents, while digital forensics specialists analyze digital evidence to understand what happened.",
        },
        {
          heading: "Real-World Applications",
          content:
            "Cybersecurity is used in banking, healthcare, education, government, e-commerce, telecommunications, cloud computing, manufacturing, and virtually every organization that relies on digital systems.",
        },
      ],
      mistakes: [
        "Assuming cybersecurity has only one career path.",
        "Performing security testing against systems without authorization.",
        "Focusing only on offensive security and ignoring defensive roles.",
      ],
      quiz: [
        {
          question: "What does a security analyst commonly do?",
          options: [
            "Monitor and investigate security events",
            "Design only mobile application interfaces",
            "Repair physical keyboards",
            "Create advertisements",
          ],
          answer: "Monitor and investigate security events",
        },
        {
          question: "What is a penetration tester expected to do?",
          options: [
            "Perform authorized security assessments",
            "Access any system without permission",
            "Delete organizational data",
            "Disable security controls permanently",
          ],
          answer: "Perform authorized security assessments",
        },
        {
          question: "Where is cybersecurity used?",
          options: [
            "Across organizations that depend on digital systems",
            "Only in gaming companies",
            "Only in social media",
            "Only in government offices",
          ],
          answer:
            "Across organizations that depend on digital systems",
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

const CybersecurityFundamentals = ({ goBack }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const { completed: completedTopics, markComplete: saveProgress } = useLearningProgress("cybersecurity-cybersecurity-fundamentals", subtopics);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
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

  const activeTopic = subtopics[activeTopicIndex];

  const quizQuestions = activeTopic?.lesson?.quiz || [];

  const currentQuestion =
    quizQuestions[questionIndex] || quizQuestions[0];

  const options =
    activeTopic && shuffledQuizOptions[activeTopic.id]
      ? shuffledQuizOptions[activeTopic.id][questionIndex] || []
      : [];

  const progress =
    subtopics.length > 0
      ? Math.round(
          (completedTopics.length / subtopics.length) * 100
        )
      : 0;

  const markCompleted = () => {
    if (!activeTopic) return;
    saveProgress(activeTopic.id);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted || !currentQuestion) return;

    setQuizAnswers((previous) => ({
      ...previous,
      [questionIndex]: selectedAnswer,
    }));
    setSubmitted(true);
  };

  const handleNextQuestion = async () => {
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer("");
      setSubmitted(false);
      return;
    }

    const finalAnswers = {
      ...quizAnswers,
      [questionIndex]: selectedAnswer,
    };

    const finalScore = Object.keys(finalAnswers).reduce(
      (total, key) => total + (finalAnswers[key] === quizQuestions[Number(key)]?.answer ? 1 : 0),
      0
    );

    await saveQuizResult({
      subject: "Cybersecurity",
      role: "Cybersecurity",
      topic: activeTopic.title,
      topicId: activeTopic.id,
      score: finalScore,
      totalQuestions: quizQuestions.length
    });

    markCompleted();
    setQuizAnswers(finalAnswers);
    setScore(finalScore);
    setQuizFinished(true);
  };

  const openTopic = (index) => {
    setQuizAnswers({});
    setQuizFinished(false);
    setScore(0);
    setActiveTopicIndex(index);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
  };

  const goToNextLesson = () => {
    if (activeTopicIndex < subtopics.length - 1) {
      openTopic(activeTopicIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (activeTopicIndex > 0) {
      openTopic(activeTopicIndex - 1);
    }
  };

  if (!activeTopic) {
    return null;
  }

  if (quizFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = score >= Math.ceil(quizQuestions.length * 0.6);

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "700px", margin: "80px auto", background: "white", borderRadius: "16px", padding: "40px", textAlign: "center" }}>
          <h1>🎉 Quiz Completed!</h1>
          <h2>{score} / {quizQuestions.length}</h2>
          <p>{percentage}%</p>
          <p>{passed ? "Passed" : "Not Passed"}</p>
          <button onClick={() => { setQuestionIndex(0); setSelectedAnswer(""); setSubmitted(false); setQuizAnswers({}); setScore(0); setQuizFinished(false); }}>Retry Quiz</button>
          <button onClick={() => { setQuizFinished(false); setQuestionIndex(0); setSelectedAnswer(""); setSubmitted(false); setQuizAnswers({}); }}>Continue</button>
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

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 8px 24px rgba(37, 99, 235, 0.08)",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              margin: "0 0 8px",
              color: "#1e3a8a",
              fontSize: "30px",
            }}
          >
            🔐 Cybersecurity Fundamentals
          </h1>

          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            Build a strong foundation in cybersecurity concepts,
            threats, risks, security principles, and real-world
            security practices.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              color: "#334155",
              fontWeight: "600",
            }}
          >
            <span>Overall Progress</span>
            <span>{progress}%</span>
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
                width: `${progress}%`,
                height: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          {subtopics.map((topic, index) => {
            const isCompleted = completedTopics.includes(topic.id);
            const isActive = index === activeTopicIndex;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "20px",
                  border: isActive
                    ? "2px solid #2563eb"
                    : "1px solid #bfdbfe",
                  boxShadow:
                    "0 5px 15px rgba(37, 99, 235, 0.06)",
                }}
              >
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Lesson {index + 1}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                    lineHeight: "1.4",
                  }}
                >
                  {topic.title}
                </h3>

                <p
                  style={{
                    color: isCompleted ? "#15803d" : "#64748b",
                    fontSize: "14px",
                    marginBottom: "15px",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "Not completed"}
                </p>

                <button
                  onClick={() => openTopic(index)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "Review Lesson"
                    : "Open Lesson"}
                </button>
              </div>
            );
          })}
        </div>

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 5px",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Lesson {activeTopicIndex + 1} of{" "}
                {subtopics.length}
              </p>

              <h2
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                  fontSize: "26px",
                }}
              >
                {activeTopic.title}
              </h2>
            </div>

            <div
              style={{
                padding: "8px 14px",
                background: "#eff6ff",
                color: "#2563eb",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {completedTopics.includes(activeTopic.id)
                ? "✓ Completed"
                : "In Progress"}
            </div>
          </div>

          <section style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              Overview
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {activeTopic.lesson.overview}
            </p>
          </section>

          {(activeTopic.lesson.sections || []).map(
            (section, index) => (
              <section
                key={index}
                style={{
                  marginBottom: "24px",
                  padding: "20px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#1e3a8a",
                    fontSize: "18px",
                  }}
                >
                  {section.heading}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    lineHeight: "1.7",
                  }}
                >
                  {section.content}
                </p>
              </section>
            )
          )}

          <section
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#fff7ed",
              borderRadius: "12px",
              border: "1px solid #fed7aa",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                color: "#c2410c",
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "22px",
                color: "#7c2d12",
                lineHeight: "1.8",
              }}
            >
              {(activeTopic.lesson.mistakes || []).map(
                (mistake, index) => (
                  <li key={index}>{mistake}</li>
                )
              )}
            </ul>
          </section>

          <section
            style={{
              padding: "24px",
              background: "#eff6ff",
              borderRadius: "14px",
              border: "1px solid #bfdbfe",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#1e3a8a",
                }}
              >
                🧠 Quick Quiz
              </h3>

              <span
                style={{
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Question {questionIndex + 1} of{" "}
                {quizQuestions.length}
              </span>
            </div>

            {currentQuestion && (
              <>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#334155",
                    marginBottom: "18px",
                  }}
                >
                  {currentQuestion.question}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {options.map((option, index) => {
                    const isSelected =
                      selectedAnswer === option;

                    const isCorrect =
                      option === currentQuestion.answer;

                    let background = "white";
                    let border = "1px solid #bfdbfe";
                    let textColor = "#334155";

                    if (submitted && isCorrect) {
                      background = "#dcfce7";
                      border = "2px solid #16a34a";
                      textColor = "#166534";
                    } else if (
                      submitted &&
                      isSelected &&
                      !isCorrect
                    ) {
                      background = "#fee2e2";
                      border = "2px solid #dc2626";
                      textColor = "#991b1b";
                    } else if (isSelected) {
                      background = "#dbeafe";
                      border = "2px solid #2563eb";
                      textColor = "#1e3a8a";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!submitted) {
                            setSelectedAnswer(option);
                          }
                        }}
                        style={{
                          textAlign: "left",
                          padding: "13px 15px",
                          border,
                          borderRadius: "9px",
                          background,
                          color: textColor,
                          cursor: submitted
                            ? "default"
                            : "pointer",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted &&
                  selectedAnswer !== currentQuestion.answer && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
                      }}
                    >
                      Correct answer:{" "}
                      {currentQuestion.answer}
                    </p>
                  )}

                {submitted &&
                  selectedAnswer === currentQuestion.answer && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#166534",
                        fontWeight: "600",
                      }}
                    >
                      ✓ Correct answer!
                    </p>
                  )}

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {!submitted ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!selectedAnswer}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: selectedAnswer
                          ? "#2563eb"
                          : "#94a3b8",
                        color: "white",
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
                      onClick={handleNextQuestion}
                      style={{
                        padding: "11px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#2563eb",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {questionIndex <
                      quizQuestions.length - 1
                        ? "Next Question →"
                        : "Complete Lesson ✓"}
                    </button>
                  )}
                </div>

                {submitted &&
                  questionIndex ===
                    quizQuestions.length - 1 && (
                    <p
                      style={{
                        marginTop: "15px",
                        marginBottom: 0,
                        color: "#475569",
                        fontSize: "14px",
                      }}
                    >
                      Current quiz score: {score}/
                      {quizQuestions.length}
                    </p>
                  )}
              </>
            )}
          </section>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPreviousLesson}
              disabled={activeTopicIndex === 0}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background:
                  activeTopicIndex === 0
                    ? "#f1f5f9"
                    : "white",
                color:
                  activeTopicIndex === 0
                    ? "#94a3b8"
                    : "#2563eb",
                cursor:
                  activeTopicIndex === 0
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous Lesson
            </button>

            <button
              onClick={goBack}
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back to Topics
            </button>

            <button
              onClick={goToNextLesson}
              disabled={
                activeTopicIndex === subtopics.length - 1
              }
              style={{
                padding: "11px 18px",
                borderRadius: "8px",
                border: "none",
                background:
                  activeTopicIndex === subtopics.length - 1
                    ? "#94a3b8"
                    : "#2563eb",
                color: "white",
                cursor:
                  activeTopicIndex === subtopics.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "600",
              }}
            >
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityFundamentals;