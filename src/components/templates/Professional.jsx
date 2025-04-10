import React from "react";
import "../css/templateProf.css";

const Professional = ({ data }) => {
  return (
    <div className="professional-wrapper">
      <div className="professional-container">

        {/* Sidebar */}
        <div className="professional-sidebar">

          {/* Profile Image & Name */}
          <div className="professional-profile-section">
            <figure className="professional-image-container">
              <img src={data?.profilePic} alt="Profile" className="professional-profile-image" />
            </figure>
            <h1>{data?.personal?.fullName}</h1>
            <h2>{data?.personal?.jobTitle}</h2>
          </div>

          {/* Contact */}
          <div className="professional-sidebar-section">
            <h3 className="professional-section-title-skill">Contact</h3>
            <div className="professional-contact-item">
              <h4  className="professional-contact-label">Phone</h4>
              <span className="professional-contact-value">{data?.personal?.phone}</span>
            </div>
            <div className="professional-contact-item">
              <h4 className="professional-contact-label">Email</h4>
              <span className="professional-contact-value">{data?.personal?.email}</span>
            </div>
            {data?.personal?.linkedin && (
              <div className="professional-contact-item">
                <h4 className="professional-contact-label">LinkedIn</h4>
                <span className="professional-contact-value">{data.personal.linkedin}</span>
              </div>
            )}
            {data?.personal?.address && (
              <div className="professional-contact-item">
                <h4 className="professional-contact-label">Address</h4>
                <span className="professional-contact-value">{data.personal.address}</span>
              </div>
            )}
          </div>

        {/* Technical Skills */}
<section className="professional-sidebar-section">
  <h3 className="professional-section-title-skill">Technical Skills</h3>
  <ul className="professional-skill-list">
    {(data?.skills?.technical || "")
      .join(",") // Convert array to comma-separated string
      .split(",") // Split by comma
      .map((skill, index) => (
        <li key={index} className="professional-skill-item">{skill.trim()}</li>
      ))}
  </ul>
</section>

{/* Soft Skills */}
<section className="professional-sidebar-section">
  <h3 className="professional-section-title-skill">Soft Skills</h3>
  <ul className="professional-skill-list">
    {(data?.skills?.soft || "")
      .join(",") // Convert array to comma-separated string
      .split(",") // Split by comma
      .map((skill, index) => (
        <li key={index} className="professional-soft-skill-item">{skill.trim()}</li>
      ))}
  </ul>
</section>

       
        </div>

        {/* Main Content */}
        <div className="professional-main">

          {/* Summary */}
          {data?.personal?.aboutMe && (
            <div className="professional-main-section">
              <h3 className="professional-summary">Professional Summary</h3>
              <p className="professional-text">{data.personal.aboutMe}</p>
            </div>
          )}

          {/* Experience */}
          {(data?.experience?.items?.length || 0) > 0 && (
            <section className="professional-resume-section">
              <h2 className="professional-section-title">Work Experience</h2>
              <div className="professional-section-content">
                {data.experience.items.map((exp, index) => (
                  <div key={index} className="professional-experience-item">
                    <div className="professional-experience-header">
                      <h3 className="professional-job-title">{exp.jobTitle}</h3>
                      <p className="professional-company">{exp.companyName}</p>
                      <p className="professional-duration">{exp.companyExp}</p>
                      <p className="professional-job-description">{exp.jobDescription}</p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}



          {/* Projects */}
          {(data?.experience?.projects?.length || 0) > 0 && (
            <section className="professional-main-section">
              <h3 className="professional-section-title">Projects</h3>
              <div className="professional-section-content">
                {data.experience.projects.map((project, index) => (
                  <div key={index} className="professional-project-item">
                    <h4 className="professional-project-title">{project.title}</h4>
                    <p className="professional-project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}


          {/* Education */}
          {(data?.education?.length || 0) > 0 && (
            <section className="professional-main-section">
              <h3 className="professional-section-title">Education</h3>
              <div className="professional-section-content">
                {data.education.map((edu, index) => (
                  <div key={index} className="professional-education-item">
                    <div className="professional-education-header">
                      <div className="professional-education-title-container">
                        <h4 className="professional-education-degree">{edu.degree}</h4>
                        <p className="professional-institution-name">{edu.university}</p>
                      </div>
                      <p className="professional-education-date">
                        {edu.year} | CGPA: {edu.cgpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

    {/* Languages + Interests under Education */}
{(data?.skills?.language?.length > 0 || data?.skills?.interests?.length > 0) && (
  <section className="professional-main-section">
    <h3 className="professional-section-title">More About Me</h3>
    <div className="professional-section-content professional-two-column">
      {data?.skills?.language?.length > 0 && (
        <div>
          <h4 className="professional-subtitle">Languages</h4>
          <ul className="professional-list">
            {data.skills.language.join(",").split(",").map((lang, index) => (
              <li key={index} className="professional-list-item">{lang.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      {data?.skills?.interests?.length > 0 && (
        <div>
          <h4 className="professional-subtitle">Interests</h4>
          <ul className="professional-list">
            {data.skills.interests.join(",").split(",").map((interest, index) => (
              <li key={index} className="professional-list-item">{interest.trim()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
)}


        </div>
      </div>
    </div>
  );
};

export default Professional;
