import React from "react";

function RoleSelection({ setPage, setSelectedRole }) {
  const roles = [
    {
      name: "Full Stack Developer",
      icon: "💻",
      description: "Build complete web applications from frontend to backend.",
    },
    {
      name: "AI / ML Engineer",
      icon: "🤖",
      description:
        "Build intelligent systems using Artificial Intelligence and Machine Learning.",
    },
    {
      name: "Data Analyst",
      icon: "📊",
      description: "Analyze data and turn it into useful insights.",
    },
    {
      name: "Android Developer",
      icon: "📱",
      description: "Build modern Android mobile applications.",
    },
    {
      name: "Cybersecurity",
      icon: "🔐",
      description: "Learn how to protect systems, applications, and networks.",
    },
    {
      name: "Cloud / DevOps Engineer",
      icon: "☁️",
      description:
        "Learn cloud infrastructure, automation, deployment, and DevOps.",
    },
  ];

  const selectRole = (role) => {
    setSelectedRole(role);
    setPage("roleRoadmap");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)",
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
        {/* Back Button */}
        <button
          onClick={() => setPage("dashboard")}
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
          ← Back to Dashboard
        </button>

        {/* Heading */}
        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 8px",
            color: "#111827",
          }}
        >
          🎯 Choose Your Career Role
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Select the career role you are interested in and GradPath AI will
          guide you through a structured learning roadmap.
        </p>

        {/* Role Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {roles.map((role, index) => (
            <div
              key={role.name}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "26px",
                minHeight: "190px",
                border: "1px solid #bfdbfe",
                boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "13px",
                    color: "#6b7280",
                    fontWeight: "600",
                  }}
                >
                  ROLE {index + 1}
                </p>

                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "21px",
                    color: "#111827",
                    lineHeight: "1.35",
                  }}
                >
                  {role.icon} {role.name}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {role.description}
                </p>
              </div>

              <button
                onClick={() => selectRole(role.name)}
                style={{
                  alignSelf: "flex-start",
                  marginTop: "20px",
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
                Select Role →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;