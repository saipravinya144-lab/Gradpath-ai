import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const subtopics = [
  {
    id: "auth-introduction",
    title: "Authentication & Authorization",
    icon: "🔐",
    lesson: {
      overview:
        "Authentication and authorization are security mechanisms used to control access to applications and resources. Authentication verifies who a user is, while authorization determines what that authenticated user is allowed to access.",
      sections: [
        {
          title: "Authentication",
          points: [
            "Authentication verifies the identity of a user or system.",
            "A user may authenticate using a password, token, biometric factor, or another credential.",
            "Successful authentication establishes an identity for the session or request.",
            "Login is a common example of authentication.",
          ],
        },
        {
          title: "Authorization",
          points: [
            "Authorization determines what an authenticated user is allowed to do.",
            "Permissions can control access to specific resources or actions.",
            "For example, an administrator may be allowed to delete users while a normal user cannot.",
            "Authorization should be enforced by the backend for protected resources.",
          ],
        },
        {
          title: "Authentication vs Authorization",
          points: [
            "Authentication answers: Who are you?",
            "Authorization answers: What are you allowed to do?",
            "Authentication normally happens before authorization.",
            "Both are important for securing applications.",
          ],
        },
        {
          title: "Typical Login Flow",
          points: [
            "The user submits login credentials.",
            "The backend verifies the credentials.",
            "The application establishes an authenticated state.",
            "Future requests can use a session or token to identify the user.",
          ],
        },
      ],
      mistakes: [
        "Do not confuse authentication with authorization.",
        "Do not rely only on frontend checks for access control.",
        "Never trust user-provided identity information without verification.",
        "Protected operations should be enforced on the backend.",
      ],
      quiz: [
        {
          question: "What does authentication verify?",
          options: [
            "User identity",
            "User interface color",
            "Database size",
            "Browser version",
          ],
          answer: "User identity",
        },
        {
          question: "What does authorization determine?",
          options: [
            "What a user is allowed to access",
            "Whether a password exists",
            "Which browser is installed",
            "What color the website uses",
          ],
          answer: "What a user is allowed to access",
        },
        {
          question: "Which question is answered by authentication?",
          options: [
            "Who are you?",
            "What can you delete?",
            "Which CSS file is loaded?",
            "Which database is largest?",
          ],
          answer: "Who are you?",
        },
      ],
    },
  },

  {
    id: "password-auth",
    title: "Password Authentication",
    icon: "🔑",
    lesson: {
      overview:
        "Password authentication allows users to prove their identity by providing a username or email and a password. A secure implementation requires careful handling of credentials throughout the authentication process.",
      sections: [
        {
          title: "Registration",
          points: [
            "A user provides account information during registration.",
            "The password should be processed securely before storage.",
            "The backend should validate the supplied information.",
            "Duplicate accounts should be handled appropriately.",
          ],
        },
        {
          title: "Login",
          points: [
            "The user provides their login identifier and password.",
            "The backend looks up the corresponding account.",
            "The supplied password is verified against the stored password representation.",
            "Successful verification results in an authenticated state.",
          ],
        },
        {
          title: "Password Requirements",
          points: [
            "Applications can enforce minimum password requirements.",
            "Passwords should not be stored as plain text.",
            "Users should be encouraged to use unique passwords.",
            "Authentication systems should also protect against excessive login attempts.",
          ],
        },
        {
          title: "Secure Login Flow",
          points: [
            "Credentials should be transmitted over HTTPS.",
            "Password verification should happen on the trusted backend.",
            "Authentication failures should not unnecessarily reveal sensitive account information.",
            "Authentication events should be handled consistently.",
          ],
        },
      ],
      mistakes: [
        "Never store passwords as plain text.",
        "Do not verify passwords only in frontend JavaScript.",
        "Do not send passwords over unencrypted connections.",
        "Do not reveal unnecessary information in login error messages.",
      ],
      quiz: [
        {
          question: "Where should password verification normally occur?",
          options: [
            "Trusted backend",
            "CSS file",
            "Browser title",
            "HTML comment",
          ],
          answer: "Trusted backend",
        },
        {
          question: "How should passwords be stored?",
          options: [
            "Using a secure password hashing mechanism",
            "As plain text",
            "Inside CSS",
            "Inside a public README",
          ],
          answer: "Using a secure password hashing mechanism",
        },
        {
          question: "What should protect passwords while being transmitted?",
          options: [
            "HTTPS",
            "CSS",
            "HTML comments",
            "Browser zoom",
          ],
          answer: "HTTPS",
        },
      ],
    },
  },

  {
    id: "hashing",
    title: "Password Hashing",
    icon: "🔒",
    lesson: {
      overview:
        "Password hashing converts passwords into one-way cryptographic representations suitable for secure storage. Modern password hashing algorithms are designed to make password cracking more difficult.",
      sections: [
        {
          title: "Hashing vs Encryption",
          points: [
            "Hashing is designed as a one-way operation.",
            "Encryption is designed so that data can be decrypted with the appropriate key.",
            "Passwords should generally be stored using password hashing rather than reversible encryption.",
            "A password hash should not be treated as the original password.",
          ],
        },
        {
          title: "Salt",
          points: [
            "A salt is additional random data used during password hashing.",
            "Salts help prevent identical passwords from producing identical stored hashes.",
            "Modern password hashing libraries generally handle salts automatically.",
            "A unique salt should be used for each password.",
          ],
        },
        {
          title: "Password Hashing Algorithms",
          points: [
            "bcrypt is a commonly used password hashing algorithm.",
            "Argon2 is another modern password hashing algorithm.",
            "Password hashing algorithms are intentionally designed to be computationally expensive.",
            "Applications should use established security libraries rather than implementing password hashing themselves.",
          ],
        },
        {
          title: "Verification",
          points: [
            "During login, the supplied password is checked against the stored hash.",
            "The application does not need to recover the original password.",
            "The password hashing library performs the appropriate verification process.",
            "Only the resulting verification outcome should determine whether login succeeds.",
          ],
        },
      ],
      mistakes: [
        "Do not store passwords as plain text.",
        "Do not use simple hashes such as raw MD5 for password storage.",
        "Do not implement password hashing algorithms from scratch.",
        "Do not reuse one salt for every password.",
      ],
      quiz: [
        {
          question: "What is the main purpose of password hashing?",
          options: [
            "Securely represent passwords for storage",
            "Display passwords publicly",
            "Compress website images",
            "Encrypt CSS files",
          ],
          answer: "Securely represent passwords for storage",
        },
        {
          question: "What is a salt used for in password hashing?",
          options: [
            "Add unique random data to password hashing",
            "Store passwords as plain text",
            "Create database tables",
            "Improve CSS rendering",
          ],
          answer: "Add unique random data to password hashing",
        },
        {
          question: "Which is a password hashing algorithm?",
          options: ["bcrypt", "HTTP", "HTML", "CSS"],
          answer: "bcrypt",
        },
      ],
    },
  },

  {
    id: "sessions",
    title: "Sessions & Cookies",
    icon: "🍪",
    lesson: {
      overview:
        "Sessions and cookies are commonly used to maintain authenticated state between HTTP requests. Because HTTP is stateless, applications need mechanisms to associate multiple requests with a user.",
      sections: [
        {
          title: "What is a Session?",
          points: [
            "A session represents authenticated state associated with a user.",
            "The server can maintain session information on the backend.",
            "A session identifier can be associated with the user's browser.",
            "The server uses the identifier to find the corresponding session.",
          ],
        },
        {
          title: "Cookies",
          points: [
            "Cookies are small pieces of data stored by a browser.",
            "Browsers can automatically send applicable cookies with requests.",
            "Cookies are commonly used to carry session identifiers.",
            "Cookie attributes can control how cookies are transmitted and accessed.",
          ],
        },
        {
          title: "Important Cookie Attributes",
          points: [
            "HttpOnly prevents JavaScript from directly reading the cookie.",
            "Secure restricts transmission to HTTPS connections.",
            "SameSite controls cross-site cookie behavior.",
            "Appropriate expiration settings can limit how long a cookie remains valid.",
          ],
        },
        {
          title: "Session Flow",
          points: [
            "The user logs in successfully.",
            "The server creates or updates a session.",
            "The browser receives a session cookie.",
            "The browser sends the cookie with later requests.",
            "The server uses the session information to identify the authenticated user.",
          ],
        },
      ],
      mistakes: [
        "Do not store sensitive information carelessly in cookies.",
        "Use Secure cookies when HTTPS is available.",
        "Understand HttpOnly and SameSite settings.",
        "Do not assume a cookie alone proves that a user should have access to every resource.",
      ],
      quiz: [
        {
          question: "What is commonly stored in a session cookie?",
          options: [
            "Session identifier",
            "Database table",
            "CSS stylesheet",
            "Entire application source code",
          ],
          answer: "Session identifier",
        },
        {
          question: "What does HttpOnly help prevent?",
          options: [
            "JavaScript directly reading the cookie",
            "The server receiving requests",
            "The browser loading CSS",
            "Users submitting forms",
          ],
          answer: "JavaScript directly reading the cookie",
        },
        {
          question: "Which cookie attribute restricts transmission to HTTPS?",
          options: ["Secure", "HttpOnly", "SameSite", "Path"],
          answer: "Secure",
        },
      ],
    },
  },

  {
    id: "jwt",
    title: "JWT Authentication",
    icon: "🎫",
    lesson: {
      overview:
        "JSON Web Tokens (JWTs) are compact tokens that can carry claims between parties. They are commonly used in authentication systems where a client presents a token with later requests.",
      sections: [
        {
          title: "What is a JWT?",
          points: [
            "JWT stands for JSON Web Token.",
            "A JWT commonly contains claims about a user or authentication context.",
            "JWTs are digitally signed so that the recipient can verify their integrity.",
            "A JWT is not automatically encrypted just because it is signed.",
          ],
        },
        {
          title: "JWT Structure",
          points: [
            "A typical JWT has three parts: header, payload, and signature.",
            "The header describes information such as the signing algorithm.",
            "The payload contains claims.",
            "The signature helps verify that the token has not been modified.",
          ],
        },
        {
          title: "JWT Authentication Flow",
          points: [
            "A user successfully authenticates.",
            "The server issues a JWT.",
            "The client stores the token according to the application's security design.",
            "The client sends the token with later requests.",
            "The server verifies the token before allowing protected operations.",
          ],
        },
        {
          title: "JWT Security",
          points: [
            "Tokens should have appropriate expiration times.",
            "Signing keys must be protected.",
            "Sensitive information should not be placed casually in the payload.",
            "Token storage must be chosen carefully based on the application's security requirements.",
          ],
        },
      ],
      mistakes: [
        "Do not assume a JWT payload is secret.",
        "Do not expose signing secrets.",
        "Do not create tokens with unnecessarily long lifetimes.",
        "Always verify JWTs on the backend before trusting their claims.",
      ],
      quiz: [
        {
          question: "What does JWT stand for?",
          options: [
            "JSON Web Token",
            "Java Web Transfer",
            "JavaScript Web Table",
            "JSON Website Technology",
          ],
          answer: "JSON Web Token",
        },
        {
          question: "Which three parts commonly make up a JWT?",
          options: [
            "Header, payload, signature",
            "HTML, CSS, JavaScript",
            "User, database, server",
            "Request, browser, screen",
          ],
          answer: "Header, payload, signature",
        },
        {
          question: "Does signing a JWT automatically encrypt its payload?",
          options: [
            "No",
            "Yes",
            "Only with CSS",
            "Only in development",
          ],
          answer: "No",
        },
      ],
    },
  },

  {
    id: "oauth",
    title: "OAuth & Social Login",
    icon: "🌐",
    lesson: {
      overview:
        "OAuth is an authorization framework that allows applications to obtain limited access to resources without requiring the user to give the application their external account password. Social login systems commonly build on OAuth-based flows.",
      sections: [
        {
          title: "What is OAuth?",
          points: [
            "OAuth is an authorization framework.",
            "It allows an application to obtain delegated access to resources.",
            "The user can authorize an application without sharing their external account password with that application.",
            "OAuth uses tokens to represent granted access.",
          ],
        },
        {
          title: "Social Login",
          points: [
            "Social login allows users to sign in using an existing account from an identity provider.",
            "The application redirects the user to the identity provider.",
            "The provider authenticates the user and obtains their authorization.",
            "The application receives the appropriate authorization result and can establish its own session.",
          ],
        },
        {
          title: "Authorization Code Flow",
          points: [
            "The client starts an authorization request.",
            "The user authenticates with the authorization server.",
            "An authorization code can be returned to the application.",
            "The application exchanges the code for tokens through the appropriate flow.",
          ],
        },
        {
          title: "OAuth and Passwords",
          points: [
            "The application should not ask for the user's external provider password directly.",
            "The identity provider handles authentication.",
            "The application receives tokens or identity information through the authorized flow.",
            "Correct redirect URI configuration is important for security.",
          ],
        },
      ],
      mistakes: [
        "Do not collect a user's external provider password yourself.",
        "Do not ignore redirect URI security.",
        "Do not expose client secrets where they do not belong.",
        "Understand the difference between authentication and OAuth authorization.",
      ],
      quiz: [
        {
          question: "What is OAuth primarily designed for?",
          options: [
            "Delegated authorization",
            "CSS styling",
            "Database normalization",
            "Image compression",
          ],
          answer: "Delegated authorization",
        },
        {
          question: "In social login, who normally authenticates the user?",
          options: [
            "Identity provider",
            "CSS framework",
            "Browser extension",
            "Database table",
          ],
          answer: "Identity provider",
        },
        {
          question: "What should an application avoid collecting during social login?",
          options: [
            "The user's external provider password",
            "A user display name",
            "An authorization result",
            "An account identifier",
          ],
          answer: "The user's external provider password",
        },
      ],
    },
  },

  {
    id: "roles-permissions",
    title: "Roles & Permissions",
    icon: "👥",
    lesson: {
      overview:
        "Roles and permissions provide a structured way to control what authenticated users can do in an application. They are an important part of authorization design.",
      sections: [
        {
          title: "Roles",
          points: [
            "A role represents a category of access.",
            "Common examples include user, editor, and administrator.",
            "A user can be assigned one or more roles depending on the application.",
            "Roles make it easier to manage groups of permissions.",
          ],
        },
        {
          title: "Permissions",
          points: [
            "A permission represents a specific allowed action.",
            "Examples include read, create, update, and delete.",
            "Permissions can be associated with roles.",
            "The backend should enforce permissions for protected operations.",
          ],
        },
        {
          title: "Role-Based Access Control",
          points: [
            "Role-Based Access Control (RBAC) assigns permissions through roles.",
            "Instead of assigning every permission separately to every user, permissions can be grouped into roles.",
            "This can simplify access management.",
            "The exact roles should reflect the application's requirements.",
          ],
        },
        {
          title: "Least Privilege",
          points: [
            "Users should receive only the access they need.",
            "Administrative privileges should be restricted.",
            "Permissions should be reviewed as applications evolve.",
            "Least privilege reduces the impact of compromised accounts.",
          ],
        },
      ],
      mistakes: [
        "Do not give every user administrator privileges.",
        "Do not rely only on frontend role checks.",
        "Do not create roles without defining their permissions.",
        "Follow the principle of least privilege.",
      ],
      quiz: [
        {
          question: "What does a role represent?",
          options: [
            "A category of access",
            "A CSS property",
            "A database engine",
            "A browser setting",
          ],
          answer: "A category of access",
        },
        {
          question: "What does a permission represent?",
          options: [
            "A specific allowed action",
            "A page color",
            "A database backup",
            "A JavaScript variable type",
          ],
          answer: "A specific allowed action",
        },
        {
          question: "What principle recommends giving users only the access they need?",
          options: [
            "Least privilege",
            "Maximum access",
            "Open access",
            "Default administration",
          ],
          answer: "Least privilege",
        },
      ],
    },
  },

  {
    id: "protected-routes",
    title: "Protected Routes",
    icon: "🛡️",
    lesson: {
      overview:
        "Protected routes restrict access to pages or API resources based on authentication and authorization. Full-stack applications should protect sensitive operations on the backend as well as controlling frontend navigation.",
      sections: [
        {
          title: "Frontend Protected Routes",
          points: [
            "A frontend can check whether a user appears to be authenticated before showing a page.",
            "Unauthenticated users can be redirected to a login page.",
            "Frontend protection improves navigation and user experience.",
            "Frontend checks alone are not sufficient security.",
          ],
        },
        {
          title: "Backend Protection",
          points: [
            "The backend must verify authentication for protected API endpoints.",
            "The server should verify the session or token.",
            "Authorization checks should be performed before protected operations.",
            "A user should never gain access simply by modifying frontend code.",
          ],
        },
        {
          title: "Middleware",
          points: [
            "Authentication middleware can verify credentials before a route handler runs.",
            "Authorization middleware can check roles or permissions.",
            "Middleware can prevent repeated authentication logic across routes.",
            "Clear middleware structure makes protected APIs easier to maintain.",
          ],
        },
        {
          title: "Example Flow",
          points: [
            "A user requests a protected resource.",
            "The server checks the authentication information.",
            "The server checks authorization if required.",
            "The request proceeds only when the required conditions are satisfied.",
          ],
        },
      ],
      mistakes: [
        "Never rely only on frontend route protection.",
        "Do not expose protected API data through unprotected endpoints.",
        "Do not skip authorization checks for sensitive operations.",
        "Keep authentication and authorization logic consistent.",
      ],
      quiz: [
        {
          question: "Where must sensitive API access control ultimately be enforced?",
          options: [
            "Backend",
            "CSS",
            "Browser theme",
            "HTML comments",
          ],
          answer: "Backend",
        },
        {
          question: "What can authentication middleware do?",
          options: [
            "Verify authentication before a route handler",
            "Change website colors",
            "Create CSS animations",
            "Resize images",
          ],
          answer: "Verify authentication before a route handler",
        },
        {
          question: "Why are frontend checks alone insufficient for security?",
          options: [
            "Users can modify or bypass frontend code",
            "CSS cannot contain colors",
            "HTML cannot contain buttons",
            "Browsers cannot display APIs",
          ],
          answer: "Users can modify or bypass frontend code",
        },
      ],
    },
  },

  {
    id: "auth-projects",
    title: "Authentication Projects",
    icon: "💻",
    lesson: {
      overview:
        "Authentication projects combine registration, login, password security, sessions or tokens, authorization, protected routes, and secure backend implementation.",
      sections: [
        {
          title: "Project 1: Login System",
          points: [
            "Create user registration and login.",
            "Validate user input.",
            "Hash passwords before storing them.",
            "Create an authenticated session after successful login.",
          ],
        },
        {
          title: "Project 2: JWT Authentication App",
          points: [
            "Create registration and login endpoints.",
            "Issue JWTs after successful authentication.",
            "Protect API routes using token verification.",
            "Implement logout or token expiration according to the chosen design.",
          ],
        },
        {
          title: "Project 3: Role-Based Application",
          points: [
            "Create different roles such as user and administrator.",
            "Define permissions for each role.",
            "Protect administrative routes.",
            "Test both authorized and unauthorized access.",
          ],
        },
        {
          title: "Project 4: Social Login",
          points: [
            "Integrate an identity provider.",
            "Implement the appropriate OAuth flow.",
            "Handle the authorization result securely.",
            "Create an application session after successful identity verification.",
          ],
        },
      ],
      mistakes: [
        "Do not store plain-text passwords.",
        "Do not expose authentication secrets.",
        "Do not rely only on frontend protection.",
        "Test invalid login, unauthorized access, and expired authentication states.",
        "Use secure configuration for secrets and credentials.",
      ],
      quiz: [
        {
          question: "What should a login project do before storing a user's password?",
          options: [
            "Hash the password",
            "Store it as plain text",
            "Put it in CSS",
            "Place it in a public README",
          ],
          answer: "Hash the password",
        },
        {
          question: "What should a role-based application define?",
          options: [
            "Roles and their permissions",
            "Only button colors",
            "Only page backgrounds",
            "Only image sizes",
          ],
          answer: "Roles and their permissions",
        },
        {
          question: "What should authentication projects test besides successful login?",
          options: [
            "Invalid and unauthorized cases",
            "Only successful login",
            "Only CSS rendering",
            "Only page animations",
          ],
          answer: "Invalid and unauthorized cases",
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

function Authentication({ goBack }) {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const { completed, markComplete: saveProgress } = useLearningProgress("fullstack-authentication", subtopics);
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
            ← Back to Authentication
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
          🔐 Authentication
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Learn how applications identify users, manage
          sessions and control access to protected resources.
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

export default Authentication;