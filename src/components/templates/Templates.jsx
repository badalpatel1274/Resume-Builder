import React, { useState } from 'react'
import '../css/templates.css'
import TemplateProfessional from './TemplateProfessional';
import TemplateModern from './TemplateModern';
import TemplateCreative from './TemplateCreative';


const templates = [
    { id: 1, name: "Professional", preview: "/images/template1.png", component: TemplateProfessional},
    { id: 2, name: "Modern", preview: "/images/template2.png", component: TemplateModern },
    { id: 3, name: "Creative", preview: "/images/template3.png", component: TemplateCreative },
    // { id: 4, name: "Minimalist", preview: "/images/template4.png", component: TemplateMinimalist }
  ];

const Templates = () => {

    const [selectedTemplate, setSelectedTemplate] = useState(null);


  return (
   <>
    <div className="templates-page">
      <h1>Select a Resume Template</h1>

      {!selectedTemplate ? (
        <div className="templates-list">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <img src={template.preview} alt={template.name} />
              <h3>{template.name}</h3>
              <button onClick={() => setSelectedTemplate(template)}>Use This Template</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="selected-template">
          <h2>{selectedTemplate.name} Template</h2>
          <selectedTemplate.component />
          <button onClick={() => setSelectedTemplate(null)} className="back-btn">
            ← Back to Templates
          </button>
        </div>
      )}
    </div>
   
   </>
  )
}

export default Templates
