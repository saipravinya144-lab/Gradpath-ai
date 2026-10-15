import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
const NetworkingFundamentals = ({ goBack }) => {
  const subtopics = [
    {
      id: 1,
      title: "Networking Basics",
      icon: "🌐",
      lesson: {
        explanation:
          "Computer networking is the process of connecting devices so they can communicate and exchange data. A network can contain computers, servers, routers, switches, access points, and other devices. Networks are commonly classified by their geographical coverage, such as LAN, MAN, and WAN.",
        points: [
          "A network allows devices to communicate and share resources.",
          "LAN covers a small area such as a home, office, or college campus.",
          "WAN covers large geographical areas and connects multiple networks.",
          "A router connects different networks and forwards packets between them.",
          "A switch connects devices within a local network.",
          "Network protocols define rules for communication between devices.",
        ],
        mistakes: [
          "Confusing a router with a switch.",
          "Thinking that every network must use the internet.",
          "Assuming LAN always means wireless networking.",
        ],
        quiz: [
          {
            question: "What is the primary purpose of a computer network?",
            options: [
              "To connect devices for communication and resource sharing",
              "To increase monitor resolution",
              "To replace operating systems",
              "To store only images",
            ],
            answer:
              "To connect devices for communication and resource sharing",
          },
          {
            question: "Which device primarily connects different networks?",
            options: ["Router", "Keyboard", "Monitor", "Printer"],
            answer: "Router",
          },
          {
            question:
              "What type of network normally covers a small geographical area?",
            options: ["LAN", "WAN", "Internet", "MAN"],
            answer: "LAN",
          },
        ],
      },
    },

    {
      id: 2,
      title: "IP Addresses & Subnets",
      icon: "📍",
      lesson: {
        explanation:
          "An IP address identifies a device or network interface on an IP network. IPv4 addresses contain 32 bits and are commonly written as four decimal numbers separated by dots. Subnetting divides a network into smaller logical networks, helping organize addresses and control network traffic.",
        points: [
          "IPv4 uses 32-bit addresses.",
          "An IPv4 address is usually written in dotted-decimal notation.",
          "IPv6 was developed to provide a much larger address space.",
          "A subnet mask identifies which portion of an IPv4 address represents the network.",
          "CIDR notation represents a network prefix using a slash, such as /24.",
          "Subnetting divides a larger network into smaller networks.",
        ],
        mistakes: [
          "Confusing an IP address with a MAC address.",
          "Assuming every IPv4 address is publicly reachable from the internet.",
          "Forgetting that subnet masks determine network boundaries.",
        ],
        quiz: [
          {
            question: "How many bits are in an IPv4 address?",
            options: ["32", "16", "64", "128"],
            answer: "32",
          },
          {
            question: "What does subnetting do?",
            options: [
              "Divides a network into smaller logical networks",
              "Converts TCP into UDP",
              "Encrypts every network packet",
              "Removes IP addresses",
            ],
            answer: "Divides a network into smaller logical networks",
          },
          {
            question:
              "What does CIDR notation such as /24 represent?",
            options: [
              "The length of the network prefix",
              "The number of network devices",
              "The number of routers",
              "The packet size",
            ],
            answer: "The length of the network prefix",
          },
        ],
      },
    },

    {
      id: 3,
      title: "MAC Addresses & ARP",
      icon: "🔗",
      lesson: {
        explanation:
          "A MAC address is a hardware-level address associated with a network interface. It is used for communication within a local network. ARP, or Address Resolution Protocol, is used in IPv4 networks to determine the MAC address associated with a known IPv4 address on the local network.",
        points: [
          "MAC stands for Media Access Control.",
          "A MAC address identifies a network interface at the data-link layer.",
          "MAC addresses are commonly represented in hexadecimal notation.",
          "ARP maps an IPv4 address to a MAC address on a local network.",
          "A switch uses MAC addresses to forward Ethernet frames.",
          "ARP operates within the local network.",
        ],
        mistakes: [
          "Thinking a MAC address is the same as an IP address.",
          "Assuming ARP is used to find MAC addresses anywhere on the internet.",
          "Confusing ARP with DNS.",
        ],
        quiz: [
          {
            question: "What does ARP primarily help determine?",
            options: [
              "The MAC address associated with an IPv4 address",
              "The domain name of a website",
              "The encryption key of a packet",
              "The speed of a processor",
            ],
            answer:
              "The MAC address associated with an IPv4 address",
          },
          {
            question: "What type of address is a MAC address?",
            options: [
              "Data-link layer address",
              "Application-layer address",
              "Domain name",
              "Port number",
            ],
            answer: "Data-link layer address",
          },
          {
            question:
              "Which device commonly forwards Ethernet frames using MAC addresses?",
            options: [
              "Switch",
              "Router only",
              "DNS server",
              "Web browser",
            ],
            answer: "Switch",
          },
        ],
      },
    },

    {
      id: 4,
      title: "TCP & UDP",
      icon: "📡",
      lesson: {
        explanation:
          "TCP and UDP are transport-layer protocols. TCP provides reliable, connection-oriented communication using mechanisms such as acknowledgements, sequencing, and retransmission. UDP is connectionless and has lower protocol overhead, making it useful for applications where speed and low latency are important.",
        points: [
          "TCP stands for Transmission Control Protocol.",
          "UDP stands for User Datagram Protocol.",
          "TCP provides reliable and ordered delivery.",
          "UDP does not provide TCP-style delivery guarantees.",
          "TCP establishes a connection before transferring application data.",
          "UDP is often used where low latency and low overhead are important.",
        ],
        mistakes: [
          "Thinking UDP is always faster in every situation.",
          "Assuming UDP guarantees packet delivery.",
          "Confusing transport protocols with application protocols.",
        ],
        quiz: [
          {
            question: "Which protocol provides reliable, ordered delivery?",
            options: ["TCP", "UDP", "ARP", "DNS"],
            answer: "TCP",
          },
          {
            question: "Which protocol is connectionless?",
            options: ["UDP", "TCP", "HTTP", "SSH"],
            answer: "UDP",
          },
          {
            question: "Why might an application choose UDP?",
            options: [
              "For lower overhead and latency-sensitive communication",
              "Because UDP guarantees delivery",
              "Because UDP replaces IP",
              "Because UDP automatically encrypts traffic",
            ],
            answer:
              "For lower overhead and latency-sensitive communication",
          },
        ],
      },
    },

    {
      id: 5,
      title: "DNS & DHCP",
      icon: "🌎",
      lesson: {
        explanation:
          "DNS and DHCP perform different but important networking functions. DNS, or Domain Name System, translates human-readable domain names into IP addresses and can provide other DNS records. DHCP, or Dynamic Host Configuration Protocol, automatically provides network configuration such as IP addresses, subnet masks, gateways, and DNS server information to clients.",
        points: [
          "DNS translates domain names into IP addresses.",
          "DNS uses different record types for different purposes.",
          "DHCP automatically assigns network configuration to clients.",
          "A DHCP server can provide an IP address, subnet mask, gateway, and DNS server.",
          "DNS and DHCP solve different networking problems.",
          "Both services are important in typical IP networks.",
        ],
        mistakes: [
          "Thinking DNS assigns IP addresses to client devices.",
          "Confusing DHCP with DNS.",
          "Assuming every IP address must be manually configured.",
        ],
        quiz: [
          {
            question: "What is the primary purpose of DNS?",
            options: [
              "Translate domain names into IP addresses",
              "Assign RAM to programs",
              "Encrypt files",
              "Create MAC addresses",
            ],
            answer: "Translate domain names into IP addresses",
          },
          {
            question: "What does DHCP commonly provide to a client?",
            options: [
              "Network configuration such as an IP address",
              "A web page",
              "A CPU",
              "A MAC address manufactured for the device",
            ],
            answer:
              "Network configuration such as an IP address",
          },
          {
            question:
              "Which statement correctly distinguishes DNS and DHCP?",
            options: [
              "DNS resolves names, while DHCP provides network configuration",
              "DNS assigns RAM, while DHCP manages files",
              "DNS replaces Ethernet, while DHCP replaces TCP",
              "DNS and DHCP are exactly the same service",
            ],
            answer:
              "DNS resolves names, while DHCP provides network configuration",
          },
        ],
      },
    },

    {
      id: 6,
      title: "HTTP, HTTPS & Web Networking",
      icon: "🔒",
      lesson: {
        explanation:
          "HTTP is an application-layer protocol used for communication between web clients and servers. HTTPS is HTTP protected using TLS, providing encryption and helping authenticate the server. Web applications use these protocols to exchange requests and responses over IP networks.",
        points: [
          "HTTP stands for Hypertext Transfer Protocol.",
          "HTTPS uses HTTP over a TLS-protected connection.",
          "A browser sends HTTP requests to web servers.",
          "Servers return HTTP responses containing status information and data.",
          "TLS helps provide confidentiality and integrity for HTTPS traffic.",
          "HTTPS is widely used for websites and web APIs.",
        ],
        mistakes: [
          "Thinking HTTPS is a completely different application protocol from HTTP.",
          "Assuming HTTPS alone makes every website or application secure.",
          "Confusing HTTP status codes with TCP status.",
        ],
        quiz: [
          {
            question: "What does HTTPS add to HTTP?",
            options: [
              "TLS-based protection",
              "A new operating system",
              "A replacement for IP",
              "A new type of CPU",
            ],
            answer: "TLS-based protection",
          },
          {
            question: "Who normally sends an HTTP request?",
            options: [
              "A client such as a web browser",
              "Only a network switch",
              "A keyboard",
              "A monitor",
            ],
            answer: "A client such as a web browser",
          },
          {
            question: "What does TLS help provide?",
            options: [
              "Confidentiality and integrity of communication",
              "More RAM",
              "Automatic database backups",
              "Faster processors",
            ],
            answer:
              "Confidentiality and integrity of communication",
          },
        ],
      },
    },

    {
      id: 7,
      title: "Ports, Firewalls & Network Security Basics",
      icon: "🛡️",
      lesson: {
        explanation:
          "Ports identify application endpoints associated with network communication. A firewall controls network traffic according to configured rules. Basic network security involves controlling access, reducing unnecessary exposure, encrypting communication where appropriate, and monitoring network activity.",
        points: [
          "A port number helps identify a network service on a host.",
          "TCP and UDP each have their own port number spaces.",
          "Firewalls filter traffic according to security rules.",
          "Firewalls can control inbound and outbound traffic.",
          "Only required services should generally be exposed.",
          "Network security also involves authentication, encryption, monitoring, and updates.",
        ],
        mistakes: [
          "Thinking a port is the same as an IP address.",
          "Assuming a firewall makes a system completely secure.",
          "Opening unnecessary network services.",
        ],
        quiz: [
          {
            question: "What does a network port identify?",
            options: [
              "A service or application endpoint on a host",
              "The physical size of a computer",
              "A user's password",
              "A network cable type",
            ],
            answer:
              "A service or application endpoint on a host",
          },
          {
            question: "What is a firewall primarily used for?",
            options: [
              "Controlling network traffic according to rules",
              "Creating websites",
              "Increasing CPU speed",
              "Replacing DNS",
            ],
            answer:
              "Controlling network traffic according to rules",
          },
          {
            question:
              "Which is a basic network security practice?",
            options: [
              "Expose only necessary services",
              "Open every port",
              "Disable all authentication",
              "Share passwords publicly",
            ],
            answer: "Expose only necessary services",
          },
        ],
      },
    },

    {
      id: 8,
      title: "Routing & Network Troubleshooting",
      icon: "🛠️",
      lesson: {
        explanation:
          "Routing determines how packets travel between networks. Routers use routing information to select paths toward destinations. Network troubleshooting involves systematically identifying where communication fails by checking connectivity, addressing, routing, DNS, ports, and services.",
        points: [
          "Routing determines paths between different networks.",
          "Routers use routing tables to make forwarding decisions.",
          "The default gateway is commonly used to reach destinations outside the local network.",
          "Ping can be used to test IP-level reachability.",
          "Traceroute or tracert can help show the path toward a destination.",
          "DNS tools can help diagnose name-resolution problems.",
          "Troubleshooting should proceed systematically from basic connectivity to higher-level services.",
        ],
        mistakes: [
          "Changing many settings at once without identifying the cause.",
          "Assuming every connectivity problem is a DNS problem.",
          "Ignoring IP configuration and default gateway settings.",
        ],
        quiz: [
          {
            question:
              "What does a router use to help make forwarding decisions?",
            options: [
              "Routing table",
              "Keyboard layout",
              "File extension",
              "Screen resolution",
            ],
            answer: "Routing table",
          },
          {
            question:
              "Which command is commonly used to test IP-level reachability?",
            options: ["ping", "mkdir", "cd", "echo"],
            answer: "ping",
          },
          {
            question:
              "What is a good approach to network troubleshooting?",
            options: [
              "Systematically check connectivity, addressing, routing, DNS, and services",
              "Change every configuration immediately",
              "Ignore IP configuration",
              "Reinstall the operating system first",
            ],
            answer:
              "Systematically check connectivity, addressing, routing, DNS, and services",
          },
        ],
      },
    },
  ];

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
  // STATE
  // =====================================================

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("clouddevops-networking-fundamentals", subtopics);
  const [selectedAnswer, setSelectedAnswer] =
    useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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
  // OPEN TOPIC
  // =====================================================

  const openTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentLesson(0);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  // =====================================================
  // CLOSE TOPIC
  // =====================================================

  const closeTopic = () => {
    setSelectedTopic(null);
    setCurrentLesson(0);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  // =====================================================
  // SUBMIT QUIZ ANSWER
  // =====================================================

  const submitAnswer = () => {
    if (selectedAnswer === null) {
      return;
    }
    setSubmitted(true);
  };

  // =====================================================
  // MARK CURRENT LESSON COMPLETE
  // =====================================================

  const markLessonComplete = () => {
    if (!selectedTopic) return;
    saveProgress(selectedTopic.id);
  };

  // =====================================================
  // NEXT LESSON
  // QUIZ DOES NOT NEED TO BE ANSWERED
  // =====================================================

  const nextLesson = async () => {
    if (!selectedTopic || !submitted) {
      return;
    }

    const quiz = selectedTopic.lesson.quiz;
    const currentQuestion = quiz[currentLesson];
    const updatedScore = score + (selectedAnswer === currentQuestion.answer ? 1 : 0);

    if (currentLesson < quiz.length - 1) {
      setScore(updatedScore);
      setCurrentLesson((prev) => prev + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
      return;
    }

    await saveQuizResult({
      subject: "Cloud/DevOps",
      role: "Cloud/DevOps Engineer",
      topic: selectedTopic.title,
      topicId: String(selectedTopic.id),
      score: updatedScore,
      totalQuestions: quiz.length
    });

    saveProgress(selectedTopic.id);
    setSelectedTopic(null);
    setCurrentLesson(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson((prev) => prev - 1);

      // Reset quiz state
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  };

  // =====================================================
  // PROGRESS
  // =====================================================

  const totalLessons = subtopics.length;

  const completedCount = completedLessons.length;

  const overallProgress = Math.round(
    (completedCount / totalLessons) * 100
  );

  // =====================================================
  // SELECTED LESSON VIEW
  // =====================================================

  if (selectedTopic) {
    const question =
      selectedTopic.lesson.quiz[currentLesson];

    const options =
      shuffledQuizOptions[selectedTopic.id][
        currentLesson
      ];

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #eef6ff, #ffffff)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* BACK BUTTON */}

          <button
            onClick={closeTopic}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "25px",
              fontWeight: "600",
            }}
          >
            ← Back to Networking Fundamentals
          </button>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #bfdbfe",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* LESSON TITLE */}

            <h1
              style={{
                color: "#1d4ed8",
                marginBottom: "10px",
              }}
            >
              {selectedTopic.icon}{" "}
              {selectedTopic.title}
            </h1>

            {/* LESSON NUMBER */}

            <p style={{ color: "#64748b" }}>
              Lesson {currentLesson + 1} of{" "}
              {selectedTopic.lesson.quiz.length}
            </p>

            {/* LESSON PROGRESS */}

            <div
              style={{
                width: "100%",
                height: "8px",
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: `${
                    ((currentLesson + 1) /
                      selectedTopic.lesson.quiz
                        .length) *
                    100
                  }%`,
                  height: "100%",
                  background: "#2563eb",
                }}
              />
            </div>

            {/* =================================================
                LESSON CONTENT
            ================================================= */}

            <h2 style={{ color: "#1e3a8a" }}>
              📖 Learn
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#334155",
                fontSize: "16px",
              }}
            >
              {selectedTopic.lesson.explanation}
            </p>

            {/* KEY POINTS */}

            <h3
              style={{
                color: "#1e40af",
                marginTop: "25px",
              }}
            >
              🔑 Key Points
            </h3>

            <ul
              style={{
                lineHeight: "1.8",
                color: "#334155",
              }}
            >
              {selectedTopic.lesson.points.map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>

            {/* COMMON MISTAKES */}

            <h3
              style={{
                color: "#b45309",
                marginTop: "25px",
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              {selectedTopic.lesson.mistakes.map(
                (mistake, index) => (
                  <li key={index}>{mistake}</li>
                )
              )}
            </ul>

            <hr
              style={{
                margin: "35px 0",
                border: "none",
                borderTop: "1px solid #dbeafe",
              }}
            />

            {/* =================================================
                QUIZ
            ================================================= */}

            <h2 style={{ color: "#1d4ed8" }}>
              🧠 Quick Quiz
            </h2>

            <h3 style={{ color: "#334155" }}>
              {question.question}
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              {options.map((option) => {
                const isCorrect =
                  option === question.answer;

                const isSelected =
                  selectedAnswer === option;

                let background = "white";
                let border =
                  "1px solid #bfdbfe";
                let color = "#334155";

                if (
                  submitted &&
                  isCorrect
                ) {
                  background = "#dcfce7";
                  border =
                    "1px solid #22c55e";
                  color = "#166534";
                } else if (
                  submitted &&
                  isSelected &&
                  !isCorrect
                ) {
                  background = "#fee2e2";
                  border =
                    "1px solid #ef4444";
                  color = "#991b1b";
                } else if (isSelected) {
                  background = "#dbeafe";
                  border =
                    "2px solid #2563eb";
                  color = "#1e40af";
                }

                return (
                  <button
                    key={option}
                    onClick={() => {
                      if (!submitted) {
                        setSelectedAnswer(
                          option
                        );
                      }
                    }}
                    style={{
                      padding: "14px 16px",
                      textAlign: "left",
                      border,
                      borderRadius: "10px",
                      background,
                      color,
                      cursor: submitted
                        ? "default"
                        : "pointer",
                      fontSize: "15px",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* =================================================
                QUIZ FEEDBACK
            ================================================= */}

            {submitted && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  borderRadius: "10px",
                  background:
                    selectedAnswer ===
                    question.answer
                      ? "#dcfce7"
                      : "#fef3c7",
                  color:
                    selectedAnswer ===
                    question.answer
                      ? "#166534"
                      : "#92400e",
                }}
              >
                {selectedAnswer ===
                question.answer ? (
                  <strong>
                    ✅ Correct answer!
                  </strong>
                ) : (
                  <>
                    <strong>
                      ❌ Incorrect answer.
                    </strong>

                    <p
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      Correct answer:{" "}
                      <strong>
                        {question.answer}
                      </strong>
                    </p>
                  </>
                )}
              </div>
            )}

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginTop: "30px",
                gap: "15px",
              }}
            >
              {/* PREVIOUS LESSON */}

              <button
                onClick={previousLesson}
                disabled={currentLesson === 0}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border:
                    "1px solid #bfdbfe",
                  background:
                    currentLesson === 0
                      ? "#f1f5f9"
                      : "white",
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

              {/* SUBMIT ANSWER */}

              <button
                onClick={submitAnswer}
                disabled={
                  selectedAnswer === null ||
                  submitted
                }
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    selectedAnswer === null ||
                    submitted
                      ? "#94a3b8"
                      : "#16a34a",
                  color: "white",
                  cursor:
                    selectedAnswer === null ||
                    submitted
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                }}
              >
                {submitted
                  ? "Answer Submitted ✓"
                  : "Submit Answer"}
              </button>

              {/* NEXT LESSON */}

              <button
                onClick={nextLesson}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {currentLesson ===
                selectedTopic.lesson.quiz
                  .length -
                  1
                  ? "Finish Topic ✓"
                  : "Next Lesson →"}
              </button>
            </div>

            {/* NAVIGATION INFORMATION */}

            <p
              style={{
                textAlign: "center",
                marginTop: "18px",
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              💡 You can use Next Lesson without
              answering the quiz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // TOPIC LIST
  // =====================================================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef6ff, #ffffff)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* BACK TO ROADMAP */}

        <button
          onClick={goBack}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          ← Back to Cloud / DevOps Roadmap
        </button>

        {/* HEADER */}

        <h1
          style={{
            color: "#1d4ed8",
            marginBottom: "8px",
          }}
        >
          🌐 Networking Fundamentals
        </h1>

        <p style={{ color: "#64748b" }}>
          Learn the networking concepts required
          for cloud and DevOps engineering.
        </p>

        {/* =================================================
            OVERALL PROGRESS
        ================================================= */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "14px",
            border: "1px solid #bfdbfe",
            margin: "25px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: "10px",
            }}
          >
            <strong>
              Overall Progress
            </strong>

            <strong>
              {overallProgress}%
            </strong>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
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
              }}
            />
          </div>

          <p
            style={{
              marginBottom: 0,
              marginTop: "10px",
              color: "#64748b",
            }}
          >
            {completedCount} of{" "}
            {totalLessons} lessons completed
          </p>
        </div>

        {/* =================================================
            LESSON CARDS
        ================================================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {subtopics.map((topic) => {
            const isCompleted =
              completedLessons.includes(
                topic.id
              );

            return (
              <div
                key={topic.id}
                style={{
                  background: "white",
                  border:
                    "1px solid #bfdbfe",
                  borderRadius: "16px",
                  padding: "22px",
                  boxShadow:
                    "0 4px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "10px",
                  }}
                >
                  {topic.icon}
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    color: "#1e3a8a",
                    minHeight: "50px",
                  }}
                >
                  {topic.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                  }}
                >
                  Lesson {topic.id} of{" "}
                  {totalLessons}
                </p>

                {/* LESSON PROGRESS */}

                <div
                  style={{
                    height: "7px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "15px",
                  }}
                >
                  <div
                    style={{
                      width: isCompleted
                        ? "100%"
                        : "0%",
                      height: "100%",
                      background:
                        "#2563eb",
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    openTopic(topic)
                  }
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "none",
                    borderRadius: "8px",
                    background:
                      "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  {isCompleted
                    ? "✓ Review Lesson"
                    : "Open Lesson →"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetworkingFundamentals;