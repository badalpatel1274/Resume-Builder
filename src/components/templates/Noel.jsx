import React from "react";
import '../css/templateNoel.css'
const Noel = ({data}) => {
  return (
    <div className="noel-container">
      {/* Sidebar */}
      <aside className="noel-sidebar">
        <div className="noel-header">
          <img src={data.profilePic} alt="Profile" className="noel-image" />
          <h1 className="noel-name">{data.personal.fullName}</h1>
          <h3 className="noel-title">{data.personal.jobTitle}</h3>
        </div>
        <div className="noel-contact">
          <h3>Contact</h3>
          <p>📞 {data.personal.phone}</p>
          <p>📧 {data.personal.email}</p>
          <p>📍 {data.personal.address}</p>
        </div>
        <div className="noel-education">
          <h3>Education</h3>
          {Array.isArray(data.education) ? (
            data.education.map((edu, index) => (
              <div key={index} className="noel-education-item">
                <p className="noel-education-degree">
                  <strong>{edu.degree}</strong>
                </p>
                <p className="noel-education-university">{edu.university}</p>
                <p className="noel-education-year">{edu.year}</p>
              </div>
            ))
          ) : (
            <div className="noel-education-item">
              <p className="noel-education-degree">
                <strong>{data.education.degree}</strong>
              </p>
              <p className="noel-education-university">{data.education.university}</p>
              <p className="noel-education-year">{data.education.year}</p>
            </div>
          )}
        </div>
        {/* Skills below education */}
        <div className="noel-skills">
          <h3>Skills</h3>
          <div className="noel-skills-container">
            <div className="noel-skills-category">
              <h4>Technical Skills</h4>
              <ul>
                {data.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="noel-skills-category">
              <h4>Soft Skills</h4>
              <ul>
                {data.skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="noel-main">
        <section className="noel-about">
          <h3>About Me</h3>
          <p>{data.personal.aboutMe}</p>
        </section>
        <section className="noel-experience">
          <h3>Experience</h3>
          <div className="noel-experience-item">
            <p className="noel-experience-company">
              <strong>{data.experience.companyName}</strong> - <span>{data.experience.companyExp}</span>
            </p>
            <p className="noel-experience-description">
              {data.experience.jobDescription}
            </p>
          </div>
        </section>
        {/* Projects below experience */}
        <section className="noel-projects">
          <h3>Projects</h3>
          <div className="noel-project-item">
            <p className="noel-project-title"><strong>{data.experience.projectTitle}</strong></p>
            <p className="noel-project-description">{data.experience.projectDescription}</p>
           
          </div>
        </section>
      </main>
    </div>
  );
};

export default Noel;
