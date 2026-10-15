import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "web-security-basics",
    title: "Web Security Basics",
    icon: "🛡️",
    lesson: {
      overview:
        "Web security is the practice of protecting websites, APIs, users, servers, and data from unauthorized access, manipulation, and attacks. Full stack developers need to understand common vulnerabilities and basic defensive practices.",
      sections: [
        {
          title: "Security Fundamentals",
          points: [
            "Security protects the confidentiality, integrity, and availability of application data and services.",
            "Every part of a full stack application can introduce security risks.",
            "The frontend, backend, database, APIs, dependencies, and deployment environment all need appropriate protection.",
            "Security should be considered throughout development rather than added only at the end.",
          ],
        },
        {
          title: "Common Web Threats",
          points: [
            "XSS can allow attacker-controlled scripts to execute in a user's browser.",
            "CSRF can cause a user's browser to send unwanted authenticated requests.",
            "SQL injection can manipulate poorly constructed database queries.",
            "Broken authentication and authorization can expose protected resources.",
          ],
        },
        {
          title: "Defense in Depth",
          points: [
            "Defense in depth means using multiple security controls rather than relying on one mechanism.",
            "Input validation, secure authentication, authorization, HTTPS, secure headers, and database protections can work together.",
            "If one security layer fails, another layer can reduce the impact.",
            "Security controls should be applied according to the application's risks.",
          ],
        },
        {
          title: "Least Privilege",
          points: [
            "Users and application components should receive only the permissions they need.",
            "Database accounts should not automatically have unrestricted privileges.",
            "Administrative functionality should be carefully protected.",
            "Reducing unnecessary privileges limits the impact of compromised accounts or components.",
          ],
        },
      ],
      mistakes: [
        "Do not assume frontend validation makes an application secure.",
        "Do not expose secrets in frontend code.",
        "Do not give every user or service unnecessary privileges.",
        "Do not ignore security because an application is small.",
      ],
      quiz: [
        {
          question: "What is a major goal of web security?",
          options: [
            "Protect application data and resources",
            "Make websites load only images",
            "Remove all application features",
            "Change the browser's theme",
          ],
          answer: "Protect application data and resources",
        },
        {
          question: "What does defense in depth mean?",
          options: [
            "Using multiple security controls",
            "Using only one security mechanism",
            "Removing authentication",
            "Allowing unrestricted access",
          ],
          answer: "Using multiple security controls",
        },
        {
          question: "What does least privilege mean?",
          options: [
            "Give only the permissions that are needed",
            "Give everyone administrator access",
            "Disable all permissions",
            "Allow unrestricted database access",
          ],
          answer: "Give only the permissions that are needed",
        },
      ],
    },
  },

  {
    id: "https",
    title: "HTTPS & TLS",
    icon: "🔒",
    lesson: {
      overview:
        "HTTPS protects HTTP communication by using TLS. It helps protect data while it travels between clients and servers and allows clients to verify the identity of the server.",
      sections: [
        {
          title: "HTTP vs HTTPS",
          points: [
            "HTTP sends application traffic without TLS protection.",
            "HTTPS is HTTP transmitted through a TLS-secured connection.",
            "HTTPS helps protect sensitive information while it is being transmitted.",
            "Modern web applications should use HTTPS in production.",
          ],
        },
        {
          title: "TLS",
          points: [
            "TLS stands for Transport Layer Security.",
            "TLS provides encryption and integrity protection for network communication.",
            "TLS also enables authentication of the server through certificates.",
            "TLS helps prevent attackers from simply reading or modifying protected traffic in transit.",
          ],
        },
        {
          title: "Certificates",
          points: [
            "TLS certificates are used to establish the identity of a server.",
            "Certificates are issued by trusted certificate authorities.",
            "A browser can verify whether a certificate is valid and appropriate for the requested domain.",
            "Expired or incorrectly configured certificates can cause security warnings.",
          ],
        },
        {
          title: "HTTPS in Full Stack Applications",
          points: [
            "Login credentials and authentication tokens should be protected during transmission.",
            "APIs should use HTTPS in production.",
            "Secure cookies can be configured to require HTTPS transmission.",
            "HTTPS should be used consistently rather than only on selected pages.",
          ],
        },
      ],
      mistakes: [
        "Do not send passwords over plain HTTP.",
        "Do not ignore invalid TLS certificate warnings in production.",
        "Do not assume HTTPS replaces application-level authorization.",
        "Do not mix insecure and secure application resources unnecessarily.",
      ],
      quiz: [
        {
          question: "What does HTTPS use to secure HTTP communication?",
          options: ["TLS", "CSS", "SQL", "DNS"],
          answer: "TLS",
        },
        {
          question: "What does TLS help protect?",
          options: [
            "Data while it is transmitted",
            "Only database table names",
            "Only CSS files",
            "Only browser bookmarks",
          ],
          answer: "Data while it is transmitted",
        },
        {
          question: "What helps a browser verify a server's identity in TLS?",
          options: [
            "TLS certificate",
            "CSS selector",
            "Database index",
            "HTML comment",
          ],
          answer: "TLS certificate",
        },
      ],
    },
  },

  {
    id: "cors",
    title: "CORS",
    icon: "🌐",
    lesson: {
      overview:
        "Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether web pages can make certain requests to resources on another origin. Correct CORS configuration is important for frontend and backend applications communicating across origins.",
      sections: [
        {
          title: "What is an Origin?",
          points: [
            "An origin is determined by the scheme, host, and port of a URL.",
            "Two URLs with different origins are considered cross-origin.",
            "A frontend and backend deployed on different origins may need CORS configuration.",
            "CORS is primarily enforced by browsers.",
          ],
        },
        {
          title: "CORS Headers",
          points: [
            "Servers can use response headers to indicate which origins are allowed.",
            "Access-Control-Allow-Origin specifies allowed origins.",
            "Other CORS headers can control methods, headers, and credentials.",
            "CORS configuration should match the application's actual requirements.",
          ],
        },
        {
          title: "Credentials",
          points: [
            "Cross-origin requests involving credentials require appropriate configuration.",
            "Cookies are one example of credentials that may be involved in cross-origin requests.",
            "Credentialed requests require both client and server configuration.",
            "Wildcard origins should not be used carelessly with credentials.",
          ],
        },
        {
          title: "CORS vs Authentication",
          points: [
            "CORS is a browser access-control mechanism.",
            "CORS does not replace authentication.",
            "CORS does not determine whether a user has permission to perform an operation.",
            "Backend authentication and authorization must still protect sensitive resources.",
          ],
        },
      ],
      mistakes: [
        "Do not allow every origin unnecessarily.",
        "Do not treat CORS as authentication.",
        "Do not assume disabling CORS makes an API secure.",
        "Do not configure credentialed requests carelessly.",
      ],
      quiz: [
        {
          question: "What does CORS control?",
          options: [
            "Browser access to cross-origin resources",
            "Database table creation",
            "Password hashing",
            "CSS animation speed",
          ],
          answer: "Browser access to cross-origin resources",
        },
        {
          question: "Which header specifies allowed origins?",
          options: [
            "Access-Control-Allow-Origin",
            "Content-Type",
            "Authorization",
            "Cache-Control",
          ],
          answer: "Access-Control-Allow-Origin",
        },
        {
          question: "Does CORS replace authentication?",
          options: [
            "No",
            "Yes",
            "Only for GET requests",
            "Only during development",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "xss",
    title: "Cross-Site Scripting (XSS)",
    icon: "⚠️",
    lesson: {
      overview:
        "Cross-Site Scripting (XSS) occurs when attacker-controlled content is executed as script in a user's browser. Proper output handling, safe rendering, validation, and security controls help reduce XSS risks.",
      sections: [
        {
          title: "What is XSS?",
          points: [
            "XSS occurs when untrusted content is interpreted as executable script in a user's browser.",
            "Attackers may attempt to inject malicious content into pages.",
            "XSS can affect users who view compromised content.",
            "The impact can include unauthorized actions or exposure of accessible browser data.",
          ],
        },
        {
          title: "Types of XSS",
          points: [
            "Stored XSS occurs when malicious content is stored and later displayed to users.",
            "Reflected XSS occurs when malicious input is reflected through a response.",
            "DOM-based XSS occurs when client-side code unsafely handles untrusted data.",
            "The underlying problem is unsafe handling of untrusted content.",
          ],
        },
        {
          title: "Preventing XSS",
          points: [
            "Treat user-provided data as untrusted.",
            "Use framework features that safely escape rendered content.",
            "Avoid inserting untrusted HTML directly into pages.",
            "Sanitize HTML when an application genuinely needs to accept HTML content.",
          ],
        },
        {
          title: "Content Security Policy",
          points: [
            "Content Security Policy (CSP) can restrict which sources of content a browser may load or execute.",
            "CSP can provide an additional defense against certain XSS attacks.",
            "A strong CSP should be designed according to the application's requirements.",
            "CSP is an additional security layer rather than a replacement for safe coding.",
          ],
        },
      ],
      mistakes: [
        "Do not render untrusted HTML directly.",
        "Do not assume all user input is safe.",
        "Do not rely on CSP alone to prevent XSS.",
        "Do not disable framework escaping without understanding the security consequences.",
      ],
      quiz: [
        {
          question: "What is XSS?",
          options: [
            "Injection of attacker-controlled script into web content",
            "A database backup technique",
            "A network routing protocol",
            "A CSS layout system",
          ],
          answer: "Injection of attacker-controlled script into web content",
        },
        {
          question: "Which type of XSS stores malicious content on the application?",
          options: [
            "Stored XSS",
            "Reflected XSS",
            "TLS XSS",
            "Database XSS",
          ],
          answer: "Stored XSS",
        },
        {
          question: "What is one additional defense against XSS?",
          options: [
            "Content Security Policy",
            "Disabling HTTPS",
            "Removing authentication",
            "Using plain-text passwords",
          ],
          answer: "Content Security Policy",
        },
      ],
    },
  },

  {
    id: "csrf",
    title: "Cross-Site Request Forgery (CSRF)",
    icon: "🚨",
    lesson: {
      overview:
        "Cross-Site Request Forgery (CSRF) is an attack where a user's browser is tricked into sending an unwanted request to an application in which the user is authenticated.",
      sections: [
        {
          title: "How CSRF Works",
          points: [
            "A user may already be authenticated to a web application.",
            "An attacker-controlled website can attempt to cause the user's browser to send a request to the target application.",
            "If the application accepts the request without sufficient protection, an unwanted action may occur.",
            "Cookie-based authentication can require specific CSRF defenses.",
          ],
        },
        {
          title: "CSRF Tokens",
          points: [
            "A CSRF token is an unpredictable value associated with the user's session or request.",
            "The application verifies the token before accepting protected state-changing requests.",
            "An attacker on another site should not be able to obtain the correct token.",
            "CSRF tokens are commonly used for applications that rely on cookies for authentication.",
          ],
        },
        {
          title: "SameSite Cookies",
          points: [
            "SameSite cookie settings can reduce cross-site cookie transmission.",
            "Strict and Lax policies provide different levels of cross-site behavior.",
            "SameSite should be configured based on the application's requirements.",
            "It can provide an additional layer of CSRF defense.",
          ],
        },
        {
          title: "CSRF and APIs",
          points: [
            "CSRF risk depends on how authentication credentials are automatically attached to requests.",
            "Applications using cookies require careful CSRF consideration.",
            "Token-based authentication has different threat considerations depending on how tokens are stored and sent.",
            "Security decisions should be based on the complete authentication architecture.",
          ],
        },
      ],
      mistakes: [
        "Do not assume that authentication automatically prevents CSRF.",
        "Do not ignore CSRF for cookie-authenticated applications.",
        "Do not use predictable CSRF tokens.",
        "Do not treat SameSite as a reason to ignore all other security controls.",
      ],
      quiz: [
        {
          question: "What does CSRF attempt to cause?",
          options: [
            "An unwanted authenticated request",
            "A database backup",
            "A CSS animation",
            "A browser update",
          ],
          answer: "An unwanted authenticated request",
        },
        {
          question: "What can be used to defend against CSRF?",
          options: [
            "CSRF tokens",
            "Plain-text passwords",
            "Removing HTTPS",
            "Public database credentials",
          ],
          answer: "CSRF tokens",
        },
        {
          question: "Which cookie setting can help reduce CSRF risk?",
          options: ["SameSite", "FontSize", "Color", "Border"],
          answer: "SameSite",
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
        "SQL injection occurs when untrusted input is incorporated into SQL queries in an unsafe way, allowing an attacker to alter the intended query. Parameterized queries and proper database APIs are important defenses.",
      sections: [
        {
          title: "What is SQL Injection?",
          points: [
            "SQL injection is caused by unsafe construction of SQL queries using untrusted input.",
            "An attacker may manipulate input so that it changes the intended meaning of a query.",
            "The impact can include unauthorized data access or modification.",
            "SQL injection is a backend and database security issue.",
          ],
        },
        {
          title: "Parameterized Queries",
          points: [
            "Parameterized queries separate SQL structure from user-provided values.",
            "The database driver handles the supplied values as data rather than query syntax.",
            "This significantly reduces SQL injection risk when used correctly.",
            "Prepared statements are a common implementation of parameterized queries.",
          ],
        },
        {
          title: "ORMs and Query Builders",
          points: [
            "ORMs and query builders can provide safer database interaction patterns.",
            "They do not automatically make every database operation secure.",
            "Raw SQL features can still require careful handling.",
            "Developers should understand how their chosen database library constructs queries.",
          ],
        },
        {
          title: "Database Privileges",
          points: [
            "Database users should have only the permissions required by the application.",
            "Restricting privileges can limit the impact of a successful injection attack.",
            "Sensitive administrative database accounts should not be used by normal application code.",
            "Defense in depth is important even when queries are parameterized.",
          ],
        },
      ],
      mistakes: [
        "Do not concatenate raw user input directly into SQL queries.",
        "Do not assume an ORM makes every query automatically safe.",
        "Do not use a database administrator account for routine application queries.",
        "Do not rely only on input filtering as the primary SQL injection defense.",
      ],
      quiz: [
        {
          question: "What commonly causes SQL injection?",
          options: [
            "Unsafe construction of SQL queries with untrusted input",
            "Using HTTPS",
            "Using password hashing",
            "Using CSS selectors",
          ],
          answer: "Unsafe construction of SQL queries with untrusted input",
        },
        {
          question: "What is a major defense against SQL injection?",
          options: [
            "Parameterized queries",
            "Plain-text passwords",
            "Disabling authentication",
            "Removing database permissions",
          ],
          answer: "Parameterized queries",
        },
        {
          question: "Why should application database accounts use limited privileges?",
          options: [
            "To reduce the impact of a compromise",
            "To make CSS faster",
            "To increase browser storage",
            "To remove all database tables",
          ],
          answer: "To reduce the impact of a compromise",
        },
      ],
    },
  },

  {
    id: "input-validation",
    title: "Input Validation & Sanitization",
    icon: "🧹",
    lesson: {
      overview:
        "Input validation checks whether supplied data meets expected rules. Sanitization transforms data to make it safer for a particular context. Both are useful parts of secure application development.",
      sections: [
        {
          title: "Input Validation",
          points: [
            "Validation checks whether data has the expected type, format, length, and range.",
            "For example, an email field can be checked for an expected email format.",
            "Validation rules should be enforced on the backend for security-sensitive operations.",
            "Frontend validation can improve user experience but should not be trusted as the security boundary.",
          ],
        },
        {
          title: "Allowlisting",
          points: [
            "Allowlisting defines what values or formats are acceptable.",
            "It is often safer than attempting to list every possible malicious value.",
            "Examples include allowing only known file extensions or predefined role values.",
            "Validation should match the actual business requirements.",
          ],
        },
        {
          title: "Sanitization",
          points: [
            "Sanitization modifies data to remove or neutralize unsafe content for a particular context.",
            "The correct sanitization strategy depends on where the data will be used.",
            "HTML content, SQL values, URLs, and shell commands have different security requirements.",
            "Context-aware security controls are important.",
          ],
        },
        {
          title: "Validation Layers",
          points: [
            "Frontend validation can provide immediate feedback.",
            "Backend validation should enforce security and business rules.",
            "Database constraints can provide additional protection.",
            "Multiple layers reduce the chance that invalid data reaches sensitive operations.",
          ],
        },
      ],
      mistakes: [
        "Do not rely only on frontend validation.",
        "Do not assume one sanitizer works for every context.",
        "Do not accept unrestricted file uploads without appropriate controls.",
        "Do not confuse validation with authorization.",
      ],
      quiz: [
        {
          question: "What does input validation check?",
          options: [
            "Whether data follows expected rules",
            "Whether CSS is colorful",
            "Whether a browser is updated",
            "Whether a server has a monitor",
          ],
          answer: "Whether data follows expected rules",
        },
        {
          question: "Where should security-critical validation be enforced?",
          options: [
            "Backend",
            "Only frontend",
            "Only CSS",
            "Only browser extensions",
          ],
          answer: "Backend",
        },
        {
          question: "Why is sanitization context-dependent?",
          options: [
            "Different output contexts have different security requirements",
            "All data is always unsafe",
            "CSS controls database access",
            "Browsers cannot process text",
          ],
          answer:
            "Different output contexts have different security requirements",
        },
      ],
    },
  },

  {
    id: "security-headers",
    title: "Security Headers",
    icon: "📋",
    lesson: {
      overview:
        "HTTP security headers allow servers to communicate security-related policies to browsers. Correctly configured headers can provide additional protection against common web attacks.",
      sections: [
        {
          title: "Content-Security-Policy",
          points: [
            "Content-Security-Policy (CSP) controls which content sources browsers are allowed to load or execute.",
            "CSP can help reduce the impact of some XSS attacks.",
            "Policies can specify allowed script, style, image, and other resource sources.",
            "CSP should be designed carefully so that required application functionality continues to work.",
          ],
        },
        {
          title: "Strict-Transport-Security",
          points: [
            "HTTP Strict Transport Security (HSTS) tells browsers to use HTTPS for a domain for a specified period.",
            "It can help prevent accidental use of insecure HTTP connections.",
            "HSTS should be configured carefully for production domains.",
            "It is particularly useful for applications that should always use HTTPS.",
          ],
        },
        {
          title: "Other Security Headers",
          points: [
            "X-Content-Type-Options can help prevent MIME-type sniffing.",
            "Referrer-Policy controls how much referrer information is sent.",
            "Permissions-Policy can control access to certain browser features.",
            "Security headers complement secure application coding practices.",
          ],
        },
        {
          title: "Header Configuration",
          points: [
            "Headers can often be configured at the web server, reverse proxy, or application layer.",
            "Security header configuration should be tested after deployment.",
            "Different applications may require different policies.",
            "Incorrectly configured headers can break legitimate functionality.",
          ],
        },
      ],
      mistakes: [
        "Do not copy security headers without understanding what they do.",
        "Do not assume security headers fix insecure application code.",
        "Do not deploy a restrictive CSP without testing application behavior.",
        "Do not forget that headers should be applied consistently to relevant responses.",
      ],
      quiz: [
        {
          question: "What can Content-Security-Policy help reduce?",
          options: [
            "Certain XSS risks",
            "Database storage requirements",
            "CPU temperature",
            "Image file size",
          ],
          answer: "Certain XSS risks",
        },
        {
          question: "What does HSTS encourage browsers to use?",
          options: [
            "HTTPS",
            "FTP",
            "Plain HTTP",
            "Telnet",
          ],
          answer: "HTTPS",
        },
        {
          question: "What can Referrer-Policy control?",
          options: [
            "How much referrer information is sent",
            "Password hashing strength",
            "Database indexing",
            "CSS layout",
          ],
          answer: "How much referrer information is sent",
        },
      ],
    },
  },

  {
    id: "secure-auth",
    title: "Secure Authentication Practices",
    icon: "🔐",
    lesson: {
      overview:
        "Authentication systems handle highly sensitive information and therefore require strong security practices. Secure password handling, session management, rate limiting, and careful credential management are important parts of authentication security.",
      sections: [
        {
          title: "Password Security",
          points: [
            "Passwords should be stored using an appropriate password hashing algorithm.",
            "Passwords should never be stored in plain text.",
            "Users should be encouraged to use strong and unique passwords.",
            "Password reset mechanisms should also be designed securely.",
          ],
        },
        {
          title: "Session Security",
          points: [
            "Authentication sessions should have appropriate expiration and invalidation behavior.",
            "Cookies containing authentication state should use appropriate security attributes.",
            "Session identifiers should be difficult to guess.",
            "Sensitive session information should not be unnecessarily exposed to client-side scripts.",
          ],
        },
        {
          title: "Brute Force Protection",
          points: [
            "Attackers may repeatedly attempt passwords against login endpoints.",
            "Rate limiting can restrict excessive authentication attempts.",
            "Applications can monitor suspicious authentication activity.",
            "Additional authentication factors can provide another layer of protection.",
          ],
        },
        {
          title: "Secrets Management",
          points: [
            "Authentication secrets and signing keys should not be committed to public source code.",
            "Environment variables or dedicated secret-management systems can be used appropriately.",
            "Production secrets should be managed separately from development credentials.",
            "Secrets should be rotated when necessary.",
          ],
        },
      ],
      mistakes: [
        "Never store passwords in plain text.",
        "Do not commit API keys or authentication secrets to Git.",
        "Do not create authentication endpoints without considering rate limiting.",
        "Do not use weak or predictable session identifiers.",
      ],
      quiz: [
        {
          question: "How should passwords be stored?",
          options: [
            "With a secure password hashing algorithm",
            "As plain text",
            "Inside HTML comments",
            "Inside CSS variables",
          ],
          answer: "With a secure password hashing algorithm",
        },
        {
          question: "What can help reduce brute-force login attempts?",
          options: [
            "Rate limiting",
            "Removing HTTPS",
            "Using predictable passwords",
            "Giving unlimited login attempts",
          ],
          answer: "Rate limiting",
        },
        {
          question: "Where should production authentication secrets be kept?",
          options: [
            "Secure secret-management mechanisms",
            "Public Git repositories",
            "Frontend source code",
            "HTML comments",
          ],
          answer: "Secure secret-management mechanisms",
        },
      ],
    },
  },

  {
    id: "security-projects",
    title: "Web Security Projects",
    icon: "💻",
    lesson: {
      overview:
        "Security projects help developers apply security concepts to realistic full stack applications. The goal is to identify risks, implement defenses, and verify that protected resources behave correctly.",
      sections: [
        {
          title: "Project 1: Secure Authentication System",
          points: [
            "Build registration and login functionality.",
            "Hash passwords securely.",
            "Implement sessions or token-based authentication.",
            "Protect authenticated resources.",
            "Add appropriate validation and rate limiting.",
          ],
        },
        {
          title: "Project 2: Secure REST API",
          points: [
            "Create protected API endpoints.",
            "Implement authentication and authorization.",
            "Validate request data on the backend.",
            "Use parameterized database queries.",
            "Configure appropriate CORS and security headers.",
          ],
        },
        {
          title: "Project 3: Security Testing",
          points: [
            "Test authentication failures.",
            "Test unauthorized access to protected resources.",
            "Test invalid and unexpected input.",
            "Review API responses and security headers.",
            "Check that secrets are not exposed to clients.",
          ],
        },
        {
          title: "Security Checklist",
          points: [
            "Use HTTPS in production.",
            "Hash passwords securely.",
            "Validate backend input.",
            "Use secure authentication and authorization.",
            "Protect database queries.",
            "Configure appropriate security headers.",
            "Keep dependencies and deployment environments maintained.",
          ],
        },
      ],
      mistakes: [
        "Do not build a security project that only checks frontend behavior.",
        "Do not expose test credentials or secrets in source code.",
        "Do not skip negative security tests.",
        "Do not assume that passing one security test means the application is completely secure.",
      ],
      quiz: [
        {
          question: "What should a secure API project include?",
          options: [
            "Authentication, authorization, validation, and secure database access",
            "Only a colorful frontend",
            "Only HTML pages",
            "Only CSS animations",
          ],
          answer:
            "Authentication, authorization, validation, and secure database access",
        },
        {
          question: "What should security testing include?",
          options: [
            "Testing invalid and unauthorized behavior",
            "Only testing successful requests",
            "Only testing page colors",
            "Only testing browser zoom",
          ],
          answer: "Testing invalid and unauthorized behavior",
        },
        {
          question: "Where should secrets be kept?",
          options: [
            "Secure configuration or secret-management systems",
            "Public frontend source code",
            "HTML comments",
            "Public README files",
          ],
          answer: "Secure configuration or secret-management systems",
        },
      ],
    },
  },
];

/* -------------------------------------------------------
   SHUFFLE QUIZ OPTIONS
   ------------------------------------------------------- */

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

function Security({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-security", subtopics);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});

  const [shuffledQuizOptions] = useState(() => {
    const shuffled = {};

    subtopics.forEach((topic) => {
      shuffled[topic.id] = topic.lesson.quiz.map((question) =>
        shuffleArray(question.options)
      );
    });

    return shuffled;
  });

  const completedCount = completed.length;

  const overallProgress = Math.round(
    (completedCount / subtopics.length) * 100
  );

  const selectedIndex = subtopics.findIndex(
    (topic) => topic.id === selectedSubtopic
  );

  const selectedTopic =
    selectedIndex >= 0 ? subtopics[selectedIndex] : null;

  const markComplete = (id) => {
    saveProgress(id);
  };

  const handleAnswer = (topicId, questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [`${topicId}-${questionIndex}`]: answer,
    }));
  };

  const submitQuiz = async (topicId) => {

    const topic = subtopics.find(
      (item) => item.id === topicId
    );

    if (!topic) return;

    const score = calculateQuizScore(topic);

    await saveQuizResult({
      subject: "Full Stack",
      role: "Full Stack Developer",
      topic: topic.title,
      topicId: topic.id,
      score,
      totalQuestions: topic.lesson.quiz.length
    });
    setQuizSubmitted((prev) => ({
      ...prev,
      [topicId]: true,
    }));
  };

  const calculateQuizScore = (topic) => {
    return topic.lesson.quiz.reduce((score, question, index) => {
      const selectedAnswer =
        quizAnswers[`${topic.id}-${index}`];

      return score + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);
  };

  const goToPreviousTopic = () => {
    if (selectedIndex > 0) {
      setSelectedSubtopic(subtopics[selectedIndex - 1].id);
    }
  };

  const goToNextTopic = () => {
    if (selectedIndex < subtopics.length - 1) {
      setSelectedSubtopic(subtopics[selectedIndex + 1].id);
    }
  };

  if (selectedTopic) {
    const topic = selectedTopic;

    const score = quizSubmitted[topic.id]
      ? calculateQuizScore(topic)
      : 0;

    const isFirstTopic = selectedIndex === 0;
    const isLastTopic =
      selectedIndex === subtopics.length - 1;

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
          padding: "30px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedSubtopic(null)}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "25px",
            }}
          >
            ← Back to Security
          </button>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 15px rgba(37, 99, 235, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "12px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "30px",
                  color: "#111827",
                }}
              >
                {topic.icon} {topic.title}
              </h1>

              <span
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  border: "1px solid #bfdbfe",
                  borderRadius: "20px",
                  padding: "7px 13px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Topic {selectedIndex + 1} of {subtopics.length}
              </span>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "#374151",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              {topic.lesson.overview}
            </p>

            {topic.lesson.sections.map((section, index) => (
              <div
                key={section.title}
                style={{
                  marginBottom: "28px",
                  padding: "22px",
                  background: "#f8fbff",
                  borderRadius: "14px",
                  border: "1px solid #dbeafe",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 14px",
                    color: "#1e3a8a",
                    fontSize: "21px",
                  }}
                >
                  {index + 1}. {section.title}
                </h2>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "22px",
                    color: "#374151",
                    lineHeight: "1.8",
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
                marginTop: "10px",
                padding: "22px",
                background: "#eff6ff",
                borderRadius: "14px",
                border: "1px solid #bfdbfe",
              }}
            >
              <h2
                style={{
                  margin: "0 0 14px",
                  color: "#1e3a8a",
                  fontSize: "21px",
                }}
              >
                ⚠️ Common Mistakes
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "22px",
                  color: "#374151",
                  lineHeight: "1.8",
                }}
              >
                {topic.lesson.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "35px" }}>
              <h2
                style={{
                  color: "#111827",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                📝 Quick Quiz
              </h2>

              {topic.lesson.quiz.map((question, questionIndex) => {
                const selectedAnswer =
                  quizAnswers[`${topic.id}-${questionIndex}`];

                const options =
                  shuffledQuizOptions[topic.id][questionIndex];

                return (
                  <div
                    key={question.question}
                    style={{
                      marginBottom: "24px",
                      padding: "22px",
                      borderRadius: "14px",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 15px",
                        color: "#111827",
                        fontSize: "17px",
                        lineHeight: "1.5",
                      }}
                    >
                      {questionIndex + 1}. {question.question}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {options.map((option) => (
                        <label
                          key={option}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            background:
                              selectedAnswer === option
                                ? "#dbeafe"
                                : "white",
                            border: "1px solid #dbeafe",
                          }}
                        >
                          <input
                            type="radio"
                            name={`${topic.id}-${questionIndex}`}
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() =>
                              handleAnswer(
                                topic.id,
                                questionIndex,
                                option
                              )
                            }
                          />

                          <span>{option}</span>
                        </label>
                      ))}
                    </div>

                    {quizSubmitted[topic.id] && (
                      <p
                        style={{
                          marginTop: "14px",
                          fontWeight: "600",
                          color:
                            selectedAnswer === question.answer
                              ? "#15803d"
                              : "#dc2626",
                        }}
                      >
                        {selectedAnswer === question.answer
                          ? "✅ Correct!"
                          : `❌ Incorrect. Correct answer: ${question.answer}`}
                      </p>
                    )}
                  </div>
                );
              })}

              <button
                onClick={() => submitQuiz(topic.id)}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 22px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Check Quiz
              </button>

              {quizSubmitted[topic.id] && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "16px",
                    background: "#eff6ff",
                    borderRadius: "10px",
                    border: "1px solid #bfdbfe",
                    color: "#1e3a8a",
                    fontWeight: "600",
                  }}
                >
                  🎯 Your Score: {score} / {topic.lesson.quiz.length}
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "35px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <button
                onClick={() => saveProgress(topic.id)}
                disabled={completed.includes(topic.id)}
                style={{
                  background: completed.includes(topic.id)
                    ? "#16a34a"
                    : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: completed.includes(topic.id)
                    ? "default"
                    : "pointer",
                }}
              >
                {completed.includes(topic.id)
                  ? "✅ Topic Completed"
                  : "✓ Mark Topic Complete"}
              </button>
            </div>

            <div
              style={{
                marginTop: "30px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={goToPreviousTopic}
                disabled={isFirstTopic}
                style={{
                  background: isFirstTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isFirstTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isFirstTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                ← Previous Topic
              </button>

              <button
                onClick={() => setSelectedSubtopic(null)}
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                📚 Back to Topics
              </button>

              <button
                onClick={goToNextTopic}
                disabled={isLastTopic}
                style={{
                  background: isLastTopic
                    ? "#e5e7eb"
                    : "#2563eb",
                  color: isLastTopic ? "#9ca3af" : "white",
                  border: "none",
                  borderRadius: "9px",
                  padding: "11px 18px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: isLastTopic
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                Next Topic →
              </button>
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#f8fbff",
                borderRadius: "10px",
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              {completed.includes(topic.id)
                ? "✅ You have completed this topic."
                : "📖 Complete this topic when you are ready to continue."}
            </div>
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
        padding: "30px 20px 60px",
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
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🛡️ Security
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn the fundamentals of web security and how to
          protect full stack applications from common attacks.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px 22px",
            marginBottom: "28px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
            border: "1px solid #dbeafe",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "21px",
              color: "#111827",
            }}
          >
            Overall Progress: {overallProgress}% 🎯
          </h2>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e5e7eb",
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
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <p
            style={{
              margin: "12px 0 0",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {completedCount} of {subtopics.length} topics completed
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {subtopics.map((topic, index) => {
            const progress = completed.includes(topic.id) ? 100 : 0;

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "25px 26px",
                  minHeight: "180px",
                  border: "1px solid #bfdbfe",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 4px",
                      fontSize: "20px",
                      color: "#111827",
                      lineHeight: "1.3",
                    }}
                  >
                    {index + 1}. {topic.icon} {topic.title}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: "16px",
                      color: "#111827",
                    }}
                  >
                    Progress: {progress}%
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: "13px",
                      background: "#e5e7eb",
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginBottom: "18px",
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

                <button
                  onClick={() =>
                    setSelectedSubtopic(topic.id)
                  }
                  style={{
                    alignSelf: "flex-start",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "9px",
                    padding: "11px 20px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {completed.includes(topic.id)
                    ? "Review Topic →"
                    : "Open Topic →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Security;