import React from "react";
import '../templates/professional.css'
const Professional = ({ data }) => {
  if (!data) {
    return <p>Loading Resume Data...</p>; // ✅ Agar data load na ho to show loading state
  }

  return (
    <div className="professional-resume">
      <h1>{data.personal.fullName}</h1> {/* ✅ Backend Data */}
      <p>Email: {data.personal.email}</p>
      <p>Phone: {data.personal.phone}</p>
      
      <h2>Education</h2>
      <p>{data.education.degree} - {data.education.university} ({data.education.year})</p>

      <h2>Experience</h2>
      <p>{data.experience.jobTitle} at {data.experience.companyName}</p>
      <p>Project: {data.experience.projectTitle}</p>
      <p>{data.experience.projectDescription}</p>

      <h2>Skills</h2>
      <p>{data.skills.technical}</p>
      <p>Soft Skills: {data.skills.soft}</p>
      <p>Languages: {data.skills.language}</p>
      <p>Interests: {data.skills.interests}</p>
    </div>
  );
};

export default Professional;
