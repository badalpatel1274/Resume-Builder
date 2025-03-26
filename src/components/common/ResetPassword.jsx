import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import '../css/forgetReset.css'

const ResetPassword = () => {
    const { token } = useParams(); 
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        try {
            const obj = {
                token: token,
                password: data.password
            };

            const res = await axios.post("/resetpassword", obj);

            if (res.status === 200) {
                toast.success('Password reset successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                });

                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            toast.error('Failed to reset password!', {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            console.error(error);
        }
    };

    return (
        <div className="resetpass-container">
            <ToastContainer />
            <h1 className="resetpass-heading">Reset Password</h1>
            <form className="resetpass-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="resetpass-form-group">
                    <label className="resetpass-label">New Password</label>
                    <input
                        type="password"
                        className="resetpass-input"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="resetpass-error">{errors.password.message}</p>}
                </div>
                <div>
                    <input className="resetpass-button" type="submit" value="Reset Password" />
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;