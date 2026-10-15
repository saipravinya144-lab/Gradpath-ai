import React, { useState } from "react";

import useLearningProgress from "../../../hooks/useLearningProgress";
import { saveQuizResult } from "../../../utils/saveQuizResult";
// =====================================================
// SHUFFLE QUIZ OPTIONS
// =====================================================

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

// =====================================================
// LESSON DATA
// =====================================================

const subtopics = [
  {
    id: 1,
    title: "Networking Fundamentals",
    icon: "🌐",

    lesson: {
      overview:
        "Computer networking is the process of connecting devices so they can communicate and share data and resources. Cybersecurity professionals need networking knowledge because most attacks, defenses, and security controls involve network communication.",

      sections: [
        {
          heading: "What is a Computer Network?",
          content:
            "A computer network is a group of connected devices that communicate with each other using agreed-upon rules called protocols. Devices may include computers, smartphones, servers, printers, routers, switches, and security appliances.",
        },
        {
          heading: "Network Components",
          content:
            "Common networking components include switches, routers, access points, network interfaces, cables, servers, and firewalls. A switch commonly connects devices within a local network, while a router connects different networks.",
        },
        {
          heading: "LAN and WAN",
          content:
            "A Local Area Network (LAN) covers a relatively small area such as a home, classroom, or office. A Wide Area Network (WAN) connects networks across larger geographical areas. The Internet is the largest example of an interconnected network.",
        },
        {
          heading: "Packets and Communication",
          content:
            "Data sent across a network is divided into smaller units called packets. Packets contain information needed for delivery and are processed by networking devices as they travel toward their destination.",
        },
      ],

      mistakes: [
        "Thinking that a switch and router perform exactly the same function.",
        "Assuming every network is connected directly to the Internet.",
        "Ignoring networking concepts when learning cybersecurity.",
      ],

      quiz: [
        {
          question: "What is a computer network?",
          options: [
            "A group of connected devices that communicate",
            "A single computer without connections",
            "Only a collection of websites",
            "A type of programming language",
          ],
          answer: "A group of connected devices that communicate",
        },
        {
          question: "Which device commonly connects different networks?",
          options: ["Router", "Keyboard", "Monitor", "Printer"],
          answer: "Router",
        },
        {
          question: "What is a LAN?",
          options: [
            "A network covering a relatively small area",
            "A global satellite network",
            "A programming protocol",
            "A type of malware",
          ],
          answer: "A network covering a relatively small area",
        },
      ],
    },
  },

  {
    id: 2,
    title: "OSI & TCP/IP Models",
    icon: "🔄",

    lesson: {
      overview:
        "Networking models provide structured ways to understand how data moves between devices. The OSI model has seven layers, while the TCP/IP model groups networking functions into a smaller number of layers.",

      sections: [
        {
          heading: "OSI Model",
          content:
            "The Open Systems Interconnection (OSI) model contains seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer represents a different networking function.",
        },
        {
          heading: "Seven OSI Layers",
          content:
            "The Physical layer deals with signals and physical transmission. Data Link handles frames and MAC addressing. Network handles logical addressing and routing. Transport handles end-to-end delivery. Session manages sessions. Presentation deals with data representation. Application provides network services to applications.",
        },
        {
          heading: "TCP/IP Model",
          content:
            "The TCP/IP model is commonly represented using four layers: Link, Internet, Transport, and Application. It is the model associated with the protocol suite used by the modern Internet.",
        },
        {
          heading: "Why Models Matter in Security",
          content:
            "Security controls operate at different layers. Understanding the models helps security professionals identify where communication occurs and where a particular security control or problem may exist.",
        },
      ],

      mistakes: [
        "Mixing up the purpose of the Network and Transport layers.",
        "Assuming the OSI model is itself a network protocol.",
        "Memorizing layer names without understanding their functions.",
      ],

      quiz: [
        {
          question: "How many layers are in the OSI model?",
          options: ["7", "4", "5", "3"],
          answer: "7",
        },
        {
          question:
            "Which OSI layer is responsible for logical addressing and routing?",
          options: [
            "Network",
            "Physical",
            "Presentation",
            "Session",
          ],
          answer: "Network",
        },
        {
          question:
            "How many layers does the commonly represented TCP/IP model have?",
          options: ["4", "7", "9", "2"],
          answer: "4",
        },
      ],
    },
  },

  {
    id: 3,
    title: "IP Addresses & Subnets",
    icon: "📍",

    lesson: {
      overview:
        "IP addresses identify devices or interfaces at the network layer. Subnetting divides a larger IP network into smaller logical networks, improving organization and helping control network traffic.",

      sections: [
        {
          heading: "IPv4 Addresses",
          content:
            "An IPv4 address contains 32 bits and is commonly written as four decimal numbers separated by dots, such as 192.168.1.10. Each device interface participating in an IPv4 network needs an appropriate address.",
        },
        {
          heading: "Private IP Addresses",
          content:
            "Private IPv4 address ranges are commonly used inside local networks. Addresses such as 192.168.x.x, 10.x.x.x, and 172.16.x.x through 172.31.x.x are examples of private addressing ranges.",
        },
        {
          heading: "Subnetting",
          content:
            "Subnetting divides a network into smaller subnetworks. A subnet mask or CIDR prefix determines which portion of an IP address identifies the network and which portion identifies hosts.",
        },
        {
          heading: "IPv6",
          content:
            "IPv6 uses 128-bit addresses and was designed to provide a much larger address space than IPv4. IPv6 addresses are written using hexadecimal notation separated by colons.",
        },
      ],

      mistakes: [
        "Confusing a private IP address with a public Internet address.",
        "Thinking that an IP address permanently identifies a person.",
        "Ignoring subnet masks when analyzing an IPv4 network.",
      ],

      quiz: [
        {
          question: "How many bits are in an IPv4 address?",
          options: ["32", "64", "128", "16"],
          answer: "32",
        },
        {
          question:
            "Which is an example of a private IPv4 address?",
          options: [
            "192.168.1.10",
            "8.8.8.8",
            "1.1.1.1",
            "203.0.113.1",
          ],
          answer: "192.168.1.10",
        },
        {
          question: "What does subnetting do?",
          options: [
            "Divides a network into smaller networks",
            "Deletes IP addresses",
            "Encrypts every network packet",
            "Converts IPv4 into a programming language",
          ],
          answer: "Divides a network into smaller networks",
        },
      ],
    },
  },

  {
    id: 4,
    title: "TCP, UDP & Common Ports",
    icon: "🔌",

    lesson: {
      overview:
        "TCP and UDP are important transport-layer protocols. TCP focuses on reliable, connection-oriented communication, while UDP provides a simpler connectionless transport mechanism. Ports help identify network services running on a host.",

      sections: [
        {
          heading: "TCP",
          content:
            "Transmission Control Protocol (TCP) is connection-oriented and provides reliable, ordered delivery of data. It uses mechanisms such as acknowledgements and retransmission to support reliable communication.",
        },
        {
          heading: "UDP",
          content:
            "User Datagram Protocol (UDP) is connectionless and has lower protocol overhead than TCP. It does not provide TCP-style guarantees of reliable, ordered delivery. It is useful for applications where speed or simplicity is important.",
        },
        {
          heading: "What are Ports?",
          content:
            "A port number helps identify a specific network service or application endpoint on a host. Ports allow multiple network services to operate on the same IP address.",
        },
        {
          heading: "Common Ports",
          content:
            "Common examples include HTTP on port 80, HTTPS on port 443, DNS commonly using port 53, SSH on port 22, and SMTP commonly using port 25. Security professionals should understand these associations when analyzing network traffic.",
        },
      ],

      mistakes: [
        "Assuming UDP is always faster in every practical situation.",
        "Thinking an IP address alone identifies a specific service.",
        "Memorizing ports without understanding what services use them.",
      ],

      quiz: [
        {
          question:
            "Which protocol provides connection-oriented reliable delivery?",
          options: ["TCP", "UDP", "DNS", "IP"],
          answer: "TCP",
        },
        {
          question:
            "Which port is commonly associated with HTTPS?",
          options: ["443", "80", "22", "25"],
          answer: "443",
        },
        {
          question:
            "What helps identify a network service on a host?",
          options: [
            "Port number",
            "Screen resolution",
            "Keyboard layout",
            "File extension",
          ],
          answer: "Port number",
        },
      ],
    },
  },

  {
    id: 5,
    title: "DNS & DHCP",
    icon: "🧭",

    lesson: {
      overview:
        "DNS and DHCP are essential network services. DNS translates domain names into IP addresses, while DHCP automatically provides network configuration information to clients.",

      sections: [
        {
          heading: "DNS",
          content:
            "The Domain Name System (DNS) translates human-readable domain names such as example.com into IP addresses that computers can use for network communication.",
        },
        {
          heading: "DNS Resolution",
          content:
            "When a client needs to reach a domain, it can query a DNS resolver. The resolver obtains the appropriate DNS information and returns an address or other DNS record to the client.",
        },
        {
          heading: "DHCP",
          content:
            "Dynamic Host Configuration Protocol (DHCP) can automatically provide devices with IP addresses, subnet information, default gateways, and DNS server information.",
        },
        {
          heading: "Security Considerations",
          content:
            "DNS and DHCP are important security monitoring points. Incorrect configurations or unauthorized changes can redirect traffic, disrupt communication, or expose networks to security risks.",
        },
      ],

      mistakes: [
        "Thinking DNS assigns IP addresses to client devices.",
        "Confusing DNS name resolution with DHCP configuration.",
        "Ignoring DNS and DHCP when troubleshooting network problems.",
      ],

      quiz: [
        {
          question: "What is the primary purpose of DNS?",
          options: [
            "Translate domain names into IP information",
            "Encrypt files",
            "Assign usernames",
            "Create passwords",
          ],
          answer: "Translate domain names into IP information",
        },
        {
          question: "What does DHCP commonly provide?",
          options: [
            "Network configuration information",
            "Antivirus signatures",
            "Web page content",
            "File compression",
          ],
          answer: "Network configuration information",
        },
        {
          question:
            "Which service can automatically assign an IP address to a client?",
          options: ["DHCP", "DNS", "HTTP", "SSH"],
          answer: "DHCP",
        },
      ],
    },
  },

  {
    id: 6,
    title: "Firewalls",
    icon: "🧱",

    lesson: {
      overview:
        "A firewall is a security control that monitors and controls network traffic according to defined rules. Firewalls can help restrict unauthorized communication and reduce exposure to unwanted traffic.",

      sections: [
        {
          heading: "What is a Firewall?",
          content:
            "A firewall examines network traffic and applies security rules to determine whether traffic should be allowed, blocked, or otherwise handled according to policy.",
        },
        {
          heading: "Network Firewalls",
          content:
            "Network firewalls can be deployed at boundaries between networks, such as between an internal network and the Internet. They can enforce rules based on factors such as IP addresses, ports, and protocols.",
        },
        {
          heading: "Host-Based Firewalls",
          content:
            "A host-based firewall runs on an individual computer or server. It can control inbound and outbound traffic for that specific host.",
        },
        {
          heading: "Firewall Rules",
          content:
            "Firewall rules should follow security requirements and the principle of least privilege. Unnecessary services and traffic should not be exposed simply because they are technically possible to allow.",
        },
      ],

      mistakes: [
        "Assuming a firewall alone provides complete cybersecurity.",
        "Allowing unnecessary network services without justification.",
        "Creating overly broad firewall rules without understanding their impact.",
      ],

      quiz: [
        {
          question: "What is the main purpose of a firewall?",
          options: [
            "Control network traffic according to rules",
            "Increase monitor brightness",
            "Create software applications",
            "Store passwords",
          ],
          answer: "Control network traffic according to rules",
        },
        {
          question:
            "Where can a host-based firewall operate?",
          options: [
            "On an individual computer or server",
            "Only inside a router",
            "Only on a website",
            "Only on a USB drive",
          ],
          answer: "On an individual computer or server",
        },
        {
          question:
            "Firewall rules should generally follow which security principle?",
          options: [
            "Least privilege",
            "Maximum exposure",
            "No authentication",
            "Unlimited access",
          ],
          answer: "Least privilege",
        },
      ],
    },
  },

  {
    id: 7,
    title: "VPNs & Secure Remote Access",
    icon: "🔒",

    lesson: {
      overview:
        "A Virtual Private Network (VPN) can provide protected communication across an untrusted network. VPNs are commonly used for secure remote access and protected connections between networks.",

      sections: [
        {
          heading: "What is a VPN?",
          content:
            "A VPN creates a protected communication channel between endpoints across another network. Depending on its configuration, it can provide confidentiality and integrity for network traffic.",
        },
        {
          heading: "Remote Access VPN",
          content:
            "A remote access VPN allows an authorized user to connect to an organization's network from another location. Authentication and access-control policies determine what resources the user can access.",
        },
        {
          heading: "Site-to-Site VPN",
          content:
            "A site-to-site VPN can connect two networks securely across an intermediary network such as the Internet. This is commonly used to connect offices or organizational locations.",
        },
        {
          heading: "Secure Remote Access",
          content:
            "Secure remote access should use strong authentication, appropriate authorization, encryption, endpoint security, and monitoring. A VPN does not automatically make every connected device trustworthy.",
        },
      ],

      mistakes: [
        "Thinking a VPN makes a user completely anonymous.",
        "Assuming every VPN configuration provides the same security.",
        "Ignoring authentication and endpoint security when using VPNs.",
      ],

      quiz: [
        {
          question: "What does VPN stand for?",
          options: [
            "Virtual Private Network",
            "Verified Public Node",
            "Virtual Protocol Number",
            "Variable Private Node",
          ],
          answer: "Virtual Private Network",
        },
        {
          question:
            "What is a remote access VPN commonly used for?",
          options: [
            "Securely connecting authorized users to organizational resources",
            "Increasing screen resolution",
            "Creating databases",
            "Replacing antivirus software",
          ],
          answer:
            "Securely connecting authorized users to organizational resources",
        },
        {
          question:
            "What is a site-to-site VPN designed to connect?",
          options: [
            "Networks",
            "Only keyboards",
            "Individual files",
            "Web browsers only",
          ],
          answer: "Networks",
        },
      ],
    },
  },

  {
    id: 8,
    title: "Network Attacks",
    icon: "⚠️",

    lesson: {
      overview:
        "Network attacks attempt to disrupt communication, gain unauthorized access, intercept information, or misuse network resources. Understanding common attack categories helps cybersecurity professionals recognize and defend against them.",

      sections: [
        {
          heading: "Denial-of-Service Attacks",
          content:
            "A Denial-of-Service (DoS) attack attempts to make a service or resource unavailable by overwhelming or exhausting its resources. Distributed Denial-of-Service (DDoS) attacks use multiple sources to generate traffic or requests.",
        },
        {
          heading: "Man-in-the-Middle Attacks",
          content:
            "In a man-in-the-middle attack, an attacker positions themselves between communicating parties and attempts to intercept or manipulate communication. Encryption and proper authentication help reduce this risk.",
        },
        {
          heading: "Spoofing",
          content:
            "Spoofing involves pretending to be another device, identity, or service. Examples include IP spoofing and other forms of identity or address impersonation.",
        },
        {
          heading: "Defensive Measures",
          content:
            "Defensive measures include network segmentation, encryption, authentication, secure configurations, firewalls, intrusion detection and prevention systems, monitoring, patching, and appropriate access controls.",
        },
      ],

      mistakes: [
        "Assuming every unusual packet automatically means an attack.",
        "Testing attack techniques against systems without authorization.",
        "Focusing only on attacks instead of understanding defensive controls.",
      ],

      quiz: [
        {
          question:
            "What is a DDoS attack intended to do?",
          options: [
            "Make a service unavailable by overwhelming it",
            "Improve network performance",
            "Encrypt a user's personal files",
            "Create a backup",
          ],
          answer:
            "Make a service unavailable by overwhelming it",
        },
        {
          question: "What is spoofing?",
          options: [
            "Pretending to be another device, identity, or service",
            "Compressing network packets",
            "Updating software",
            "Backing up a database",
          ],
          answer:
            "Pretending to be another device, identity, or service",
        },
        {
          question:
            "Which can help defend against network attacks?",
          options: [
            "Network segmentation and monitoring",
            "Removing authentication",
            "Disabling all logging",
            "Using default passwords",
          ],
          answer: "Network segmentation and monitoring",
        },
      ],
    },
  },

  {
    id: 9,
    title: "Network Monitoring & Security",
    icon: "📊",

    lesson: {
      overview:
        "Network monitoring helps security teams understand normal network behavior and identify suspicious activity. Monitoring, logging, and analysis are important parts of detecting and responding to security incidents.",

      sections: [
        {
          heading: "Network Monitoring",
          content:
            "Network monitoring involves observing network availability, performance, connections, traffic patterns, and security-related events. Continuous visibility helps organizations identify unusual behavior.",
        },
        {
          heading: "Packet Analysis",
          content:
            "Packet analysis examines network packets to understand communication between systems. Tools such as Wireshark can be used in authorized environments to inspect and troubleshoot network traffic.",
        },
        {
          heading: "IDS and IPS",
          content:
            "An Intrusion Detection System (IDS) monitors activity and generates alerts about potentially malicious behavior. An Intrusion Prevention System (IPS) can additionally take action to block or prevent certain detected activity.",
        },
        {
          heading: "Security Logs",
          content:
            "Logs can contain information about connections, authentication events, firewall decisions, system activity, and other security events. Centralized logging makes it easier to correlate events across systems.",
        },
        {
          heading: "Baseline and Anomalies",
          content:
            "A network baseline represents normal behavior. Security teams can compare current activity against that baseline to identify unusual patterns that may require investigation.",
        },
      ],

      mistakes: [
        "Ignoring logs because nothing appears suspicious at first.",
        "Treating every alert as a confirmed security incident.",
        "Monitoring networks without defining what normal behavior looks like.",
      ],

      quiz: [
        {
          question:
            "What is the purpose of network monitoring?",
          options: [
            "Observe network activity and identify unusual behavior",
            "Replace every security control",
            "Delete network logs",
            "Disable communication",
          ],
          answer:
            "Observe network activity and identify unusual behavior",
        },
        {
          question:
            "Which tool can be used for authorized packet analysis?",
          options: ["Wireshark", "Calculator", "Notepad", "Paint"],
          answer: "Wireshark",
        },
        {
          question: "What does an IDS primarily do?",
          options: [
            "Detect and alert on potentially malicious activity",
            "Automatically replace all network hardware",
            "Create user accounts",
            "Encrypt every stored file",
          ],
          answer:
            "Detect and alert on potentially malicious activity",
        },
      ],
    },
  },
];

// =====================================================
// COMPONENT
// =====================================================

function NetworkingNetworkSecurity({ goBack }) {
  // =====================================================
  // CURRENT LESSON
  // =====================================================

  const [currentLesson, setCurrentLesson] = useState(0);

  // =====================================================
  // CURRENT QUIZ QUESTION
  // =====================================================

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // =====================================================
  // ANSWER STATE
  // =====================================================

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  // =====================================================
  // COMPLETED LESSONS
  // =====================================================

  const { completed: completedLessons, markComplete: saveProgress } = useLearningProgress("cybersecurity-networking-network-security", subtopics);

  // =====================================================
  // SHUFFLED QUIZ OPTIONS
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

  const isCorrect =
    selectedAnswer === question.answer;

  // =====================================================
  // PROGRESS
  // =====================================================

  const lessonProgress = Math.round(
    ((currentLesson + 1) / subtopics.length) * 100
  );

  const quizProgress = Math.round(
    ((currentQuestion + 1) / quiz.length) * 100
  );

  // =====================================================
  // SELECT ANSWER
  // =====================================================

  const selectAnswer = (option) => {
    if (!submitted) {
      setSelectedAnswer(option);
    }
  };

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
    if (currentQuestion > 0) {
      setCurrentQuestion(
        (previous) => previous - 1
      );

      setSelectedAnswer("");
      setSubmitted(false);
    }
  };

  // =====================================================
  // NEXT LESSON
  // =====================================================

  const nextLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson < subtopics.length - 1) {
      setCurrentLesson(
        (previous) => previous + 1
      );

      setCurrentQuestion(0);
      setSelectedAnswer("");
      setSubmitted(false);

      return;
    }

    // Last lesson

    if (!completedLessons.includes(lesson.id)) {
      saveProgress(lesson.id);
    }
  };

  // =====================================================
  // PREVIOUS LESSON
  // =====================================================

  const previousLesson = () => {
    setQuizFinished(false);
    setQuizAnswers({});
    if (currentLesson > 0) {
      setCurrentLesson(
        (previous) => previous - 1
      );

      setCurrentQuestion(0);
      setSelectedAnswer("");
      setSubmitted(false);
    }
  };

  // =====================================================
  // RETURN TO TOPIC LIST
  // =====================================================

  const backToTopics = () => {
    setCurrentLesson(0);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setSubmitted(false);

    goBack();
  };

  // =====================================================
  // COMPLETION
  // =====================================================

  const isLastLesson =
    currentLesson === subtopics.length - 1;

  const isLastQuestion =
    currentQuestion === quiz.length - 1;

  const currentLessonCompleted =
    completedLessons.includes(lesson.id);

  // =====================================================
  // PAGE
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
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <button
          onClick={backToTopics}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "15px",
            cursor: "pointer",
            marginBottom: "25px",
          }}
        >
          ← Back to Networking Topics
        </button>

        {/* =================================================
            TOPIC HEADER
        ================================================= */}

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 4px 15px rgba(37, 99, 235, 0.08)",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span
              style={{
                fontSize: "40px",
              }}
            >
              🌐
            </span>

            <div>
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Cybersecurity • Topic 2
              </p>

              <h1
                style={{
                  margin: "5px 0 0",
                  color: "#1e3a8a",
                  fontSize: "30px",
                }}
              >
                Networking & Network Security
              </h1>
            </div>
          </div>

          {/* =================================================
              LESSON PROGRESS
          ================================================= */}

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                color: "#475569",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              <span>
                Lesson {currentLesson + 1} of{" "}
                {subtopics.length}
              </span>

              <span>{lessonProgress}%</span>
            </div>

            <div
              style={{
                height: "9px",
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
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* =================================================
            LESSON CARD
        ================================================= */}

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #bfdbfe",
            boxShadow:
              "0 4px 15px rgba(37, 99, 235, 0.08)",
          }}
        >
          {/* =================================================
              LESSON TITLE
          ================================================= */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                fontSize: "38px",
              }}
            >
              {lesson.icon}
            </span>

            <div>
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                Lesson {currentLesson + 1}
              </p>

              <h2
                style={{
                  margin: "5px 0 0",
                  color: "#1e3a8a",
                  fontSize: "28px",
                }}
              >
                {lesson.title}
              </h2>
            </div>
          </div>

          {/* =================================================
              OVERVIEW
          ================================================= */}

          <section>
            <h3
              style={{
                color: "#1e40af",
                fontSize: "21px",
              }}
            >
              📖 Overview
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {lesson.lesson.overview}
            </p>
          </section>

          {/* =================================================
              LESSON SECTIONS
          ================================================= */}

          {lesson.lesson.sections.map(
            (section, index) => (
              <section
                key={index}
                style={{
                  marginTop: "28px",
                }}
              >
                <h3
                  style={{
                    color: "#1e40af",
                    fontSize: "20px",
                  }}
                >
                  {index + 1}. {section.heading}
                </h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.8",
                    fontSize: "15px",
                  }}
                >
                  {section.content}
                </p>
              </section>
            )
          )}

          {/* =================================================
              COMMON MISTAKES
          ================================================= */}

          <section
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#eff6ff",
              borderRadius: "12px",
              border: "1px solid #bfdbfe",
            }}
          >
            <h3
              style={{
                color: "#1e40af",
                marginTop: 0,
              }}
            >
              ⚠️ Common Mistakes
            </h3>

            <ul
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              {lesson.lesson.mistakes.map(
                (mistake, index) => (
                  <li key={index}>
                    {mistake}
                  </li>
                )
              )}
            </ul>
          </section>

          {/* =================================================
              QUIZ
          ================================================= */}

          <section
            style={{
              marginTop: "35px",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "24px",
              }}
            >
              🧠 Lesson Quiz
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#64748b",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              <span>
                Question {currentQuestion + 1} of{" "}
                {quiz.length}
              </span>

              <span>{quizProgress}%</span>
            </div>

            <div
              style={{
                height: "7px",
                background: "#dbeafe",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: `${quizProgress}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* QUESTION */}

            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #dbeafe",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  color: "#1e293b",
                  lineHeight: "1.5",
                  marginTop: 0,
                }}
              >
                {question.question}
              </h3>

              {/* =================================================
                  OPTIONS
              ================================================= */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {options.map((option) => {
                  const isSelected =
                    selectedAnswer === option;

                  const isCorrectOption =
                    option === question.answer;

                  let background = "white";
                  let border = "1px solid #cbd5e1";
                  let textColor = "#334155";

                  if (submitted) {
                    if (isCorrectOption) {
                      background = "#dcfce7";
                      border = "2px solid #22c55e";
                      textColor = "#166534";
                    } else if (isSelected) {
                      background = "#fee2e2";
                      border = "2px solid #ef4444";
                      textColor = "#991b1b";
                    }
                  } else if (isSelected) {
                    background = "#dbeafe";
                    border = "2px solid #2563eb";
                    textColor = "#1e40af";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() =>
                        selectAnswer(option)
                      }
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "14px 16px",
                        border,
                        borderRadius: "9px",
                        background,
                        color: textColor,
                        cursor: submitted
                          ? "default"
                          : "pointer",
                        fontSize: "15px",
                        lineHeight: "1.4",
                      }}
                    >
                      {option}

                      {submitted &&
                        isCorrectOption && (
                          <span
                            style={{
                              float: "right",
                              fontWeight: "700",
                            }}
                          >
                            ✓ Correct
                          </span>
                        )}

                      {submitted &&
                        isSelected &&
                        !isCorrectOption && (
                          <span
                            style={{
                              float: "right",
                              fontWeight: "700",
                            }}
                          >
                            ✗ Wrong
                          </span>
                        )}
                    </button>
                  );
                })}
              </div>

              {/* =================================================
                  FEEDBACK
              ================================================= */}

              {submitted && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px",
                    borderRadius: "10px",
                    background: isCorrect
                      ? "#dcfce7"
                      : "#fee2e2",
                    border: isCorrect
                      ? "1px solid #86efac"
                      : "1px solid #fca5a5",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "700",
                      color: isCorrect
                        ? "#166534"
                        : "#991b1b",
                    }}
                  >
                    {isCorrect
                      ? "🎉 Correct answer!"
                      : "❌ Incorrect answer."}
                  </p>

                  {!isCorrect && (
                    <p
                      style={{
                        marginBottom: 0,
                        color: "#991b1b",
                      }}
                    >
                      Correct answer:{" "}
                      <strong>
                        {question.answer}
                      </strong>
                    </p>
                  )}
                </div>
              )}

              {/* =================================================
                  QUIZ NAVIGATION
              ================================================= */}

              <div
                style={{
                  marginTop: "22px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  style={{
                    padding: "11px 18px",
                    borderRadius: "8px",
                    border:
                      "1px solid #93c5fd",
                    background:
                      currentQuestion === 0
                        ? "#e2e8f0"
                        : "white",
                    color:
                      currentQuestion === 0
                        ? "#94a3b8"
                        : "#1d4ed8",
                    cursor:
                      currentQuestion === 0
                        ? "not-allowed"
                        : "pointer",
                    fontWeight: "600",
                  }}
                >
                  ← Previous Question
                </button>

                {!submitted ? (
                  <button
                    onClick={submitAnswer}
                    disabled={!selectedAnswer}
                    style={{
                      padding: "11px 22px",
                      borderRadius: "8px",
                      border: "none",
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
                    onClick={nextQuestion}
                    style={{
                      padding: "11px 22px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#2563eb",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {isLastQuestion
                      ? "✓ Finish Quiz"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* =================================================
              LESSON NAVIGATION
          ================================================= */}

          <div
            style={{
              marginTop: "30px",
              paddingTop: "25px",
              borderTop: "1px solid #dbeafe",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              {/* PREVIOUS LESSON */}

              <button
                onClick={previousLesson}
                disabled={currentLesson === 0}
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #93c5fd",
                  background:
                    currentLesson === 0
                      ? "#e2e8f0"
                      : "white",
                  color:
                    currentLesson === 0
                      ? "#94a3b8"
                      : "#1d4ed8",
                  cursor:
                    currentLesson === 0
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                ← Previous Lesson
              </button>

              {/* NEXT LESSON */}

              <button
                onClick={nextLesson}
                disabled={
                  !currentLessonCompleted &&
                  !isLastQuestion
                }
                style={{
                  padding: "12px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    !currentLessonCompleted &&
                    !isLastQuestion
                      ? "#94a3b8"
                      : "#2563eb",
                  color: "white",
                  cursor:
                    !currentLessonCompleted &&
                    !isLastQuestion
                      ? "not-allowed"
                      : "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {isLastLesson
                  ? "✓ Complete Topic"
                  : "Next Lesson →"}
              </button>
            </div>

            {/* LESSON STATUS */}

            <div
              style={{
                textAlign: "center",
                marginTop: "15px",
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              {currentLessonCompleted
                ? "✓ Lesson completed"
                : "Complete the quiz to unlock the next lesson"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkingNetworkSecurity;