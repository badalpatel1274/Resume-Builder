import React from "react";
import '../css/templateSimple.css';

const Simple = ({ data }) => {
  return (
    <div className="simple-resume-container">
      <header className="simple-resume-header">
        <h1 className="simple-name">{data?.personal?.fullName}</h1>
        <div className="simple-contact-info">
          <p className="simple-address">{data?.personal?.address}</p>
          <p className="simple-contact">
            📞 {data?.personal?.phone} | 📧 {data?.personal?.email}
          </p>
          {data?.personal?.linkedin && <p className="simple-linkedin">🔗 {data.personal.linkedin}</p>}
          {data?.personal?.github && <p className="simple-github">🔗 {data.personal.github}</p>}
        </div>
      </header>

      <section className="simple-resume-section">
        <h2 className="simple-section-title">Professional Summary</h2>
        <div className="simple-section-content">
          <p className="simple-summary">{data?.personal?.aboutMe}</p>
        </div>
      </section>

      {(data?.experience?.length || 0) > 0 && (
        <section className="simple-resume-section">
          <h2 className="simple-section-title">Work Experience</h2>
          <div className="simple-section-content">
            {data.experience.map((exp, index) => (
              <div key={index} className="simple-experience-item">
                <div className="simple-experience-header">
                  <h3 className="simple-job-title">{exp.jobTitle}</h3>
                  <p className="simple-company">{exp.companyName}</p>
                  <p className="simple-duration">{exp.companyExp}</p>
                  <p className="simple-job-description">{exp.jobDescription}</p>
                  <p className="simple-total-experience">Total Experience: {exp.totalExperience}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

{(data?.experience?.[0]?.projects?.length || 0) > 0 && (
        <section className="simple-resume-section">
          <h2 className="simple-section-title">Projects</h2>
          <div className="simple-section-content">
            {data.experience[0].projects.map((project, index) => (
              <div key={index} className="simple-project-item">
                <h3 className="simple-project">{project.title}</h3>
                <p className="simple-projectDesc">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}


      {(data?.education?.length || 0) > 0 && (
        <section className="simple-resume-section">
          <h2 className="simple-section-title">Education</h2>
          <div className="simple-section-content">
            {data.education.map((edu, index) => (
              <div key={index} className="simple-education-item">
                <h3 className="simple-degree">{edu.degree}</h3> | 
                <p className="simple-institution">{edu.university}</p> | 
                <p className="simple-duration">Year: {edu.year} | CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        </section>
      )}
       
      
      <section className="simple-resume-section simple-skills">
        <h2 className="simple-section-title">Skills</h2>
        <div className="simple-section-content simple-skills-container">
          
          {/* Left Column (Technical + Languages) */}
          <div className="simple-left-column">
            <div>
              <h4 className="simple-subtitle">Technical Skills</h4>
              <ul className="simple-list">
                {(data?.skills?.technical || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="simple-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="simple-subtitle">Languages</h4>
              <ul className="simple-list">
                {(data?.skills?.language || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="simple-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Soft Skills + Interests) */}
          <div className="simple-right-column">
            <div>
              <h4 className="simple-subtitle">Soft Skills</h4>
              <ul className="simple-list">
                {(data?.skills?.soft || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="simple-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="simple-subtitle">Interests</h4>
              <ul className="simple-list">
                {(data?.skills?.interests || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="simple-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Simple;
