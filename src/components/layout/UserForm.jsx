import React, { useState } from 'react'
import '../css/useForm.css'

const UserForm = () => {

    const [activeTab, setActiveTab] = useState("Personal");
  const [experienceType, setExperienceType] = useState("fresher");
  return (
   <>
    <div className="resume-container">
      <h2>Create Your Resume</h2>
      <p>Fill in your details to generate your professional resume</p>

      {/* Tabs Section */}
      <div className="tabs">
        {["Personal", "Education", "Experience", "Skills"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Section - Dynamic Based on Tab */}
      <form className="resume-form">
        {activeTab === "Personal" && (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Badal Patel" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="badal@example.com" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+1 234 567 890" />
            </div>

            <div className="form-group full-width">
              <label>Address</label>
              <textarea placeholder="Your address"></textarea>
            </div>
          </>
        )}

        {activeTab === "Education" && (
          <>
            <div className="form-group">
              <label>Degree</label>
              <input type="text" placeholder="B.E in Computer Engineering" />
            </div>

            <div className="form-group">
              <label>University</label>
              <input type="text" placeholder="GTU" />
            </div>

            <div className="form-group">
              <label>Year of Graduation</label>
              <input type="number" placeholder="2025" />
            </div>
          </>
        )}

        {activeTab === "Experience" && (
          <>
            {/* Experience Type (Fresher / Experienced) */}
            <div className="form-group">
              <label>Experience Type</label>
              <div className="experience-buttons">
                <button
                  type="button"
                  className={experienceType === "fresher" ? "exp-btn active" : "exp-btn"}
                  onClick={() => setExperienceType("fresher")}
                >
                  Fresher
                </button>
                <button
                  type="button"
                  className={experienceType === "experienced" ? "exp-btn active" : "exp-btn"}
                  onClick={() => setExperienceType("experienced")}
                >
                  Experienced
                </button>
              </div>
            </div>

            {/* Experienced Fields */}
            {experienceType === "experienced" && (
              <>
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" placeholder="Software Engineer" />
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Google" />
                </div>

                <div className="form-group">
                  <label>Years of Experience</label>
                  <input type="number" placeholder="3" />
                </div>
              </>
            )}

            {/* Projects (Common for Both Fresher & Experienced) */}
            <div className="form-group">
              <label>Project Name</label>
              <input type="text" placeholder="E-commerce Website" />
            </div>

            <div className="form-group full-width">
              <label>Project Summary</label>
              <textarea placeholder="Describe your project..."></textarea>
            </div>
          </>
        )}

        {activeTab === "Skills" && (
          <>
            <div className="form-group">
              <label>Technical Skills</label>
              <input type="text" placeholder="React, Node.js, Python" />
            </div>

            <div className="form-group">
              <label>Soft Skills</label>
              <input type="text" placeholder="Communication, Teamwork" />
            </div>
          </>
        )}

        <div className="form-buttons">
          <button type="button" className="prev-btn">Previous</button>
          <button type="submit" className="next-btn">Next</button>
        </div>
      </form>
    </div>
   </>
  )
}

export default UserForm
