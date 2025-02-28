import React from "react";
import '../css/professional.css'
const TemplateProfessional = () => {
  return (
    <div className="resume-container">
      {/* Left Section (Profile & Details) */}
      <div className="resume-left">
        <div className="profile-pic">
          <img src="/images/profile-placeholder.png" alt="Profile" />
        </div>
        <h2>Christopher Gonan</h2>
        <p className="job-title">Psychologist</p>
        <div className="contact-info">
          <p>📧 psych@example.com</p>
          <p>📞 (123) 456-7890</p>
          <p>📍 33602 42nd St, Edmond, OK</p>
        </div>

        <h3>Skills</h3>
        <ul>
          <li>🧠 Psychological Assessments</li>
          <li>🗣 Therapy & Counseling</li>
          <li>📊 Behavioral Analysis</li>
        </ul>

        <h3>References</h3>
        <p>Dr. John Smith - Senior Psychologist</p>
        <p>📞 (405) 123-4567</p>
        <p>📧 johnsmith@example.com</p>
      </div>

      {/* Right Section (Experience & Education) */}
      <div className="resume-right">
        <h2>Profile</h2>
        <p>
          Dedicated psychologist with vast experience providing patients with
          innovative treatment for psychological struggles. Skilled in research
          and therapy techniques.
        </p>

        <h2>Employment History</h2>
        <div className="job">
          <h3>Psychologist at Edmond Counseling Center, Edmond</h3>
          <p>04/2017 - 04/2020</p>
          <ul>
            <li>Conducted psychological assessments and therapy sessions.</li>
            <li>Developed treatment plans for mental health patients.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Psychologist at East Way Healthcare Center, Savannah</h3>
          <p>06/2013 - 03/2017</p>
          <ul>
            <li>Provided individual & group therapy sessions.</li>
            <li>Collaborated with psychiatrists & doctors.</li>
          </ul>
        </div>

        <h2>Education</h2>
        <p>
          🎓 Doctor of Psychology, The University of Oklahoma, Norman <br />
          09/2008 - 04/2014
        </p>
      </div>
    </div>
  );
};

export default TemplateProfessional;
