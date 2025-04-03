import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../css/useForm.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({ mode: "onTouched" });
  const [activeTab, setActiveTab] = useState("Personal");
  const [projectFields, setProjectFields] = useState(1)

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
    formdata.append("image", data.image[0])
    formdata.append("userId", data.userId)
    formdata.append("templateId", data.templateId)



    // ✅ Convert Nested Objects to JSON Strings
    formdata.append("personal", JSON.stringify(data.personal));
    formdata.append("education", JSON.stringify(data.education));
    formdata.append("experience", JSON.stringify(data.experience));
    formdata.append("skills", JSON.stringify(data.skills));

    try {
      const res = await axios.post("/form/addinfo", formdata)
      console.log("Forms Details Data Sucessfully:", res.data)

      if (res.data.data.resumeId) {
        toast.success('Details added Sucessfully', {
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

        const resumeId = res.data.data.resumeId;
        setTimeout(() => {
          navigate(`/resume/${resumeId}`);
        }, 3000);



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


  const addMoreProject = () => {
    if (projectFields < 3) {
      setProjectFields(projectFields + 1);
    }
  };

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
      aboutMe: { required: "*About Me is required" },
      jobTitle: { required: "*Job Title is required" },

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
        autoClose={2000}
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
              <input type="text" {...register("personal.fullName", validationSchema.personal.fullName)}  placeholder="Enter your full name"/>
              <span style={{ color: 'red' }}>{errors.personal?.fullName?.message}</span>
            </div>

            <div className="form-group">
              <label>About Me</label>
              <input type="textarea" {...register("personal.aboutMe", validationSchema.personal.aboutMe)}  placeholder="Tell us about yourself"/>
              <span style={{ color: 'red' }}>{errors.personal?.aboutMe?.message}</span>
            </div>

            <div className="form-group">
              <label>Job Title</label>
              <input type="text" {...register("personal.jobTitle", validationSchema.personal.jobTitle)}  placeholder="Enter your job title"/>
              <span style={{ color: 'red' }}>{errors.personal?.jobTitle?.message}</span>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" {...register("personal.email", validationSchema.personal.email)}placeholder="Enter your email" />
              <span style={{ color: 'red' }}>{errors.personal?.email?.message}</span>
            </div>

            <div className="form-group">
              <label>Birth Date</label>
              <input type="text" {...register("personal.birthDate", validationSchema.personal.birthDate)}  placeholder="DD/MM/YYYY"/>
              <span style={{ color: 'red' }}>{errors.personal?.birthDate?.message}</span>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="number" {...register("personal.phone", validationSchema.personal.phone)}placeholder="Enter your phone number"  />
              <span style={{ color: 'red' }}>{errors.personal?.phone?.message}</span>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="textArea" {...register("personal.address")}  placeholder="Enter your address" />
              {/* <span style={{color:'red'}}>{errors.personal?.address?.message}</span> */}
            </div>
          </>
        )}

        {/* Education */}
        {activeTab === "Education" && (
          <>
            <div className="form-group">
              <label>Degree</label>
              <input type="text" {...register("education.degree", validationSchema.education.degree)} placeholder="Enter your degree"  />
              <span style={{ color: 'red' }}>{errors.education?.degree?.message}</span>
            </div>

            <div className="form-group">
              <label>University</label>
              <input type="text" {...register("education.university", validationSchema.education.university)} placeholder="Enter university name"  />
              <span style={{ color: 'red' }}>{errors.education?.university?.message}</span>
            </div>

            <div className="form-group">
              <label>Year of Passing</label>
              <input type="number" {...register("education.year", validationSchema.education.year)} placeholder="Year of passing"  />
              <span style={{ color: 'red' }}>{errors.education?.year?.message}</span>
            </div>

            <div className="form-group">
              <label>CGPA</label>
              <input type="number" {...register("education.cgpa")}  placeholder="Enter your CGPA"/>
              {/* <span style={{color:'red'}}>{errors.education?.cgpa?.message}</span> */}
            </div>
          </>
        )}

        {/* Experience */}
        {activeTab === "Experience" && (
          <>
            <div className="form-group">
              <label>Company Name (Optional)</label>
              <input type="text" {...register("experience.companyName")}placeholder="Company name" />
            </div>

            <div className="form-group">
              <label>Company Experience (Optional)</label>
              <input type="text" {...register("experience.companyExp")}  placeholder="Company experience (e.g., 2 years)"/>
            </div>

            <div className="form-group">
              <label>Job Description (Optional)</label>
              <textarea
                {...register("experience.jobDescription")} placeholder="Describe your job role in 300 character" 
                style={{
                  borderColor: watch("experience.jobDescription")?.length > 300 ? "red" : "",
                }}
              />

              <p
                style={{
                  color: watch("experience.jobDescription")?.length > 200 ? "red" : "white",
                }}
              >
                {watch("experience.jobDescription")?.length}/300
              </p>

            </div>

            {/* Projects - Initially 1, Click to Add More */}
            {[...Array(projectFields)].map((_, index) => (
              <div key={index} className="form-group">
                <label>Project Title {index + 1} (Optional)</label>
                <input type="text" {...register(`experience.projects.${index}.title`)}  placeholder="Enter your project name" />

                <label>Project Description {index + 1} (Optional)</label>

                <textarea
                  {...register(`experience.projects.${index}.description`)}  placeholder="Describe your project in 200 Character"
                  style={{
                    borderColor: watch(`experience.projects.${index}.description`)?.length > 200 ? "red" : "",
                  }}
                />

                <p
                  style={{
                    color: watch(`experience.projects.${index}.description`)?.length > 200 ? "red" : "white",
                  }}
                >
                  {watch(`experience.projects.${index}.description`)?.length}/200
                </p>

              </div>
            ))}

            {/* Show "Add More Project" button only if less than 3 projects */}
            {projectFields < 3 && (
              <button type="button" onClick={addMoreProject} className="add-project-btn">
                + Add More Project
              </button>
            )}

            <div className="form-group">
              <label>Total Experience (Optional)</label>
              <input type="text" {...register("experience.totalExperience")} placeholder="Total work experience (e.g., 5 years)"  />
            </div>
          </>
        )}


        {/* Skills */}
        {activeTab === "Skills" && (
          <>
            <div className="form-group">
              <label>Technical Skills</label>
              <input type="text" {...register("skills.technical", validationSchema.skills.technical)}  placeholder="List technical skills"/>
              <span>{errors.skills?.technical?.message}</span>
            </div>

            <div className="form-group">
              <label>Soft Skills</label>
              <input type="text" {...register("skills.soft", validationSchema.skills.soft)} placeholder="List soft skills"   />
              <span style={{ color: 'red' }}>{errors.skills?.soft?.message}</span>
            </div>

            <div className="form-group">
              <label>Languages</label>
              <input type="text" {...register("skills.language", validationSchema.skills.language)}placeholder="Languages you know" />
              <span>{errors.skills?.language?.message}</span>
            </div>

            <div className="form-group">
              <label>Interest</label>
              <input type="text" {...register("skills.interests", validationSchema.skills.interests)} placeholder="Your interests" />
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
