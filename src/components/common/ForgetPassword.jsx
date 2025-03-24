import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const ForgetPassword = () => {

    const [email, setemail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(data)=>{
        data.preventDefault()

        try {
            const res = await axios.post("/forgetpassword", {email})

            if(res.data.message){
                toast.success('Reset link sent to your email!', {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                  });
          
                  setTimeout(() => {
                    navigate("/login");
                  }, 3000);
                
            }
        } catch (error) {
            console.error(error.response?.data || error.message); 
            toast.error('Failed to send reset email!', {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
              });
        }
    }
  return (
    <div>
       <div className="forgot-password-container">
      <ToastContainer />
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
    </div>
  )
}

export default ForgetPassword
