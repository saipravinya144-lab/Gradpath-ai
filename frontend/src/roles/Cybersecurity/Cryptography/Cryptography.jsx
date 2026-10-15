import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// CRYPTOGRAPHY LESSONS
// =====================================================

const subtopics = [
  {
    id: "introduction-to-cryptography",
    title: "Introduction to Cryptography",
    icon: "🔐",
    lesson: {
      overview:
        "Learn the purpose of cryptography and the basic concepts used to protect information.",
      sections: [
        {
          heading: "What is Cryptography?",
          points: [
            "Cryptography is the practice of protecting information by transforming it so that only authorized parties can use or understand it.",
            "It is used to provide confidentiality, integrity, authentication, and non-repudiation.",
            "Cryptographic systems use algorithms together with keys to perform security operations.",
          ],
        },
        {
          heading: "Plaintext and Ciphertext",
          points: [
            "Plaintext is the original readable information.",
            "Ciphertext is the transformed information produced by encryption.",
            "Decryption converts ciphertext back into readable plaintext when the appropriate key is available.",
          ],
        },
        {
          heading: "Cryptographic Goals",
          points: [
            "Confidentiality prevents unauthorized parties from reading protected information.",
            "Integrity helps detect unauthorized modification of information.",
            "Authentication helps verify identities or the origin of information.",
            "Non-repudiation provides evidence that can help prevent a sender from denying a valid digital action.",
          ],
        },
      ],
      mistakes: [
        "Thinking encryption and hashing are the same operation.",
        "Assuming encryption alone guarantees every security property.",
        "Treating cryptographic algorithms and cryptographic keys as the same thing.",
      ],
      quiz: [
        {
          question: "What is plaintext?",
          options: [
            "The original readable information",
            "Encrypted network traffic",
            "A cryptographic key",
            "A digital certificate",
          ],
          answer: "The original readable information",
        },
        {
          question: "What is produced by encrypting plaintext?",
          options: [
            "Ciphertext",
            "Source code",
            "A user account",
            "A routing table",
          ],
          answer: "Ciphertext",
        },
        {
          question: "Which security goal focuses on preventing unauthorized reading of information?",
          options: [
            "Confidentiality",
            "Availability",
            "Logging",
            "Compression",
          ],
          answer: "Confidentiality",
        },
      ],
    },
  },

  {
    id: "symmetric-encryption",
    title: "Symmetric Encryption",
    icon: "🔑",
    lesson: {
      overview:
        "Understand symmetric encryption and how a shared secret key is used to protect information.",
      sections: [
        {
          heading: "How Symmetric Encryption Works",
          points: [
            "Symmetric encryption uses the same secret key for encryption and decryption.",
            "The sender encrypts plaintext using the secret key.",
            "The recipient uses the corresponding secret key to decrypt the ciphertext.",
          ],
        },
        {
          heading: "Examples",
          points: [
            "AES is a widely used symmetric encryption algorithm.",
            "ChaCha20 is another modern symmetric encryption algorithm.",
            "Symmetric encryption is commonly used because it can efficiently protect large amounts of data.",
          ],
        },
        {
          heading: "Key Management",
          points: [
            "The secret key must be protected from unauthorized access.",
            "Securely sharing a secret key between parties can be a challenge.",
            "Weak or exposed keys can undermine otherwise strong encryption.",
          ],
        },
      ],
      mistakes: [
        "Assuming the encryption key can safely be shared publicly.",
        "Confusing symmetric encryption with asymmetric encryption.",
        "Using outdated or inappropriate encryption algorithms.",
      ],
      quiz: [
        {
          question:
            "What key relationship is characteristic of symmetric encryption?",
          options: [
            "The same secret key is used for encryption and decryption",
            "A public key is always used for encryption and decryption",
            "No key is required",
            "A different public key is required for every character",
          ],
          answer:
            "The same secret key is used for encryption and decryption",
        },
        {
          question: "Which is a symmetric encryption algorithm?",
          options: ["AES", "RSA", "SHA-256", "DSA"],
          answer: "AES",
        },
        {
          question: "What is a major challenge with symmetric cryptography?",
          options: [
            "Securely sharing and protecting the secret key",
            "Converting ciphertext into images",
            "Creating a username",
            "Displaying files",
          ],
          answer: "Securely sharing and protecting the secret key",
        },
      ],
    },
  },

  {
    id: "asymmetric-encryption",
    title: "Asymmetric Encryption",
    icon: "🔓",
    lesson: {
      overview:
        "Learn public-key cryptography, including public and private keys and their common security uses.",
      sections: [
        {
          heading: "Public and Private Keys",
          points: [
            "Asymmetric cryptography uses a pair of mathematically related keys.",
            "The public key can generally be shared with others.",
            "The private key must be kept secret by its owner.",
          ],
        },
        {
          heading: "Encryption Use",
          points: [
            "A sender can use a recipient's public key to protect information intended for that recipient.",
            "The corresponding private key is then used by the recipient in the relevant decryption operation.",
            "Public-key cryptography helps address the key-distribution challenge found in symmetric encryption.",
          ],
        },
        {
          heading: "Common Algorithms",
          points: [
            "RSA is a well-known public-key cryptographic algorithm.",
            "Elliptic Curve Cryptography provides public-key cryptographic mechanisms based on elliptic curves.",
            "Modern systems choose algorithms and key sizes according to security requirements and current standards.",
          ],
        },
      ],
      mistakes: [
        "Sharing a private key as if it were a public key.",
        "Assuming asymmetric encryption is always faster than symmetric encryption.",
        "Confusing public-key encryption with hashing.",
      ],
      quiz: [
        {
          question:
            "Which key should normally remain secret in asymmetric cryptography?",
          options: [
            "Private key",
            "Public key",
            "Session label",
            "Certificate name",
          ],
          answer: "Private key",
        },
        {
          question: "Which is a public-key cryptographic algorithm?",
          options: ["RSA", "AES", "SHA-256", "ChaCha20"],
          answer: "RSA",
        },
        {
          question:
            "What is a major advantage of asymmetric cryptography?",
          options: [
            "It allows public keys to be shared while keeping private keys secret",
            "It eliminates the need for any keys",
            "It always encrypts faster than symmetric algorithms",
            "It converts every password into plaintext",
          ],
          answer:
            "It allows public keys to be shared while keeping private keys secret",
        },
      ],
    },
  },

  {
    id: "hash-functions",
    title: "Hash Functions",
    icon: "#️⃣",
    lesson: {
      overview:
        "Understand cryptographic hash functions and their role in integrity checking, password protection, and digital security.",
      sections: [
        {
          heading: "What is Hashing?",
          points: [
            "A cryptographic hash function converts input data into a fixed-size output called a hash or digest.",
            "A small change in the input should produce a substantially different digest.",
            "Cryptographic hashes are designed to make certain reverse and collision attacks computationally difficult.",
          ],
        },
        {
          heading: "Common Hash Functions",
          points: [
            "SHA-256 is part of the SHA-2 family of cryptographic hash functions.",
            "SHA-3 is another standardized family of cryptographic hash functions.",
            "MD5 and SHA-1 are considered unsuitable for many modern security applications because of known weaknesses.",
          ],
        },
        {
          heading: "Password Storage",
          points: [
            "Passwords should not normally be stored as plaintext.",
            "Password storage should use dedicated password-hashing or password-based key-derivation techniques with appropriate salts.",
            "A salt helps ensure identical passwords do not produce identical stored password hashes.",
          ],
        },
      ],
      mistakes: [
        "Calling hashing reversible encryption.",
        "Storing passwords as plaintext.",
        "Assuming every hash algorithm is appropriate for password storage.",
      ],
      quiz: [
        {
          question: "What is the output of a cryptographic hash function commonly called?",
          options: [
            "Digest",
            "Private key",
            "Certificate",
            "Session",
          ],
          answer: "Digest",
        },
        {
          question: "Which algorithm belongs to the SHA-2 family?",
          options: ["SHA-256", "RSA", "AES", "ECC"],
          answer: "SHA-256",
        },
        {
          question: "Why is a salt used when securely storing passwords?",
          options: [
            "To help prevent identical passwords from having identical stored hashes",
            "To make passwords readable",
            "To replace authentication",
            "To remove the need for hashing",
          ],
          answer:
            "To help prevent identical passwords from having identical stored hashes",
        },
      ],
    },
  },

  {
    id: "digital-signatures",
    title: "Digital Signatures",
    icon: "✍️",
    lesson: {
      overview:
        "Learn how digital signatures help provide integrity, authentication, and evidence of origin for digital data.",
      sections: [
        {
          heading: "Purpose of Digital Signatures",
          points: [
            "A digital signature can help verify that data has not been modified after signing.",
            "It can also help authenticate the signer when the signing key is properly associated with that identity.",
            "Digital signatures are commonly based on asymmetric cryptography.",
          ],
        },
        {
          heading: "Signing Process",
          points: [
            "The signer uses a private key in the signing operation.",
            "A verifier uses the corresponding public key to verify the signature.",
            "Hash functions are commonly used as part of practical digital-signature schemes.",
          ],
        },
        {
          heading: "Applications",
          points: [
            "Digital signatures are used for software signing.",
            "They can be used to sign electronic documents and messages.",
            "They are also used in certificates and secure communication systems.",
          ],
        },
      ],
      mistakes: [
        "Thinking a digital signature is simply an image of a handwritten signature.",
        "Sharing the private signing key.",
        "Assuming a valid signature automatically proves every claim made by the signer.",
      ],
      quiz: [
        {
          question:
            "Which key is used by a signer in a typical digital-signature scheme?",
          options: [
            "Private key",
            "Public key",
            "Network key",
            "Session name",
          ],
          answer: "Private key",
        },
        {
          question:
            "Which key is commonly used to verify a digital signature?",
          options: [
            "Public key",
            "Private key",
            "Password hash",
            "Encryption salt",
          ],
          answer: "Public key",
        },
        {
          question:
            "What can a valid digital signature help establish?",
          options: [
            "Integrity and authenticity of the signed data",
            "That the data contains no mistakes",
            "That the network is always available",
            "That the signer has no other accounts",
          ],
          answer: "Integrity and authenticity of the signed data",
        },
      ],
    },
  },

  {
    id: "digital-certificates-pki",
    title: "Digital Certificates & PKI",
    icon: "📜",
    lesson: {
      overview:
        "Understand digital certificates and Public Key Infrastructure, including certificate authorities and trust relationships.",
      sections: [
        {
          heading: "Digital Certificates",
          points: [
            "A digital certificate binds an identity or entity to a public key.",
            "Certificates contain information such as the subject, public key, validity information, and issuer.",
            "Certificates are digitally signed by a certificate authority or another trusted issuer.",
          ],
        },
        {
          heading: "Certificate Authorities",
          points: [
            "A Certificate Authority, or CA, issues and signs digital certificates.",
            "Trust in a CA allows systems to establish trust in certificates issued within that trust model.",
            "Browsers and operating systems maintain trusted certificate information for many public CAs.",
          ],
        },
        {
          heading: "PKI",
          points: [
            "Public Key Infrastructure provides processes, technologies, and policies for managing digital certificates and public-key cryptography.",
            "PKI can support authentication, secure communication, and digital signatures.",
            "Certificate expiration and revocation are important parts of certificate management.",
          ],
        },
      ],
      mistakes: [
        "Assuming every certificate is automatically trustworthy.",
        "Ignoring certificate expiration or revocation.",
        "Confusing a certificate with the private key itself.",
      ],
      quiz: [
        {
          question:
            "What does a digital certificate primarily bind together?",
          options: [
            "An identity and a public key",
            "A password and a username",
            "A file and a folder",
            "A router and a cable",
          ],
          answer: "An identity and a public key",
        },
        {
          question: "What does CA commonly stand for in PKI?",
          options: [
            "Certificate Authority",
            "Cipher Algorithm",
            "Central Account",
            "Cryptographic Address",
          ],
          answer: "Certificate Authority",
        },
        {
          question:
            "Why is certificate revocation important?",
          options: [
            "It can invalidate certificates that should no longer be trusted",
            "It increases the file size of certificates",
            "It converts public keys into passwords",
            "It removes the need for encryption",
          ],
          answer:
            "It can invalidate certificates that should no longer be trusted",
        },
      ],
    },
  },

  {
    id: "cryptography-real-world",
    title: "Cryptography in Real-World Security",
    icon: "🛡️",
    lesson: {
      overview:
        "See how cryptographic techniques work together in real-world systems such as HTTPS, secure messaging, software signing, and data protection.",
      sections: [
        {
          heading: "HTTPS and TLS",
          points: [
            "HTTPS uses TLS to protect HTTP communication.",
            "TLS uses certificates and public-key cryptography as part of establishing trust and secure sessions.",
            "Symmetric cryptography is commonly used for efficient protection of application data after a secure session is established.",
          ],
        },
        {
          heading: "Data Protection",
          points: [
            "Encryption can protect sensitive data at rest and in transit.",
            "Hash functions can help verify integrity.",
            "Digital signatures can help verify authenticity and integrity.",
          ],
        },
        {
          heading: "Secure Software",
          points: [
            "Software publishers can digitally sign applications and updates.",
            "Users and systems can verify signatures before trusting signed software.",
            "Strong cryptography must be combined with secure key management and correct implementation.",
          ],
        },
      ],
      mistakes: [
        "Assuming encryption alone makes an application completely secure.",
        "Ignoring key management.",
        "Using custom cryptographic algorithms instead of established standards without a strong reason.",
      ],
      quiz: [
        {
          question: "What technology protects HTTP communication when HTTPS is used?",
          options: ["TLS", "FTP", "DNS", "DHCP"],
          answer: "TLS",
        },
        {
          question:
            "Which cryptographic technique is commonly used to verify software authenticity?",
          options: [
            "Digital signatures",
            "File compression",
            "IP addressing",
            "Port scanning",
          ],
          answer: "Digital signatures",
        },
        {
          question:
            "What is an important requirement besides choosing a strong cryptographic algorithm?",
          options: [
            "Secure key management",
            "Disabling authentication",
            "Publishing private keys",
            "Using plaintext passwords",
          ],
          answer: "Secure key management",
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
// CRYPTOGRAPHY COMPONENT
// =====================================================

function Cryptography({ goBack }) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-cryptography", subtopics);

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
            🔑 Cryptography
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Learn the foundations of cryptography,
            encryption, hashing, digital signatures, PKI,
            and real-world security applications.
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

          {/* SECTIONS */}

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

            {/* CORRECT ANSWER MESSAGE */}

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

            {/* QUIZ BUTTONS */}

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

export default Cryptography;
