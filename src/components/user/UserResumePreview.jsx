import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Professional from "../templates/Professional";
import Minimal from "../templates/Minimal";
import Combined from "../templates/Combined";
import Modern from "../templates/Modern";
import Noel from "../templates/Noel";
import Simple from "../templates/Simple";
import "../css/preview.css";

const templateComponents = {
  "Professional": Professional,
  "Minimal": Minimal,
  "Combined": Combined,
  "Modern": Modern,
  "Noel": Noel,
  "Simple": Simple,
};

const ResumePreview = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`/resume/${resumeId}`);
        setResume(res.data.data);
      } catch (error) {
        console.error("Error loading resume:", error);
      }
    };

    fetchResume();
  }, [resumeId]);

  if (!resume) return <div className="preview-loading">Loading...</div>;

  const TemplateComponent = templateComponents[resume.templateId.name];

  if (!TemplateComponent) {
    return <div style={{ color: 'white' }}>❌ No matching template</div>;
  }

  return (
  <>
      <button 
        className="preview-back-btn"
        onClick={() => navigate("/user/account/myresumes")}
        >
        ← Back to My Resumes
      </button>
    <div className="preview-page">

      <TemplateComponent data={resume.userFormId} />
    </div>
          </>
  );
};

export default ResumePreview;
