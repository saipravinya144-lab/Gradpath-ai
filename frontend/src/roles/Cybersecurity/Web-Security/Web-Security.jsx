import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// WEB SECURITY LESSONS
// =====================================================

const subtopics = [
  {
    id: "web-security-fundamentals",
    title: "Web Security Fundamentals",
    icon: "🌐",
    lesson: {
      overview:
        "Learn the basic principles of securing web applications, websites, browsers, servers, and the data exchanged between them.",
      sections: [
        {
          heading: "What is Web Security?",
          points: [
            "Web security focuses on protecting websites and web applications from unauthorized access, misuse, data exposure, and other security threats.",
            "A secure web application should protect confidentiality, integrity, and availability.",
            "Security should be considered throughout the application's development and deployment lifecycle.",
          ],
        },
        {
          heading: "Common Web Components",
          points: [
            "A typical web application can include a browser, frontend, backend server, database, APIs, and authentication mechanisms.",
            "Each component can introduce security risks if it is incorrectly designed or configured.",
            "Communication between components should be protected and validated.",
          ],
        },
        {
          heading: "Security Principles",
          points: [
            "Validate input received from users and external systems.",
            "Apply least privilege to users, services, and application components.",
            "Protect sensitive information both in transit and at rest.",
            "Keep dependencies and server software updated.",
          ],
        },
      ],
      mistakes: [
        "Assuming frontend validation alone is sufficient.",
        "Trusting all data received from a browser.",
        "Ignoring security because an application is only used internally.",
      ],
      quiz: [
        {
          question: "What is a primary goal of web security?",
          options: [
            "Protecting web applications and their data from unauthorized access and misuse",
            "Making every website load without any network connection",
            "Removing the need for user authentication",
            "Replacing databases with static files",
          ],
          answer:
            "Protecting web applications and their data from unauthorized access and misuse",
        },
        {
          question:
            "Why should web applications validate input on the server?",
          options: [
            "Client-side controls can be bypassed",
            "Browsers cannot display text",
            "Servers cannot process requests",
            "Databases cannot store validated data",
          ],
          answer: "Client-side controls can be bypassed",
        },
        {
          question:
            "Which principle limits users and services to the permissions they actually need?",
          options: [
            "Least privilege",
            "Open access",
            "Default trust",
            "Maximum privilege",
          ],
          answer: "Least privilege",
        },
      ],
    },
  },

  {
    id: "sql-injection",
    title: "SQL Injection",
    icon: "💉",
    lesson: {
      overview:
        "Understand SQL injection, why unsafe database queries create risk, and how developers can prevent it.",
      sections: [
        {
          heading: "What is SQL Injection?",
          points: [
            "SQL injection occurs when untrusted input is improperly incorporated into SQL statements.",
            "An attacker may manipulate the intended structure of a database query.",
            "The impact can include unauthorized data access, modification, or other database operations depending on application privileges.",
          ],
        },
        {
          heading: "Why It Happens",
          points: [
            "A common cause is constructing SQL queries by directly concatenating untrusted input.",
            "Application code should not treat user-controlled data as trusted SQL syntax.",
            "Database accounts should also have only the privileges required by the application.",
          ],
        },
        {
          heading: "Prevention",
          points: [
            "Parameterized queries and prepared statements are a primary defense against SQL injection.",
            "Input validation can provide additional protection.",
            "Least-privilege database accounts reduce potential impact.",
          ],
        },
      ],
      mistakes: [
        "Relying only on client-side input validation.",
        "Building SQL statements through string concatenation with untrusted data.",
        "Giving an application database account unnecessary administrative privileges.",
      ],
      quiz: [
        {
          question: "What is a common cause of SQL injection?",
          options: [
            "Unsafe incorporation of untrusted input into SQL statements",
            "Using HTTPS for web traffic",
            "Using strong passwords",
            "Applying database indexes",
          ],
          answer:
            "Unsafe incorporation of untrusted input into SQL statements",
        },
        {
          question:
            "Which technique is a primary defense against SQL injection?",
          options: [
            "Parameterized queries",
            "Disabling all database tables",
            "Removing authentication",
            "Using longer HTML pages",
          ],
          answer: "Parameterized queries",
        },
        {
          question:
            "How does database least privilege help reduce SQL injection impact?",
          options: [
            "It limits what the compromised application account can do",
            "It prevents every malformed request from reaching the server",
            "It makes SQL syntax unnecessary",
            "It encrypts all database records automatically",
          ],
          answer:
            "It limits what the compromised application account can do",
        },
      ],
    },
  },

  {
    id: "cross-site-scripting",
    title: "Cross-Site Scripting (XSS)",
    icon: "📜",
    lesson: {
      overview:
        "Learn how cross-site scripting can cause untrusted content to execute in a user's browser and how applications can reduce the risk.",
      sections: [
        {
          heading: "What is XSS?",
          points: [
            "Cross-Site Scripting, commonly called XSS, is a web vulnerability involving untrusted content being interpreted as active content in a user's browser.",
            "XSS can affect users who interact with a vulnerable web application.",
            "Potential impact depends on the application's context and available browser privileges.",
          ],
        },
        {
          heading: "Types of XSS",
          points: [
            "Stored XSS involves malicious content being stored by an application and later served to users.",
            "Reflected XSS occurs when untrusted input is reflected into a response.",
            "DOM-based XSS occurs through unsafe client-side manipulation of the browser's DOM.",
          ],
        },
        {
          heading: "Prevention",
          points: [
            "Context-appropriate output encoding is an important defense.",
            "Applications should safely handle untrusted input.",
            "Content Security Policy can provide an additional layer of protection.",
          ],
        },
      ],
      mistakes: [
        "Assuming escaping is identical for every output context.",
        "Trusting content simply because it came from the application's own database.",
        "Relying on Content Security Policy as the only defense.",
      ],
      quiz: [
        {
          question: "What does XSS primarily involve?",
          options: [
            "Untrusted content being executed or interpreted as active content in a user's browser",
            "Unauthorized physical access to a server",
            "A failure of database indexing",
            "Loss of network connectivity",
          ],
          answer:
            "Untrusted content being executed or interpreted as active content in a user's browser",
        },
        {
          question: "Which type of XSS involves content stored by an application?",
          options: [
            "Stored XSS",
            "Reflected XSS",
            "DOM-based XSS",
            "Network XSS",
          ],
          answer: "Stored XSS",
        },
        {
          question:
            "Which technique is commonly used to safely represent untrusted data in output?",
          options: [
            "Context-appropriate output encoding",
            "Disabling all browser features",
            "Publishing server credentials",
            "Removing database permissions",
          ],
          answer: "Context-appropriate output encoding",
        },
      ],
    },
  },

  {
    id: "csrf",
    title: "Cross-Site Request Forgery (CSRF)",
    icon: "🔄",
    lesson: {
      overview:
        "Understand CSRF and how applications can prevent unauthorized state-changing requests made using an authenticated user's browser.",
      sections: [
        {
          heading: "What is CSRF?",
          points: [
            "Cross-Site Request Forgery tricks an authenticated user's browser into sending an unintended request to a vulnerable application.",
            "The attack is especially relevant when authentication information is automatically included with requests.",
            "CSRF can affect actions that change application state.",
          ],
        },
        {
          heading: "CSRF Tokens",
          points: [
            "A CSRF token is an unpredictable value associated with a user's session or request context.",
            "The server validates the token before accepting protected state-changing requests.",
            "An attacker on another site should not be able to obtain the legitimate token.",
          ],
        },
        {
          heading: "Additional Defenses",
          points: [
            "SameSite cookie settings can reduce CSRF risk.",
            "Applications should use appropriate request methods and verify important state-changing operations.",
            "Sensitive actions may require additional confirmation or authentication.",
          ],
        },
      ],
      mistakes: [
        "Thinking CSRF and XSS are the same vulnerability.",
        "Using predictable CSRF tokens.",
        "Ignoring cookie configuration.",
      ],
      quiz: [
        {
          question: "What does CSRF primarily exploit?",
          options: [
            "A user's authenticated browser making an unintended request",
            "A database's inability to store text",
            "A server's lack of disk space",
            "A browser's inability to display images",
          ],
          answer:
            "A user's authenticated browser making an unintended request",
        },
        {
          question:
            "What is a common defense against CSRF?",
          options: [
            "Unpredictable CSRF tokens",
            "Longer HTML documents",
            "Public database credentials",
            "Disabling all cookies",
          ],
          answer: "Unpredictable CSRF tokens",
        },
        {
          question:
            "Which cookie attribute can help reduce CSRF risk?",
          options: [
            "SameSite",
            "Content-Type",
            "Accept",
            "Cache-Control",
          ],
          answer: "SameSite",
        },
      ],
    },
  },

  {
    id: "session-cookie-security",
    title: "Session & Cookie Security",
    icon: "🍪",
    lesson: {
      overview:
        "Learn how web sessions and cookies work and how secure cookie configuration helps protect authenticated users.",
      sections: [
        {
          heading: "Sessions",
          points: [
            "A session allows a web application to associate multiple requests with a user or client state.",
            "Session identifiers are often stored in cookies.",
            "An attacker who obtains a valid session identifier may be able to impersonate the associated session.",
          ],
        },
        {
          heading: "Secure Cookie Attributes",
          points: [
            "The Secure attribute helps ensure a cookie is sent only over HTTPS.",
            "The HttpOnly attribute prevents ordinary client-side JavaScript from directly reading the cookie.",
            "The SameSite attribute controls when browsers send cookies in cross-site contexts.",
          ],
        },
        {
          heading: "Session Protection",
          points: [
            "Session identifiers should be unpredictable.",
            "Applications should expire sessions appropriately.",
            "Session identifiers should be regenerated when appropriate, such as after important authentication events.",
          ],
        },
      ],
      mistakes: [
        "Sending sensitive session cookies over unencrypted HTTP.",
        "Making session identifiers predictable.",
        "Using unnecessarily long-lived sessions.",
      ],
      quiz: [
        {
          question:
            "What does the Secure cookie attribute help enforce?",
          options: [
            "The cookie is sent only over HTTPS",
            "The cookie is automatically encrypted with a public key",
            "The cookie can never expire",
            "The cookie becomes publicly readable",
          ],
          answer: "The cookie is sent only over HTTPS",
        },
        {
          question: "What does HttpOnly primarily help prevent?",
          options: [
            "Client-side JavaScript from directly reading the cookie",
            "The server from receiving the cookie",
            "HTTPS from being used",
            "The browser from storing any cookies",
          ],
          answer:
            "Client-side JavaScript from directly reading the cookie",
        },
        {
          question:
            "Why should session identifiers be unpredictable?",
          options: [
            "To make unauthorized guessing of valid sessions difficult",
            "To make webpages load faster",
            "To remove the need for passwords",
            "To increase database storage capacity",
          ],
          answer:
            "To make unauthorized guessing of valid sessions difficult",
        },
      ],
    },
  },

  {
    id: "security-headers",
    title: "Security Headers",
    icon: "🛡️",
    lesson: {
      overview:
        "Understand HTTP security headers and how they provide browser-enforced security controls.",
      sections: [
        {
          heading: "What are Security Headers?",
          points: [
            "Security headers are HTTP response headers that can instruct browsers to apply security-related behavior.",
            "They can provide additional defenses against several categories of web attacks.",
            "Correct configuration depends on the application's requirements.",
          ],
        },
        {
          heading: "Important Headers",
          points: [
            "Content-Security-Policy can restrict which resources a browser is allowed to load or execute.",
            "Strict-Transport-Security can instruct browsers to use HTTPS for a site.",
            "X-Content-Type-Options can help prevent MIME-type sniffing in supported browsers.",
          ],
        },
        {
          heading: "Defense in Depth",
          points: [
            "Security headers complement secure application design.",
            "They should not replace input validation, output encoding, authentication, or authorization.",
            "Headers should be tested carefully because overly restrictive policies can break legitimate application functionality.",
          ],
        },
      ],
      mistakes: [
        "Treating security headers as a replacement for secure coding.",
        "Deploying restrictive policies without testing the application.",
        "Assuming every browser handles every security header identically.",
      ],
      quiz: [
        {
          question:
            "What is the primary purpose of Content-Security-Policy?",
          options: [
            "To restrict which resources and content a browser may load or execute",
            "To store user passwords",
            "To replace database authentication",
            "To assign IP addresses",
          ],
          answer:
            "To restrict which resources and content a browser may load or execute",
        },
        {
          question:
            "Which header can instruct browsers to prefer HTTPS connections?",
          options: [
            "Strict-Transport-Security",
            "Content-Type",
            "Accept-Language",
            "Cache-Control",
          ],
          answer: "Strict-Transport-Security",
        },
        {
          question:
            "Why should security headers be considered defense in depth?",
          options: [
            "They supplement rather than replace secure application controls",
            "They eliminate the need for authentication",
            "They automatically patch every vulnerability",
            "They replace the application's backend",
          ],
          answer:
            "They supplement rather than replace secure application controls",
        },
      ],
    },
  },

  {
    id: "input-validation-output-encoding",
    title: "Input Validation & Output Encoding",
    icon: "📤",
    lesson: {
      overview:
        "Learn how applications should validate incoming data and safely encode output according to its destination context.",
      sections: [
        {
          heading: "Input Validation",
          points: [
            "Input validation checks whether supplied data meets expected requirements.",
            "Validation can include data type, length, range, format, and allowed values.",
            "Server-side validation is essential because client-side controls can be bypassed.",
          ],
        },
        {
          heading: "Allowlisting",
          points: [
            "Allowlisting defines what input is acceptable and rejects values outside the expected set.",
            "It is often preferable to relying only on attempts to identify every possible malicious input.",
            "Validation rules should match the application's actual requirements.",
          ],
        },
        {
          heading: "Output Encoding",
          points: [
            "Output encoding transforms data so it is interpreted safely in its destination context.",
            "HTML, JavaScript, URL, and other contexts can require different encoding approaches.",
            "Output encoding is an important defense against injection vulnerabilities such as XSS.",
          ],
        },
      ],
      mistakes: [
        "Validating only in the browser.",
        "Using the same encoding method for every output context.",
        "Assuming validation can replace parameterized database queries.",
      ],
      quiz: [
        {
          question:
            "Why is server-side input validation necessary?",
          options: [
            "Client-side validation can be bypassed",
            "Servers cannot receive validated input",
            "Browsers cannot send forms",
            "Databases require unvalidated input",
          ],
          answer: "Client-side validation can be bypassed",
        },
        {
          question: "What does allowlisting generally mean?",
          options: [
            "Defining and accepting an expected set of valid values",
            "Accepting every possible input",
            "Blocking every network request",
            "Encrypting all HTML pages",
          ],
          answer:
            "Defining and accepting an expected set of valid values",
        },
        {
          question:
            "Why must output encoding be appropriate to its context?",
          options: [
            "Different output contexts interpret characters differently",
            "All output contexts use identical syntax",
            "Encoding is only needed for images",
            "Context never affects how data is interpreted",
          ],
          answer:
            "Different output contexts interpret characters differently",
        },
      ],
    },
  },

  {
    id: "access-control-vulnerabilities",
    title: "Access Control & Common Web Vulnerabilities",
    icon: "🚪",
    lesson: {
      overview:
        "Understand authorization failures and common web application vulnerabilities involving improper access to resources and functionality.",
      sections: [
        {
          heading: "Authentication vs Authorization",
          points: [
            "Authentication determines who a user or system is.",
            "Authorization determines what an authenticated identity is allowed to access or perform.",
            "A correctly authenticated user can still be unauthorized to perform a particular action.",
          ],
        },
        {
          heading: "Access Control Failures",
          points: [
            "Applications should enforce authorization on the server.",
            "Access checks should apply to every sensitive operation and resource.",
            "Changing an identifier in a request should not allow a user to access another user's data.",
          ],
        },
        {
          heading: "Common Vulnerabilities",
          points: [
            "Broken access control can expose functionality or data to unauthorized users.",
            "Security misconfiguration can create unnecessary exposure.",
            "Insecure direct object references are a common example of access-control problems involving object identifiers.",
          ],
        },
      ],
      mistakes: [
        "Relying on hidden buttons or frontend controls for authorization.",
        "Assuming authentication automatically grants access to every resource.",
        "Failing to test authorization for different user roles.",
      ],
      quiz: [
        {
          question: "What does authorization determine?",
          options: [
            "What an authenticated identity is allowed to access or perform",
            "Whether a password contains a number",
            "Whether a server has an IP address",
            "Whether a browser can display HTML",
          ],
          answer:
            "What an authenticated identity is allowed to access or perform",
        },
        {
          question:
            "Where should important access-control decisions be enforced?",
          options: [
            "On the server",
            "Only in the browser interface",
            "Only in CSS",
            "Only in the page title",
          ],
          answer: "On the server",
        },
        {
          question:
            "What can happen if an application allows users to change an object identifier without checking authorization?",
          options: [
            "A user may access another user's resource",
            "The browser automatically updates its operating system",
            "The database becomes encrypted",
            "The application becomes immune to XSS",
          ],
          answer:
            "A user may access another user's resource",
        },
      ],
    },
  },

  {
    id: "secure-web-practices",
    title: "Secure Web Application Practices",
    icon: "🔒",
    lesson: {
      overview:
        "Bring together secure coding, authentication, authorization, data protection, dependency management, testing, and monitoring.",
      sections: [
        {
          heading: "Secure Development",
          points: [
            "Security should be considered during requirements, design, development, testing, deployment, and maintenance.",
            "Developers should use established security libraries and frameworks appropriately.",
            "Security-sensitive code should receive careful review and testing.",
          ],
        },
        {
          heading: "Protecting Sensitive Data",
          points: [
            "Sensitive data should be protected according to its classification and risk.",
            "HTTPS should be used to protect data in transit.",
            "Passwords should be stored using appropriate password-hashing mechanisms rather than plaintext.",
          ],
        },
        {
          heading: "Monitoring and Maintenance",
          points: [
            "Applications should log security-relevant events appropriately.",
            "Dependencies and infrastructure should be kept up to date.",
            "Security testing can identify vulnerabilities before and after deployment.",
          ],
        },
        {
          heading: "Defense in Depth",
          points: [
            "No single security control should be expected to stop every threat.",
            "Multiple complementary controls reduce the likelihood and impact of security failures.",
            "Secure defaults and least privilege should be used wherever practical.",
          ],
        },
      ],
      mistakes: [
        "Treating security as something to add only after development is finished.",
        "Hard-coding passwords, API keys, or other secrets into source code.",
        "Ignoring dependency updates and security testing.",
      ],
      quiz: [
        {
          question:
            "When should security be considered in a web application?",
          options: [
            "Throughout the development and maintenance lifecycle",
            "Only after a security incident",
            "Only after deployment",
            "Only when users report a problem",
          ],
          answer:
            "Throughout the development and maintenance lifecycle",
        },
        {
          question:
            "How should application passwords normally be stored?",
          options: [
            "Using an appropriate password-hashing mechanism",
            "As plaintext strings",
            "Inside HTML comments",
            "In browser URLs",
          ],
          answer:
            "Using an appropriate password-hashing mechanism",
        },
        {
          question: "What does defense in depth mean?",
          options: [
            "Using multiple complementary security controls",
            "Using only one security control",
            "Disabling authentication",
            "Keeping security controls hidden from developers",
          ],
          answer: "Using multiple complementary security controls",
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
// WEB SECURITY COMPONENT
// =====================================================

function WebSecurity({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-web-security", subtopics);

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
  // CURRENT LESSON DATA
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
            🌍 Web Security
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn how to identify and prevent common web
            application security vulnerabilities.
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

            {/* WRONG ANSWER */}

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

            {/* CORRECT ANSWER */}

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

export default WebSecurity;