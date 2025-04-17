import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/ViewMyResume.css'
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
import downloadFullHD from "./DownloadResumeFullHd";
import DownloadResumeFullHd from "./DownloadResumeFullHd";


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
    {/* Left Side Buttons */}
    <div className="resume-buttons">
      <Link to={`/updateresume/${resumeId}`}>
        <button className="btn btn-dark">Update Information</button>
      </Link>

      <button onClick={downloadResume} className="download-btn">
        Download Resume HD
      </button>
      <button onClick={DownloadResumeFullHd} className="download-btn">
        Download Resume Full HD
      </button>
    </div>

    {/* Right Side Resume Preview */}
    <div className="resume-preview" id="resume-preview">
      <SelectedTemplate data={resumeData} />
    </div>
  </div>
  );
};

export default ViewMyResume;
