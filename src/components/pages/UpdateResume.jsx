import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateResume = () => {
  const { id: resumeId } = useParams();
  console.log("resumeId:", resumeId);
  
  const [formdata, setFormdata] = useState(null)
  const { register, handleSubmit, formState: { errors }, trigger,reset} = useForm();
  const [activeTab, setActiveTab] = useState("Personal");
  const [userFormId, setUserFormId] = useState(null);
  
  const fetchUserFormId = async () => {
    try {
      const response = await axios.get(`/resume/${resumeId}`);
      console.log("UserFormId API Response:", response.data);
  
      if (response.data?.data?.userFormId && response.data.data.userFormId._id) {
        setUserFormId(response.data.data.userFormId._id); // ✅ _id extract kar diya
      } else {
        console.error("Invalid response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching userFormId:", error.response?.data || error.message);
    }
  };
  

  const fetchFormData = async () => {
    if (!userFormId || typeof userFormId !== "string") {
      console.error("Invalid userFormId:", userFormId);
      return;
    }
  
    try {
      console.log("Fetching form data for userFormId:", userFormId);
      const response = await axios.get(`form/getbyidform/${userFormId}`);
      console.log("Fetched Data:", response.data);
      setFormdata(response.data)
     
    } catch (error) {
      console.error("Error fetching form data:", error.response?.data || error.message);
    }
  };
  
  useEffect(() => {
    if (resumeId) {
      fetchUserFormId();
    }
  }, [resumeId]);

  // Fetch form data when userFormId is available
  useEffect(() => {
    if (userFormId) {
      fetchFormData(userFormId);
    }
  }, [userFormId]);

  useEffect(() => {
    if (formdata) {
      console.log("Setting Form Data in Form:", formdata.data);
      reset(formdata.data); 
    }
  }, [formdata, reset]);

const navigate  = useNavigate()
const submithandler =async (data)=>{
  const templateId = localStorage.getItem("selectedTemplateId")
 const userId = localStorage.getItem("id")
   data.userId = userId
   data.templateId = templateId
  try {
    console.log("Updating form with userFormId:", userFormId, "Data:", data);
    const res = await axios.put(`/form/updateform/${userFormId}`,data)
    console.log(res.data)
    navigate(`/resume/${resumeId}`); 
  } catch (error) {
    console.error("Error updating resume:", error);
  }
 
}
      
  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (activeTab === "Personal") setActiveTab("Education");
      else if (activeTab === "Education") setActiveTab("Experience");
      else if (activeTab === "Experience") setActiveTab("Skills");
    }
  };


  const prevStep = () => {
    if (activeTab === "Skills") setActiveTab("Experience");
    else if (activeTab === "Experience") setActiveTab("Education");
    else if (activeTab === "Education") setActiveTab("Personal");
  };

//validator

const validationSchema = {
  personal: {
    fullName: { required: "*Full Name is required" },
    email: {
      required: "*Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Email Address",
      },
    },
    birthDate: { required: "*Birth Date is required" },
    phone: {
      required: "*Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid Phone Number (10 digits required)",
      },
    },
  },

  education: {
    degree: { required: "*Degree is required" },
    university: { required: "*University is required" },
    year: {
      required: "*Year of Passing is required",
      pattern: {
        value: /^[0-9]{4}$/,
        message: "Invalid Year (4 digits required)",
      },
    },
  },

  experience: {
    jobTitle: { required: "*Job Title is required" },
    companyName: { required: "*Company Name is required" },
    projectTitle: { required: "*Project Title is required" },
    projectDescription: { required: "*Project Description is required" },
    year: {
      required: "*Year is required",
      pattern: {
        value: /^[0-9]{4}$/,
        message: "Invalid Year (4 digits required)",
      },
    },
  },

  skills: {
    technical: { required: "*Technical Skills are required" },
    soft: { required: "*Soft Skills are required" },
    language: { required: "*Language is required" },
    interests: { required: "*Interests are required" },
  },
};



  return (
    <div>
 <h2>Update Your Resume</h2>
      {/* <p>Fill in your details to generate your professional resume</p> */}


      <div className="tabs">
        {["Personal", "Education", "Experience", "Skills"].map((tab) => (
          <button key={tab} className={activeTab === tab ? "tab active" : "tab"} disabled>
            {tab}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <form className="resume-form" onSubmit={handleSubmit(submithandler)}>
      <div className="form-group">
              <label>Profile Img</label>
              <input type="file" {...register("image")} />
            </div>
        {/* Personal Info */}
        {activeTab === "Personal" && (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" {...register("personal.fullName",validationSchema.personal.fullName)} />
              <span style={{color:'red'}}>{errors.personal?.fullName?.message}</span>
            </div>

            <div className="form-group">
              <label>About Me</label>
              <input type="textarea" {...register("personal.aboutMe",validationSchema.personal.aboutMe)} />
              <span style={{color:'red'}}>{errors.personal?.aboutMe?.message}</span>
            </div>
           
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" {...register("personal.jobTitle",validationSchema.personal.jobTitle)} />
              <span  style={{color:'red'}}>{errors.personal?.jobTitle?.message}</span>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" {...register("personal.email",validationSchema.personal.email)} />
              <span  style={{color:'red'}}>{errors.personal?.email?.message}</span>
            </div>

            <div className="form-group">
              <label>Birth Date</label>
              <input type="text" {...register("personal.birthDate", validationSchema.personal.birthDate)} />
              <span style={{color:'red'}}>{errors.personal?.birthDate?.message}</span>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="number" {...register("personal.phone", validationSchema.personal.phone)} />
              <span style={{color:'red'}}>{errors.personal?.phone?.message}</span>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="textArea" {...register("personal.address")} />
              {/* <span style={{color:'red'}}>{errors.personal?.address?.message}</span> */}
            </div>
          </>
        )}

        {/* Education */}
        {activeTab === "Education" && (
          <>
            <div className="form-group">
              <label>Degree</label>
              <input type="text" {...register("education.degree",validationSchema.education.degree )} />
              <span style={{color:'red'}}>{errors.education?.degree?.message}</span>
            </div>

            <div className="form-group">
              <label>University</label>
              <input type="text" {...register("education.university", validationSchema.education.university)} />
              <span style={{color:'red'}}>{errors.education?.university?.message}</span>
            </div>

            <div className="form-group">
              <label>Year of Passing</label>
              <input type="number" {...register("education.year", validationSchema.education.year)} />
              <span style={{color:'red'}}>{errors.education?.year?.message}</span>
            </div>

            <div className="form-group">
              <label>CGPA</label>
              <input type="number" {...register("education.cgpa")} />
              {/* <span style={{color:'red'}}>{errors.education?.cgpa?.message}</span> */}
            </div>
          </>
        )}

        {/* Experience */}
        {activeTab === "Experience" && (
          <>
           

            <div className="form-group">
              <label>Company Name (Optional)</label>
              <input type="text" {...register("experience.companyName")} />
              {/* <span style={{color:'red'}}>{errors.experience?.companyName?.message}</span> */}
            </div>

            <div className="form-group">
              <label>Company Experience (Optional)</label>
              <input type="text" {...register("experience.companyExp")} />
              {/* <span>{errors.experience?.year?.message}</span> */}
            </div>

            <div className="form-group">
              <label>Job Description (Optional)</label>
              <input type="text" {...register("experience.jobDescription")} />
            </div>

            <div className="form-group">
              <label>Project Title (Optional)</label>
              <input type="text" {...register("experience.projectTitle")} />
            </div>

            <div className="form-group">
              <label>Project Description (Optional)</label>
              <input type="text" {...register("experience.projectDescription")} />
            </div>
          </>
        )}

        {/* Skills */}
        {activeTab === "Skills" && (
          <>
            <div className="form-group">
              <label>Technical Skills</label>
              <input type="text" {...register("skills.technical",validationSchema.skills.technical)} />
              <span>{errors.skills?.technical?.message}</span>
            </div>

            <div className="form-group">
              <label>Soft Skills</label>
              <input type="text" {...register("skills.soft",validationSchema.skills.soft)} />
              <span style={{color:'red'}}>{errors.skills?.soft?.message}</span>
            </div>

            <div className="form-group">
              <label>Languages</label>
              <input type="text" {...register("skills.language",validationSchema.skills.language)} />
              <span>{errors.skills?.language?.message}</span>
            </div>

            <div className="form-group">
              <label>Interest</label>
              <input type="text" {...register("skills.interests",validationSchema.skills.interests)} />
              <span>{errors.skills?.interests?.message}</span>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="form-buttons">
          {activeTab !== "Personal" && <button className="prev-btn" type="button" onClick={prevStep}>Previous</button>}
          {activeTab === "Skills" ? <button className="next-btn" type="submit">Submit</button> : <button className="next-btn" type="button" onClick={nextStep}>Next</button>}
        </div>
      </form>
    </div>  
  )
}

export default UpdateResume
