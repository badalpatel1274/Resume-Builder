import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../css/useForm.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({ mode: "onTouched" });
  const [activeTab, setActiveTab] = useState("Personal");
const navigate = useNavigate()
  const submithandler = async (data) => {
    
    
    // const userData = JSON.parse(localStorage.getItem("id"));
    // const userId = userData.data;
    
    // if (!userData) {
      //   toast.error("User ID not found. Please log in again.");
      //   return;
      // }
      
      console.log(" User Data", data);
    const templateId = localStorage.getItem("selectedTemplateId")
    const userId = localStorage.getItem("id")
    data.userId = userId
    data.templateId = templateId

    // const formattedData = {
    //   ...data,
    //   userId: userId,
    //   templateId : templateId
    // };
   
   
// console.log(data.personal.profilePic[0].name)
  //  console.log(data.image[0])

    const formdata = new FormData();
    formdata.append("image",data.image[0])
    formdata.append("userId",data.userId)
    formdata.append("templateId",data.templateId)
    // formdata.append("personal.fullName",data.personal.fullName)
    // formdata.append("personal.email",data.personal.email)
    // formdata.append("personal.birthDate",data.personal.birthDate)
    // formdata.append("personal.phone",data.personal.phone)
    // formdata.append("personal.address",data.personal.address)
    // formdata.append("education.degree",data.education.degree)
    // formdata.append("education.university",data.education.university)
    // formdata.append("education.year",data.education.year)
    // formdata.append("education.cgpa",data.education.cgpa)
    // formdata.append("experience.jobTitle",data.experience.jobTitle)
    // formdata.append("experience.companyName",data.experience.companyName)
    // formdata.append("experience.year",data.experience.year)
    // formdata.append("experience.projectTitle",data.experience.projectTitle)
    // formdata.append("experience.projectDescription",data.experience.projectDescription)
    // formdata.append("skills.technical",data.skills.technical)
    // formdata.append("skills.soft",data.skills.soft)
    // formdata.append("skills.language",data.skills.language)
    // formdata.append("skills.interests",data.skills.interests)

    
// ✅ Convert Nested Objects to JSON Strings
formdata.append("personal", JSON.stringify(data.personal));
formdata.append("education", JSON.stringify(data.education));
formdata.append("experience", JSON.stringify(data.experience));
formdata.append("skills", JSON.stringify(data.skills));

    try {
      const res = await axios.post("/form/addinfo",formdata)
      console.log("Forms Details Data Sucessfully:", res.data)

      if (res.data.data.resumeId) {
        toast.success('Details added Sucessfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
       
        const resumeId = res.data.data.resumeId; 
        navigate(`/resume/${resumeId}`); 


      } else {
        toast.success('Something Error', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,  
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }

    } catch (error) {
      toast.error('Something Error', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Forms Eroor:", error)
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
    <div className="resume-container">
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <h2>Create Your Resume</h2>
      <p>Fill in your details to generate your professional resume</p>


      {/* Tabs (Disabled Click) */}
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
              <label>Job Title</label>
              <input type="text" {...register("experience.jobTitle",validationSchema.experience.jobTitle)} />
              <span style={{color:'red'}}>{errors.experience?.jobTitle?.message}</span>
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" {...register("experience.companyName")} />
              {/* <span style={{color:'red'}}>{errors.experience?.companyName?.message}</span> */}
            </div>

            <div className="form-group">
              <label>Year</label>
              <input type="text" {...register("experience.year")} />
              {/* <span>{errors.experience?.year?.message}</span> */}
            </div>

            <div className="form-group">
              <label>Project Title</label>
              <input type="text" {...register("experience.projectTitle",validationSchema.experience.projectTitle)} />
              <span>{errors.experience?.projectTitle?.message}</span>
            </div>

            <div className="form-group">
              <label>Project Description</label>
              <input type="text" {...register("experience.projectDescription")} />
              {/* <span>{errors.experience?.projectDescription?.message}</span> */}
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
  );
};

export default UserForm;
