import React from "react";
import "../css/homedream.css";

const HomeDream = () => {
  return (
    <div className="dream-container">
      <h2 className="dream-heading">Ready to Land Your Dream Job?</h2>
      <p className="dream-text">
        Join thousands of successful job seekers who have created winning
        resumes with our platform. Get started today and take the next step in
        your career journey.
      </p>
      <div className="dream-buttons">
        <button className="dream-btn primary">Create Your Resume Now →</button>
        <button className="dream-btn secondary">Browse Templates</button>
      </div>
    </div>
  );
};

export default HomeDream;
