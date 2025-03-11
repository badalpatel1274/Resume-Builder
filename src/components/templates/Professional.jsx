import React from "react";
import '../css/professionalTemplate.css'
const Professional = ({ data }) => {
  if (!data) {
    return <p>Loading Resume Data...</p>;
  }

  return (
<div className="professional-resume">
  {/* Left Section */}
  <div className="professional-left-section">
    <div className="professional-profile-pic">
      <img src={data.profilePic} alt="Profile Picture" className="professional-profile-img" />
    </div>
    <p className="professional-name">{data.personal.fullName}</p>
    <p className="professional-job-title">{data.experience.jobTitle} </p>
    <div className="professional-contact-info">
      <p className="professional-email">{data.personal.email}</p>
      <p className="professional-phone">📞 {data.personal.phone}</p>
      <p className="professional-address">📍 {data.personal.address}</p>
      {/* <p className="professional-linkedin">🔗 <a href="#">LinkedIn Profile</a></p> */}
    </div>
  </div>

  {/* Right Section */}
  <div className="professional-right-section">
    <div className="professional-about">
      <p className="professional-section-title">About Me</p>
      <p className="professional-about-text">Lorem  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam vitae labore voluptas fugiat a hic ullam quisquam nam ut nemo accusamus placeat laudantium reprehenderit aliquid unde aspernatur iure rerum saepe incidunt velit, at, perferendiaga! Quo atque vitae fugit alias ratione. Delectus repudiandae eveniet quasi laudantium veritatis maiores? Delectus doloremque perferendis qugit animi, ad rerum suscipit eius sit magnam libero quasi cum cupiditate debitis. Error pariatur voluptate quam enim cupiditate unde a. Recusandae provident incidunt inventore est sequi dignissimos consectetur obcaecati! Accusamus, autem? Fugiat earum cumque laboriosam libero magni eos in debitis ea molestias eum doloribus, quos officia distinctio nam doloremque non, explicabo velit a optio consequuntur soluta commodi aliquid veniam. Officia atque corrupti repellat, nulla, ullam cum sapiente dolore earum explicabo voluptates molestias dignissimos, tempora eligendi id ut veritatis inventore beatae et? Quos, repellat maxime vitae iure quam qui hic eaque eum quae minima, optio possimus aliquid debitis minus consectetur vero fugiat maiores at quasi eligendi voluptatibus mollitia ad expedita labore? Laudantium!ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean eu nunc ut lacus bibendum scelerisque.</p>
    </div>

    <div className="professional-education">
      <p className="professional-section-title">Education</p>
      <ul className="professional-list">
        <li className="professional-list-item">
          <span className="professional-degree">{data.education.degree}</span> 
          <span className="professional-university"> - {data.education.university}</span> 
          <span className="professional-year"> {data.education.year}</span>
        </li>
      </ul>
    </div>

    <div className="professional-experience">
      <p className="professional-section-title">Work Experience</p>
      <ul className="professional-list">
        <li className="professional-list-item">
          <span className="professional-job-title">{data.experience.jobTitle}</span> 
          <span className="professional-company"> - {data.experience.companyName}</span> 
          <span className="professional-year"> {data.experience.year}</span>
        </li>
      </ul>
    </div>

    <div className="professional-skills-section">
      <p className="professional-section-title">Skills</p>
      <ul className="professional-skills-list">
        <li className="professional-skill">{data.skills.technical}</li>
        <li className="professional-skill">{data.skills.soft}</li>
        <li className="professional-skill">{data.skills.language}</li>
        <li className="professional-skill">{data.skills.interests}</li>
      </ul>
    </div>
  </div>
</div>



  );
};

export default Professional;
