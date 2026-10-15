import { useEffect, useState } from "react";
import "./StudentProfile.css";

function StudentProfile({
  token,
  student = null,
  onProfileCreated,
  onProfileUpdated,
  onCancel
}) {

  const isEditMode = Boolean(student);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    skills: "",
    interests: "",
    careerGoal: "",
    targetRole: "",
    experienceLevel: "",
    projects: "",
    internshipStatus: "",
    weakAreas: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= GET USER / STUDENT DETAILS =================

  useEffect(() => {

    const loadProfileData = async () => {

      // EDIT MODE
      if (student) {

        setFormData({
          name: student.name || "",
          email: student.email || "",
          branch: student.branch || "",
          year: student.year ? String(student.year) : "",

          skills: Array.isArray(student.skills)
            ? student.skills.join(", ")
            : "",

          interests: Array.isArray(student.interests)
            ? student.interests.join(", ")
            : "",

          careerGoal: student.careerGoal || "",
          targetRole: student.targetRole || "",
          experienceLevel: student.experienceLevel || "",

          projects: Array.isArray(student.projects)
            ? student.projects.join(", ")
            : "",

          internshipStatus: student.internshipStatus || "",

          weakAreas: Array.isArray(student.weakAreas)
            ? student.weakAreas.join(", ")
            : ""
        });

        return;
      }

      // CREATE MODE
      try {

        const response = await fetch(
          "http://localhost:5000/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {

          setFormData((previous) => ({
            ...previous,
            name: data.user.name || "",
            email: data.user.email || ""
          }));

        }

      } catch (error) {

        console.error(
          "Error fetching user:",
          error
        );

      }

    };

    loadProfileData();

  }, [token, student]);

  // ================= INPUT CHANGE =================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

  };

  // ================= SUBMIT PROFILE =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {

      const profileData = {

        name: formData.name,
        email: formData.email,
        branch: formData.branch,
        year: Number(formData.year),

        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        interests: formData.interests
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        careerGoal: formData.careerGoal,

        targetRole: formData.targetRole,

        experienceLevel: formData.experienceLevel,

        projects: formData.projects
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        internshipStatus: formData.internshipStatus,

        weakAreas: formData.weakAreas
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)

      };

      // CREATE = POST
      // EDIT = PUT
      const response = await fetch(
        isEditMode
          ? "http://localhost:5000/student-profile"
          : "http://localhost:5000/student-profile",
        {
          method: isEditMode ? "PUT" : "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify(profileData)
        }
      );

      const data = await response.json();

      if (response.ok) {

        if (isEditMode) {

          setMessage(
            "Profile updated successfully! 🎉"
          );

          if (onProfileUpdated) {
            onProfileUpdated(data);
          }

        } else {

          setMessage(
            "Profile created successfully! 🎉"
          );

          if (onProfileCreated) {
            onProfileCreated(data);
          }

        }

      } else {

        setMessage(
          data.message ||
          (isEditMode
            ? "Failed to update profile"
            : "Failed to create profile")
        );

      }

    } catch (error) {

      console.error(error);

      setMessage(
        "Cannot connect to server"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="profile-page">

      {/* ================= HEADER ================= */}

      <header className="profile-header">

        <div className="profile-brand">

          <span className="brand-icon">
            🚀
          </span>

          <div>

            <h1>GradPath AI</h1>

            <span>
              Your Roadmap from Campus to Career
            </span>

          </div>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="profile-main">

        {/* ================= INTRO ================= */}

        <section className="profile-intro">

          <div className="intro-icon">
            🎓
          </div>

          <div>

            <p className="intro-label">
              {isEditMode
                ? "UPDATE YOUR PROFILE"
                : "LET'S GET STARTED"}
            </p>

            <h2>
              {isEditMode
                ? "Edit Your Student Profile"
                : "Build Your Student Profile"}
            </h2>

            <p>
              {isEditMode
                ? "Update your details so GradPath AI can keep your learning journey personalized."
                : "Tell GradPath AI about yourself so we can understand your goals and personalize your learning journey."}
            </p>

          </div>

        </section>


        <form
          className="profile-form"
          onSubmit={handleSubmit}
        >

          {/* ================= BASIC INFORMATION ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                👤
              </div>

              <div>

                <h3>
                  Basic Information
                </h3>

                <p>
                  Tell us a little about yourself.
                </p>

              </div>

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Branch
                </label>

                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="Example: CSE"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Year
                </label>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select your year
                  </option>

                  <option value="1">
                    1st Year
                  </option>

                  <option value="2">
                    2nd Year
                  </option>

                  <option value="3">
                    3rd Year
                  </option>

                  <option value="4">
                    4th Year
                  </option>

                </select>

              </div>

            </div>

          </section>


          {/* ================= SKILLS ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                🛠️
              </div>

              <div>

                <h3>
                  Skills & Interests
                </h3>

                <p>
                  What do you know and what interests you?
                </p>

              </div>

            </div>


            <div className="form-group">

              <label>
                Skills
              </label>

              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Python, Java, SQL, Git..."
              />

              <span className="input-hint">
                Separate multiple skills with commas.
              </span>

            </div>


            <div className="form-group">

              <label>
                Interests
              </label>

              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="AI/ML, Web Development, Cybersecurity..."
              />

              <span className="input-hint">
                Separate multiple interests with commas.
              </span>

            </div>

          </section>


          {/* ================= CAREER ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                🎯
              </div>

              <div>

                <h3>
                  Career Information
                </h3>

                <p>
                  Help us understand where you want to go.
                </p>

              </div>

            </div>


            <div className="form-group">

              <label>
                Career Goal
              </label>

              <textarea
                name="careerGoal"
                value={formData.careerGoal}
                onChange={handleChange}
                placeholder="What do you want to achieve in your career?"
                rows="4"
              />

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Target Role
                </label>

                <input
                  type="text"
                  name="targetRole"
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="Example: AI/ML Engineer"
                />

              </div>


              <div className="form-group">

                <label>
                  Current Experience Level
                </label>

                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >

                  <option value="">
                    Select your level
                  </option>

                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                </select>

              </div>

            </div>

          </section>


          {/* ================= PROJECTS ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                💻
              </div>

              <div>

                <h3>
                  Projects
                </h3>

                <p>
                  Show us what you have built.
                </p>

              </div>

            </div>


            <div className="form-group">

              <label>
                Projects Completed
              </label>

              <input
                type="text"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                placeholder="Smart Recipe App, Med-Lens, Signal Pilot..."
              />

              <span className="input-hint">
                Separate multiple projects with commas.
              </span>

            </div>

          </section>


          {/* ================= INTERNSHIP ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                💼
              </div>

              <div>

                <h3>
                  Internship
                </h3>

                <p>
                  Tell us where you are in your internship journey.
                </p>

              </div>

            </div>


            <div className="form-group">

              <label>
                Internship Status
              </label>

              <select
                name="internshipStatus"
                value={formData.internshipStatus}
                onChange={handleChange}
              >

                <option value="">
                  Select status
                </option>

                <option value="Not Started">
                  Not Started
                </option>

                <option value="Preparing">
                  Preparing
                </option>

                <option value="Applied">
                  Applied
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

            </div>

          </section>


          {/* ================= WEAK AREAS ================= */}

          <section className="profile-card">

            <div className="section-heading">

              <div className="section-icon">
                📈
              </div>

              <div>

                <h3>
                  Areas to Improve
                </h3>

                <p>
                  Knowing your weak areas helps us guide you better.
                </p>

              </div>

            </div>


            <div className="form-group">

              <label>
                Weak Areas
              </label>

              <input
                type="text"
                name="weakAreas"
                value={formData.weakAreas}
                onChange={handleChange}
                placeholder="DSA, SQL, Communication..."
              />

              <span className="input-hint">
                Separate multiple areas with commas.
              </span>

            </div>

          </section>


          {/* ================= SUBMIT ================= */}

          <div className="profile-submit">

            <button
              type="submit"
              disabled={loading}
            >

              {loading
                ? (isEditMode
                    ? "Saving Changes..."
                    : "Creating Your Profile...")
                : (isEditMode
                    ? "Save Changes ✓"
                    : "Create My Profile 🚀")}

            </button>


            {isEditMode && onCancel && (
              <button
                type="button"
                onClick={onCancel}
                disabled={loading}
              >
                Cancel
              </button>
            )}


            <p>
              {isEditMode
                ? "Your updated details will be saved to your GradPath AI profile."
                : "You can update these details later."}
            </p>

          </div>


          {/* ================= MESSAGE ================= */}

          {message && (
            <div className="profile-message">
              {message}
            </div>
          )}

        </form>

      </main>

    </div>
  );
}

export default StudentProfile;