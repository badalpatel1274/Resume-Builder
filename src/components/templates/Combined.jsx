
import React from "react";
import '../css/combinedTemplate.css'

const Combined = ({data}) => {
    if (!data) {
        return <p>Loading Resume Data...</p>;
      }
    
  return (
    <div className="combined-container">
      <div className="combined-sidebar">
        <div className="combined-profile">
          <img src={data.profilePic} alt="Profile" className="combined-profile-img" />
          <h2 className="combined-name">{data.personal.fullName} </h2>
          <p className="combined-title">{data.experience.jobTitle}</p>
        </div>
        <div className="combined-contact">
          <h3 className="combined-section-title">Contact Me</h3>
          <p className="combined-text"> {data.personal.phone}</p>
          <p className="combined-text"> {data.personal.email}</p>
          {/* <p className="combined-text">www.yourwebsite.com</p> */}
          <p className="combined-text"> {data.personal.address}</p>
        </div>
        {/* <div className="combined-references">
          <h3 className="combined-section-title">References</h3>
          <p className="combined-text">Michael R. Magee</p>
          <p className="combined-text">Travis M. Godinez</p>
          <p className="combined-text">Gilbert R. Cross</p>
        </div> */}
        <div className="combined-skills">
          <h3 className="combined-section-title">Skills</h3>
          <p className="combined-text">{data.skills.technical}</p>
          <p className="combined-text">{data.skills.soft}</p>
          {/* <p className="combined-text">Microsoft PowerPoint</p>
          <p className="combined-text">Adobe Photoshop</p> */}
        </div>
        <div className="combined-hobbies">
          <h3 className="combined-section-title">Hobbies</h3>
          <p className="combined-text">{data.skills.interests}</p>
        </div>
      </div>
      <div className="combined-main">
        <div className="combined-section">
          <h3 className="combined-section-title">About Me</h3>
          <p className="combined-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in voluptatum perferendis sit explicabo. Explicabo iure aliquid quod, quia blanditiis reiciendis labore consequuntur eius accusantium praesentium. Eveniet, quas laborum in rerum eos atque qui incidunt, aspernatur quis iste nulla amet esse explicabo culpa, dolorem natus? Voluptas qui ex ratione possimus!a expedita ipsam nihil? Deserunt eveniet debitis fugiat quasi eligendi..</p>
        </div>
        <div className="combined-section">
          <h3 className="combined-section-title">Job Experience</h3>
          <p className="combined-job-title">{data.experience.jobTitle} <span className="combined-years"> {data.experience.year}</span></p>
          {/* <p className="combined-job-title">Graphic Designer - <span className="combined-years">2015 - 2018</span></p>
          <p className="combined-job-title">Marketing Manager - <span className="combined-years">2010 - 2015</span></p> */}
        </div>
        <div className="combined-section">
          <h3 className="combined-section-title">Education</h3>
          <p className="combined-edu-title">{data.education.degree} - <span className="combined-years"> {data.education.year}</span></p>
          {/* <p className="combined-edu-title">Master Graphic Designer - <span className="combined-years">2015 - 2017</span></p>
          <p className="combined-edu-title">Master of Design - <span className="combined-years">2010 - 2012</span></p> */}
        </div>
      </div>
    </div>
  );
};

export default Combined
