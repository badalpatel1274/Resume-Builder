import React from "react";
import '../css/templateFocused.css'
const Focused = ({ data }) => {
  return (
    <div className="focused-resume">
      <div className="focused-resume-container">
        <header className="focused-resume-header">
          <div className="focused-name-section">
            <h1 className="focused-h1">{data?.personal?.fullName || 'John Doe'}</h1>
            <h2 className="focused-h2">{data?.personal?.jobTitle || 'Frontend Developer'}</h2>
          </div>
          <div className="focused-contact-section">
            <div className="focused-contact-item">{data?.personal?.email || 'email@example.com'}</div>
            <div className="focused-contact-divider"></div>
            <div className="focused-contact-item">{data?.personal?.phone || '(000) 000-0000'}</div>
            <div className="focused-contact-divider"></div>
            <div className="focused-contact-item">{data?.personal?.address || 'City, Country'}</div>
            <div className="focused-contact-divider"></div>
         
          </div>
        </header>

        <div className="focused-resume-body">
          <div className="focused-main-column">
            <section className="focused-resume-section focused-summary-section">
              <h3 className="focused-section-title">PROFESSIONAL SUMMARY</h3>
              <p className="focused-p">{data?.personal?.aboutMe || 'No summary available'}</p>
            </section>

            <section className="focused-resume-section">
  <h3 className="focused-section-title">WORK EXPERIENCE</h3>
  {data?.experience?.map((exp, index) => (
    <div key={index} className="focused-experience-item">
      <div className="focused-experience-header">
        <div className="focused-job-title">{exp.companyName}</div>
        <div className="focused-job-period">{exp.companyExp}</div>
      </div>
      <div className="focused-company-location">
        <div className="focused-company-name">{exp.jobDescription}</div>
      </div>
      <h4>Total Experience : {exp.totalExperience}</h4>
     
    </div>
  ))}
</section>


            <section className="focused-resume-section">
              <h3 className="focused-section-title">PROJECTS</h3>
              {data?.experience?.[0]?.projects?.map((project, index) => (
                <div key={index} className="focused-project-item">
                  <div className="focused-project-header">
                    <h4 className="focused-project-title">{project.title}</h4>
                  
                  </div>
                  <div className="focused-project-tech">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="focused-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="focused-project-description">{project.description}</p>
                 
                </div>
              ))}
            </section>
          </div>

          <div className="focused-side-column">
            <section className="focused-resume-section">
              <h3 className="focused-section-title">Technical Skills</h3>
              <div className="focused-skills-container">
              <ul className="focused-list">
                {(data?.skills?.technical || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="focused-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </section>

            <section className="focused-resume-section">
              <h3 className="focused-section-title">Soft Skills</h3>
              <div className="focused-skills-container">
              <ul className="focused-list">
                {(data?.skills?.soft || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="focused-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </section>

            

            <section className="focused-resume-section">
              <h3 className="focused-section-title">EDUCATION</h3>
              {data?.education?.map((edu, index) => (
                <div key={index} className="focused-education-item">
                  <div className="focused-education-degree">{edu.degree}</div>
                  <div className="focused-education-institution">{edu.institution}</div>
                  <div className="focused-education-period">{edu.period}</div>
                  <div className="focused-education-details">
                    <p className="focused-p">GPA: {edu.gpa}</p>
                    <p className="focused-p">Relevant Coursework: {edu.coursework}</p>
                  </div>
                </div>
              ))}
            </section>
            <section className="focused-resume-section">
              <h3 className="focused-section-title">Language</h3>
              <div className="focused-skills-container">
              <ul className="focused-list">
                {(data?.skills?.language || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="focused-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </section>

            <section className="focused-resume-section">
              <h3 className="focused-section-title">Interest</h3>
              <div className="focused-skills-container">
              <ul className="focused-list">
                {(data?.skills?.interests || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="focused-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focused;
