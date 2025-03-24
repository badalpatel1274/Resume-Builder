import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserNavbar from './components/layout/UserNavbar'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import Admin from './components/common/Admin'
import UserForm from './components/layout/UserForm'
import HomePage from './components/common/HomePage'
import axios from 'axios'
import PrivateRoutes from './components/PrivateRoute'
import ResumePages from './components/pages/ResumePages'
// import OriginalResume from './components/pages/OriginalResume'
import UpdateResume from './components/pages/UpdateResume'
import ViewMyResume from './components/pages/ViewMyResume'
import AdminDashBoard from './components/admin/AdminDashBoard'
import ResetPassword from './components/common/ResetPassword'
import ForgetPassword from './components/common/ForgetPassword'
// import './App.css'

function App() {
  axios.defaults.baseURL = "http://localhost:5000"

  return (
    <>
      <UserNavbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgetPassword/>}/>

        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admindashboard' element={<AdminDashBoard/>}/>
        <Route path='' element={<PrivateRoutes />}>
        <Route path="/resume/form/:templateId" element={<UserForm/>} />
        </Route>
        <Route path="/resume" element={<ResumePages/>} />
        <Route path="/resume/:resumeId" element={<ViewMyResume/>} />

        <Route path="/updateresume/:id" element={<UpdateResume/>} />


      </Routes >

    </>

  )
}

export default App
