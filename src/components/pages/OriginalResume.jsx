import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Professional from '../templates/Professional';
import Minimal from '../templates/Minimal';
import axios from "axios";

const OriginalResume = () => {
  const { resumeId } = useParams(); //  Get Resume ID from URL
  const [resumeData, setResumeData] = useState(null);
  const [templateType, setTemplateType] = useState("");

  useEffect(() => {
    axios.get(`/resume/${resumeId}`)
      .then(res => {
        console.log("API Response:", res.data);   
             console.log("Template Data:", res.data.data.templateId); 
        
      if (!res.data || !res.data.data || !res.data.data.templateId) {
          console.error("Error: Template data missing in API response");
          return;
        }

        console.log("Template ID:", res.data.data.templateId); 
        console.log("User Form Data:", res.data.data.userFormId);
        
        setResumeData(res.data.data.userFormId);
      setTemplateType(res.data.data.templateId.name);  
    })
      .catch(err => console.error("Error fetching resume data:", err));
}, [resumeId]);
  if (!resumeData) return <p>Loading Resume...</p>;

  return (
    <div>
       {templateType === "Professional" && resumeData ? ( 
        <Professional data={resumeData} /> 
      ) : (
        <Minimal data={resumeData} />
      )}    
    </div>
  );
};

export default OriginalResume;
