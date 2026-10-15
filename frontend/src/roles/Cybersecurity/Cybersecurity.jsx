import React, { useState } from "react";

import CybersecurityFundamentals from "./Cybersecurity-Fundamentals/Cybersecurity-Fundamentals";
import NetworkingNetworkSecurity from "./Networking-Network-Security/Networking-Network-Security";
import LinuxCommandLine from "./Linux-Command-Line/Linux-Command-Line";
import Cryptography from "./Cryptography/Cryptography";
import WebSecurity from "./Web-Security/Web-Security";
import AuthenticationAccessControl from "./Authentication-Access-Control/Authentication-Access-Control";
import VulnerabilityAssessment from "./Vulnerability-Assessment/Vulnerability-Assessment";
import EthicalHackingPenetrationTesting from "./Ethical-Hacking-Penetration-Testing/Ethical-Hacking-Penetration-Testing";
import CybersecurityTools from "./Cybersecurity-Tools/Cybersecurity-Tools";
import MalwareCyberThreats from "./Malware-Cyber-Threats/Malware-Cyber-Threats";
import DigitalForensics from "./Digital-Forensics/Digital-Forensics";
import SecurityOperationsIncidentResponse from "./Security-Operations-Incident-Response/Security-Operations-Incident-Response";
import CloudSecurity from "./Cloud-Security/Cloud-Security";
import CybersecurityProjects from "./Cybersecurity-Projects/Cybersecurity-Projects";

const topics = [
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    icon: "🔐",
    lessons: 8,
  },
  {
    id: "networking-network-security",
    title: "Networking & Network Security",
    icon: "🌐",
    lessons: 9,
  },
  {
    id: "linux-command-line",
    title: "Linux & Command Line",
    icon: "🐧",
    lessons: 7,
  },
  {
    id: "cryptography",
    title: "Cryptography",
    icon: "🔑",
    lessons: 7,
  },
  {
    id: "web-security",
    title: "Web Security",
    icon: "🌍",
    lessons: 9,
  },
  {
    id: "authentication-access-control",
    title: "Authentication & Access Control",
    icon: "👤",
    lessons: 7,
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    icon: "🔎",
    lessons: 7,
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    icon: "🕵️",
    lessons: 9,
  },
  {
    id: "cybersecurity-tools",
    title: "Cybersecurity Tools",
    icon: "🛠️",
    lessons: 8,
  },
  {
    id: "malware-threats",
    title: "Malware & Cyber Threats",
    icon: "🦠",
    lessons: 7,
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    icon: "🔬",
    lessons: 7,
  },
  {
    id: "security-operations",
    title: "Security Operations & Incident Response",
    icon: "🚨",
    lessons: 8,
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: "☁️",
    lessons: 7,
  },
  {
    id: "cybersecurity-projects",
    title: "Cybersecurity Projects",
    icon: "💻",
    lessons: 6,
  },
];

const Cybersecurity = ({ goBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const totalLessons = topics.reduce(
    (total, topic) => total + topic.lessons,
    0
  );

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    if (selectedTopic.id === "cybersecurity-fundamentals") {
      return <CybersecurityFundamentals goBack={closeTopic} />;
    }

    if (selectedTopic.id === "networking-network-security") {
      return <NetworkingNetworkSecurity goBack={closeTopic} />;
    }

    if (selectedTopic.id === "linux-command-line") {
      return <LinuxCommandLine goBack={closeTopic} />;
    }

    if (selectedTopic.id === "cryptography") {
      return <Cryptography goBack={closeTopic} />;
    }

    if (selectedTopic.id === "web-security") {
      return <WebSecurity goBack={closeTopic} />;
    }

    if (selectedTopic.id === "authentication-access-control") {
      return <AuthenticationAccessControl goBack={closeTopic} />;
    }

    if (selectedTopic.id === "vulnerability-assessment") {
      return <VulnerabilityAssessment goBack={closeTopic} />;
    }

    if (selectedTopic.id === "ethical-hacking") {
      return <EthicalHackingPenetrationTesting goBack={closeTopic} />;
    }

    if (selectedTopic.id === "cybersecurity-tools") {
      return <CybersecurityTools goBack={closeTopic} />;
    }

    if (selectedTopic.id === "malware-threats") {
      return <MalwareCyberThreats goBack={closeTopic} />;
    }

    if (selectedTopic.id === "digital-forensics") {
      return <DigitalForensics goBack={closeTopic} />;
    }

    if (selectedTopic.id === "security-operations") {
      return <SecurityOperationsIncidentResponse goBack={closeTopic} />;
    }

    if (selectedTopic.id === "cloud-security") {
      return <CloudSecurity goBack={closeTopic} />;
    }

    if (selectedTopic.id === "cybersecurity-projects") {
      return <CybersecurityProjects goBack={closeTopic} />;
    }
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
          ← Back to Career Roles
        </button>

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
            🛡️ Cybersecurity Roadmap
          </h1>

          <p
            style={{
              margin: "0 0 22px",
              color: "#64748b",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            Learn cybersecurity from fundamentals to
            security operations, ethical security testing,
            cloud security, and practical projects.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "180px",
                padding: "18px",
                background: "#eff6ff",
                borderRadius: "12px",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                Total Topics
              </div>

              <div
                style={{
                  color: "#1e3a8a",
                  fontSize: "25px",
                  fontWeight: "700",
                }}
              >
                {topics.length}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "180px",
                padding: "18px",
                background: "#eff6ff",
                borderRadius: "12px",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                Total Lessons
              </div>

              <div
                style={{
                  color: "#1e3a8a",
                  fontSize: "25px",
                  fontWeight: "700",
                }}
              >
                {totalLessons}
              </div>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "180px",
                padding: "18px",
                background: "#eff6ff",
                borderRadius: "12px",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  marginBottom: "6px",
                }}
              >
                Overall Progress
              </div>

              <div
                style={{
                  color: "#1e3a8a",
                  fontSize: "25px",
                  fontWeight: "700",
                }}
              >
                0%
              </div>
            </div>
          </div>

          <div style={{ marginTop: "22px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                color: "#334155",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              <span>Overall Progress</span>
              <span>0%</span>
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
                  width: "0%",
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              style={{
                background: "white",
                borderRadius: "14px",
                padding: "22px",
                border: "1px solid #bfdbfe",
                boxShadow:
                  "0 5px 15px rgba(37, 99, 235, 0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "23px",
                  }}
                >
                  {topic.icon}
                </div>

                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Topic {index + 1}
                </div>
              </div>

              <h3
                style={{
                  margin: "0 0 12px",
                  color: "#1e3a8a",
                  fontSize: "18px",
                  lineHeight: "1.4",
                }}
              >
                {topic.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  {topic.lessons} lessons
                </span>

                <span
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  0% complete
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "7px",
                  background: "#dbeafe",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "0%",
                    height: "100%",
                    background: "#2563eb",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <button
                onClick={() => openTopic(topic)}
                style={{
                  width: "100%",
                  padding: "11px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Open Topic →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;