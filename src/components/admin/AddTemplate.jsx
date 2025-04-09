import React, { useState } from "react";
import "../css/adminDashboard.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setfile] = useState(null)
  const [preview, setPreview] = useState(null)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setfile(selectedFile);  
      setPreview(URL.createObjectURL(selectedFile)); 
    }
  };


  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("desc", data.desc)
    if (file) {
      formData.append("previewImg", file)
    }
    console.log("Submitted Data:", data);

    try {
      const res = await axios.post("/template/addtemplate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", res.data);
      alert("Template Added")
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };


  return (
    <div className="addtemp-container">
      <h1 className="addtemp-title">Add New Template</h1>
      <p className="addtemp-subtitle">Create a new resume template for users</p>

      <form className="addtemp-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="addtemp-section-title">Template Information</h2>
        <p className="addtemp-section-desc">
          Fill in the details for the new template
        </p>

        {/* 🔹 Template Name */}
        <div className="addtemp-form-group">
          <label className="addtemp-label">Template Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Template Name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
            })}
            className="addtemp-input"
            placeholder="e.g. Professional Modern"
          />
          {errors.templateName && (
            <p className="addtemp-error">{errors.templateName.message}</p>
          )}
        </div>

        {/* 🔹 Description */}
        <div className="addtemp-form-group">
          <label className="addtemp-label">Description</label>
          <textarea
            {...register("desc", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
            className="addtemp-input addtemp-textarea"
            placeholder="Describe the template and its best use cases"
          ></textarea>
          {errors.description && (
            <p className="addtemp-error">{errors.description.message}</p>
          )}
        </div>

        {/* 🔹 Thumbnail Upload */}
        <div className="addtemp-thumbnail-section">
          <div className="addtemp-thumbnail-placeholder">
            {preview ? (
              <img src={preview} alt="Template Preview" className="addtemp-preview-img" />
            ) : (
              "No Image"
            )}
          </div>

          <input type="file" className="addtemp-upload-button" {...register("previewImg")} onChange={handleFileChange} />
          <p className="addtemp-image-size-info">
            Recommended size: 600×800px
          </p>
        </div>

        {/* 🔥 Submit Button */}
        <button type="submit" className="addtemp-submit-button">
          Submit Template
        </button>
      </form>
    </div>
  );
};

export default AddTemplate;
