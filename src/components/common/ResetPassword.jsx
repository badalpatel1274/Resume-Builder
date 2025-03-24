import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

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
        <div>
            <ToastContainer />
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>New Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>
                <div>
                    <input type="submit" value="Reset Password" />
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
