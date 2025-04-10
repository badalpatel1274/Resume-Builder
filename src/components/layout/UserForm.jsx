import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../css/useForm.css';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash.isequal"

const UserForm = () => {
  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({ mode: "onTouched" });
  const [activeTab, setActiveTab] = useState("Personal");
  const [projectFields, setProjectFields] = useState(1)
  const [experienceFields, setExperienceFields] = useState(1);

  const navigate = useNavigate()
  useEffect(() => {
    const subscription = watch((value) => {
      const isDirty = !isEqual(value, {
        personal: {},
        education: {},
        experience: {},
        skills: {},
        image: undefined,
      });

      const handleBeforeUnload = (e) => {
        if (isDirty) {
          e.preventDefault();
          e.returnValue = ''; // This shows browser default prompt
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    });

    return () => subscription.unsubscribe();
  }, [watch]);

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

  const addMoreExperience = () => {
    if (experienceFields < 3) {
      setExperienceFields(prev => prev + 1);
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
    <div className="userform-container">
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
      <h2 className="userform-heading">Create Your Resume</h2>
      <p className="userform-subheading">Fill in your details to generate your professional resume</p>

      {/* Tabs (Disabled Click) */}
      <div className="userform-tabs">
        {["Personal", "Education", "Experience", "Skills"].map((tab) => (
          <button key={tab} className={activeTab === tab ? "userform-tab active" : "userform-tab"} disabled>
            {tab}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <form className="userform-form" onSubmit={handleSubmit(submithandler)}>
        <div className="userform-group">
          <label className="userform-label">Profile Img</label>
          <input className="userform-input" type="file" {...register("image")} />
        </div>

        {activeTab === "Personal" && (
          <>
            <div className="userform-group">
              <label className="userform-label">Full Name</label>
              <input className="userform-input" type="text" {...register("personal.fullName", validationSchema.personal.fullName)} placeholder="Enter your full name" />
              <span className="userform-error">{errors.personal?.fullName?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">About Me</label>
              <input className="userform-input" type="textarea" {...register("personal.aboutMe", validationSchema.personal.aboutMe)} placeholder="Tell us about yourself" />
              <span className="userform-error">{errors.personal?.aboutMe?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Job Title</label>
              <input className="userform-input" type="text" {...register("personal.jobTitle", validationSchema.personal.jobTitle)} placeholder="Enter your job title" />
              <span className="userform-error">{errors.personal?.jobTitle?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Email</label>
              <input className="userform-input" type="email" {...register("personal.email", validationSchema.personal.email)} placeholder="Enter your email" />
              <span className="userform-error">{errors.personal?.email?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Birth Date</label>
              <input className="userform-input" type="text" {...register("personal.birthDate", validationSchema.personal.birthDate)} placeholder="DD/MM/YYYY" />
              <span className="userform-error">{errors.personal?.birthDate?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Phone</label>
              <input className="userform-input" type="number" {...register("personal.phone", validationSchema.personal.phone)} placeholder="Enter your phone number" />
              <span className="userform-error">{errors.personal?.phone?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Address</label>
              <input className="userform-input" type="textArea" {...register("personal.address")} placeholder="Enter your address" />
            </div>
          </>
        )}

        {/* Education */}
        {activeTab === "Education" && (
          <>
            <div className="userform-group">
              <label className="userform-label">Degree</label>
              <input className="userform-input" type="text" {...register("education.degree", validationSchema.education.degree)} placeholder="Enter your degree" />
              <span className="userform-error">{errors.education?.degree?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">University</label>
              <input className="userform-input" type="text" {...register("education.university", validationSchema.education.university)} placeholder="Enter university name" />
              <span className="userform-error">{errors.education?.university?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Year of Passing</label>
              <input className="userform-input" type="number" {...register("education.year", validationSchema.education.year)} placeholder="Year of passing" />
              <span className="userform-error">{errors.education?.year?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">CGPA</label>
              <input className="userform-input" type="number" {...register("education.cgpa")} placeholder="Enter your CGPA" />
            </div>
          </>
        )}

        {/* Experience */}
        {activeTab === "Experience" && (
          <>
            {[...Array(experienceFields)].map((_, index) => (
              <div key={index} className="userform-group">
                <label className="userform-label">Company Name {index + 1} (Optional)</label>
                <input
                  className="userform-input"
                  type="text"
                  {...register(`experience.items.${index}.companyName`)}
                  placeholder="Company name"
                />

                <label className="userform-label">Company Experience {index + 1} (Optional)</label>
                <input
                  className="userform-input"
                  type="text"
                  {...register(`experience.items.${index}.companyExp`)}
                  placeholder="Company experience (e.g., 2 years)"
                />

                <label className="userform-label">Job Description {index + 1} (Optional)</label>
                <textarea
                  className="userform-textarea"
                  {...register(`experience.items.${index}.jobDescription`)}
                  placeholder="Describe your job role in 300 characters"
                  style={{
                    borderColor:
                      watch(`experience.items.${index}.jobDescription`)?.length > 300 ? "red" : "",
                  }}
                />
                <p
                  className="userform-charcount"
                  style={{
                    color:
                      watch(`experience.items.${index}.jobDescription`)?.length > 300
                        ? "red"
                        : "white",
                  }}
                >
                  {watch(`experience.items.${index}.jobDescription`)?.length || 0}/300
                </p>
              </div>
            ))}

            {experienceFields < 5 && (
              <button
                type="button"
                onClick={addMoreExperience}
                className="userform-add-project-btn" // You can change class if needed
              >
                + Add More Experience
              </button>
            )}


            {[...Array(projectFields)].map((_, index) => (
              <div key={index} className="userform-group">
                <label className="userform-label">Project Title {index + 1} (Optional)</label>
                <input className="userform-input" type="text" {...register(`experience.projects.${index}.title`)} placeholder="Enter your project name" />

                <label className="userform-label">Project Description {index + 1} (Optional)</label>
                <textarea
                  className="userform-textarea"
                  {...register(`experience.projects.${index}.description`)}
                  placeholder="Describe your project in 200 Character"
                  style={{ borderColor: watch(`experience.projects.${index}.description`)?.length > 200 ? "red" : "" }}
                />
                <p
                  className="userform-charcount"
                  style={{
                    color: watch(`experience.projects.${index}.description`)?.length > 200 ? "red" : "white",
                  }}
                >
                  {watch(`experience.projects.${index}.description`)?.length}/200
                </p>
              </div>
            ))}

            {projectFields < 3 && (
              <button type="button" onClick={addMoreProject} className="userform-add-project-btn">
                + Add More Project
              </button>
            )}

           
          </>
        )}

        {/* Skills */}
        {activeTab === "Skills" && (
          <>
            <div className="userform-group">
              <label className="userform-label">Technical Skills</label>
              <input className="userform-input" type="text" {...register("skills.technical", validationSchema.skills.technical)} placeholder="List technical skills" />
              <span className="userform-error">{errors.skills?.technical?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Soft Skills</label>
              <input className="userform-input" type="text" {...register("skills.soft", validationSchema.skills.soft)} placeholder="List soft skills" />
              <span className="userform-error">{errors.skills?.soft?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Languages</label>
              <input className="userform-input" type="text" {...register("skills.language", validationSchema.skills.language)} placeholder="Languages you know" />
              <span className="userform-error">{errors.skills?.language?.message}</span>
            </div>

            <div className="userform-group">
              <label className="userform-label">Interest</label>
              <input className="userform-input" type="text" {...register("skills.interests", validationSchema.skills.interests)} placeholder="Your interests" />
              <span className="userform-error">{errors.skills?.interests?.message}</span>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="userform-buttons">
          {activeTab !== "Personal" && <button className="userform-prev-btn" type="button" onClick={prevStep}>Previous</button>}
          {activeTab === "Skills" ? (
            <button className="userform-next-btn" type="submit">Submit</button>
          ) : (
            <button className="userform-next-btn" type="button" onClick={nextStep}>Next</button>
          )}
        </div>
      </form>
    </div>

  );
};

export default UserForm;
