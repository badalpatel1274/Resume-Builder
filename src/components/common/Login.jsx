import React from 'react'
import '../css/common.css'
import { Link } from 'react-router-dom'
import { useForm, useFormState } from 'react-hook-form'

const Login = () => {
  const {register , handleSubmit , formState:{errors}}=useForm()
  const submitHandler = (data)=>{
        console.log(data);
        
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
    
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-text">Welcome back! Please enter your credentials to log in.</p>

      <form className="login-form"  onSubmit={handleSubmit(submitHandler)}>
        <div className="login-form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email"  {...register("email",validationSchema.emailValidator)} />
          <span style={{color:'red'}}>
            {
              errors.email?.message
            }
          </span>
        </div>

        <div className="login-form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" {...register("password",validationSchema.passwordValidator)} />
          <span style={{color:'red'}}>
            {
              errors.password?.message
            }
          </span>
        </div>

        <a href="#" className="login-forgot-password">Forgot Password?</a>

        <button type="submit" className="login-btn">Login</button>

        <p className="login-switch-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>

    </>
  )
}

export default Login
