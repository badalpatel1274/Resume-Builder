import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import downloadResume from "./DownloadResume";
import Professional from "../templates/Professional";
import Minimal from "../templates/Minimal";
import Combined from "../templates/Combined";
import Modern from "../templates/Modern";
import Noel from "../templates/Noel";
import Simple from '../templates/Simple'
import Focused from "../templates/Focused";
import Elegant from "../templates/Elegent";
import Creative from "../templates/Creative";


const ViewMyResume = () => {
  const { resumeId } = useParams(); 
  const [resumeData, setResumeData] = useState(null);
  const [templateType, setTemplateType] = useState("");

  const templateComponents = {
    "Professional": Professional,
    "Minimal":Minimal,
    "Combined":Combined,
    "Modern": Modern,
    "Noel":Noel,
    "Simple":Simple,
    "Focused":Focused,
    "Elegant":Elegant,
    "Creative":Creative
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

        {/* Resume Preview */}
        <div style={{width:"794px", height:"1123px", background:"white"}} className="resume-preview" id="resume-preview">
        <SelectedTemplate data={resumeData} />  {/* Render Selected Template */}
      </div>

      <button
        onClick={downloadResume}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#6a0dad",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>

    </div>
  );
};

export default ViewMyResume;
