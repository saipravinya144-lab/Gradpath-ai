import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// AUTHENTICATION & ACCESS CONTROL LESSONS
// =====================================================

const subtopics = [
  {
    id: "authentication-fundamentals",
    title: "Authentication Fundamentals",
    icon: "🔑",
    lesson: {
      overview:
        "Learn the fundamentals of authentication and how systems verify the identity of users, devices, and other entities.",
      sections: [
        {
          heading: "What is Authentication?",
          points: [
            "Authentication is the process of verifying the identity of a user, device, or system.",
            "A system typically verifies one or more authentication factors before granting an authenticated session.",
            "Authentication is different from authorization, which determines what an authenticated identity is allowed to do.",
          ],
        },
        {
          heading: "Authentication Factors",
          points: [
            "Something you know includes passwords and PINs.",
            "Something you have includes security keys, smart cards, or authentication devices.",
            "Something you are includes biometric characteristics such as fingerprints.",
          ],
        },
        {
          heading: "Authentication Flow",
          points: [
            "A user provides authentication information.",
            "The server verifies the supplied credentials or factors.",
            "If verification succeeds, the application establishes an authenticated state.",
            "The application should then apply authorization rules to determine permitted actions.",
          ],
        },
      ],
      mistakes: [
        "Confusing authentication with authorization.",
        "Treating a username alone as proof of identity.",
        "Using only one weak authentication factor for highly sensitive systems.",
      ],
      quiz: [
        {
          question: "What is authentication?",
          options: [
            "Verifying the identity of a user or system",
            "Determining which database tables exist",
            "Compressing application files",
            "Assigning an IP address",
          ],
          answer: "Verifying the identity of a user or system",
        },
        {
          question:
            "Which is an example of something you know?",
          options: [
            "Password",
            "Fingerprint",
            "Security key",
            "Smart card",
          ],
          answer: "Password",
        },
        {
          question:
            "What happens after successful authentication in a typical application?",
          options: [
            "Authorization rules can determine what the authenticated identity may access",
            "The user automatically receives administrator privileges",
            "All application resources become public",
            "Database encryption is automatically disabled",
          ],
          answer:
            "Authorization rules can determine what the authenticated identity may access",
        },
      ],
    },
  },

  {
    id: "password-security",
    title: "Password Security",
    icon: "🔒",
    lesson: {
      overview:
        "Learn how passwords should be created, stored, and protected against common attacks.",
      sections: [
        {
          heading: "Strong Passwords",
          points: [
            "Passwords should be sufficiently long and difficult to guess.",
            "Users should avoid predictable information such as names, birthdays, and common words.",
            "Password managers can help users create and store unique passwords.",
          ],
        },
        {
          heading: "Secure Password Storage",
          points: [
            "Applications should not store user passwords as plaintext.",
            "Password storage should use a dedicated password-hashing or password-based key-derivation mechanism.",
            "Each password should be protected with an appropriate unique salt.",
          ],
        },
        {
          heading: "Protecting Authentication",
          points: [
            "Rate limiting can reduce repeated automated login attempts.",
            "Account protections should be designed carefully to avoid unnecessary information disclosure.",
            "Breached-password checks can help prevent users from choosing known compromised passwords.",
          ],
        },
      ],
      mistakes: [
        "Storing passwords in plaintext.",
        "Using a fast general-purpose hash alone for password storage.",
        "Reusing the same password across multiple services.",
      ],
      quiz: [
        {
          question:
            "How should application passwords normally be stored?",
          options: [
            "Using an appropriate password-hashing mechanism",
            "As plaintext",
            "Inside HTML comments",
            "Inside usernames",
          ],
          answer:
            "Using an appropriate password-hashing mechanism",
        },
        {
          question: "Why is a unique salt used with password storage?",
          options: [
            "It helps prevent identical passwords from producing identical stored hashes",
            "It makes passwords readable by administrators",
            "It replaces authentication",
            "It eliminates the need for password hashing",
          ],
          answer:
            "It helps prevent identical passwords from producing identical stored hashes",
        },
        {
          question:
            "What can rate limiting help reduce?",
          options: [
            "Repeated automated authentication attempts",
            "The need for passwords",
            "The size of a database",
            "The number of application pages",
          ],
          answer:
            "Repeated automated authentication attempts",
        },
      ],
    },
  },

  {
    id: "sessions-tokens",
    title: "Sessions & Tokens",
    icon: "🎫",
    lesson: {
      overview:
        "Understand how applications maintain authenticated state using sessions and tokens and how these credentials should be protected.",
      sections: [
        {
          heading: "Sessions",
          points: [
            "A session allows an application to associate multiple requests with an authenticated user.",
            "A session identifier can be stored in a secure cookie.",
            "Possession of a valid session identifier can allow access to the associated authenticated session.",
          ],
        },
        {
          heading: "Tokens",
          points: [
            "Tokens can represent authentication or authorization information.",
            "Bearer tokens must be protected because whoever possesses the token may be able to use it.",
            "Token lifetime and scope should be appropriate for the application's requirements.",
          ],
        },
        {
          heading: "Session Security",
          points: [
            "Session identifiers should be unpredictable.",
            "Sessions should expire appropriately.",
            "Applications should invalidate sessions when users log out or when security requirements require it.",
          ],
        },
      ],
      mistakes: [
        "Putting sensitive authentication tokens in URLs.",
        "Using predictable session identifiers.",
        "Allowing authentication tokens to remain valid indefinitely.",
      ],
      quiz: [
        {
          question:
            "What does a session identifier commonly represent?",
          options: [
            "A reference to an authenticated session",
            "A database table",
            "A CSS class",
            "A network cable",
          ],
          answer:
            "A reference to an authenticated session",
        },
        {
          question:
            "Why must bearer tokens be protected?",
          options: [
            "Possession of the token may allow it to be used for authenticated access",
            "Tokens cannot be transmitted over networks",
            "Tokens automatically expose passwords",
            "Tokens are only used for CSS styling",
          ],
          answer:
            "Possession of the token may allow it to be used for authenticated access",
        },
        {
          question:
            "Why should sessions have appropriate expiration?",
          options: [
            "To reduce the period during which an exposed session may remain usable",
            "To make passwords unnecessary",
            "To prevent databases from storing data",
            "To disable authorization",
          ],
          answer:
            "To reduce the period during which an exposed session may remain usable",
        },
      ],
    },
  },

  {
    id: "multi-factor-authentication",
    title: "Multi-Factor Authentication (MFA)",
    icon: "🪪",
    lesson: {
      overview:
        "Learn how multi-factor authentication combines different authentication factors to provide stronger identity verification.",
      sections: [
        {
          heading: "What is MFA?",
          points: [
            "Multi-factor authentication requires authentication using two or more distinct factor categories.",
            "Combining different factor types can provide stronger protection than relying on a single factor.",
            "MFA is especially valuable for accounts that provide access to sensitive information or systems.",
          ],
        },
        {
          heading: "Common MFA Methods",
          points: [
            "Authenticator applications can generate time-based one-time passwords.",
            "Hardware security keys can provide phishing-resistant authentication in supported systems.",
            "Biometric authentication can be used as one factor when appropriately implemented.",
          ],
        },
        {
          heading: "Recovery",
          points: [
            "Account recovery procedures should be protected because weak recovery can undermine strong MFA.",
            "Recovery codes should be stored securely.",
            "Organizations should establish appropriate recovery processes before users lose access to their authentication factors.",
          ],
        },
      ],
      mistakes: [
        "Calling two passwords two different authentication factors.",
        "Ignoring account-recovery security.",
        "Assuming every MFA method provides identical phishing resistance.",
      ],
      quiz: [
        {
          question:
            "What is required for multi-factor authentication?",
          options: [
            "Two or more distinct authentication factor categories",
            "Two usernames",
            "Two passwords from the same category",
            "A username without a password",
          ],
          answer:
            "Two or more distinct authentication factor categories",
        },
        {
          question:
            "Which is an example of something you have?",
          options: [
            "Hardware security key",
            "Password",
            "PIN",
            "Fingerprint",
          ],
          answer: "Hardware security key",
        },
        {
          question:
            "Why is account recovery important to MFA security?",
          options: [
            "A weak recovery process can undermine strong authentication controls",
            "Recovery automatically encrypts every file",
            "Recovery removes the need for authorization",
            "Recovery disables all user accounts",
          ],
          answer:
            "A weak recovery process can undermine strong authentication controls",
        },
      ],
    },
  },

  {
    id: "authorization-access-control",
    title: "Authorization & Access Control",
    icon: "👥",
    lesson: {
      overview:
        "Learn how authorization controls determine which resources and actions an authenticated identity can access.",
      sections: [
        {
          heading: "Authentication vs Authorization",
          points: [
            "Authentication answers the question: Who are you?",
            "Authorization answers the question: What are you allowed to access or do?",
            "An authenticated user may still be unauthorized to access a particular resource.",
          ],
        },
        {
          heading: "Access Control",
          points: [
            "Access control policies define which identities can access specific resources or perform specific actions.",
            "Authorization checks should be enforced on the server for security-sensitive operations.",
            "Every sensitive resource and action should have an appropriate authorization check.",
          ],
        },
        {
          heading: "Least Privilege",
          points: [
            "Users should receive only the permissions required for their tasks.",
            "Services and applications should also operate with limited privileges.",
            "Least privilege reduces the impact of compromised accounts and components.",
          ],
        },
      ],
      mistakes: [
        "Relying on hidden frontend buttons as authorization.",
        "Assuming authentication means the user can access every resource.",
        "Giving users more privileges than they need.",
      ],
      quiz: [
        {
          question: "What does authorization determine?",
          options: [
            "What an authenticated identity is allowed to access or perform",
            "Whether a password is stored as plaintext",
            "Whether a device has a battery",
            "Whether a webpage contains images",
          ],
          answer:
            "What an authenticated identity is allowed to access or perform",
        },
        {
          question:
            "Where should important authorization checks be enforced?",
          options: [
            "On the server",
            "Only in the browser",
            "Only in CSS",
            "Only in the webpage title",
          ],
          answer: "On the server",
        },
        {
          question:
            "What principle limits permissions to what is actually required?",
          options: [
            "Least privilege",
            "Maximum access",
            "Default trust",
            "Open authorization",
          ],
          answer: "Least privilege",
        },
      ],
    },
  },

  {
    id: "rbac-abac",
    title: "Role-Based & Attribute-Based Access Control",
    icon: "🛡️",
    lesson: {
      overview:
        "Learn how RBAC and ABAC organize authorization policies using roles, attributes, and contextual rules.",
      sections: [
        {
          heading: "Role-Based Access Control",
          points: [
            "RBAC assigns permissions to roles and then assigns users or other identities to those roles.",
            "Examples of roles can include administrator, instructor, and student.",
            "RBAC can simplify permission management when responsibilities map clearly to roles.",
          ],
        },
        {
          heading: "Attribute-Based Access Control",
          points: [
            "ABAC evaluates attributes of subjects, resources, actions, and sometimes environmental conditions.",
            "Attributes can include department, resource classification, device status, or location.",
            "ABAC can support more fine-grained policies than simple role assignments.",
          ],
        },
        {
          heading: "Choosing a Model",
          points: [
            "The appropriate access-control model depends on application requirements.",
            "Complex policies should be documented and tested carefully.",
            "Access rules should follow least-privilege principles.",
          ],
        },
      ],
      mistakes: [
        "Assuming RBAC and ABAC are identical.",
        "Creating unnecessary roles that become difficult to manage.",
        "Allowing access without considering resource sensitivity.",
      ],
      quiz: [
        {
          question:
            "What does RBAC primarily use to organize permissions?",
          options: [
            "Roles",
            "File extensions",
            "IP addresses only",
            "Browser themes",
          ],
          answer: "Roles",
        },
        {
          question:
            "What does ABAC use when evaluating access decisions?",
          options: [
            "Attributes and policy conditions",
            "Only usernames",
            "Only passwords",
            "Only file names",
          ],
          answer: "Attributes and policy conditions",
        },
        {
          question:
            "Which model can support access decisions based on factors such as department and resource classification?",
          options: [
            "Attribute-Based Access Control",
            "Role-Based Access Control only",
            "File compression",
            "DNS resolution",
          ],
          answer:
            "Attribute-Based Access Control",
        },
      ],
    },
  },

  {
    id: "authentication-vulnerabilities",
    title: "Common Authentication & Authorization Vulnerabilities",
    icon: "🚨",
    lesson: {
      overview:
        "Learn common weaknesses in authentication and authorization systems and how secure design can reduce their impact.",
      sections: [
        {
          heading: "Authentication Weaknesses",
          points: [
            "Weak passwords and password reuse can increase account-compromise risk.",
            "Credential stuffing uses previously exposed username-password combinations against other services.",
            "Poor session management can allow unauthorized use of authenticated sessions.",
          ],
        },
        {
          heading: "Authorization Failures",
          points: [
            "Broken access control occurs when users can perform actions or access resources they should not be allowed to use.",
            "Changing an object identifier should not allow access to another user's resource.",
            "Server-side authorization checks should be applied consistently.",
          ],
        },
        {
          heading: "Secure Defenses",
          points: [
            "Use strong password storage mechanisms.",
            "Use MFA where appropriate.",
            "Protect session identifiers and tokens.",
            "Apply least privilege and centralized authorization policies.",
            "Test access controls using different user roles and resource ownership scenarios.",
          ],
        },
      ],
      mistakes: [
        "Testing only successful authentication paths.",
        "Assuming frontend restrictions provide security.",
        "Failing to test whether one user can access another user's resources.",
      ],
      quiz: [
        {
          question:
            "What is credential stuffing?",
          options: [
            "Using previously exposed username-password combinations against other services",
            "Encrypting passwords with multiple algorithms",
            "Creating additional database tables",
            "Changing a user's display name",
          ],
          answer:
            "Using previously exposed username-password combinations against other services",
        },
        {
          question:
            "What is a common example of broken access control?",
          options: [
            "A user accessing a resource belonging to another user without authorization",
            "A user changing their own profile picture",
            "A server returning a normal HTML page",
            "A browser storing a public image",
          ],
          answer:
            "A user accessing a resource belonging to another user without authorization",
        },
        {
          question:
            "How should applications verify that a user can access a sensitive resource?",
          options: [
            "Perform an appropriate server-side authorization check",
            "Hide the resource link in the frontend",
            "Trust the resource identifier supplied by the browser",
            "Assume authentication grants access to every resource",
          ],
          answer:
            "Perform an appropriate server-side authorization check",
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
// AUTHENTICATION & ACCESS CONTROL COMPONENT
// =====================================================

function AuthenticationAccessControl({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-authentication-access-control", subtopics);

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

  // =====================================================
  // CURRENT DATA
  // =====================================================

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
            👤 Authentication & Access Control
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn authentication, password security,
            sessions, MFA, authorization, access-control
            models, and common security vulnerabilities.
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

            {/* WRONG ANSWER MESSAGE */}

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

            {/* CORRECT ANSWER MESSAGE */}

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

export default AuthenticationAccessControl;