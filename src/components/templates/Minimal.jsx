import React from "react";
// import minimalData from '../pages/MinimalData';

const Minimal = () => {
    return (
        <div className="minimal-container">
            <h1 className="minimal-name">{minimalData.name}</h1>
            <h2 className="minimal-title">{minimalData.title}</h2>
            <p className="minimal-contact">{minimalData.contact}</p>

            <div className="minimal-skills">
                <h2>Skills</h2>
                <ul>
                    {minimalData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="minimal-experience">
                <h2>Experience</h2>
                {minimalData.experience.map((exp, index) => (
                    <div key={index} className="minimal-experience-item">
                        <h3>{exp.position} - {exp.company}</h3>
                        <p>{exp.date}</p>
                        <ul>
                            {exp.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Minimal;
