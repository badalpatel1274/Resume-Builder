import React from "react";
import '../css/templateModern.css'

const Modern = ({data}) => {
  return (
    <div className="modern-container">
    {/* Header Section */}
    <header className="modern-header">
      <div className="header-content">
        <figure className="modern-image-container">
          <img src={data.profilePic} alt="Profile" className="modern-image" />
        </figure>
        <div className="header-text">
          <h1 className="modern-primary-heading">{data.personal.fullName}</h1>
          <h3 className="modern-secondary-heading">{data.personal.jobTitle}</h3>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <div className="modern-content">
      {/* Sidebar */}
      <aside className="modern-aside">
        <div className="modern-details">
          <h3 className="modern-title">Contact</h3>
          <p>📍 {data.personal.address}</p>
          <p>📞 {data.personal.phone}</p>
          <p className="modern-email">📧 {data.personal.email}</p>
        </div>

        <div className="modern-details">
          <h3 className="modern-title">Education</h3>
          <p><strong>{data.education.degree}</strong></p>
          <p>{data.education.university}</p>
          <p>Year: {data.education.year} | CGPA: {data.education.cgpa}</p>
        </div>
      </aside>

      {/* Main Section */}
      <main className="modern-main">
        {/* About Me Section */}
        <section className="modern-section">
          <h3 className="modern-title">About Me</h3>
          <p>{data.personal.aboutMe}</p>
        </section>

        {/* Experience Section */}
        <section className="modern-section">
          <h3 className="modern-title">Experience</h3>
          <p><strong>{data.experience.companyName}</strong></p>
          <p>{data.experience.companyExp}</p>
        </section>

        {/* Project Section */}
        <section className="modern-section">
          <h3 className="modern-title">Projects</h3>
          <p><strong>{data.experience.projectTitle}</strong></p>
          <p>{data.experience.projectDescription}</p>
        </section>

        {/* Skills Section */}
        <section className="modern-section modern-skills">
          <h3 className="modern-title">Skills</h3>
          <div className="modern-skills-container">
            <div>
              <h4>Technical Skills</h4>
              <ul>
                {data.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Soft Skills</h4>
              <ul>
                {data.skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Languages</h4>
              <ul>
                {data.skills.language.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Interests</h4>
              <ul>
                {data.skills.interests.map((skill, index) => (
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
