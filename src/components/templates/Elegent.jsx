import React from "react";
import "../css/templateElegent.css";

const Elegant = ({ data }) => {
  return (
    <div className="elegant-resume-container">
      <div className="elegant-resume-paper">
        <div className="elegant-resume-sidebar">
          <div className="elegant-resume-photo-container">
            <img src={data.profilePic} className="elegant-resume-photo"></img>
          </div>

          <div className="elegant-resume-sidebar-content">
            {/* Contact Section */}
            <div className="elegant-resume-sidebar-section">
              <h3 className="elegant-resume-sidebar-heading">CONTACT</h3>
              <div className="elegant-resume-contact-list">
                {data?.personal?.email && (
                  <div className="elegant-resume-contact-item">
                    <div className="elegant-resume-contact-icon email-icon"></div>
                    <span className="elegant-resume-contact-text">{data?.personal?.email}</span>
                  </div>
                )}
                {data?.personal?.phone && (
                  <div className="elegant-resume-contact-item">
                    <div className="elegant-resume-contact-icon phone-icon"></div>
                    <span className="elegant-resume-contact-text">{data.personal.phone}</span>
                  </div>
                )}
                {data?.personal?.address && (
                  <div className="elegant-resume-contact-item">
                    <div className="elegant-resume-contact-icon location-icon"></div>
                    <span className="elegant-resume-contact-text">{data?.personal?.address}</span>
                  </div>
                )}
                {data?.personal?.linkedin && (
                  <div className="elegant-resume-contact-item">
                    <div className="elegant-resume-contact-icon linkedin-icon"></div>
                    <span className="elegant-resume-contact-text">{data.persoal.linkedin}</span>
                  </div>
                )}
               
              </div>
            </div>

              {/* Education Section */}
              <div className="elegant-resume-sidebar-section">
              <h3 className="elegant-resume-sidebar-heading">EDUCATION</h3>
              <div className="elegant-resume-education-list">
                {data?.education?.map((edu, index) => (
                  <div className="elegant-resume-education-item" key={index}>
                    <h4 className="elegant-resume-degree">{edu.degree}</h4>
                    <p className="elegant-resume-school">{edu.university}</p>
                    <p className="elegant-resume-edu-date">{edu.year}</p>
                    <p className="elegant-resume-edu-date">CGPA:-{edu.cgpa}</p>

                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="elegant-resume-sidebar-section">
              <h3 className="elegant-resume-sidebar-heading">Tech.Skills</h3>
              <div className="elegant-resume-skills-list">
              <ul className="elegent-list">
                {(data?.skills?.technical || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="elegent-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </div>

            <div className="elegant-resume-sidebar-section">
              <h3 className="elegant-resume-sidebar-heading">Soft Skills</h3>
              <div className="elegant-resume-skills-list">
              <ul className="elegent-list">
                {(data?.skills?.soft || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="elegent-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </div>

          

            {/* Languages Section */}
            <div className="elegant-resume-sidebar-section">
            <h3 className="elegant-resume-sidebar-heading">Language</h3>
              <div className="elegant-resume-skills-list">
              <ul className="elegent-list">
                {(data?.skills?.language || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="elegent-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </div>

            <div className="elegant-resume-sidebar-section">
            <h3 className="elegant-resume-sidebar-heading">Interest</h3>
              <div className="elegant-resume-skills-list">
              <ul className="elegent-list">
                {(data?.skills?.interests || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="elegent-list-item">{skill.trim()}</li>
                ))}
              </ul>
              </div>
            </div>


         
          </div>
        </div>

        {/* Main Section */}
        <div className="elegant-resume-main">
          <header className="elegant-resume-header">
            <h1 className="elegant-resume-name">{data.personal.fullName}</h1>
            <h2 className="elegant-resume-title">{data.personal.jobTitle}</h2>
          </header>

          {/* Profile */}
          <section className="elegant-resume-section">
            <h3 className="elegant-resume-section-heading">
              <span className="elegant-resume-heading-text">PROFILE</span>
              <span className="elegant-resume-heading-line"></span>
            </h3>
            <p className="elegant-resume-profile-text">{data.personal.aboutMe}</p>
          </section>

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section className="elegant-resume-section">
              <h3 className="elegant-resume-section-heading">
                <span className="elegant-resume-heading-text">PROFESSIONAL EXPERIENCE</span>
                <span className="elegant-resume-heading-line"></span>
              </h3>
              {data.experience.map((exp, index) => (
                <div className="elegant-resume-experience-item" key={index}>
                  <div className="elegant-resume-experience-header">
                    <div className="elegant-resume-job-title-wrapper">
                      <h4 className="elegant-resume-job-title">{exp.jobTitle}</h4>
                      <p className="elegant-resume-company-name">{exp.companyName}</p>
                    </div>
                    <p className="elegant-resume-job-period">{exp.companyExp}</p>
                  </div>
                  <ul className="elegant-resume-job-duties">
                  <div className="elegant-resume-ul">
                    
                    {exp.jobDescription}
                   </div>
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Key Projects */}
          {data?.experience?.[0]?.projects?.length > 0 && (
            <section className="elegant-resume-section">
              <h3 className="elegant-resume-section-heading">
                <span className="elegant-resume-heading-text">KEY PROJECTS</span>
                <span className="elegant-resume-heading-line"></span>
              </h3>
              <div className="elegant-resume-projects-grid">
                {data?.experience?.[0]?.projects.map((project, index) => (
                  <div className="elegant-resume-project-card" key={index}>
                    <h4 className="elegant-resume-project-title">{project.title}</h4>
                    <p className="elegant-resume-project-description">{project.description}</p>
                 
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Elegant;
