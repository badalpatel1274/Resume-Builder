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
import AddTemplate from './components/admin/AddTemplate'
import AdminSidebar from './components/layout/AdminSidebar'
import AdminAllTemplate from './components/admin/AdminAllTemplate'
import AdminAllUsers from './components/admin/AdminAllUser'
import UserSidebar from './components/layout/UserSidebar'
import UserDashboard from './components/user/UserDashboard'
import UserResumes from './components/user/UserResume'
import UserProfile from './components/user/UserProfile'
import ResumePreview from './components/user/UserResumePreview'
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
        <Route path='/forgotpassword' element={<ForgetPassword />} />

        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/admin' element={<Admin />} />


        <Route path='/adminsidebar' element={<AdminSidebar />}>
          <Route path='addtemplate' element={<AddTemplate />} />
          <Route path='dashboard' element={<AdminDashBoard />} />
          <Route path='templateDashboard' element={<AdminAllTemplate />} />
          <Route path='allusers' element={<AdminAllUsers />} />
        </Route>

        <Route path="/user/account" element={<UserSidebar />}>
           <Route path="dashboard" element={<UserDashboard />} />
         <Route path="myresumes" element={<UserResumes />} />
         <Route path='profile' element={<UserProfile/>}/>

         
          {/* <Route path="create" element={<CreateResume />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="password" element={<ChangePassword />} />   */}
        </Route>
          <Route path='/preview/:resumeId' element={<ResumePreview/>}/>


        <Route path='' element={<PrivateRoutes />}>
          <Route path="/resume/form/:templateId" element={<UserForm />} />
        </Route>
        <Route path="/resume" element={<ResumePages />} />
        <Route path="/resume/:resumeId" element={<ViewMyResume />} />

        <Route path="/updateresume/:id" element={<UpdateResume />} />


      </Routes >

    </>

  )
}

export default App
