import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Professional from "../templates/Professional";
import Minimal from "../templates/Minimal";
import Combined from "../templates/Combined";
import axios from "axios";

const ViewMyResume = () => {
  const { resumeId } = useParams(); 
  const [resumeData, setResumeData] = useState(null);
  const [templateType, setTemplateType] = useState("");

  const templateComponents = {
    "Professional": Professional,
    "Minimal":Minimal,
    "Combined":Combined
  }

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

  const SelectedTemplate = templateComponents[templateType]

  return (
    <div className="resume-view-container">
      {/* Update Button */}
      <Link to={`/updateresume/${resumeId}`}>
        <button className="btn btn-dark">Update Information</button>
      </Link>

        {/* ✅ Resume Preview */}
        <div className="resume-preview">
        <SelectedTemplate data={resumeData} />  {/* ✅ Render Selected Template */}
      </div>

      {/* <div className="resume-preview">
        {templateType === "Professional" ? (
          <Professional data={resumeData} />
        ) : (
          <Minimal data={resumeData} />
        )}
      </div> */}
    </div>
  );
};

export default ViewMyResume;
