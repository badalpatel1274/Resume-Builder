import React from "react";
import "../css/templateCreative.css";

const Creative = ({ data }) => {
    return (
        <div className="creative-resume-container">
            <div className="creative-resume-paper">
                <header className="creative-resume-header">
                    <div className="creative-resume-header-left">
                        <div className="creative-resume-name-box">
                            <h1 className="creative-resume-name">{data.personal.fullName}</h1>
                            <div className="creative-resume-title-box">
                                <h2 className="creative-resume-title">{data.personal.jobTitle}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="creative-resume-header-right">
                        <div className="creative-resume-contact-grid">
                            <div className="creative-resume-contact-item">
                                <div className="creative-resume-contact-label">Email</div>
                                <div className="creative-resume-contact-value">{data.personal.email}</div>
                            </div>
                            <div className="creative-resume-contact-item">
                                <div className="creative-resume-contact-label">Phone</div>
                                <div className="creative-resume-contact-value">{data.personal.phone}</div>
                            </div>
                            <div className="creative-resume-contact-item">
                                <div className="creative-resume-contact-label">Location</div>
                                <div className="creative-resume-contact-value">{data.personal.address}</div>
                            </div>

                        </div>
                    </div>
                </header>

                <div className="creative-resume-about-section">
                    <div className="creative-resume-section-icon">
                        <div className="creative-resume-icon-circle"></div>
                    </div>
                    <div className="creative-resume-about-content">
                        <h3 className="creative-resume-section-title">ABOUT ME</h3>
                        <p className="creative-resume-about-text">{data.personal.aboutMe}</p>
                    </div>
                </div>

                <div className="creative-resume-main-content">
                    <div className="creative-resume-left-column">
                        <section className="creative-resume-section">
                            <div className="creative-resume-section-header">
                                <div className="creative-resume-section-icon">
                                    <div className="creative-resume-icon-circle"></div>
                                </div>
                                <h3 className="creative-resume-section-title">EXPERIENCE</h3>
                            </div>

                            <div className="creative-resume-timeline">
                                {data.experience?.items?.map((exp, index) => (
                                    <div className="creative-resume-timeline-item" key={index}>
                                        <div className="creative-resume-timeline-connector">
                                            <div className="creative-resume-timeline-dot"></div>
                                            {index !== data.experience.items.length - 1 && (
                                                <div className="creative-resume-timeline-line"></div>
                                            )}
                                        </div>
                                        <div className="creative-resume-timeline-content">
                                            <div className="creative-resume-job-header">
                                                <h4 className="creative-resume-job-title">{exp.jobTitle}</h4>
                                                <span className="creative-resume-job-date">{exp.companyExp}</span>
                                            </div>
                                            <div className="creative-resume-company">{exp.companyName}</div>
                                            <ul className="creative-resume-job-duties">
                                                {exp.jobDescription &&
                                                    exp.jobDescription.split('.').map((line, index) => {
                                                        const trimmedLine = line.trim();
                                                        return trimmedLine ? <li key={index}>{trimmedLine}.</li> : null;
                                                    })}
                                            </ul>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="creative-resume-section">
                            <div className="creative-resume-section-header">
                                <div className="creative-resume-section-icon">
                                    <div className="creative-resume-icon-circle"></div>
                                </div>
                                <h3 className="creative-resume-section-title">EDUCATION</h3>
                            </div>

                            <div className="creative-resume-education-container">
                                {data.education?.map((edu, i) => (
                                    <div className="creative-resume-education-item" key={i}>
                                        <div className="creative-resume-education-year">{edu.year}</div>
                                        <div className="creative-resume-education-details">
                                            <h4 className="creative-resume-degree">{edu.degree}</h4>
                                            <p className="creative-resume-school">{edu.university}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="creative-resume-right-column">
                        <section className="cretive-skills">

                            <section className="creative-resume-section">
                                <div className="creative-resume-section-header">
                                    <div className="creative-resume-section-icon">
                                        <div className="creative-resume-icon-circle"></div>
                                    </div>
                                    <h3 className="creative-resume-section-title">Tech. Skills</h3>
                                </div>

                                <div className="creative-resume-skills-container">
                                    <ul className="creative-list">
                                        {(data?.skills?.technical || [])
                                            .join(",")
                                            .split(",")
                                            .map((skill, index) => (
                                                <li key={index} className="creative-list-item">{skill.trim()}</li>
                                            ))}
                                    </ul>
                                </div>
                            </section>
                            <section className="creative-resume-section">
                                <div className="creative-resume-section-header">
                                    <div className="creative-resume-section-icon">
                                        <div className="creative-resume-icon-circle"></div>
                                    </div>
                                    <h3 className="creative-resume-section-title">Soft Skills</h3>
                                </div>

                                <div className="creative-resume-skills-container">
                                    <ul className="creative-list">
                                        {(data?.skills?.soft || [])
                                            .join(",")
                                            .split(",")
                                            .map((skill, index) => (
                                                <li key={index} className="creative-list-item">{skill.trim()}</li>
                                            ))}
                                    </ul>
                                </div>
                            </section>
                        </section>

                        <section className="creative-resume-section">
                            <div className="creative-resume-section-header">
                                <div className="creative-resume-section-icon">
                                    <div className="creative-resume-icon-circle"></div>
                                </div>
                                <h3 className="creative-resume-section-title">FEATURED PROJECTS</h3>
                            </div>

                            <div className="creative-resume-projects-container">
                                {data?.experience?.projects?.map((project, i) => (
                                    <div className="creative-resume-project-item" key={i}>
                                        <div className="creative-resume-project-header">
                                            <h4 className="creative-resume-project-title">{project.title}</h4>
                                        </div>
                                        <p className="creative-resume-project-description">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="cretive-skills">

                            <section className="creative-resume-section">
                                <div className="creative-resume-section-header">
                                    <div className="creative-resume-section-icon">
                                        <div className="creative-resume-icon-circle"></div>
                                    </div>
                                    <h3 className="creative-resume-section-title">Language</h3>
                                </div>

                                <div className="creative-resume-skills-container">
                                    <ul className="creative-list">
                                        {(data?.skills?.language || [])
                                            .join(",")
                                            .split(",")
                                            .map((skill, index) => (
                                                <li key={index} className="creative-list-item">{skill.trim()}</li>
                                            ))}
                                    </ul>
                                </div>
                            </section>
                            <section className="creative-resume-section">
                                <div className="creative-resume-section-header">
                                    <div className="creative-resume-section-icon">
                                        <div className="creative-resume-icon-circle"></div>
                                    </div>
                                    <h3 className="creative-resume-section-title">Interest</h3>
                                </div>

                                <div className="creative-resume-skills-container">
                                    <ul className="creative-list">
                                        {(data?.skills?.interests || [])
                                            .join(",")
                                            .split(",")
                                            .map((skill, index) => (
                                                <li key={index} className="creative-list-item">{skill.trim()}</li>
                                            ))}
                                    </ul>
                                </div>
                            </section>
                        </section>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creative;
