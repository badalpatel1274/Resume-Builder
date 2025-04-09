import React, { useEffect, useState } from "react";
import '../css/resumepage.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResumePages = () => {
  const [templates, settemplates] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await axios.get("/template/alltemplate")
        console.log("fetcehed temp:", res.data)
        settemplates(res.data.data)
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    }
    fetchTemplate()
  }, [])


  const handleSelectTemplate = (templateId) => {
    localStorage.setItem("selectedTemplateId", templateId);
    navigate(`/resume/form/${templateId}`)
  }

  return (
    <div className="resume-page">
      <h2 className="title">Choose Your Resume Template</h2>
      <div className="template-container">
        {templates.map((template) => (
          <div
            key={template._id}
            className="template-card"
            onClick={() => handleSelectTemplate(template._id)}
          >
            {/* 🖼️ Template Image */}
            <img
              src={`${axios.defaults.baseURL}${template.previewImg}`}
              alt={template.name}
              className="template-image"
            />
            <h3 className="template-name">{template.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePages;
