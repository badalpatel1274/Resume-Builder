import React from 'react';
import '../css/common.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Bounce, Slide, toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("/login", data);
      const user = res.data
      console.log("Success:", res.data);
      // console.log(res.data)
      if (res.status === 200) {
        toast.success('Login Sucessfully', {
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

        // localStorage.setItem("user",JSON.stringify(user) )

        localStorage.setItem("id", res.data.data._id)
        localStorage.setItem("role", res.data.data.roleId.roleName)

        setTimeout(() => {
          if (res.data.data.roleId.roleName === "User") {
            navigate("/");
          }
        }, 4000);

      } else {
        toast.success('Something Error', {
          position: "top-center",
          autoClose: 5000,
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
      toast.error('Something Wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Axios error:", error);
    }
  };

  const validationSchema = {
    emailValidator: {
      required: { value: true, message: "*Email Field is required" },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Email Address"
      }
    },
    passwordValidator: {
      required: { value: true, message: "*Password is required" }
    }
  };

  return (
    <>
    
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
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <p className="login-text">Welcome back! Please enter your credentials to log in.</p>

        <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
          <div className="login-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" {...register("email", validationSchema.emailValidator)} />
            <span style={{ color: 'red' }}>{errors.email?.message}</span>
          </div>

          <div className="login-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" {...register("password", validationSchema.passwordValidator)} />
            <span style={{ color: 'red' }}>{errors.password?.message}</span>
          </div>

          <a href="#" className="login-forgot-password">Forgot Password?</a>

          <button type="submit" className="login-btn">Login</button>

          <p className="login-switch-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
