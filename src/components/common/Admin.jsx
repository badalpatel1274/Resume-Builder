import React, { useState } from 'react'
import '../css/admin.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

  const {register,handleSubmit,formState:{errors}} =useForm()
const [loginerror, setloginerror] = useState("")
const navigate = useNavigate()
  const submitHandler = (data)=>{
    console.log(data);
    const adminEmail = "badalsobhashana@gmail.com"
    const adminPass = "badal1234"
    
    if(data.email !== adminEmail || data.password !== adminPass){
      setloginerror("Invalid email or password")
      alert("Invalid Error")
      return
    }
    console.log("admin logged in ",data)
    setloginerror("")
    navigate("/adminsidebar/dashboard")
  }

  const validationSchema = {
    emailValidator :{
        required:{
            value:true,
            message:"*Email Field is required"
        },
        pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"Invalid Email Address"
        }
    },
    passwordValidator : {
        required:{
            value:true,
            message:"*password is required"
        },

    }
}

  return (
  <>
  
  <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      <p className="admin-login-text">Enter your credentials to access the dashboard.</p>

      <form className="admin-login-form"  onSubmit={handleSubmit(submitHandler)}>
        <div className="admin-login-form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email"  {...register("email",validationSchema.emailValidator)}/>
          <span style={{color:'red'}}>
            {
              errors.email?.message
            }
          </span>
        </div>

        <div className="admin-login-form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password"  {...register("password",validationSchema.passwordValidator)}/>
          <span style={{color:'red'}}>
            {
              errors.password?.message
            }
          </span>
        </div>

        <div className="admin-login-options">
          {/* <label className="admin-login-remember">
            <input type="checkbox" /> Remember Me
          </label> */}
          <a href="#" className="admin-login-forgot">Forgot Password?</a>
        </div>

        <button type="submit" className="admin-login-btn">Login</button>
      </form>
    </div>
  
  </>
  )
}

export default Admin
