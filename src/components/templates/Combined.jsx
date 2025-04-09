import React from "react"
import '../css/templateCombined.css'

const CombinedResume = ({ data }) => {
  return (
    <div className="combined-resume-container">
      <div className="combined-resume-wrapper">
        <header className="combined-resume-header">
          <h1 className="combined-resume-h1">{data?.personal?.fullName}</h1>
          <h2 className="combined-resume-h2">{data?.personal?.jobTitle}</h2>

          <div className="combined-resume-contact">
            {data?.personal?.email && <span className="combined-resume-contact-item">{data.personal.email}</span>}
            {data?.personal?.phone && <span className="combined-resume-contact-item">{data.personal.phone}</span>}
            {data?.personal?.address && <span className="combined-resume-contact-item">{data.personal.address}</span>}
            {data?.personal?.linkedin && <span className="combined-resume-contact-item">{data.personal.linkedin}</span>}
          </div>
        </header>

        <section className="combined-resume-section combined-resume-summary">
          <h3 className="combined-resume-h3">PROFESSIONAL SUMMARY</h3>
          <p className="combined-resume-p">{data?.personal?.aboutMe}</p>
        </section>

        <div className="combined-resume-columns">
          <div className="combined-resume-main-column">
            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">EXPERIENCE</h3>
              {data.experience?.map((exp, i) => (
                <div key={i} className="combined-resume-experience">
                  <div className="combined-resume-experience-header">
                    <h4 className="combined-resume-h4">{exp.jobTitle}</h4>
                    <span className="combined-resume-date">{exp.companyExp}</span>
                  </div>
                  <div className="combined-resume-company">{exp.companyName}</div>
                  <div className="combined-resume-ul">
                    
                   {exp.jobDescription}
                  </div>
                </div>
              ))}
            </section>

            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">PROJECTS</h3>
              {data?.experience?.[0]?.projects?.map((proj, i) => (
                <div key={i} className="combined-resume-project">
                  <div className="combined-resume-project-header">
                    <h4 className="combined-resume-h4">{proj.title}</h4>
                  
                  </div>
               
                  <p className="combined-resume-p">{proj.description}</p>
                
                </div>
              ))}
            </section>
          </div>

          <div className="combined-resume-side-column">
            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">Technical Skills</h3>
              <ul className="combined-list">
                {(data?.skills?.technical || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="combined-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </section>

            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">Soft Skills</h3>
              <ul className="combined-list">
                {(data?.skills?.soft || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="combined-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </section>


            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">EDUCATION</h3>
              {data.education?.map((edu, i) => (
                <div key={i} className="combined-resume-education">
                  <h4 className="combined-resume-h4">{edu.degree}</h4>
                  <div className="combined-resume-institution">{edu.university}</div>
                  <div className="combined-resume-date">CGPA : {edu.cgpa}</div>

                  <div className="combined-resume-date">{edu.year}</div>
                </div>
              ))}
            </section>

          

           
            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">Language</h3>
              <ul className="combined-list">
                {(data?.skills?.language || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="combined-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </section>
            <section className="combined-resume-section">
              <h3 className="combined-resume-h3">Interests</h3>
              <ul className="combined-list">
                {(data?.skills?.interests || [])
                  .join(",")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index} className="combined-list-item">{skill.trim()}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CombinedResume
