import React from "react";
import '../css/templateModern.css'

const Modern = ({ data }) => {
  return (
    <div className="modern-container">
      {/* Header Section */}
      <header className="modern-header">
        <div className="header-content">
          <figure className="modern-image-container">
            <img src={data?.profilePic} alt="Profile" className="modern-image" />
          </figure>
          <div className="header-text">
            <h1 className="modern-primary-heading">{data?.personal?.fullName}</h1>
            <h3 className="modern-secondary-heading">{data?.personal?.jobTitle}</h3>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="modern-content">
        {/* Sidebar */}
        <aside className="modern-aside">
          <div className="modern-details">
            <h3 className="modern-title">Contact</h3>
            <p>📍 {data?.personal?.address}</p>
            <p>📞 {data?.personal?.phone}</p>
            <p className="modern-email">📧 {data?.personal?.email}</p>
            {data?.personal?.linkedin && <p>🔗 {data.personal.linkedin}</p>}
          </div>

          {/* Education Section */}
          {(data?.education?.length || 0) > 0 && (
            <div className="modern-details">
              <h3 className="modern-title">Education</h3>
              {data.education.map((edu, index) => (
                <div key={index}>
                  <p><strong>{edu.degree}</strong></p>
                  <p>{edu.university}</p>
                  <p>Year: {edu.year} | CGPA: {edu.cgpa}</p>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main Section */}
        <main className="modern-main">
          {/* About Me Section */}
          <section className="modern-section">
            <h3 className="modern-title">About Me</h3>
            <p>{data?.personal?.aboutMe}</p>
          </section>

          {/* Experience Section */}
          {(data?.experience?.items?.length || 0) > 0 && (
            <section className="modern-section">
              <h3 className="modern-title">Experience</h3>
              {data.experience.items.map((exp, index) => (
                <div key={index}>
                  <p><strong>{exp.companyName}</strong></p>
                  <p>{exp.companyExp}</p>
                  <p>{exp.jobDescription}</p>
                </div>
              ))}
            </section>
          )}

          {/* Project Section */}
          {(data?.experience?.projects?.length || 0) > 0 && (
            <section className="modern-section modern-project">
              <h3 className="modern-title">Projects</h3>
              {data.experience.projects.map((proj, index) => (
                <div key={index} className="modern-project-item">
                  <p className="modern-project-title"><strong>{proj.title}</strong></p>
                  <p className="modern-project-description">{proj.description}</p>
                </div>
              ))}
            </section>
          )}


          {/* Skills Section */}
          <section className="modern-section modern-skills">
            <h3 className="modern-title">Skills</h3>
            <div className="modern-skills-container">
              <div>
                <h4>Technical Skills</h4>
                <ul>
                  {(data?.skills?.technical || []).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Soft Skills</h4>
                <ul>
                  {(data?.skills?.soft || []).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Languages</h4>
                <ul>
                  {(data?.skills?.language || []).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Interests</h4>
                <ul>
                  {(data?.skills?.interests || []).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="modern-footer"></footer>
    </div>
  );
};

export default Modern;
