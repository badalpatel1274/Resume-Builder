import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Professional from "../templates/Professional";
import Minimal from "../templates/Minimal";
import axios from "axios";

const ViewMyResume = () => {
  const { resumeId } = useParams(); // URL से resumeId लेना
  const [resumeData, setResumeData] = useState(null);
  const [templateType, setTemplateType] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`/resume/${resumeId}`);
        const data = res.data?.data;

        if (!data || !data.templateId || !data.userFormId) {
          console.error("Invalid API response:", res.data);
          return;
        }

        console.log("Fetched Resume Data:", data);
        setResumeData(data.userFormId);
        setTemplateType(data.templateId.name);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchResume();
  }, [resumeId]);

  if (!resumeData) return <p>Loading Resume...</p>;

  return (
    <div className="resume-view-container">
      {/* Update Button */}
      <Link to={`/updateresume/${resumeId}`}>
        <button className="btn btn-dark">Update Information</button>
      </Link>

      {/* Resume Preview */}
      <div className="resume-preview">
        {templateType === "Professional" ? (
          <Professional data={resumeData} />
        ) : (
          <Minimal data={resumeData} />
        )}
      </div>
    </div>
  );
};

export default ViewMyResume;
