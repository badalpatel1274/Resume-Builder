import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/adminallTemp.css"; // CSS with fetchTemp- classes

const AdminAllTemplate = () => {
  const [templates, setTemplates] = useState([]);

  const fetchTemplates = async () => {
    try {
      const res = await axios.get("template/alltemplate");
      setTemplates(res.data.data);
    } catch (err) {
      console.error("Error fetching templates:", err);
    }
  };

  const deleteTemplate = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this template?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`template/deletetemplate/${id}`);
      setTemplates(templates.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting template:", err);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div className="fetchTemp-container">
      <h2 className="fetchTemp-heading">All Templates</h2>
      <table className="fetchTemp-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Template Name</th>
            <th>Preview</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template, index) => (
            <tr key={template._id}>
              <td>{index + 1}</td>
              <td>{template.name}</td>
              <td>
                <img
                  src={`http://localhost:5000${template.previewImg}`}
                  alt="Preview"
                  className="fetchTemp-img"
                />
              </td>
              <td>
                <button
                  onClick={() => deleteTemplate(template._id)}
                  className="fetchTemp-deleteBtn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {templates.length === 0 && (
            <tr>
              <td colSpan="4" className="fetchTemp-noData">No templates found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllTemplate;
