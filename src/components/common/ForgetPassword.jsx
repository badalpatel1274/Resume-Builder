import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import '../css/forgetReset.css'

const ForgetPassword = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (data) => {
        data.preventDefault()

        try {
            const res = await axios.post("/forgetpassword", { email })

            if (res.data.message) {
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
        <div className="forgetpass-container">
            <ToastContainer />
            <h2 className="forgetpass-heading">Forgot Password</h2>
            <p className="forgetpass-text">Enter your email to receive a password reset link.</p>
            <form className="forgetpass-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="forgetpass-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="forgetpass-button" type="submit">Send Reset Link</button>
            </form>
        </div>
    )
}

export default ForgetPassword
