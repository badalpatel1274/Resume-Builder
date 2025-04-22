import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/footerTemp.css'

const TemplateFooter = () => {

    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await axios.get('/template/alltemplate');
                setTemplates(res.data.data);
            } catch (err) {
                console.error('Error fetching templates', err);
            }
        };

        fetchTemplates();
    }, []);
    return (
        <div className="footer-templates">
            <h2 className="footer-title">Explore Modern Resume Templates</h2>
            <p className="footer-description">
                Browse our hand-crafted, ATS-friendly resume templates that help you stand out from the crowd.
            </p>

            <div className="footer-template-grid">
                {templates.map((template) => (
                    <div key={template._id} className="footer-template-card">
                        <img
                            src={`${axios.defaults.baseURL}${template.previewImg}`}
                            alt={template.name}
                            className="template-image"
                        />            <h3 className="footer-template-name">{template.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TemplateFooter

