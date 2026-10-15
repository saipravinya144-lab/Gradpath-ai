import FullStack from "../roles/FullStack/FullStack.jsx";
import AIML from "../roles/AIML/AIML.jsx";
import DataAnalyst from "../roles/DataAnalyst/DataAnalyst.jsx";
import Android from "../roles/Android/Android.jsx";
import Cybersecurity from "../roles/Cybersecurity/Cybersecurity.jsx";
import CloudDevOps from "../roles/CloudDevOps/CloudDevOps.jsx";

function RoleRoadmap({
  selectedRole,
  setPage,
  selectedSubject,
  setSelectedSubject,
}) {
  const roleSubjects = {
    "Full Stack Developer": ["Full Stack Developer Roadmap"],
    "AI / ML Engineer": ["AI / ML Engineer Roadmap"],
    "Data Analyst": ["Data Analyst Roadmap"],
    "Android Developer": ["Android Developer Roadmap"],
    Cybersecurity: ["Cybersecurity Roadmap"],
    "Cloud / DevOps Engineer": ["Cloud / DevOps Roadmap"],
  };

  const subjects = roleSubjects[selectedRole] || [];

  const openSubject = (subject) => {
    setSelectedSubject(subject);
  };

  const goBackToRoleRoadmap = () => {
    setSelectedSubject("");
    setPage("roleRoadmap");
  };

  const goBackToRoleSelection = () => {
    setSelectedSubject("");
    setPage("roleSelection");
  };

  const goBackToDashboard = () => {
    setSelectedSubject("");
    setPage("dashboard");
  };

  const renderRoleSubject = () => {
    if (
      selectedRole === "Full Stack Developer" &&
      selectedSubject === "Full Stack Developer Roadmap"
    ) {
      return (
        <FullStack
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    if (
      selectedRole === "AI / ML Engineer" &&
      selectedSubject === "AI / ML Engineer Roadmap"
    ) {
      return (
        <AIML
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    if (
      selectedRole === "Data Analyst" &&
      selectedSubject === "Data Analyst Roadmap"
    ) {
      return (
        <DataAnalyst
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    if (
      selectedRole === "Android Developer" &&
      selectedSubject === "Android Developer Roadmap"
    ) {
      return (
        <Android
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    if (
      selectedRole === "Cybersecurity" &&
      selectedSubject === "Cybersecurity Roadmap"
    ) {
      return (
        <Cybersecurity
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    if (
      selectedRole === "Cloud / DevOps Engineer" &&
      selectedSubject === "Cloud / DevOps Roadmap"
    ) {
      return (
        <CloudDevOps
          goBack={goBackToRoleRoadmap}
        />
      );
    }

    return null;
  };

  // =====================================================
  // SHOW SELECTED ROLE ROADMAP
  // =====================================================

  if (selectedSubject) {
    return (
      <>
        {renderRoleSubject()}
      </>
    );
  }

  // =====================================================
  // ROLE ROADMAP SELECTION PAGE
  // =====================================================

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h2>🗺️ Your Career Roadmap</h2>

      <p>
        Selected Career Role:{" "}
        <strong>{selectedRole}</strong>
      </p>

      <hr />

      <h3>📚 Roadmap</h3>

      {subjects.map((subject) => (
        <div
          key={subject}
          style={{
            marginBottom: "15px",
          }}
        >
          <button
            onClick={() => openSubject(subject)}
          >
            {subject} →
          </button>
        </div>
      ))}

      <br />

      <button
        onClick={goBackToRoleSelection}
      >
        ← Change Career Role
      </button>

      <br />
      <br />

      <button
        onClick={goBackToDashboard}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}

export default RoleRoadmap;